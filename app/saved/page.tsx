import type { Metadata } from "next";
import { SavedCollection } from "@/domains/drama/components/SavedCollection";
import { dramaRoutes } from "@/domains/drama/utils/drama-routes";

export const metadata: Metadata = { title: "Your saved routes", robots: { index: false, follow: true } };
export default function SavedPage() {
  return <section><header className="page-heading"><p className="eyebrow">A little collection of your own</p><h1>Your saved stories.</h1><p>All the days you’d love to live, in one place. Saved on this browser, ready when you come back.</p></header><SavedCollection routes={dramaRoutes} /></section>;
}
