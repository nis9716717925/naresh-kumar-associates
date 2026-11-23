import { BciDisclaimerBox } from "@/components/content/BciDisclaimerBox";
import { ProseSection } from "@/components/content/ProseSection";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata(
  "About",
  "About Advocate Naresh Kumar — Individual Practice under Naresh Kumar & Associates branding.",
  "/about",
);

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={siteConfig.practiceName}
        description={`${siteConfig.advocateName}, ${siteConfig.principalTitle} — ${siteConfig.practiceStructure}. ${siteConfig.yearsOfPracticeLabel}. This page provides informational material only and does not solicit work.`}
      />
      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          <ProseSection title="Practice identity">
            <p>
              This portal presents {siteConfig.practiceName} as public-facing
              branding for the Individual Practice of {siteConfig.advocateName}.{" "}
              {siteConfig.structureDisclaimer}
            </p>
            <p>
              Enrolment: {siteConfig.barEnrolment} ({siteConfig.barCouncil}).
              Academic qualifications: {siteConfig.qualifications.join("; ")}.
              Professional experience: {siteConfig.yearsOfPracticeLabel}.
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
              Associate listings remain draft until confirmation and professional
              approval.
            </p>
          </ProseSection>
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/profile" variant="ghost">
            View profile
          </Button>
          <Button href="/experience" variant="ghost">
            Experience
          </Button>
          <Button href="/practice-information" variant="ghost">
            View forums
          </Button>
        </div>
      </Section>
      <Section className="bg-surface-container-low py-12">
        <BciDisclaimerBox />
      </Section>
    </>
  );
}
