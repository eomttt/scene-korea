import type { NextConfig } from "next";
import { withBotId } from "botid/next/config";
import { productionSiteUrl } from "./src/common/utils/site-url";

const nextConfig: NextConfig = {
  poweredByHeader: false,
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
