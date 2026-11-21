import { AssociateCard } from "@/components/content/AssociateCard";
import { DraftNotice } from "@/components/content/DraftNotice";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { createPageMetadata } from "@/lib/metadata";
import { associates, publicationFlags, siteConfig } from "@/lib/site";

export const metadata = {
  ...createPageMetadata(
    "Associates",
    "Associate advocates — draft listing pending confirmation and BCI-compliant publication approval.",
    "/associates",
  ),
  robots: publicationFlags.associatesConfirmed
    ? { index: true, follow: true }
    : { index: false, follow: false },
};

export default function AssociatesPage() {
  return (
    <>
      <PageHero
        eyebrow="Associates"
        title="Associate Advocates"
        description={`Draft directory for ${siteConfig.practiceName}. Photographs are placeholders until supplied. Profiles remain unpublished pending confirmation and professional review.`}
      />
      <Section>
        <DraftNotice>
          Do not publish associate profiles until the advocate confirms name
          accuracy, photographs, and compliance with applicable Bar Council of
          India rules. No fabricated qualifications or professional photographs
          have been generated.
        </DraftNotice>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {associates.map((associate) => (
            <AssociateCard key={associate.id} associate={associate} />
          ))}
        </div>
        <p className="mt-8 type-body-sm text-on-surface-variant">
          Replace photographs by placing image files at the paths shown on each
          card under <code className="text-primary">/public/images/associates/</code>.
        </p>
      </Section>
    </>
  );
}
