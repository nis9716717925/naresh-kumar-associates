import type { ReactNode } from "react";

type DraftNoticeProps = {
  title?: string;
  children: ReactNode;
};

export function DraftNotice({
  title = "Draft — not for public publication",
  children,
}: DraftNoticeProps) {
  return (
    <aside
      className="mb-8 rounded border border-secondary/40 bg-secondary-fixed/40 px-4 py-3 sm:px-5 sm:py-4"
      role="status"
    >
      <p className="type-label-sm uppercase tracking-widest text-secondary">
        {title}
      </p>
      <p className="mt-1 type-body-sm leading-relaxed text-on-surface-variant">
        {children}
      </p>
    </aside>
  );
}
