"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/site/page-hero";
import CTASection from "@/components/site/cta-section";
import PackageCard from "@/components/site/package-card";
import { packages } from "@/lib/data/packages";
import { staggerContainer } from "@/lib/motion";

export default function PackagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Umrah Packages"
        title="Transport Packages for Your Whole Journey"
        description="Bundle your airport transfers, intercity travel, and ziyarat tours into one simple package and save."
      />

      <section className="section-py">
        <div className="container-mx container-px">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {packages.map((p) => (
              <PackageCard key={p.slug} pkg={p} />
            ))}
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
