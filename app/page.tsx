import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { dramaRoutes } from "@/domains/drama/utils/drama-routes";
import { DramaCollection } from "@/domains/drama/components/DramaCollection";
import { AdSlot } from "@/domains/advertising/components/AdSlot";
import type { Metadata } from "next";
import { getSiteUrl } from "@/common/utils/site-url";
import { StructuredData } from "@/common/components/StructuredData";

export const metadata: Metadata = {
  title: `${dramaRoutes.length} K-Drama & Film Location Tours in Korea`,
  description: `Explore ${dramaRoutes.length} self-guided K-drama and film location tours in Korea. Follow nearby scenes in a day with Google Maps, NAVER Map and visiting tips.`,
  alternates: { canonical: "/" },
  openGraph: { title: "You know the story. Now step inside.", description: "K-drama and film filming locations, memorable scenes and self-guided routes in Korea.", url: "/", siteName: "Scene Korea", type: "website", images: [{ url: "/share-image", width: 1200, height: 630, alt: "Scene Korea · Follow your favourite K-drama" }] },
};

export default function HomePage() {
  return <>
    <StructuredData data={{ "@context": "https://schema.org", "@type": "WebSite", name: "Scene Korea", url: getSiteUrl(), inLanguage: "en", description: "Self-guided filming-location tours in Korea, from Korean dramas and films to international cinema." }} />
    <StructuredData data={{ "@context": "https://schema.org", "@type": "ItemList", name: "K-drama and film filming routes in Korea", numberOfItems: dramaRoutes.length, itemListElement: dramaRoutes.map((route, index) => ({ "@type": "ListItem", position: index + 1, name: `${route.title}: ${route.course}`, url: `${getSiteUrl()}/stories/${route.id}` })) }} />
    <section className="hero"><div><p className="eyebrow">The story doesn’t end on screen</p><h1>You know the story.<br />Now step inside.</h1></div><div className="hero-aside"><p>One film. More than one story.<br />Choose the moments you love, then follow their filming locations across Korea.</p><a href="#collection" className="text-link">Find your story <span aria-hidden="true">↓</span></a></div></section>
    <DramaCollection routes={dramaRoutes} />
    <section className="request-banner"><div><p className="eyebrow">Your next story belongs here</p><h2>Still thinking about a scene?</h2><p>Tell us the title, or the moment you wish you could step into.</p></div><Link href="/request" className="button">Request a title or scene <ArrowUpRight size={17} aria-hidden="true" /></Link></section>
    <AdSlot />
  </>;
}
