import { DraftNotice } from "@/components/content/DraftNotice";
import { ApplicationForms } from "@/components/forms/ApplicationForms";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { createPageMetadata } from "@/lib/metadata";
import { publicationFlags, siteConfig } from "@/lib/site";

export const metadata = {
  ...createPageMetadata(
    "Junior Advocate Appointment",
    "Draft application for junior advocate appointment.",
    "/applications/junior-advocate",
  ),
  robots: publicationFlags.applicationsLegallyApproved
    ? { index: true, follow: true }
    : { index: false, follow: false },
};

export default function JuniorAdvocateApplicationPage() {
  return (
    <>
      <PageHero
        eyebrow="Applications"
        title="Junior Advocate Appointment"
        description="Applications from advocates interested in appointment as Junior Advocates. Subject to professional and legal approval before public use."
      />
      <Section>
        <DraftNotice>
          Draft workflow only. Applications email target:{" "}
          {siteConfig.applicationsEmail}. Exact field requirements and server
          mail delivery are pending confirmation.
        </DraftNotice>
        <ApplicationForms category="junior-advocate" />
      </Section>
    </>
  );
}
