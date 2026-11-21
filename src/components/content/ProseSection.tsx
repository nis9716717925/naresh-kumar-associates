import type { ReactNode } from "react";

export function ProseSection({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded border border-outline-variant/40 bg-surface-container-lowest p-8">
      {title && (
        <h2 className="mb-4 type-headline-sm text-primary">{title}</h2>
      )}
      <div className="space-y-4 type-body-sm leading-relaxed text-on-surface-variant">
        {children}
      </div>
    </div>
  );
}