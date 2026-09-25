"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getCollectionHref, getCollectionSearch, readTourFilters } from "../../utils/collection-filters";
import { requestCollectionScrollRestore } from "../../stores/collection-scroll";

export function CollectionReturnLink() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const filters = readTourFilters(searchParams);
  const collectionHref = getCollectionHref(filters);
  return <Link href={collectionHref} className="back-link" onNavigate={(event) => {
    if (!requestCollectionScrollRestore(getCollectionSearch(filters))) return;
    event.preventDefault();
    router.push(collectionHref, { scroll: false });
  }}><ArrowLeft size={15} aria-hidden="true" /> All stories</Link>;
}
