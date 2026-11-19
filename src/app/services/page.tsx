import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceGrid } from "@/components/ServiceGrid";

export const metadata: Metadata = {
  title: "Bathroom Remodeling Services",
  description:
    "Explore Bath Renew services including shower remodeling, tub-to-shower conversions, surrounds, doors, repairs, and complete bathroom remodels in the Twin Cities.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="section-pad">
        <div className="page-shell">
          <SectionHeading
            as="h1"
            eyebrow="Services"
            title="Bathroom Remodeling Services"
            description="Every service listed here is published on Bath Renew’s current website. Free estimates are how we start the conversation — not a remodeling service themselves."
          />
          <div className="mt-12">
            <ServiceGrid />
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
