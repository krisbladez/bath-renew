import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "Contact & Free Estimate",
  description:
    "Request a free bathroom remodeling estimate from Bath Renew. Call, text, or email — serving the Twin Cities.",
};

export default function ContactPage() {
  return (
    <section className="section-pad">
      <div className="page-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            as="h1"
            eyebrow="Contact"
            title="Start Your Project"
            description="Have a project in mind? Fill out the form, call, text, or email. We’re happy to discuss your bathroom remodel."
          />
          <div className="mt-8 space-y-4 text-sm">
            <p>
              <span className="font-semibold text-navy">Phone / Text:</span>{" "}
              <a className="text-accent hover:text-accent-hover" href={company.phoneHref}>
                {company.phoneDisplay}
              </a>
            </p>
            <p>
              <span className="font-semibold text-navy">Email:</span>{" "}
              <a className="text-accent hover:text-accent-hover" href={company.emailHref}>
                {company.email}
              </a>
            </p>
            <p className="text-muted">
              Serving {company.serviceRegionLabel}. Based in the {company.locality} area.
            </p>
            <p className="rounded-lg border border-amber-300/70 bg-amber-50 px-4 py-3 text-amber-950">
              Form submissions deliver only when <code>CONTACT_FORM_ENDPOINT</code> is configured.
              Until then, use call, text, or email — the form will not show a false success message.
            </p>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
