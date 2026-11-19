import Image from "next/image";

type Props = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  caption?: string;
};

/** Ready for authentic before/after pairs when provided by the business. */
export function BeforeAfterComparison({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  caption,
}: Props) {
  return (
    <figure className="surface-card overflow-hidden">
      <div className="grid sm:grid-cols-2">
        <div className="relative aspect-[4/3] border-b border-line sm:border-b-0 sm:border-r">
          <Image src={beforeSrc} alt={beforeAlt} fill sizes="50vw" className="object-cover" />
          <span className="absolute left-3 top-3 rounded-md bg-navy-deep/80 px-2 py-1 text-xs font-semibold text-white">
            Before
          </span>
        </div>
        <div className="relative aspect-[4/3]">
          <Image src={afterSrc} alt={afterAlt} fill sizes="50vw" className="object-cover" />
          <span className="absolute left-3 top-3 rounded-md bg-accent/90 px-2 py-1 text-xs font-semibold text-white">
            After
          </span>
        </div>
      </div>
      {caption ? (
        <figcaption className="border-t border-line px-4 py-3 text-sm text-muted">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
