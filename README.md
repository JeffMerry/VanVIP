# RIT VAN VIP — Landing Page

Next.js 14 (App Router) + TypeScript + Tailwind CSS landing page for a luxury van rental brand, built to match the provided design (dark navy header/hero/footer, gold-gradient accents, LINE green CTA).

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

```
src/
  app/
    layout.tsx      — Prompt font + global metadata
    page.tsx         — composes all sections
    globals.css       — Tailwind + shared utility classes (gold-text, etc.)
  components/
    Header.tsx        — sticky navbar, mobile menu, LINE CTA
    Hero.tsx           — dark hero with gold title + overlapping van image
    Intro.tsx          — key metrics / 3 feature bullets
    Fleet.tsx           — 4-column vehicle card grid
    WhyChooseUs.tsx      — 3-column icon feature grid
    Testimonials.tsx      — 3-col on desktop, swipeable card on mobile
    Footer.tsx             — 4-column footer + floating LINE bubble
  lib/
    types.ts            — Vehicle / Testimonial / NavLink interfaces
    data.ts               — vehicle, testimonial, and nav content
```

## Images you need to add

This code references image paths under `public/images/` that aren't included here — drop in your own assets with these exact filenames (or update the paths in `Hero.tsx`, `Fleet.tsx`, `Testimonials.tsx`):

- `hero-skyline.jpg` — dark city skyline w/ light trails (hero background)
- `hero-vans.png` — the two white VIP vans, ideally cut out on a transparent background so they "pop" out of the hero
- `vehicle-majesty.jpg`, `vehicle-alphard.jpg`, `vehicle-vclass.jpg`, `vehicle-staria.jpg` — fleet card photos
- `avatar-1.jpg`, `avatar-2.jpg`, `avatar-3.jpg` — testimonial avatars

## Notes

- Colors, gradients, and section order follow the brief exactly: navy `#0F172A` / footer `#0B0F19`, gold gradient `#D4AF37 → #F3E5AB`, LINE green `#06C755`, surface `#F8FAFC`.
- Fully responsive: 4→2→1 column fleet grid, stacked nav on mobile, single-card swipeable testimonials under `md`.
- Update `LINE_URL` in `Header.tsx` and `Footer.tsx` with your real LINE Official Account link.
- Update phone/email/domain placeholders in `Footer.tsx`.
