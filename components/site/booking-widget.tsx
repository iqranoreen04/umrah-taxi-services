"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Navigation,
  Calendar,
  Clock,
  Car,
  Users,
  Briefcase,
  User,
  Phone,
  Mail,
  CheckCircle2,
  MessageCircle,
  Loader2,
} from "lucide-react";
import { routes } from "@/lib/data/routes";
import { vehicles } from "@/lib/data/vehicles";
import { buildWhatsAppBookingLink, siteConfig } from "@/lib/site-config";

const routeOptions = routes.map((r) => ({
  label: `${r.from} → ${r.to}`,
  value: `${r.from} → ${r.to}`,
}));

const vehicleOptions = vehicles.map((v) => ({
  label: `${v.name} (${v.passengers} pax)`,
  value: v.name,
}));

const passengerOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12+"];
const luggageOptions = ["1", "2", "3", "4", "5", "6", "7", "8+"];

interface BookingWidgetProps {
  variant?: "full" | "compact";
}

export default function BookingWidget({ variant = "full" }: BookingWidgetProps) {
  const [form, setForm] = useState({
    pickup: "",
    destination: "",
    date: "",
    time: "",
    vehicle: "",
    passengers: "",
    luggage: "",
    name: "",
    phone: "",
    email: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.pickup) e.pickup = "Required";
    if (!form.destination) e.destination = "Required";
    if (!form.date) e.date = "Required";
    if (!form.time) e.time = "Required";
    if (!form.vehicle) e.vehicle = "Required";
    if (!form.passengers) e.passengers = "Required";
    if (!form.name) e.name = "Required";
    if (!form.phone) e.phone = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
    }, 800);
  };

  const handleWhatsApp = () => {
    window.open(buildWhatsAppBookingLink(form), "_blank");
  };

  const update = (key: string, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((p) => ({ ...p, [key]: "" }));
  };

  const inputClass = (field: string) =>
    `w-full pl-10 pr-3 py-2.5 rounded-xl border bg-white text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-emerald/20 ${
      errors[field] ? "border-red-400" : "border-border focus:border-emerald"
    }`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative bg-white rounded-3xl shadow-2xl shadow-emerald/10 border border-border overflow-hidden"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald to-emerald-dark px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center">
            <Car className="w-4 h-4 text-white" />
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm">Quick Booking</h3>
            <p className="text-white/60 text-xs">Get your quote in minutes</p>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 text-xs text-white/60">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          24/7 Available
        </div>
      </div>

      <AnimatePresence mode="wait">
        {success ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-6 py-12 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.1 }}
              className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4"
            >
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </motion.div>
            <h3 className="font-display text-xl font-bold mb-2">
              Request Received!
            </h3>
            <p className="text-sm text-muted-foreground mb-6 max-w-sm mx-auto">
              We will contact you shortly on WhatsApp to confirm your booking and
              provide a quote. Jazak Allah Khair.
            </p>
            <button
              onClick={() => {
                setSuccess(false);
                setForm({
                  pickup: "",
                  destination: "",
                  date: "",
                  time: "",
                  vehicle: "",
                  passengers: "",
                  luggage: "",
                  name: "",
                  phone: "",
                  email: "",
                });
              }}
              className="text-sm font-medium text-emerald hover:underline"
            >
              Book another ride
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit}
            className="p-6 space-y-4"
          >
            {/* Route selection */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                  Pickup Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <select
                    value={form.pickup}
                    onChange={(e) => update("pickup", e.target.value)}
                    className={inputClass("pickup")}
                  >
                    <option value="">Select pickup</option>
                    {routeOptions.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                    <option value="Custom">Custom location</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                  Destination
                </label>
                <div className="relative">
                  <Navigation className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <select
                    value={form.destination}
                    onChange={(e) => update("destination", e.target.value)}
                    className={inputClass("destination")}
                  >
                    <option value="">Select destination</option>
                    {routeOptions.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                    <option value="Custom">Custom location</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Date & Time */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                  Travel Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) => update("date", e.target.value)}
                    className={inputClass("date")}
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                  Pickup Time
                </label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="time"
                    value={form.time}
                    onChange={(e) => update("time", e.target.value)}
                    className={inputClass("time")}
                  />
                </div>
              </div>
            </div>

            {/* Vehicle & Passengers */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                  Vehicle Type
                </label>
                <div className="relative">
                  <Car className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <select
                    value={form.vehicle}
                    onChange={(e) => update("vehicle", e.target.value)}
                    className={inputClass("vehicle")}
                  >
                    <option value="">Select vehicle</option>
                    {vehicleOptions.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                  Passengers
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <select
                    value={form.passengers}
                    onChange={(e) => update("passengers", e.target.value)}
                    className={inputClass("passengers")}
                  >
                    <option value="">Select</option>
                    {passengerOptions.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                  Luggage
                </label>
                <div className="relative">
                  <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <select
                    value={form.luggage}
                    onChange={(e) => update("luggage", e.target.value)}
                    className={`${inputClass("luggage")} border-border`}
                  >
                    <option value="">Select</option>
                    {luggageOptions.map((l) => (
                      <option key={l} value={l}>
                        {l}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Contact info */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                  Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    className={inputClass("name")}
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                  Phone / WhatsApp
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="tel"
                    placeholder="+1 234 567 890"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    className={inputClass("phone")}
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                  Email (optional)
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="email"
                    placeholder="you@email.com"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    className={`${inputClass("email")} border-border`}
                  />
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="submit"
                disabled={submitting}
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald to-emerald-dark text-white font-semibold shadow-lg shadow-emerald/20 hover:shadow-xl transition-all disabled:opacity-60"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Get My Quote"
                )}
              </button>
              <button
                type="button"
                onClick={handleWhatsApp}
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] text-white font-semibold hover:bg-[#1faa4f] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Book via WhatsApp
              </button>
            </div>
            {/* Direct contact */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-2 pt-3 border-t border-border text-sm text-muted-foreground">
              <a href={siteConfig.phoneHref} className="inline-flex items-center gap-1.5 hover:text-emerald transition-colors">
                <Phone className="w-4 h-4 text-emerald" />
                {siteConfig.phone}
              </a>
              <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-emerald transition-colors">
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                WhatsApp
              </a>
              <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-1.5 hover:text-emerald transition-colors">
                <Mail className="w-4 h-4 text-emerald" />
                {siteConfig.email}
              </a>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
