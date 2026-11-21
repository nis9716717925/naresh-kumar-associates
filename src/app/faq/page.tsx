import { Accordion } from "@/components/ui/Accordion";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { createPageMetadata } from "@/lib/metadata";
import { siteFaq } from "@/lib/site";

export const metadata = createPageMetadata(
  "FAQ",
  "Frequently asked questions about this informational portal.",
  "/faq",
);

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        description="Answers regarding compliance posture, enquiries, and use of informational content."
      />
      <Section>
        <Accordion items={siteFaq} />
      </Section>
    </>
  );
}