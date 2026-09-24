import type { MetadataRoute } from "next";
import { dramaRoutes } from "@/domains/drama/utils/drama-routes";
import { getSiteUrl } from "@/common/utils/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/about", "/privacy", ...dramaRoutes.map((route) => `/stories/${route.id}`)].map((path) => ({ url: `${getSiteUrl()}${path}` }));
}
