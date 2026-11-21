import Link from "next/link";
import { Placeholder } from "@/components/ui/Placeholder";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { createPageMetadata } from "@/lib/metadata";
import { articles } from "@/lib/site";

export const metadata = createPageMetadata(
  "Legal Articles",
  "Educational legal articles — generic placeholders.",
  "/resources/articles",
);

export default function ArticlesIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Legal Articles"
        description="Generic educational digests labelled as sample placeholders. Not legal advice."
      />
      <Section className="bg-surface-container-low py-20">
        <Placeholder className="mb-8" />
        <div className="grid gap-6 md:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="rounded border border-outline-variant/40 bg-surface-container-lowest p-6"
            >
              <div className="mb-3 flex justify-between text-xs text-on-surface-variant">
                <span className="type-label-sm text-secondary">{article.category}</span>
                <span>{article.date}</span>
              </div>
              <h2 className="mb-3 type-headline-sm text-primary">{article.title}</h2>
              <p className="mb-4 type-body-sm text-on-surface-variant">{article.excerpt}</p>
              <Link
                href={`/resources/articles/${article.slug}`}
                className="type-label-sm text-primary underline underline-offset-4 hover:text-secondary"
              >
                View information →
              </Link>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}