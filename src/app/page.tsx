import Image from "next/image";
import Link from "next/link";
import { FAQAccordion } from "@/components/FAQAccordion";
import { HeroSection } from "@/components/HeroSection";
import { PrimaryCTA } from "@/components/PrimaryCTA";
import { ProjectGallery } from "@/components/ProjectGallery";
import { ServiceGrid } from "@/components/ServiceGrid";
import { company, verifiedCommunities } from "@/content/company";
import { homeFaqPreview } from "@/content/faqs";
import { featuredProjectIds, projects } from "@/content/projects";
import { promotion } from "@/content/promotion";

const trustBar = [
  "Thoughtful planning",
  "Skilled local professionals",
  "Clear project updates",
  "Work built to last",
];

const renoviqueProcess = [
  {
    n: "01",
    title: "Start with a conversation",
    body: "Tell us what is working, what is not, and what you would love to change in your bathroom.",
  },
  {
    n: "02",
    title: "Plan your project",
    body: "We discuss scope, design direction, materials, budget considerations, and timing.",
  },
  {
    n: "03",
    title: "Bring the plan to life",
    body: "Professional installation transforms your bathroom while we keep you informed.",
  },
  {
    n: "04",
    title: "Enjoy the difference",
    body: "We review the finished work with you and take care of the final details.",
  },
];

const trustValues = [
  {
    n: "01",
    title: "A clear plan from the start",
    body: "Scope, priorities, and options are discussed before work begins so you know what to expect.",
  },
  {
    n: "02",
    title: "Communication you can count on",
    body: "As a smaller local company, you work directly with people who know your project.",
  },
  {
    n: "03",
    title: "Care for your home",
    body: "We respect your space and focus on clean, careful installation day to day.",
  },
  {
    n: "04",
    title: "Craftsmanship in the details",
    body: "Durable surrounds, fixtures, and finishes chosen to fit how you live.",
  },
];

