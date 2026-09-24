"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { z } from "zod";
import { BotChallenge } from "../BotChallenge";

const responseSchema = z.object({ message: z.string() });

export function FeedbackForm({ initialTitle, initialType, available, siteKey }: { initialTitle: string; initialType: "title" | "scene"; available: boolean; siteKey: string }) {
  const [type, setType] = useState(initialType);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [message, setMessage] = useState("");
  const [token, setToken] = useState("");
  const [challengeVersion, setChallengeVersion] = useState(0);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!available || status === "sending") return;
    const form = new FormData(event.currentTarget);
    const value = (name: string) => { const entry = form.get(name); return typeof entry === "string" ? entry.trim() : ""; };
    setStatus("sending");
    setMessage("");
    try {
      const response = await fetch("/api/feedback", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ type, title: value("title"), description: value("description"), episode: value("episode"), referenceUrl: value("referenceUrl"), email: value("email"), website: value("website"), token }), signal: AbortSignal.timeout(20000) });
      const result = responseSchema.safeParse(await response.json());
      if (!result.success) throw new Error("Invalid response");
      setStatus(response.ok ? "sent" : "error");
      setMessage(result.data.message);
    } catch {
      setStatus("error");
      setMessage("We couldn’t confirm delivery. Your details are still here, so you can try again.");
    } finally { setToken(""); setChallengeVersion((value) => value + 1); }
  }

  if (status === "sent") return <section className="success-message" role="status"><Check size={28} aria-hidden="true" /><h2>Your story is on our list.</h2><p>{message}</p><Link href="/" className="button">Back to the collection</Link></section>;

  return <form className="feedback-form" onSubmit={submit}>
    {!available ? <p className="form-notice" role="status">Our request box is opening soon. You can browse the form, but requests can’t be sent yet.</p> : null}
    <fieldset><legend>What would you like to add?</legend><div className="request-types"><label className={type === "title" ? "selected" : ""}><input type="radio" name="type" value="title" checked={type === "title"} onChange={() => setType("title")} /><span>A drama or film<small>A whole new story to explore</small></span></label><label className={type === "scene" ? "selected" : ""}><input type="radio" name="type" value="scene" checked={type === "scene"} onChange={() => setType("scene")} /><span>A particular scene<small>A moment, a place, a memory</small></span></label></div></fieldset>
    <label htmlFor="request-title">Drama or film title <span>required</span></label><input id="request-title" name="title" defaultValue={initialTitle} required maxLength={160} placeholder="e.g. Lovely Runner" autoComplete="off" />
    <label htmlFor="request-description">{type === "scene" ? "Which scene or location?" : "What makes this story special to you?"} <span>{type === "scene" ? "required" : "optional"}</span></label><textarea id="request-description" name="description" rows={5} required={type === "scene"} maxLength={2000} placeholder={type === "scene" ? "Tell us what happens, who is there, or what the place looks like." : "A scene you keep replaying, or a place you’ve always wanted to visit…"} />
    {type === "scene" ? <><label htmlFor="request-episode">Episode or timestamp <span>optional</span></label><input id="request-episode" name="episode" maxLength={80} placeholder="e.g. Episode 3, around 24:00" /></> : null}
    <label htmlFor="request-reference">Scene or reference link <span>optional</span></label><input id="request-reference" name="referenceUrl" type="url" maxLength={500} placeholder="https://…" /><p className="field-hint">A trailer, official clip or page that helps us find the moment.</p>
    <label htmlFor="request-email">Your email <span>optional</span></label><input id="request-email" name="email" type="email" maxLength={320} autoComplete="email" placeholder="Only if you’d like us to follow up" />
    <div className="honeypot" aria-hidden="true"><label htmlFor="request-website">Leave this empty</label><input id="request-website" name="website" tabIndex={-1} autoComplete="off" /></div>
    <p className="privacy-note">Your request goes to our editorial team. Please don’t include private or sensitive information. <Link href="/privacy">How we use your details</Link></p>
    {available && siteKey ? <BotChallenge key={challengeVersion} siteKey={siteKey} onToken={setToken} /> : null}
    {status === "error" ? <p className="form-error" role="alert">{message}</p> : null}
    <button type="submit" className="button" disabled={!available || status === "sending" || Boolean(siteKey && !token)}>{status === "sending" ? "Sending your request…" : "Send your request"}<ArrowUpRight size={17} aria-hidden="true" /></button>
  </form>;
}
