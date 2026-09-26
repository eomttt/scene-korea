export type RouteSearchIndex = {
  searchText: string;
  compactTitles: string[];
};

export type DramaCardData = {
  id: string;
  title: string;
  course: string;
  hook: string;
  duration: string;
  format: string;
  image: string;
  imageUrl: string;
  imageCaption: string;
  imageType: string;
  stopNames: string[];
};

export type DramaCollectionItem = DramaCardData & {
  category: string;
  maxHours: number;
  searchIndex: RouteSearchIndex;
};
