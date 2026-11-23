import { AssociateCard } from "@/components/content/AssociateCard";
import { DraftNotice } from "@/components/content/DraftNotice";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { createPageMetadata } from "@/lib/metadata";
import { associates, publicationFlags, siteConfig } from "@/lib/site";

export const metadata = {
  ...createPageMetadata(
    "Associates",
    "Names and photographs of associates — draft pending confirmation and professional approval.",
    "/associates",
  ),
  robots: publicationFlags.associatesConfirmed
    ? { index: true, follow: true }
    : { index: false, follow: false },
};

export default function AssociatesPage() {
  const spellingFlags = associates.filter((a) => a.spellingNote);

  return (
    <>
      <PageHero
        eyebrow="Associates"
        title="Associates"
        description={`Names and photographs only, for ${siteConfig.practiceName}. No biographies or credentials are published here.`}
      />
      <Section>
        <DraftNotice>
          Do not publish until photographs are supplied by the client, spellings
          are confirmed, associates consent, and display complies with applicable
          Bar Council rules.
        </DraftNotice>
        {spellingFlags.length > 0 && (
          <ul className="mb-6 list-disc space-y-1 pl-5 type-body-sm text-on-surface-variant">
            {spellingFlags.map((a) => (
              <li key={a.id}>
                {a.name}: {a.spellingNote}
              </li>
            ))}
          </ul>
        )}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {associates.map((associate) => (
            <AssociateCard key={associate.id} associate={associate} />
          ))}
        </div>
      </Section>
    </>
  );
}
