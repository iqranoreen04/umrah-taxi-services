"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/site/page-hero";
import CTASection from "@/components/site/cta-section";
import VehicleCard from "@/components/site/vehicle-card";
import { vehicles } from "@/lib/data/vehicles";
import { staggerContainer } from "@/lib/motion";

export default function FleetPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Premium Fleet"
        title="Comfortable Vehicles for Every Group Size"
        description="From sedans for couples to full-size coaches for Hajj and Umrah groups, every vehicle is clean, air-conditioned, and driven by a professional."
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
            {vehicles.map((v) => (
              <VehicleCard key={v.slug} vehicle={v} />
            ))}
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
