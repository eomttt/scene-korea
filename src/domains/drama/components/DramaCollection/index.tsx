"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { Search, X } from "lucide-react";
import type { DramaRoute } from "../../utils/drama-routes";
import { matchesRouteSearch, matchesTourDuration, tourCategories, tourDurations, type TourCategory, type TourDuration } from "../../utils/route-search";
import { DramaCard } from "../DramaCard";

export function DramaCollection({ routes }: { routes: DramaRoute[] }) {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<TourCategory>("all");
  const [duration, setDuration] = useState<TourDuration>("all");
  const searchedRoutes = routes.filter((route) => matchesRouteSearch(route, query) && matchesTourDuration(route, duration));
  const matches = searchedRoutes.filter((route) => category === "all" || route.category === category);
  const hasFilters = query.length > 0 || category !== "all" || duration !== "all";

  function handleFiltersReset() {
    setQuery("");
    setCategory("all");
    setDuration("all");
    searchInputRef.current?.focus();
  }

  return <section id="collection" aria-labelledby="collection-heading">
    <div className="section-heading"><h2 id="collection-heading">Choose your story</h2><span>Scene-led walks & day trips</span></div>
    <div className="collection-filters">
      <div className="collection-tools">
        <div className="search-field">
          <Search size={19} aria-hidden="true" />
          <label className="sr-only" htmlFor="drama-search">Search titles, scenes and places</label>
          <input ref={searchInputRef} id="drama-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search titles, scenes and places" />
          {query ? <button type="button" aria-label="Clear search" onClick={() => { setQuery(""); searchInputRef.current?.focus(); }}><X size={18} aria-hidden="true" /></button> : null}
        </div>
        <label className="duration-filter" htmlFor="tour-duration">Time available
          <select id="tour-duration" value={duration} onChange={(event) => {
            const selected = tourDurations.find((option) => option.value === event.target.value);
            if (selected) setDuration(selected.value);
          }}>{tourDurations.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}</select>
        </label>
      </div>
      <div className="category-filters" role="group" aria-label="Filter by screen story">
        {tourCategories.map((option) => {
          const count = searchedRoutes.filter((route) => option.value === "all" || route.category === option.value).length;
          return <button key={option.value} type="button" aria-pressed={category === option.value} onClick={() => setCategory(option.value)}>{option.label}<span>{count}</span></button>;
        })}
      </div>
      <div className="collection-results"><p role="status" aria-live="polite">{matches.length} {matches.length === 1 ? "story" : "stories"}{hasFilters ? ` of ${routes.length}` : " to explore"}</p>{hasFilters ? <button type="button" className="reset-filters" onClick={handleFiltersReset}>Reset filters <X size={14} aria-hidden="true" /></button> : <p>Every route fits into a day.</p>}</div>
    </div>
    {matches.length > 0 ? <div className="drama-grid">{matches.map((route, index) => <DramaCard key={route.id} route={route} priority={index < 3} />)}</div> : <div className="empty-state"><h3>No stories match just yet.</h3><p>Try a different title, place or duration, or ask us to add your scene.</p><button type="button" className="button button-outline" onClick={handleFiltersReset}>Clear all filters</button><Link href="/request" className="text-link">Request a title ↗</Link></div>}
  </section>;
}
