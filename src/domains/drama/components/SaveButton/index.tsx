"use client";

import { useState } from "react";
import { Bookmark } from "lucide-react";
import { useSavedRoutes } from "../../hooks/use-saved-routes";

export function SaveButton({ id, title, compact = false }: { id: string; title: string; compact?: boolean }) {
  const { savedIds, ready, toggleSaved } = useSavedRoutes();
  const [error, setError] = useState(false);
  const saved = savedIds.includes(id);
  return <div className={compact ? "save-control compact-save" : "save-control"}><button className={compact ? "save-icon" : "button button-outline"} type="button" aria-pressed={saved} aria-label={saved ? `Remove ${title} from saved routes` : `Save ${title}`} disabled={!ready} onClick={() => setError(!toggleSaved(id))}><Bookmark size={compact ? 19 : 17} fill={saved ? "currentColor" : "none"} aria-hidden="true" />{compact ? null : saved ? "Saved to your routes" : "Save this route"}</button>{error ? <p role="alert" className="save-error">Your browser couldn’t save this route. Allow site storage and try again.</p> : null}</div>;
}
