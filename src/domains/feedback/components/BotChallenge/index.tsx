"use client";

import Script from "next/script";
import { useCallback, useEffect, useRef } from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (element: HTMLElement, options: { sitekey: string; action: string; size: "flexible"; callback: (token: string) => void; "expired-callback": () => void; "error-callback": () => void }) => string;
      remove: (widget: string) => void;
    };
  }
}

export function BotChallenge({ siteKey, onToken }: { siteKey: string; onToken: (token: string) => void }) {
  const container = useRef<HTMLDivElement>(null);
  const widget = useRef<string | null>(null);
  const renderChallenge = useCallback(() => {
    if (!container.current || !window.turnstile || widget.current !== null) return;
    widget.current = window.turnstile.render(container.current, { sitekey: siteKey, action: "feedback", size: "flexible", callback: onToken, "expired-callback": () => onToken(""), "error-callback": () => onToken("") });
  }, [siteKey, onToken]);
  useEffect(() => {
    renderChallenge();
    return () => { if (widget.current !== null) window.turnstile?.remove(widget.current); widget.current = null; };
  }, [renderChallenge]);
  return <><Script src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit" onReady={renderChallenge} /><div ref={container} className="bot-challenge" /></>;
}
