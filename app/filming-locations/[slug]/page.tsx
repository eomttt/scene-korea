import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { StructuredData } from "@/common/components/StructuredData";
import { getSiteUrl } from "@/common/utils/site-url";
import { getTitleGuide, titleGuides } from "@/domains/drama/utils/title-guides";
import styles from "../style.module.css";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return titleGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const guide = getTitleGuide((await params).slug);
  if (!guide) notFound();
  const title = `${guide.title} Filming Locations in Korea`;
  const path = `/filming-locations/${guide.slug}`;
  const coverRoute = guide.routes[0];
  const image = coverRoute ? `/stories/${coverRoute.id}/share-image` : "/share-image";

  return {
    title: { absolute: title }, description: guide.intro,
    alternates: { canonical: path },
    openGraph: {
      title, description: guide.intro, url: path, type: "website", siteName: "Scene Korea",
      images: [{ url: image, width: 1200, height: 630, alt: `${guide.title} filming-location routes in Korea` }],
    },
    twitter: { card: "summary_large_image", title, description: guide.intro, images: [image] },
  };
}

export default async function TitleGuidePage({ params }: PageProps) {
  const guide = getTitleGuide((await params).slug);
  if (!guide) notFound();
  const pageUrl = `${getSiteUrl()}/filming-locations/${guide.slug}`;
  const title = `${guide.title} filming locations in Korea`;

  return <article className={styles.page}>
    <StructuredData data={{
      "@context": "https://schema.org", "@type": "CollectionPage", "@id": pageUrl,
      name: title, description: guide.intro, url: pageUrl, inLanguage: "en",
      mainEntity: { "@id": `${pageUrl}#routes` },
    }} />
    <StructuredData data={{
      "@context": "https://schema.org", "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Scene Korea", item: getSiteUrl() },
        { "@type": "ListItem", position: 2, name: "Filming locations by title", item: `${getSiteUrl()}/filming-locations` },
        { "@type": "ListItem", position: 3, name: guide.title, item: pageUrl },
      ],
    }} />
    <StructuredData data={{
      "@context": "https://schema.org", "@type": "ItemList", "@id": `${pageUrl}#routes`,
      name: `${guide.title} story routes`, numberOfItems: guide.routes.length,
      itemListElement: guide.routes.map((route, index) => ({
        "@type": "ListItem", position: index + 1, name: route.course, url: `${getSiteUrl()}/stories/${route.id}`,
      })),
    }} />
    <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
      <Link href="/">Scene Korea</Link><span aria-hidden="true">/</span>
      <Link href="/filming-locations">Filming locations</Link><span aria-hidden="true">/</span>
      <span>{guide.title}</span>
    </nav>
    <header className={styles.heading}>
      <p className="eyebrow" lang="ko">{guide.ko}</p>
      <h1>{title}</h1>
      <p>{guide.intro}</p>
    </header>
    <section aria-labelledby="compare-heading">
      <h2 id="compare-heading">Choose the story for your day</h2>
      <p className={styles.intro}>Each row is a separate outing. Compare the scenes, starting area and travel before choosing one route. The times below are estimates; travel to the first stop is extra.</p>
      <div className={styles.tableScroll} role="region" aria-label={`${guide.title} route comparison`} tabIndex={0}>
        <table className={styles.comparison}>
          <caption>{guide.routes.length} self-guided {guide.title} routes</caption>
          <thead><tr><th scope="col">Story</th><th scope="col">Area</th><th scope="col">Estimated time</th><th scope="col">Getting around</th><th scope="col">Scene stops</th></tr></thead>
          <tbody>{guide.routes.map((route) => <tr key={route.id}>
            <th scope="row"><Link href={`/stories/${route.id}`}>{route.course}</Link></th>
            <td>{route.tourArea}</td><td>{route.duration}</td><td>{route.transport}</td><td>{route.stops.length}</td>
          </tr>)}</tbody>
        </table>
      </div>
    </section>
    <section className={styles.routeSection} aria-labelledby="scenes-heading">
      <h2 id="scenes-heading">The scenes in each route</h2>
      <div className={styles.routeList}>
        {guide.routes.map((route) => <article className={styles.route} key={route.id}>
          <h3><Link href={`/stories/${route.id}`}>{route.course}</Link></h3>
          <p>{route.hook}</p>
          <ol className={styles.sceneList}>
            {route.stops.map((stop, index) => <li key={`${route.id}-${stop.name}`}>
              <Link href={`/stories/${route.id}#stop-${index + 1}`}>{stop.name}</Link>
              <span>{stop.sceneTitle}</span>
            </li>)}
          </ol>
          <p className={styles.note}>{route.visitNote}</p>
          <Link className="text-link" href={`/stories/${route.id}`}>Follow this route <span aria-hidden="true">→</span></Link>
        </article>)}
      </div>
    </section>
    <section className={styles.planning} aria-labelledby="planning-heading">
      <h2 id="planning-heading">Make room for one story</h2>
      <p>Pick the route with the scenes you want to revisit, then check how you will reach its first stop. Keep the other routes for another outing instead of treating this page as one continuous itinerary.</p>
      <p>Each route has scene notes, visiting tips and Google Maps and NAVER Map links. Check opening hours and access before setting out.</p>
      <Link className="text-link" href="/filming-locations">Browse another drama or film <span aria-hidden="true">→</span></Link>
    </section>
  </article>;
}
