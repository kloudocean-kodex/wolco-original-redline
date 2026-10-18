"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const materials = [
  {
    id: "01",
    name: "COUNTERTOPS",
    kicker: "SURFACE / TEXTURE / TONE",
    copy: "Explore pale stone alongside white cabinetry and natural timber. A kitchen concept for a considered selection conversation.",
    image: "/media/wolco-wow-white.webp",
  },
  {
    id: "02",
    name: "FLOORING",
    kicker: "FLOW / WARMTH / CONTINUITY",
    copy: "Consider a warm stone floor together with cashmere-toned cabinetry, light timber and the courtyard outlook.",
    image: "/media/wolco-wow-cashmere.webp",
  },
  {
    id: "03",
    name: "CABINETRY",
    kicker: "FORM / STORAGE / DETAIL",
    copy: "Deep timber, expressive stone and a restrained garnet accent explore a richer direction for the kitchen joinery.",
    image: "/media/wolco-wow-espresso.webp",
  },
  {
    id: "04",
    name: "JOINERY + FINISHES",
    kicker: "JUNCTION / MATERIAL / DETAIL",
    copy: "Look closely at the meeting of brick, stone and timber: precise reveals, clean edges and the details that bring a room together.",
    image: "/media/wolco-courtyard-touch.webp",
  },
];

export function WowStudio(){
  const root=useRef<HTMLElement>(null);
  const [active,setActive]=useState(0);

  useLayoutEffect(()=>{
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx=gsap.context(()=>{
      gsap.from(".wow-stage",{
        clipPath:"inset(12% 12% 12% 12%)",
        scale:.96,
        duration:1.25,
        ease:"power3.out",
        scrollTrigger:{trigger:".wow-stage",start:"top 78%"}
      });
      gsap.from(".wow-material-row",{
        opacity:0,
        y:26,
        stagger:.09,
        duration:.7,
        ease:"power3.out",
        scrollTrigger:{trigger:".wow-material-list",start:"top 82%"}
      });
    },root);
    return()=>ctx.revert();
  },[]);

  const current=materials[active];

  return <section ref={root} id="wow" className="wow wow-v2 section-pad surface-ivory">
    <div className="eyebrow row-between"><span>03 / WORLD OF WOLCO</span><span>WOW SELECTION STUDIO · EPPING</span></div>

    <div className="wow-v2-head">
      <h2 className="display-xl">Not a catalogue.<br/><em>See it together.</em></h2>
      <div className="wow-v2-copy">
        <p className="lede">The warmth of timber. The character of stone. Explore how individual material choices can belong to one considered whole.</p>
        <p className="wow-source-note">Generated kitchen and joinery concepts. Discuss available finishes with WOLCO.</p>
      </div>
    </div>

    <div className="wow-experience">
      <div className="wow-stage" aria-live="polite">
        {materials.map((m,i)=><div
          key={m.id}
          className={`wow-stage-image ${i===active?"is-active":""}`}
          style={{backgroundImage:`url("${m.image}")`}}
          aria-hidden={i!==active}
        />)}
        <div className="wow-stage-shade"/>
        <div className="wow-stage-index">{current.id} / 04</div>
        <div className="wow-stage-copy">
          <span>{current.kicker}</span>
          <h3>{current.name}</h3>
          <p>{current.copy}</p>
        </div>
      </div>

      <div className="wow-material-list" role="group" aria-label="WOW Studio material categories">
        {materials.map((m,i)=><button
          key={m.id}
          type="button"
          className={`wow-material-row ${i===active?"is-active":""}`}
          onMouseEnter={()=>setActive(i)}
          onFocus={()=>setActive(i)}
          onClick={()=>setActive(i)}
          aria-pressed={i===active}
        >
          <span className="wow-material-num">{m.id}</span>
          <span className="wow-material-name">{m.name}</span>
          <span className="wow-material-arrow" aria-hidden="true">↗</span>
        </button>)}
      </div>
    </div>

    <div className="wow-bottom wow-v2-bottom">
      <p>TOUCH IT.<br/>COMPARE IT.<br/><span>MAKE IT YOURS.</span></p>
      <a className="text-link" href="#start">Plan a WOW Studio visit</a>
    </div>
  </section>;
}
