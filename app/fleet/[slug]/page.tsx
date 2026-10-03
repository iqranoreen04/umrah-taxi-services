"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import {
  Users,
  Briefcase,
  Fuel,
  Settings2,
  Check,
  MessageCircle,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import CTASection from "@/components/site/cta-section";
import VehicleCard from "@/components/site/vehicle-card";
import { getVehicle, vehicles } from "@/lib/data/vehicles";
import { buildWhatsAppLink } from "@/lib/site-config";
import { staggerContainer } from "@/lib/motion";

export default function VehicleDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const vehicle = getVehicle(params.slug);
  if (!vehicle) notFound();

  const specs = [
    { icon: Users, label: "Passengers", value: `Up to ${vehicle.passengers}` },
    { icon: Briefcase, label: "Luggage", value: `${vehicle.luggage} bags` },
    { icon: Fuel, label: "Fuel", value: vehicle.fuelType },
    { icon: Settings2, label: "Transmission", value: vehicle.transmission },
  ];

  return (
    <>
      <section className="pt-32 pb-16 bg-secondary/30">
        <div className="container-mx container-px">
          <nav className="flex items-center gap-1.5 text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-emerald">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/fleet" className="hover:text-emerald">Fleet</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">{vehicle.name}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-3xl bg-white border border-border card-shadow p-6"
            >
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="w-full h-72 sm:h-96 object-contain"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <span className="inline-block px-3 py-1 rounded-full bg-emerald/10 text-emerald text-xs font-semibold mb-4">
                {vehicle.category}
              </span>
              <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
                {vehicle.name}
              </h1>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {vehicle.description}
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {specs.map((s) => (
                  <div key={s.label} className="flex items-center gap-3 rounded-xl bg-white border border-border p-3">
                    <s.icon className="w-5 h-5 text-emerald shrink-0" />
                    <div>
                      <div className="text-xs text-muted-foreground">{s.label}</div>
                      <div className="text-sm font-semibold">{s.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-sm text-muted-foreground mb-1">Ideal for</p>
              <p className="font-medium mb-6">{vehicle.idealFor}</p>

              <div className="flex items-end gap-2 mb-6">
                <span className="text-sm text-muted-foreground">Starting from</span>
                <span className="font-display text-3xl font-bold text-emerald">
                  SAR {vehicle.startingPrice}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/booking"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-emerald to-emerald-dark text-white font-semibold shadow-lg shadow-emerald/20"
                >
                  Book This Vehicle
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={buildWhatsAppLink(`I would like to book the ${vehicle.name}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] text-white font-semibold hover:bg-[#1faa4f] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Book via WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-py">
        <div className="container-mx container-px">
          <h2 className="font-display text-2xl font-bold mb-5">Features</h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-16">
            {vehicle.features.map((f) => (
              <li key={f} className="flex items-center gap-2.5 rounded-xl border border-border bg-white p-4 text-sm">
                <Check className="w-4 h-4 text-emerald shrink-0" />
                {f}
              </li>
            ))}
          </ul>

          <h2 className="font-display text-2xl font-bold mb-5">Other Vehicles</h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {vehicles
              .filter((v) => v.slug !== vehicle.slug)
              .slice(0, 3)
              .map((v) => (
                <VehicleCard key={v.slug} vehicle={v} />
              ))}
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
