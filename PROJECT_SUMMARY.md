# Formlane — Project Summary

A dark, motion-rich marketing landing page for **Formlane**, a form-backend product. Original brand, copy and assets — inspired by the *feel* of Formspree, with no shared name or logo.

---

## Stack

| Layer | Choice |
|---|---|
| Build tool | Vite 5 |
| UI | React 18 |
| Routing | react-router-dom 6 (`BrowserRouter`) |
| Animation | framer-motion 11 |
| Styling | Hand-written CSS with design tokens (no framework) |

## Structure

```
index.html
vite.config.js
package.json
plan/plan.md          # build plan + progress checklist
shots/                # 22 reference / verification screenshots
dist/                 # production build output
src/
  main.jsx            # bootstrap: StrictMode + BrowserRouter + styles.css
  App.jsx             # route table
  styles.css          # tokens + all global styles
  components/
    Layout.jsx        # page shell (nav + outlet + footer)
    Nav.jsx           # sticky nav, blur on scroll, mobile sheet
    Hero.jsx          # headline, floating form card, terminal snippet
    Sections.jsx      # problem cards, feature rows, grid, steps, CTA, FAQ
    Paper.jsx         # light "paper" band sections
    Light.jsx         # light-theme section wrappers
    ui.jsx            # shared primitives (buttons, reveals, marquee)
  pages/
    Home.jsx
    Pricing.jsx
    Docs.jsx
    Contact.jsx
```

## Pages

- **Home** — the full 13-section landing page
- **Pricing** — plan tiers
- **Docs** — documentation layout
- **Contact** — contact form page

## Sections on Home

1. Sticky nav with blur-on-scroll and mobile sheet
2. Hero — staggered headline, magnetic CTA, tilted floating form card, terminal snippet
3. "You built an amazing site. But…" problem cards
4. Trusted-by logo marquee
5. Three feature rows (own form / own workflow / scale) + live submission feed
6. Testimonial slider with image crossfade
7. Feature grid — 6 cells with hover art
8. How it works — 3 steps with scroll-linked line
9. Security badges
10. Final CTA
11. FAQ accordion
12. Footer

## Motion system

- Scroll reveals: fade + 24px rise, staggered per item
- Hero card: pointer parallax tilt + continuous float loop
- Infinite marquees for submissions and logos
- Magnetic buttons, hover lift on cards
- Animated counters, accordion height springs
- All motion respects `prefers-reduced-motion`

## Design tokens

Near-black canvas, red accent, tight display type, hairline grid rails, dot-grid texture, and light "paper" bands used as section breaks.

## Status

- All 13 sections built and verified (dev server + production preview, 200 OK)
- Working tree clean on branch `classgrid/20261030-2027`
- **Open:** Section 14 — integrations orbit
- **Open:** mobile polish pass at 390px

## Deployment note

`BrowserRouter` requires an SPA rewrite (all paths → `index.html`) on the host, otherwise direct hits on `/pricing`, `/docs` or `/contact` return 404. On Vercel this is a `vercel.json` rewrite rule.
