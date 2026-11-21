import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "py-12 sm:py-16 lg:py-20 bg-surface",
  containerClassName = "",
}: SectionProps) {
  return (
    <section id={id} className={`w-full ${className}`}>
      <div className={`container-site ${containerClassName}`}>
        {(eyebrow || title || description) && (
          <div className="mb-8 max-w-2xl sm:mb-12">
            {eyebrow && (
              <span className="mb-2 block type-label-sm uppercase tracking-widest text-secondary">
                {eyebrow}
              </span>
            )}
            {title && (
              <h2 className="mb-3 type-headline-lg tracking-tight break-words text-primary sm:mb-4">
                {title}
              </h2>
            )}
            {description && (
              <p className="type-body-md leading-relaxed text-on-surface-variant">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
