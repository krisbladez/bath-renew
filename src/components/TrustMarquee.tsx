const items = [
  "Thoughtful planning",
  "Skilled local professionals",
  "Clear project updates",
  "Work built to last",
];

export function TrustMarquee() {
  const sequence = [...items, ...items, ...items, ...items];

  return (
    <section className="overflow-hidden border-y border-line bg-sand/70" aria-label="Company strengths">
      <div className="trust-marquee flex whitespace-nowrap py-5 text-sm text-navy/80">
        {sequence.map((item, index) => (
          <span key={`${item}-${index}`} className="inline-flex items-center px-2">
            <span className="px-4">{item}</span>
            <span aria-hidden className="text-navy/30">
              ·
            </span>
          </span>
        ))}
      </div>
    </section>
  );
}
