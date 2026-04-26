# Hero Series

A growing collection of hero-banner experiments. Each one lives in its own
folder so the series stays browseable. The root `index.html` is a gallery
that links into each demo.

```
/
  index.html        ← gallery
  hero-01/
  hero-02/
  ...
```

> Styles are written in SCSS. A watcher compiles `style.scss` → `style.css`.

---

## Hero 01 - Design in Motion ✅

Editorial / Dribbble-style hero with massive lowercase display type, an italic
serif accent word with an animated multi-stop gradient, a rotating SVG seal,
and a seamless marquee strip.

**Type:** Space Grotesk + Instrument Serif + Inter
**Themes (7):** cream · noir · candy · ocean · forest · sunset · mono
(switcher in the nav, persisted in `localStorage`)

**Notable:** drifting accent orbs, SVG noise grain (auto-inverts on dark themes),
pinging "available" pill, blinking REC dot, rotating ◐ mark, rotating circular
seal, hover-fill primary CTA, seamless 3-group marquee.

---

## Hero 02 - Signal Lost ✅

CRT/VHS aesthetic with chromatic-aberration glitch type, scanlines, animated
noise, a rolling tracking band, and live SMPTE timecode.

**Type:** Anton (display) + VT323 (HUD/UI) + JetBrains Mono (fallback)
**Themes (5):** phosphor · amber · ice · hellfire · toxic

**Notable:** RGB-split headline using `::before`/`::after` with `clip-path`
glitch keyframes, repeating-gradient scanlines, vertical writing-mode side
rails, vignette, brightness/saturate flicker, blinking REC indicator, JS-driven
SMPTE timecode (`hh:mm:ss:ff` @ 30fps). Glows derive from theme tokens via
`color-mix()` so the whole CRT recolors coherently.

---

## Hero 03 - Floating Worlds ✅

3D scene with cursor-driven parallax - a perspective stage holds a stack of
floating panels at different `translateZ` values, plus a glossy sphere, a glow
ring, and a chunky display title extruded with stacked text-shadows.

**Type:** Archivo Black (display) + JetBrains Mono (HUD/cards) + Inter (body)
**Themes (5):** violet · mint · flame · noir · pearl

**Notable:** `perspective: 1400px` stage + `transform-style: preserve-3d` scene
that rotates on `--tilt-x` / `--tilt-y` CSS variables, smoothed via
`requestAnimationFrame` lerp. Parallax cards have explicit `translateZ` depths
(-180/-90/+140 px). Shapes drift independently. Foot HUD shows the live tilt
readout. Mobile uses `deviceorientation` instead of pointer.

---

## Hero 04 - Soft Matter ✅

Liquid blob composition fused with an SVG `feGaussianBlur` + `feColorMatrix`
goo filter. Four blobs of different sizes and colors morph their `border-radius`
and drift independently - when they overlap, the goo filter melts them
together with smooth gradient transitions.

**Type:** Fraunces 900 (display, with `opsz` and `SOFT` axes) + Inter (body) +
JetBrains Mono (HUD)
**Themes (5):** jelly · candy · lava · abyss · aurora

**Notable:** four `.goo-blob` elements with desynced morph keyframes (16s, 19s,
22s, 14s with negative delays). The `.goo-blobs` wrapper applies
`filter: url(#goo)` for shape merging plus `mix-blend-mode: var(--blob-blend)`
for color blending - `screen` on dark themes, `multiply` on the candy theme.
Title uses a gradient-clipped italic accent word.

---

## Hero 05 - Form Follows ✅

Brutalist editorial layout - heavy rules, asymmetric two-column grid, mono
caps everywhere, an issue meta strip, a rotated red rubber stamp, a 4×4 figure
diagram, and a black newswire ticker.

**Type:** DM Serif Display (display + italic accent + figure mark) + IBM Plex
Mono (everything else)
**Themes (5):** paper · inverse · safety · blueprint · risograph

