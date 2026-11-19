import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { DraftBanner } from "@/components/DraftBanner";
import { PrimaryCTA } from "@/components/PrimaryCTA";
import { SectionHeading } from "@/components/SectionHeading";
import { company } from "@/content/company";
import { promotion } from "@/content/promotion";

export const metadata: Metadata = {
  title: "Bathroom Remodeling Special Offer",
  description:
    "Learn about Bath Renew’s bathroom remodeling offer for Twin Cities homeowners. Package details require approval before full publication.",
  robots: promotion.approvedForPublic
    ? { index: true, follow: true }
    : { index: false, follow: false },
};

export default function PromotionPage() {
  return (
    <>
      {!promotion.approvedForPublic ? (
        <DraftBanner message="Promotion page is in draft / noindex until package inclusions, exclusions, and restrictions are approved." />
      ) : null}

      <section className="section-pad">
        <div className="page-shell max-w-4xl space-y-10">
          <SectionHeading
            as="h1"
            eyebrow="Special Offer"
            title={promotion.draftHeadline}
            description={
              promotion.approvedForPublic
                ? promotion.summaryWhenApproved
                : promotion.summaryDraft
            }
          />

          {promotion.approvedForPublic ? (
            <div className="rounded-card border border-accent/30 bg-accent-soft/40 p-6">
              <p className="font-display text-3xl text-navy-deep">
                {promotion.liveHeadlineVerified}
              </p>
              <p className="mt-3 text-sm text-muted">{promotion.pricingDisclaimer}</p>
            </div>
          ) : (
            <div className="rounded-card border border-amber-300 bg-amber-50 p-6">
              <h2 className="text-xl text-amber-950">Starting price pending public approval</h2>
              <p className="mt-2 text-sm text-amber-950/90">
                Bath Renew’s live website currently advertises a base remodel starting price. This
                rebuild intentionally withholds publishing that price and package claim until
                inclusions, exclusions, upgrades, and restrictions are confirmed by the business
                owner.
              </p>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-amber-950/90">
                {promotion.pendingApprovalItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-amber-950/90">
                To flip public display on after approval, set{" "}
                <code className="rounded bg-white px-1">promotion.approvedForPublic</code> to{" "}
                <code className="rounded bg-white px-1">true</code> in{" "}
                <code className="rounded bg-white px-1">src/content/promotion.ts</code>.
              </p>
            </div>
          )}

          <div className="grid gap-4 sm:grid-cols-3">
            {promotion.highlightsVerified.map((item) => (
              <div key={item} className="surface-card p-5 text-sm font-medium text-navy">
                {item}
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-2xl">Why homeowners consider this offer</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {promotion.whyChoose.map((item) => (
                <article key={item.title} className="surface-card p-5">
                  <h3 className="text-lg text-navy-deep">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted">{item.body}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="surface-card space-y-3 p-6">
            <h2 className="text-xl">Modules ready for approved copy</h2>
            <ul className="grid gap-2 text-sm text-muted sm:grid-cols-2">
              {[
                "Eligible service types",
                "Included materials and labor",
                "Exclusions",
                "Potential upgrades",
                "Final pricing factors",
                "Restrictions & disclaimer",
              ].map((item) => (
                <li key={item} className="rounded-lg border border-dashed border-line px-3 py-2">
                  {item} — awaiting approved content
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted">{promotion.financingNote}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <PrimaryCTA
              href={company.primaryCtaHref}
              label={company.primaryCtaLabel}
              eventName="promotion_cta_click"
              eventParams={{ location: "promotion-page" }}
            />
            <PrimaryCTA href={company.phoneHref} label="Call Now" variant="secondary" external />
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
