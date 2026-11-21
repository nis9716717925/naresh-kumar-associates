import type { MetadataRoute } from "next";
import { allRoutes, publicationFlags, siteConfig } from "@/lib/site";

/** Draft / pending-approval routes stay out of public sitemap until flags flip */
const draftPrefixes = ["/associates", "/applications"];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url || "https://example.invalid";
  const lastModified = new Date();

  const routes = allRoutes.filter((route) => {
    const isDraft = draftPrefixes.some(
      (p) => route === p || route.startsWith(`${p}/`),
    );
    if (!isDraft) return true;
    if (route.startsWith("/associates")) return publicationFlags.associatesConfirmed;
    if (route.startsWith("/applications")) {
      return publicationFlags.applicationsLegallyApproved;
    }
    return true;
  });

  return routes.map((route) => ({
    url: `${base}${route === "/" ? "" : route}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: route === "/" ? 1 : 0.7,
  }));
}
