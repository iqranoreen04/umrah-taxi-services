"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight, Clock, Users, MessageCircle } from "lucide-react";
import { fadeInUp } from "@/lib/motion";
import { buildWhatsAppLink } from "@/lib/site-config";
import type { Package } from "@/lib/data/packages";

export default function PackageCard({ pkg }: { pkg: Package }) {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className={`group relative overflow-hidden rounded-2xl border card-shadow hover:card-shadow-hover transition-shadow ${
        pkg.popular
          ? "border-gold bg-gradient-to-b from-gold/5 to-white"
          : "border-border bg-white"
      }`}
    >
      {pkg.popular && (
        <div className="absolute top-0 right-0 bg-gold text-charcoal text-xs font-semibold px-4 py-1.5 rounded-bl-xl">
          Popular
        </div>
      )}
      <div className="relative h-40 overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-dark/70 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="font-display font-bold text-xl mb-2">{pkg.name}</h3>
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
          <span className="flex items-center gap-1">
            <Users className="w-3.5 h-3.5" />
            {pkg.idealFor}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {pkg.duration}
          </span>
        </div>

        <ul className="space-y-2 mb-5">
          {pkg.included.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-emerald shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>

        <div className="mb-4">
          <span className="text-xs text-muted-foreground">Vehicles: </span>
          <span className="text-sm font-medium">{pkg.vehicleOptions.join(", ")}</span>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div>
            <span className="text-xs text-muted-foreground">From</span>
            <div className="font-display font-bold text-2xl text-emerald">
              {pkg.startingPrice} <span className="text-sm font-normal">SAR</span>
            </div>
          </div>
          <div className="flex gap-2">
            <a
              href={buildWhatsAppLink(`I'm interested in the ${pkg.name}`)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-[#25D366]/10 text-[#25D366] flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <Link
              href="/booking"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald text-white text-sm font-medium hover:bg-emerald-dark transition-colors"
            >
              Book Now
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
