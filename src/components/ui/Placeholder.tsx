type PlaceholderProps = {
  label?: string;
  className?: string;
};

export function Placeholder({
  label = "[PLACEHOLDER: Pending verification]",
  className = "",
}: PlaceholderProps) {
  return (
    <span
      className={`inline-flex items-center rounded border border-outline-variant/50 bg-surface-container-low px-2 py-0.5 type-label-sm text-secondary uppercase ${className}`}
    >
      {label}
    </span>
  );
}