import type { MetadataRoute } from "next";
import { allRoutes, publicationFlags, siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const lastModified = new Date();

  const routes = allRoutes.filter((route) => {
    if (route === "/associates" || route.startsWith("/associates/")) {
      return publicationFlags.associatesConfirmed;
    }
    return true;
  });

  return routes.map((route) => ({
    url: `${base}${route === "/" ? "" : route}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: route === "/" ? 1 : route.startsWith("/resources/updates") ? 0.8 : 0.7,
  }));
}
