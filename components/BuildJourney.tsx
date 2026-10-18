"use client";
import { useLayoutEffect,useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const steps=[
["01","NEW HOME SELECTION","Explore floor plans and customisations with the Wolco team, then secure the chosen direction."],
["02","PRELIMS + PLANS","Review preliminary plans and documentation before progressing to contract."],
["03","CONTRACT REVIEW","Your new-home consultant coordinates the building contract and next-stage documentation."],
["04","PERSONALISE","Interior and exterior selections come together through the WOW Studio and colour-selection process."],
["05","PERMITS + PRE-SITE","Finalised documentation moves into approvals and preparation for construction."],
["06","ON SITE","Meet your building supervisor, follow progress and move through the major construction stages."],
["07","HANDOVER + AFTERCARE","Discuss handover, care information and the support arrangements that apply to your home."]
];

export function BuildJourney(){
  const root=useRef<HTMLElement>(null);
  useLayoutEffect(()=>{
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
const ctx=gsap.context(()=>{
    gsap.fromTo(".journey-progress",{scaleY:0},{scaleY:1,ease:"none",scrollTrigger:{trigger:root.current,start:"top center",end:"bottom center",scrub:true}});
    gsap.utils.toArray<HTMLElement>(".journey-step").forEach(step=>gsap.from(step,{opacity:1,y:18,scrollTrigger:{trigger:step,start:"top 72%",end:"top 48%",scrub:true}}));
  },root);return()=>ctx.revert()},[]);
  return <section ref={root} id="journey" className="journey section-pad surface-black">
    <div className="journey-title">
      <div className="eyebrow">04 / THE BUILD JOURNEY</div>
      <h2 className="display-xl">Process,<br/><em>made visible.</em></h2>
      <p className="journey-note">A guide to the conversations ahead. Your scope, approvals and building arrangements are confirmed individually.</p>
    </div>
    <div className="journey-body"><div className="journey-rail"><div className="journey-progress"/></div>{steps.map(([n,t,c])=><article className="journey-step" key={n}><span className="journey-num">{n}</span><h3>{t}</h3><p>{c}</p></article>)}</div>
  </section>;
}
