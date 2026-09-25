import { dramaRoutes, type DramaRoute } from "./drama-routes";

const guideIntroductions = [
  {
    slug: "lovely-runner",
    title: "Lovely Runner",
    ko: "선재 업고 튀어",
    intro: "Choose Sol and Sun-jae's Suwon neighborhood, school-day scenes in Bukchon, or their amusement-park date at Sapgyoho. Each story has its own starting point and local route.",
  },
  {
    slug: "goblin",
    title: "Goblin",
    ko: "도깨비",
    intro: "Follow Kim Shin and Eun-tak through Gangwon, central Seoul or Incheon, or visit Sunny and the Grim Reaper's footbridge in Yongdap. These scenes make separate outings.",
  },
  {
    slug: "itaewon-class",
    title: "Itaewon Class",
    ko: "이태원 클라쓰",
    intro: "Start with DanBam and Saeroyi's new beginning, follow his changing relationship with Yi-seo, or find her confrontation and rooftop kiss. Compare separate walks through Seoul's hills.",
  },
  {
    slug: "queen-of-tears",
    title: "Queen of Tears",
    ko: "눈물의 여왕",
    intro: "Choose the Queens family's department-store world in Seoul, dates in Mungyeong, or the greenhouse that became their rooftop garden in Suwon. Keep these journeys on separate days.",
  },
  {
    slug: "kingdom",
    title: "Kingdom",
    ko: "킹덤",
    intro: "Choose the royal courts in Seoul or the mountain-pass gates in Mungyeong. Each route follows a different side of the struggle between the palace and the plague.",
  },
  {
    slug: "parasite",
    title: "Parasite",
    ko: "기생충",
    intro: "Follow the tutoring opportunity in Ahyeon, the family's rainy escape across Seoul, or their plan over pizza in Noryangjin. Each route follows a different turn in the Kim family's story.",
  },
  {
    slug: "winter-sonata",
    title: "Winter Sonata",
    ko: "겨울연가",
    intro: "Choose first-love memories on Nami Island, the missed bus and meeting place in Chuncheon, or the mountain romance at Yongpyong. Compare an island outing, a city walk and a cable-car trip.",
  },
  {
    slug: "avengers-age-of-ultron",
    title: "Avengers: Age of Ultron",
    ko: "어벤져스: 에이지 오브 울트론",
    intro: "Find Helen Cho's floating laboratory, the Sangam plaza beneath the Quinjet, or the Gangnam street used for the motorcycle chase. Each Seoul location makes a separate short visit.",
  },
  {
    slug: "black-panther",
    title: "Black Panther",
    ko: "블랙 팬서",
    intro: "Choose the chase's market streets in Jagalchi or its coastal setting at Gwangalli. These short Busan walks focus on separate stretches of the pursuit.",
  },
  {
    "slug": "crash-landing-on-you",
    "title": "Crash Landing on You",
    "ko": "사랑의 불시착",
    "intro": "Choose the reunions beside Chungju's water or the Yeongwol take-off site that opens Se-ri's journey. These are separate local visits; allow extra time to reach each starting point."
  },
  {
    "slug": "hometown-cha-cha-cha",
    "title": "Hometown Cha-Cha-Cha",
    "ko": "갯마을 차차차",
    "intro": "Walk through Gongjin's market and clinic settings, or focus on the beach where Hye-jin and Du-sik first cross paths. Choose a village outing or a shorter seaside scene."
  },
  {
    "slug": "our-beloved-summer",
    "title": "Our Beloved Summer",
    "ko": "그 해 우리는",
    "intro": "Choose Ung and Yeon-su's familiar Suwon neighborhood or their forest-side retreat at Onbit in Nonsan. The city walk and woodland visit belong on separate days."
  },
  {
    "slug": "my-love-from-the-star",
    "title": "My Love from the Star",
    "ko": "별에서 온 그대",
    "intro": "Visit Min-jun's Seoul café and tower memories, or find the kiss that lifts Song-yi off her feet at Petite France in Gapyeong. Compare the city route with a trip to the hillside village."
  },
  {
    "slug": "business-proposal",
    "title": "Business Proposal",
    "ko": "사내맞선",
    "intro": "Choose flowers and theme-park moments in Seoul or the closing proposal at Jayu Park in Incheon. Each route focuses on a different stage of Tae-moo and Ha-ri's romance."
  },
  {
    "slug": "king-the-land",
    "title": "King the Land",
    "ko": "킹더랜드",
    "intro": "Follow the island date and promotional shoot around Jeju, or visit the hotel lobby used for Sa-rang's workplace. Check hotel visitor access before making the lobby your destination."
  },
  {
    "slug": "true-beauty",
    "title": "True Beauty",
    "ko": "여신강림",
    "intro": "Choose Ju-kyung and Su-ho's comic-shop lanes in Seoul or the beach-and-skywalk trip in Namhae. The southern coast needs its own day and local transport."
  },
  {
    "slug": "hotel-del-luna",
    "title": "Hotel del Luna",
    "ko": "호텔 델루나",
    "intro": "Find Man-wol's memories in Seoul's café and bookshop, or stand before the hotel's familiar entrance in Mokpo. The façade and Seoul scenes are separate journeys."
  },
  {
    "slug": "vincenzo",
    "title": "Vincenzo",
    "ko": "빈센조",
    "intro": "Choose Geumga Plaza and the legal world's Seoul exteriors, coffee and snacks with Cha-young, or their serious riverside conversation in Chungju. Each route follows a different side of Vincenzo's life."
  },
  {
    "slug": "mr-sunshine",
    "title": "Mr. Sunshine",
    "ko": "미스터 션샤인",
    "intro": "Explore old Hanseong and the Glory Hotel at Sunshine Studio, or visit the narrow bridge where Eugene and Ae-shin hold hands at Manhyujeong. Plan Nonsan and Andong separately."
  },
  {
    "slug": "the-glory",
    "title": "The Glory",
    "ko": "더 글로리",
    "intro": "Follow Dong-eun's Go lessons and Hye-jeong's temple visit in Cheongju, or see the Go plaza tied to Ha Do-yeong in Cheongna. The latter is viewed from outside its barriers."
  },
  {
    "slug": "its-okay-to-not-be-okay",
    "title": "It’s Okay to Not Be Okay",
    "ko": "사이코지만 괜찮아",
    "intro": "Choose the hospital garden and seaside promise in Goseong, or Mun-yeong's first impression and Jae-su's chicken shop in Incheon. Each outing focuses on a different chapter."
  },
];

export const titleGuides = guideIntroductions.map((guide) => ({
  ...guide,
  routes: dramaRoutes.filter((route) => route.title === guide.title),
})).filter((guide) => guide.routes.length > 1);

export function getTitleGuide(slug: string) {
  return titleGuides.find((guide) => guide.slug === slug);
}

export function getTitleGuideForRoute(route: Pick<DramaRoute, "title">) {
  return titleGuides.find((guide) => guide.title === route.title);
}
