import { DraftNotice } from "@/components/content/DraftNotice";
import { ProseSection } from "@/components/content/ProseSection";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { createPageMetadata } from "@/lib/metadata";
import { forumCards, siteConfig } from "@/lib/site";

export const metadata = createPageMetadata(
  "Courts & Forums",
  "Client-supplied courts, forums, and practice focus listings.",
  "/practice-information",
);

export default function PracticeInformationPage() {
  return (
    <>
      <PageHero
        eyebrow="Practice Information"
        title="Courts, Forums & Practice Focus"
        description="Client-supplied listings for informational reference. Not independently verified credentials or exclusive-jurisdiction claims."
      />
      <Section>
        <DraftNotice>
          Delhi High Court is excluded from this practice list per client
          instruction. The client indicated additional courts/forums should be
          included, but names have not been supplied — do not invent them. Bar
          Association membership of the Delhi High Court Bar Association (on the
          profile page) is separate from listing Delhi High Court as a practice
          forum.
        </DraftNotice>
        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {forumCards.map((card) => (
            <article
              key={card.title}
              className="flex gap-4 rounded border border-outline-variant/40 bg-surface-container-lowest p-5 sm:p-6"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-surface-container-low text-primary">
                <MaterialIcon name={card.icon} className="text-2xl" />
              </div>
              <div>
                <h2 className="type-headline-sm text-primary">{card.title}</h2>
                <p className="mt-2 type-body-sm leading-relaxed text-on-surface-variant">
                  {card.description}
                </p>
                <p className="mt-3 type-label-sm uppercase tracking-wider text-secondary">
                  {card.label}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          <ProseSection title="Chamber communications">
            <p>
              Registry enquiries may be directed using the contact details on the{" "}
              <a href="/contact" className="underline-offset-2 hover:underline">
                Contact
              </a>{" "}
              page. Mobile:{" "}
              <a href={siteConfig.mobileTel} className="underline-offset-2 hover:underline">
                {siteConfig.mobile}
              </a>
              . Office:{" "}
              <a
                href={siteConfig.officePhoneTel}
                className="underline-offset-2 hover:underline"
              >
                {siteConfig.officePhone}
              </a>
              .
            </p>
            <p>Chamber: {siteConfig.chamberAddress}</p>
            <p>Registered office: {siteConfig.registeredOfficeAddress}</p>
            <p>Office hours: {siteConfig.officeHours}.</p>
          </ProseSection>
          <ProseSection title="Informational scope">
            <p>
              This portal does not provide case strategy, fee quotations, or
              outcome assessments through web forms. Enquiries are screened as
              administrative where permitted.
            </p>
            <p>{siteConfig.structureDisclaimer}</p>
          </ProseSection>
        </div>
      </Section>
    </>
  );
}
