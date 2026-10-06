import content from "../data/routes.json";
import approvedImages from "../data/approved-images.json";

const approvedImageByRoute = new Map(approvedImages.map((image) => [image.routeId, image]));

export const dramaRoutes = content.routes.map((route) => {
  const image = approvedImageByRoute.get(route.id);

  // Keep unreviewed historical images out of cards, pages and search metadata.
  return {
    ...route,
    image: image?.image ?? "",
    imageType: image?.imageType ?? "Itinerary",
    imageCaption: image?.imageCaption ?? "",
    imagePosition: image?.imagePosition ?? "center",
    imageSource: image?.imageSource ?? "",
    credit: image?.credit ?? "",
    imageLicense: image?.imageLicense ?? "",
    imageLicenseUrl: image?.imageLicenseUrl ?? "",
    imageChanges: image?.imageChanges ?? "",
    placeImage: "",
    placeCaption: "",
  };
});
export type DramaRoute = (typeof dramaRoutes)[number];
export const researchDate = content.checkedAt;

export function getDramaRoute(id: string) {
  return dramaRoutes.find((route) => route.id === id);
}
