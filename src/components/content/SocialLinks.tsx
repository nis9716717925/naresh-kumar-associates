import { socialLinks, publicationFlags } from "@/lib/site";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

const items = [
  { key: "instagram" as const, label: "Instagram", icon: "photo_camera" },
  { key: "facebook" as const, label: "Facebook", icon: "public" },
  { key: "twitter" as const, label: "Twitter / X", icon: "tag" },
  { key: "linkedin" as const, label: "LinkedIn", icon: "work" },
];

export function SocialLinks({ className = "" }: { className?: string }) {
  const configured = items.filter((i) => Boolean(socialLinks[i.key]));

  if (!publicationFlags.socialUrlsConfirmed || configured.length === 0) {
    return (
      <div className={className}>
        <p className="type-label-sm uppercase tracking-widest text-secondary">
          Digital presence
        </p>
        <p className="mt-2 type-body-sm text-on-surface-variant">
          Instagram, Facebook, Twitter/X, and LinkedIn profile URLs are
          configurable via environment variables and will appear here once
          confirmed. No profile URLs have been invented.
        </p>
      </div>
    );
  }

  return (
    <div className={className}>
      <p className="type-label-sm uppercase tracking-widest text-secondary">
        Digital presence
      </p>
      <ul className="mt-3 flex flex-wrap gap-3">
        {configured.map((item) => (
          <li key={item.key}>
            <a
              href={socialLinks[item.key]}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded border border-outline-variant/40 px-3 py-2 type-body-sm text-primary hover:border-secondary"
            >
              <MaterialIcon name={item.icon} className="text-base text-secondary" />
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
