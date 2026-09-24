import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { test } from "node:test";
import { dramaRoutes } from "./drama-routes";
import { matchesRouteSearch, tourCategories } from "./route-search";

test("each tour has a distinct URL, SEO title and description", () => {
  for (const field of ["id", "seoTitle", "seoDescription"]) {
    const values = dramaRoutes.map((route) => {
      if (field === "id") return route.id;
      if (field === "seoTitle") return route.seoTitle;
      return route.seoDescription;
    });
    assert.equal(new Set(values).size, dramaRoutes.length, field);
    assert.ok(values.every((value) => value.trim().length > 0), field);
  }
});

test("published tours have day-length estimates, searchable categories and local cover images", () => {
  for (const route of dramaRoutes) {
    assert.ok(route.maxHours > 0 && route.maxHours <= 8, route.id);
    assert.ok(tourCategories.some((category) => category.value !== "all" && category.value === route.category), route.id);
    assert.ok(route.stops.length > 0, route.id);
    assert.ok(existsSync(`public/images/${route.image}.webp`), route.id);
    assert.ok(route.stops.every((stop) => stop.query && stop.scene && stop.source.startsWith("https://")), route.id);
  }
});

test("localized title aliases find every story belonging to that work", () => {
  const routes = dramaRoutes.filter((route) => route.title === "Winter Sonata");
  assert.ok(routes.length >= 2);
  assert.ok(routes.every((route) => matchesRouteSearch(route, "冬のソナタ")));
});
