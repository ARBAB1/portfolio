# Syed Arbab Ali Shah — Portfolio

Personal portfolio site. Technical leader and full-stack engineer — Head of
Development at SkyHighDesigns, CTO at Hypertechverse.

Built with Next.js 16 (App Router), Tailwind CSS and Framer Motion. Statically
generated, zero runtime dependencies, deploys to Vercel with no configuration.

## Features

- Fully responsive, mobile-first layout
- Dark theme with gradient accents and scroll-triggered motion
- SEO-ready: Open Graph, Twitter cards and `Person` JSON-LD structured data
- Accessible: skip-to-content link, ARIA labels, `prefers-reduced-motion` support
- All content driven from a single data file — no markup edits needed

## Getting started

```bash
npm install
npm run dev
```

The site runs at `http://localhost:3000`.

## Editing content

Everything — profile, stats, skills, projects, experience, education and
certifications — lives in [`src/data/site.js`](src/data/site.js). Edit that one
file and the whole site updates. You should not need to touch the components.

## Deploying to Vercel

1. Push this repository to GitHub.
2. In Vercel, choose **Add New → Project** and import the repo.
3. Accept the defaults — Vercel detects Next.js automatically.
4. Deploy.

To use a custom domain, add it under **Project → Settings → Domains**.
After setting one, update `metadataBase` in
[`src/app/layout.js`](src/app/layout.js) so Open Graph URLs resolve correctly.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Project structure

```
src/
├── app/
│   ├── layout.js       # Metadata, fonts, JSON-LD
│   ├── page.js         # Section composition
│   └── globals.css     # Tailwind layers and design tokens
├── components/         # Nav, Hero, About, Projects, Experience, Skills, Contact
└── data/site.js        # All site content
```

## License

MIT
