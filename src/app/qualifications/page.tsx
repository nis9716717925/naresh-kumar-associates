import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata(
  "Qualifications",
  "Academic qualifications of Advocate Naresh Kumar.",
  "/qualifications",
);

const rows = [
  {
    degree: "Master of Commerce (M.Com.)",
    detail: "Academic qualification as supplied by the client.",
  },
  {
    degree: "Bachelor of Laws (LL.B.)",
    detail: "Academic qualification as supplied by the client.",
  },
];

export default function QualificationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Qualifications"
        title="Academic Qualifications"
        description={`${siteConfig.advocateName} — ${siteConfig.practiceStructure}.`}
      />
      <Section>
        <ul className="space-y-6">
          {rows.map((row) => (
            <li
              key={row.degree}
              className="border-b border-outline-variant/30 pb-6"
            >
              <h2 className="type-headline-sm text-primary">{row.degree}</h2>
              <p className="mt-2 type-body-sm text-on-surface-variant">
                {row.detail}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-8 type-body-sm text-on-surface-variant">
          Institution names and years were not supplied. Do not invent missing
          academic particulars.
        </p>
      </Section>
    </>
  );
}
