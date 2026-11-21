import { ProseSection } from "@/components/content/ProseSection";
import { Placeholder } from "@/components/ui/Placeholder";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Legal Updates",
  "Generic statutory and forum updates — placeholders.",
  "/resources/updates",
);

const updates = [
  "[PLACEHOLDER: Neutral summary of legislative amendment — date TBD]",
  "[PLACEHOLDER: Court rule or circular summary — date TBD]",
  "[PLACEHOLDER: Tribunal practice direction — date TBD]",
];

export default function LegalUpdatesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Legal Updates"
        description="Educational notices regarding statutory or procedural developments. Not case-specific."
      />
      <Section>
        <Placeholder className="mb-8" />
        <div className="space-y-6">
          {updates.map((item) => (
            <ProseSection key={item} title="Update notice">
              <p>{item}</p>
            </ProseSection>
          ))}
        </div>
      </Section>
    </>
  );
}