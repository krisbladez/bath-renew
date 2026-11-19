import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { ProcessSteps } from "@/components/ProcessSteps";
import { SectionHeading } from "@/components/SectionHeading";
import { proposedProcessSteps, verifiedProcessSteps } from "@/content/process";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "See how Bath Renew guides Twin Cities homeowners from free estimate to finished bathroom remodel.",
};

export default function HowItWorksPage() {
  return (
    <>
      <section className="section-pad">
        <div className="page-shell space-y-16">
          <SectionHeading
            as="h1"
            eyebrow="Process"
            title="How Bath Renew Works With Homeowners"
            description="Start with the verified three-step path from our current site, then review an expanded draft process pending owner confirmation."
          />

          <div>
            <h2 className="mb-6 text-2xl sm:text-3xl">Verified process</h2>
            <ProcessSteps steps={verifiedProcessSteps} />
          </div>

          <div>
            <h2 className="mb-2 text-2xl sm:text-3xl">Expanded process draft</h2>
            <p className="mb-6 max-w-2xl text-muted">
              A clearer six-stage path proposed for the rebuild. Not presented as a firm operating
              commitment until approved.
            </p>
            <ProcessSteps steps={proposedProcessSteps} showStatusNote />
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
