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
    titleJa: "iPad CampFire System",
    titleEn: "iPad CampFire System",
    date: "2026.03.27",
    descriptionJa:
      "NxPC.Live vol.77 NxPC.Lab × draw();（CIRCUS TOKYO）にて初のフルセットパフォーマンスを実施。超音波同期技術を用いた独自のインスタレーション「iPad CampFire System」を会場中央に設置した。什器足元のスピーカーから発される可聴域外の音波をiPadのマイクが解析し、ポストプロセスのエフェクトや映像モードをリアルタイムに切り替える。音を聞くだけで映像が変わるこの仕組みは、火が燃え移る現象と相似であり、システム名の由来でもある。VJ映像はWebRTCでリアルタイム配信され、iPad側で複数の映像モードに変換。iPadのインカメラを活用したモードでは、近づいた来場者自身が映像の一部となる。正面スクリーン一極集中を崩し、会場の回遊性を生み出す装置として、自分たちのセットに限らずイベント全体を通じて常設稼働した。",
    descriptionEn:
      "First full-set performance at NxPC.Live vol.77 NxPC.Lab × draw(); (CIRCUS TOKYO). The original installation \"iPad CampFire System\" was placed at the center of the venue, using ultrasonic synchronization technology. Inaudible sound waves emitted from a speaker at the base of the fixture are analyzed by iPad microphones, switching post-processing effects and visual modes in real time. This mechanism — where visuals change simply by \"hearing\" a signal — mirrors the way fire spreads from one source to another, inspiring the system's name. VJ visuals are streamed via WebRTC and transformed into multiple modes on each iPad. In camera mode, approaching audience members become part of the visuals themselves. The system operated throughout the entire event, not just during hatakanata's set, breaking the single-screen paradigm and encouraging audience movement throughout the space.",
    tags: ["VJ", "Live Performance", "Installation"],
    thumbnail: "/works/nxpc-campfire-vj/thumbnail.jpg",
    images: [
      "/works/nxpc-campfire-vj/01.jpg",
      "/works/nxpc-campfire-vj/02.jpg",
      "/works/nxpc-campfire-vj/03.jpg",
      "/works/nxpc-campfire-vj/04.jpg",
      "/works/nxpc-campfire-vj/05.jpg",
      "/works/nxpc-campfire-vj/06.jpg",
    ],
    credit: [
      { role: "Performance", name: "hatakanata (hatake + kanata)" },
      { role: "Fixture Design", name: "門田健嗣 / Kenjy Monden" },
      { role: "System Development", name: "山岸奏大 / Yamagishi Kanata, 北島慎也 / Kitajima Shinya" },
      { role: "Special Thanks", name: "小峯愛華 / Komine Manaka" },
    ],
  },
];
