"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/motion";
import SectionHeading from "@/components/site/section-heading";
import CTASection from "@/components/site/cta-section";
import RouteCard from "@/components/site/route-card";
import { routes } from "@/lib/data/routes";

export default function RoutesPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/21377912/pexels-photo-21377912.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&dpr=2"
            alt="Saudi road"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="container-mx container-px relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-gold" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Our Routes
              </span>
              <span className="h-px w-8 bg-gold" />
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-balance">
              Popular Routes & Destinations
            </h1>
            <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
              Explore our most booked routes with transparent pricing, estimated
              travel times, and available vehicle types.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-py">
        <div className="container-mx container-px">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {routes.map((r) => (
              <RouteCard key={r.slug} route={r} />
            ))}
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
