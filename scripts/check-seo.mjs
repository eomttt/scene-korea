import { readFile } from "node:fs/promises";

const usage = "node scripts/check-seo.mjs --base-url http://localhost:3104 --canonical-origin https://www.scene-trip.com";
const failures = [];

function check(condition, message) {
  if (!condition) failures.push(message);
}

function readOptions() {
  const args = process.argv.slice(2);
  if (args.includes("--help")) return null;
  const values = new Map();
  for (let index = 0; index < args.length; index += 2) {
    const option = args[index];
    const value = args[index + 1];
    if (!["--base-url", "--canonical-origin"].includes(option) || !value || values.has(option)) throw new Error(usage);
    const url = new URL(value);
    if (!["http:", "https:"].includes(url.protocol) || url.username || url.password || url.pathname !== "/" || url.search || url.hash) throw new Error(`${option} must be an HTTP(S) origin.`);
    values.set(option, url.origin);
  }
  const baseUrl = values.get("--base-url");
  const canonicalOrigin = values.get("--canonical-origin");
  if (!baseUrl || !canonicalOrigin) throw new Error(usage);
  return { baseUrl, canonicalOrigin };
}

function decodeEntities(value) {
  const names = { amp: "&", quot: '"', apos: "'", lt: "<", gt: ">", nbsp: " " };
  return value.replace(/&(#x[\da-f]+|#\d+|amp|quot|apos|lt|gt|nbsp);/gi, (entity, name) => {
    if (!name.startsWith("#")) return names[name.toLowerCase()] ?? entity;
    const code = name[1].toLowerCase() === "x" ? Number.parseInt(name.slice(2), 16) : Number.parseInt(name.slice(1), 10);
    return code > 0 && code <= 0x10ffff ? String.fromCodePoint(code) : entity;
  });
}

function attributes(source) {
  const values = new Map();
  for (const match of source.matchAll(/([^\s=/>]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g)) values.set(match[1].toLowerCase(), decodeEntities(match[2] ?? match[3] ?? match[4]));
  return values;
}

function tags(html, tag) {
  return [...html.matchAll(new RegExp(`<${tag}\\b((?:"[^"]*"|'[^']*'|[^'">])*)>`, "gi"))].map((match) => attributes(match[1]));
}

function visibleText(html) {
  return decodeEntities(html.replace(/<[^>]*>/g, " ")).replace(/\s+/g, " ").trim();
}

function parsePage(html, label) {
  const structured = [];
  const markup = html.replace(/<!--[\s\S]*?-->/g, "").replace(/<script\b((?:"[^"]*"|'[^']*'|[^'">])*)>([\s\S]*?)<\/script\s*>/gi, (_tag, attrs, body) => {
    if (attributes(attrs).get("type") === "application/ld+json") {
      try { structured.push(JSON.parse(body)); }
      catch { failures.push(`${label}: invalid JSON-LD.`); }
    }
    return "";
  });
  const metadata = tags(markup, "meta");
  const meta = (name) => metadata.filter((tag) => tag.get("name") === name || tag.get("property") === name).map((tag) => tag.get("content") ?? "");
  return {
    titles: [...markup.matchAll(/<title\b[^>]*>([\s\S]*?)<\/title>/gi)].map((match) => visibleText(match[1])),
    headings: [...markup.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)].map((match) => visibleText(match[1])),
    canonicals: tags(markup, "link").filter((tag) => tag.get("rel")?.split(/\s+/).includes("canonical")).map((tag) => tag.get("href") ?? ""),
    links: tags(markup, "a").map((tag) => tag.get("href") ?? ""),
    meta,
    structured,
  };
}

function structuredNodes(value) {
  if (Array.isArray(value)) return value.flatMap(structuredNodes);
  if (value === null || typeof value !== "object") return [];
  return [value, ...Object.values(value).flatMap(structuredNodes)];
}

function hasType(node, type) {
  return node["@type"] === type || Array.isArray(node["@type"]) && node["@type"].includes(type);
}

function absoluteUrl(value) {
  try { return new URL(value); }
  catch { return null; }
}

function validLastModified(value) {
  if (!/^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2}))?$/.test(value)) return false;
  const date = new Date(value);
  const day = new Date(`${value.slice(0, 10)}T00:00:00Z`);
  return Number.isFinite(date.getTime()) && Number.isFinite(day.getTime()) && day.toISOString().slice(0, 10) === value.slice(0, 10);
}

async function mapLimited(items, action) {
  let index = 0;
  const results = [];
  await Promise.all(Array.from({ length: Math.min(4, items.length) }, async () => {
    while (index < items.length) {
      const current = index++;
      results[current] = await action(items[current]);
    }
  }));
  return results;
}

