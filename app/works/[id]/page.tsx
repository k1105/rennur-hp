import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { WORKS } from "../../data/works";
import s from "./page.module.css";

export function generateStaticParams() {
  return WORKS.map((w) => ({ id: w.id }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const work = WORKS.find((w) => w.id === params.id);
  return { title: work ? `${work.titleEn} — rennur` : "rennur" };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const work = WORKS.find((w) => w.id === id);
  if (!work) notFound();

  return (
    <div className={s.body} data-page="works-detail">
      <div className={s.hero}>
        <div className={s.heroImg}>
          <Image
            src={work.thumbnail}
            alt={work.titleEn}
            fill
            sizes="100vw"
            className={s.heroThumbnail}
            priority
          />
        </div>
      </div>

      <div className={s.content}>
        <Link href="/#works" className={`${s.back} global-text-md`}>
          &larr; Works
        </Link>

        <h1 className={`${s.title} global-text-xl`}>{work.titleJa}</h1>
        <p className={`${s.titleEn} global-text-lg`}>{work.titleEn}</p>
        <p className={`${s.date} global-text-md`}>{work.date}</p>

        <div className={s.tags}>
          {work.tags.map((t) => (
            <span className={`${s.tag} global-text-sm`} key={t}>
              {t}
            </span>
          ))}
        </div>

        <p className="ja-prose global-text-lg">{work.descriptionJa}</p>
        <p className="en-prose global-text-md">{work.descriptionEn}</p>

        {work.credit.length > 0 && (
          <div className={s.credit}>
            <p className="lbl global-text-md">Credit</p>
            {work.credit.map((c) => (
              <p className={`${s.creditLine} global-text-md`} key={c.role}>
                <span className={s.creditRole}>{c.role}</span>
                <span>{c.name}</span>
              </p>
            ))}
          </div>
        )}

        {work.images.length > 0 && (
          <div className={s.gallery}>
            {work.images.map((src, i) => (
              <div className={s.galleryItem} key={i}>
                <Image
                  src={src}
                  alt={`${work.titleEn} ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 90vw, 60vw"
                  className={s.galleryImg}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
