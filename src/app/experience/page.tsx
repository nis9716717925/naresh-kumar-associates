import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata(
  "Experience",
  "Professional experience of Advocate Naresh Kumar.",
  "/experience",
);

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        eyebrow="Experience"
        title="Professional Experience"
        description="Factual experience particulars as supplied by the client. No case outcomes or promotional claims."
      />
      <Section>
        <div className="rounded border border-outline-variant/40 bg-surface-container-lowest p-6 sm:p-8">
          <h2 className="type-headline-sm text-primary">
            {siteConfig.yearsOfPracticeLabel}
          </h2>
          <p className="mt-3 type-body-md text-on-surface-variant">
            {siteConfig.advocateName}, {siteConfig.principalTitle},{" "}
            {siteConfig.practiceStructure}. Experience is stated as supplied by
            the client and is subject to professional-conduct review before
            public emphasis.
          </p>
          <p className="mt-4 type-body-sm text-on-surface-variant">
            Forums referenced elsewhere on this site are informational listings
            only and do not assert exclusive practice or guaranteed results.
          </p>
        </div>
      </Section>
    </>
  );
}
