import { ImageResponse } from "next/og";
import { dramaRoutes, getDramaRoute } from "@/domains/drama/utils/drama-routes";

export const dynamic = "force-static";
export function generateStaticParams() { return dramaRoutes.map((route) => ({ slug: route.id })); }
export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const route = getDramaRoute((await params).slug);
  if (!route) return new Response("Story not found", { status: 404 });
  return new ImageResponse(<div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", height: "100%", background: "#f6f4ed", color: "#263c32", padding: "60px 80px" }}><div style={{ display: "flex", justifyContent: "space-between", fontSize: 27 }}><span>scene / korea</span><span>{route.format} · {route.stops.length} stops</span></div><div style={{ display: "flex", flexDirection: "column", gap: 22 }}><span style={{ fontSize: 30, color: "#606b61" }}>{route.title}</span><span style={{ fontSize: 70, lineHeight: 1.1, letterSpacing: "-2px" }}>{route.course}</span></div><div style={{ display: "flex", borderTop: "1px solid #b4beb0", paddingTop: 24, fontSize: 23 }}>{route.stops.map((stop) => stop.name).join(" → ")}</div></div>, { width: 1200, height: 630 });
}
