import type { Metadata } from "next";
import { siteConfig } from "./site";

export function createPageMetadata(
  title: string,
  description?: string,
  path = "/",
): Metadata {
  const fullTitle = title === "Home" ? siteConfig.title : `${title} — ${siteConfig.advocateName}`;
  const desc = description ?? siteConfig.description;
  const url = `${siteConfig.url}${path === "/" ? "" : path}`;

  return {
    title: fullTitle,
    description: desc,
    openGraph: {
      title: fullTitle,
      description: desc,
      url,
      siteName: siteConfig.practiceName,
      type: "website",
      locale: "en_IN",
    },
    robots: { index: true, follow: true },
    alternates: { canonical: url },
  };
}