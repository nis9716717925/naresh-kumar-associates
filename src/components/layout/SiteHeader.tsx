"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { isNavVisible, mainNav, previewNavExtras, publicationFlags } from "@/lib/site";
import { NkaLogo } from "@/components/brand/NkaLogo";
import { Button } from "@/components/ui/Button";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const drawerId = useId();

  const visibleNav = mainNav.filter(isNavVisible);
  const showDraftPreview = !publicationFlags.associatesConfirmed;

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
    <header className="relative sticky top-0 z-40 w-full border-b border-outline-variant/30 bg-surface/95 backdrop-blur-sm">
      <div className="container-site relative flex min-h-16 items-center py-2.5 pr-12 sm:min-h-20 sm:py-0 lg:gap-6 lg:pr-0">
        <div className="min-w-0 flex-1">
          <NkaLogo />
        </div>

        <nav
          className="hidden shrink-0 items-center gap-5 xl:gap-7 lg:flex"
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

        <div className="hidden shrink-0 lg:block">
          <Button href="/contact" variant="primary" className="px-4 py-2">
            Inquire
          </Button>
        </div>

        {/* Mobile menu control — absolutely centered to the header row */}
        <button
          type="button"
          className="absolute top-1/2 right-4 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded border border-outline-variant/40 text-primary sm:right-6 sm:h-10 sm:w-10 lg:hidden"
          aria-expanded={open}
          aria-controls={drawerId}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? (
            <span className="relative block h-[14px] w-[14px]" aria-hidden>
              <span className="absolute top-1/2 left-0 h-[1.5px] w-full -translate-y-1/2 rotate-45 bg-current" />
              <span className="absolute top-1/2 left-0 h-[1.5px] w-full -translate-y-1/2 -rotate-45 bg-current" />
            </span>
          ) : (
            <span
              className="flex h-[12px] w-[14px] flex-col justify-between"
              aria-hidden
            >
              <span className="block h-[1.5px] w-full bg-current" />
              <span className="block h-[1.5px] w-full bg-current" />
              <span className="block h-[1.5px] w-full bg-current" />
            </span>
          )}
        </button>
      </div>

      {open && (
        <div
          id={drawerId}
          className="absolute inset-x-0 top-full z-50 max-h-[min(70vh,32rem)] overflow-y-auto border-t border-outline-variant/30 bg-surface shadow-lg lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <nav className="container-site flex flex-col py-2" aria-label="Mobile">
            {visibleNav.map((item) => (
              <div key={item.href} className="min-w-0">
                <Link
                  href={item.href}
                  className="flex min-h-11 items-center rounded px-1 type-label-md text-on-surface-variant hover:bg-surface-container-low hover:px-3 hover:text-primary"
                >
                  {item.label}
                </Link>
                {item.children?.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="flex min-h-10 items-center rounded pl-4 type-body-sm text-on-surface-variant hover:bg-surface-container-low hover:px-4 hover:text-primary"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
            {showDraftPreview && (
              <div className="mt-1 border-t border-outline-variant/30 pt-1">
                <p className="px-1 py-2 type-label-sm uppercase tracking-wider text-secondary">
                  Internal draft preview
                </p>
                {previewNavExtras.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex min-h-10 items-center rounded px-1 type-body-sm text-on-surface-variant hover:bg-surface-container-low hover:px-3 hover:text-primary"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
            <div className="mt-1 border-t border-outline-variant/30 px-1 pt-3 pb-2">
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
