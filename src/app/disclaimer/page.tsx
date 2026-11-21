import { BciDisclaimerBox } from "@/components/content/BciDisclaimerBox";
import { ProseSection } from "@/components/content/ProseSection";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Disclaimer",
  "Bar Council of India statutory disclaimer.",
  "/disclaimer",
);

export default function DisclaimerPage() {
  return (
    <>
      <PageHero
        eyebrow="Disclaimer"
        title="Statutory Disclaimer"
        description="Mandatory declarations under the Advocates Act, 1961 and Bar Council of India Rules."
      />
      <Section>
        <BciDisclaimerBox />
        <div className="mt-8">
          <ProseSection title="No warranty">
            <p>
              Information is provided on an as-is basis for education. The
              advocate does not warrant completeness or suitability for any
              particular purpose.
            </p>
          </ProseSection>
        </div>
      </Section>
    </>
  );
}