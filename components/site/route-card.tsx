"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, MapPin, MessageCircle } from "lucide-react";
import { fadeInUp } from "@/lib/motion";
import { buildWhatsAppLink } from "@/lib/site-config";
import type { Route } from "@/lib/data/routes";

export default function RouteCard({ route }: { route: Route }) {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-2xl bg-white border border-border card-shadow hover:card-shadow-hover transition-shadow"
    >
      <div className="relative h-40 overflow-hidden">
        <img
          src={route.image}
          alt={route.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-dark/85 via-emerald-dark/30 to-transparent" />
        {route.popular && (
          <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-gold text-charcoal text-xs font-semibold shadow">
            Popular
          </span>
        )}
        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="text-white font-display font-bold text-lg">
            {route.title}
          </h3>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" />
            {route.distance}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {route.duration}
          </span>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
          {route.description}
        </p>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs text-muted-foreground">From</span>
            <div className="font-display font-bold text-xl text-emerald">
              {route.startingPrice} <span className="text-sm font-normal">SAR</span>
            </div>
          </div>
          <div className="flex gap-2">
            <a
              href={buildWhatsAppLink(
                `I would like to book: ${route.title}`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-[#25D366]/10 text-[#25D366] flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-colors"
              aria-label="Book via WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <Link
              href={`/routes/${route.slug}`}
              className="inline-flex items-center gap-1 px-4 py-2 rounded-lg bg-emerald text-white text-sm font-medium hover:bg-emerald-dark transition-colors"
            >
              View
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
