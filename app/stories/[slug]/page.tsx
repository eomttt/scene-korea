import type { Metadata } from "next";
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, MapPin, Clock3, Footprints } from "lucide-react";
import { dramaRoutes, getDramaRoute } from "@/domains/drama/utils/drama-routes";
import { AdSlot } from "@/domains/advertising/components/AdSlot";
import { DramaCard } from "@/domains/drama/components/DramaCard";
import { CollectionReturnLink } from "@/domains/drama/components/CollectionReturnLink";
import { RelatedCollection } from "@/domains/drama/components/RelatedCollection";
import { SaveButton } from "@/domains/drama/components/SaveButton";
import { getSiteUrl } from "@/common/utils/site-url";
import { StructuredData } from "@/common/components/StructuredData";
import { getContentModifiedDate, getPageMetadata } from "@/common/utils/seo";
import { getTitleGuideForRoute } from "@/domains/drama/utils/title-guides";
import { dramaRouteToCard } from "@/domains/drama/parsers/drama-route-to-card";
import { getImageUrl } from "@/domains/drama/utils/image-assets";

type PageProps = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return dramaRoutes.map((route) => ({ slug: route.id })); }
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const route = getDramaRoute((await params).slug);
  if (!route) notFound();
  return getPageMetadata({ title: route.seoTitle, description: route.seoDescription, path: `/stories/${route.id}`, image: `/stories/${route.id}/share-image` });
}

