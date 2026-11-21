import Link from "next/link";
import { notFound } from "next/navigation";
import { ProseSection } from "@/components/content/ProseSection";
import { Button } from "@/components/ui/Button";
import { Placeholder } from "@/components/ui/Placeholder";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { createPageMetadata } from "@/lib/metadata";
import { getPracticeArea, practiceAreas } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return practiceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const area = getPracticeArea(slug);
  if (!area) return createPageMetadata("Practice Area");
  return createPageMetadata(
    area.title,
    `Informational overview of ${area.title}. Educational content only.`,
    `/practice-areas/${slug}`,
  );
}

export default async function PracticeAreaDetailPage({ params }: Props) {
  const { slug } = await params;
  const area = getPracticeArea(slug);
  if (!area) notFound();

  return (
    <>
      <PageHero
        eyebrow={area.category}
        title={area.title}
        description={area.summary}
      />
      <Section>
        <VerificationBanner verified={area.verified} />
        <span className="mb-8 inline-block" />
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <ProseSection title="Statutory scope (informational)">
              <p>
                This page summarises generally applicable statutes and forums
                associated with {area.title}. It does not describe live matters
                or outcomes.
              </p>
              <p>
                <strong className="text-primary">Reference statutes: </strong>
                {area.statutes}
              </p>
            </ProseSection>
            <ProseSection title="General procedural context">
              <p>
                [PLACEHOLDER: Neutral educational paragraphs regarding typical
                forums, remedies, and procedural stages — pending advocate
                verification.]
              </p>
              <p>
                Users must not treat this material as advice for a specific
                dispute.
              </p>
            </ProseSection>
          </div>
          <aside className="rounded border border-outline-variant/40 bg-surface-container-low p-6">
            <h2 className="mb-4 type-headline-sm text-primary">Related information</h2>
            <ul className="space-y-3 type-body-sm">
              <li>
                <Link href="/practice-information" className="text-primary hover:text-secondary">
                  Legal practice information
                </Link>
              </li>
              <li>
                <Link href="/resources/guides" className="text-primary hover:text-secondary">
                  Legal guides (generic)
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary hover:text-secondary">
                  Send enquiry
                </Link>
              </li>
            </ul>
            <VerifyNote />
          </aside>
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/practice-areas" variant="ghost">
            All practice areas
          </Button>
          <Button href="/contact" variant="primary">
            Inquire
          </Button>
        </div>
      </Section>
    </>
  );
}

function VerificationBanner({ verified }: { verified: boolean }) {
  if (verified) return null;
  return <Placeholder label="[PLACEHOLDER: Pending verification]" />;
}

function VerifyNote() {
  return (
    <p className="mt-6 type-body-sm text-on-surface-variant">
      Listing of this area on the advocate&apos;s verified practice profile:{" "}
      [PLACEHOLDER: Pending verification]
    </p>
  );
}