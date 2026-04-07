import s from "./top.module.css";
// import GrainBackground from "./components/GrainBackground";
import SectionAbout from "./components/SectionAbout";
import SectionWorks from "./components/SectionWorks";
import SectionMembers from "./components/SectionMembers";
import SectionContact from "./components/SectionContact";

export default function Page() {
  return (
    <div className={s.body}>
      {/* <GrainBackground /> */}
      <div className={s.main}>
        <div className={s.hero} />
        <div className={s.section}>
          <SectionAbout />
        </div>

        <div className={s.section}>
          <SectionWorks />
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