export default async function StoryPage({ params }: PageProps) {
  const route = getDramaRoute((await params).slug);
  if (!route) notFound();
  const relatedRoutes = dramaRoutes.filter((story) => story.title === route.title && story.id !== route.id);
  const pageUrl = `${getSiteUrl()}/stories/${route.id}`;
  const guide = getTitleGuideForRoute(route);
  const parents = [{ name: "Scene Korea", path: "/" }, { name: "Filming locations", path: "/filming-locations" }, ...(guide ? [{ name: guide.title, path: `/filming-locations/${guide.slug}` }] : [])];
  const checkedDate = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(`${route.checkedAt}T00:00:00Z`));
  return <article className="story-page">
    <StructuredData data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [...parents.map((parent, index) => ({ "@type": "ListItem", position: index + 1, name: parent.name, item: `${getSiteUrl()}${parent.path}` })), { "@type": "ListItem", position: parents.length + 1, name: route.course, item: pageUrl }] }} />
    <StructuredData data={{ "@context": "https://schema.org", "@type": "WebPage", "@id": pageUrl, name: route.seoTitle, description: route.seoDescription, url: pageUrl, inLanguage: "en", dateModified: getContentModifiedDate(route.checkedAt), isPartOf: { "@id": `${getSiteUrl()}/#website` }, publisher: { "@id": `${getSiteUrl()}/#publisher` }, about: { "@type": route.format === "Film" ? "Movie" : "TVSeries", name: route.title, alternateName: route.ko }, mainEntity: { "@id": `${pageUrl}#tour` }, spatialCoverage: { "@type": "Place", name: route.tourArea, address: { "@type": "PostalAddress", addressCountry: "KR" } } }} />
    <StructuredData data={{ "@context": "https://schema.org", "@type": "TouristTrip", "@id": `${pageUrl}#tour`, name: `${route.title}: ${route.course}`, description: route.seoDescription, url: pageUrl, image: route.image ? getImageUrl(route.image) : `${pageUrl}/share-image`, touristType: "Korean drama and film fans", itinerary: { "@type": "ItemList", numberOfItems: route.stops.length, itemListElement: route.stops.map((stop, index) => ({ "@type": "ListItem", position: index + 1, item: { "@type": "Place", name: stop.name, alternateName: stop.ko, description: stop.scene, url: `${pageUrl}#stop-${index + 1}` } })) } }} />
    <nav className="story-breadcrumbs" aria-label="Breadcrumb"><ol>{parents.map((parent) => <li key={parent.path}><Link href={parent.path}>{parent.name}</Link></li>)}<li aria-current="page">{route.course}</li></ol></nav>
    <Suspense fallback={<Link href="/#collection" className="back-link"><ArrowLeft size={15} aria-hidden="true" /> All stories</Link>}><CollectionReturnLink /></Suspense>
    <header className="story-heading"><p className="eyebrow">Filming locations · {route.tourArea}</p><h1><span className="story-work-title">{route.title}: </span>{route.course}</h1><p className="korean-title" lang="ko">{route.ko}</p><p>{route.hook}</p><p className="story-route-summary">{route.stops.length} {route.stops.length === 1 ? "filming stop" : "filming stops"} · {route.duration} · Self-guided</p></header>
    <div className="story-save"><SaveButton id={route.id} title={route.course} /><Link href="/saved" className="text-link">View saved routes ↗</Link></div>
    {route.image ? <><div className={`story-photos ${route.placeImage ? "photo-pair" : ""}`}><figure><div className="story-image"><Image src={getImageUrl(route.image)} alt={route.imageCaption} fill sizes={route.placeImage ? "(max-width: 700px) 100vw, 50vw" : "100vw"} priority /></div><figcaption><strong>{route.imageType}</strong>{route.imageCaption}</figcaption></figure>{route.placeImage ? <figure><div className="story-image"><Image src={getImageUrl(route.placeImage)} alt={route.placeCaption ?? "Filming location"} fill sizes="(max-width: 700px) 100vw, 50vw" /></div><figcaption><strong>Real location</strong>{route.placeCaption}</figcaption></figure> : null}</div>
    <p className="image-credit">{route.credit} · <a href={route.imageSource} target="_blank" rel="noopener noreferrer">Image source</a>{route.imageLicenseUrl ? <> · <a href={route.imageLicenseUrl} target="_blank" rel="noopener noreferrer">{route.imageLicense}</a> · {route.imageChanges}</> : null}</p></> : null}
    <nav className="route-overview" aria-label="Stops in visiting order">{route.stops.map((stop, index) => <a key={stop.name} href={`#stop-${index + 1}`}><span>{String(index + 1).padStart(2, "0")}</span>{stop.name}</a>)}</nav>
    <div className="story-body"><section><h2>Your day, scene by scene</h2><p className="section-intro">Follow the stops in order. Scene descriptions contain story spoilers.</p><ol className="route-stops">{route.stops.map((stop, index) => <li id={`stop-${index + 1}`} key={stop.name}><span className="stop-number">{index + 1}</span><div><p className="stop-kind">{stop.kind}{stop.episode ? ` · ${stop.episode}` : ""}</p><h3>{stop.name}</h3><span className="korean-title" lang="ko">{stop.ko}</span><div className="scene-note"><h4>{stop.sceneTitle}</h4><p>{stop.scene}</p></div><p className="visit-tip">{stop.visit}</p><div className="map-links"><a className="button button-outline button-small" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${stop.query} South Korea`)}`} target="_blank" rel="noopener noreferrer" aria-label={`Find ${stop.name} on Google Maps`}>Google Maps <ArrowUpRight size={14} aria-hidden="true" /></a><a className="button button-outline button-small" href={`https://map.naver.com/p/search/${encodeURIComponent(stop.query)}`} target="_blank" rel="noopener noreferrer" aria-label={`Find ${stop.name} on NAVER Map`}>NAVER Map <ArrowUpRight size={14} aria-hidden="true" /></a></div></div></li>)}</ol></section>
    <aside className="trip-plan"><h2>A day at your own pace</h2><dl><dt><Clock3 size={15} aria-hidden="true" /> Time to enjoy it</dt><dd>{route.duration} · estimated</dd><dt><Footprints size={15} aria-hidden="true" /> Getting around</dt><dd>{route.transport}</dd><dt><MapPin size={15} aria-hidden="true" /> Start here</dt><dd>{route.start}</dd></dl><p>{route.visitNote}</p><p>Travel to the first stop is extra.</p></aside></div>
    {guide ? <p className="guide-return"><Link href={`/filming-locations/${guide.slug}`} className="text-link">Compare {guide.title} filming-location routes <ArrowUpRight size={15} aria-hidden="true" /></Link></p> : <p className="guide-return"><Link href="/filming-locations" className="text-link">Explore filming locations from more dramas and films <ArrowUpRight size={15} aria-hidden="true" /></Link></p>}
    {relatedRoutes.length ? <section className="related-stories"><div className="section-heading"><h2>Another story from {route.title}</h2></div><Suspense fallback={<div className="drama-grid">{relatedRoutes.map((story) => <DramaCard key={story.id} route={dramaRouteToCard(story)} />)}</div>}><RelatedCollection routes={relatedRoutes.map(dramaRouteToCard)} /></Suspense></section> : null}
    <section className="request-banner compact"><div><h2>Missing your favourite scene?</h2><p>Help us add another moment from {route.title}.</p></div><Link className="button" href={`/request?type=scene&story=${route.id}`}>Request a scene <ArrowUpRight size={17} aria-hidden="true" /></Link></section>
    <p className="research-note">Location references checked {checkedDate}. Opening hours and access can change.</p><AdSlot />
  </article>;
}
