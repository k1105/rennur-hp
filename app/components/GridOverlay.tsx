"use client";

import { useSearchParams } from "next/navigation";

export default function GridOverlay() {
  const params = useSearchParams();
  if (params.get("grid") !== "true") return null;

  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        pointerEvents: "none",
        background:
          "repeating-linear-gradient(to right, cyan 0px, cyan 0.5px, transparent 0.5px, transparent var(--grid))",
      }}
    />
  );
}
