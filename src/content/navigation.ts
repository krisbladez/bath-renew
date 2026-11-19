export type NavItem = {
  label: string;
  href: string;
};

/** Renovique-style primary nav adapted to Bath Renew routes */
export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/our-work" },
  { label: "Services", href: "/services" },
  { label: "Areas", href: "/service-areas" },
  { label: "Contact", href: "/contact" },
];

export const footerExplore: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/our-work" },
];

export const footerCompany: NavItem[] = [
  { label: "Areas We Serve", href: "/service-areas" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
  { label: "Special Offer", href: "/promotion" },
  { label: "FAQ", href: "/faq" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

export const footerNav: NavItem[] = [
  ...primaryNav,
  { label: "How It Works", href: "/how-it-works" },
  { label: "Special Offer", href: "/promotion" },
  { label: "FAQ", href: "/faq" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];
