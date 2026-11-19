import Image from "next/image";
import { PrimaryCTA } from "@/components/PrimaryCTA";
import { company } from "@/content/company";

type Props = {
  tag?: string;
  headline?: string;
  support?: string;
  imageSrc?: string;
  imageAlt?: string;
  priority?: boolean;
};

export function HeroSection({
  tag = "Bathroom remodeling, made personal",
  headline = "A better bathroom starts with a better plan.",
  support = "Explore shower updates, tub-to-shower conversions, and bathroom remodeling options with Bath Renew. Thoughtful planning, skilled local work, and clear next steps for Twin Cities homeowners.",
  imageSrc = "/images/projects/bathroom-feature.jpg",
  imageAlt = "Bathroom remodel photography from Bath Renew",
  priority = true,
}: Props) {
  return (
    <section className="relative isolate min-h-[min(92vh,48rem)] overflow-hidden">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/25" />

      <div className="page-shell relative flex min-h-[min(92vh,48rem)] items-end pb-16 pt-28 sm:items-center sm:pb-24 sm:pt-28">
        <div className="max-w-2xl animate-fade-up text-white">
          <p className="section-tag !text-white/70">• {tag}</p>
          <p className="mb-3 font-display text-2xl tracking-tight text-white sm:text-3xl">
            {company.brandName}
          </p>
          <h1 className="font-display text-4xl leading-[1.08] text-white sm:text-5xl lg:text-[3.5rem]">
            {headline}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            {support}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryCTA
              href={company.primaryCtaHref}
              label="Request a Free Estimate"
              variant="on-dark"
            />
            <PrimaryCTA
              href="/our-work"
              label="Explore Our Work"
              variant="ghost-on-dark"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
