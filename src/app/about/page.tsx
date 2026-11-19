import type { Metadata } from "next";
import Image from "next/image";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import { company, verifiedCommunities } from "@/content/company";

export const metadata: Metadata = {
  title: "About Bath Renew",
  description:
    "Learn about Bath Renew LLC — a locally operated bathroom remodeling company serving Minneapolis and the Twin Cities.",
};

export default function AboutPage() {
  return (
    <>
      <section className="section-pad">
        <div className="page-shell grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading
              as="h1"
              eyebrow="About"
              title="About Bath Renew"
              description="Affordable, high-quality bathroom remodeling for Minneapolis and surrounding Twin Cities homeowners."
            />
            <div className="mt-8 space-y-4 text-muted leading-relaxed">
              <p>
                Bath Renew specializes in bathroom remodeling and renovation services throughout
                Minneapolis and the surrounding Twin Cities area. We help homeowners update outdated
                bathrooms without the high prices and overhead often associated with large remodeling
                companies.
              </p>
              <p>
                As a smaller, locally operated remodeling company, Bath Renew focuses on personalized
                service, quality workmanship, and competitive pricing. We work with trusted licensed
                plumbing professionals when plumbing work is required — partnering with{" "}
                {company.plumbingPartner} — and are fully insured.
              </p>
              <p>
                Based in the {company.locality} area, we serve homeowners across the metro and nearby
                communities within about one hour of Minneapolis.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="surface-card p-5">
                <h2 className="text-lg">Verified qualifications</h2>
                <ul className="mt-3 space-y-2 text-sm text-muted">
                  <li>Fully insured</li>
                  <li>Plumbing partnership with {company.plumbingPartner}</li>
                  <li>Free consultation and estimate</li>
                </ul>
                <p className="mt-3 text-xs text-amber-800">
                  License numbers and detailed warranty terms need owner approval before publication.
                </p>
              </div>
              <div className="surface-card p-5">
                <h2 className="text-lg">Service region</h2>
                <p className="mt-3 text-sm text-muted">
                  {verifiedCommunities.slice(0, 8).join(", ")}, and surrounding Twin Cities
                  communities.
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-card border border-line shadow-soft">
            <div className="relative aspect-[4/5]">
              <Image
                src="/images/projects/project-1.jpg"
                alt="Bath Renew bathroom remodeling project"
                fill
                sizes="(max-width:1024px) 100vw, 40vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
