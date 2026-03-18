"use client";

import s from "./Nav.module.css";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Members", href: "#members" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  return (
    <nav className={s.nav}>
      {NAV_ITEMS.map(({ label, href }) => (
        <a
          key={href}
          href={href}
          className={`${s.link} global-text-xl`}
        >
          {label}
        </a>
      ))}
    </nav>
  );
}
