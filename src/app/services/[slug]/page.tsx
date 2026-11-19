import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { PrimaryCTA } from "@/components/PrimaryCTA";
import { ProcessSteps } from "@/components/ProcessSteps";
import { company } from "@/content/company";
import { verifiedProcessSteps } from "@/content/process";
import { getRelatedServices, getService, services } from "@/content/services";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.filter((s) => s.published).map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = getRelatedServices(service.slug);
  const faqs = service.faqs.map((item, index) => ({
    id: `${service.slug}-${index}`,
    question: item.question,
    answer: item.answer,
    verified: true,
  }));

  return (
    <>
      <section className="relative isolate min-h-[28rem] overflow-hidden">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy-deep/75" />
        <div className="page-shell relative flex min-h-[28rem] items-end pb-12 pt-24">
          <div className="max-w-3xl text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-soft">
              Service
            </p>
            <h1 className="mt-3 font-display text-4xl text-white sm:text-5xl">
              {service.heroHeadline}
            </h1>
            <p className="mt-4 max-w-2xl text-white/85">{service.shortDescription}</p>
            <div className="mt-8">
              <PrimaryCTA
                href={company.primaryCtaHref}
                label={company.primaryCtaLabel}
                eventName="service_cta_click"
                eventParams={{ service: service.slug }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="page-shell grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl">Overview</h2>
            <p className="text-muted leading-relaxed">{service.overview}</p>

            <h2 className="pt-4 text-2xl sm:text-3xl">Problems We Help Address</h2>
            <ul className="list-disc space-y-2 pl-5 text-muted">
              {service.problems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h2 className="pt-4 text-2xl sm:text-3xl">Remodeling Solutions</h2>
            <ul className="list-disc space-y-2 pl-5 text-muted">
              {service.solutions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <aside className="surface-card h-fit space-y-4 p-6">
            <h2 className="text-xl">Factors That Affect Cost</h2>
            <ul className="space-y-2 text-sm text-muted">
              {service.costFactors.map((item) => (
                <li key={item} className="border-b border-line pb-2 last:border-0">
                  {item}
                </li>
              ))}
            </ul>
            <PrimaryCTA
              href={company.primaryCtaHref}
              label={company.primaryCtaLabel}
              className="w-full"
              eventName="service_cta_click"
              eventParams={{ service: service.slug, placement: "sidebar" }}
            />
          </aside>
        </div>
      </section>

      <section className="section-pad bg-surface/60">
        <div className="page-shell">
          <h2 className="mb-8 text-2xl sm:text-3xl">How the Remodel Process Works</h2>
          <ProcessSteps steps={verifiedProcessSteps} />
        </div>
      </section>

      {faqs.length ? (
        <section className="section-pad">
          <div className="page-shell max-w-3xl">
            <h2 className="mb-6 text-2xl sm:text-3xl">Related Questions</h2>
            <FAQAccordion items={faqs} />
          </div>
        </section>
      ) : null}

      {related.length ? (
        <section className="section-pad pt-0">
          <div className="page-shell">
            <h2 className="mb-6 text-2xl">Related Services</h2>
            <ul className="flex flex-wrap gap-3">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link href={`/services/${item.slug}`} className="btn-secondary">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <CTASection />
    </>
  );
}
