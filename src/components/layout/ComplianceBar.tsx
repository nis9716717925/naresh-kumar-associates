import { siteConfig } from "@/lib/site";

export function ComplianceBar() {
  return (
    <aside className="w-full border-b border-outline/20 bg-primary px-4 py-2 sm:px-6">
      <div className="container-site flex flex-col items-start gap-1.5 text-xs tracking-wider sm:items-center sm:justify-between md:flex-row md:gap-2">
        <div className="flex max-w-full items-start gap-2 type-label-sm text-secondary-fixed sm:items-center">
          <span className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-secondary-fixed sm:mt-0" />
          <span className="leading-snug">
            <span className="sm:hidden">BCI Rule 36 · Advocates Act, 1961</span>
            <span className="hidden sm:inline">
              BAR COUNCIL OF INDIA COMPLIANCE — Rule 36 &amp; Section 49(1)(c),
              Advocates Act, 1961
            </span>
          </span>
        </div>
        <div className="hidden max-w-full flex-col gap-1 type-label-sm text-inverse-on-surface/80 sm:flex sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-6">
          <span className="max-w-full truncate">
            Principal:{" "}
            <strong className="font-semibold text-surface">
              {siteConfig.advocateName}
            </strong>
          </span>
          <span className="hidden text-outline md:inline">|</span>
          <span className="hidden break-words md:inline">
            {siteConfig.practiceName}
          </span>
        </div>
      </div>
    </aside>
  );
}