**Notable:** every section is separated by 1.5–3px solid rules (no shadows,
no gradients, no border-radius). Nav links sit in their own cells with hover
inversion. Title's second line is right-aligned italic in the accent color.
Side column has stat cells, a 4×4 figure with two highlighted accent squares,
a footnote-style figcaption, and a `transform: rotate(-8deg)` "approved" stamp.
Footer hosts a 3-group ticker animating `translateX(calc(-100% / 3))`. UTC
clock in the meta strip ticks once per second.

---

## Hero 06 - After Hours ✅

Synthwave / cyberpunk hero - glowing horizon-line sun with classic horizontal
stripes, perspective grid floor scrolling toward the viewer, scattered stars,
faint scanlines, and a massive neon outline title with chromatic aberration.

**Type:** Orbitron 900 (display + UI labels) + Space Mono (HUD + body)
**Themes (5):** fuchsia · acid · inferno · cobalt · xenon

**Notable:** the title uses `-webkit-text-stroke` for the upper line (outline,
no fill) plus `::before`/`::after` pseudo-elements offset ±2px in cyan/violet
for chromatic aberration. Lower line drops the stroke and uses stacked
`text-shadow` (4 layers) for solid neon-tube glow. Synthwave grid is one
element with two crossed linear-gradients tilted via `perspective(800px)
rotateX(64deg)` and a vertical mask for fade. Sun has stripes in its lower
half. HUD card top-right shows live local time, signal bars, and channel.

---

## Hero 07 - Slow Forms ✅

Editorial magazine layout - masthead, section bar, byline, two-line italic
display title, an asymmetric image collage in the title row, and a three-piece
body block (column / pull quote / column) with a drop cap on the lead paragraph.

**Type:** Newsreader (variable serif - display, body, italic dek + pull quote) +
Inter (CTAs) + JetBrains Mono (folio, byline tags, captions)
**Themes (5):** paper · archive · manuscript · periodical · plum

**Notable:** body uses a 3-column CSS grid with the pull quote occupying the
center column, bordered top/bottom with 2px ink rules. Drop cap is `::first-letter`
on the lead paragraph at 5.4em in the accent color. The collage is a 6×6 CSS
grid: a striped ink plate with an accent bar (Plate 01), a circle on accent
(Plate 02), and a 9-cell ink/accent/outlined matrix (Plate 03). Body text is
justified with hyphens enabled. Drop-cap and accent colors flow from theme
tokens.

---

## Hero 08 - Look Through ✅

Glassmorphic dashboard - vivid bg of blurred drifting color orbs with multiple
frosted glass panels stacked on top: a hero card with the title, a stats card,
a mini-player card, a rotated edition badge, and a glass nav + foot pill.

**Type:** Geist (variable, display + UI) + Geist Mono (labels) + Instrument
Serif italic (accent words + edition number)
**Themes (5):** prism · iris · citrus · mint · dusk

**Notable:** every panel uses a shared `.glass-pane` class:
`backdrop-filter: blur(24px) saturate(140%)` + 1px translucent white border +
inset top rim shadow + soft drop shadow. Background has 4 colored orbs each
with `filter: blur(90px)` and desynced drift animations (22s, 28s, 18s, 24s).
Edition badge is `position: absolute; transform: rotate(-6deg)` with an
italic Instrument Serif number for editorial contrast against the geometric
sans of the rest. Layout is a 2-column 2-row grid for desktop, collapses to a
stack on mobile.

---

## Roadmap

- [x] **Hero 01 - Design in Motion**
- [x] **Hero 02 - Glitch / VHS** (Signal Lost)
- [x] **Hero 03 - 3D / Perspective** (Floating Worlds)
- [x] **Hero 04 - Liquid / Blob** (Soft Matter)
- [x] **Hero 05 - Brutalist** (Form Follows)
- [x] **Hero 06 - Neon / Cyberpunk** (After Hours)
- [x] **Hero 07 - Editorial / Magazine** (Slow Forms)
- [x] **Hero 08 - Glassmorphic** (Look Through)

