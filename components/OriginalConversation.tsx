"use client";
import { useEffect, useRef, useState } from "react";
import { trapDialogFocus } from "@/lib/dialog-focus";
export function StartConversation() {
  const form = useRef<HTMLFormElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const submit = useRef<HTMLButtonElement>(null);
  const [brief, setBrief] = useState("");
  useEffect(() => { const fn = (event: Event) => { const message = form.current?.elements.namedItem("vision") as HTMLTextAreaElement | null; if (message) message.value = `I would like to explore ${(event as CustomEvent<string>).detail}.`; }; window.addEventListener("wolco:enquiry", fn); return () => window.removeEventListener("wolco:enquiry", fn); }, []);
  function review(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); const data = new FormData(event.currentTarget);
    setBrief(`WOLCO HOMES / MY HOME BRIEF\n\nName: ${data.get("name")}\nEmail: ${data.get("email")}\nSuburb: ${data.get("location") || "To discuss"}\nInterest: ${data.get("project")}\n\nMY VISION\n${data.get("vision") || "I would like to discuss my ideas."}\n\nPrepared in the WOLCO REDLINE design preview. Concept imagery is inspiration, not approved plans or inclusions.`);
    dialog.current?.showModal();
  }
  function download() { const url = URL.createObjectURL(new Blob([brief], { type: "text/plain;charset=utf-8" })); const link = document.createElement("a"); link.href = url; link.download = "my-wolco-redline-brief.txt"; link.click(); setTimeout(() => URL.revokeObjectURL(url), 1000); }
  return <section id="start" className="start surface-black section-pad">
    <div className="redline-start" aria-hidden="true" /><div className="eyebrow">08 / START</div><h2 className="display-xl">Your home starts<br />with a <em>line.</em></h2>
    <form ref={form} className="start-form" onSubmit={review}>
      <label><span>Your name *</span><input name="name" required autoComplete="name" placeholder="Name" maxLength={120} /></label>
      <label><span>Where are you planning to build?</span><input name="location" autoComplete="address-level2" placeholder="Suburb or area" maxLength={160} /></label>
      <label><span>What are you considering?</span><select name="project" defaultValue="Exploring possibilities"><option>Exploring possibilities</option><option>Custom home</option><option>Knockdown rebuild</option><option>House & land</option><option>WOW Studio</option></select></label>
      <label><span>Email *</span><input name="email" type="email" required autoComplete="email" placeholder="you@example.com" maxLength={254} /></label>
      <label className="form-vision"><span>What do you have in mind?</span><textarea name="vision" rows={3} maxLength={3000} placeholder="Your ideas. Your priorities. Your own way of living." /></label>
      <button ref={submit} type="submit" className="submit-cta">REVIEW MY BRIEF <span aria-hidden="true">↗</span></button>
    </form><p className="form-note">Review and download your brief, or prepare an email in your own email app. This preview does not send automatically.</p>
    <dialog ref={dialog} className="original-detail brief-review" aria-labelledby="brief-title" onKeyDown={trapDialogFocus} onClose={() => submit.current?.focus()}>
      <button className="dialog-close" type="button" autoFocus aria-label="Close brief review" onClick={() => dialog.current?.close()}>CLOSE ×</button>
      <p className="eyebrow">YOUR NEXT CHAPTER</p><h2 id="brief-title">A place to begin.</h2>
      <label>Your editable home brief<textarea value={brief} onChange={event => setBrief(event.target.value)} rows={13} /></label>
      <div className="brief-actions"><button type="button" className="submit-cta" onClick={download}>DOWNLOAD MY BRIEF ↗</button><a className="text-link" href={`mailto:wolcohomes@gmail.com?subject=${encodeURIComponent("My WOLCO home brief")}&body=${encodeURIComponent(brief)}`}>OPEN EMAIL DRAFT ↗</a><button className="text-link" type="button" onClick={() => dialog.current?.close()}>EDIT MY DETAILS</button></div>
      <p className="form-note">Nothing has been sent. Your email app handles delivery when you choose to send.</p>
    </dialog>
  </section>;
}
