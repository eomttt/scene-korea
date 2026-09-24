import Image from "next/image";
import type { DramaRoute } from "../../utils/drama-routes";

export function StoryCover({ route, priority = false }: { route: DramaRoute; priority?: boolean }) {
  if (route.image) return <Image src={`/images/${route.image}.webp`} alt={route.imageCaption} fill sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw" priority={priority} />;
  return <div className={`story-cover ${route.format === "Film" ? "cover-film" : ""}`} aria-label={`Itinerary: ${route.stops.map((stop) => stop.name).join(" to ")}`}><span className="cover-label">Follow the story</span><ol>{route.stops.map((stop, index) => <li key={stop.name}><span>{String(index + 1).padStart(2, "0")}</span>{stop.name}</li>)}</ol><span className="cover-footer">A day inside {route.title}</span></div>;
}
