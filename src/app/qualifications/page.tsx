import { ProseSection } from "@/components/content/ProseSection";
import { Placeholder } from "@/components/ui/Placeholder";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Professional Qualifications",
  "Academic and professional qualifications — placeholder content.",
  "/qualifications",
);

const qualificationPlaceholders = [
  {
    degree: "[PLACEHOLDER: Master of Laws (LL.M.)]",
    detail: "[PLACEHOLDER: Specialization, institution, year]",
  },
  {
    degree: "[PLACEHOLDER: Bachelor of Laws (LL.B.)]",
    detail: "[PLACEHOLDER: Faculty of Law, university, year]",
  },
  {
    degree: "[PLACEHOLDER: Undergraduate degree]",
    detail: "[PLACEHOLDER: Department, university, year]",
  },
];

export default function QualificationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Qualifications"
        title="Professional Qualifications"
        description="Educational pedigree listed for informational transparency. No ranking or comparative claims."
      />
      <Section>
        <div className="mb-6 flex items-center gap-3">
          <Placeholder />
          <span className="type-body-sm text-on-surface-variant">
            Pending advocate verification of each entry
          </span>
        </div>
        <div className="space-y-6">
          {qualificationPlaceholders.map((item) => (
            <ProseSection key={item.degree} title={item.degree}>
              <p>{item.detail}</p>
            </ProseSection>
          ))}
        </div>
      </Section>
    </>
  );
}