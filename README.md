# Mary Wassef  -  Houston Heights Realtor®

A modern Astro + Tailwind CSS 4 website for Mary Wassef, inspired by contemporary premium real estate design (clean white layouts, soft rounded UI, lime accents) and rebuilt from the content and structure of [marywassef.com](https://marywassef.com/).

## What’s included (slice 1)

- **Home**  -  hero, property search panel, buy/sell pathways, featured listings, agent intro, neighborhoods, client story, marketing value, contact CTA
- **Buy**  -  filterable sample listings + property detail pages
- **Sell**  -  six-step process + valuation/consultation form
- **Neighborhoods**  -  image-led index + individual guides
- **About**  -  biography and credentials from the live site
- **Client Stories**  -  authentic published testimonials
- **Contact**  -  validated inquiry form (delivery integration still required)

## Run locally

Requires **Node.js ≥ 22.22.0**.

```bash
npm install
npm run dev -- --port 4327 --host 127.0.0.1
```

Open [http://127.0.0.1:4327](http://127.0.0.1:4327).

```bash
npm run build    # production build
npm run preview  # preview the build
```

## Content notes

- Contact details, biography, neighborhoods, and testimonials are taken from marywassef.com.
- Featured listings are **sample data** from published Acres Place / James Franklin marketing. They are labeled as samples and are not a live MLS/IDX feed.
- Property photography uses licensed Unsplash imagery (not hotlinked from the reference site). Agent portrait/logo assets are from Mary’s site for this redesign.
- The contact form validates on the client and shows a success state, but **does not send email** until you connect Formspree, Resend, Netlify Forms, or a brokerage CRM endpoint.

## Customize

| Area | File |
| --- | --- |
| Site identity & contact | `src/data/site.ts` |
| Listings | `src/data/properties.ts` |
| Neighborhoods | `src/data/neighborhoods.ts` |
| Testimonials | `src/data/testimonials.ts` |
| Brand tokens | `src/styles/global.css` |
