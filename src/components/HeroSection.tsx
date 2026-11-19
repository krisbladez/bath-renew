import Image from "next/image";
import { PrimaryCTA } from "@/components/PrimaryCTA";
import { company } from "@/content/company";

type Props = {
  headline?: string;
  support?: string;
  imageSrc?: string;
  imageAlt?: string;
  priority?: boolean;
};

export function HeroSection({
  headline = "Bathroom Remodeling for Twin Cities Homeowners",
  support = "Explore shower updates, tub-to-shower conversions, and bathroom remodeling options with Bath Renew. See our work, understand your options, and request a free estimate for your project.",
  imageSrc = "/images/projects/bathroom-feature.jpg",
  imageAlt = "Bathroom remodel photography from Bath Renew",
  priority = true,
}: Props) {
  return (
    <section className="relative isolate min-h-[min(92vh,52rem)] overflow-hidden">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/88 via-navy-deep/70 to-navy-deep/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/50 via-transparent to-navy-deep/20" />

      <div className="page-shell relative flex min-h-[min(92vh,52rem)] items-end pb-16 pt-28 sm:items-center sm:pb-24 sm:pt-20">
        <div className="max-w-2xl animate-fade-up text-white">
          <p className="mb-4 font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            {company.brandName}
          </p>
          <h1 className="font-display text-3xl leading-[1.1] text-white sm:text-4xl lg:text-5xl">
            {headline}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            {support}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryCTA href={company.primaryCtaHref} label={company.primaryCtaLabel} />
            <PrimaryCTA href="/our-work" label="View Our Work" variant="secondary" className="border-white/30 bg-white/10 text-white hover:bg-white/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
