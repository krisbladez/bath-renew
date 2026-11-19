import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { ProjectGallery } from "@/components/ProjectGallery";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Browse bathroom remodeling photography from Bath Renew’s Twin Cities portfolio.",
};

export default function OurWorkPage() {
  return (
    <>
      <section className="section-pad">
        <div className="page-shell">
          <SectionHeading
            as="h1"
            eyebrow="Portfolio"
            title="Our Work"
            description="These images come from Bath Renew’s published website portfolio. We only attach locations or project stories when they are verified — additional details can be added after owner approval."
          />
          <div className="mt-12">
            <ProjectGallery projects={projects} />
          </div>
        </div>
      </section>
      <CTASection headline="Want a bathroom update like these?" />
    </>
  );
}
