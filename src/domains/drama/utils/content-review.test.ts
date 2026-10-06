import assert from "node:assert/strict";
import { test } from "node:test";
import originalCatalog from "../data/routes.json";
import approvedImages from "../data/approved-images.json";
import visitPlans from "../data/visit-plans.json";
import { dramaRoutes } from "./drama-routes";
import { getImageUrl } from "./image-assets";
import { getVisitPlan } from "./visit-plans";

test("only reviewed photos reach published tours and their metadata", () => {
  const approvedByRoute = new Map(approvedImages.map((image) => [image.routeId, image]));

  assert.equal(approvedByRoute.size, approvedImages.length, "Duplicate image reviews");
  assert.equal(dramaRoutes.length, originalCatalog.routes.length, "Image review must not remove tours");
  for (const route of dramaRoutes) {
    const approved = approvedByRoute.get(route.id);
    assert.equal(route.image, approved?.image ?? "", route.id);
    assert.equal(route.placeImage, "", `${route.id}: an unreviewed secondary photo must not leak`);
    if (!approved) continue;
    assert.ok(getImageUrl(approved.image), route.id);
    assert.equal(route.imageCaption, approved.imageCaption, route.id);
    assert.equal(route.imageLicenseUrl, approved.imageLicenseUrl, route.id);
    assert.ok(approved.credit && approved.imageChanges, route.id);
    assert.match(approved.imageSource, /^https:\/\//, route.id);
    assert.match(approved.imageLicenseUrl, /^https:\/\//, route.id);
    assert.doesNotMatch(approved.imageLicense, /not verified|\bNC\b|\bND\b/i, route.id);
  }
  for (const image of approvedImages) {
    assert.ok(dramaRoutes.some((route) => route.id === image.routeId), image.routeId);
  }
});

test("travel guides belong to published tours and retain the references needed to check advice", () => {
  assert.equal(new Set(visitPlans.map((plan) => plan.routeId)).size, visitPlans.length);
  for (const plan of visitPlans) {
    assert.ok(dramaRoutes.some((route) => route.id === plan.routeId), plan.routeId);
    assert.equal(getVisitPlan(plan.routeId), plan);
    assert.match(plan.checkedAt, /^\d{4}-\d{2}-\d{2}$/, plan.routeId);
    assert.ok(plan.overview && plan.arrival.heading && plan.arrival.text, plan.routeId);
    assert.ok(plan.budget && plan.access && plan.weather, plan.routeId);
    assert.ok(plan.schedule.length > 0 && plan.schedule.every((step) => step.label && step.text), plan.routeId);
    assert.ok(plan.sources.length > 0, plan.routeId);
    assert.equal(new Set(plan.sources.map((source) => source.url)).size, plan.sources.length, plan.routeId);
    for (const source of plan.sources) {
      assert.ok(source.label, plan.routeId);
      assert.match(source.url, /^https:\/\//, plan.routeId);
    }
  }
  assert.equal(getVisitPlan("missing-route"), undefined);
});
