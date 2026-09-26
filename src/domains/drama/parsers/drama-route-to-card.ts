import type { DramaCardData, DramaCollectionItem } from "../models/model-drama-card";
import type { DramaRoute } from "../utils/drama-routes";
import { createRouteSearchIndex } from "../utils/route-search";
import { getImageUrl } from "../utils/image-assets";

export function dramaRouteToCard(route: DramaRoute): DramaCardData {
  return {
    id: route.id,
    title: route.title,
    course: route.course,
    hook: route.hook,
    duration: route.duration,
    format: route.format,
    image: route.image,
    imageUrl: route.image ? getImageUrl(route.image) : "",
    imageCaption: route.imageCaption,
    imageType: route.imageType,
    stopNames: route.stops.map((stop) => stop.name),
  };
}

export function dramaRouteToCollectionItem(route: DramaRoute): DramaCollectionItem {
  return {
    ...dramaRouteToCard(route),
    category: route.category,
    maxHours: route.maxHours,
    searchIndex: createRouteSearchIndex(route),
  };
}
