# WOLCO REDLINE — original concept refinement

This independent preview refines the original deployed REDLINE design at commit `7cf0498f33682af40434fb0171f3afe6f0ef1125`. It preserves the black/ivory contrast, vivid red architectural line, monumental Cormorant typography, cropped-to-full hero, horizontal collection chapter, tactile WOW stage and cinematic pacing.

It does not replace either of the two later editorial demos. See `docs/DESIGN_PRESERVATION.md`.

## Development and deployment

Node 20.9 or later: `npm ci`, `npm run lint`, `npm run build`. The static Next.js export is `out/`. Cloudflare Pages builds `main` with `npm run build` and output `out`. Fonts are local binaries with their original licences; the font build has no external Google Fonts dependency.

Generated media and the original logo are served locally. Cookes Road uses the same supplied/public-provenance project photography selected for the Atelier preview; it is distinguished from fictional generated studies. Original source images and generated-film provenance are retained separately from the web derivatives.

## Refinements

- Hero copy remains visible on return and when motion is reduced; original architectural framing and scroll choreography are retained.
- Native menu, collection details, project-photo details and film dialogs provide real destinations and close/focus behavior.
- WOW material controls, chapter links, home/404 navigation and responsive typography are repaired.
- Unsupported aftercare promises, source/prototype narration, stock imagery presented as completed WOLCO homes and unverified live-project claims are removed.
- The enquiry form validates, creates an editable brief, downloads text and prepares an explicit email draft. It does not submit, book an appointment or send email automatically.

## Film delivery

`npm run test:video` checks the narrowly scoped video range Function. `prebuild` derives exact film sizes and routes from the public files. Full and partial responses stream without buffering the entire movie. Standard pages, fonts and images remain static. Video requests consume the account's applicable Workers quota; no paid plan or subscription was purchased.

The four-chapter generated architectural film is silent, 38.42 seconds, 1280×720 at 24 fps, with visible source generation marks retained. It is concept inspiration rather than completed WOLCO project footage.

## Review and launch

The site is intentionally `noindex`. No original-site DNS, WordPress content, CRM or email credentials are changed. Before real production launch, confirm approved business and commercial information, final media and plans, legal/privacy copy, lead delivery, physical devices, and domain/SEO cutover. Individual lab and browser checks are evidence with specific limits, not a claim of universal perfection.
