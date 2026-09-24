import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock3 } from "lucide-react";
import type { DramaRoute } from "../../utils/drama-routes";
import { SaveButton } from "../SaveButton";

export function DramaCard({ route, priority = false }: { route: DramaRoute; priority?: boolean }) {
  return <article className="drama-card"><Link href={`/stories/${route.id}`} className="card-link" aria-label={`Explore ${route.title}`}>
    <div className="card-image"><Image src={`/images/${route.image}.webp`} alt={route.imageCaption} fill sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw" priority={priority} /><span className="image-label">{route.imageType}</span></div>
    <div className="card-copy"><h3>{route.title}</h3><p className="korean-title" lang="ko">{route.ko}</p><p className="card-course">{route.course}</p><div className="card-meta"><span><Clock3 size={14} aria-hidden="true" />{route.duration}</span><span>Explore <ArrowUpRight size={16} aria-hidden="true" /></span></div></div>
  </Link><SaveButton id={route.id} title={route.title} compact /></article>;
}
