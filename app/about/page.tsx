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
    <h2>Practical planning notes</h2>
    <p>Selected routes include a suggested schedule, arrival advice, admission and transport considerations, access restrictions and a weather alternative. These are desk-researched guides, not first-hand accounts of visits. Travel references and their check date appear with each planning guide.</p>
    <p>A suggested time is a planning allowance, not a train timetable or a live traffic prediction. Where sources disagree or a current price cannot be confirmed, we point you to the operator instead of quoting an unverified fare. A one-stop route is a short location visit; it is not a full-day organized tour.</p>
    <h2>Images and credits</h2>
    <p>We publish photographs with a recorded reuse license and show the photographer, source, license and image changes beside the picture. A location photograph shows the place, not a frame from the production. An older photograph may show a place before later changes.</p>
    <p>We choose a photograph of a route stop where possible. “Nearby scenery” shows the surrounding neighbourhood; “Regional scenery” shows a landmark or landscape in the wider area. The caption names the place pictured and explains its connection to the route. These photographs are not presented as drama scenes or as filming stops they do not show. We choose different photographs for different tours.</p>
    <p>Production stills require permission that covers their use here. If we cannot find a suitable licensed photograph, the route uses an itinerary cover. The collection is not affiliated with the shows, broadcasters or tourism organizations featured here.</p>
    <h2>Help shape the next route</h2>
    <p>Have a drama, film or scene in mind, or a correction to share? <Link href="/request">Send a request</Link> and tell us what you would like us to check.</p>
  </article>;
}
