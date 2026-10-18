"use client";
import { useRef } from "react";
import Image from "next/image";
import { trapDialogFocus } from "@/lib/dialog-focus";
export function StudyAction({ title, copy, image, label = "EXPLORE THE SERIES", className = "design-cta", real = false }: { title: string; copy: string; image: string; label?: string; className?: string; real?: boolean }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const discussing = useRef(false);
  return <><button ref={trigger} type="button" className={className} onClick={() => dialog.current?.showModal()} aria-haspopup="dialog" aria-label={`${label} — ${title}`}>{label} <span aria-hidden="true">↗</span></button>
    <dialog className={`original-detail${real ? " project-photograph" : ""}`} ref={dialog} aria-label={title} onKeyDown={trapDialogFocus} onClose={() => { if (discussing.current) { document.querySelector<HTMLTextAreaElement>("#start textarea")?.focus({preventScroll:true}); discussing.current=false; } else trigger.current?.focus({preventScroll:true}); }}>
      <button className="dialog-close" type="button" autoFocus aria-label={`Close ${title}`} onClick={() => dialog.current?.close()}>CLOSE ×</button>
      <p className="eyebrow">{real ? "FROM THE WOLCO ARCHIVE / COOKES ROAD" : "THE COLLECTION / CONCEPT INSPIRATION"}</p>
      <h2>{title}</h2><Image src={image} alt={`${real ? "WOLCO project photograph" : "Generated design visualisation"}: ${title}`} width={1600} height={900} unoptimized /><p className="lede">{copy}</p>
      {!real && <p>Explore this direction with WOLCO. Current plans, facades, site suitability and inclusions are confirmed individually.</p>}
      <a href="#start" className="text-link" onClick={() => { discussing.current=true; dialog.current?.close(); window.dispatchEvent(new CustomEvent("wolco:enquiry", { detail: title })); }}>DISCUSS YOUR IDEAS ↗</a>
    </dialog></>;
}
