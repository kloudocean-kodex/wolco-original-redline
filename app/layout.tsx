import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./original-refinement.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { SiteHeader } from "@/components/OriginalHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { RedlineProgress } from "@/components/RedlineProgress";
import { ExperienceNav } from "@/components/ExperienceNav";
const display = localFont({
  src: [
    { path: "./fonts/cormorant-garamond-latin-normal.woff2", weight: "300 700", style: "normal" },
    { path: "./fonts/cormorant-garamond-latin-italic.woff2", weight: "300 700", style: "italic" },
  ],
  variable: "--font-display", display: "swap", adjustFontFallback: "Times New Roman",
});
const sans = localFont({ src: "./fonts/manrope-latin-variable.woff2", weight: "200 800", variable: "--font-sans", display: "swap", adjustFontFallback: "Arial" });

export const metadata: Metadata = {
  metadataBase: new URL("https://wolco-original-redline.pages.dev"),
  title: "WOLCO Homes — REDLINE / From Line to Life",
  description: "From line to life. Explore home collections, tactile material studies and your own way of living.",
  robots: { index: false, follow: false },
  openGraph: {title: "WOLCO Homes — From Line to Life", description: "A bold architectural journey.", type: "website", images: [{url: "/media/wolco-courtyard-arrival.webp",width:1600,height:900}]}
};
export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en-AU" className={`${display.variable} ${sans.variable}`}><body>
    <SmoothScroll><a className="skip-link" href="#main">Skip to content</a><RedlineProgress /><ExperienceNav /><SiteHeader />{children}<SiteFooter /></SmoothScroll>
  </body></html>;
}
