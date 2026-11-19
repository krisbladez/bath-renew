"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

type Props = {
  href: string;
  label: string;
  variant?: "primary" | "secondary" | "ghost" | "on-dark" | "ghost-on-dark";
  className?: string;
  eventName?: "promotion_cta_click" | "service_cta_click";
  eventParams?: Record<string, string>;
  external?: boolean;
};

const variantClass: Record<NonNullable<Props["variant"]>, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  ghost: "btn-ghost",
  "on-dark": "btn-on-dark",
  "ghost-on-dark": "btn-ghost-on-dark",
};

export function PrimaryCTA({
  href,
  label,
  variant = "primary",
  className = "",
  eventName,
  eventParams,
  external,
}: Props) {
  const onClick = () => {
    if (eventName) trackEvent(eventName, eventParams);
  };

  const classes = `${variantClass[variant]} ${className}`.trim();

  if (
    external ||
    href.startsWith("tel:") ||
    href.startsWith("sms:") ||
    href.startsWith("mailto:")
  ) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={onClick}>
      {label}
    </Link>
  );
}
