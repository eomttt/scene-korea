import imageAssets from "../data/image-assets.json";

const imageUrls = new Map(Object.entries(imageAssets).map(([id, asset]) => [id, asset.url]));

export function getImageUrl(imageId: string): string {
  const url = imageUrls.get(imageId);
  if (!url) throw new Error(`Image asset is missing: ${imageId}`);
  return url;
}
