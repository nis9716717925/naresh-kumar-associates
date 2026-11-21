import { BciDisclaimerBox } from "@/components/content/BciDisclaimerBox";
import { ProseSection } from "@/components/content/ProseSection";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata(
  "About",
  "Informational overview of Naresh Kumar & Associates and regulatory compliance.",
  "/about",
);

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={siteConfig.practiceName}
        description={`${siteConfig.advocateName}, ${siteConfig.principalTitle} — ${siteConfig.professionalDescriptor}. This page provides informational material only and does not solicit work.`}
      />
      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          <ProseSection title="Practice identity">
            <p>
              This portal presents {siteConfig.practiceName} as proposed branding
              for informational purposes. {siteConfig.structureDisclaimer}
            </p>
            <p>
              Professional biography, chambers narrative, and court practice
              descriptions remain placeholders until verified by the advocate.
              No testimonials, success rates, or promotional claims are published.
            </p>
          </ProseSection>
          <ProseSection title="Regulatory framework">
            <p>
              Rule 36 of the Bar Council of India Rules restricts advertising and
              solicitation. This site is structured as an informational resource
              regarding statutory forums and subject-matter compendia.
            </p>
            <p>
              Users should consult independent counsel for case-specific guidance.
              Associate profiles and application portals remain draft until
              client confirmation and professional/legal approval.
            </p>
          </ProseSection>
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/profile" variant="ghost">
            View profile
          </Button>
          <Button href="/practice-information" variant="ghost">
            View forums
          </Button>
          <Button href="/associates" variant="ghost">
            Associates (draft)
          </Button>
        </div>
      </Section>
      <Section className="bg-surface-container-low py-12">
        <BciDisclaimerBox />
      </Section>
    </>
  );
}
