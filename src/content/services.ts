export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  heroHeadline: string;
  overview: string;
  problems: string[];
  solutions: string[];
  costFactors: string[];
  faqs: { question: string; answer: string }[];
  image: string;
  imageAlt: string;
  relatedSlugs: string[];
  published: boolean;
};

export const services: Service[] = [
  {
    slug: "shower-remodeling",
    title: "Shower Remodeling",
    shortDescription:
      "Update an outdated shower with durable surrounds, modern fixtures, and a cleaner, more usable layout.",
    heroHeadline: "Shower Remodeling for Twin Cities Homes",
    overview:
      "Bath Renew helps homeowners refresh tired shower spaces with solid-surface or quartz surrounds, improved layouts, and professional installation. Whether you want a cleaner look, easier maintenance, or a more accessible shower, we plan the update around your bathroom and budget.",
    problems: [
      "Aging tile with cracked grout or moisture damage",
      "Difficult-to-clean shower walls",
      "Outdated fixtures and hardware",
      "Layouts that feel cramped or hard to use",
    ],
    solutions: [
      "Solid-surface and quartz shower surround options",
      "Updated shower configurations and fixtures",
      "Shower door upgrades when needed",
      "Coordination with licensed plumbing pros when plumbing work is required",
    ],
    costFactors: [
      "Existing bathroom conditions and any repair needs",
      "Surround material and finish selections",
      "Fixture and door upgrades",
      "Plumbing changes required for the new layout",
    ],
    faqs: [
      {
        question: "Can you update my shower without remodeling the whole bathroom?",
        answer:
          "Yes. Many homeowners choose a focused shower remodel—new surrounds, fixtures, or doors—without a full bathroom renovation.",
      },
      {
        question: "What surround materials do you offer?",
        answer:
          "Bath Renew installs solid-surface and quartz shower surrounds, along with other durable wall system options discussed during your estimate.",
      },
    ],
    image: "/images/projects/project-1.jpg",
    imageAlt: "Updated shower remodel with modern surrounds",
    relatedSlugs: ["tub-to-shower-conversion", "shower-wall-systems", "shower-doors"],
    published: true,
  },
  {
    slug: "tub-to-shower-conversion",
    title: "Tub-to-Shower Conversion",
    shortDescription:
      "Replace an unused bathtub with a walk-in shower that fits how you use the bathroom today.",
    heroHeadline: "Tub-to-Shower Conversions",
    overview:
      "If your bathtub rarely gets used, a tub-to-shower conversion can free up space, simplify cleaning, and create a more practical daily bathroom. Bath Renew plans conversions around your existing footprint, waterproofing needs, and finish preferences.",
    problems: [
      "Bathtubs that are rarely used",
      "Hard-to-step-over tub walls",
      "Desire for a more accessible bathing area",
      "Outdated tub/shower surrounds",
    ],
    solutions: [
      "Remove the existing tub and install a new shower configuration",
      "Durable wall systems and waterproofing details",
      "Fixture and door selections that match your style",
      "Plumbing coordination for drain and supply changes when required",
    ],
    costFactors: [
      "Plumbing modifications needed for the conversion",
      "Shower base and wall system selections",
      "Doors, fixtures, and accessories",
      "Condition of surrounding walls and flooring",
    ],
    faqs: [
      {
        question: "Can you replace my bathtub with a shower?",
        answer:
          "Yes. Bath Renew offers tub-to-shower conversions so you can replace an existing bathtub with a new shower configuration.",
      },
      {
        question: "Will a conversion always require plumbing changes?",
        answer:
          "Many conversions involve plumbing work. When plumbing is required, Bath Renew partners with Living Waters Plumbing so the work meets professional standards and local codes.",
      },
    ],
    image: "/images/projects/project-14.jpg",
    imageAlt: "Bathroom shower conversion with clean modern finishes",
    relatedSlugs: ["shower-remodeling", "bathroom-remodeling", "shower-doors"],
    published: true,
  },
  {
    slug: "bathroom-remodeling",
    title: "Bathroom Remodeling",
    shortDescription:
      "Plan a complete bathroom remodel—from surrounds and fixtures to a fresher, more functional space.",
    heroHeadline: "Complete Bathroom Remodeling",
    overview:
      "Bath Renew specializes in affordable, high-quality bathroom remodeling for Minneapolis and surrounding Twin Cities homeowners. We help update outdated bathrooms without the overhead often associated with large remodeling companies, focusing on personalized service and competitive pricing.",
    problems: [
      "Bathrooms that feel dated or worn",
      "Multiple elements needing updates at once",
      "Desire for a cohesive new look on a clear budget",
      "Uncertainty about where to start",
    ],
    solutions: [
      "Complete bathroom renovations tailored to your goals",
      "Shower, tub, vanity, surround, and door updates",
      "Material and finish guidance during consultation",
      "Professional installation with attention to detail",
    ],
    costFactors: [
      "Scope of work (partial update vs. full remodel)",
      "Material and finish selections",
      "Plumbing or layout changes",
      "Condition of existing surfaces and substrates",
    ],
    faqs: [
      {
        question: "Do you offer free estimates?",
        answer:
          "Yes. Contact Bath Renew to schedule a consultation and receive a personalized quote for your bathroom project.",
      },
      {
        question: "How long does a typical bathroom remodel take?",
        answer:
          "Most bathroom remodels take between a few days and 1 to 2 weeks, depending on project size and materials. Smaller updates can be completed even sooner.",
      },
    ],
    image: "/images/projects/bathroom-feature.jpg",
    imageAlt: "Completed bathroom remodel with updated finishes",
    relatedSlugs: ["shower-remodeling", "tub-to-shower-conversion", "bathroom-repairs"],
    published: true,
  },
  {
    slug: "shower-wall-systems",
    title: "Shower Wall Systems",
    shortDescription:
      "Install solid-surface or quartz shower surrounds designed for durability and easier upkeep.",
    heroHeadline: "Shower & Tub Surround Systems",
    overview:
      "Bath Renew installs shower and tub surrounds—including solid-surface and quartz options—so homeowners can replace dated tile or damaged walls with clean, modern surfaces that are easier to maintain.",
    problems: [
      "Grout discoloration and mold-prone tile joints",
      "Damaged or outdated surround panels",
      "Surfaces that are hard to keep looking clean",
    ],
    solutions: [
      "Solid-surface shower surrounds",
      "Quartz shower surrounds",
      "Tub surround installation and updates",
      "Finish selections that fit your bathroom style",
    ],
    costFactors: [
      "Material type and panel configuration",
      "Bathroom size and layout complexity",
      "Prep work or repair of existing walls",
      "Matching fixtures or trim pieces",
    ],
    faqs: [
      {
        question: "Are solid-surface surrounds easier to clean than tile?",
        answer:
          "Many homeowners choose solid-surface or quartz surrounds because they reduce grout lines and can be simpler to wipe down day to day. We’ll review options that fit your maintenance preferences during the estimate.",
      },
    ],
    image: "/images/projects/project-21.jpg",
    imageAlt: "Modern shower wall surround installation",
    relatedSlugs: ["shower-remodeling", "bathroom-repairs", "tub-to-shower-conversion"],
    published: true,
  },
  {
    slug: "shower-doors",
    title: "Shower Doors",
    shortDescription:
      "Add or replace shower doors that improve the look, splash control, and finish of your bathroom.",
    heroHeadline: "Shower Door Installation",
    overview:
      "New shower doors can complete a remodel and help keep water where it belongs. Bath Renew can include shower door options as part of a broader bathroom update or as a focused improvement.",
    problems: [
      "Missing or damaged shower enclosures",
      "Cloudy or outdated glass",
      "Curtains that don’t control splash well",
    ],
    solutions: [
      "Shower door selection and installation",
      "Coordination with new surrounds or conversions",
      "Hardware finishes that match updated fixtures",
    ],
    costFactors: [
      "Door style and glass type",
      "Opening size and hardware selections",
      "Whether surrounding remodel work is included",
    ],
    faqs: [
      {
        question: "Can shower doors be added to an existing remodel?",
        answer:
          "Yes. Doors can be part of a full remodel or added when the opening and surrounds are ready for an enclosure.",
      },
    ],
    image: "/images/projects/project-1.jpg",
    imageAlt: "Bathroom with updated shower enclosure",
    relatedSlugs: ["shower-remodeling", "tub-to-shower-conversion"],
    published: true,
  },
  {
    slug: "bathroom-repairs",
    title: "Bathroom Repairs & Updates",
    shortDescription:
      "Handle practical updates—tile repair, surround refresh, fixture replacements—without a full gut remodel.",
    heroHeadline: "Bathroom Repairs and Targeted Updates",
    overview:
      "Not every bathroom needs a full renovation. Bath Renew offers practical updates such as tile installation and repair, surround replacement, fixture updates, and other focused improvements that refresh the space while fitting your budget.",
    problems: [
      "Damaged tile or worn surfaces",
      "Single elements that make the whole bath feel dated",
      "Budget preference for a partial remodel",
    ],
    solutions: [
      "Tile installation and repair",
      "Surround and panel updates",
      "Fixture replacements",
      "Partial remodels planned around your priorities",
    ],
    costFactors: [
      "Extent of damage or wear",
      "Whether repairs expand into waterproofing work",
      "Materials selected for the update",
    ],
    faqs: [
      {
        question: "Can you remodel my bathroom without a full renovation?",
        answer:
          "Yes. We offer partial remodels such as new shower surrounds, tile updates, or fixture replacements to refresh a bathroom without the cost of a full renovation.",
      },
    ],
    image: "/images/projects/project-14.jpg",
    imageAlt: "Bathroom update with refreshed surfaces",
    relatedSlugs: ["shower-wall-systems", "bathroom-remodeling"],
    published: true,
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug && s.published);
}

export function getRelatedServices(slug: string) {
  const current = getService(slug);
  if (!current) return [];
  return current.relatedSlugs
    .map((related) => getService(related))
    .filter((s): s is Service => Boolean(s));
}
