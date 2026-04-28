# Baccarat — Boutique Factory

A luxury brand experience website announcing the Baccarat Boutique Factory on Hoshiarpur Highway, Chandigarh.

> *"Crafted in Light. Defined by Legacy."*

## Tech Stack

- **Next.js 16** (App Router)
- **Tailwind CSS v4**
- **Framer Motion** — scroll reveals, hover effects, page transitions
- **Lenis** — smooth scrolling
- **Playfair Display + Inter** — typography

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy on Vercel

```bash
npm run build
```

Or deploy directly via [Vercel](https://vercel.com) — zero config needed.

## Structure

```
app/
  layout.js        # Root layout, fonts, metadata
  page.js          # Main page
  globals.css      # Design system
components/
  Hero.jsx         # Full-screen hero with parallax
  About.jsx        # Brand heritage section
  Products.jsx     # Asymmetrical product grid
  Location.jsx     # Map + address card
  Contact.jsx      # Enquiry form
  Footer.jsx       # Minimal footer
  Navbar.jsx       # Glass navigation bar
  CustomCursor.jsx # Luxury cursor effect
  GrainOverlay.jsx # Noise texture
  SmoothScroll.jsx # Lenis smooth scroll
```
