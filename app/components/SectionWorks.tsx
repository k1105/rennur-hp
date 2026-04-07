import Link from "next/link";
import Image from "next/image";
import { WORKS } from "../data/works";
import s from "./SectionWorks.module.css";

export default function SectionWorks() {
  return (
    <section id="works" className={s.section}>
      <p className="lbl global-text-lg">Works</p>
      <div className={s.grid}>
        {WORKS.map((w) => (
          <Link href={`/works/${w.id}`} key={w.id} className={s.card}>
            <div className={s.cardImg}>
              <Image
                src={w.thumbnail}
                alt={w.titleEn}
                fill
                sizes="(max-width: 768px) 80vw, 30vw"
                className={s.thumbnail}
              />
            </div>
            <div className={s.cardBody}>
              <p className={`${s.cardTitle} global-text-xl`}>{w.titleJa}</p>
              <p className={`${s.cardTitleEn} global-text-md`}>{w.titleEn}</p>
              <div className={s.cardTags}>
                {w.tags.map((t) => (
                  <span className={`${s.tag} global-text-sm`} key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
