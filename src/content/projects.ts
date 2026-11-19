export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  location?: string;
  image: string;
  imageAlt: string;
  /** When false, show only as portfolio photography without inventing story details */
  detailsVerified: boolean;
};

/**
 * Photography sourced from the live bath-renew.com site.
 * Only Otsego has a verified caption on the current homepage.
 */
export const projects: Project[] = [
  {
    id: "otsego-complete",
    title: "Complete Bathroom Remodel",
    category: "Bathroom Remodeling",
    description:
      "A complete bathroom remodel photographed for Bath Renew’s portfolio.",
    location: "Otsego, MN",
    image: "/images/projects/bathroom-feature.jpg",
    imageAlt: "Complete bathroom remodel in Otsego, Minnesota by Bath Renew",
    detailsVerified: true,
  },
  {
    id: "portfolio-1",
    title: "Bathroom Transformation",
    category: "Bathroom Remodeling",
    description:
      "Project photography from Bath Renew’s published portfolio. Additional project notes pending owner approval.",
    image: "/images/projects/project-1.jpg",
    imageAlt: "Bath Renew portfolio bathroom remodel photography",
    detailsVerified: false,
  },
  {
    id: "portfolio-14",
    title: "Updated Bath Space",
    category: "Shower Remodeling",
    description:
      "Project photography from Bath Renew’s published portfolio. Category inferred from visual; narrative details not invented.",
    image: "/images/projects/project-14.jpg",
    imageAlt: "Bath Renew portfolio shower and bath update photography",
    detailsVerified: false,
  },
  {
    id: "portfolio-21",
    title: "Modern Bathroom Finish",
    category: "Bathroom Remodeling",
    description:
      "Project photography from Bath Renew’s published portfolio.",
    image: "/images/projects/project-21.jpg",
    imageAlt: "Bath Renew portfolio bathroom finish photography",
    detailsVerified: false,
  },
];

export const featuredProjectIds = [
  "otsego-complete",
  "portfolio-1",
  "portfolio-14",
] as const;
