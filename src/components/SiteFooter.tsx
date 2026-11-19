import Image from "next/image";
import Link from "next/link";
import { company } from "@/content/company";
import { footerCompany, footerExplore } from "@/content/navigation";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-deep text-white">
      <div className="page-shell section-pad grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-5 lg:col-span-1">
          <Image
            src="/images/brand/logo.png"
            alt="Bath Renew"
            width={160}
            height={69}
            className="h-11 w-auto brightness-0 invert"
          />
          <p className="max-w-xs text-sm leading-relaxed text-white/70">
            Bathroom remodeling for Twin Cities homeowners — clear planning, careful work.
          </p>
          <Link href={company.primaryCtaHref} className="btn-on-dark">
            Request a Free Estimate
          </Link>
        </div>

        <div>
          <h2 className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
            Explore
          </h2>
          <ul className="space-y-2 text-sm">
            {footerExplore.map((item) => (
              <li key={item.href}>
                <Link className="text-white/80 hover:text-white" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
            Company
          </h2>
          <ul className="space-y-2 text-sm">
            {footerCompany.map((item) => (
              <li key={item.href}>
                <Link className="text-white/80 hover:text-white" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
            Visit
          </h2>
          <ul className="space-y-2 text-sm text-white/80">
            <li>{company.locality}</li>
            <li>
              <a className="hover:text-white" href={company.phoneHref}>
                {company.phoneDisplay}
              </a>
            </li>
            <li>
              <a className="hover:text-white" href={company.emailHref}>
                {company.email}
              </a>
            </li>
            <li className="text-white/60">Call or text welcome</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="page-shell flex flex-col gap-2 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {company.legalName}. All rights reserved.
          </p>
          <p>Serving Minneapolis and surrounding Twin Cities communities.</p>
        </div>
      </div>

      <div className="overflow-hidden border-t border-white/10" aria-hidden>
        <div className="w-full pt-8 sm:pt-10">
          <p className="select-none translate-y-[0.18em] whitespace-nowrap text-center font-display text-[clamp(2.75rem,14.5vw,12.5rem)] font-semibold leading-none tracking-[-0.04em] text-white">
            BATH&nbsp;RENEW
          </p>
        </div>
      </div>
    </footer>
  );
}
