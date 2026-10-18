import Link from "next/link";
export default function NotFound() {
  return <main id="main" className="surface-black section-pad" style={{ minHeight: "90svh", paddingTop: 180 }}><p className="eyebrow">WOLCO / 404</p><h1 className="display-lg" style={{ marginTop: 60 }}>A different<br /><em>starting point.</em></h1><p className="lede" style={{ marginTop: 40, maxWidth: 620 }}>This page could not be found. Return to the home collection and continue exploring.</p><Link className="text-link" href="/#top">RETURN TO WOLCO ↗</Link></main>;
}
