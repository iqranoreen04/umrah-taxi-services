"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Star, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/39375299/pexels-photo-39375299.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2"
          alt="Premium vehicle on Saudi highway"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-dark/60 via-transparent to-transparent" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-gold/30"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container-mx container-px relative z-10 pt-24 pb-12">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-white/15 mb-6"
          >
            <Star className="w-4 h-4 text-gold fill-gold" />
            <span className="text-sm text-white/90 font-medium">
              Trusted by thousands of pilgrims
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] text-balance text-shadow-lg"
          >
            Your Journey to the Holy Cities,{" "}
            <span className="gradient-gold-text">Made Comfortable</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl"
          >
            Premium Umrah and Hajj transportation across Jeddah, Makkah, and
            Madinah. Reliable vehicles, professional drivers, and easy 24/7
            booking.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3"
          >
            <Link
              href="/booking"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-gradient-to-r from-emerald to-emerald-light text-white font-semibold shadow-2xl shadow-emerald/30 hover:shadow-emerald/50 hover:scale-[1.02] transition-all"
            >
              Book Your Ride
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/fleet"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full glass-dark border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              Explore Our Fleet
            </Link>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-full bg-[#25D366] text-white font-semibold hover:bg-[#1faa4f] transition-colors animate-pulse-ring"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3"
          >
            {[
              "Professional Drivers",
              "24/7 Support",
              "Airport Meet & Greet",
              "Transparent Pricing",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-sm text-white/70"
              >
                <ShieldCheck className="w-4 h-4 text-gold" />
                {item}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
