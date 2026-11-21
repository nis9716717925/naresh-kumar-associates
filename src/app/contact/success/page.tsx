import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Enquiry received",
  "Administrative enquiry transmission acknowledgment.",
  "/contact/success",
);

export default function ContactSuccessPage() {
  return (
    <>
      <PageHero
        compact
        eyebrow="Contact"
        title="Enquiry recorded"
        description="Your administrative transmission has been received. Acknowledgment may be issued by the chamber registry where applicable. No advocate-client relationship is created."
      />
      <Section className="py-12">
        <div className="flex flex-wrap gap-4">
          <Button href="/" variant="primary">
            Return home
          </Button>
          <Button href="/practice-areas" variant="ghost">
            View practice areas
          </Button>
        </div>
      </Section>
    </>
  );
}