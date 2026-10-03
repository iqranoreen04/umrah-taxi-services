"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { fadeInUp } from "@/lib/motion";
import type { Testimonial } from "@/lib/data/testimonials";

export default function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  return (
    <motion.div
      variants={fadeInUp}
      className="relative rounded-2xl bg-white border border-border card-shadow p-6 h-full flex flex-col"
    >
      <Quote className="absolute top-5 right-5 w-10 h-10 text-emerald/10" />

      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-gold text-gold" />
        ))}
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5">
        &ldquo;{testimonial.text}&rdquo;
      </p>

      <div className="flex items-center gap-3 pt-4 border-t border-border">
        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-emerald to-emerald-dark flex items-center justify-center text-white font-semibold text-sm">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <div className="font-semibold text-sm">{testimonial.name}</div>
          <div className="text-xs text-muted-foreground">{testimonial.country}</div>
        </div>
      </div>
    </motion.div>
  );
}
