import assert from "node:assert/strict";
import { test } from "node:test";
import imageAssets from "../data/image-assets.json";
import { dramaRouteToCard } from "../parsers/drama-route-to-card";
import { dramaRoutes } from "./drama-routes";
import { getImageUrl } from "./image-assets";

test("published images resolve to immutable files in the connected public Blob store", () => {
  assert.ok(Object.keys(imageAssets).length > 0);

  for (const [imageId, asset] of Object.entries(imageAssets)) {
    const url = new URL(getImageUrl(imageId));

    assert.equal(url.origin, "https://d9cx37rhzrr61yso.public.blob.vercel-storage.com", imageId);
    assert.equal(url.pathname, `/images/${imageId}-${asset.sha256.slice(0, 16)}.webp`, imageId);
    assert.equal(url.search, "", imageId);
    assert.equal(url.hash, "", imageId);
    assert.equal(url.username, "", imageId);
    assert.equal(url.password, "", imageId);
    assert.match(asset.sha256, /^[a-f0-9]{64}$/, imageId);
    for (const value of [asset.width, asset.height, asset.bytes]) {
      assert.ok(Number.isSafeInteger(value) && value > 0, imageId);
    }
  }
});

test("unknown image IDs cannot produce guessed or inherited image URLs", () => {
  for (const imageId of ["", "missing-image", "__proto__", "constructor", "../../outside"]) {
    assert.throws(() => getImageUrl(imageId), /Image asset is missing/);
  }
});

test("cards receive resolved image URLs and retain captions and image labels", () => {
  for (const route of dramaRoutes) {
    const card = dramaRouteToCard(route);

    assert.equal(card.imageUrl, route.image ? getImageUrl(route.image) : "", route.id);
    assert.equal(card.imageCaption, route.imageCaption, route.id);
    assert.equal(card.imageType, route.imageType, route.id);
  }
});
