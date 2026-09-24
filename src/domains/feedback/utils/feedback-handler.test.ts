import { afterEach, beforeEach, mock, test } from "node:test";
import assert from "node:assert/strict";
import { handleFeedback, buildSlackMessage } from "./feedback-handler";
import { feedbackSchema } from "./feedback-schema";

const originalEnv = process.env;
const valid = { type: "scene", title: "Lovely Runner", description: "The bicycle lesson", episode: "", referenceUrl: "", email: "", website: "", token: "" };
function request(body: unknown = valid, origin = "https://scene.example") {
  return new Request("https://scene.example/api/feedback", { method: "POST", headers: { origin, "Content-Type": "application/json" }, body: JSON.stringify(body) });
}
beforeEach(() => { process.env = { ...originalEnv, NODE_ENV: "test", VERCEL_ENV: "", SLACK_FEEDBACK_WEBHOOK_URL: "https://hooks.slack.com/services/test/test/test", NEXT_PUBLIC_TURNSTILE_SITE_KEY: "", TURNSTILE_SECRET_KEY: "" }; });
afterEach(() => { process.env = originalEnv; mock.restoreAll(); });

test("a scene needs a description but a new title does not", () => {
  assert.equal(feedbackSchema.safeParse({ ...valid, description: "   " }).success, false);
  assert.equal(feedbackSchema.safeParse({ ...valid, type: "title", description: "" }).success, true);
});
test("invalid links, extra destinations, oversized text and bots are rejected", () => {
  for (const input of [{ ...valid, referenceUrl: "javascript:alert(1)" }, { ...valid, channel: "another-channel" }, { ...valid, description: "a".repeat(2001) }, { ...valid, website: "spam" }]) assert.equal(feedbackSchema.safeParse(input).success, false);
});
test("Slack receives plain text even when a visitor includes mentions", () => {
  const feedback = feedbackSchema.parse({ ...valid, title: "<!channel> *hello*" });
  const payload = buildSlackMessage(feedback);
  assert.ok(payload.blocks.some((block) => block.text.text.includes("<!channel>")));
  assert.ok(payload.blocks.every((block) => block.text.type === "plain_text"));
  assert.equal(JSON.stringify(payload).includes("token"), false);
});
test("cross-origin and malformed requests never reach Slack", async () => {
  const fetchMock = mock.method(globalThis, "fetch", async () => new Response("ok"));
  assert.equal((await handleFeedback(request(valid, "https://attacker.example"))).status, 403);
  assert.equal((await handleFeedback(request({ ...valid, title: "" }))).status, 400);
  assert.equal(fetchMock.mock.callCount(), 0);
});
test("body size is enforced even without Content-Length", async () => {
  assert.equal((await handleFeedback(request({ ...valid, description: "한".repeat(5000) }))).status, 413);
});
test("missing or invalid webhook cannot report success", async () => {
  const fetchMock = mock.method(globalThis, "fetch", async () => new Response("ok"));
  for (const url of ["", "https://evil.example/services/a/b/c", "https://hooks.slack.com.evil.example/services/a/b/c"]) {
    process.env.SLACK_FEEDBACK_WEBHOOK_URL = url;
    assert.equal((await handleFeedback(request())).status, 503);
  }
  assert.equal(fetchMock.mock.callCount(), 0);
});
test("confirmed Slack delivery succeeds", async () => {
  const fetchMock = mock.method(globalThis, "fetch", async () => new Response("ok"));
  assert.equal((await handleFeedback(request())).status, 200);
  assert.equal(fetchMock.mock.callCount(), 1);
});
test("Slack rejection or ambiguous delivery never produces success", async () => {
  for (const response of [new Response("invalid_payload", { status: 400 }), new Response("not-ok"), new Response("rate_limited", { status: 429 })]) {
    mock.method(globalThis, "fetch", async () => response);
    assert.equal((await handleFeedback(request())).status, 502);
    mock.restoreAll();
  }
  mock.method(globalThis, "fetch", async () => { throw new Error("timeout"); });
  assert.equal((await handleFeedback(request())).status, 502);
});
test("production is closed until bot protection is configured", async () => {
  process.env = { ...process.env, NODE_ENV: "production" };
  const fetchMock = mock.method(globalThis, "fetch", async () => new Response("ok"));
  assert.equal((await handleFeedback(request())).status, 503);
  assert.equal(fetchMock.mock.callCount(), 0);
});
test("expired tokens and tokens for another host cannot deliver feedback", async () => {
  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY = "test-site-key";
  process.env.TURNSTILE_SECRET_KEY = "test-secret";
  for (const outcome of [{ success: false }, { success: true, hostname: "other.example", action: "feedback" }, { success: true, hostname: "scene.example", action: "other" }]) {
    const fetchMock = mock.method(globalThis, "fetch", async () => Response.json(outcome));
    assert.equal((await handleFeedback(request({ ...valid, token: "test-token" }))).status, 400);
    assert.equal(fetchMock.mock.callCount(), 1);
    mock.restoreAll();
  }
});
test("a valid challenge is verified before the Slack delivery", async () => {
  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY = "test-site-key";
  process.env.TURNSTILE_SECRET_KEY = "test-secret";
  const urls: string[] = [];
  mock.method(globalThis, "fetch", async (url: string) => {
    urls.push(url);
    return url.includes("siteverify") ? Response.json({ success: true, hostname: "scene.example", action: "feedback" }) : new Response("ok");
  });
  assert.equal((await handleFeedback(request({ ...valid, token: "test-token" }))).status, 200);
  assert.ok(urls[0].includes("siteverify"));
  assert.ok(urls[1].startsWith("https://hooks.slack.com/"));
});
