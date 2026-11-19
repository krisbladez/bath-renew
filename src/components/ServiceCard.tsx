import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/content/services";

type Props = {
  service: Service;
};

export function ServiceCard({ service }: Props) {
  return (
    <article className="group surface-card overflow-hidden transition hover:-translate-y-0.5 hover:border-navy/25">
      <div className="relative aspect-[4/3] overflow-hidden bg-navy-soft/40">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(max-width:768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="space-y-3 p-5 sm:p-6">
        <h3 className="text-xl text-navy-deep">
          <Link href={`/services/${service.slug}`} className="hover:text-accent">
            {service.title}
          </Link>
        </h3>
        <p className="text-sm leading-relaxed text-muted">{service.shortDescription}</p>
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex text-sm font-semibold text-accent hover:text-accent-hover"
        >
          Learn more
          <span aria-hidden className="ml-1">
            →
          </span>
        </Link>
      </div>
    </article>
  );
}
