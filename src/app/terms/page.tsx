import { ProseSection } from "@/components/content/ProseSection";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Terms and Conditions",
  "Terms of use for this informational legal portal.",
  "/terms",
);

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Terms"
        title="Terms and Conditions"
        description="Conditions governing access to informational materials on this website."
      />
      <Section>
        <div className="space-y-6">
          <ProseSection title="Acceptance">
            <p>
              By using this site you agree that content is informational,
              non-solicitative, and does not create professional obligations.
            </p>
          </ProseSection>
          <ProseSection title="Intellectual property">
            <p>
              Text and structure are for personal reference. Republication
              requires permission: [PLACEHOLDER: rights statement].
            </p>
          </ProseSection>
          <ProseSection title="Limitation of liability">
            <p>
              To the extent permitted by law, the advocate is not liable for
              reliance on generic educational materials published here.
            </p>
          </ProseSection>
        </div>
      </Section>
    </>
  );
}