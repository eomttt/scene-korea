import content from "../data/routes.json";

export const dramaRoutes = content.routes;
export type DramaRoute = (typeof dramaRoutes)[number];
export const researchDate = content.checkedAt;

export function getDramaRoute(id: string) {
  return dramaRoutes.find((route) => route.id === id);
}
