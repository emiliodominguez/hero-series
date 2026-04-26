# Front-end Reference Archive

A personal archive of front-end UI experiments — fifteen full-page hero
treatments and eighty smaller blocks across eighteen categories. It exists
as a place to revisit techniques, browse compositional ideas, and crib
recipes when starting something new.

It is not a component library. There are no tokens to import, no package
to install, no opinions about how your app should be structured. Read it
the way you'd read a sketchbook.

**Live:** [https://emiliodominguez.github.io/hero-series/](https://emiliodominguez.github.io/hero-series/)

```
/
  index.html              ← gallery / table of contents
  heroes/
    hero-01/  …  hero-15/ ← full-page treatments
  blocks/
    {category}/           ← smaller compositions, grouped by purpose
```

Each entry is self-contained inside its own folder or single file.
Heroes are written with SCSS sources alongside the compiled CSS. Blocks
are inline single-file pages.

---

## Heroes

Fifteen full-page treatments, each exploring a single visual idea — type,
motion, depth, surface, light. Roughly grouped here by feel, not by order.

### Editorial & type-driven

**01 — Design in Motion.** Massive lowercase display type with an italic
serif accent on a multi-stop animated gradient, a rotating SVG seal, and a
seamless three-group marquee. *Space Grotesk + Instrument Serif + Inter ·
7 themes.*

**05 — Form Follows.** Brutalist editorial layout — heavy 1.5–3px rules,
asymmetric two-column grid, mono caps everywhere, a 4×4 figure diagram, a
rotated red rubber stamp, and a black newswire ticker. *DM Serif Display +
IBM Plex Mono · 5 themes.*

**07 — Slow Forms.** Long-form magazine layout: masthead, byline, a
two-line italic display title, a 6×6 image collage, and a three-piece
body block with a 5.4em drop cap on the lead paragraph. *Newsreader (variable)
+ Inter + JetBrains Mono · 5 themes.*

**12 — Quiet Hours.** Sober and minimal — almost monochrome, lots of
breathing room. A small italic mark, an XII roman numeral with a hairline
rule, a centered two-line Source Serif title, and a single text-link CTA.
No decoration. *Source Serif 4 (variable) + Inter · 5 themes.*

### Motion & interactivity

**03 — Floating Worlds.** 3D perspective stage with cursor-driven
parallax. A stack of floating panels at different `translateZ` values,
plus a glossy sphere and a glow ring, smoothed via rAF lerp. Mobile uses
`deviceorientation` instead of pointer. *Archivo Black + JetBrains Mono +
Inter · 5 themes.*

**13 — Out There.** Mountain landscape parallax — three layered SVG
ranges, a sun disc, drifting clouds, and (on dark theme) stars. The huge
Boldonse title sits between the back and mid mountain layers, so its
lower half disappears behind the front ranges. *Boldonse + Inter +
JetBrains Mono · 5 themes.*

**14 — Rare Drop.** Holographic trading-card hero — rainbow conic-gradient
foil overlays, a shimmer band that rotates with the cursor, a 3D
mouse-tilt, and an `@property`-registered `--foil-angle` so the gradient
can interpolate. *Hanken Grotesk + Newsreader · 6 themes.*

**15 — Look Closer.** Cursor-driven spotlight reveal. Two complete hero
states share the same canvas — a muted b&w default; the cursor opens a
soft circular `mask-image` that uncovers a full-saturated color photo, an
accent overlay, and a bold filled title. Custom pointer with hover
illumination. *Newsreader italic + Hanken Grotesk · 5 themes.*

### Surface & atmosphere

**02 — Signal Lost.** CRT/VHS aesthetic with chromatic-aberration glitch
type, scanlines, animated noise, a rolling tracking band, and live SMPTE
timecode. *Anton + VT323 + JetBrains Mono · 5 themes.*

**04 — Soft Matter.** Liquid blob composition fused with an SVG
`feGaussianBlur` + `feColorMatrix` goo filter. Four blobs morph their
`border-radius` and drift independently — when they overlap, the goo
melts them together. *Fraunces (variable) + Inter + JetBrains Mono ·
5 themes.*

**06 — After Hours.** Synthwave hero — glowing horizon-line sun,
perspective grid floor, scattered stars, and a massive neon outline title
with chromatic aberration via offset pseudo-elements. *Orbitron + Space
Mono · 5 themes.*

**08 — Look Through.** Glassmorphic dashboard — vivid background of
blurred drifting color orbs with frosted glass panels stacked on top
(`backdrop-filter: blur(24px) saturate(140%)`). *Geist (variable) + Geist
Mono + Instrument Serif · 5 themes.*

### Composed scenes

**09 — Internet Forever.** Y2K / Aero throwback — sky-blue gradient
backdrop, soft checkerboard, chrome strip nav, sparkles, an Aqua-style
desktop window with traffic-light dots, glossy bubble buttons. *Bagel Fat
One + Inter + DM Mono · 5 themes.*

**10 — Tools for Makers.** Modern bento dashboard — 4-column asymmetric
grid with six cells: hero card, dark stat card, accent visual cell, an
italic-serif testimonial, a feature list, and a logo strip. *Geist +
Geist Mono + Instrument Serif · 5 themes.*

**11 — Big News.** Pop-art / Lichtenstein — halftone dot pattern, thick
3px black outlines on every panel with hard offset shadows, a Bungee
block title with stacked color shadows, a speech bubble, and a 24-vertex
clip-path burst star. *Bungee + Permanent Marker + Inter · 5 themes.*

---

## Blocks

Eighty smaller compositions, grouped by purpose. Each one is a single
HTML file with everything inline.

| Category               | Count | What's there                                                          |
| ---------------------- | ----- | --------------------------------------------------------------------- |
| **Skills**             | 2     | Marquee stack, tag cloud                                              |
| **About / Profile**    | 7     | Mini about, resume, now page, link tree, contact card, location, careers |
| **CTAs**               | 7     | Big-type, glass pill, brutalist, mini hero, with form, app promo, final  |
| **Stats**              | 6     | Big numbers, pills, ticker, progress, bento, mini bento                  |
| **Testimonials**       | 6     | Pull quote, trio, centered, portrait, press strip, quote strip          |
| **Pricing**            | 4     | 3-tier, monthly toggle, single card, comparison table                    |
| **Features**           | 9     | Bento, triptych, services list, tabs, toggles, screenshot, project card, icon list, card pair |
| **Social proof**       | 4     | Logo marquee, logo grid, avatar stacks, awards row                       |
| **Process & FAQ**      | 4     | Accordion, numbered steps, process pills, vertical timeline             |
| **Auth & capture**     | 5     | Login, newsletter, inline newsletter, search results, command bar       |
| **Footer & chrome**    | 3     | Big-type footer, announcement bar, cookie banner                         |
| **Utility & states**   | 5     | 404, coming soon, empty, error, toasts                                   |
| **Media & team**       | 3     | Photo gallery, team grid, mini audio player                              |
| **Content & events**   | 4     | Article header, blog feed, event card, changelog                         |
| **Commerce**           | 2     | Product grid, product detail                                             |
| **Dashboard**          | 2     | Status board, checklist                                                  |
| **Dev & tech**         | 4     | Code block, spec sheet, repo card, stack list                            |
| **Promo & library**    | 3     | Promo banner, discount reveal, resource library                          |

---

## Recurring techniques

A few patterns show up across the archive that are worth noting on their
own:

- **Theme tokens** — every entry that supports themes does so via
  `:root[data-theme="…"]` with CSS custom properties, persisted to
  `localStorage`. Theme-derived colors typically use `color-mix(in srgb, …)`.
- **`@property` registered variables** — used in heroes 13 and 14 to make
  gradients and angles interpolate via CSS animation, since standard
  transitions can't animate gradient stops directly.
- **Three-group marquees** — heroes 01, 05, 11 and several blocks use
  three identical groups translated by `calc(-100% / 3)` so two groups
  always span the viewport, removing the whitespace-on-reset bug of a
  two-group loop.
- **rAF lerp smoothing** — cursor-driven effects (heroes 03, 13, 14, 15)
  smooth the raw pointer position into a CSS variable via
  `requestAnimationFrame` with a 0.18 mix factor.
- **Shared mask coordinates** — hero 15 layers an image, an accent
  overlay, and a bold title behind the same `mask-image: radial-gradient(circle …
  at var(--mx) var(--my), …)` so all three reveal together.
