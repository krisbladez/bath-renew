"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { company } from "@/content/company";
import { primaryNav } from "@/content/navigation";
import { MobileNavigation } from "@/components/MobileNavigation";
import { trackEvent } from "@/lib/analytics";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-canvas/90 backdrop-blur-md">
      <div className="page-shell flex h-16 items-center justify-between gap-4 sm:h-[4.5rem]">
        <Link href="/" className="flex shrink-0 items-center gap-2" aria-label="Bath Renew home">
          <Image
            src="/images/brand/logo.png"
            alt="Bath Renew"
            width={160}
            height={69}
            className="h-10 w-auto sm:h-12"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-2.5 py-2 text-sm font-medium text-navy/90 transition hover:bg-navy-soft/50 hover:text-navy-deep"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={company.phoneHref}
            className="hidden text-sm font-semibold text-navy xl:inline-flex"
            onClick={() => trackEvent("click_to_call")}
          >
            {company.phoneDisplay}
          </a>
          <Link
            href={company.primaryCtaHref}
            className="btn-primary hidden px-4 py-2.5 text-sm sm:inline-flex"
          >
            {company.primaryCtaLabel}
          </Link>
          <a
            href={company.phoneHref}
            className="btn-secondary px-3 py-2 text-sm sm:hidden"
            aria-label={`Call ${company.phoneDisplay}`}
            onClick={() => trackEvent("click_to_call")}
          >
            Call
          </a>
          <button
            type="button"
            className="btn-ghost px-3 py-2 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen(true)}
          >
            Menu
          </button>
        </div>
      </div>
      <div id="mobile-nav">
        <MobileNavigation open={open} onClose={() => setOpen(false)} />
      </div>
    </header>
  );
}
