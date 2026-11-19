import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { HeroSection } from "@/components/HeroSection";
import { PrimaryCTA } from "@/components/PrimaryCTA";
import { ProcessSteps } from "@/components/ProcessSteps";
import { ProjectGallery } from "@/components/ProjectGallery";
import { PromotionSection } from "@/components/PromotionSection";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceGrid } from "@/components/ServiceGrid";
import { TrustIntro } from "@/components/TrustIntro";
import { WhyChoose } from "@/components/WhyChoose";
import { company } from "@/content/company";
import { homeFaqPreview } from "@/content/faqs";
import { verifiedProcessSteps } from "@/content/process";
import { featuredProjectIds, projects } from "@/content/projects";

export default function HomePage() {
  const featured = projects.filter((p) =>
    (featuredProjectIds as readonly string[]).includes(p.id),
  );

  return (
    <>
      {/* 1 Header via layout · 2 Hero */}
      <HeroSection />

      {/* 3 Trust introduction */}
      <TrustIntro />

      {/* 4 Services */}
      <section className="section-pad bg-surface/60">
        <div className="page-shell">
          <SectionHeading
            title="Bathroom Remodeling Options for Your Home"
            description="Explore verified Bath Renew services for showers, conversions, surrounds, doors, repairs, and complete remodels."
          />
          <div className="mt-10">
            <ServiceGrid />
          </div>
          <div className="mt-8">
            <PrimaryCTA href="/services" label="Explore Services" variant="secondary" />
          </div>
        </div>
      </section>

      {/* 5 Featured projects */}
      <section className="section-pad">
        <div className="page-shell">
          <SectionHeading
            title="See What a Bathroom Transformation Can Look Like"
            description="Photography from Bath Renew’s published portfolio. Additional project stories are added as details are approved."
          />
          <div className="mt-10">
            <ProjectGallery projects={featured} enableFilter={false} />
          </div>
          <div className="mt-8">
            <PrimaryCTA href="/our-work" label="Explore Our Projects" />
          </div>
        </div>
      </section>

      {/* 6 How it works */}
      <section className="section-pad bg-surface/60">
        <div className="page-shell">
          <SectionHeading
            title="A Clearer Path to Your Bathroom Remodel"
            description="A straightforward path from first conversation to finished bathroom, based on Bath Renew’s published process."
          />
          <div className="mt-10">
            <ProcessSteps steps={verifiedProcessSteps} />
          </div>
          <div className="mt-8">
            <PrimaryCTA href={company.primaryCtaHref} label="Request Your Free Estimate" />
          </div>
        </div>
      </section>

      {/* 7 Special promotion */}
      <PromotionSection />

      {/* 8 Why choose */}
      <WhyChoose />

      {/* 9 Testimonials intentionally omitted — no approved reviews to publish */}

      {/* 10 FAQ preview */}
      <section className="section-pad bg-surface/60">
        <div className="page-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              title="Questions Homeowners Ask"
              description="Straight answers where we have verified information — and clear notes where details still need approval."
            />
            <Link
              href="/faq"
              className="mt-6 inline-flex text-sm font-semibold text-accent hover:text-accent-hover"
            >
              View all FAQs →
            </Link>
          </div>
          <FAQAccordion items={homeFaqPreview} />
        </div>
      </section>

      {/* 11 Final CTA */}
      <CTASection />

      {/* 12 Footer via layout */}
    </>
  );
}
