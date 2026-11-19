import type { Metadata } from "next";
import { DraftBanner } from "@/components/DraftBanner";
import { SectionHeading } from "@/components/SectionHeading";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Draft privacy policy for Bath Renew LLC website inquiries — pending legal review.",
  robots: { index: false, follow: false },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <DraftBanner message="Draft privacy policy for legal review — noindex until approved." />
      <section className="section-pad">
        <div className="page-shell prose-like max-w-3xl space-y-6 text-muted">
          <SectionHeading
            as="h1"
            eyebrow="Legal"
            title="Privacy Policy (Draft)"
            description="This draft describes intended practices for website inquiries. It is not final legal advice and requires owner/counsel approval."
          />

          <h2 className="pt-4 text-xl text-navy-deep">Information we collect</h2>
          <p>
            When you submit the estimate form, we collect the name, email, phone number, project
            details, optional project type, and optional ZIP code you provide. If you call, text, or
            email us, we receive the information you choose to share through those channels.
          </p>

          <h2 className="text-xl text-navy-deep">How we use information</h2>
          <p>
            Inquiry information is used to respond to your request, discuss project options, and
            provide estimates. We do not sell personal information.
          </p>

          <h2 className="text-xl text-navy-deep">Retention</h2>
          <p>
            Retention periods for inquiry data need business-owner confirmation before this section
            is finalized.
          </p>

          <h2 className="text-xl text-navy-deep">Analytics</h2>
          <p>
            If Google Analytics (GA4) is configured, aggregated usage data may be collected to
            understand site performance. Configure consent tooling as required before production
            launch.
          </p>

          <h2 className="text-xl text-navy-deep">Contact</h2>
          <p>
            Privacy questions:{" "}
            <a className="text-accent" href={company.emailHref}>
              {company.email}
            </a>{" "}
            or{" "}
            <a className="text-accent" href={company.phoneHref}>
              {company.phoneDisplay}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
