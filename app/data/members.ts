export type Member = {
  initials: string;
  nameJa: string;
  nameEn: string;
  role: string;
  bio: string;
  bioEn: string;
  tags: string[];
  bg: string;
  portrait: string;
};

export const MEMBERS: Member[] = [
  {
    initials: "山",
    nameJa: "山岸 奏大",
    nameEn: "Kanata Yamagishi",
    role: "Founder / Creative Director / Runner",
    bio: "東京理科大学情報工学科、情報科学芸術大学院大学[IAMAS]卒。デザインエンジニアリングを軸に、グラフィックの完成度と戦略の一気通貫を追求する。",
    bioEn: "Graduated from Tokyo University of Science (Information Engineering) and IAMAS. Pursues the seamless integration of graphic quality and strategy through design engineering.",
    tags: ["Design Engineering", "Graphic Design", "PR Strategy"],
    bg: "/member/background/yamagishi-bg.png",
    portrait: "/member/portrait/yamagishi.png",
  },
  {
    initials: "畑",
    nameJa: "畑 洋樹",
    nameEn: "Hiroki Hata",
    role: "Engineer / Event Producer / Runner",
    bio: "東京理科大学情報工学科卒。フロントエンドエンジニアリングの傍ら、DJ、音楽イベントのオーガナイザーを行う。イベント制作経験を活かして、体験の現場を動かす。",
    bioEn: "Graduated from Tokyo University of Science (Information Engineering). Works in front-end engineering while DJing and organizing music events. Brings event production experience to drive the on-site experience.",
    tags: ["Web Engineering", "Event Production", "DJ"],
    bg: "/member/background/hata-bg.png",
    portrait: "/member/portrait/hata.png",
  },
  {
    initials: "中",
    nameJa: "中村 太紀",
    nameEn: "Taiki Nakamura",
    role: "Designer / Architect / Runner",
    bio: "東京理科大学工学研究科建築学専攻卒。修士研究テーマは「ランニングをツールとした現代都市空間の再解釈」。建築設計事務所での制作経験を通して、空間デザインを軸とした体験設計を行う。",
    bioEn: "Graduated from Tokyo University of Science (Architecture, Graduate School of Engineering). Master's thesis: \"Reinterpreting Contemporary Urban Space Using Running as a Tool.\" Designs spatial experiences through architectural practice.",
    tags: ["Spatial Design", "Architecture", "Exhibition Design", "Concept"],
    bg: "/member/background/nakamura-bg.png",
    portrait: "/member/portrait/nakamura.png",
  },
];
