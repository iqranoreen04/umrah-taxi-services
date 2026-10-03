"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import * as Icons from "lucide-react";
import { fadeInUp } from "@/lib/motion";
import type { Service } from "@/lib/data/services";

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = (Icons as any)[service.icon] ?? Icons.Car;

  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-2xl bg-white border border-border card-shadow hover:card-shadow-hover transition-shadow"
    >
      <div className="relative h-44 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-dark/80 via-emerald-dark/20 to-transparent" />
        <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-white/90 backdrop-blur flex items-center justify-center shadow-lg">
          <Icon className="w-5 h-5 text-emerald" />
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display font-bold text-lg mb-1.5 group-hover:text-emerald transition-colors">
          {service.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
          {service.description}
        </p>
        <Link
          href={service.href}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald hover:gap-2.5 transition-all"
        >
          Learn More
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
}
