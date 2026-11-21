import { ProseSection } from "@/components/content/ProseSection";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Privacy Policy",
  "Informational privacy policy for enquiry processing.",
  "/privacy",
);

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="Privacy Policy"
        description="How administrative enquiry data may be processed on this informational portal."
      />
      <Section>
        <div className="space-y-6">
          <ProseSection title="Data collected">
            <p>
              When you submit an enquiry form, we may process your name,
              organisation, email, selected forum, and message content solely to
              respond administratively where permitted.
            </p>
          </ProseSection>
          <ProseSection title="Purpose and retention">
            <p>
              Data is not sold or used for marketing. Retention periods:
              [PLACEHOLDER: retention policy pending advocate confirmation].
            </p>
          </ProseSection>
          <ProseSection title="Your rights">
            <p>
              [PLACEHOLDER: Rights and contact for data requests — pending
              verification under applicable law.]
            </p>
          </ProseSection>
        </div>
      </Section>
    </>
  );
}