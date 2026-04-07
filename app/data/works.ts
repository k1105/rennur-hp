export type Work = {
  id: string;
  titleJa: string;
  titleEn: string;
  date: string;
  descriptionJa: string;
  descriptionEn: string;
  tags: string[];
  thumbnail: string;
  images: string[];
  credit: { role: string; name: string }[];
};

export const WORKS: Work[] = [
  {
    id: "nxpc-campfire-vj",
    titleJa: "キャンプファイヤーVJ",
    titleEn: "Campfire VJ",
    date: "2026",
    descriptionJa: "NxPCにて実施したキャンプファイヤーVJパフォーマンス。",
    descriptionEn:
      "Campfire VJ performance at NxPC.",
    tags: ["VJ", "Live Performance"],
    thumbnail: "/works/nxpc-campfire-vj/thumbnail.png",
    images: [],
    credit: [],
  },
];
