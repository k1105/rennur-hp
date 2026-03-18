import s from "./top.module.css";
import SectionAbout from "./components/SectionAbout";
import SectionMembers from "./components/SectionMembers";
import SectionContact from "./components/SectionContact";

export default function Page() {
  return (
    <div className={s.body}>
      <div className={s.main}>
        <div className={s.section}>
          <p className="lbl global-text-xs">What we do</p>
          <div className={s.axisGrid}>
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
              <div className={s.ax} key={n}>
                <p className={`${s.axName} global-text-sm`}>{n}</p>
                <p className={`${s.axJa} global-text-sm`}>{ja}</p>
                <p className={`${s.axEn} global-text-sm`}>{en}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={s.section}>
          <SectionAbout />
        </div>

        <div className={s.section}>
          <SectionMembers />
        </div>

        <div className={s.section}>
          <SectionContact />
        </div>
      </div>
    </div>
  );
}
