"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getCollectionHref, readTourFilters } from "../../utils/collection-filters";

export function CollectionReturnLink() {
  const searchParams = useSearchParams();
  const collectionHref = getCollectionHref(readTourFilters(searchParams));
  return <Link href={collectionHref} className="back-link"><ArrowLeft size={15} aria-hidden="true" /> All stories</Link>;
}
