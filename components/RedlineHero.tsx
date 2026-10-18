"use client";
import { useLayoutEffect,useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function RedlineHero(){
  const root=useRef<HTMLElement>(null);
  useLayoutEffect(()=>{
    if(!root.current)return;
    const mm=gsap.matchMedia();
    const ctx=gsap.context(()=>{
      mm.add("(prefers-reduced-motion: no-preference) and (min-width: 900px)",()=>{
        const tl=gsap.timeline({scrollTrigger:{trigger:root.current,start:"top top",end:"+=220%",scrub:1,pin:true,anticipatePin:1}});
        tl.to(".blueprint-path",{strokeDashoffset:0,duration:2.2,ease:"none"})
          .to(".hero-plan-label",{opacity:1,y:0,duration:.45},.25)
          .to(".hero-frame",{clipPath:"inset(0% 0% 0% 0%)",scale:1,duration:1.5,ease:"power3.inOut"},1.35)
          .to(".hero-blueprint",{opacity:.12,duration:.8},1.75)
          .to(".hero-title-line",{yPercent:0,stagger:.12,duration:.9,ease:"power4.out"},2.05)
          .to(".hero-meta",{opacity:1,y:0,duration:.5},2.35)
          .to(".hero-frame",{scale:1.04,duration:1.2,ease:"none"},2.6);
      });
      mm.add("(prefers-reduced-motion: reduce), (max-width: 899px)",()=>{
        gsap.set(".blueprint-path",{strokeDashoffset:0});
        gsap.set(".hero-frame",{clipPath:"inset(0% 0% 0% 0%)",scale:1});
        gsap.set(".hero-title-line",{yPercent:0});
        gsap.set(".hero-meta, .hero-plan-label",{opacity:1,y:0});
      });
    },root);
    return()=>{mm.revert();ctx.revert()};
  },[]);
  return <section ref={root} id="top" className="hero" aria-label="Wolco Homes introduction">
    <div className="hero-frame" aria-hidden="true"/><div className="hero-shade" aria-hidden="true"/>
    <svg className="hero-blueprint" viewBox="0 0 1440 900" aria-hidden="true">
      <path className="blueprint-path" pathLength="1" d="M36 730 H205 V616 H388 V680 H522 V476 H742 V568 H880 V355 H1114 V500 H1288 V730 H1398 M205 616 V430 H388 V680 M522 476 V294 H742 V568 M880 355 V220 H1114 V500 M36 730 L175 800 H1250 L1398 730 M742 294 L880 355"/>
      <path className="blueprint-ghost" d="M154 790 V120 M455 790 V120 M756 790 V120 M1057 790 V120 M1358 790 V120"/>
    </svg>
    <div className="hero-plan-label">ARCHITECTURAL INTENT / 01</div>
    <div className="hero-copy">
      <div className="hero-kicker">WOLCO HOMES · MELBOURNE</div>
      <h1 className="hero-title" aria-label="From line to life"><span className="mask"><span className="hero-title-line">FROM LINE</span></span><span className="mask"><span className="hero-title-line italic">TO LIFE.</span></span></h1>
      <div className="hero-meta"><span>Custom Homes</span><span>Knockdown Rebuild</span><span>House & Land</span></div>
    </div>
    <div className="scroll-cue" aria-hidden="true"><span>SCROLL TO BUILD</span><i/></div>
  </section>;
}
