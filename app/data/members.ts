export type Member = {
  initials: string;
  nameJa: string;
  nameEn: string;
  role: string;
  bio: string;
  tags: string[];
};

export const MEMBERS: Member[] = [
  {
    initials: "山",
    nameJa: "山岸 奏大",
    nameEn: "Kanata Yamagishi",
    role: "Founder / Creative Director",
    bio: "デザインエンジニアリングを軸に、グラフィックの完成度と戦略の一気通貫を追求。rennurの構想者。",
    tags: [
      "Design Engineering",
      "Graphic Design",
      "PR Strategy",
      "Creative Technology",
    ],
  },
  {
    initials: "畑",
    nameJa: "畑 洋樹",
    nameEn: "Hiroki Hata",
    role: "Engineer / Event Producer",
    bio: "フロントエンドエンジニアリングと音楽制作を横断する実装者。DJとしてのイベント制作経験を持ち、体験の現場を動かす。",
    tags: ["Web Engineering", "Music Production", "Event Production", "DJ"],
  },
  {
    initials: "中",
    nameJa: "中村 太紀",
    nameEn: "Taiki Nakamura",
    role: "Spatial Designer / Architect",
    bio: "高島屋 P.・攻殻機動隊展の什器設計をリード。修士研究テーマは「ランニングと建築の関係」。体験の器を設計する。",
    tags: ["Spatial Design", "Architecture", "Exhibition Design", "Concept"],
  },
];
