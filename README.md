# harshchopra.com

Personal portfolio for Harsh Chopra: product, web development, SEO & analytics, and photography.

**Stack:** Next.js 14 (App Router) · Tailwind CSS · shadcn/ui (Radix) · Framer Motion · Swiper · hosted on Vercel.

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in values
npm run dev                  # http://localhost:3000
```

## Editing content

Almost all copy lives in **`data/site.js`**: bio, experience, skills, services, projects and recommendations.
Homepage "Latest projects" shows the first four projects marked `featured: true`.

- Project screenshots: `public/work/` (around 1200px wide, under 300 KB)
- CV: `public/cv/HarshChopra-CV.pdf` (the old `/HarshChopraCV-july.pdf` URL redirects here)

## Environment variables (Vercel → Settings → Environment Variables)

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Sends contact-form emails via [Resend](https://resend.com) |
| `CONTACT_TO_EMAIL` | Where enquiries land (`admin@harshchopra.com`) |
| `CONTACT_FROM_EMAIL` | Sender on a Resend-verified domain, e.g. `Harsh Chopra Portfolio <hello@harshchopra.com>` |
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager container. Leave empty to disable analytics and the cookie banner |

## Analytics

GTM loads with **Consent Mode v2** (analytics denied by default, updated when the visitor accepts the banner).
Set up GA4 and Microsoft Clarity as tags inside GTM. The site pushes these `dataLayer` events:

- `generate_lead`: contact form sent successfully (`form_name: contact`)
- `file_download`: CV downloaded
- `consent_update`: visitor made a cookie choice

## SEO

Per-route metadata (`lib/metadata.js`), generated Open Graph image (`app/opengraph-image.jsx`),
Person + WebSite JSON-LD in `app/layout.js`, `app/sitemap.js` and `app/robots.js`. The canonical host is `www.harshchopra.com`.
