import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/content/services";

type Props = {
  limit?: number;
};

export function ServiceGrid({ limit }: Props) {
  const list = limit ? services.filter((s) => s.published).slice(0, limit) : services.filter((s) => s.published);

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((service) => (
        <ServiceCard key={service.slug} service={service} />
      ))}
    </div>
  );
}
