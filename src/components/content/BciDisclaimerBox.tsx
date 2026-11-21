import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { siteConfig } from "@/lib/site";

export function BciDisclaimerBox({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`rounded border border-outline-variant/60 bg-surface-container-lowest shadow-none ${compact ? "p-4 sm:p-6" : "p-5 sm:p-8"}`}
    >
      <div className="mb-3 flex items-start gap-2 text-primary sm:items-center">
        <MaterialIcon name="gavel" className="mt-0.5 shrink-0 text-secondary sm:mt-0" />
        <h3 className="type-headline-sm uppercase tracking-wide leading-snug">
          Statutory Bar Council of India Declaration
        </h3>
      </div>
      <p className="mb-4 type-body-sm leading-relaxed text-on-surface-variant sm:text-justify">
        Under the rules of the Bar Council of India (Rule 36 of Chapter II, Part
        VI of the Bar Council of India Rules enacted under Section 49(1)(c) of
        the Advocates Act, 1961), advocates are prohibited from soliciting work
        or advertising. By accessing this portal ({siteConfig.url}), you
        acknowledge that no solicitation has occurred, information is for
        educational purposes, and no advocate-client relationship arises from
        use of this site.
      </p>
      <ul className="list-disc space-y-2 pl-5 type-body-sm leading-relaxed text-on-surface-variant marker:text-secondary sm:space-y-1.5 sm:text-justify">
        <li>
          No advertisement, personal communication, solicitation, invitation, or
          inducement is made to obtain work through this website.
        </li>
        <li>
          You seek information about fields of practice strictly for
          informational and educational purposes.
        </li>
        <li>
          No transmission or use of this site establishes an advocate-client
          relationship.
        </li>
        <li>
          Users should seek independent legal counsel for specific matters.
        </li>
      </ul>
    </div>
  );
}
