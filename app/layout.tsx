import type { Metadata } from "next";
import { SiteHeader } from "@/common/components/SiteHeader";
import { SiteFooter } from "@/common/components/SiteFooter";
import { getSiteUrl } from "@/common/utils/site-url";
import { AdSenseScript } from "@/domains/advertising/components/AdSenseScript";
import { getAdsenseConfig } from "@/domains/advertising/utils/adsense-config";
import { SavedNav } from "@/domains/drama/components/SavedNav";
import "./globals.css";

const { client } = getAdsenseConfig();
export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: { default: "Scene Korea · Follow your favourite K-drama", template: "%s · Scene Korea" },
  description: "Turn the K-dramas you love into a day in Korea. Explore real filming locations, memorable scenes and thoughtfully paced routes.",
  openGraph: { type: "website", siteName: "Scene Korea", locale: "en_US", images: [{ url: "/share-image", width: 1200, height: 630, alt: "Scene Korea · Follow your favourite K-drama" }] },
  twitter: { card: "summary_large_image" },
  robots: process.env.VERCEL_ENV === "preview" ? { index: false, follow: false } : { index: true, follow: true, googleBot: { "max-image-preview": "large" } },
  ...(client ? { other: { "google-adsense-account": client } } : {}),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#main-content">Skip to content</a><div className="site-shell"><SiteHeader savedLink={<SavedNav />} /><main id="main-content">{children}</main><SiteFooter /></div><AdSenseScript /></body></html>;
}
