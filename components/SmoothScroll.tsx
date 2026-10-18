"use client";
import { useSyncExternalStore } from "react";
import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";
export function SmoothScroll({children}:{children:React.ReactNode}){
  const reduced=useSyncExternalStore(fn=>{const media=window.matchMedia("(prefers-reduced-motion: reduce)");media.addEventListener("change",fn);return()=>media.removeEventListener("change",fn)},()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches,()=>true);
  return <ReactLenis root options={{lerp:0.085,smoothWheel:!reduced,wheelMultiplier:0.9,touchMultiplier:1}}>{children}</ReactLenis>;
}
