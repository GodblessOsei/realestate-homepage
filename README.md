# FalconLiving — Homepage

A single-page marketing homepage for **FalconLiving**, a real estate company offering
verified, furnished, move-in-ready rentals aimed at young grad students who want to
skip agent runaround and hidden fees.

## Highlights

- **Dark gradient theme** with an animated aurora backdrop
- **Sticky navbar** (Home · Listings · Services · Reviews · Contact) with a "Book your next home" CTA and a mobile menu
- **Hero** with headline, trust signals (DLD Accredited · 4.8★ from 200+ grads), and floating stat cards
- **Services** — Studio Apartment, Off-plan Property, 2-Bedroom Apartment
- **Testimonials** from a new grad, a vacationer, and a busy professional
- **Final CTA** with a "Notify me" email capture
- **Footer** with contact, location, opening hours, and social links
- Scroll-reveal animations, hover/parallax effects, and `prefers-reduced-motion` support

## Tech

Plain **HTML + CSS + JavaScript** — no build step.

| File | Purpose |
| --- | --- |
| `index.html` | Markup and content |
| `styles.css` | Dark gradient theme, layout, animations |
| `script.js` | Scroll reveal, sticky nav, mobile menu, notify form |

## Run locally

Just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## A note on images

The brief referenced `realestate.ae` for imagery. Hotlinking directly from a
commercial site is unreliable (hotlink protection, broken links over time), so
the homepage uses license-safe apartment/interior photos from Unsplash that match
each section's intent. Swap the `src` URLs in `index.html` to use your own assets.
