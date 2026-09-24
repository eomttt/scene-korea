"use client";

import { useSyncExternalStore } from "react";
import { z } from "zod";
import { dramaRoutes } from "../utils/drama-routes";

const storageKey = "scene-korea:saved-routes:v1";
const changeEvent = "scene-korea:saved-changed";
const idsSchema = z.array(z.string());
const knownIds = new Set(dramaRoutes.map((route) => route.id));

function readSnapshot() {
  try { return window.localStorage.getItem(storageKey) ?? "[]"; }
  catch { return "[]"; }
}
function serverSnapshot() { return null; }
function subscribe(notify: () => void) {
  const onStorage = (event: StorageEvent) => { if (event.key === storageKey || event.key === null) notify(); };
  window.addEventListener("storage", onStorage);
  window.addEventListener(changeEvent, notify);
  return () => { window.removeEventListener("storage", onStorage); window.removeEventListener(changeEvent, notify); };
}
function parseIds(snapshot: string | null) {
  try {
    const result = idsSchema.safeParse(JSON.parse(snapshot ?? "[]"));
    return result.success ? [...new Set(result.data)].filter((id) => knownIds.has(id)) : [];
  } catch { return []; }
}

export function useSavedRoutes() {
  const snapshot = useSyncExternalStore(subscribe, readSnapshot, serverSnapshot);
  const savedIds = parseIds(snapshot);
  function toggleSaved(id: string) {
    if (!knownIds.has(id)) return false;
    const current = parseIds(readSnapshot());
    const next = current.includes(id) ? current.filter((item) => item !== id) : [...current, id];
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(next));
      window.dispatchEvent(new Event(changeEvent));
      return true;
    } catch { return false; }
  }
  return { savedIds, ready: snapshot !== null, toggleSaved };
}
