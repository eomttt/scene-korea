import type { NextConfig } from "next";
import { withBotId } from "botid/next/config";
import { productionSiteUrl } from "./src/common/utils/site-url";
import imageAssets from "./src/domains/drama/data/image-assets.json";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    remotePatterns: [new URL("https://d9cx37rhzrr61yso.public.blob.vercel-storage.com/images/**")],
    maximumRedirects: 0,
  },
  async rewrites() {
    return Object.entries(imageAssets).map(([id, asset]) => ({
      source: `/images/${id}.webp`,
      destination: asset.url,
    }));
  },
  async redirects() {
    if (process.env.VERCEL_ENV !== "production") return [];
    return ["scene-korea-mauve.vercel.app", "scene-korea-hyuntae-eoms-projects.vercel.app", "scene-korea-git-main-hyuntae-eoms-projects.vercel.app"].map((host) => {
      const has: { type: "host"; value: string }[] = [{ type: "host", value: host.replaceAll(".", "\\.") }];
      return { source: "/:path*", has, destination: `${productionSiteUrl}/:path*`, permanent: true };
    });
  },
  async headers() {
    return [{ source: "/(.*)", headers: [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "X-Frame-Options", value: "DENY" },
    ] }];
  },
};

export default withBotId(nextConfig);
