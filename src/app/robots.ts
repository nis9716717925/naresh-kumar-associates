import type { MetadataRoute } from "next";
import { publicationFlags, siteConfig } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const disallow = ["/contact/success"];
  if (!publicationFlags.associatesConfirmed) {
    disallow.push("/associates");
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow,
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