🎉 **Roadmap complete.**

---

## Bonus

## Hero 15 - Look Closer ✅

Cursor-driven spotlight reveal. Two complete hero states share the same
canvas — a muted b&w photo + ethereal italic-serif outlined title is the
default; moving the cursor opens a soft circular mask that uncovers a full
saturated photo + a bold sans-serif filled title in the accent color, plus
an accent-tinted color overlay inside the spotlight. The page literally
becomes two heroes you choose between by where you point.

**Type:** Newsreader italic (variable serif, the ethereal outline) + Hanken
Grotesk 800/900 (the bold filled reveal) + JetBrains Mono (HUD)
**Themes (5):** flame · acid · tide · rose · ivory

**Notable:** the reveal mask uses `mask-image: radial-gradient(circle 280px
at var(--mx) var(--my), #000 30%, transparent 100%)` with feathered falloff
so the mask edge is a soft halo rather than a hard circle. JS sets `--mx` and
`--my` from `clientX/Y`, smoothed via rAF lerp at 0.18 — the spotlight has
inertia. Three layers all share the same mask coordinates: the color image,
an accent-tinted overlay, and the bold title. A pulsing ring indicator
follows the cursor (replacing the system cursor via `cursor: none`). Mobile
falls back to default cursor + `touch-action: none` for drag reveal.

---

## Hero 14 - Rare Drop ✅

Holographic trading-card hero — a single TCG-style card centered on a starlit
stage. The card has rainbow conic-gradient foil overlays, a shimmer band that
rotates with the cursor, an animated rainbow-clipped title fill, and a 3D
mouse-tilt that makes it feel like a real holographic card catching light.

**Type:** Onest (variable display + UI) + Instrument Serif (italic accent) +
JetBrains Mono (HUD labels)
**Themes (5):** prism (full rainbow) · opal (pearlescent) · cosmic
(magenta/cyan/violet) · bronze (warm copper) · emerald (green/teal)

**Notable:** uses `@property` to register `--foil-angle` as `<angle>` and
`--foil-shift` as `<percentage>` so the conic gradient and linear-gradient
position can interpolate via CSS animation. Card transform is
`perspective(1200px) rotateY(--mouse-x * 8deg) rotateX(--mouse-y * -6deg)`,
smoothed via a JS rAF lerp. Shimmer overlay angle responds to cursor X,
giving a real "tilt-to-shine" feel. Title text fill is a clipped 7-stop
rainbow gradient that slides via `--foil-shift`, with the same recipe applied
to the rarity stars, mark glyph, set tag, and primary CTA hover state.

---

## Hero 13 - Out There ✅

Mountain landscape parallax — three layered SVG mountain ranges plus a sun
disc, drifting clouds, and (on dark theme) stars. The huge **Boldonse** title
sits between the back and mid mountain layers, so its lower half disappears
behind the front ranges as if poking out of the horizon. Cursor moves all
five layers at different rates for a strong depth effect.

**Type:** Boldonse (chunky display) + Inter (body) + JetBrains Mono (HUD)
**Themes (5):** dawn · dusk · alpine · midnight (dark + stars) · mars

**Notable:** parallax driven by two CSS variables (`--mouse-x`, `--mouse-y`)
set on `:root` from a normalized cursor position, smoothed via rAF lerp.
Each layer carries `--rate-x` / `--rate-y` inline (back: 12/6, title: 18/10,
mid: 26/14, front: 42/20) and uses `calc(var(--mouse-x) * var(--rate-x) * 1px)`
in its `transform`. Title z-index sits between layer-back and layer-mid so
the `mid` and `front` SVG polygons crop the bottom of the type. Sun is a
radial gradient with two rings of soft glow. Clouds drift via long linear
animations; stars only show on the midnight theme via `--show-stars`.

