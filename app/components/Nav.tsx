"use client";

import { useState, useEffect } from "react";
import s from "./Nav.module.css";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Works", href: "#works" },
  { label: "Members", href: "#members" },
];

export default function Nav() {
  const [positions, setPositions] = useState<
    { left: string; top: string; rotate: string }[]
  >([]);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    setPositions(
      NAV_ITEMS.map(() => ({
        left: `${10 + Math.random() * 70}vw`,
        top: `${10 + Math.random() * 70}vh`,
        rotate: `${(Math.random() - 0.5) * 60}deg`,
      }))
    );
  }, []);

  useEffect(() => {
    const sections = NAV_ITEMS.map(({ href }) =>
      document.querySelector(href)
    ).filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        } else {
          const anyVisible = entries.some((e) => e.isIntersecting);
          if (!anyVisible) setActiveId("");
        }
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  if (positions.length === 0) return null;

  return (
    <nav className={s.nav}>
      {NAV_ITEMS.map(({ label, href }, i) => (
        <a
          key={href}
          href={href}
          className={`${s.link} global-text-xl${activeId === href.slice(1) ? ` ${s.active}` : ""}`}
          style={{
            left: positions[i].left,
            top: positions[i].top,
            transform: `rotate(${positions[i].rotate})`,
          }}
        >
          {label}
        </a>
      ))}
    </nav>
  );
}
