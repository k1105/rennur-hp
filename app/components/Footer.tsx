import s from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={`${s.foot} global-text-sm`}>
      <span>
        <span className={s.dot} />
        Tokyo, JP
      </span>
      <span>&copy; 2026 rennur</span>
    </footer>
  );
}
