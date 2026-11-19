import Image from "next/image";
import Link from "next/link";
import { company } from "@/content/company";
import { footerNav } from "@/content/navigation";
import { services } from "@/content/services";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const serviceLinks = services.filter((s) => s.published);

  return (
    <footer className="border-t border-line bg-navy-deep text-navy-soft">
      <div className="page-shell section-pad grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Image
            src="/images/brand/logo.png"
            alt="Bath Renew"
            width={160}
            height={69}
            className="h-12 w-auto brightness-0 invert"
          />
          <p className="text-sm leading-relaxed text-navy-soft/80">
            {company.legalName} — bathroom remodeling for {company.serviceRegionLabel}.
          </p>
          <p className="text-sm text-navy-soft/80">{company.locality}</p>
        </div>

        <div>
          <h2 className="mb-4 font-sans text-sm font-semibold uppercase tracking-wider text-white">
            Contact
          </h2>
          <ul className="space-y-2 text-sm">
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
            <li className="text-navy-soft/80">Call or text welcome</li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 font-sans text-sm font-semibold uppercase tracking-wider text-white">
            Explore
          </h2>
          <ul className="space-y-2 text-sm">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-white" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 font-sans text-sm font-semibold uppercase tracking-wider text-white">
            Services
          </h2>
          <ul className="space-y-2 text-sm">
            {serviceLinks.map((service) => (
              <li key={service.slug}>
                <Link className="hover:text-white" href={`/services/${service.slug}`}>
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="page-shell flex flex-col gap-2 py-6 text-xs text-navy-soft/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {company.legalName}. All rights reserved.
          </p>
          <p>Serving the Twin Cities and surrounding communities.</p>
        </div>
      </div>
    </footer>
  );
}
