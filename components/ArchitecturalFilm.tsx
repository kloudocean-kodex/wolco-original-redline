"use client";
import { useRef, useState } from "react";
export function ArchitecturalFilm() {
  const dialog = useRef<HTMLDialogElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [loaded, setLoaded] = useState(false);
  return <><button ref={trigger} className="text-link film-trigger" type="button" aria-haspopup="dialog" onClick={() => { setLoaded(true); dialog.current?.showModal(); }}>WATCH THE ARCHITECTURAL FILM <span aria-hidden="true">↗</span></button>
    <dialog ref={dialog} className="original-detail original-film" aria-label="From line to life — architectural film" onClose={() => { video.current?.pause(); trigger.current?.focus(); }}>
      <button type="button" autoFocus className="dialog-close" aria-label="Close architectural film" onClick={() => dialog.current?.close()}>CLOSE ×</button>
      <p className="eyebrow">FROM LINE TO LIFE / ARCHITECTURAL FILM</p>
      <video ref={video} src={loaded ? "/media/generated-architectural-journey.mp4" : undefined} poster="/media/generated-architectural-journey-poster.webp" controls playsInline preload="none" aria-label="Silent generated architectural film: arrival, material, kitchen, living" />
      <p>Arrival → Touch → Gather → Dwell.</p><p className="film-caption">Generated architectural visualisations. Silent film.</p>
    </dialog></>;
}
