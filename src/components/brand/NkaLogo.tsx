import Link from "next/link";
import { siteConfig } from "@/lib/site";

type NkaLogoProps = {
  href?: string;
  className?: string;
  showText?: boolean;
};

/**
 * Replaceable NKA mark for Naresh Kumar & Associates.
 * When the client supplies the final logo, place it at
 * /public/images/logo-nka.svg (or .png) and set useImageAsset to true.
 * Then update favicon.ico from the same asset. Do not invent a final logo.
 */
const useImageAsset = false;

export function NkaLogo({
  href = "/",
  className = "",
  showText = true,
}: NkaLogoProps) {
  const mark = useImageAsset ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/images/logo-nka.svg"
      alt={`${siteConfig.practiceName} logo`}
      className="h-9 w-auto sm:h-10"
    />
  ) : (
    <span
      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded border border-secondary/50 bg-primary text-[0.7rem] font-semibold leading-none tracking-[0.12em] text-surface sm:h-10 sm:w-10 sm:text-xs"
      aria-hidden
    >
      {siteConfig.logoInitials}
    </span>
  );

  const content = (
    <span
      className={`inline-flex max-w-full min-w-0 items-center gap-2 sm:gap-2.5 ${className}`}
    >
      {mark}
      {showText && (
        <span className="min-w-0 overflow-hidden">
          <span className="block truncate font-[family-name:var(--font-headline)] text-[0.95rem] leading-5 tracking-tight text-primary sm:text-[1.35rem] sm:leading-7">
            {siteConfig.practiceName}
          </span>
          <span className="mt-0.5 block truncate type-label-sm uppercase tracking-widest text-secondary">
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
    >
      {content}
    </Link>
  );
}
