import type { Metadata } from "next";
import Link from "next/link";
import { StructuredData } from "@/common/components/StructuredData";
import { getSiteUrl } from "@/common/utils/site-url";
import { dramaRoutes, type DramaRoute } from "@/domains/drama/utils/drama-routes";
import { getTitleGuideForRoute } from "@/domains/drama/utils/title-guides";
import styles from "./style.module.css";

const titlesByName = new Map<string, { route: DramaRoute; routes: DramaRoute[] }>();

for (const route of dramaRoutes) {
  const entry = titlesByName.get(route.title);
  if (entry) {
    entry.routes.push(route);
  } else {
    titlesByName.set(route.title, { route, routes: [route] });
  }
}

const titles = [...titlesByName.values()].toSorted((left, right) =>
  left.route.title.localeCompare(right.route.title, "en"),
);
const pageTitle = "K-Drama & Film Filming Locations in Korea by Title";
const description = `Find filming-location walks and visits for ${titles.length} dramas and films in Korea. Browse by title, then choose a self-guided story route with scene notes and maps.`;

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description,
  alternates: { canonical: "/filming-locations" },
  openGraph: {
    title: pageTitle,
    description,
    url: "/filming-locations",
    type: "website",
    siteName: "Scene Korea",
    images: [{ url: "/share-image", width: 1200, height: 630, alt: "Scene Korea filming-location routes" }],
  },
  twitter: { card: "summary_large_image", title: pageTitle, description, images: ["/share-image"] },
};

export default function FilmingLocationsPage() {
  const pageUrl = `${getSiteUrl()}/filming-locations`;
  const titleLinks = titles.map(({ route, routes }) => {
    const guide = getTitleGuideForRoute(route);
    return { route, routes, href: guide ? `/filming-locations/${guide.slug}` : `/stories/${route.id}` };
  });

  return <article className={styles.page}>
    <StructuredData data={{
      "@context": "https://schema.org", "@type": "CollectionPage", "@id": pageUrl,
      name: pageTitle, description, url: pageUrl, inLanguage: "en",
      mainEntity: { "@id": `${pageUrl}#titles` },
    }} />
    <StructuredData data={{
      "@context": "https://schema.org", "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Scene Korea", item: getSiteUrl() },
        { "@type": "ListItem", position: 2, name: "Filming locations by title", item: pageUrl },
      ],
    }} />
    <StructuredData data={{
      "@context": "https://schema.org", "@type": "ItemList", "@id": `${pageUrl}#titles`,
      name: "Dramas and films with routes in Korea", numberOfItems: titleLinks.length,
      itemListElement: titleLinks.map(({ route, href }, index) => ({
        "@type": "ListItem", position: index + 1, name: route.title, url: `${getSiteUrl()}${href}`,
      })),
    }} />
    <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
      <Link href="/">Scene Korea</Link><span aria-hidden="true">/</span><span>Filming locations</span>
    </nav>
    <header className={styles.heading}>
      <p className="eyebrow">Find the title you love</p>
      <h1>K-drama and film filming locations in Korea</h1>
      <p>Browse {titles.length} dramas and films, then choose the story you want to follow. Each route is a self-guided outing of one day or less.</p>
    </header>
    <section aria-labelledby="titles-heading">
      <div className={styles.sectionHeading}>
        <h2 id="titles-heading">Browse by title</h2>
        <p>{titles.length} titles · {dramaRoutes.length} routes</p>
      </div>
      <ul className={styles.titleList}>
        {titleLinks.map(({ route, routes, href }) => <li key={route.title}>
          <Link className={styles.titleLink} href={href}>
            <h3>{route.title}</h3>
            <span className={styles.koreanTitle} lang="ko">{route.ko}</span>
            <span className={styles.linkDetail}>{routes.length > 1 ? `Compare ${routes.length} story routes` : route.course}</span>
            <span className={styles.linkAction}>{routes.length > 1 ? "Choose your route" : "See the route"} <span aria-hidden="true">→</span></span>
          </Link>
        </li>)}
      </ul>
    </section>
    <p className={styles.note}>Times on each route cover the local outing. Travel to the first stop is extra.</p>
  </article>;
}
