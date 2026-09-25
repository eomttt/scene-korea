import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/common/utils/site-url";

export default function robots(): MetadataRoute.Robots {
  if (process.env.VERCEL_ENV === "preview") return { rules: { userAgent: "*", disallow: "/" } };
  return { rules: { userAgent: "*", allow: "/", disallow: ["/api/"] }, sitemap: `${getSiteUrl()}/sitemap.xml` };
}
