import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export function GET() {
  return new ImageResponse(<div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", height: "100%", background: "#f6f4ed", color: "#263c32", padding: "64px 80px" }}><div style={{ display: "flex", fontSize: 32 }}>scene / korea</div><div style={{ display: "flex", flexDirection: "column", fontSize: 74, letterSpacing: "-2px", lineHeight: 1.12 }}><span>You know the story.</span><span>Now step inside.</span></div><div style={{ display: "flex", borderTop: "1px solid #b4beb0", paddingTop: 24, fontSize: 24 }}>30 story itineraries from Korean dramas and films</div></div>, { width: 1200, height: 630 });
}
