"use client";

import { PrimaryCTA } from "@/components/PrimaryCTA";
import { company } from "@/content/company";
import { trackEvent } from "@/lib/analytics";

type Props = {
  headline?: string;
  support?: string;
};

export function CTASection({
  headline = "Ready to Explore Your Bathroom Remodeling Options?",
  support = "Tell us a little about your bathroom project and connect with Bath Renew to discuss the next steps.",
}: Props) {
  return (
    <section className="section-pad">
      <div className="page-shell">
        <div className="rounded-2xl bg-sand px-6 py-14 text-center sm:px-10">
          <h2 className="font-display text-3xl text-navy-deep sm:text-4xl">{headline}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">{support}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <PrimaryCTA href={company.primaryCtaHref} label="Request a Free Estimate" />
            <a
              href={company.phoneHref}
              className="btn-secondary"
              onClick={() => trackEvent("click_to_call")}
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
