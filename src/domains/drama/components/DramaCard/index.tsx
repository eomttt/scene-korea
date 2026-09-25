import Link from "next/link";
import { ArrowUpRight, Clock3 } from "lucide-react";
import type { DramaRoute } from "../../utils/drama-routes";
import { SaveButton } from "../SaveButton";
import { StoryCover } from "../StoryCover";

export function DramaCard({ route, priority = false, collectionSearch = "", onNavigate }: { route: DramaRoute; priority?: boolean; collectionSearch?: string; onNavigate?: () => void }) {
  return <article className="drama-card"><Link href={`/stories/${route.id}${collectionSearch}`} onNavigate={onNavigate} className="card-link" aria-label={`Explore ${route.course} from ${route.title}`}>
    <div className="card-image"><StoryCover route={route} priority={priority} />{route.image ? <span className="image-label">{route.imageType}</span> : null}</div>
    <div className="card-copy"><p className="card-title">{route.title} <span>· {route.format}</span></p><h3>{route.course}</h3><p className="card-hook">{route.hook}</p><div className="card-meta"><span><Clock3 size={14} aria-hidden="true" />{route.duration}</span><span>{route.stops.length} {route.stops.length === 1 ? "stop" : "stops"} <ArrowUpRight size={16} aria-hidden="true" /></span></div></div>
  </Link><SaveButton id={route.id} title={route.course} compact /></article>;
}
