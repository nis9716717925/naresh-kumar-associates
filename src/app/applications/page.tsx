import Link from "next/link";
import { DraftNotice } from "@/components/content/DraftNotice";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { createPageMetadata } from "@/lib/metadata";
import {
  applicationCategories,
  publicationFlags,
  siteConfig,
} from "@/lib/site";

export const metadata = {
  ...createPageMetadata(
    "Applications",
    "Draft application hub for junior advocate, internship, and empanelment workflows.",
    "/applications",
  ),
  robots: publicationFlags.applicationsLegallyApproved
    ? { index: true, follow: true }
    : { index: false, follow: false },
};

export default function ApplicationsHubPage() {
  return (
    <>
      <PageHero
        eyebrow="Applications"
        title="Application Portal"
        description="Three separate application workflows prepared for professional review. Not for public use until legal and professional approval."
      />
      <Section>
        <DraftNotice>
          Application portals are draft implementations. Public navigation and
          indexing remain disabled until{" "}
          <code className="text-primary">applicationsLegallyApproved</code> is
          enabled after client and legal review. Submissions route conceptually to{" "}
          {siteConfig.applicationsEmail} once that address is configured.
        </DraftNotice>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {applicationCategories.map((cat) => (
            <Link
              key={cat.slug}
              href={cat.href}
              className="group flex flex-col rounded border border-outline-variant/40 bg-surface-container-lowest p-6 transition-colors hover:border-secondary/50"
            >
              <MaterialIcon
                name={
                  cat.slug === "internship"
                    ? "school"
                    : cat.slug === "empanelment"
                      ? "handshake"
                      : "gavel"
                }
                className="mb-4 text-3xl text-secondary"
              />
              <h2 className="type-headline-sm text-primary group-hover:text-secondary">
                {cat.title}
              </h2>
              <p className="mt-3 flex-1 type-body-sm leading-relaxed text-on-surface-variant">
                {cat.purpose}
              </p>
              <span className="mt-5 inline-flex items-center type-label-md text-primary">
                Open workflow
                <MaterialIcon name="arrow_forward" className="ml-1 text-sm" />
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-10 rounded border border-outline-variant/40 bg-surface-container-low p-5 sm:p-6">
          <h3 className="type-headline-sm text-primary">Two form types</h3>
          <p className="mt-2 type-body-sm text-on-surface-variant">
            Each category workflow presents Form 1 (Own Requirement Form) and
            Form 2 (Candidate Form) as separate structures. Exact mandatory
            fields and submission logic remain pending client confirmation.
          </p>
        </div>
      </Section>
    </>
  );
}
