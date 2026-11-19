export const company = {
  legalName: "Bath Renew LLC",
  brandName: "Bath Renew",
  website: "https://bath-renew.com",
  tagline: "Affordable bathroom remodeling for Twin Cities homeowners",
  phoneDisplay: "(763) 291-7806",
  phoneTel: "7632917806",
  phoneHref: "tel:+17632917806",
  smsHref: "sms:+17632917806",
  supportsTexting: true,
  email: "info@bath-renew.com",
  emailHref: "mailto:info@bath-renew.com",
  /** City/state only — street address needs owner approval */
  locality: "Long Lake, MN",
  region: "MN",
  serviceRegionLabel: "Minneapolis–St. Paul / Twin Cities, Minnesota",
  travelNote: "We work within about one hour of the Minneapolis metro area.",
  insured: true,
  plumbingPartner: "Living Waters Plumbing",
  primaryCtaLabel: "Get a Free Estimate",
  primaryCtaHref: "/contact",
} as const;

/** Communities listed on the live bath-renew.com homepage */
export const verifiedCommunities = [
  "Minneapolis",
  "Golden Valley",
  "Plymouth",
  "Maple Grove",
  "Brooklyn Park",
  "Brooklyn Center",
  "New Hope",
  "Crystal",
  "Robbinsdale",
  "St. Louis Park",
  "Hopkins",
  "Minnetonka",
  "Edina",
  "Richfield",
  "Bloomington",
  "Eden Prairie",
  "Wayzata",
  "Shoreview",
  "Roseville",
  "Fridley",
  "Coon Rapids",
  "Champlin",
  "Andover",
  "Anoka",
] as const;

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://bath-renew.com";
