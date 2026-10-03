"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { siteConfig } from "@/lib/site-config";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
}

export default function CTASection({
  title = "Begin Your Sacred Journey With Us",
  description = "Book your ride today and experience premium transportation designed for pilgrims.",
  primaryHref = "/booking",
  primaryLabel = "Book Your Ride",
}: CTASectionProps) {
  return (
    <section className="section-py">
      <div className="container-mx container-px">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-dark via-emerald to-emerald-dark px-6 py-16 sm:px-12 sm:py-20"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-light/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative text-center max-w-2xl mx-auto">
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 mb-4"
            >
              <span className="h-px w-8 bg-gold" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Get Started
              </span>
              <span className="h-px w-8 bg-gold" />
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance"
            >
              {title}
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mt-4 text-white/80 text-base sm:text-lg"
            >
              {description}
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
            >
              <Link
                href={primaryHref}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-emerald font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
              >
                {primaryLabel}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#25D366] text-white font-semibold hover:bg-[#1faa4f] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
