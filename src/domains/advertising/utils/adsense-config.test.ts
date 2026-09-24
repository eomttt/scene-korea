import { afterEach, test } from "node:test";
import assert from "node:assert/strict";
import { buildAdsTxt, getAdsenseConfig } from "./adsense-config";

const originalEnv = process.env;
afterEach(() => { process.env = originalEnv; });

test("ads stay off until explicitly enabled with a valid publisher", () => {
  process.env = { ...originalEnv, NEXT_PUBLIC_ADSENSE_ENABLED: "false", NEXT_PUBLIC_ADSENSE_CLIENT_ID: "ca-pub-1234567890123456" };
  assert.equal(getAdsenseConfig().enabled, false);
  process.env.NEXT_PUBLIC_ADSENSE_ENABLED = "true";
  assert.equal(getAdsenseConfig().enabled, true);
  process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID = "invalid";
  assert.equal(getAdsenseConfig().enabled, false);
});
test("ads.txt never invents a publisher ID", () => {
  assert.equal(buildAdsTxt(null), null);
  assert.equal(buildAdsTxt("invalid"), null);
  assert.equal(buildAdsTxt("ca-pub-1234567890123456"), "google.com, pub-1234567890123456, DIRECT, f08c47fec0942fa0\n");
});
