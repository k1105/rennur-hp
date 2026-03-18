import s from "./SectionAbout.module.css";

export default function SectionAbout() {
  return (
    <section id="about" className={s.section}>
      <p className="lbl global-text-lg">About</p>
      <p className="ja-prose global-text-xl">
        rennur（リニューアル）は、ランニングをきっかけに出会った３人のクリエイティブユニット。
        建築、エンジニアリング、広告など異なるバックグラウンドのメンバーが集い、
        「体験のアーキタイプ制作」を目的としたR&amp;D事業と、
        手法に捉われないソリューションを提案・実施するブランディング事業に取り組みます。
      </p>
      <p className="en-prose global-text-xl">
        rennur (renewal) is a creative unit of three people who met through running.
        Members from different backgrounds — architecture, engineering, and advertising — come together
        to pursue R&amp;D focused on creating archetypes of experience,
        and a branding practice that proposes and delivers solutions unconstrained by method.
      </p>
    </section>
  );
}
