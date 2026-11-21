import Link from "next/link";
import { notFound } from "next/navigation";
import { Placeholder } from "@/components/ui/Placeholder";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { createPageMetadata } from "@/lib/metadata";
import { articles, getArticle } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return createPageMetadata("Article");
  return createPageMetadata(
    article.title,
    article.excerpt,
    `/resources/articles/${slug}`,
  );
}

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <>
      <PageHero
        eyebrow={article.category}
        title={article.title}
        description={`${article.date} — Generic educational placeholder.`}
      />
      <Section>
        <Placeholder className="mb-8" />
        <article className="max-w-3xl space-y-4 type-body-md leading-relaxed text-on-surface-variant">
          {article.body.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </article>
        <p className="mt-10">
          <Link href="/resources/articles" className="type-label-md text-primary hover:text-secondary">
            ← Back to articles
          </Link>
        </p>
      </Section>
    </>
  );
}