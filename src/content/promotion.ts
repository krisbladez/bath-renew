/**
 * Promotion content integrity gate.
 * Set approvedForPublic to true only after owner confirms package scope.
 */
export const promotion = {
  approvedForPublic: false,
  draftHeadline: "Explore Our Bathroom Remodeling Offer",
  liveHeadlineVerified: "Beautiful New Bathrooms Starting at Only $4,995",
  startingPriceDisplay: "$4,995",
  summaryWhenApproved:
    "Our base-price remodel promotion makes it easier to upgrade your bathroom without the big-company price tag.",
  summaryDraft:
    "Bath Renew offers a base-price remodel promotion for qualifying bathroom projects. Package inclusions, exclusions, and restrictions are being confirmed before the full offer is published here.",
  highlightsVerified: [
    "Professional installation",
    "Choose your finishes",
    "Transparent pricing conversation during your estimate",
  ],
  whyChoose: [
    {
      title: "Transparent Pricing",
      body: "Know what you’re paying for and what your options cost.",
    },
    {
      title: "Personal Service",
      body: "Work directly with a small local remodeling company.",
    },
    {
      title: "Quality Materials",
      body: "Choose from durable, attractive bathroom materials and finishes.",
    },
    {
      title: "Professional Installation",
      body: "Your remodel is professionally installed with attention to detail.",
    },
  ],
  pricingDisclaimer:
    "Final price depends on bathroom conditions, selections, configuration, and additional work required. Promotion applies to qualifying projects.",
  pendingApprovalItems: [
    "Exact base package inclusions (labor and materials)",
    "Explicit exclusions list",
    "Optional upgrades and pricing structure",
    "Eligibility rules and geographic restrictions",
    "Any time-bound promotion limits",
  ],
  financingNote:
    "Financing options are available. Ask about financing during your free consultation.",
} as const;
