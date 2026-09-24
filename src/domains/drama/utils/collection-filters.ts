import { tourCategories, tourDurations, type TourCategory, type TourDuration } from "./route-search";

export type TourFilters = { query: string; category: TourCategory; duration: TourDuration };

export const defaultTourFilters: TourFilters = { query: "", category: "all", duration: "all" };

export function readTourFilters(params: { get(name: string): string | null }): TourFilters {
  return {
    query: params.get("q") ?? "",
    category: tourCategories.find((option) => option.value === params.get("category"))?.value ?? "all",
    duration: tourDurations.find((option) => option.value === params.get("duration"))?.value ?? "all",
  };
}

export function getCollectionSearch(filters: TourFilters, existingSearch = "") {
  const params = new URLSearchParams(existingSearch);
  if (filters.query) params.set("q", filters.query);
  else params.delete("q");
  if (filters.category !== "all") params.set("category", filters.category);
  else params.delete("category");
  if (filters.duration !== "all") params.set("duration", filters.duration);
  else params.delete("duration");
  const search = params.toString();
  return search ? `?${search}` : "";
}

export function getCollectionHref(filters: TourFilters) {
  return `/${getCollectionSearch(filters)}#collection`;
}
