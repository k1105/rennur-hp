import s from "./SectionAbout.module.css";

export default function SectionAbout() {
  return (
    <section id="about">
      <p className="lbl global-text-xs">About</p>
      <p className="ja-prose global-text-xl">
        rennur（リニューアル）は、ランニングをきっかけに出会った３人のクリエイティブユニット。
        建築、エンジニアリング、広告など異なるバックグラウンドのメンバーが集い、
        「体験のアーキタイプ制作」を目的としたR&amp;D事業と、
        手法に捉われないソリューションを提案・実施するブランディング事業に取り組みます。
      </p>

      <hr className="div" />

      <p className="lbl global-text-xs">Work with us</p>
      <div className={s.ctaWrap}>
        <p className={`${s.ctaJa} global-text-md`}>
          rennurは現在、
          <strong>カルチャー・アート・ソーシャル領域</strong>
          のブランドや組織と、
          PR戦略から体験制作まで一気通貫で取り組めるプロジェクトを探しています。
          また、<strong>空間デザイン・エンジニアリング・音楽制作</strong>
          の領域で、 一緒に実験したいと思う人からのご連絡も歓迎します。
        </p>
        <p className={`${s.ctaEn} global-text-sm`}>
          Open to projects in culture, art, and social sectors.
          <br />
          Also welcoming collaborators in spatial design, engineering, and music
          production.
        </p>
        <div className={s.ctaLinks}>
          <a href="#contact" className="cta-btn global-text-sm">
            Contact →
          </a>
        </div>
      </div>
    </section>
  );
}
