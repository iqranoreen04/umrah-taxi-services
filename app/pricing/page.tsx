"use client";

import { motion } from "framer-motion";
import { Info } from "lucide-react";
import PageHero from "@/components/site/page-hero";
import CTASection from "@/components/site/cta-section";
import { pricingCategories, pricingNote } from "@/lib/data/pricing";

const columns = [
  { key: "sedan", label: "Sedan" },
  { key: "suv", label: "SUV" },
  { key: "van", label: "Van" },
  { key: "minibus", label: "Minibus" },
  { key: "bus", label: "Bus" },
] as const;

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Transparent Pricing"
        title="Clear Prices, No Hidden Fees"
        description="Starting prices in SAR for our most popular routes and services. Contact us for an exact quote."
      />

      <section className="section-py">
        <div className="container-mx container-px space-y-12">
          <div className="flex items-start gap-3 rounded-2xl border border-gold/30 bg-gold/5 p-4 text-sm text-muted-foreground">
            <Info className="w-5 h-5 text-gold shrink-0" />
            {pricingNote}
          </div>

          {pricingCategories.map((cat, i) => (
            <motion.div
              key={cat.id}
              id={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="scroll-mt-24"
            >
              <h2 className="font-display text-2xl font-bold mb-1">{cat.title}</h2>
              <p className="text-sm text-muted-foreground mb-4">{cat.description}</p>
              <div className="overflow-x-auto rounded-2xl border border-border bg-white card-shadow">
                <table className="w-full min-w-[640px] text-sm">
                  <thead>
                    <tr className="bg-emerald text-white">
                      <th className="text-left font-semibold px-4 py-3">Route / Service</th>
                      {columns.map((c) => (
                        <th key={c.key} className="text-center font-semibold px-4 py-3">{c.label}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {cat.items.map((item) => (
                      <tr key={item.route} className="border-t border-border even:bg-secondary/30">
                        <td className="px-4 py-3 font-medium">{item.route}</td>
                        {columns.map((c) => {
                          const v = item[c.key];
                          return (
                            <td key={c.key} className="px-4 py-3 text-center text-muted-foreground">
                              {typeof v === "number" ? `SAR ${v}` : v}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
