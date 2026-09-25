import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import { SiteHeader } from "@/common/components/SiteHeader";
import { SiteFooter } from "@/common/components/SiteFooter";
import { getSiteUrl } from "@/common/utils/site-url";
import { AdSenseScript } from "@/domains/advertising/components/AdSenseScript";
import { getAdsenseConfig } from "@/domains/advertising/utils/adsense-config";
import { SavedNav } from "@/domains/drama/components/SavedNav";
import { SavedRoutesProvider } from "@/domains/drama/components/SavedRoutesProvider";
import { dramaRoutes } from "@/domains/drama/utils/drama-routes";
import { StructuredData } from "@/common/components/StructuredData";
import { SiteAnalytics } from "@/common/components/SiteAnalytics";
import "./globals.css";

const bodyFont = DM_Sans({ subsets: ["latin"], display: "swap", variable: "--font-dm-sans" });
const displayFont = DM_Serif_Display({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], display: "swap", variable: "--font-dm-serif" });
const { client } = getAdsenseConfig();
export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: { default: "Scene Korea · Follow your favourite screen stories", template: "%s · Scene Korea" },
  description: "Turn the Korean dramas and films you love into a day in Korea. Explore real filming locations, memorable scenes and thoughtfully paced routes.",
  openGraph: { type: "website", siteName: "Scene Korea", locale: "en_US", images: [{ url: "/share-image", width: 1200, height: 630, alt: "Scene Korea · Follow your favourite screen stories" }] },
  twitter: { card: "summary_large_image" },
  applicationName: "Scene Korea",
  verification: { google: process.env.GOOGLE_SITE_VERIFICATION, other: process.env.BING_SITE_VERIFICATION ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION } : {} },
  robots: process.env.VERCEL_ENV === "preview" ? { index: false, follow: false } : { index: true, follow: true, googleBot: { "max-image-preview": "large" } },
  ...(client ? { other: { "google-adsense-account": client } } : {}),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${bodyFont.variable} ${displayFont.variable}`}><body><SavedRoutesProvider routeIds={dramaRoutes.map((route) => route.id)}><a className="skip-link" href="#main-content">Skip to content</a><div className="site-shell"><SiteHeader savedLink={<SavedNav />} /><main id="main-content">{children}</main><SiteFooter /></div><AdSenseScript /><StructuredData data={{ "@context": "https://schema.org", "@type": "Organization", "@id": `${getSiteUrl()}/#publisher`, name: "Scene Korea", url: getSiteUrl(), logo: `${getSiteUrl()}/icon.svg`, description: "Independent filming-location travel guides for visitors to Korea." }} /></SavedRoutesProvider>{process.env.VERCEL_ENV === "production" ? <SiteAnalytics /> : null}</body></html>;
}