---

## Hero 12 - Quiet Hours ✅

Sober and minimal — almost monochrome, lots of breathing room. A small italic
mark up top, an XII roman-numeral eyebrow with a hairline rule, a centered
two-line Source Serif title (upright + italic) with a single accent-color
period, a calm dek paragraph, and a single text-link CTA with a hairline
underline. No marquees, no large shapes, no decoration.

**Type:** Source Serif 4 (variable, 8..60 optical sizing — display, body,
italic dek + mark) + Inter (small UI labels only)
**Themes (5):** bone · fog · stone · slate · dusk (dark)

**Notable:** strict two-face palette, single restrained accent per theme used
only on three pixels (mark dot, slash, title period) and one CTA hover state.
Pulsing accent dot in the foot indicates "alive" without being loud. CTA is a
text link with `gap: 8px → 14px` on hover and an underline that shifts to
the accent color. Generous padding (up to 96px horizontal) keeps the page
breathing.

---

## Hero 11 - Big News ✅

Pop-art / Lichtenstein comic aesthetic - halftone dot pattern bg, thick 3px
black outlines on every panel with hard offset shadows, a Bungee block title
with stacked color shadows, a speech bubble with serif italic accent, a
spiky 24-point burst-star sticker, and a POW! side panel with action lines.

**Type:** Bungee (display + UI labels) + Permanent Marker (speech bubble +
caption) + Inter (body)
**Themes (5):** classic · pulp · mod · hero · noir

**Notable:** the title uses `-webkit-text-stroke: 3px var(--ink)` plus two
stacked `text-shadow` layers (ink offset 4px + accent offset 8px) for the
hard 3D color stack. Burst star is a single `clip-path` 24-vertex polygon.
Speech bubble has a rotated/skewed `::after` tail with matching borders.
Foot ticker has a black bar with an accent label cell, scrolling Bungee text
with star separators.

---

## Hero 10 - Tools for Makers ✅

Modern bento dashboard - 4-column asymmetric grid with six cells: a large
hero card (title + dek + CTAs), a dark stat card with a big metric, a vibrant
accent-colored visual cell (5×4 dot matrix), an italic-serif testimonial card,
a two-column feature list, and a wide logo strip.

**Type:** Geist (display + UI) + Geist Mono (labels) + Instrument Serif (italic
quote and visual marker)
**Themes (5):** mono · cream · ocean · rose · sage

**Notable:** every cell is a distinct surface treatment - one card uses
`--surface-3` (inverted ink) for the dark stat, one uses `--accent` solid for
the visual cell, the rest use `--surface`. Title block has the trending
"upright + italic-serif accent line" pattern. Stat card flips ink/bg colors
automatically per theme. Mobile collapses to a single column with cells
restacked.

---

## Hero 09 - Internet Forever ✅

Y2K / Aero throwback - sky-blue gradient backdrop with a soft checkerboard
overlay, chrome strip nav, sparkles, an Aqua-style desktop window with traffic
light dots, glossy bubble buttons with bevel + reflection + drop shadow, and
a wobbling rotated download sticker.

**Type:** Bagel Fat One (chunky display + numerals) + Inter (UI/body) + DM Mono
(window labels)
**Themes (5):** aqua · bubblegum · lime · silver · vapor

**Notable:** title fills are clipped multi-stop linear gradients (chrome white
→ accent → ink) over a `-webkit-text-stroke` outline, with two `drop-shadow`
filters layered for the chunky 3D plate. Buttons are pure CSS aqua: paired
linear-gradients (gloss + tint) plus `inset` rim and bottom-bevel shadows and
an outer accent-tinted drop shadow. Sticker rotates -12° and wobbles. Window
panel is a chrome-bar dialog with inset light edge.
- [ ] **Hero 08 - Glassmorphic** - frosted layers over a vivid backdrop

---

## How to run

```sh
python3 -m http.server 8765
# open http://localhost:8765
```
