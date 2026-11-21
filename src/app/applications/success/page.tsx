import { Suspense } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { createPageMetadata } from "@/lib/metadata";
import { publicationFlags, siteConfig } from "@/lib/site";
import { ApplicationsSuccessDetails } from "./SuccessDetails";

export const metadata = {
  ...createPageMetadata(
    "Application Received",
    "Confirmation that an application form was transmitted in draft mode.",
    "/applications/success",
  ),
  robots: { index: false, follow: false },
};

export default function ApplicationsSuccessPage() {
  return (
    <>
      <PageHero
        eyebrow="Applications"
        title="Transmission recorded (draft)"
        description="Your form was accepted in the client-side draft workflow."
      />
      <Section>
        <div className="mx-auto max-w-2xl rounded border border-outline-variant/40 bg-surface-container-lowest p-6 sm:p-8">
          <Suspense
            fallback={
              <p className="type-body-md text-on-surface-variant">
                Confirming transmission details…
              </p>
            }
          >
            <ApplicationsSuccessDetails />
          </Suspense>
          <p className="mt-4 type-body-md text-on-surface-variant">
            Server-side delivery to{" "}
            <strong className="text-primary">{siteConfig.applicationsEmail}</strong>{" "}
            is not yet wired. This success state confirms form validation and
            navigation only. Public use remains{" "}
            {publicationFlags.applicationsLegallyApproved
              ? "approved"
              : "pending legal approval"}
            .
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/applications" variant="primary">
              Back to applications
            </Button>
            <Link
              href="/"
              className="inline-flex items-center type-label-md text-primary hover:text-secondary"
            >
              Return home
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
