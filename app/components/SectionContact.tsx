import s from "./SectionContact.module.css";

export default function SectionContact() {
  return (
    <section id="contact">
      <p className="lbl global-text-xs">Contact</p>
      <div className={s.links}>
        <a href="mailto:hello@rennur.jp" className={`${s.link} global-text-sm`}>
          Mail →
        </a>
        <a
          href="https://instagram.com/rennur.jp"
          target="_blank"
          rel="noopener noreferrer"
          className={`${s.link} global-text-sm`}
        >
          Instagram →
        </a>
      </div>
    </section>
  );
}
