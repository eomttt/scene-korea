import type { DramaRoute } from "./drama-routes";
import type { RouteSearchIndex } from "../models/model-drama-card";

export type TourCategory = "all" | "drama" | "korean-film" | "international-film";
export type TourDuration = "all" | "short" | "half-day" | "full-day";

export const tourCategories: { value: TourCategory; label: string }[] = [
  { value: "all", label: "All stories" },
  { value: "korean-film", label: "Korean films" },
  { value: "drama", label: "Dramas & series" },
  { value: "international-film", label: "International films" },
];

export const tourDurations: { value: TourDuration; label: string }[] = [
  { value: "all", label: "Any duration" },
  { value: "short", label: "Up to 3 hours" },
  { value: "half-day", label: "Up to 5 hours" },
  { value: "full-day", label: "Over 5 hours" },
];

function normalizeSearch(value: string) {
  return value.normalize("NFKC").toLowerCase().replace(/['’]/gu, "").replace(/[^\p{L}\p{N}]+/gu, " ").trim();
}

export function createRouteSearchIndex(route: DramaRoute): RouteSearchIndex {
  const compactTitles = [route.title, route.ko, ...route.aliases].map((title) => normalizeSearch(title).replace(/\s+/gu, ""));
  const searchText = normalizeSearch([
    route.title, route.ko, route.course, route.hook, route.tourArea,
    ...route.aliases,
    ...route.stops.flatMap((stop) => [stop.name, stop.ko, stop.sceneTitle, stop.scene, stop.query]),
  ].join(" "));
  return { searchText, compactTitles };
}

export function matchesRouteSearch(route: DramaRoute | { searchIndex: RouteSearchIndex }, query: string) {
  const terms = normalizeSearch(query).split(/\s+/u).filter(Boolean);
  const { searchText, compactTitles } = "searchIndex" in route ? route.searchIndex : createRouteSearchIndex(route);
  return terms.every((term) => searchText.includes(term) || compactTitles.some((title) => title.includes(term)));
}

export function matchesTourDuration(route: { maxHours: number }, duration: TourDuration) {
  if (duration === "short") return route.maxHours <= 3;
  if (duration === "half-day") return route.maxHours <= 5;
  if (duration === "full-day") return route.maxHours > 5;
  return true;
}
