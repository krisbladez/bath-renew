import type { MetadataRoute } from "next";
import { siteUrl } from "@/content/company";
import { promotion } from "@/content/promotion";
import { services } from "@/content/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/services",
    "/our-work",
    "/how-it-works",
    "/about",
    "/faq",
    "/contact",
    "/service-areas",
  ];

  if (promotion.approvedForPublic) {
    staticRoutes.push("/promotion");
  }

  const entries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));

  for (const service of services.filter((s) => s.published)) {
    entries.push({
      url: `${siteUrl}/services/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  return entries;
}
