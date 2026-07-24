# ASIAD — Premium Motorcycle Accessories

A production-styled storefront and live 3D bike configurator, built with
**Next.js 15 (App Router)**, **Tailwind CSS**, **React Three Fiber**, and
**Framer Motion**. Dark premium theme with orange accents. No backend, no
database, no auth — everything runs on static dummy data so it deploys
straight to Vercel as a static/serverless site.

> This is a client demo build. Cart, checkout, and the contact form are
> intentionally mocked (see "What's mocked" below) to prioritize a
> polished, complete-feeling UI over backend plumbing.

---

## Pages

| Route              | Description                                                             |
|---------------------|--------------------------------------------------------------------------|
| `/`                 | Home — hero with 3D wheel, stats, perks, featured products, CTA          |
| `/shop`             | Full catalog with category filter, price filter, and sorting             |
| `/product/[id]`     | Product detail — gallery, color picker, specs, related products          |
| `/configurator`     | Live 3D bike configurator (seat color/material/stitching + accessories)  |
| `/about`            | Brand story, values, timeline                                            |
| `/contact`          | Contact form (client-only, simulated submit)                             |

---

## Tech stack

- **Next.js 15** — App Router, React Server Components where possible
- **Tailwind CSS 3** — custom dark theme (`base`, `ash`, `ember` color scales)
- **React Three Fiber + drei** — the `/configurator` 3D scene
- **Framer Motion** — page reveals, hover states, panel/menu transitions
- **lucide-react** — icon set
- **TypeScript** throughout

The 3D bike in the configurator is built procedurally out of Three.js
primitives (no external GLB fetch required), so the demo has zero external
asset dependencies and works offline/in any sandbox. Swapping in a real
`.glb` motorcycle model takes about 5 minutes — see
`public/models/README.txt` for exact steps and links to free CC-licensed
motorcycle models (Sketchfab, Khronos glTF-Sample-Assets, Poly Pizza).

---

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev

# 3. Open http://localhost:3000
```

Build for production locally:

```bash
npm run build
npm run start
```

No environment variables are required. `.env.example` is included as a
placeholder for future integrations (real payments, CMS, etc.).

---

## Deploying to Vercel

**Option A — Vercel dashboard**
1. Push this project to a GitHub/GitLab/Bitbucket repo.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset: Vercel auto-detects **Next.js** — leave build command
   (`next build`) and output settings as default.
4. Click **Deploy**. No environment variables needed.

**Option B — Vercel CLI**
```bash
npm i -g vercel
vercel        # first deploy, follow prompts
vercel --prod # promote to production
```

That's it — there's no database, no auth provider, and no API keys to
configure, so the first deploy is the final deploy.

---

## Project structure

```
app/
  layout.tsx              Root layout, fonts, Navbar/Footer
  page.tsx                Home
  shop/
    page.tsx               Shop (Suspense wrapper)
    ShopClient.tsx          Client filtering/sorting logic
  product/[id]/
    page.tsx               Product detail (static params from dummy data)
    ProductDetailClient.tsx Gallery, color picker, add-to-cart UI
  configurator/
    page.tsx               Metadata + dynamic import of 3D client
  about/page.tsx
  contact/
    page.tsx
    ContactForm.tsx
  not-found.tsx
  globals.css

components/
  Navbar.tsx, Footer.tsx
  Reveal.tsx               Framer Motion scroll-reveal wrapper
  ProductCard.tsx
  HeroScene.tsx             Lightweight R3F hero (spinning wheel)
  BikeModel.tsx             Procedural 3D bike (seat/material/stitching/accessories)
  ConfiguratorClient.tsx    Canvas + control panel + live pricing

lib/
  products.ts               Dummy product catalog (8 SKUs)
```

---

## What's mocked (by design, per the brief)

- **Cart / checkout** — "Add to Cart" and "Add Build to Cart" show a
  success animation but don't persist state or process payment.
- **Contact form** — simulates a network delay then shows a success state;
  no email is actually sent.
- **Product data** — all 8 SKUs live in `lib/products.ts`. Swap this for a
  real CMS/API without touching any page markup — every page reads from
  the same `products` array and `getProduct` / `getRelated` helpers.
- **Images** — placeholder photography via `picsum.photos` (seeded, so
  they're stable across reloads). Swap `image` / `gallery` URLs in
  `lib/products.ts` for real product photography whenever it's ready.

## Customizing the theme

Colors live in `tailwind.config.ts` under `theme.extend.colors`:
- `base.*` — near-black backgrounds (950 darkest → 700 lightest panel)
- `ash.*` — text on dark backgrounds
- `ember.*` — the orange accent (`ember-500` is the primary CTA color)
- `amber.400` — used for star ratings

Fonts are loaded via `next/font/google` in `app/layout.tsx`:
`Rajdhani` (display/headings), `Inter` (body copy), `JetBrains Mono`
(specs, prices, labels).
