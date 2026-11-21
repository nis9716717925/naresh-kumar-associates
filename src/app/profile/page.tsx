import { ProseSection } from "@/components/content/ProseSection";
import { Placeholder } from "@/components/ui/Placeholder";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata(
  "Advocate Profile",
  "Informational profile for Naresh Kumar, Principal Advocate.",
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
  const rows = [
    { label: "Practice name", value: siteConfig.practiceName },
    { label: "Professional descriptor", value: siteConfig.professionalDescriptor },
    { label: "Name", value: siteConfig.advocateName },
    { label: "Title", value: siteConfig.principalTitle },
    { label: "Bar Council enrolment", value: siteConfig.barEnrolment },
    { label: "Jurisdiction / forums", value: siteConfig.jurisdiction },
    { label: "Chamber address", value: siteConfig.chamberAddress },
    { label: "Registered office", value: siteConfig.registeredOfficeAddress },
    {
      label: "Mobile",
      value: siteConfig.mobile,
      href: siteConfig.mobileTel,
    },
    {
      label: "Additional advocate contact",
      value: siteConfig.additionalMobile,
      href: siteConfig.additionalMobileTel,
    },
    {
      label: "Office telephone",
      value: `${siteConfig.officePhone} — ${siteConfig.officePhoneNote}`,
      href: siteConfig.officePhoneTel,
    },
    { label: "Professional email", value: siteConfig.email },
    {
      label: "Professional summary",
      value:
        "[PLACEHOLDER: Brief neutral professional summary pending advocate verification]",
    },
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
                  {"href" in row && row.href ? (
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
        <h2 className="mb-3 type-headline-sm text-primary">Verification status</h2>
        <p className="mb-4 type-body-sm text-on-surface-variant">
          Credential blocks on this portal remain placeholders until the advocate
          confirms each public statement. Contact details await confirmation
          before public launch.
        </p>
        <Placeholder />
      </div>
    </div>
  );
}
