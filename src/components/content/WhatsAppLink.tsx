import { siteConfig } from "@/lib/site";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

type WhatsAppLinkProps = {
  className?: string;
  /** Show as labelled contact row */
  variant?: "button" | "row";
};

export function WhatsAppLink({
  className = "",
  variant = "button",
}: WhatsAppLinkProps) {
  if (!siteConfig.whatsappEnabled || !siteConfig.whatsappUrl) return null;

  if (variant === "row") {
    return (
      <div className={`flex items-start gap-3 sm:gap-4 ${className}`}>
        <MaterialIcon name="chat" className="mt-1 shrink-0 text-secondary" />
        <div className="min-w-0">
          <h3 className="type-headline-sm text-primary">WhatsApp</h3>
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 block break-words type-body-sm text-on-surface-variant underline-offset-2 hover:underline"
          >
            Message {siteConfig.whatsappNumber}
          </a>
        </div>
      </div>
    );
  }

  return (
    <a
      href={siteConfig.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded border border-outline-variant/40 bg-surface-container-lowest px-4 py-2.5 type-label-sm uppercase tracking-wider text-primary transition-colors hover:border-secondary ${className}`}
    >
      <MaterialIcon name="chat" className="text-base text-secondary" />
      WhatsApp
    </a>
  );
}
