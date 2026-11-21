import Link from "next/link";
import { siteConfig } from "@/lib/site";

type NkaLogoProps = {
  href?: string;
  className?: string;
  showText?: boolean;
};

/**
 * Replaceable NKA mark. Drop final artwork at /public/images/logo-nka.svg
 * (or .png) and set useImageAsset to true when ready.
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
      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded border border-secondary/50 bg-primary text-[0.7rem] font-semibold tracking-[0.12em] text-surface sm:h-10 sm:w-10 sm:text-xs"
      aria-hidden
    >
      {siteConfig.logoInitials}
    </span>
  );

  const content = (
    <span className={`inline-flex min-w-0 items-center gap-2.5 ${className}`}>
      {mark}
      {showText && (
        <span className="min-w-0">
          <span className="block truncate font-[family-name:var(--font-headline)] text-[1.05rem] leading-[1.3rem] tracking-tight text-primary sm:text-[1.35rem] sm:leading-7">
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
    <Link href={href} className="transition-opacity hover:opacity-90">
      {content}
    </Link>
  );
}
