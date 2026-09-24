"use client";

import { useEffect, useRef } from "react";
import { getAdsenseConfig } from "../../utils/adsense-config";

declare global { interface Window { adsbygoogle?: Record<string, never>[] } }

export function AdSlot() {
  const initialized = useRef(false);
  const { enabled, client, slot } = getAdsenseConfig();
  useEffect(() => {
    if (!enabled || !slot || initialized.current) return;
    try {
      window.adsbygoogle = window.adsbygoogle ?? [];
      window.adsbygoogle.push({});
      initialized.current = true;
    } catch { /* Ad blockers must not interrupt route browsing. */ }
  }, [enabled, slot]);
  if (!enabled || !client || !slot) return null;
  return <aside className="ad-slot" aria-label="Advertisement"><span>Advertisement</span><ins className="adsbygoogle" style={{ display: "block" }} data-ad-client={client} data-ad-slot={slot} data-ad-format="auto" data-full-width-responsive="true" /></aside>;
}
