import Link from "next/link";
import Image from "next/image";
export function SiteFooter(){
  return <footer className="site-footer">
    <div className="footer-word" aria-hidden="true">WOLCO</div><Link className="footer-logo-link" href="/#top" aria-label="WOLCO Homes — back to top"><Image className="original-logo footer-original-logo" src="/brand/wolco-original-colour-logo-transparent.png" alt="WOLCO Homes" width={606} height={286} unoptimized /></Link>
    <div className="footer-grid">
      <div><span className="footer-label">VISIT</span><p>9/28 Longford Road<br/>Epping VIC</p></div>
      <div><span className="footer-label">EXPLORE</span><Link href="/#designs">Home designs</Link><Link href="/#wow">WOW Studio</Link><Link href="/#journey">Build journey</Link></div>
      <div><span className="footer-label">CONNECT</span><Link href="tel:1300163666">1300 16 36 66</Link><Link href="/#start">Start a conversation</Link></div>
    </div>
    <div className="footer-base"><span>© {new Date().getFullYear()} WOLCO HOMES</span><span>FROM LINE TO LIFE. / DESIGN PREVIEW</span></div>
  </footer>;
}
