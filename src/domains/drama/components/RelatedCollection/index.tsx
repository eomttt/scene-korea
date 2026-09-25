"use client";

import { useSearchParams } from "next/navigation";
import { getCollectionSearch, readTourFilters } from "../../utils/collection-filters";
import type { DramaCardData } from "../../models/model-drama-card";
import { DramaCard } from "../DramaCard";

export function RelatedCollection({ routes }: { routes: DramaCardData[] }) {
  const searchParams = useSearchParams();
  const collectionSearch = getCollectionSearch(readTourFilters(searchParams));
  return <div className="drama-grid">{routes.map((route) => <DramaCard key={route.id} route={route} collectionSearch={collectionSearch} />)}</div>;
}
