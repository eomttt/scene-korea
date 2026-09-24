import { z } from "zod";

const optionalUrl = z.union([z.literal(""), z.url().max(500).refine((value) => ["https:", "http:"].includes(new URL(value).protocol), "Use an http or https link.")]);

export const feedbackSchema = z.object({
  type: z.enum(["title", "scene"]),
  title: z.string().trim().min(1, "Please enter the title.").max(160),
  description: z.string().trim().max(2000),
  episode: z.string().trim().max(80),
  referenceUrl: optionalUrl,
  email: z.union([z.literal(""), z.email().max(320)]),
  website: z.literal(""),
  token: z.string().max(2048),
}).strict().refine((value) => value.type !== "scene" || value.description.length > 0, { message: "Tell us which scene you have in mind.", path: ["description"] });

export type Feedback = z.infer<typeof feedbackSchema>;
