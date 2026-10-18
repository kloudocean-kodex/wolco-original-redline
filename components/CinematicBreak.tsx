"use client";

import { useLayoutEffect, useRef } from "react";
import { ArchitecturalFilm } from "@/components/ArchitecturalFilm";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function CinematicBreak() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".cinema-red",
          { scaleX: 0 },
          {
            scaleX: 1,
            transformOrigin: "left center",
            ease: "none",
            scrollTrigger: {
              trigger: root.current,
              start: "top 80%",
              end: "bottom 20%",
              scrub: true,
            },
          }
        );
        gsap.from(".cinema-word span", {
          yPercent: 120,
          stagger: 0.08,
          duration: 0.8,
          ease: "power4.out",
          scrollTrigger: {
            trigger: root.current,
            start: "top 58%",
          },
        });
      });
    }, root);

    return () => {
      mm.revert();
      ctx.revert();
    };
  }, []);

  return (
    <section ref={root} className="cinematic-break" aria-label="Wolco design statement">
      <div className="cinema-red" aria-hidden="true" />
      <div className="cinema-copy">
        <div className="eyebrow">WOLCO / DESIGN ETHOS</div>
        <h2 className="cinema-word" aria-label="Every detail matters">
          <span>EVERY</span>
          <span>DETAIL</span>
          <span>MATTERS.</span>
        </h2>
        <p>
          Tiles. Tapware. Colours. Flooring. Paint. Kitchen. Appliances.
          The home becomes extraordinary when every decision belongs together.
        </p>
        <ArchitecturalFilm />
      </div>
    </section>
  );
}
