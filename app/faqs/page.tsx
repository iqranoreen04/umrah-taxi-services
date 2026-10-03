"use client";

import { useState } from "react";
import PageHero from "@/components/site/page-hero";
import CTASection from "@/components/site/cta-section";
import FAQAccordion from "@/components/site/faq-accordion";
import { faqs } from "@/lib/data/faqs";
import { cn } from "@/lib/utils";

export default function FAQsPage() {
  const categories = ["All", ...Array.from(new Set(faqs.map((f) => f.category).filter(Boolean)))] as string[];
  const [active, setActive] = useState("All");

  return (
    <>
      <PageHero
        eyebrow="FAQs"
        title="Frequently Asked Questions"
        description="Everything you need to know about booking, vehicles, payment, and support."
      />

      <section className="section-py">
        <div className="container-mx container-px max-w-3xl">
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium border transition-colors",
                  active === c
                    ? "bg-emerald text-white border-emerald"
                    : "bg-white border-border text-muted-foreground hover:border-emerald hover:text-emerald"
                )}
              >
                {c}
              </button>
            ))}
          </div>
          <FAQAccordion
            key={active}
            faqs={faqs}
            categoryFilter={active === "All" ? undefined : active}
          />
        </div>
      </section>

      <CTASection />
    </>
  );
}
