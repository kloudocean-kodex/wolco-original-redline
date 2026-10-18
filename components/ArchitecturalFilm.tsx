"use client";
import { useRef, useState } from "react";
export function ArchitecturalFilm() {
  const dialog = useRef<HTMLDialogElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [loaded, setLoaded] = useState(false);
  return <><button ref={trigger} className="text-link film-trigger" type="button" aria-haspopup="dialog" onClick={() => { setLoaded(true); dialog.current?.showModal(); }}>WATCH THE WOLCO PROJECT FILM <span aria-hidden="true">↗</span></button>
    <dialog ref={dialog} className="original-detail original-film" aria-label="From line to life — Cookes Road project film" onClose={() => { video.current?.pause(); trigger.current?.focus(); }}>
      <button type="button" autoFocus className="dialog-close" aria-label="Close architectural film" onClick={() => dialog.current?.close()}>CLOSE ×</button>
      <p className="eyebrow">COOKES ROAD / WOLCO PROJECT FILM</p>
      <video ref={video} src={loaded ? "/media/wolco-project-journey-v2.mp4" : undefined} poster="/media/wolco-project-journey-v2-poster.webp" controls playsInline preload="none" aria-label="Silent web edit of WOLCO-supplied Cookes Road project footage" />
      <p>The Cookes Road project, in its spaces and details.</p><p className="film-caption">Supplied WOLCO project footage. Silent web edit.</p>
    </dialog></>;
}
