import Image from "next/image";
import type { DramaCardData } from "../../models/model-drama-card";

export function StoryCover({ route, priority = false }: { route: DramaCardData; priority?: boolean }) {
  if (route.imageUrl) return <Image src={route.imageUrl} alt={route.imageCaption} fill sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw" priority={priority} />;
  return <div className={`story-cover ${route.format === "Film" ? "cover-film" : ""}`} aria-label={`Itinerary: ${route.stopNames.join(" to ")}`}><span className="cover-label">Follow the story</span><ol>{route.stopNames.map((name, index) => <li key={name}><span>{String(index + 1).padStart(2, "0")}</span>{name}</li>)}</ol><span className="cover-footer">A day inside {route.title}</span></div>;
}
