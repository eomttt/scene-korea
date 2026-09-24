"use client";

import Link from "next/link";
import { Bookmark } from "lucide-react";
import { useSavedRoutes } from "../../hooks/use-saved-routes";

export function SavedNav() {
  const { savedIds } = useSavedRoutes();
  return <Link href="/saved" className="saved-nav" aria-label={`Saved routes, ${savedIds.length} saved`}><Bookmark size={16} aria-hidden="true" /><span>Saved</span><span className="saved-count">{savedIds.length}</span></Link>;
}
