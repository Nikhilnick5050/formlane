# Plan — Formlane landing page (Formspree-style, original brand)

Goal: a dark, motion-rich marketing site with the same *feel* as the reference (near-black canvas, red accent, tight display type, hairline grid, floating form card, submission marquee, testimonial wall, feature grid, 3-step flow, security badges, FAQ). Original name, copy and assets — no Formspree name or logo.

## Stack
- Vite + React 18
- framer-motion for all animation
- Hand-written CSS (design tokens, no framework) for pixel control

## Sections
1. Sticky nav with blur-on-scroll + mobile sheet
2. Hero: staggered headline, magnetic CTA, floating tilted form card, terminal snippet
3. "You built an amazing site. But…" problem cards
4. Trusted-by strip
5. Three feature blocks (own form / own workflow / scale) + live submission marquee
6. Testimonial wall (image cards + logo row)
7. Feature grid (6 cards, hover lift)
8. How it works (3 steps, scroll-linked line)
9. Security badges
10. Integrations orbit
11. Final CTA
12. FAQ accordion
13. Footer

## Motion
- Scroll reveals (fade + 24px rise, staggered)
- Hero card: pointer parallax tilt + float loop
- Infinite marquees (submissions, logos)
- Magnetic buttons, hover lift on cards
- Animated counters, accordion height springs
- Respect prefers-reduced-motion

## Steps
- [x] Reference captured
- [x] Scaffold project (Vite + React + framer-motion)
- [x] Tokens + global CSS (dark canvas, red accent, paper bands, rails, dot grid)
- [x] Section 1 — Nav (blur on scroll, mobile sheet)
- [x] Section 2 — Hero (word-by-word blur-in, parallax form card, float chips, terminal)
- [x] Section 3 — "But… Now what?" code card + problem cards
- [x] Section 4 — "Just use Formlane" light band opener
- [x] Section 5 — Logo wall marquee
- [x] Section 6 — Feature rows (bring your own form / workflow / scale + submission feed)
- [x] Section 7 — Testimonial slider with image crossfade
- [x] Section 8 — Feature grid (6 cells, hover art)
- [x] Section 9 — Three steps
- [x] Section 10 — Security badges
- [x] Section 11 — Final CTA
- [x] Section 12 — FAQ accordion
- [x] Section 13 — Footer
- [x] Build + verify in browser (dev + production preview, 200 OK)
- [ ] Section 14 — Integrations orbit (next)
- [ ] Mobile polish pass at 390px
