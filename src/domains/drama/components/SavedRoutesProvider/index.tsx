"use client";

import { createContext, useContext, useMemo, type ReactNode } from "react";

const SavedRouteIdsContext = createContext<ReadonlySet<string> | null>(null);

export function SavedRoutesProvider({ routeIds, children }: { routeIds: string[]; children: ReactNode }) {
  const knownIds = useMemo(() => new Set(routeIds), [routeIds]);
  return <SavedRouteIdsContext.Provider value={knownIds}>{children}</SavedRouteIdsContext.Provider>;
}

export function useKnownRouteIds() {
  const knownIds = useContext(SavedRouteIdsContext);
  if (knownIds === null) throw new Error("SavedRoutesProvider is required to read saved routes.");
  return knownIds;
}
