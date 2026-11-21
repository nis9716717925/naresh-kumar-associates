import { DraftNotice } from "@/components/content/DraftNotice";
import { ApplicationForms } from "@/components/forms/ApplicationForms";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { createPageMetadata } from "@/lib/metadata";
import { publicationFlags, siteConfig } from "@/lib/site";

export const metadata = {
  ...createPageMetadata(
    "Advocate Empanelment",
    "Draft empanelment application for brief delegation across courts.",
    "/applications/empanelment",
  ),
  robots: publicationFlags.applicationsLegallyApproved
    ? { index: true, follow: true }
    : { index: false, follow: false },
};

export default function EmpanelmentApplicationPage() {
  return (
    <>
      <PageHero
        eyebrow="Applications"
        title="Advocate Empanelment"
        description="Applications from advocates interested in empanelment for delegation or assignment of briefs across courts. Subject to professional and legal approval before public use."
      />
      <Section>
        <DraftNotice>
          Draft workflow only. Applications email target:{" "}
          {siteConfig.applicationsEmail}. Exact field requirements and server
          mail delivery are pending confirmation.
        </DraftNotice>
        <ApplicationForms category="empanelment" />
      </Section>
    </>
  );
}
