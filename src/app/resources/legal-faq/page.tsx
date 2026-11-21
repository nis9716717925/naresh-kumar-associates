import { Accordion } from "@/components/ui/Accordion";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { createPageMetadata } from "@/lib/metadata";
import { legalFaq } from "@/lib/site";

export const metadata = createPageMetadata(
  "Frequently Asked Legal Questions",
  "Generic legal education FAQ — not advice.",
  "/resources/legal-faq",
);

export default function LegalFaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Frequently Asked Legal Questions"
        description="General definitions and process descriptions for educational orientation."
      />
      <Section>
        <Accordion items={legalFaq} />
      </Section>
    </>
  );
}