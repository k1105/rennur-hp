import s from "./SectionContact.module.css";

export default function SectionContact() {
  return (
    <section id="contact" className={s.section}>
      <p className="lbl global-text-md">Work with us</p>
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
          <a href="mailto:hello@rennur.jp" className="cta-btn global-text-sm">
            Mail →
          </a>
          <a
            href="https://instagram.com/rennur.jp"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn global-text-sm"
          >
            Instagram →
          </a>
        </div>
      </div>
    </section>
  );
}
