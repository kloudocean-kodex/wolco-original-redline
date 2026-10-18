"use client";
import { useLayoutEffect,useRef, type FocusEvent } from "react";
import gsap from "gsap";
import { StudyAction } from "@/components/StudyAction";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const designs=[
  {
    number:"01",
    type:"AURELIA SERIES",
    title:"Elegance,\nconsidered.",
    image:"/media/wolco-courtyard-arrival.webp",
    meta:"LUXURIOUS HOMES · ELEGANCE · SOPHISTICATION",
    copy:"A refined Wolco collection built around comfort, proportion and considered detail."
  },
  {
    number:"02",
    type:"ELEVATE SERIES",
    title:"Modern living,\nraised.",
    image:"/media/wolco-courtyard-gather.webp",
    meta:"MODERN DESIGN · REFINED LUXURY · SPACIOUS LAYOUTS",
    copy:"A contemporary series balancing sleek finishes, generous space and everyday function."
  },
  {
    number:"03",
    type:"SIMPLEX SERIES",
    title:"Simple by design.\nNever ordinary.",
    image:"/media/wolco-courtyard-dwell.webp",
    meta:"EFFICIENCY · PRACTICAL DESIGN · VALUE",
    copy:"Thoughtful, efficient layouts designed to keep quality and usability at the centre."
  }
];

export function HomeDesigns(){
  const root=useRef<HTMLElement>(null),track=useRef<HTMLDivElement>(null),viewport=useRef<HTMLDivElement>(null);
  const movement=useRef<gsap.core.Tween|null>(null);
  useLayoutEffect(()=>{
    const mm=gsap.matchMedia();
    const ctx=gsap.context(()=>{mm.add("(min-width: 900px) and (prefers-reduced-motion: no-preference)",()=>{
      if(!root.current||!track.current||!viewport.current)return;
      const distance=()=>Math.max(0,track.current!.scrollWidth-viewport.current!.clientWidth);
      viewport.current.classList.add("is-pinned");
      movement.current=gsap.to(track.current,{x:()=>-distance(),ease:"none",scrollTrigger:{trigger:viewport.current,start:"top top",end:()=>`+=${distance()+window.innerHeight*.72}`,scrub:.8,pin:true,invalidateOnRefresh:true}});
      return()=>{viewport.current?.classList.remove("is-pinned");movement.current=null;};
    })},root);
    return()=>{mm.revert();ctx.revert()};
  },[]);
  function revealFocusedPanel(event:FocusEvent<HTMLDivElement>){
    if(!(event.target as HTMLElement).matches(":focus-visible"))return;
    if((event.target as HTMLElement).closest("dialog"))return;
    const panel=(event.target as HTMLElement).closest<HTMLElement>(".design-panel"),animation=movement.current;
    if(!panel||!track.current||!viewport.current||!animation?.scrollTrigger)return;
    const distance=Math.max(0,track.current.scrollWidth-viewport.current.clientWidth);
    const position=Math.min(panel.offsetLeft,distance),progress=distance?position/distance:0,trigger=animation.scrollTrigger;
    trigger.scroll(trigger.start+progress*(trigger.end-trigger.start));
    animation.progress(progress);
  }
  return <section ref={root} id="designs" className="designs surface-black">
    <div className="section-head">
      <div className="eyebrow row-between"><span>02 / HOME COLLECTIONS</span><span>CONCEPT INSPIRATION / WOLCO COLLECTIONS</span></div>
      <h2 className="display-lg">Three ways to begin.<br/>One standard of intent.</h2>
    </div>
    <div ref={viewport} className="design-viewport"><div ref={track} className="design-track" onFocusCapture={revealFocusedPanel}>{designs.map(d=><article className="design-panel" key={d.number}>
      <div className="design-image" style={{backgroundImage:`url("${d.image}")`}}/><div className="design-overlay"/>
      <div className="design-number">{d.number}</div><div className="design-type">{d.type}</div>
      <div className="design-copy"><h3>{d.title.split("\n").map(l=><span key={l}>{l}<br/></span>)}</h3><p>{d.copy}</p></div>
      <div className="design-meta">{d.meta}</div><StudyAction title={d.type} image={d.image} copy={d.copy} />
    </article>)}</div></div>
  </section>;
}
