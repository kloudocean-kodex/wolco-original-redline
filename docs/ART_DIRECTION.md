> Historical source notes retained from the original concept. Business information is not re-certified as current. See QA.md, DESIGN_PRESERVATION.md and the final source for this independent refinement.

# Wolco Rebirth — REDLINE art direction

## Core idea

**FROM LINE TO LIFE.**

The Wolco red line is not decoration. It is the connective system for the experience: architectural drawing, construction sequence, section progress, active state and transition.

## Experience principles

- Cinema where emotion matters; precision where decisions matter.
- Black chapters create drama; warm architectural white creates breathing room.
- Wolco red appears as an event, not wallpaper.
- Motion reveals, transforms, guides or connects. It never exists merely to move.
- Home designs are presented as architectural chapters, not generic cards.
- WOW Studio is a flagship tactile story, not a bullet list.
- Build process is visible and legible.
- Mobile is designed as vertical editorial cinema, not reduced desktop.
- Reduced-motion users receive the complete content without pinned/scrubbed scenes.

## Signature interactions now implemented

1. Red architectural blueprint line hero.
2. Plan-to-photography reveal.
3. Scroll-pinned cinematic hero on desktop.
4. Horizontal Home Designs story with native horizontal mobile fallback.
5. WOW Studio material editorial.
6. Red build-journey progress line.
7. Full-bleed project archive.
8. Knockdown/rebuild before-to-after reveal.
9. Stylised build-area map.
10. Editorial conversion experience: "Your home starts with a line."

## Asset policy

The current branch intentionally uses temporary architectural photography from Unsplash for motion and composition prototyping. Before client review these must be replaced by **verified Wolco-owned** assets:

- Wolco logo SVG and exact red value.
- Completed Wolco facades: daylight + dusk.
- WOW Studio interior and material-detail photography.
- Build-site / framing / construction imagery.
- Knockdown-rebuild before/after case study.
- Floorplans/elevations suitable for the red-line animation.
- Vertical mobile crops or mobile-specific video.
- Team/people content if included.
- Correct phone/email/CRM destination.

Do not ship public production with temporary copy, imagery or placeholder phone details.

## Technical baseline

Next.js 16 + React 19, GSAP/ScrollTrigger and Lenis. The page remains normal semantic HTML underneath the motion layer. Reduced-motion handling and responsive fallbacks are included from the start.

## Next production passes

- Replace prototype photography with Wolco-owned assets.
- Build actual Home Designs CMS/data model and detail pages.
- Build House & Land data model and discovery UX.
- Film / create the signature hero asset and WOW Studio sequence.
- Add real enquiry endpoint/CRM integration and validation.
- Add SEO schema, sitemap, robots, canonical strategy and OG artwork.
- Performance audit with real media at 360px / 768px / 1440px / 1920px.
- Accessibility pass: keyboard, focus order, screen reader and contrast.
- Browser QA: Safari iOS, Chrome Android, Edge/Chrome desktop, Firefox.
