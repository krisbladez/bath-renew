# Bath Renew LLC Website

Modern Next.js website rebuild for [Bath Renew](https://bath-renew.com/) — bathroom remodeling for Twin Cities homeowners.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Centralized content in `src/content/`
- Contact API boundary at `src/app/api/contact/route.ts`

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Scripts

- `npm run dev` — local development
- `npm run lint` — ESLint
- `npm run typecheck` — TypeScript
- `npm run build` — production build

## Content integrity

See `CONTENT_APPROVAL_CHECKLIST.md`.

- Verified phone/email/services/communities come from the live site.
- `$4,995` promotion package details stay gated by `promotion.approvedForPublic` in `src/content/promotion.ts`.
- Form success requires `CONTACT_FORM_ENDPOINT` (no fake success states).

## Configuration

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Optional GA4 |
| `CONTACT_FORM_ENDPOINT` | Lead webhook/CRM endpoint |
| `CONTACT_FORM_SECRET` | Optional bearer token for the endpoint |
