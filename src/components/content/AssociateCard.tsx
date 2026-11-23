"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { Associate } from "@/lib/site";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

type AssociateCardProps = {
  associate: Associate;
};

/** Names and photographs only — no biographies or credentials. */
export function AssociateCard({ associate }: AssociateCardProps) {
  const [photoReady, setPhotoReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch(associate.imageSrc, { method: "HEAD" })
      .then((res) => {
        if (!cancelled && res.ok) setPhotoReady(true);
      })
      .catch(() => {
        if (!cancelled) setPhotoReady(false);
      });
    return () => {
      cancelled = true;
    };
  }, [associate.imageSrc]);

  return (
    <article className="flex flex-col overflow-hidden rounded border border-outline-variant/40 bg-surface-container-lowest">
      <div className="relative aspect-[3/4] w-full bg-surface-container">
        {photoReady ? (
          <Image
            src={associate.imageSrc}
            alt={associate.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 280px"
            onError={() => setPhotoReady(false)}
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center">
            <MaterialIcon name="person" className="text-4xl text-outline" />
            <span className="type-label-sm uppercase tracking-wider text-on-surface-variant">
              Photo pending
            </span>
            <span className="max-w-[12rem] break-all type-body-sm text-outline">
              Place client photo at {associate.imageSrc}
            </span>
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="type-headline-sm text-primary">{associate.name}</h3>
      </div>
    </article>
  );
}
