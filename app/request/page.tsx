import type { Metadata } from "next";
import { FeedbackForm } from "@/domains/feedback/components/FeedbackForm";
import { getFeedbackAvailability } from "@/domains/feedback/utils/feedback-handler";
import { getDramaRoute } from "@/domains/drama/utils/drama-routes";

export const metadata: Metadata = { title: "Request a title or scene", robots: { index: false, follow: true } };
export const dynamic = "force-dynamic";

export default async function RequestPage({ searchParams }: { searchParams: Promise<{ type?: string; story?: string }> }) {
  const query = await searchParams;
  const route = typeof query.story === "string" ? getDramaRoute(query.story) : undefined;
  return <div className="request-page"><header className="page-heading"><p className="eyebrow">Help write the next chapter</p><h1>What story should<br />we follow next?</h1><p>Tell us the drama you love, or the scene you wish you could step into. We’ll use your ideas to shape future routes.</p></header><FeedbackForm initialTitle={route?.title ?? ""} initialType={query.type === "scene" ? "scene" : "title"} {...getFeedbackAvailability()} /></div>;
}
