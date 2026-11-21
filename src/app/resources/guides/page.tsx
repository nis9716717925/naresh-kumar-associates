import Link from "next/link";
import { Placeholder } from "@/components/ui/Placeholder";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Legal Guides",
  "Generic procedural guides for educational reference.",
  "/resources/guides",
);

const guides = [
  {
    title: "Understanding writ jurisdiction (Article 226)",
    href: "/resources/legal-faq",
  },
  {
    title: "Overview of commercial court procedure",
    href: "/practice-areas/corporate-commercial-law",
  },
  {
    title: "Arbitration filing stages — informational",
    href: "/practice-areas/arbitration-dispute-resolution",
  },
];

export default function LegalGuidesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Legal Guides"
        description="High-level guides for orientation only. Verify procedures with current rules and counsel."
      />
      <Section>
        <Placeholder className="mb-8" />
        <ul className="space-y-4">
          {guides.map((guide) => (
            <li
              key={guide.title}
              className="rounded border border-outline-variant/40 bg-surface-container-lowest p-6"
            >
              <h2 className="mb-2 type-headline-sm text-primary">{guide.title}</h2>
              <Link href={guide.href} className="type-label-md text-primary hover:text-secondary">
                View information →
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}