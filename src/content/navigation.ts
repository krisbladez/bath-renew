export type NavItem = {
  label: string;
  href: string;
};

export const primaryNav: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/our-work" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Special Offer", href: "/promotion" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
];

export const footerNav: NavItem[] = [
  ...primaryNav,
  { label: "Contact", href: "/contact" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];
