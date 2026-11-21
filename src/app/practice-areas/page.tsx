import Link from "next/link";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { Placeholder } from "@/components/ui/Placeholder";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { createPageMetadata } from "@/lib/metadata";
import { practiceAreas } from "@/lib/site";

export const metadata = createPageMetadata(
  "Areas of Practice",
  "Informational compendium of legal practice areas.",
  "/practice-areas",
);

export default function PracticeAreasHubPage() {
  return (
    <>
      <PageHero
        eyebrow="Practice Areas"
        title="Fields of Legal Practice"
        description="Educational catalogue of statutory subject areas. Individual advocate practice scope remains subject to verification."
      />
      <Section className="bg-surface-container-low py-20">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {practiceAreas.map((area, index) => (
            <article
              key={area.slug}
              className="flex flex-col justify-between rounded border border-outline-variant/40 bg-surface-container-lowest p-8"
            >
              <div>
                <span className="mb-3 block type-label-sm tracking-wider text-secondary">
                  {String(index + 1).padStart(2, "0")} / {area.category}
                </span>
                <h2 className="mb-3 type-headline-sm text-primary">{area.title}</h2>
                <p className="mb-4 type-body-sm text-on-surface-variant">{area.summary}</p>
                {!area.verified && <Placeholder className="mb-4" />}
                <p className="type-body-sm text-primary">
                  <span className="type-label-sm text-on-surface/70">Statutes: </span>
                  {area.statutes}
                </p>
              </div>
              <Link
                href={`/practice-areas/${area.slug}`}
                className="group mt-6 inline-flex items-center type-label-md text-primary hover:text-secondary"
              >
                View information
                <MaterialIcon
                  name="arrow_forward"
                  className="ml-1 text-sm transition-transform group-hover:translate-x-1"
                />
              </Link>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}