async function run({ baseUrl, canonicalOrigin }) {
  const request = (path, method = "GET") => fetch(new URL(path, baseUrl), { method, redirect: "manual", signal: AbortSignal.timeout(20_000), headers: { "User-Agent": "SceneTrip-SEO-Check/1.0", "Cache-Control": "no-cache" } });
  const catalog = JSON.parse(await readFile(new URL("../src/domains/drama/data/routes.json", import.meta.url), "utf8"));
  const imageAssets = JSON.parse(await readFile(new URL("../src/domains/drama/data/image-assets.json", import.meta.url), "utf8"));
  const blobImageUrls = new Set(Object.values(imageAssets).map((asset) => asset.url));
  const routesByPath = new Map(catalog.routes.map((route) => [`/stories/${route.id}`, route]));
  const sitemapResponse = await request("/sitemap.xml");
  if (sitemapResponse.status !== 200) throw new Error(`sitemap.xml returned ${sitemapResponse.status}.`);
  const sitemap = await sitemapResponse.text();
  const entries = [...sitemap.matchAll(/<url(?:\s[^>]*)?>([\s\S]*?)<\/url>/g)].map((match) => {
    const locations = [...match[1].matchAll(/<loc(?:\s[^>]*)?>([^<]*)<\/loc>/g)];
    if (locations.length !== 1) throw new Error("A sitemap <url> must have exactly one page <loc>.");
    return { url: decodeEntities(locations[0][1].trim()), lastmod: match[1].match(/<lastmod>([^<]*)<\/lastmod>/)?.[1].trim() ?? "" };
  });
  if (!entries.length) throw new Error("No page URLs found in sitemap.xml.");
  const sitemapUrls = new Set();
  const pages = [];
  for (const entry of entries) {
    const url = absoluteUrl(entry.url);
    if (!url) { failures.push(`Invalid sitemap URL: ${entry.url}`); continue; }
    check(url.origin === canonicalOrigin && !url.search && !url.hash, `Sitemap URL must use ${canonicalOrigin} without query/hash: ${entry.url}`);
    check(!sitemapUrls.has(url.href), `Duplicate sitemap URL: ${entry.url}`);
    check(validLastModified(entry.lastmod), `${entry.url}: missing or invalid ISO lastmod.`);
    sitemapUrls.add(url.href);
    pages.push(url);
  }
  for (const path of routesByPath.keys()) check(sitemapUrls.has(new URL(path, canonicalOrigin).href), `${path}: published tour missing from sitemap.`);

  const titles = new Map();
  const descriptions = new Map();
  const imageUrls = [];
  await mapLimited(pages, async (url) => {
    const label = url.pathname;
    try {
      const response = await request(url.pathname);
      check(response.status === 200, `${label}: expected 200, received ${response.status}.`);
      if (response.status !== 200) return;
      const page = parsePage(await response.text(), label);
      const expectedCanonical = new URL(url.pathname, canonicalOrigin).href;
      check(page.titles.length === 1 && page.titles[0].length > 0, `${label}: requires one nonempty title.`);
      const description = page.meta("description");
      check(description.length === 1 && description[0].trim().length > 0, `${label}: requires one nonempty meta description.`);
      for (const [kind, value, seen] of [["title", page.titles[0], titles], ["description", description[0], descriptions]]) {
        if (!value) continue;
        check(!seen.has(value), `${label}: duplicate ${kind} with ${seen.get(value)}.`);
        seen.set(value, label);
      }
      check(page.canonicals.length === 1 && absoluteUrl(page.canonicals[0])?.href === expectedCanonical, `${label}: canonical must equal ${expectedCanonical}.`);
      const openGraphUrl = page.meta("og:url");
      check(openGraphUrl.length === 1 && absoluteUrl(openGraphUrl[0])?.href === expectedCanonical, `${label}: og:url must equal canonical.`);
      check(!page.meta("robots").some((value) => /(?:^|[,\s])noindex(?:$|[,\s])/i.test(value)), `${label}: sitemap page is noindex.`);
      check(page.headings.length === 1 && page.headings[0].length > 0, `${label}: requires one nonempty H1.`);
      imageUrls.push(...page.meta("og:image"));

      const nodes = page.structured.flatMap(structuredNodes);
      const breadcrumbs = nodes.filter((node) => hasType(node, "BreadcrumbList"));
      const route = routesByPath.get(url.pathname);
      if (route) {
        check(page.headings[0]?.includes(route.title) && page.headings[0]?.includes(route.course), `${label}: H1 must include the work title and story title.`);
        const trips = nodes.filter((node) => hasType(node, "TouristTrip"));
        check(trips.length === 1 && trips[0].itinerary?.numberOfItems === route.stops.length && trips[0].itinerary?.itemListElement?.length === route.stops.length, `${label}: TouristTrip stop count does not match published data.`);
        check(breadcrumbs.length === 1, `${label}: requires one BreadcrumbList.`);
      }
      const linkedPaths = new Set(page.links.flatMap((href) => {
        const linked = new URL(href, expectedCanonical);
        return linked.origin === canonicalOrigin ? [linked.pathname] : [];
      }));
      for (const breadcrumb of breadcrumbs) {
        const items = breadcrumb.itemListElement;
        check(Array.isArray(items) && items.length >= 2, `${label}: BreadcrumbList requires at least two items.`);
        if (!Array.isArray(items)) continue;
        items.forEach((item, index) => {
          check(item.position === index + 1 && typeof item.name === "string" && item.name.trim().length > 0, `${label}: invalid breadcrumb position/name at ${index + 1}.`);
          const target = typeof item.item === "string" ? item.item : item.item?.["@id"] ?? item.item?.url;
          if (!target && index === items.length - 1) return;
          const itemUrl = absoluteUrl(target);
          check(itemUrl?.origin === canonicalOrigin && !itemUrl.search && !itemUrl.hash && sitemapUrls.has(itemUrl.href), `${label}: breadcrumb URL is not a canonical sitemap page: ${target}`);
          if (!itemUrl) return;
          if (index === items.length - 1) check(itemUrl.href === expectedCanonical, `${label}: final breadcrumb points to another page.`);
          else check(linkedPaths.has(itemUrl.pathname), `${label}: breadcrumb parent has no visible link: ${itemUrl.pathname}`);
        });
      }
    } catch (error) { failures.push(`${label}: ${error.message}`); }
  });

  await mapLimited(["/saved", "/request"], async (path) => {
    try {
      check(!sitemapUrls.has(new URL(path, canonicalOrigin).href), `${path}: private utility page must not appear in sitemap.`);
      const response = await request(path);
      check(response.status === 200, `${path}: expected 200, received ${response.status}.`);
      const page = parsePage(await response.text(), path);
      check(page.meta("robots").some((value) => /(?:^|[,\s])noindex(?:$|[,\s])/i.test(value)), `${path}: missing noindex.`);
    } catch (error) { failures.push(`${path}: ${error.message}`); }
  });
  const missingPath = "/stories/__seo-check-nonexistent-story__";
  const missing = await request(missingPath);
  check(missing.status === 404, `${missingPath}: expected 404, received ${missing.status}.`);
  const robotsResponse = await request("/robots.txt");
  check(robotsResponse.status === 200, "robots.txt must return 200.");
  const robots = await robotsResponse.text();
  check(robots.split(/\r?\n/).some((line) => line.trim() === `Sitemap: ${canonicalOrigin}/sitemap.xml`), "robots.txt must reference the canonical sitemap.");

  const sitemapImages = [...sitemap.matchAll(/<image:loc>([^<]*)<\/image:loc>/g)].map((match) => decodeEntities(match[1].trim()));
  check(sitemapImages.length > 0 && sitemapImages.every((url) => blobImageUrls.has(url)), "Sitemap images must reference the published Blob assets.");
  const samples = [...new Set([...imageUrls.slice(0, 3), ...sitemapImages.slice(0, 3)])].map(absoluteUrl).filter((url) => url && (url.origin === canonicalOrigin || blobImageUrls.has(url.href)));
  await mapLimited(samples, async (url) => {
    try {
      const response = await request(url.origin === canonicalOrigin ? url.pathname : url.href, "HEAD");
      check(response.status === 200 && response.headers.get("content-type")?.startsWith("image/"), `${url.pathname}: image sample is unavailable or not an image.`);
    } catch (error) { failures.push(`${url.pathname}: ${error.message}`); }
  });
  if (failures.length) {
    console.error(`SEO check failed: ${failures.length} issue(s) across ${pages.length} public pages.`);
    failures.forEach((failure) => console.error(`- ${failure}`));
    process.exitCode = 1;
  } else {
    console.log(`SEO check passed: ${pages.length} public pages, ${samples.length} image samples, utility-page noindex and missing-story 404.`);
    console.log(`Canonical origin: ${canonicalOrigin}`);
  }
}

try {
  const options = readOptions();
  if (options) await run(options);
  else console.log(usage);
} catch (error) {
  console.error(`SEO check failed: ${error.message}`);
  process.exitCode = 1;
}
