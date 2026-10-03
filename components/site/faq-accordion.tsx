"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { FAQ } from "@/lib/data/faqs";

export default function FAQAccordion({
  faqs,
  categoryFilter,
}: {
  faqs: FAQ[];
  categoryFilter?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);

  const filtered = categoryFilter
    ? faqs.filter((f) => f.category === categoryFilter)
    : faqs;

  return (
    <div className="space-y-3">
      {filtered.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className={`rounded-2xl border transition-colors overflow-hidden ${
              isOpen ? "border-emerald/30 bg-emerald/5" : "border-border bg-white"
            }`}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="font-medium text-sm sm:text-base">{faq.question}</span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center ${
                  isOpen ? "bg-emerald text-white" : "bg-muted text-muted-foreground"
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
