import { createHash } from "node:crypto";
import { existsSync } from "node:fs";
import { readFile, readdir, rename, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { loadEnvFile } from "node:process";
import { BlobNotFoundError, head, put } from "@vercel/blob";
import sharp from "sharp";
import { z } from "zod";

const blobOrigin = "https://d9cx37rhzrr61yso.public.blob.vercel-storage.com";
const manifestPath = new URL("../src/domains/drama/data/image-assets.json", import.meta.url);
const assetSchema = z.object({
  url: z.url().refine((value) => value.startsWith(`${blobOrigin}/images/`)),
  sha256: z.string().regex(/^[a-f0-9]{64}$/),
  width: z.number().int().positive(),
  height: z.number().int().positive(),
  bytes: z.number().int().positive(),
});
const manifestSchema = z.record(z.string().regex(/^[a-z0-9-]+$/), assetSchema);
const usage = "npm run images:upload -- --from /absolute/path/to/webp-files | npm run images:verify";

function sha256(bytes) {
  return createHash("sha256").update(bytes).digest("hex");
}

async function readManifest() {
  if (!existsSync(manifestPath)) return {};
  return manifestSchema.parse(JSON.parse(await readFile(manifestPath, "utf8")));
}

async function writeManifest(manifest) {
  const sorted = Object.fromEntries(Object.entries(manifest).sort(([left], [right]) => left.localeCompare(right)));
  const temporaryPath = new URL(`${manifestPath.pathname}.tmp`, manifestPath);
  await writeFile(temporaryPath, `${JSON.stringify(sorted, null, 2)}\n`);
  await rename(temporaryPath, manifestPath);
}

async function verifyAsset(id, asset) {
  assetSchema.parse(asset);
  const expectedPath = `/images/${id}-${asset.sha256.slice(0, 16)}.webp`;
  if (new URL(asset.url).pathname !== expectedPath) throw new Error(`${id}: URL does not match its content hash.`);
  const response = await fetch(asset.url, { signal: AbortSignal.timeout(30_000), redirect: "error" });
  if (response.status !== 200 || !response.headers.get("content-type")?.startsWith("image/webp")) {
    throw new Error(`${id}: image returned ${response.status} or an unexpected content type.`);
  }
  const bytes = Buffer.from(await response.arrayBuffer());
  if (bytes.length !== asset.bytes || sha256(bytes) !== asset.sha256) throw new Error(`${id}: remote bytes differ from the recorded image.`);
  const metadata = await sharp(bytes).metadata();
  if (metadata.format !== "webp" || metadata.width !== asset.width || metadata.height !== asset.height) {
    throw new Error(`${id}: image dimensions or format differ from the manifest.`);
  }
}

async function uploadImages(directory) {
  const envPath = new URL("../.env.local", import.meta.url);
  if (existsSync(envPath)) loadEnvFile(envPath);
  const manifest = await readManifest();
  const files = (await readdir(directory)).filter((file) => file.endsWith(".webp")).sort();
  if (!files.length) throw new Error("No WebP files found in the input directory.");

  for (const [index, file] of files.entries()) {
    const id = file.slice(0, -5);
    if (!/^[a-z0-9-]+$/.test(id)) throw new Error(`${file}: use a lowercase image ID with hyphens.`);
    const bytes = await readFile(resolve(directory, file));
    const hash = sha256(bytes);
    const metadata = await sharp(bytes).metadata();
    if (metadata.format !== "webp" || !metadata.width || !metadata.height) throw new Error(`${file}: expected a valid WebP image.`);
    const pathname = `images/${id}-${hash.slice(0, 16)}.webp`;
    const url = `${blobOrigin}/${pathname}`;
    try {
      const stored = await head(url);
      if (stored.url !== url) throw new Error(`${id}: unexpected Blob store.`);
    } catch (error) {
      if (!(error instanceof BlobNotFoundError)) throw error;
      const uploaded = await put(pathname, bytes, {
        access: "public",
        addRandomSuffix: false,
        allowOverwrite: false,
        contentType: "image/webp",
        cacheControlMaxAge: 31_536_000,
      });
      if (uploaded.url !== url) throw new Error(`${id}: upload went to an unexpected Blob store.`);
    }
    const asset = assetSchema.parse({ url, sha256: hash, width: metadata.width, height: metadata.height, bytes: bytes.length });
    await verifyAsset(id, asset);
    manifest[id] = asset;
    await writeManifest(manifest);
    console.log(`Verified ${index + 1}/${files.length}: ${id}`);
  }
  console.log(`Uploaded or reused ${files.length} images. Manifest contains ${Object.keys(manifest).length} verified assets.`);
}

async function verifyImages() {
  const entries = Object.entries(await readManifest());
  if (!entries.length) throw new Error("Image manifest is empty.");
  for (let index = 0; index < entries.length; index += 4) {
    await Promise.all(entries.slice(index, index + 4).map(([id, asset]) => verifyAsset(id, asset)));
  }
  console.log(`Verified ${entries.length} public Blob images: status, content type, bytes, SHA-256 and dimensions.`);
}

try {
  const [command, option, directory, ...extra] = process.argv.slice(2);
  if (command === "verify" && !option) await verifyImages();
  else if (command === "upload" && option === "--from" && directory && !extra.length) await uploadImages(resolve(directory));
  else throw new Error(usage);
} catch (error) {
  console.error(error instanceof Error ? error.message : "Image operation failed.");
  process.exitCode = 1;
}
