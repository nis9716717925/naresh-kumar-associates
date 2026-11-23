/** Inline NKA monogram — does not depend on /public static file serving. */
export function NkaMark({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      className={`h-9 w-9 shrink-0 rounded sm:h-10 sm:w-10 ${className}`}
      role="img"
      aria-hidden
    >
      <rect width="128" height="128" rx="4" fill="#04122e" />
      <rect
        x="5"
        y="5"
        width="118"
        height="118"
        rx="2"
        fill="none"
        stroke="#8b7355"
        strokeWidth="2.5"
      />
      <text
        x="64"
        y="74"
        textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="36"
        fontWeight="700"
        letterSpacing="0.06em"
        fill="#ffffff"
      >
        NKA
      </text>
    </svg>
  );
}
