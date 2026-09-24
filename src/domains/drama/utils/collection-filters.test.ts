import assert from "node:assert/strict";
import { test } from "node:test";
import { defaultTourFilters, getCollectionHref, getCollectionSearch, readTourFilters, type TourFilters } from "./collection-filters";

test("a shared collection URL preserves Korean, spaces and reserved characters with both filters", () => {
  const filters: TourFilters = { query: "겨울 연가 & HERO /?", category: "international-film", duration: "half-day" };
  const url = new URL(getCollectionHref(filters), "https://scene-korea.example");
  assert.equal(url.pathname, "/");
  assert.equal(url.hash, "#collection");
  assert.deepEqual(readTourFilters(url.searchParams), filters);
});

test("unknown filter values fall back without discarding the title search", () => {
  assert.deepEqual(readTourFilters(new URLSearchParams("q=Winter+Sonata&category=unknown&duration=-1")), {
    query: "Winter Sonata", category: "all", duration: "all",
  });
  assert.equal(getCollectionHref(defaultTourFilters), "/#collection");
});

test("clearing search preserves category and duration while reset removes only collection filters", () => {
  const existing = "q=HERO&category=international-film&duration=short&utm_source=friend";
  const filters = readTourFilters(new URLSearchParams(existing));
  const cleared = new URLSearchParams(getCollectionSearch({ ...filters, query: "" }, existing));
  assert.equal(cleared.has("q"), false);
  assert.equal(cleared.get("category"), "international-film");
  assert.equal(cleared.get("duration"), "short");
  assert.equal(getCollectionSearch(defaultTourFilters, existing), "?utm_source=friend");
});
