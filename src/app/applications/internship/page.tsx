import { DraftNotice } from "@/components/content/DraftNotice";
import { ApplicationForms } from "@/components/forms/ApplicationForms";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { createPageMetadata } from "@/lib/metadata";
import { publicationFlags, siteConfig } from "@/lib/site";

export const metadata = {
  ...createPageMetadata(
    "Student Internship",
    "Draft internship application workflow.",
    "/applications/internship",
  ),
  robots: publicationFlags.applicationsLegallyApproved
    ? { index: true, follow: true }
    : { index: false, follow: false },
};

export default function InternshipApplicationPage() {
  return (
    <>
      <PageHero
        eyebrow="Applications"
        title="Student Internship"
        description="Applications from students interested in internships. Subject to professional and legal approval before public use."
      />
      <Section>
        <DraftNotice>
          Draft workflow only. Applications email target:{" "}
          {siteConfig.applicationsEmail}. Exact field requirements and server
          mail delivery are pending confirmation.
        </DraftNotice>
        <ApplicationForms category="internship" />
      </Section>
    </>
  );
}
