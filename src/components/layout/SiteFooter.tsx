import Link from "next/link";
import { footerNav, isNavVisible, mainNav, siteConfig } from "@/lib/site";
import { NkaLogo } from "@/components/brand/NkaLogo";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { SocialLinks } from "@/components/content/SocialLinks";
import { WhatsAppLink } from "@/components/content/WhatsAppLink";

export function SiteFooter() {
  const year = siteConfig.copyrightYear;
  const nav = mainNav.filter(isNavVisible);

  return (
    <footer className="mt-auto w-full border-t border-outline-variant/40 bg-primary text-on-primary">
      <div className="container-site py-10 pb-12 sm:py-12 sm:pb-14 lg:py-14 lg:pb-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <NkaLogo inverted />
            <p className="mt-3 type-label-sm uppercase tracking-widest text-secondary-fixed/90">
              {siteConfig.practiceStructure} · {siteConfig.logoInitials}
            </p>
            <p className="mt-4 max-w-sm type-body-sm leading-relaxed text-inverse-on-surface/75">
              Informational portal for {siteConfig.advocateName},{" "}
              {siteConfig.principalTitle} ({siteConfig.practiceStructure}).{" "}
              {siteConfig.structureDisclaimer}
            </p>
            <div className="mt-5 rounded border border-outline-variant/25 bg-primary-container/50 p-3">
              <SocialLinks className="[&_p]:text-secondary-fixed [&_p.type-body-sm]:text-inverse-on-surface/70" />
            </div>
          </div>

          <div className="lg:col-span-3">
            <h2 className="mb-4 type-label-sm uppercase tracking-widest text-secondary-fixed">
              Navigate
            </h2>
            <nav className="flex flex-col gap-2.5" aria-label="Footer primary">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="type-body-sm text-inverse-on-surface/85 transition-colors hover:text-surface"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/qualifications"
                className="type-body-sm text-inverse-on-surface/85 transition-colors hover:text-surface"
              >
                Qualifications
              </Link>
              <Link
                href="/experience"
                className="type-body-sm text-inverse-on-surface/85 transition-colors hover:text-surface"
              >
                Experience
              </Link>
            </nav>
          </div>

          <div className="lg:col-span-3">
            <h2 className="mb-4 type-label-sm uppercase tracking-widest text-secondary-fixed">
              Legal &amp; Policies
            </h2>
            <nav className="flex flex-col gap-2.5" aria-label="Footer legal">
              {footerNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="type-body-sm text-inverse-on-surface/85 transition-colors hover:text-surface"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="lg:col-span-2">
            <h2 className="mb-4 type-label-sm uppercase tracking-widest text-secondary-fixed">
              Chambers
            </h2>
            <ul className="space-y-3 type-body-sm text-inverse-on-surface/85">
              <li className="flex items-start gap-2">
                <MaterialIcon
                  name="location_on"
                  className="mt-0.5 shrink-0 text-base text-secondary-fixed"
                />
                <span className="break-words">{siteConfig.chamberAddress}</span>
              </li>
              <li className="flex items-start gap-2">
                <MaterialIcon
                  name="call"
                  className="mt-0.5 shrink-0 text-base text-secondary-fixed"
                />
                <a
                  href={siteConfig.mobileTel}
                  className="break-words underline-offset-2 hover:underline"
                >
                  {siteConfig.mobile}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MaterialIcon
                  name="call"
                  className="mt-0.5 shrink-0 text-base text-secondary-fixed"
                />
                <a
                  href={siteConfig.officePhoneTel}
                  className="break-words underline-offset-2 hover:underline"
                >
                  {siteConfig.officePhone}
                </a>
              </li>
            </ul>
            <div className="mt-5 flex flex-col gap-2 sm:items-start">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded bg-surface px-4 py-2.5 type-label-sm uppercase tracking-wider text-primary transition-colors hover:bg-secondary-fixed sm:w-auto"
              >
                Inquire
              </Link>
              <WhatsAppLink className="w-full border-outline-variant/40 bg-transparent text-surface hover:border-secondary-fixed sm:w-auto [&_.material-symbols-outlined]:text-secondary-fixed" />
            </div>
          </div>
        </div>

        <div className="mt-10 rounded border border-outline-variant/30 bg-primary-container/70 p-4 sm:p-5">
          <p className="type-label-sm uppercase tracking-widest text-secondary-fixed">
            BCI Rule 36 notice
          </p>
          <p className="mt-2 type-body-sm leading-relaxed text-inverse-on-surface/85">
            This website is strictly informational and non-promotional. It does
            not constitute advertisement or solicitation of professional work
            under the Advocates Act, 1961 and Bar Council of India Rules. Contact
            details and associate listings remain subject to client confirmation
            and professional review before public launch. Intended domain:{" "}
            {siteConfig.domain}.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-outline-variant/25 pt-6 pb-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="break-words type-body-sm leading-relaxed text-inverse-on-surface/70">
            © {year} {siteConfig.practiceName}. {siteConfig.advocateName},{" "}
            {siteConfig.principalTitle}.
          </p>
          <p className="type-label-sm uppercase tracking-wider text-inverse-on-surface/55">
            Educational · Non-solicitation · India
          </p>
        </div>
      </div>
    </footer>
  );
}
