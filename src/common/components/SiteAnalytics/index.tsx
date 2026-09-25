"use client";

import { Analytics, type BeforeSendEvent } from "@vercel/analytics/next";

function stripPageQuery(event: BeforeSendEvent) {
  const url = new URL(event.url);
  url.search = "";
  url.hash = "";
  return { ...event, url: url.href };
}

export function SiteAnalytics() {
  return <Analytics beforeSend={stripPageQuery} />;
}
