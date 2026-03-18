import {MEMBERS} from "../data/members";
import s from "./SectionMembers.module.css";

export default function SectionMembers() {
  return (
    <section id="members" className={s.section}>
      <p className="lbl global-text-md">Members</p>
      <div className={s.grid}>
        {MEMBERS.map((m) => (
          <div className={s.card} key={m.nameJa}>
            <div className={s.cardImg}>
              <span className={`${s.cardInitial} global-text-xl`}>
                {m.initials}
              </span>
            </div>
            <div className={s.cardBody}>
              <p className={`${s.cardNameJa} global-text-xl`}>{m.nameJa}</p>
              <p className={`${s.cardNameEn} global-text-md`}>{m.nameEn}</p>
              <p className={`${s.cardRole} global-text-md`}>{m.role}</p>
              <p className={`${s.cardBio} global-text-lg`}>{m.bio}</p>
              <div className={s.cardTags}>
                {m.tags.map((t) => (
                  <span className={`${s.tag} global-text-sm`} key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
