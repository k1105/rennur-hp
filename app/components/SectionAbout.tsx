import s from "./SectionAbout.module.css";

export default function SectionAbout() {
  return (
    <section id="about" className={s.section}>
      <p className="lbl global-text-md">About</p>
      <p className="ja-prose global-text-xl">
        rennur（リニューアル）は、ランニングをきっかけに出会った３人のクリエイティブユニット。
        建築、エンジニアリング、広告など異なるバックグラウンドのメンバーが集い、
        「体験のアーキタイプ制作」を目的としたR&amp;D事業と、
        手法に捉われないソリューションを提案・実施するブランディング事業に取り組みます。
      </p>
    </section>
  );
}
