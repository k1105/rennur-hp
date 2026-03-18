import s from "./top.module.css";
import SectionAbout from "./components/SectionAbout";
import SectionMembers from "./components/SectionMembers";
import SectionContact from "./components/SectionContact";

export default function Page() {
  return (
    <div className={s.body}>
      <div className={s.main}>
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
