import type { Metadata } from "next";
import Link from "next/link";
import { getPageMetadata } from "@/common/utils/seo";

export const metadata: Metadata = getPageMetadata({
  title: "About Scene Korea: How We Research Filming-Location Tours",
  description: "Learn how Scene Korea uses fan discussions, Korean travel blogs and tourism sources to build independent, self-guided filming-location tours in Korea.",
  path: "/about",
});

export default function AboutPage() {
  return <article className="prose-page">
    <p className="eyebrow">From the screen to your day</p>
    <h1>About Scene Korea</h1>
    <p>Scene Korea is an independent collection of self-guided filming-location routes for international film and drama fans. Start with a story you love, then follow its memorable moments into real places.</p>
    <h2>How we choose stories</h2>
    <p>We look for stories that fans discuss, recommend or travel to see. Our research includes English-speaking, Chinese-speaking, Japanese and European communities, alongside requests from readers. A fan recommendation helps us choose what to research; it does not establish a worldwide popularity ranking.</p>
    <h2>How we check locations</h2>
    <p>We compare Korean travel blogs, tourism organizations and overseas visitor accounts to connect places with scenes. We distinguish an actual filming location from a story setting or a nearby place to take a break. Episode numbers are included when the sources support them.</p>
    <p>Source coverage varies by route. We have not visited every place ourselves or researched every title in every audience community. A reference check date records our research, not a guarantee of current opening hours or access.</p>
    <h2>One story for one outing</h2>
    <p>Each tour groups nearby locations from one drama or film into an outing of one day or less. A title can have several routes, each following different scenes. <Link href="/filming-locations">Browse by title</Link> to find the story you want to revisit.</p>
    <p>Route durations are editorial estimates for the local outing, including photo breaks. Travel to the first stop is extra. Check current opening hours, transport and access before setting out.</p>
    <h2>Images and credits</h2>
    <p>Captions distinguish drama stills, location photographs and recreated sets. Credits and image source links appear on each route; an older photograph may show a place before later changes. The collection is not affiliated with the shows, broadcasters or tourism organizations featured here.</p>
    <h2>Help shape the next route</h2>
    <p>Have a drama, film or scene in mind, or a correction to share? <Link href="/request">Send a request</Link> and tell us what you would like us to check.</p>
  </article>;
}
