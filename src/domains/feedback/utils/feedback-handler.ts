import { z } from "zod";
import { feedbackSchema, type Feedback } from "./feedback-schema";

const maxBodyBytes = 12_000;
const verificationSchema = z.object({ success: z.boolean(), hostname: z.string().optional(), action: z.string().optional() });

function getWebhookUrl() {
  const value = process.env.SLACK_FEEDBACK_WEBHOOK_URL;
  if (!value) return null;
  try {
    const url = new URL(value);
    return url.protocol === "https:" && url.hostname === "hooks.slack.com" && /^\/services\/[^/]+\/[^/]+\/[^/]+$/.test(url.pathname) && !url.username && !url.password && !url.search && !url.hash ? url.href : null;
  } catch { return null; }
}

export function getFeedbackAvailability() {
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";
  const hasChallenge = Boolean(siteKey && process.env.TURNSTILE_SECRET_KEY);
  return { available: Boolean(getWebhookUrl()), siteKey: hasChallenge ? siteKey : "" };
}

export function buildSlackMessage(feedback: Feedback) {
  const fields = [
    ["Request", feedback.type === "scene" ? "Add a scene" : "Add a title"],
    ["Title", feedback.title],
    ["Scene or idea", feedback.description],
    ["Episode / time", feedback.episode],
    ["Reference", feedback.referenceUrl],
    ["Reply email", feedback.email],
  ];
  return {
    text: "New Scene Korea request",
    blocks: [{ type: "header", text: { type: "plain_text", text: "Scene Korea · new request" } }, ...fields.filter(([, value]) => value).map(([label, value]) => ({ type: "section", text: { type: "plain_text", text: `${label}\n${value}` } }))],
    unfurl_links: false,
    unfurl_media: false,
  };
}

function reply(message: string, status: number) {
  return Response.json({ message }, { status, headers: { "Cache-Control": "no-store" } });
}

async function readBody(request: Request) {
  const reader = request.body?.getReader();
  if (!reader) return "";
  const decoder = new TextDecoder();
  let length = 0;
  let body = "";
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      length += value.byteLength;
      if (length > maxBodyBytes) { await reader.cancel(); return null; }
      body += decoder.decode(value, { stream: true });
    }
    return body + decoder.decode();
  } finally { reader.releaseLock(); }
}

export async function handleFeedback(request: Request, verifyBrowser?: () => Promise<boolean>) {
  const origin = request.headers.get("origin");
  if (origin !== new URL(request.url).origin) return reply("Please send your request from this website.", 403);
  if (request.headers.get("content-type")?.split(";")[0].trim().toLowerCase() !== "application/json") return reply("Please send a valid request.", 415);
  if (Number(request.headers.get("content-length")) > maxBodyBytes) return reply("Your request is too long.", 413);

  let body: string | null;
  try { body = await readBody(request); } catch { return reply("Please try sending your request again.", 400); }
  if (body === null) return reply("Your request is too long.", 413);
  let input: unknown;
  try { input = JSON.parse(body); } catch { return reply("Please send a valid request.", 400); }
  const result = feedbackSchema.safeParse(input);
  if (!result.success) return reply("Please check the title, scene description and links.", 400);

  const webhook = getWebhookUrl();
  const { available, siteKey } = getFeedbackAvailability();
  if (!available || !webhook) return reply("The request box isn’t open yet. Please come back soon.", 503);

  const production = process.env.VERCEL_ENV === "production" || process.env.NODE_ENV === "production";
  if (production && !verifyBrowser) return reply("Verification is unavailable. Please try again later.", 503);
  if (verifyBrowser) {
    try {
      if (!await verifyBrowser()) return reply("We couldn’t verify this browser. Please reload the page and try again.", 403);
    } catch { return reply("Verification is unavailable. Please try again later.", 503); }
  }
  try {
    if (siteKey) {
      if (!result.data.token) return reply("Please complete the verification.", 400);
      const verification = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", { method: "POST", body: new URLSearchParams({ secret: process.env.TURNSTILE_SECRET_KEY ?? "", response: result.data.token }), signal: AbortSignal.timeout(7000) });
      if (!verification.ok) return reply("Verification is unavailable. Please try again later.", 502);
      const outcome = verificationSchema.safeParse(await verification.json());
      if (!outcome.success || !outcome.data.success || outcome.data.hostname !== new URL(origin).hostname || outcome.data.action !== "feedback") return reply("Verification expired. Please verify again.", 400);
    }
    const response = await fetch(webhook, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(buildSlackMessage(result.data)), signal: AbortSignal.timeout(7000), redirect: "error" });
    if (!response.ok || (await response.text()).trim() !== "ok") return reply("We couldn’t deliver your request. Please try again later.", 502);
    return reply("Your request is with us. Thank you for helping shape the next route.", 200);
  } catch { return reply("We couldn’t confirm delivery. Please try again later.", 502); }
}
