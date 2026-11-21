import Image from "next/image";
import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  withImage?: boolean;
  compact?: boolean;
};

const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida/ALJJyrDC5gzsCKFsOe32x4zHiBKCcrGumpcWtp731A8Xu4Aw-wD-UUzhsi_CMZXw3PuxDia7KdqQj8fz55zAklt2YrIS38j22pOpA6OlIQEPP-ubj2s98qG7Qlqe2q29C9w5Ghu0W5MABXzinBzaEJmu29Xbi5ZumrTHfCMFHwOH4NXXau6OFZaUf3wGP9i66svxwU1v3TxWQ0ooJz38_i7GCOb9RRspndY_ZxCXC_U_FoBwu5ffaptzKwOAGa8";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  withImage = false,
  compact = false,
}: PageHeroProps) {
  if (withImage) {
    return (
      <section className="relative flex min-h-[360px] w-full items-center overflow-hidden border-b border-outline-variant/30 bg-primary sm:min-h-[420px] lg:min-h-[520px]">
        <div className="absolute inset-0 z-0">
          <Image
            src={HERO_IMAGE}
            alt=""
            fill
            priority
            className="scale-[1.02] object-cover object-center brightness-[0.45] contrast-[1.1]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75 mix-blend-multiply" />
          <div className="absolute inset-0 bg-primary/40" />
        </div>
        <div className="container-site relative z-10 py-10 sm:py-14 lg:py-16">
          <HeroContent
            eyebrow={eyebrow}
            title={title}
            description={description}
            light
          >
            {children}
          </HeroContent>
        </div>
      </section>
    );
  }

  return (
    <section
      className={`w-full border-b border-outline-variant/30 bg-surface-container-low ${compact ? "py-8 sm:py-12" : "py-10 sm:py-16"}`}
    >
      <div className="container-site">
        <HeroContent
          eyebrow={eyebrow}
          title={title}
          description={description}
        >
          {children}
        </HeroContent>
      </div>
    </section>
  );
}

function HeroContent({
  eyebrow,
  title,
  description,
  children,
  light = false,
}: PageHeroProps & { light?: boolean }) {
  const titleClass = light
    ? "type-headline-xl text-surface"
    : "type-headline-lg text-primary";
  const descClass = light
    ? "type-body-lg font-light text-inverse-on-surface/90"
    : "type-body-md text-on-surface-variant";

  return (
    <div className="max-w-3xl">
      {eyebrow && (
        <span
          className={`mb-2 block type-label-sm uppercase tracking-widest sm:mb-3 ${light ? "text-secondary-fixed" : "text-secondary"}`}
        >
          {eyebrow}
        </span>
      )}
      <h1 className={`mb-3 leading-tight tracking-tight break-words sm:mb-4 ${titleClass}`}>
        {title}
      </h1>
      {description && (
        <p className={`mb-5 max-w-2xl leading-relaxed sm:mb-6 ${descClass}`}>
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
