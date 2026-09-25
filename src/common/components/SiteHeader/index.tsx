import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

export function SiteHeader({ savedLink }: { savedLink: ReactNode }) {
  return <header className="site-header">
    <Link href="/" className="wordmark" aria-label="Scene Korea home">scene<span> / korea</span></Link>
    <nav aria-label="Main navigation">
      <Link href="/#collection" className="collection-nav">The collection</Link>
      <Link href="/filming-locations" className="collection-nav">Browse titles</Link>
      {savedLink}
      <Link href="/request" className="button button-small button-outline">Request a story <ArrowUpRight size={15} aria-hidden="true" /></Link>
    </nav>
  </header>;
}
