import Link from "next/link";

export function SiteFooter() {
  return <footer className="site-footer">
    <div><Link href="/" className="wordmark">scene<span> / korea</span></Link><p>For the places you already know by heart.</p></div>
    <nav aria-label="Footer navigation"><Link href="/about">About this collection</Link><Link href="/request">Request a title or scene</Link><Link href="/privacy">Privacy</Link></nav>
    <p className="footer-note">Independent fan travel guides. Times are local estimates. Check current opening hours and access before visiting.</p>
  </footer>;
}
