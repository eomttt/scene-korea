import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { dramaRoutes } from "@/domains/drama/utils/drama-routes";
import { DramaCollection } from "@/domains/drama/components/DramaCollection";
import { AdSlot } from "@/domains/advertising/components/AdSlot";
import type { Metadata } from "next";
import { getSiteUrl } from "@/common/utils/site-url";
import { StructuredData } from "@/common/components/StructuredData";
import { getPageMetadata } from "@/common/utils/seo";
import { dramaRouteToCollectionItem } from "@/domains/drama/parsers/drama-route-to-card";
import { titleGuides } from "@/domains/drama/utils/title-guides";

export const metadata: Metadata = getPageMetadata({
  title: "K-Drama & Movie Filming Locations in Korea | Scene Korea",
  description: `Explore ${dramaRoutes.length} self-guided K-drama and film location tours in Korea. Follow nearby scenes in a day with Google Maps, NAVER Map and visiting tips.`,
  path: "/",
});

export default function HomePage() {
  return <>
    <StructuredData data={{ "@context": "https://schema.org", "@type": "WebSite", "@id": `${getSiteUrl()}/#website`, name: "Scene Korea", url: getSiteUrl(), inLanguage: "en", publisher: { "@id": `${getSiteUrl()}/#publisher` }, description: "Self-guided filming-location tours in Korea, from Korean dramas and films to international cinema." }} />
    <StructuredData data={{ "@context": "https://schema.org", "@type": "ItemList", name: "K-drama and film filming routes in Korea", numberOfItems: dramaRoutes.length, itemListElement: dramaRoutes.map((route, index) => ({ "@type": "ListItem", position: index + 1, name: `${route.title}: ${route.course}`, url: `${getSiteUrl()}/stories/${route.id}` })) }} />
    <section className="hero"><div><p className="eyebrow">Self-guided filming-location tours in Korea</p><h1>Step into your favourite<br />K-drama & film locations.</h1></div><div className="hero-aside"><p>{dramaRoutes.length} scene-led routes from {new Set(dramaRoutes.map((route) => route.title)).size} dramas and films. Choose a story, then follow nearby filming locations in a day.</p><a href="#collection" className="text-link">Find your story <span aria-hidden="true">↓</span></a><Link href="/filming-locations" className="text-link">Browse filming locations by title ↗</Link></div></section>
    <DramaCollection routes={dramaRoutes.map(dramaRouteToCollectionItem)} />
    <section className="title-guide-links" aria-labelledby="title-guides-heading"><h2 id="title-guides-heading">One title, more than one day out</h2><p>Compare different filming-location routes from the same drama or film.</p><div>{titleGuides.map((guide) => <Link key={guide.slug} href={`/filming-locations/${guide.slug}`}>{guide.title} filming locations <ArrowUpRight size={14} aria-hidden="true" /></Link>)}</div></section>
    <section className="request-banner"><div><p className="eyebrow">Your next story belongs here</p><h2>Still thinking about a scene?</h2><p>Tell us the title, or the moment you wish you could step into.</p></div><Link href="/request" className="button">Request a title or scene <ArrowUpRight size={17} aria-hidden="true" /></Link></section>
    <AdSlot />
  </>;
}
