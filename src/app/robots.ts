import type { MetadataRoute } from "next";
import { publicationFlags, siteConfig } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const disallow = ["/applications/success", "/contact/success"];
  if (!publicationFlags.associatesConfirmed) {
    disallow.push("/associates");
  }
  if (!publicationFlags.applicationsLegallyApproved) {
    disallow.push("/applications");
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow,
    },
    sitemap: siteConfig.url ? `${siteConfig.url}/sitemap.xml` : undefined,
  };
}
