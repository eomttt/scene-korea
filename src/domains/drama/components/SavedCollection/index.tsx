"use client";

import Link from "next/link";
import { Bookmark } from "lucide-react";
import type { DramaCardData } from "../../models/model-drama-card";
import { useSavedRoutes } from "../../hooks/use-saved-routes";
import { DramaCard } from "../DramaCard";

export function SavedCollection({ routes }: { routes: DramaCardData[] }) {
  const { savedIds, ready } = useSavedRoutes();
  const saved = routes.filter((route) => savedIds.includes(route.id));
  if (!ready) return <p role="status">Opening your saved routes…</p>;
  return <><p role="status" className="saved-summary">{saved.length} {saved.length === 1 ? "route" : "routes"} saved</p>{saved.length ? <div className="drama-grid">{saved.map((route) => <DramaCard key={route.id} route={route} />)}</div> : <div className="empty-state"><Bookmark size={30} aria-hidden="true" /><h2>Your next day starts here.</h2><p>Tap the bookmark on a story to keep its route here for later.</p><Link href="/#collection" className="button">Find a story to save</Link></div>}</>;
}
