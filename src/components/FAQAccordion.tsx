"use client";

import { useId, useState } from "react";
import type { FAQItem } from "@/content/faqs";

type Props = {
  items: FAQItem[];
};

export function FAQAccordion({ items }: Props) {
  const baseId = useId();
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="divide-y divide-line border-y border-line">
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
                className="flex w-full items-start justify-between gap-4 py-5 text-left text-base font-semibold text-navy-deep hover:text-accent"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? null : item.id)}
              >
                <span>{item.question}</span>
                <span aria-hidden className="mt-0.5 text-lg text-muted">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="pb-5 text-sm leading-relaxed text-muted"
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
