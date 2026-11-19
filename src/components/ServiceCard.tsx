import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/content/services";

type Props = {
  service: Service;
};

export function ServiceCard({ service }: Props) {
  return (
    <article className="group flex flex-col">
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-sand">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(max-width:768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col pt-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
          Bathroom Remodeling
        </p>
        <h3 className="mt-2 font-display text-xl text-navy-deep sm:text-2xl">
          <Link href={`/services/${service.slug}`} className="hover:text-accent">
            {service.title}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
          {service.shortDescription}
        </p>
        <Link href={`/services/${service.slug}`} className="text-link mt-5 inline-flex">
          Explore {service.title}
        </Link>
      </div>
    </article>
  );
}
