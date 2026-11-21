import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { createPageMetadata } from "@/lib/metadata";
import { allRoutes, practiceAreas } from "@/lib/site";

export const metadata = createPageMetadata(
  "Sitemap",
  "HTML sitemap for informational portal pages.",
  "/sitemap",
);

const grouped = {
  Main: [
    "/",
    "/about",
    "/profile",
    "/associates",
    "/qualifications",
    "/experience",
    "/practice-information",
    "/contact",
    "/faq",
  ],
  Applications: [
    "/applications",
    "/applications/junior-advocate",
    "/applications/internship",
    "/applications/empanelment",
  ],
  Legal: ["/disclaimer", "/privacy", "/terms"],
  Resources: [
    "/resources/articles",
    "/resources/updates",
    "/resources/news",
    "/resources/guides",
    "/resources/legal-faq",
  ],
};

export default function SitemapPage() {
  return (
    <>
      <PageHero
        eyebrow="Sitemap"
        title="Sitemap"
        description="Index of informational pages on this portal."
      />
      <Section>
        <SitemapGroups />
        <div className="mt-12">
          <h2 className="mb-4 type-headline-sm text-primary">Practice areas</h2>
          <ul className="grid gap-2 md:grid-cols-2">
            {practiceAreas.map((area) => (
              <li key={area.slug}>
                <Link
                  href={`/practice-areas/${area.slug}`}
                  className="type-body-sm text-primary hover:text-secondary"
                >
                  {area.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-8 type-body-sm text-on-surface-variant">
          Machine-readable sitemap:{" "}
          <Link href="/sitemap.xml" className="text-primary underline">
            /sitemap.xml
          </Link>{" "}
          ({allRoutes.length} routes indexed)
        </p>
      </Section>
    </>
  );
}

function SitemapGroups() {
  return (
    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
      {Object.entries(grouped).map(([title, routes]) => (
        <div key={title}>
          <h2 className="mb-4 type-headline-sm text-primary">{title}</h2>
          <ul className="space-y-2">
            {routes.map((route) => (
              <li key={route}>
                <Link
                  href={route}
                  className="type-body-sm text-primary hover:text-secondary"
                >
                  {route === "/" ? "Home" : route}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}