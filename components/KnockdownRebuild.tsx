"use client";
import { useLayoutEffect,useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export function KnockdownRebuild(){
  const root=useRef<HTMLElement>(null);
  useLayoutEffect(()=>{
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
const ctx=gsap.context(()=>{
    gsap.fromTo(".kdr-new",{clipPath:"inset(0 100% 0 0)"},{clipPath:"inset(0 0% 0 0)",ease:"none",scrollTrigger:{trigger:root.current,start:"top 75%",end:"bottom 45%",scrub:true}});
  },root);return()=>ctx.revert()},[]);
  return <section ref={root} className="kdr surface-black">
    <div className="kdr-copy"><div className="eyebrow">06 / KNOCKDOWN REBUILD</div><h2 className="display-xl">Same land.<br/><em>Entirely new life.</em></h2><p className="lede">Keep the location you love. Replace compromise with a home shaped around what comes next.</p><a href="#start" className="text-link on-dark">Plan your rebuild</a></div>
    <div className="kdr-stage" aria-label="Concept material and architecture studies, not a before and after project"><div className="kdr-old"/><div className="kdr-new"/><div className="kdr-line" aria-hidden="true"/><span className="kdr-label before">THE BRIEF</span><span className="kdr-label after">THE VISION</span></div>
  </section>;
}
