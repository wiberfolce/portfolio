# Yayra — Portfolio Site

A modern, Stripe-inspired portfolio and consultancy site built with React + Vite + Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Build for production

```bash
npm run build
```

Output goes to `dist/` — deploy it anywhere that serves static files (Vercel, Netlify, S3, etc.).

## Structure

- `src/App.jsx` — assembles the page
- `src/components/` — Nav, Hero, Solutions, Work, Tools, Pricing, Footer
- `tailwind.config.js` — color, font, and shadow tokens
- `src/index.css` — global styles and the hero gradient background

## Customizing

- Swap the placeholder project cards in `Work.jsx` for your own case studies.
- Update pricing numbers in `Pricing.jsx` to match your actual rates.
- Update the contact email in `Footer.jsx`.
- Colors and fonts are defined once in `tailwind.config.js` — change them there to restyle the whole site.
