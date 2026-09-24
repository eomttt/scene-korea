import Script from "next/script";
import { getAdsenseConfig } from "../../utils/adsense-config";

export function AdSenseScript() {
  const config = getAdsenseConfig();
  if (!config.enabled) return null;
  return <Script id="google-adsense" async strategy="afterInteractive" crossOrigin="anonymous" src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${config.client}`} />;
}
