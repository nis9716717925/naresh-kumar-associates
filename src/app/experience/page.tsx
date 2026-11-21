import { ProseSection } from "@/components/content/ProseSection";
import { Placeholder } from "@/components/ui/Placeholder";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Professional Experience",
  "Informational experience summary with placeholders.",
  "/experience",
);

const experienceItems = [
  {
    title: "[PLACEHOLDER: Years of practice]",
    body: "[PLACEHOLDER: Neutral description of forums and types of work — no case outcomes]",
  },
  {
    title: "[PLACEHOLDER: Court practice]",
    body: "[PLACEHOLDER: High Court / Supreme Court appearances — factual only when verified]",
  },
  {
    title: "[PLACEHOLDER: Advisory roles]",
    body: "[PLACEHOLDER: Non-promotional description of advisory capacity]",
  },
];

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        eyebrow="Experience"
        title="Professional Experience"
        description="Chronological and forum-based experience information. Marketing language and success metrics are not used."
      />
      <Section>
        <Placeholder className="mb-8" />
        <div className="space-y-6">
          {experienceItems.map((item) => (
            <ProseSection key={item.title} title={item.title}>
              <p>{item.body}</p>
            </ProseSection>
          ))}
        </div>
      </Section>
    </>
  );
}