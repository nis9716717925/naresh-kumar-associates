import { ProseSection } from "@/components/content/ProseSection";
import { Placeholder } from "@/components/ui/Placeholder";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Legal News & Developments",
  "General legal news summaries — placeholders only.",
  "/resources/news",
);

const items = [
  "[PLACEHOLDER: Public domain report on appellate decision — neutral summary]",
  "[PLACEHOLDER: Regulatory development in corporate insolvency]",
  "[PLACEHOLDER: Constitutional bench listing note — educational]",
];

export default function LegalNewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Legal News & Developments"
        description="Curated public-domain developments described in neutral educational language."
      />
      <Section>
        <Placeholder className="mb-8" />
        <div className="space-y-6">
          {items.map((item) => (
            <ProseSection key={item} title="Development summary">
              <p>{item}</p>
            </ProseSection>
          ))}
        </div>
      </Section>
    </>
  );
}