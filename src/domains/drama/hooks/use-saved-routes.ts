"use client";

import { useSyncExternalStore } from "react";
import { z } from "zod";
import { useKnownRouteIds } from "../components/SavedRoutesProvider";

const storageKey = "scene-korea:saved-routes:v1";
const changeEvent = "scene-korea:saved-changed";
const idsSchema = z.array(z.string());

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
function parseIds(snapshot: string | null, knownIds: ReadonlySet<string>) {
  try {
    const result = idsSchema.safeParse(JSON.parse(snapshot ?? "[]"));
    return result.success ? [...new Set(result.data)].filter((id) => knownIds.has(id)) : [];
  } catch { return []; }
}

export function useSavedRoutes() {
  const knownIds = useKnownRouteIds();
  const snapshot = useSyncExternalStore(subscribe, readSnapshot, serverSnapshot);
  const savedIds = parseIds(snapshot, knownIds);
  function toggleSaved(id: string) {
    if (!knownIds.has(id)) return false;
    const current = parseIds(readSnapshot(), knownIds);
    const next = current.includes(id) ? current.filter((item) => item !== id) : [...current, id];
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(next));
      window.dispatchEvent(new Event(changeEvent));
      return true;
    } catch { return false; }
  }
  return { savedIds, ready: snapshot !== null, toggleSaved };
}
