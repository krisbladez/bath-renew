"use client";

import { useId, useState } from "react";
import type { FAQItem } from "@/content/faqs";

type Props = {
  items: FAQItem[];
};

export function FAQAccordion({ items }: Props) {
  const baseId = useId();
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="divide-y divide-line rounded-card border border-line bg-surface">
      {items.map((item, index) => {
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;
        const isOpen = openId === item.id;

        return (
          <div key={item.id}>
            <h3>
              <button
                id={buttonId}
                type="button"
                className="flex w-full items-start justify-between gap-4 px-4 py-4 text-left text-base font-semibold text-navy-deep hover:bg-navy-soft/20 sm:px-5"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? null : item.id)}
              >
                <span>{item.question}</span>
                <span aria-hidden className="mt-0.5 text-accent">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-4 pb-4 text-sm leading-relaxed text-muted sm:px-5"
            >
              <p>{item.answer}</p>
              {!item.verified ? (
                <p className="mt-2 text-xs font-medium text-amber-800">
                  Answer includes items pending owner confirmation.
                </p>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}
