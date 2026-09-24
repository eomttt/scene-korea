import { checkBotId } from "botid/server";
import { handleFeedback } from "@/domains/feedback/utils/feedback-handler";

export const runtime = "nodejs";
export function POST(request: Request) {
  return handleFeedback(request, async () => !(await checkBotId()).isBot);
}
