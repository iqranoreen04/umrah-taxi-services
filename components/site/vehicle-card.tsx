"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Users, Briefcase, Fuel, Settings, ArrowRight } from "lucide-react";
import { fadeInUp } from "@/lib/motion";
import type { Vehicle } from "@/lib/data/vehicles";

export default function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-2xl bg-white border border-border card-shadow hover:card-shadow-hover transition-shadow"
    >
      <div className="relative h-52 overflow-hidden bg-muted">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur text-xs font-semibold text-emerald">
          {vehicle.category}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-display font-bold text-lg mb-1 group-hover:text-emerald transition-colors">
          {vehicle.name}
        </h3>
        <p className="text-xs text-muted-foreground mb-4">{vehicle.idealFor}</p>

        <div className="grid grid-cols-2 gap-3 mb-4 text-xs">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Users className="w-4 h-4 text-emerald" />
            {vehicle.passengers} passengers
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Briefcase className="w-4 h-4 text-emerald" />
            {vehicle.luggage} bags
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Fuel className="w-4 h-4 text-emerald" />
            {vehicle.fuelType}
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Settings className="w-4 h-4 text-emerald" />
            {vehicle.transmission}
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div>
            <span className="text-xs text-muted-foreground">From</span>
            <div className="font-display font-bold text-xl text-emerald">
              {vehicle.startingPrice} <span className="text-sm font-normal">SAR</span>
            </div>
          </div>
          <Link
            href={`/fleet/${vehicle.slug}`}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald text-white text-sm font-medium hover:bg-emerald-dark transition-colors group-hover:gap-2.5"
          >
            Book This Vehicle
            <ArrowRight className="w-3.5 h-3.5 transition-all" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
