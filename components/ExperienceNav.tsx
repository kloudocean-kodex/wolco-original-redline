"use client";

import { useEffect, useState } from "react";

const chapters = [
  ["01", "top", "INTRO"],
  ["02", "designs", "DESIGNS"],
  ["03", "wow", "WOW"],
  ["04", "journey", "PROCESS"],
  ["05", "projects", "ARCHIVE"],
  ["06", "start", "START"],
] as const;

export function ExperienceNav() {
  const [active, setActive] = useState("top");

  useEffect(() => {
    const elements = chapters
      .map(([, id]) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0, 0.01, 0.2, 0.5] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="experience-nav" aria-label="Page chapters">
      {chapters.map(([n, id, label]) => (
        <a
          key={id}
          href={`/#${id}`}
          className={active === id ? "is-active" : ""}
          aria-current={active === id ? "location" : undefined}
        >
          <span className="experience-dot" aria-hidden="true" />
          <span className="experience-index">{n}</span>
          <span className="experience-label">{label}</span>
        </a>
      ))}
    </nav>
  );
}