export default function HomePage() {
  const featured = projects.filter((p) =>
    (featuredProjectIds as readonly string[]).includes(p.id),
  );
  const areaTags = verifiedCommunities.slice(0, 12);

  return (
    <>
      <HeroSection />

      {/* Trust bar */}
      <section className="border-y border-line bg-sand/70">
        <div className="page-shell flex flex-wrap items-center justify-center gap-x-6 gap-y-3 py-5 text-sm text-navy/80 sm:justify-between">
          {trustBar.map((item, i) => (
            <span key={item} className="inline-flex items-center gap-6">
              {i > 0 ? (
                <span className="hidden text-line sm:inline" aria-hidden>
                  ·
                </span>
              ) : null}
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="section-pad">
        <div className="page-shell">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="section-tag">• Our Services</p>
              <h2 className="font-display text-3xl leading-tight text-navy-deep sm:text-4xl lg:text-[2.75rem]">
                Bathrooms that work beautifully for the way you live.
              </h2>
            </div>
            <div className="space-y-5">
              <p className="text-muted leading-relaxed">
                Every bathroom can feel cleaner, easier, and more current. Explore remodeling
                options designed around Twin Cities homes and budgets.
              </p>
              <PrimaryCTA href="/services" label="View All Services" variant="secondary" />
            </div>
          </div>
          <div className="mt-12">
            <ServiceGrid />
          </div>
        </div>
      </section>

      {/* Before & After teaser */}
      <section className="section-pad bg-sand/50">
        <div className="page-shell grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="section-tag">• Before & After</p>
            <h2 className="font-display text-3xl leading-tight text-navy-deep sm:text-4xl lg:text-[2.75rem]">
              See what thoughtful remodeling can do.
            </h2>
          </div>
          <div className="space-y-5">
            <p className="text-muted leading-relaxed">
              Browse authentic project photography from Bath Renew’s portfolio — then request an
              estimate to talk through what is possible in your space.
            </p>
            <PrimaryCTA href="/our-work" label="Explore Our Work" variant="secondary" />
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="section-pad pt-8">
        <div className="page-shell">
          <ProjectGallery projects={featured} enableFilter={false} />
        </div>
      </section>

      {/* Dark trust */}
      <section className="bg-navy-deep text-white">
        <div className="page-shell grid gap-10 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src="/images/projects/project-21.jpg"
              alt="Bath Renew craftsmanship detail"
              fill
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl leading-tight text-white sm:text-4xl">
              Good work is built on trust.
            </h2>
            <p className="mt-4 text-white/75 leading-relaxed">
              Bath Renew is a smaller, locally operated remodeling company focused on personalized
              service, quality workmanship, and competitive pricing — fully insured, with plumbing
              coordinated through {company.plumbingPartner} when needed.
            </p>
            <ol className="mt-10 space-y-6">
              {trustValues.map((item) => (
                <li key={item.n} className="grid grid-cols-[3rem_1fr] gap-3">
                  <span className="font-display text-sm text-white/40">{item.n}</span>
                  <div>
                    <h3 className="font-display text-lg text-white">{item.title}</h3>
                    <p className="mt-1 text-sm text-white/65">{item.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-pad">
        <div className="page-shell">
          <div className="max-w-2xl">
            <p className="section-tag">• Our Process</p>
            <h2 className="font-display text-3xl leading-tight text-navy-deep sm:text-4xl">
              From first conversation to final finish.
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              A clear path based on how Bath Renew works with homeowners — from free estimate to
              finished bathroom.
            </p>
          </div>
          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {renoviqueProcess.map((step) => (
              <li key={step.n} className="sand-card p-6">
                <p className="font-display text-sm text-muted">{step.n}</p>
                <h3 className="mt-4 font-display text-xl text-navy-deep">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10">
            <PrimaryCTA href={company.primaryCtaHref} label="Request Your Free Estimate" />
          </div>
        </div>
      </section>

      {/* Planning / financing */}
      <section className="section-pad bg-sand/40">
        <div className="page-shell grid items-center gap-10 lg:grid-cols-2">
          <div className="relative aspect-[5/4] overflow-hidden rounded-2xl">
            <Image
              src="/images/projects/project-14.jpg"
              alt="Planning a bathroom remodel"
              fill
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl leading-tight text-navy-deep sm:text-4xl">
              Make a plan that feels right for your bathroom.
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Whether you want a focused shower update or a complete remodel, we help you understand
              options and pricing. Financing options are available — ask during your free
              consultation.
            </p>
            {!promotion.approvedForPublic ? (
              <p className="mt-4 text-sm text-amber-900">
                A base-price promotion exists for qualifying projects; package details stay in draft
                until approved.{" "}
                <Link href="/promotion" className="underline underline-offset-2">
                  See offer status
                </Link>
                .
              </p>
            ) : null}
            <div className="mt-8">
              <PrimaryCTA href={company.primaryCtaHref} label="Talk Through Your Project" />
            </div>
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="section-pad">
        <div className="page-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="section-tag">• Service Areas</p>
            <h2 className="font-display text-3xl leading-tight text-navy-deep sm:text-4xl">
              Proud to help homeowners across the Twin Cities.
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              {company.travelNote} Confirmed communities from Bath Renew’s published coverage list
              are shown here.
            </p>
            <div className="mt-8">
              <PrimaryCTA href="/service-areas" label="Check Your Location" />
            </div>
          </div>
          <ul className="flex flex-wrap gap-2">
            {areaTags.map((city) => (
              <li
                key={city}
                className="rounded-full bg-sand px-4 py-2 text-sm font-medium text-navy"
              >
                {city}
              </li>
            ))}
            <li className="rounded-full border border-dashed border-line px-4 py-2 text-sm text-muted">
              + surrounding communities
            </li>
          </ul>
        </div>
      </section>

      {/* Commitment */}
      <section className="section-pad bg-sand/50">
        <div className="page-shell max-w-3xl text-center">
          <p className="section-tag">• Our Commitment</p>
          <h2 className="font-display text-3xl leading-tight text-navy-deep sm:text-4xl">
            Careful work. Clear expectations.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted leading-relaxed">
            Honest conversations about scope, materials, and timing — so your bathroom update fits
            your home and budget without surprise claims.
          </p>
          <div className="mt-8 flex justify-center">
            <PrimaryCTA href="/about" label="Get to Know Bath Renew" variant="secondary" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad">
        <div className="page-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="font-display text-3xl leading-tight text-navy-deep sm:text-4xl">
              Questions homeowners often ask.
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Straight answers where we have verified information — and clear notes where details
              still need approval.
            </p>
            <div className="mt-8">
              <PrimaryCTA href="/contact" label="Contact Our Team" />
            </div>
          </div>
          <FAQAccordion items={homeFaqPreview} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/projects/project-1.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            aria-hidden
          />
          <div className="absolute inset-0 bg-navy-deep/75" />
        </div>
        <div className="page-shell relative py-24 text-center sm:py-28">
          <h2 className="mx-auto max-w-2xl font-display text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
            Ready to feel better about your bathroom?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">
            Tell us a little about your project and connect with Bath Renew to discuss the next
            steps.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <PrimaryCTA
              href={company.primaryCtaHref}
              label="Request Your Free Estimate"
              variant="on-dark"
            />
            <a href={company.phoneHref} className="btn-ghost-on-dark">
              Call {company.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
