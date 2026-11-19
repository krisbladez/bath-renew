type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as: Tag = "h2",
}: Props) {
  const alignment = align === "center" ? "mx-auto text-center" : "";
  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          {eyebrow}
        </p>
      ) : null}
      <Tag className="text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.15]">
        {title}
      </Tag>
      {description ? (
        <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
          {description}
        </p>
      ) : null}
    </div>
  );
}
