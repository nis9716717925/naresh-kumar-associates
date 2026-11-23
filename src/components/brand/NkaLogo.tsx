import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { NkaMark } from "@/components/brand/NkaMark";

type NkaLogoProps = {
  href?: string;
  className?: string;
  showText?: boolean;
  /** Use on dark backgrounds (footer) */
  inverted?: boolean;
};

/**
 * Brand mark for Naresh Kumar & Associates.
 * Uses an inline SVG monogram so the logo still renders if /public assets
 * are missing from a Hostinger build. Replace NkaMark when the client
 * supplies final approved artwork.
 */
export function NkaLogo({
  href = "/",
  className = "",
  showText = true,
  inverted = false,
}: NkaLogoProps) {
  const content = (
    <span
      className={`inline-flex max-w-full min-w-0 items-center gap-2 sm:gap-2.5 ${className}`}
    >
      <NkaMark />
      {showText && (
        <span className="min-w-0 overflow-hidden">
          <span
            className={`block truncate font-[family-name:var(--font-headline)] text-[0.95rem] leading-5 tracking-tight sm:text-[1.35rem] sm:leading-7 ${
              inverted ? "text-surface" : "text-primary"
            }`}
          >
            {siteConfig.practiceName}
          </span>
          <span
            className={`mt-0.5 block truncate type-label-sm uppercase tracking-widest ${
              inverted ? "text-secondary-fixed" : "text-secondary"
            }`}
          >
            {siteConfig.professionalDescriptor}
          </span>
        </span>
      )}
    </span>
  );

  if (!href) return content;
  return (
    <Link
      href={href}
      className="inline-flex max-w-full min-w-0 items-center transition-opacity hover:opacity-90"
      aria-label={siteConfig.practiceName}
    >
      {content}
    </Link>
  );
}
