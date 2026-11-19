const benefits = [
  {
    title: "Guidance through the process",
    body: "From first conversation to finished bathroom, we help you understand options before you commit.",
  },
  {
    title: "Remodeling solutions that fit",
    body: "Full remodels, shower updates, conversions, and targeted repairs — chosen for your space and budget.",
  },
  {
    title: "Clear communication",
    body: "Transparent pricing conversations and straightforward recommendations from a small local company.",
  },
  {
    title: "Attention to workmanship",
    body: "Professional installation with care for the details homeowners live with every day.",
  },
  {
    title: "Local Twin Cities service",
    body: "We work with homeowners across Minneapolis and surrounding communities within about an hour of the metro.",
  },
];

export function WhyChoose() {
  return (
    <section className="section-pad">
      <div className="page-shell">
        <h2 className="max-w-2xl font-display text-3xl text-navy-deep sm:text-4xl">
          Why Homeowners Consider Bath Renew
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          Practical strengths drawn from how Bath Renew works today — without inflated claims.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item) => (
            <article key={item.title} className="surface-card p-5 sm:p-6">
              <h3 className="text-lg text-navy-deep">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
