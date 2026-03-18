import Image from "next/image";
import {MEMBERS} from "../data/members";
import s from "./SectionMembers.module.css";

export default function SectionMembers() {
  return (
    <section id="members" className={s.section}>
      <p className="lbl global-text-lg">Members</p>
      <div className={s.grid}>
        {MEMBERS.map((m) => (
          <div className={s.card} key={m.nameJa}>
            <div className={s.cardImg}>
              <Image
                src={m.bg}
                alt=""
                width={800}
                height={600}
                className={s.texture}
                aria-hidden
              />
              <Image
                src={m.portrait}
                alt={m.nameEn}
                fill
                sizes="(max-width: 768px) 60vw, 30vw"
                className={s.portrait}
              />
            </div>
            <div className={s.cardBody}>
              <p className={`${s.cardNameJa} global-text-xl`}>{m.nameJa}</p>
              <p className={`${s.cardNameEn} global-text-md`}>{m.nameEn}</p>
              <p className={`${s.cardRole} global-text-md`}>{m.role}</p>
              <p className={`${s.cardBio} global-text-lg`}>{m.bio}</p>
              <p className={`${s.cardBioEn} global-text-sm`}>{m.bioEn}</p>
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
