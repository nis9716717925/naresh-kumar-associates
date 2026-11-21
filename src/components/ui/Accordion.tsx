"use client";

import { useId, useState } from "react";
import { MaterialIcon } from "./MaterialIcon";

export type AccordionItem = {
  id?: string;
  question: string;
  answer: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

export function Accordion({ items }: AccordionProps) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-outline-variant/40 rounded border border-outline-variant/40 bg-surface-container-lowest">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;

        return (
          <div key={item.id ?? index}>
            <h3>
              <button
                id={buttonId}
                type="button"
                className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left type-headline-sm text-primary transition-colors hover:bg-surface-container-low"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span>{item.question}</span>
                <MaterialIcon
                  name={isOpen ? "expand_less" : "expand_more"}
                  className="text-secondary"
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-6 pb-5 type-body-sm leading-relaxed text-on-surface-variant"
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}