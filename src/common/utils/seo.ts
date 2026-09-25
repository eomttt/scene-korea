import type { Metadata } from "next";

// Change this date only when shared page content or structured data changes.
export const seoContentUpdatedAt = "2026-09-25";

export function getContentModifiedDate(checkedAt: string) {
  return checkedAt > seoContentUpdatedAt ? checkedAt : seoContentUpdatedAt;
}

export function getPageMetadata({ title, description, path, image = "/share-image" }: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, type: "website", siteName: "Scene Korea", locale: "en_US", images: [{ url: image, width: 1200, height: 630, alt: title }] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}
