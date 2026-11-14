# Offscreen Press

On paper. Off screen. — the website for Offscreen Press, a monthly illustrated magazine of puzzles, games and creative play.

Built with Next.js (App Router). Pages: Home, Latest Issue, Archive, Our Story.

## Run locally

```bash
npm install
npm run dev
```

## Deploy on Vercel

Import this repository at vercel.com/new. No configuration is needed; Vercel detects Next.js and redeploys on every push.

## Things to set up

- **Newsletter signup**: set the `NEWSLETTER_WEBHOOK_URL` environment variable in Vercel to a webhook from your email tool. Until then the form tells visitors signups aren't switched on yet.
- **Illustrations**: `lib/art.js` holds placeholder vector art. Replace with the real artwork.
- **Editions**: titles and status live in `lib/issues.js`.
- **Footer**: Instagram, Contact, Shipping and returns, FAQs and Privacy policy are not linked yet.
- **Ordering**: not built yet. The "Ordering opens soon" block in `app/latest-issue/page.js` is where it will go.
