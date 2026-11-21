"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { isNavVisible, mainNav, previewNavExtras, publicationFlags } from "@/lib/site";
import { NkaLogo } from "@/components/brand/NkaLogo";
import { Button } from "@/components/ui/Button";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const drawerId = useId();

  const visibleNav = mainNav.filter(isNavVisible);
  const showDraftPreview =
    !publicationFlags.associatesConfirmed ||
    !publicationFlags.applicationsLegallyApproved;

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-outline-variant/30 bg-surface/95 backdrop-blur-sm">
      <div className="container-site flex min-h-16 items-center justify-between gap-3 py-3 sm:min-h-20 sm:py-0">
        <div className="min-w-0 flex-1 pr-2">
          <NkaLogo />
        </div>

        <nav
          className="hidden items-center gap-5 xl:gap-7 lg:flex"
          aria-label="Main navigation"
        >
          {visibleNav.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/" &&
                pathname.startsWith(
                  item.href.split("/").slice(0, 2).join("/") || item.href,
                ));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap type-label-md transition-colors ${
                  active
                    ? "border-b border-secondary pb-1 text-primary"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Button
            href="/contact"
            variant="primary"
            className="hidden px-4 py-2 lg:inline-flex lg:items-center"
          >
            Inquire
          </Button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded border border-outline-variant/40 text-primary lg:hidden"
            aria-expanded={open}
            aria-controls={drawerId}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <MaterialIcon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>

      {open && (
        <div
          id={drawerId}
          className="absolute inset-x-0 top-full z-50 max-h-[min(70vh,32rem)] overflow-y-auto border-t border-outline-variant/30 bg-surface shadow-lg lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <nav className="container-site flex flex-col gap-1 py-4" aria-label="Mobile">
            {visibleNav.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded px-3 py-3 type-label-md text-on-surface-variant hover:bg-surface-container-low hover:text-primary"
                >
                  {item.label}
                </Link>
                {item.children?.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="block rounded px-6 py-2.5 type-body-sm text-on-surface-variant hover:bg-surface-container-low hover:text-primary"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
            {showDraftPreview && (
              <div className="mt-2 border-t border-outline-variant/30 pt-3">
                <p className="px-3 pb-1 type-label-sm uppercase tracking-wider text-secondary">
                  Internal draft preview
                </p>
                {previewNavExtras.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded px-3 py-2.5 type-body-sm text-on-surface-variant hover:bg-surface-container-low hover:text-primary"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
            <div className="mt-2 border-t border-outline-variant/30 px-3 pt-4">
              <Button href="/contact" variant="primary" className="w-full">
                Inquire
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
