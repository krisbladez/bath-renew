# Content Approval Checklist — Bath Renew LLC

Status legend: **Verified** (from live bath-renew.com or confirmed owner input) · **Needs approval** · **Blocked / draft**

Last updated: 2026-11-19

## Contact

| Item | Status | Notes | Affected pages |
|------|--------|-------|----------------|
| Phone `(763) 291-7806` | Verified | Published as CALL/TEXT on live site | Header, footer, contact, CTAs |
| SMS / texting supported | Verified | Live site says CALL/TEXT | Contact, CTAs |
| Email `info@bath-renew.com` | Verified | Published on contact + promotion FAQ | Footer, contact |
| Street address | Needs approval | Learn More shows “Long Lake, MN” only — no street address found | Footer, LocalBusiness schema, contact |
| Hours of operation | Needs approval | Not found on live site | Contact, schema |

## Services

| Item | Status | Notes | Affected pages |
|------|--------|-------|----------------|
| Shower remodeling | Verified | Listed on homepage | /services, /services/shower-remodeling |
| Tub-to-shower conversion | Verified | Listed on homepage + FAQ | /services/tub-to-shower-conversion |
| Complete bathroom remodeling | Verified | Listed on homepage | /services/bathroom-remodeling |
| Shower/tub surrounds (solid-surface, quartz) | Verified | Listed on homepage | /services/shower-wall-systems |
| Shower doors | Verified | Listed on homepage | /services/shower-doors |
| Tile installation and repair / partial updates | Verified | Listed on homepage + FAQ | /services/bathroom-repairs |
| Bathtub replacement | Verified | Listed on homepage | Mentioned in services overview |
| Bathroom vanities | Verified | Listed on homepage | Services overview |
| Plumbing upgrades via Living Waters Plumbing | Verified | FAQ states partnership | About, FAQ, services |
| Exact material brands / SKUs | Needs approval | Not specified on live site | Service detail pages |

## Promotion ($4,995)

| Item | Status | Notes | Affected pages |
|------|--------|-------|----------------|
| Starting price headline exists | Verified on live site | “Beautiful New Bathrooms Starting at Only $4,995” | /promotion |
| Qualifying package inclusions | **Blocked / draft** | Live site says base remodel + choose finishes; exact inclusions not listed | /promotion, homepage promo |
| Exclusions | **Blocked / draft** | Not documented | /promotion |
| Optional upgrades list | Needs approval | Mentioned generally only | /promotion |
| Eligibility / restrictions | Needs approval | “Qualifying projects” only | /promotion |
| Pricing disclaimer | Partial | Live site notes final price depends on conditions | /promotion |

**Policy:** Public `$4,995` price display and package claims stay behind `promotion.approvedForPublic` (currently `false`). `/promotion` uses `noindex` until approved.

## Trust & legal

| Item | Status | Notes | Affected pages |
|------|--------|-------|----------------|
| Fully insured | Verified | Stated on homepage | About, trust |
| License number(s) | Needs approval | Not found | About, footer |
| Workmanship warranty details | Needs approval | FAQ claims warranty + satisfaction guarantee — terms unspecified | FAQ, about |
| Manufacturer warranty details | Needs approval | Referenced generally | FAQ |
| Angi Super Service Award badge | Verified asset | Logo present on live site; keep only if still accurate | Trust |
| Privacy / data retention policy | Needs approval | Draft privacy page for legal review | /privacy-policy |
| Financing terms | Needs approval | “Financing options are available” — no lender/terms | /promotion, FAQ |

## Projects & reviews

| Item | Status | Notes | Affected pages |
|------|--------|-------|----------------|
| Project photography from live site | Verified assets | Images hosted on current GoDaddy site | /our-work, homepage |
| Otsego, MN complete remodel label | Verified caption | Live homepage gallery caption | /our-work |
| Other project locations/dates/budgets | Needs approval | Do not invent | /our-work |
| Customer testimonials | **Blocked** | None published with attribution on live site — section omitted | Homepage |
| Star ratings for schema | **Blocked** | Do not invent | Schema |

## Process & operations

| Item | Status | Notes | Affected pages |
|------|--------|-------|----------------|
| 3-step overview (estimate → design → install) | Verified | From /learn-more | /how-it-works |
| 6-stage detailed process | Needs approval | Proposed in rebuild brief — draft labeled | /how-it-works |
| Typical timeline (few days to 1–2 weeks) | Verified | FAQ | FAQ, services |
| Travel: within ~1 hour of Minneapolis metro | Verified | FAQ | /service-areas |
| Community list on homepage | Verified | Use as confirmed communities | /service-areas |
| Lead delivery (CRM/email) | Needs configuration | Form API ready; set `CONTACT_FORM_ENDPOINT` or email provider | /contact, API |

## Analytics

| Item | Status | Notes |
|------|--------|-------|
| GA4 measurement ID | Needs configuration | Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` |
| Conversion events | Implemented (client helpers) | Fire only after confirmed success |
