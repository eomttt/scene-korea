import visitPlans from "../data/visit-plans.json";

export type VisitPlan = (typeof visitPlans)[number];

export function getVisitPlan(routeId: string) {
  return visitPlans.find((plan) => plan.routeId === routeId);
}
