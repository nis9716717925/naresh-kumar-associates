import Link from "next/link";
import { siteConfig } from "@/lib/site";

type NkaLogoProps = {
  href?: string;
  className?: string;
  showText?: boolean;
  /** Use on dark backgrounds (footer) */
  inverted?: boolean;
};

/**
 * Brand mark for Naresh Kumar & Associates.
 * Assets: /public/images/logo-nka.svg and logo-nka.jpg
 * Replace with the client’s final approved artwork when supplied.
 */
export function NkaLogo({
  href = "/",
  className = "",
  showText = true,
  inverted = false,
}: NkaLogoProps) {
  const mark = (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/images/logo-nka.svg"
      alt=""
      width={40}
      height={40}
      className="h-9 w-9 shrink-0 rounded object-cover sm:h-10 sm:w-10"
      decoding="async"
    />
  );

  const content = (
    <span
      className={`inline-flex max-w-full min-w-0 items-center gap-2 sm:gap-2.5 ${className}`}
    >
      {mark}
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
