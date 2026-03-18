import s from "./SectionAbout.module.css";

export default function SectionAbout() {
  return (
    <section id="about">
      <p className="lbl global-text-xs">About rennur</p>
      <p className="ja-t global-text-xl">体験のアーキタイプをつくる。</p>
      <p className="en-sub global-text-sm">
        We build the archetype of experience.
        <br />
        Not a template — a new form that didn&apos;t exist before.
      </p>

      <hr className="div" />

      <p className="lbl global-text-xs">What we do</p>
      <p className="ja-prose global-text-md">
        ブランドが人の<strong>知覚を変える</strong>ためには、
        <br />
        「何を伝えるか」の設計と「どう見せるか」の実装が、
        <br />
        同じ手で行われなければならない。
        <br />
        rennurは、<strong>PR戦略</strong>と<strong>体験制作</strong>
        を切り離さず、一気通貫で担う。
        <br />
        大手代理店でも制作会社でもない——
        <br />
        その間の、まだ名前のない場所に立つ。
      </p>
      <p className="en-prose global-text-sm">
        rennur works at the intersection of PR strategy and creative execution.
        <br />
        We design the why, then build the what — without handing off in between.
        <br />
        Our clients are brands and organizations that need both a clear message
        <br />
        and an unprecedented form to carry it.
      </p>

      <div className={s.archCard}>
        <p className={`${s.archJa} global-text-xl`}>体験のアーキタイプ</p>
        <p className={`${s.archEn} global-text-sm`}>
          Experience Archetype — the practice of rennur
        </p>
        <div className={s.archGrid}>
          {[
            [
              "Perception Design",
              "PR戦略・コミュニケーション設計",
              "Why and what to communicate",
            ],
            [
              "Visual Execution",
              "VI・グラフィック・インタラクティブ制作",
              "How it looks and moves",
            ],
            [
              "Experience Staging",
              "空間・イベントによる体験の実装",
              "Where people encounter it",
            ],
          ].map(([n, ja, en]) => (
            <div className={s.ac} key={n}>
              <p className={`${s.acName} global-text-sm`}>{n}</p>
              <p className={`${s.acJa} global-text-sm`}>{ja}</p>
              <p className={`${s.acEn} global-text-xs`}>{en}</p>
            </div>
          ))}
        </div>
      </div>

      <hr className="div" />

      <p className="lbl global-text-xs">Skills</p>
      <div className={s.skills}>
        {[
          ["Design Engineering", "core"],
          ["Graphic Design", "core"],
          ["PR Strategy", "core"],
          ["Brand Identity / VI", "core"],
          ["Creative Technology", ""],
          ["Interactive / Web", ""],
          ["Art Direction", ""],
          ["Spatial Design", ""],
          ["Experience Design", ""],
        ].map(([label, c]) => (
          <span
            key={label}
            className={`${c ? s.skCore : s.sk} global-text-sm`}
          >
            {label}
          </span>
        ))}
      </div>

      <hr className="div" />

      <p className="lbl global-text-xs">Work with us</p>
      <div className={s.ctaWrap}>
        <p className={`${s.ctaJa} global-text-md`}>
          rennurは現在、
          <strong>カルチャー・アート・ソーシャル領域</strong>
          のブランドや組織と、
          <br />
          PR戦略から体験制作まで一気通貫で取り組めるプロジェクトを探しています。
          <br />
          また、<strong>空間デザイン・エンジニアリング・音楽制作</strong>
          の領域で、
          <br />
          一緒に実験したいと思う人からのご連絡も歓迎します。
        </p>
        <p className={`${s.ctaEn} global-text-sm`}>
          Open to projects in culture, art, and social sectors.
          <br />
          Also welcoming collaborators in spatial design, engineering, and music
          production.
        </p>
        <a href="#contact" className="cta-btn global-text-sm">
          Contact →
        </a>
      </div>
    </section>
  );
}
