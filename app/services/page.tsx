"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/site/section-heading";
import CTASection from "@/components/site/cta-section";
import ServiceCard from "@/components/site/service-card";
import { services } from "@/lib/data/services";
import { staggerContainer } from "@/lib/motion";

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/10961006/pexels-photo-10961006.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&dpr=2"
            alt="Saudi desert road"
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
                Our Services
              </span>
              <span className="h-px w-8 bg-gold" />
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-balance">
              Transportation for Every Step of Your Journey
            </h1>
            <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
              From airport arrivals to intercity transfers and guided ziyarat
              tours, we cover every transportation need for pilgrims.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-py">
        <div className="container-mx container-px">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {services.map((s) => (
              <ServiceCard key={s.title} service={s} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Details */}
      <section className="section-py bg-secondary/30">
        <div className="container-mx container-px">
          <SectionHeading
            eyebrow="In Detail"
            title="What Each Service Includes"
            description="Every service comes with our commitment to comfort, reliability, and respect."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                id={s.href.split("#")[1]}
                className="rounded-2xl bg-white border border-border p-6 card-shadow scroll-mt-24"
              >
                <h3 className="font-display font-bold text-lg mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {s.description}
                </p>
                <ul className="space-y-2">
                  {[
                    "Professional, experienced driver",
                    "Clean, air-conditioned vehicle",
                    "Bottled water provided",
                    "Flight tracking (for airport services)",
                  ].map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-emerald shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
