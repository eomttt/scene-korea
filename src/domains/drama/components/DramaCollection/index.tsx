"use client";

import { Suspense, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Search, X } from "lucide-react";
import type { DramaRoute } from "../../utils/drama-routes";
import { matchesRouteSearch, matchesTourDuration, tourCategories, tourDurations } from "../../utils/route-search";
import { defaultTourFilters, getCollectionSearch, readTourFilters, type TourFilters } from "../../utils/collection-filters";
import { DramaCard } from "../DramaCard";
import { rememberCollectionScroll, takeCollectionScrollRestore } from "../../stores/collection-scroll";

export function DramaCollection({ routes }: { routes: DramaRoute[] }) {
  return <Suspense fallback={<CollectionView routes={routes} filters={defaultTourFilters} />}><CollectionWithUrlFilters routes={routes} /></Suspense>;
}

function CollectionWithUrlFilters({ routes }: { routes: DramaRoute[] }) {
  const searchParams = useSearchParams();
  const filters = readTourFilters(searchParams);
  const collectionSearch = getCollectionSearch(filters);

  useLayoutEffect(() => {
    const position = takeCollectionScrollRestore(collectionSearch);
    if (position !== null) window.scrollTo({ top: position, behavior: "instant" });
  }, [collectionSearch]);

  function handleFiltersChange(updates: Partial<TourFilters>) {
    const current = new URLSearchParams(window.location.search);
    const next = { ...readTourFilters(current), ...updates };
    const search = getCollectionSearch(next, current.toString());
    window.history.replaceState(null, "", `${window.location.pathname}${search}${window.location.hash}`);
  }

  return <CollectionView routes={routes} filters={filters} onFiltersChange={handleFiltersChange} />;
}

function CollectionView({ routes, filters, onFiltersChange }: {
  routes: DramaRoute[];
  filters: TourFilters;
  onFiltersChange?: (updates: Partial<TourFilters>) => void;
}) {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const { query, category, duration } = filters;
  // Update typing before the router catches up so the caret stays in place.
  const [searchInput, setSearchInput] = useState({ sourceQuery: query, value: query });
  if (searchInput.sourceQuery !== query) setSearchInput({ sourceQuery: query, value: query });
  const searchedRoutes = routes.filter((route) => matchesRouteSearch(route, query) && matchesTourDuration(route, duration));
  const matches = searchedRoutes.filter((route) => category === "all" || route.category === category);
  const hasFilters = query.length > 0 || category !== "all" || duration !== "all";
  const collectionSearch = getCollectionSearch(filters);

  function handleFiltersReset() {
    setSearchInput({ sourceQuery: query, value: "" });
    onFiltersChange?.(defaultTourFilters);
    searchInputRef.current?.focus();
  }

  function handleQueryChange(value: string) {
    setSearchInput({ sourceQuery: query, value });
    onFiltersChange?.({ query: value });
  }

  return <section id="collection" aria-labelledby="collection-heading">
    <div className="section-heading"><h2 id="collection-heading">Choose your story</h2><span>Scene-led walks & day trips</span></div>
    <div className="collection-filters">
      <div className="collection-tools">
        <div className="search-field">
          <Search size={19} aria-hidden="true" />
          <label className="sr-only" htmlFor="drama-search">Search titles, scenes and places</label>
          <input ref={searchInputRef} id="drama-search" type="search" value={searchInput.value} disabled={!onFiltersChange} onChange={(event) => handleQueryChange(event.target.value)} placeholder="Search titles, scenes and places" />
          {query ? <button type="button" aria-label="Clear search" onClick={() => { handleQueryChange(""); searchInputRef.current?.focus(); }}><X size={18} aria-hidden="true" /></button> : null}
        </div>
        <label className="duration-filter" htmlFor="tour-duration">Time available
          <select id="tour-duration" value={duration} disabled={!onFiltersChange} onChange={(event) => {
            const selected = tourDurations.find((option) => option.value === event.target.value);
            if (selected) onFiltersChange?.({ duration: selected.value });
          }}>{tourDurations.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}</select>
        </label>
      </div>
      <div className="category-filters" role="group" aria-label="Filter by screen story">
        {tourCategories.map((option) => {
          const count = searchedRoutes.filter((route) => option.value === "all" || route.category === option.value).length;
          return <button key={option.value} type="button" disabled={!onFiltersChange} aria-pressed={category === option.value} onClick={() => onFiltersChange?.({ category: option.value })}>{option.label}<span>{count}</span></button>;
        })}
      </div>
      <div className="collection-results"><p role="status" aria-live="polite">{matches.length} {matches.length === 1 ? "story" : "stories"}{hasFilters ? ` of ${routes.length}` : " to explore"}</p>{hasFilters ? <button type="button" className="reset-filters" onClick={handleFiltersReset}>Reset filters <X size={14} aria-hidden="true" /></button> : <p>Every route fits into a day.</p>}</div>
    </div>
    {matches.length > 0 ? <div className="drama-grid">{matches.map((route, index) => <DramaCard key={route.id} route={route} priority={index < 3} collectionSearch={collectionSearch} onNavigate={() => rememberCollectionScroll(collectionSearch, window.scrollY)} />)}</div> : <div className="empty-state"><h3>No stories match just yet.</h3><p>Try a different title, place or duration, or ask us to add your scene.</p><button type="button" className="button button-outline" onClick={handleFiltersReset}>Clear all filters</button><Link href="/request" className="text-link">Request a title ↗</Link></div>}
  </section>;
}
