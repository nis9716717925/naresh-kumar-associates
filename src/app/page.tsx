import Link from "next/link";
import { BciDisclaimerBox } from "@/components/content/BciDisclaimerBox";
import { WhatsAppLink } from "@/components/content/WhatsAppLink";
import { Button } from "@/components/ui/Button";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { PageHero } from "@/components/ui/PageHero";
import { Placeholder } from "@/components/ui/Placeholder";
import { Section } from "@/components/ui/Section";
import {
  articles,
  clientSuppliedPracticeAreas,
  forumCards,
  siteConfig,
} from "@/lib/site";

export default function HomePage() {
  const featuredAreas = clientSuppliedPracticeAreas.slice(0, 6);

  return (
    <>
      <PageHero
        withImage
        eyebrow="Regulated informational portal under Rule 36"
        title={`${siteConfig.practiceName}`}
        description={`${siteConfig.professionalDescriptor} · ${siteConfig.practiceStructure}. ${siteConfig.yearsOfPracticeLabel}. Informational material regarding litigation forums and professional standing. This portal does not solicit work.`}
      >
        <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
          <Button href="/practice-areas" variant="surface" className="w-full sm:w-auto">
            Review Practice Focus
          </Button>
          <Button href="/profile" variant="outline" className="w-full sm:w-auto">
            Chamber Overview
          </Button>
        </div>
        <div className="flex flex-col gap-3 border-t border-outline/30 pt-5 type-body-sm text-surface-container-high/80 sm:pt-6">
          <span className="flex min-w-0 items-start gap-1.5">
            <MaterialIcon name="verified" className="mt-0.5 shrink-0 text-base text-secondary-fixed" />
            <span className="min-w-0 break-words leading-snug">
              {siteConfig.principalTitle}:{" "}
              <strong className="font-medium text-surface">
                {siteConfig.advocateName}
              </strong>
            </span>
          </span>
          <span className="flex min-w-0 items-start gap-1.5">
            <MaterialIcon name="badge" className="mt-0.5 shrink-0 text-base text-secondary-fixed" />
            <span className="min-w-0 break-words leading-snug">
              Enrolment:{" "}
              <strong className="font-medium text-surface">
                {siteConfig.barEnrolment}
              </strong>{" "}
              ({siteConfig.barCouncil})
            </span>
          </span>
          <span className="flex min-w-0 items-start gap-1.5">
            <MaterialIcon name="schedule" className="mt-0.5 shrink-0 text-base text-secondary-fixed" />
            <span className="min-w-0 break-words leading-snug">
              <strong className="font-medium text-surface">
                {siteConfig.yearsOfPracticeLabel}
              </strong>
            </span>
          </span>
        </div>
      </PageHero>

      <Section
        id="forums"
        eyebrow="Courts & Forums"
        title="Client-Supplied Forums & Practice Focus"
        description="The following listings were supplied by the client. They are informational references only — not claims of exclusive practice, specialisation, or guaranteed outcomes. Delhi High Court is excluded from this list per client instruction. Additional forums may be added when named."
      >
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {forumCards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col justify-between rounded border border-outline-variant/40 bg-surface-container-lowest p-6 transition-colors hover:border-secondary/40"
            >
              <div>
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded bg-surface-container-low text-primary">
                  <MaterialIcon name={card.icon} className="text-2xl" />
                </div>
                <h3 className="mb-2 type-headline-sm text-primary">{card.title}</h3>
                <p className="type-body-sm leading-relaxed text-on-surface-variant">
                  {card.description}
                </p>
              </div>
              <div className="mt-4 border-t border-outline-variant/20 pt-4 type-label-sm uppercase text-secondary">
                {card.label}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-between gap-4 rounded border border-outline-variant/40 bg-surface-container-low p-6 sm:flex-row">
          <div className="flex items-center gap-4">
            <MaterialIcon name="shield" className="text-2xl text-secondary" />
            <div>
              <h4 className="type-headline-sm text-primary">Professional standing</h4>
              <p className="type-body-sm text-on-surface-variant">
                {siteConfig.structureDisclaimer}
              </p>
            </div>
          </div>
          <Placeholder />
        </div>
      </Section>

      <Section
        id="practice-areas"
        className="border-y border-outline-variant/30 bg-surface-container-low py-12 sm:py-16 lg:py-20"
        eyebrow="Subject Matter Compendium"
        title="Fields of Legal Practice"
        description="Client-supplied practice and forum focus areas. Educational guidance only."
        containerClassName=""
      >
        <div className="mb-8 flex flex-col justify-between md:flex-row md:items-end">
          <p className="max-w-md type-body-sm text-on-surface-variant md:mt-0">
            Select an area to view informational statutory scope. Listings remain
            pending verification for public publication.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredAreas.map((area, index) => (
            <article
              key={area.slug}
              className="flex flex-col justify-between rounded border border-outline-variant/40 bg-surface-container-lowest p-5 sm:p-8"
            >
              <div>
                <span className="mb-3 block type-label-sm tracking-wider text-secondary">
                  {String(index + 1).padStart(2, "0")} / {area.category}
                </span>
                <h3 className="mb-3 type-headline-sm text-primary">{area.title}</h3>
                <p className="mb-4 type-body-sm leading-relaxed text-on-surface-variant">
                  {area.summary}
                </p>
                {!area.verified && (
                  <div className="mb-4">
                    <Placeholder />
                  </div>
                )}
                <StatutesBlock statutes={area.statutes} />
              </div>
              <Link
                href={`/practice-areas/${area.slug}`}
                className="group mt-6 inline-flex items-center type-label-md text-primary transition-colors hover:text-secondary"
              >
                View information
                <MaterialIcon
                  name="arrow_forward"
                  className="ml-1 text-sm transition-transform group-hover:translate-x-1"
                />
              </Link>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/practice-areas"
            className="inline-flex items-center type-label-md text-primary transition-colors hover:text-secondary"
          >
            View all practice areas
            <MaterialIcon name="arrow_forward" className="ml-1 text-sm" />
          </Link>
        </div>
      </Section>

      <Section
        eyebrow="Standing & Pedigree"
        title="Academic Background & Professional Standing"
        containerClassName="text-center"
      >
        <div className="mx-auto mb-8 max-w-xl text-center sm:mb-12 lg:mb-16">
          <p className="type-body-md text-on-surface-variant">
            Client-supplied academic and professional particulars. Subject to
            Rule 36 review before public emphasis.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 text-left sm:gap-8 md:grid-cols-3">
          {[
            {
              icon: "school",
              title: "Academic Qualifications",
              items: [...siteConfig.qualifications],
            },
            {
              icon: "verified_user",
              title: "Bar Enrolments",
              items: [
                siteConfig.barEnrolment,
                siteConfig.barCouncil,
                ...siteConfig.barAssociations,
              ],
            },
            {
              icon: "schedule",
              title: "Professional Experience",
              items: [
                siteConfig.yearsOfPracticeLabel,
                siteConfig.practiceStructure,
                siteConfig.jurisdiction,
              ],
            },
          ].map((pillar) => (
            <div
              key={pillar.title}
              className="rounded border border-outline-variant/40 bg-surface-container-lowest p-5 sm:p-8"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded bg-surface-container-low text-primary sm:mb-6">
                <MaterialIcon name={pillar.icon} className="text-2xl" />
              </div>
              <h3 className="mb-4 type-headline-sm text-primary">{pillar.title}</h3>
              <ul className="space-y-4 type-body-sm text-on-surface-variant">
                {pillar.items.map((item) => (
                  <li key={item} className="border-b border-outline-variant/20 pb-3 last:border-0">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4">
          <Button href="/qualifications" variant="ghost" className="w-full sm:w-auto">
            View qualifications
          </Button>
          <Button href="/profile" variant="ghost" className="w-full sm:w-auto">
            View profile
          </Button>
        </div>
      </Section>

      <Section
        className="border-t border-outline-variant/30 bg-surface-container-low py-12 sm:py-16 lg:py-20"
        eyebrow="Scholarly Papers"
        title="Legal Commentary & Case Notes"
        description="Generic educational placeholders — not legal advice."
      >
        <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="flex flex-col justify-between rounded border border-outline-variant/40 bg-surface-container-lowest p-6"
            >
              <div>
                <div className="mb-3 flex items-center justify-between text-xs text-on-surface-variant">
                  <span className="type-label-sm font-semibold text-secondary">
                    {article.category}
                  </span>
                  <span>{article.date}</span>
                </div>
                <h3 className="mb-3 type-headline-sm leading-snug text-primary">
                  {article.title}
                </h3>
                <p className="mb-6 type-body-sm leading-relaxed text-on-surface-variant">
                  {article.excerpt}
                </p>
              </div>
              <Link
                href={`/resources/articles/${article.slug}`}
                className="type-label-sm text-primary underline underline-offset-4 hover:text-secondary"
              >
                View information →
              </Link>
            </article>
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/resources/articles"
            className="inline-flex items-center type-label-md text-primary hover:text-secondary"
          >
            View complete digest archive
            <MaterialIcon name="arrow_forward" className="ml-1 text-sm" />
          </Link>
        </div>
      </Section>

      <Section
        id="contact"
        eyebrow="Chamber Secretariat"
        title="Official Chambers Registry"
        description="Administrative communications may be directed through contact details below. Enquiries are administrative only. Contact details are not for public launch until client confirmation."
      >
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="space-y-5 sm:space-y-6 lg:col-span-5">
            <RegistryRow
              icon="location_on"
              title="Chamber address"
              text={siteConfig.chamberAddress}
            />
            <RegistryRow
              icon="home"
              title="Registered office"
              text={siteConfig.registeredOfficeAddress}
            />
            <RegistryRow icon="mail" title="Email" text={siteConfig.email} />
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
            <WhatsAppLink variant="row" />
            <div className="rounded border border-outline-variant/30 bg-surface-container-low p-4 text-xs text-on-surface-variant">
              <strong className="mb-1 block type-label-sm uppercase text-primary">
                Court sittings note
              </strong>
              During judicial sessions, in-person chamber visits are subject to court schedules and prior docketing where applicable. Office hours:{" "}
              {siteConfig.officeHours}.
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="/contact" variant="primary" className="w-full sm:w-auto">
                Inquire
              </Button>
              <WhatsAppLink className="w-full sm:w-auto" />
            </div>
          </div>
          <div className="min-w-0 lg:col-span-7">
            <BciDisclaimerBox compact />
          </div>
        </div>
      </Section>

      <Section className="bg-surface-container py-8 sm:py-12" containerClassName="">
        <BciDisclaimerBox />
      </Section>
    </>
  );
}

function StatutesBlock({ statutes }: { statutes: string }) {
  return (
    <div className="mb-6">
      <span className="mb-1 block type-label-sm text-on-surface/70">
        Applicable Statutes (informational):
      </span>
      <span className="type-body-sm font-medium text-primary">{statutes}</span>
    </div>
  );
}

function RegistryRow({
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
        <h4 className="type-headline-sm text-primary">{title}</h4>
        <p className="mt-1 break-words type-body-sm leading-relaxed text-on-surface-variant">
          {text}
        </p>
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
        <h4 className="type-headline-sm text-primary">{title}</h4>
        <a
          href={href}
          className="mt-1 block break-words type-body-sm leading-relaxed text-on-surface-variant underline-offset-2 hover:underline"
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
