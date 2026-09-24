"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, X } from "lucide-react";
import type { DramaRoute } from "../../utils/drama-routes";
import { DramaCard } from "../DramaCard";

function normalizeTitle(value: string) {
  return value.normalize("NFKC").toLocaleLowerCase().replace(/[^\p{L}\p{N}]/gu, "");
}

export function DramaCollection({ routes }: { routes: DramaRoute[] }) {
  const [query, setQuery] = useState("");
  const search = normalizeTitle(query);
  const matches = routes.filter((route) => normalizeTitle(`${route.title} ${route.ko} ${route.course}`).includes(search));

  return <section id="collection" aria-labelledby="collection-heading">
    <div className="section-heading"><h2 id="collection-heading">Choose your story</h2><span>Scene-led walks & day trips</span></div>
    <div className="collection-tools"><div className="search-field"><Search size={19} aria-hidden="true" /><label className="sr-only" htmlFor="drama-search">Search stories, dramas and films</label><input id="drama-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search a story, drama or film" />{query ? <button type="button" aria-label="Clear search" onClick={() => setQuery("")}><X size={18} aria-hidden="true" /></button> : null}</div><p role="status">{matches.length} {matches.length === 1 ? "story" : "stories"}</p></div>
    {matches.length ? <div className="drama-grid">{matches.map((route, index) => <DramaCard key={route.id} route={route} priority={index < 3} />)}</div> : <div className="empty-state"><h3>That story is still waiting for its route.</h3><p>Try another title, or tell us what you’d love to see here.</p><Link href="/request" className="text-link">Request a title ↗</Link></div>}
  </section>;
}
