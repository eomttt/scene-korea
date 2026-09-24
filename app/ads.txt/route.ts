import { buildAdsTxt, getAdsenseConfig } from "@/domains/advertising/utils/adsense-config";

export function GET() {
  const text = buildAdsTxt(getAdsenseConfig().client);
  return new Response(text ?? "Advertising is not configured.\n", { status: text ? 200 : 404, headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
