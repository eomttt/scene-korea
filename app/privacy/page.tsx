import type { Metadata } from "next";
import Link from "next/link";
import { getPageMetadata } from "@/common/utils/seo";

export const metadata: Metadata = getPageMetadata({
  title: "Privacy: Saved Routes, Scene Requests & Advertising | Scene Korea",
  description: "Read how Scene Korea handles saved routes, temporary list positions, optional scene requests and advertising, including the external services used by the site.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return <article className="prose-page">
    <p className="eyebrow">Last updated 25 September 2026</p><h1>Privacy</h1>
    <h2>Browsing the collection</h2>
    <p>You can browse without an account. Search terms and filters appear in the page URL so you can return to the same results. They may be included in hosting request logs and in links you share.</p>
    <p>We do not request your location. External map and reference links open the provider’s website, which has its own privacy policy.</p>
    <h2>Your saved routes</h2>
    <p>Bookmarks are stored in this browser’s local storage and are not sent to our server. You can remove them on the Saved page or clear this site’s browser data. They do not sync across browsers or devices.</p>
    <h2>Your place in the collection</h2>
    <p>The site stores your list position and filter combination in session storage for this tab’s browsing session. This lets you return to the same place after reading a story.</p>
    <p>We do not upload session-storage entries to our server. Search terms and filters can still appear in page URLs and hosting request logs, as described above.</p>
    <h2>Requests you send</h2>
    <p>When the request box is open, your title, scene description, optional episode, reference link and optional email are sent to our editorial team in Slack. We use them to review suggestions and follow up when needed. Requests are not published on the site.</p>
    <p>You do not have to provide your name or email. Avoid sending private information in scene descriptions or links. To ask about a request or its deletion, use the <Link href="/request">request form</Link> and identify the original title and submission date without repeating sensitive details.</p>
    <h2>Hosting and verification</h2>
    <p>Vercel hosts the deployed website and may process technical request information to serve pages and maintain security. Vercel BotID checks browser signals to help reject automated submissions.</p>
    <p>If separately enabled, Cloudflare Turnstile provides an additional verification challenge. The verification token is checked on our server and is not sent to Slack.</p>
    <h2>Advertising</h2>
    <p>Google AdSense may display ads when advertising is enabled. Google and its partners may use cookies or similar technology to provide and measure ads, subject to consent where required. Read <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">how Google uses data on partner sites</a> and manage preferences through Google’s ad controls and any consent message shown on this site.</p>
    <h2>Fonts and analytics</h2>
    <p>Font files are served by this site; your browser does not contact Google Fonts to load them. No analytics service is added by this application.</p>
  </article>;
}
