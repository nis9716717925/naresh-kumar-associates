import Link from "next/link";
import { DraftNotice } from "@/components/content/DraftNotice";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { createPageMetadata } from "@/lib/metadata";
import { lawUpdates } from "@/lib/site";

export const metadata = createPageMetadata(
  "Law Updates",
  "Factual legal updates and educational information — no solicitation.",
  "/resources/updates",
);

export default function LawUpdatesPage() {
  const published = lawUpdates.filter((u) => u.published);

  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Law Updates"
        description="Educational summaries of legislative, regulatory, and court-related developments. Publication dates and sources are required. No fabricated updates are published."
      />
      <Section>
        <DraftNotice title="Content pipeline">
          This section is ready for client-approved entries. Add updates in{" "}
          <code className="text-primary">src/lib/site.ts</code> (
          <code className="text-primary">lawUpdates</code>) with title, date,
          source reference, and summary. Do not invent case outcomes or promotional
          content.
        </DraftNotice>

        {published.length === 0 ? (
          <div className="rounded border border-outline-variant/40 bg-surface-container-lowest p-6 sm:p-8">
            <h2 className="type-headline-sm text-primary">No updates published yet</h2>
            <p className="mt-3 type-body-md text-on-surface-variant">
              When the advocate supplies verified update text, each entry will
              appear here with a publication date and source citation for
              educational reference only.
            </p>
            <ul className="mt-6 list-disc space-y-2 pl-5 type-body-sm text-on-surface-variant">
              <li>Neutral factual summary</li>
              <li>Publication or reference date</li>
              <li>Primary source (Gazette, statute, court website, etc.)</li>
              <li>No solicitation language or guaranteed outcomes</li>
            </ul>
          </div>
        ) : (
          <ul className="space-y-6">
            {published.map((update) => (
              <li
                key={update.slug}
                className="rounded border border-outline-variant/40 bg-surface-container-lowest p-5 sm:p-6"
              >
                <p className="type-label-sm uppercase tracking-wider text-secondary">
                  {update.date}
                </p>
                <h2 className="mt-2 type-headline-sm text-primary">
                  {update.title}
                </h2>
                <p className="mt-3 type-body-sm text-on-surface-variant">
                  {update.summary}
                </p>
                <p className="mt-3 type-body-sm text-on-surface-variant">
                  Source: {update.source}
                </p>
              </li>
            ))}
          </ul>
        )}

        <p className="mt-8 type-body-sm text-on-surface-variant">
          Related:{" "}
          <Link href="/resources/articles" className="text-primary underline">
            Articles
          </Link>
          {" · "}
          <Link href="/resources/news" className="text-primary underline">
            News
          </Link>
        </p>
      </Section>
    </>
  );
}
