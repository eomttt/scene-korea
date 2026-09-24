import assert from "node:assert/strict";
import { test } from "node:test";
import { dramaRoutes, getDramaRoute } from "./drama-routes";
import { matchesRouteSearch, matchesTourDuration } from "./route-search";

test("finds a route by a work title combined with a filming place", () => {
  const matches = dramaRoutes.filter((route) => matchesRouteSearch(route, "Itaewon Noksapyeong"));
  assert.deepEqual(matches.map((route) => route.id), ["itaewon"]);
  assert.equal(dramaRoutes.some((route) => matchesRouteSearch(route, "Itaewon impossible-location")), false);
});

test("accepts Korean spacing, punctuation and full-width English", () => {
  const route = getDramaRoute("itaewon");
  assert.ok(route);
  for (const query of ["이태원클라쓰", "이태원 클라쓰", "ＩＴＡＥＷＯＮ", "Itaewon-class", "  "]) {
    assert.equal(matchesRouteSearch(route, query), true, query);
  }
});

test("duration filters use the upper estimate so a longer route is not shown as a short visit", () => {
  const shortRoute = getDramaRoute("itaewon");
  const mediumRoute = getDramaRoute("lovely");
  const longRoute = getDramaRoute("hometown");
  assert.ok(shortRoute && mediumRoute && longRoute);
  assert.equal(matchesTourDuration(shortRoute, "short"), true);
  assert.equal(matchesTourDuration(mediumRoute, "short"), false);
  assert.equal(matchesTourDuration(mediumRoute, "half-day"), true);
  assert.equal(matchesTourDuration(longRoute, "half-day"), false);
  assert.equal(matchesTourDuration(longRoute, "full-day"), true);
});

test("a film title does not match unrelated words joined across spaces", () => {
  const unrelatedRoute = getDramaRoute("romance-bonus-recognition");
  const filmRoute = getDramaRoute("hero-busan-investigation");
  assert.ok(unrelatedRoute && filmRoute);
  assert.equal(matchesRouteSearch(unrelatedRoute, "HERO"), false);
  assert.equal(matchesRouteSearch(filmRoute, "HERO"), true);
});
