import type { ReactNode } from "react";
import { DraftNotice } from "@/components/content/DraftNotice";
import { SocialLinks } from "@/components/content/SocialLinks";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { createPageMetadata } from "@/lib/metadata";
import { publicationFlags, siteConfig } from "@/lib/site";

export const metadata = createPageMetadata(
  "Contact Information",
  "Chamber registry and administrative enquiry channel.",
  "/contact",
);

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Official Chambers Registry"
        description="Administrative communications and procedural enquiries. No confidential litigation strategy should be transmitted via web forms."
      />
      <Section>
        {!publicationFlags.contactsConfirmed && (
          <DraftNotice>
            Contact numbers and addresses are integrated for project review but
            must not be treated as publicly launched until the client confirms
            accuracy. Do not publish until confirmation.
          </DraftNotice>
        )}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="space-y-5 sm:space-y-6 lg:col-span-5">
            <ContactRow
              icon="person"
              title="Principal Advocate"
              text={`${siteConfig.advocateName}, ${siteConfig.principalTitle}`}
            />
            <ContactRow
              icon="location_on"
              title="Chamber address"
              text={siteConfig.chamberAddress}
            />
            <ContactRow
              icon="home"
              title="Registered office"
              text={siteConfig.registeredOfficeAddress}
            />
            <ContactRow icon="mail" title="Professional email" text={siteConfig.email} />
            <ContactRow
              icon="alternate_email"
              title="Applications email"
              text={siteConfig.applicationsEmail}
            />
            <ContactLinkRow
              icon="call"
              title="Mobile"
              href={siteConfig.mobileTel}
              label={siteConfig.mobile}
            />
            <ContactLinkRow
              icon="call"
              title="Additional advocate contact"
              href={siteConfig.additionalMobileTel}
              label={siteConfig.additionalMobile}
            />
            <ContactLinkRow
              icon="phone_in_talk"
              title="Office telephone"
              href={siteConfig.officePhoneTel}
              label={siteConfig.officePhone}
              note={siteConfig.officePhoneNote}
            />
            <ContactRow
              icon="schedule"
              title="Office hours"
              text={siteConfig.officeHours}
            />
            <SocialLinks />
            <MapNote />
          </div>
          <div className="min-w-0 rounded border border-outline-variant/40 bg-surface-container-lowest p-5 sm:p-8 lg:col-span-7 lg:p-10">
            <h2 className="mb-2 type-headline-sm text-primary">
              Procedural inquiry transmission
            </h2>
            <p className="mb-6 type-body-sm text-on-surface-variant">
              Complete the registry dispatch for administrative communication.
              Application-category submissions use the separate Applications
              workflows when approved.
            </p>
            <EnquiryForm />
          </div>
        </div>
      </Section>
    </>
  );
}

function ContactRow({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-start gap-3 sm:gap-4">
      <MaterialIcon name={icon} className="mt-1 shrink-0 text-secondary" />
      <div className="min-w-0">
        <h3 className="type-headline-sm text-primary">{title}</h3>
        <p className="mt-1 break-words type-body-sm text-on-surface-variant">{text}</p>
      </div>
    </div>
  );
}

function ContactLinkRow({
  icon,
  title,
  href,
  label,
  note,
}: {
  icon: string;
  title: string;
  href: string;
  label: string;
  note?: string;
}) {
  return (
    <div className="flex items-start gap-3 sm:gap-4">
      <MaterialIcon name={icon} className="mt-1 shrink-0 text-secondary" />
      <div className="min-w-0">
        <h3 className="type-headline-sm text-primary">{title}</h3>
        <a
          href={href}
          className="mt-1 block break-words type-body-sm text-on-surface-variant underline-offset-2 hover:underline"
        >
          {label}
        </a>
        {note && (
          <p className="mt-1 type-body-sm text-on-surface-variant">{note}</p>
        )}
      </div>
    </div>
  );
}

function MapNote() {
  return (
    <MapNoteBox>
      <strong className="mb-1 block type-label-sm uppercase text-primary">
        Office / maps
      </strong>
      {`[PLACEHOLDER: Map embed or directions to ${siteConfig.chamberAddress} pending verification]`}
    </MapNoteBox>
  );
}

function MapNoteBox({ children }: { children: ReactNode }) {
  return (
    <div className="rounded border border-outline-variant/30 bg-surface-container-low p-4 type-body-sm text-on-surface-variant">
      {children}
    </div>
  );
}
