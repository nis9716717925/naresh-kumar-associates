import { ProseSection } from "@/components/content/ProseSection";
import { Placeholder } from "@/components/ui/Placeholder";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata(
  "Advocate Profile",
  "Informational profile for Advocate Naresh Kumar — Individual Practice.",
  "/profile",
);

export default function ProfilePage() {
  return (
    <>
      <PageHero
        eyebrow="Profile"
        title="Advocate Profile"
        description="Standing, enrolment, and chamber information for informational reference."
      />
      <Section>
        <ProfileGrid />
      </Section>
    </>
  );
}

function ProfileGrid() {
  const rows: { label: string; value: string; href?: string }[] = [
    { label: "Practice structure", value: siteConfig.practiceStructure },
    { label: "Public branding", value: siteConfig.practiceName },
    { label: "Name", value: siteConfig.advocateName },
    { label: "Designation", value: siteConfig.principalTitle },
    { label: "Bar Council enrolment", value: siteConfig.barEnrolment },
    { label: "Bar Council", value: siteConfig.barCouncil },
    {
      label: "Bar Association membership",
      value: siteConfig.barAssociations.join("; "),
    },
    {
      label: "Academic qualifications",
      value: siteConfig.qualifications.join("; "),
    },
    { label: "Professional experience", value: siteConfig.yearsOfPracticeLabel },
    { label: "Chamber address", value: siteConfig.chamberAddress },
    { label: "Registered office", value: siteConfig.registeredOfficeAddress },
    {
      label: "Personal contact 1",
      value: siteConfig.mobile,
      href: siteConfig.mobileTel,
    },
    {
      label: "Personal contact 2",
      value: siteConfig.additionalMobile,
      href: siteConfig.additionalMobileTel,
    },
    {
      label: "Office telephone",
      value: `${siteConfig.officePhone} — ${siteConfig.officePhoneNote}`,
      href: siteConfig.officePhoneTel,
    },
    { label: "Primary email", value: siteConfig.email },
    { label: "Secondary email (info@)", value: siteConfig.infoEmail },
  ];

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <ProseSection title="Registry particulars">
          <p className="mb-6 type-body-sm text-on-surface-variant">
            {siteConfig.structureDisclaimer}
          </p>
          <dl className="space-y-4">
            {rows.map((row) => (
              <div
                key={row.label}
                className="border-b border-outline-variant/20 pb-3"
              >
                <dt className="type-label-sm uppercase text-secondary">
                  {row.label}
                </dt>
                <dd className="mt-1 type-body-md text-primary">
                  {row.href ? (
                    <a
                      href={row.href}
                      className="underline-offset-2 hover:underline"
                    >
                      {row.value}
                    </a>
                  ) : (
                    row.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </ProseSection>
      </div>
      <div className="rounded border border-outline-variant/40 bg-surface-container-low p-6">
        <h2 className="mb-3 type-headline-sm text-primary">Publication note</h2>
        <p className="mb-4 type-body-sm text-on-surface-variant">
          Enrolment and association particulars are subject to Bar Council of
          India Rule 36 website particulars and client/professional review before
          public launch. No awards, case results, or promotional claims are
          published.
        </p>
        <Placeholder />
      </div>
    </div>
  );
}
