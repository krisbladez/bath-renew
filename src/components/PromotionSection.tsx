import Link from "next/link";
import { PrimaryCTA } from "@/components/PrimaryCTA";
import { company } from "@/content/company";
import { promotion } from "@/content/promotion";

export function PromotionSection() {
  return (
    <section className="section-pad">
      <div className="page-shell">
        <div className="overflow-hidden rounded-card border border-navy/15 bg-gradient-to-br from-navy-deep via-navy to-navy/90 px-6 py-12 text-white sm:px-10 lg:px-14">
          <div className="max-w-2xl animate-fade-in">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-soft">
              Special Offer
            </p>
            <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">
              {promotion.draftHeadline}
            </h2>
            {promotion.approvedForPublic ? (
              <>
                <p className="mt-4 font-display text-2xl text-accent-soft">
                  {promotion.liveHeadlineVerified}
                </p>
                <p className="mt-4 text-base text-white/85">{promotion.summaryWhenApproved}</p>
              </>
            ) : (
              <p className="mt-4 text-base text-white/85">{promotion.summaryDraft}</p>
            )}
            <ul className="mt-6 grid gap-2 text-sm text-white/90 sm:grid-cols-3">
              {promotion.highlightsVerified.map((item) => (
                <li key={item} className="rounded-lg bg-white/10 px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
            {!promotion.approvedForPublic ? (
              <p className="mt-4 text-sm text-amber-100">
                Starting-price details remain in draft until package scope is approved.{" "}
                <Link href="/promotion" className="underline underline-offset-2">
                  See approval status
                </Link>
                .
              </p>
            ) : null}
            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryCTA
                href="/promotion"
                label="See Special Offer"
                eventName="promotion_cta_click"
                eventParams={{ location: "homepage" }}
              />
              <PrimaryCTA
                href={company.primaryCtaHref}
                label={company.primaryCtaLabel}
                variant="secondary"
                className="border-white/30 bg-white/10 text-white hover:bg-white/20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
