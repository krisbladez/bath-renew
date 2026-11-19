import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import { company, verifiedCommunities } from "@/content/company";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "Bath Renew serves Minneapolis and Twin Cities communities within about one hour of the metro. See the verified community list.",
};

export default function ServiceAreasPage() {
  return (
    <>
      <section className="section-pad">
        <div className="page-shell space-y-12">
          <SectionHeading
            as="h1"
            eyebrow="Service Areas"
            title="Twin Cities Bathroom Remodeling Coverage"
            description={`${company.travelNote} The communities below are listed on Bath Renew’s current website. We do not invent coverage boundaries beyond that.`}
          />

          <div>
            <h2 className="mb-4 text-2xl">Confirmed communities</h2>
            <ul className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {verifiedCommunities.map((city) => (
                <li
                  key={city}
                  className="rounded-lg border border-line bg-surface px-4 py-3 text-sm text-navy"
                >
                  {city}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-muted">
              Surrounding Twin Cities communities within the travel radius may also be served —
              ask during your estimate.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl">Remodeling services available</h2>
            <ul className="flex flex-wrap gap-3">
              {services
                .filter((s) => s.published)
                .map((service) => (
                  <li key={service.slug}>
                    <Link href={`/services/${service.slug}`} className="btn-secondary">
                      {service.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
