import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { SectionHeading } from "@/components/SectionHeading";
import { company } from "@/content/company";
import { faqs } from "@/content/faqs";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Bath Renew bathroom remodeling timelines, services, plumbing, and Twin Cities coverage.",
};

export default function FAQPage() {
  return (
    <>
      <section className="section-pad">
        <div className="page-shell max-w-3xl">
          <SectionHeading
            as="h1"
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            description={`Cannot find what you need? Reach us at ${company.email} or call ${company.phoneDisplay}.`}
          />
          <div className="mt-10">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
