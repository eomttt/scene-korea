import Link from "next/link";

export default function NotFound() {
  return <div className="prose-page"><p className="eyebrow">A scene we haven’t found</p><h1>This story isn’t here yet.</h1><p>Head back to the collection to find your next day in Korea.</p><Link href="/" className="button">Explore the collection</Link></div>;
}
