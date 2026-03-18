import { MEMBERS } from "../data/members";
import s from "./SectionMembers.module.css";

export default function SectionMembers() {
  return (
    <section id="members">
      <p className="lbl global-text-xs">Members</p>
      <div className={s.grid}>
        {MEMBERS.map((m) => (
          <div className={s.card} key={m.nameJa}>
            <div className={s.cardImg}>
              <span className={`${s.cardInitial} global-text-xl`}>
                {m.initials}
              </span>
            </div>
            <div className={s.cardBody}>
              <p className={`${s.cardNameJa} global-text-lg`}>{m.nameJa}</p>
              <p className={`${s.cardNameEn} global-text-sm`}>{m.nameEn}</p>
              <p className={`${s.cardRole} global-text-sm`}>{m.role}</p>
              <p className={`${s.cardBio} global-text-sm`}>{m.bio}</p>
              <div className={s.cardTags}>
                {m.tags.map((t) => (
                  <span className={`${s.tag} global-text-xs`} key={t}>
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
