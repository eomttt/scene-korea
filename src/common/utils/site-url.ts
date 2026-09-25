export const productionSiteUrl = "https://www.scene-trip.com";

export function getSiteUrl() {
  const configured = process.env.NEXT_PUBLIC_SITE_URL;
  if (configured) return new URL(configured).origin;
  if (process.env.NODE_ENV === "production") return productionSiteUrl;
  return "http://localhost:3000";
}
