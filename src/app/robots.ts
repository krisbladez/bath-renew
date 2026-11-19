import type { MetadataRoute } from "next";
import { siteUrl } from "@/content/company";
import { promotion } from "@/content/promotion";

export default function robots(): MetadataRoute.Robots {
  const disallow = ["/api/", "/privacy-policy"];
  if (!promotion.approvedForPublic) {
    disallow.push("/promotion");
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow,
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
