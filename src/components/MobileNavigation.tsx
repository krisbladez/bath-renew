"use client";

import Link from "next/link";
import { useEffect } from "react";
import { primaryNav } from "@/content/navigation";
import { company } from "@/content/company";
import { trackEvent } from "@/lib/analytics";

type Props = {
  open: boolean;
  onClose: () => void;
};

export function MobileNavigation({ open, onClose }: Props) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      <button
        type="button"
        className="absolute inset-0 bg-navy-deep/50"
        aria-label="Close menu"
        onClick={onClose}
      />
      <nav className="absolute right-0 top-0 flex h-full w-[min(100%,20rem)] flex-col bg-surface shadow-soft animate-fade-in">
        <div className="flex items-center justify-between border-b border-line px-4 py-4">
          <p className="font-display text-lg text-navy-deep">{company.brandName}</p>
          <button
            type="button"
            className="btn-ghost px-3 py-2"
            onClick={onClose}
            aria-label="Close navigation"
          >
            Close
          </button>
        </div>
        <ul className="flex flex-col gap-1 p-4">
          {primaryNav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block rounded-xl px-3 py-3 text-base font-medium text-navy hover:bg-sand"
                onClick={onClose}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-auto space-y-3 border-t border-line p-4">
          <a
            href={company.phoneHref}
            className="btn-secondary w-full"
            onClick={() => trackEvent("click_to_call")}
          >
            Call {company.phoneDisplay}
          </a>
          <Link href={company.primaryCtaHref} className="btn-primary w-full" onClick={onClose}>
            Request an Estimate
          </Link>
        </div>
      </nav>
    </div>
  );
}
