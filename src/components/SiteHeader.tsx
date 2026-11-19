"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { company } from "@/content/company";
import { primaryNav } from "@/content/navigation";
import { MobileNavigation } from "@/components/MobileNavigation";
import { trackEvent } from "@/lib/analytics";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition ${
        scrolled
          ? "border-b border-line/80 bg-canvas/95 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="page-shell flex h-16 items-center justify-between gap-4 sm:h-[4.75rem]">
        <Link href="/" className="flex shrink-0 items-center gap-2" aria-label="Bath Renew home">
          <Image
            src="/images/brand/logo.png"
            alt="Bath Renew"
            width={160}
            height={69}
            className={`h-9 w-auto sm:h-11 ${scrolled ? "" : "brightness-0 invert"}`}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-3 py-2 text-sm font-medium transition ${
                scrolled
                  ? "text-navy/85 hover:bg-sand hover:text-navy"
                  : "text-white/90 hover:bg-white/10 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={company.phoneHref}
            className={`hidden text-sm font-semibold xl:inline-flex ${
              scrolled ? "text-navy" : "text-white"
            }`}
            onClick={() => trackEvent("click_to_call")}
          >
            {company.phoneDisplay}
          </a>
          <Link
            href={company.primaryCtaHref}
            className={`hidden px-5 py-2.5 text-sm sm:inline-flex ${
              scrolled ? "btn-primary" : "btn-on-dark"
            }`}
          >
            Request an Estimate
          </Link>
          <button
            type="button"
            className={`px-3 py-2 text-sm font-semibold lg:hidden ${
              scrolled ? "text-navy" : "text-white"
            }`}
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
