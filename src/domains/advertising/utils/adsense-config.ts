const publisherPattern = /^ca-pub-\d{16}$/;
const slotPattern = /^\d{10}$/;

export function getAdsenseConfig() {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID ?? "";
  const slot = process.env.NEXT_PUBLIC_ADSENSE_SLOT_ID ?? "";
  const validClient = publisherPattern.test(client) ? client : null;
  return {
    client: validClient,
    slot: slotPattern.test(slot) ? slot : null,
    enabled: process.env.NEXT_PUBLIC_ADSENSE_ENABLED === "true" && validClient !== null,
  };
}

export function buildAdsTxt(client: string | null) {
  if (!client || !publisherPattern.test(client)) return null;
  return `google.com, ${client.replace(/^ca-/, "")}, DIRECT, f08c47fec0942fa0\n`;
}
