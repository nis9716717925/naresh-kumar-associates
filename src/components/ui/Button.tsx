import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "surface" | "outline" | "ghost" | "link";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-primary text-on-primary hover:bg-primary-container border border-primary",
  surface:
    "bg-surface text-primary hover:bg-surface-container-low border border-surface",
  outline:
    "bg-transparent text-surface hover:bg-surface/10 border border-outline-variant/60",
  ghost:
    "bg-transparent text-primary hover:text-secondary border border-transparent",
  link: "bg-transparent text-primary hover:text-secondary underline-offset-4 border-0 px-0 py-0",
};

type ButtonProps = {
  href?: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
};

export function Button({
  href,
  variant = "primary",
  className = "",
  children,
  type = "button",
  onClick,
}: ButtonProps) {
  // Avoid baking display into base so callers can use `hidden` / responsive display utilities.
  const hasDisplayOverride =
    /\b(hidden|block|flex|inline-flex|inline-block|grid)\b/.test(className);
  const base = `${hasDisplayOverride ? "" : "inline-flex "}items-center justify-center gap-1 rounded px-6 py-3 type-label-md tracking-wider uppercase transition-colors duration-150 shadow-none`;
  const classes = `${base} ${variantClasses[variant]} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}