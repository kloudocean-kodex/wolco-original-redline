"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { trapDialogFocus } from "@/lib/dialog-focus";
const nav = [["HOME DESIGNS", "/#designs"], ["HOUSE & LAND", "/#land"], ["WOW STUDIO", "/#wow"], ["OUR PROCESS", "/#journey"]];
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => { const fn = () => setScrolled(window.scrollY > 60); fn(); window.addEventListener("scroll", fn, { passive: true }); return () => window.removeEventListener("scroll", fn); }, []);
  return <>
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <Link className="brand" href="/#top" aria-label="WOLCO Homes — home"><Image src="/brand/wolco-original-logo.webp" alt="WOLCO Homes" width={606} height={286} className="original-logo" unoptimized priority /></Link>
      <nav className="desktop-nav" aria-label="Primary">{nav.map(([label, href]) => <Link key={label} href={href}>{label}</Link>)}</nav>
      <button ref={trigger} className="menu-trigger" type="button" aria-label="Open navigation" aria-haspopup="dialog" aria-expanded={open} aria-controls="site-menu" onClick={() => { dialog.current?.showModal(); setOpen(true); }}><span>MENU</span><i aria-hidden="true" /></button>
    </header>
    <dialog ref={dialog} id="site-menu" className="menu-overlay original-menu" onKeyDown={trapDialogFocus} onClose={() => { setOpen(false); trigger.current?.focus(); }}>
      <div className="menu-index">WOLCO / NAVIGATION <button type="button" autoFocus className="dialog-close" aria-label="Close navigation" onClick={() => dialog.current?.close()}>CLOSE ×</button></div>
      <nav className="menu-links" aria-label="Menu">{nav.map(([label, href], i) => <Link key={label} href={href} onClick={() => dialog.current?.close()}><small>0{i + 1}</small><span>{label}</span></Link>)}<Link href="/#start" onClick={() => dialog.current?.close()}><small>05</small><span>START A CONVERSATION</span></Link></nav>
      <div className="menu-foot"><span>EPPING · VICTORIA</span><Link href="tel:1300163666">1300 16 36 66</Link></div>
    </dialog>
  </>;
}
