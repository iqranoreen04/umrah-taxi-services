"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
  image?: string;
}

export default function PageHero({
  eyebrow,
  title,
  description,
  image = "https://images.pexels.com/photos/10961006/pexels-photo-10961006.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&dpr=2",
}: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={image} alt="" className="w-full h-full object-cover" />
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
              {eyebrow}
            </span>
            <span className="h-px w-8 bg-gold" />
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-balance">
            {title}
          </h1>
          {description && (
            <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
