"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

type Props = {
  href: string;
  label: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  eventName?: "promotion_cta_click" | "service_cta_click";
  eventParams?: Record<string, string>;
  external?: boolean;
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
  const variantClass =
    variant === "primary"
      ? "btn-primary"
      : variant === "secondary"
        ? "btn-secondary"
        : "btn-ghost";

  const onClick = () => {
    if (eventName) trackEvent(eventName, eventParams);
  };

  if (external || href.startsWith("tel:") || href.startsWith("sms:") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={`${variantClass} ${className}`.trim()} onClick={onClick}>
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={`${variantClass} ${className}`.trim()} onClick={onClick}>
      {label}
    </Link>
  );
}
