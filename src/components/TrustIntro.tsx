import Image from "next/image";
import { company, verifiedCommunities } from "@/content/company";

export function TrustIntro() {
  return (
    <section className="section-pad">
      <div className="page-shell grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Twin Cities bathroom remodeling
          </p>
          <h2 className="mt-3 font-display text-3xl text-navy-deep sm:text-4xl">
            A local team focused on clear updates and practical value
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {company.brandName} specializes in affordable, high-quality bathroom remodeling
            throughout Minneapolis and surrounding Twin Cities communities. As a smaller, locally
            operated company, we focus on personalized service, quality workmanship, and competitive
            pricing.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            <li className="rounded-lg border border-line bg-surface px-4 py-3 text-sm text-navy">
              Serving {verifiedCommunities.length}+ Twin Cities communities
            </li>
            <li className="rounded-lg border border-line bg-surface px-4 py-3 text-sm text-navy">
              Fully insured for your peace of mind
            </li>
            <li className="rounded-lg border border-line bg-surface px-4 py-3 text-sm text-navy">
              Plumbing coordinated with {company.plumbingPartner}
            </li>
            <li className="rounded-lg border border-line bg-surface px-4 py-3 text-sm text-navy">
              Free consultation and estimate
            </li>
          </ul>
        </div>
        <div className="relative overflow-hidden rounded-card border border-line shadow-soft">
          <div className="relative aspect-[4/5]">
            <Image
              src="/images/projects/project-21.jpg"
              alt="Bath Renew bathroom remodeling work"
              fill
              sizes="(max-width:1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-4 left-4 rounded-lg bg-surface/95 px-3 py-2 shadow-soft">
            <Image
              src="/images/brand/angi-ssa.png"
              alt="Angi Super Service Award"
              width={56}
              height={59}
              className="h-12 w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
