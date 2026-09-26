import type { MetadataRoute } from "next";
import { dramaRoutes } from "@/domains/drama/utils/drama-routes";
import { getSiteUrl } from "@/common/utils/site-url";
import { getContentModifiedDate, seoContentUpdatedAt } from "@/common/utils/seo";
import { titleGuides } from "@/domains/drama/utils/title-guides";
import { getImageUrl } from "@/domains/drama/utils/image-assets";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = getSiteUrl();
  return [
    ...["", "/about", "/privacy", "/filming-locations"].map((path) => ({
      url: `${origin}${path}`,
      lastModified: seoContentUpdatedAt,
    })),
    ...titleGuides.map((guide) => ({
      url: `${origin}/filming-locations/${guide.slug}`,
      lastModified: guide.routes.reduce((latest, route) => getContentModifiedDate(route.checkedAt) > latest ? getContentModifiedDate(route.checkedAt) : latest, seoContentUpdatedAt),
    })),
    ...dramaRoutes.map((route) => ({
      url: `${origin}/stories/${route.id}`,
      lastModified: getContentModifiedDate(route.checkedAt),
      images: [...new Set([route.image, route.placeImage].filter((image): image is string => Boolean(image)))].map(getImageUrl),
    })),
  ];
}
