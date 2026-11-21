import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Page not found",
  "The requested page could not be located on this informational portal.",
);

export default function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="Error 404"
        title="Page not located"
        description="The requested address is not available on this BCI-compliant informational portal. You may return to the home page or view the sitemap."
      />
      <div className="container-site py-12">
        <div className="flex flex-wrap gap-4">
          <Button href="/" variant="primary">
            Return home
          </Button>
          <Button href="/sitemap" variant="ghost">
            View sitemap
          </Button>
        </div>
      </div>
    </>
  );
}