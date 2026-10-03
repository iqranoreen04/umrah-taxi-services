"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  ArrowRight,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { routes } from "@/lib/data/routes";
import { vehicles } from "@/lib/data/vehicles";
import { services } from "@/lib/data/services";

export default function Footer() {
  return (
    <footer className="relative bg-charcoal text-white overflow-hidden">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-emerald via-gold to-emerald" />

      {/* CTA banner */}
      <div className="relative border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-dark/40 to-transparent" />
        <div className="container-mx container-px relative py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">
                Ready for a Comfortable Journey?
              </h3>
              <p className="text-white/70 text-sm md:text-base">
                Book your ride today and travel with peace of mind.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/booking"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-emerald to-emerald-light text-white font-semibold shadow-lg shadow-emerald/30 hover:scale-[1.02] transition-transform"
              >
                Book Your Ride
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] text-white font-semibold hover:bg-[#1faa4f] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-mx container-px py-14">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Company */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald to-emerald-dark flex items-center justify-center">
                <span className="text-white font-display font-bold text-lg">S</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-lg">Safwa Rihla</span>
                <span className="text-[10px] uppercase tracking-[0.15em] text-white/50">
                  Umrah Transport
                </span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-5 max-w-xs">
              Reliable, comfortable, and hassle-free transportation for your
              sacred journey across Makkah, Madinah, and Jeddah.
            </p>
            <div className="space-y-2.5 text-sm">
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-2.5 text-white/70 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-gold shrink-0" />
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2.5 text-white/70 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-gold shrink-0" />
                {siteConfig.email}
              </a>
              <div className="flex items-center gap-2.5 text-white/70">
                <MapPin className="w-4 h-4 text-gold shrink-0" />
                {siteConfig.address}
              </div>
            </div>
            <div className="flex items-center gap-3 mt-5">
              {[
                { icon: Facebook, href: siteConfig.social.facebook },
                { icon: Instagram, href: siteConfig.social.instagram },
                { icon: Twitter, href: siteConfig.social.twitter },
                { icon: Youtube, href: siteConfig.social.youtube },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-emerald transition-colors"
                  aria-label="Social media"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-gold mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.slice(0, 6).map((s) => (
                <li key={s.title}>
                  <Link
                    href={s.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Routes */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-gold mb-4">
              Popular Routes
            </h4>
            <ul className="space-y-2.5">
              {routes.slice(0, 6).map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/routes/${r.slug}`}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {r.from} → {r.to}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Fleet */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-gold mb-4">
              Fleet
            </h4>
            <ul className="space-y-2.5">
              {vehicles.map((v) => (
                <li key={v.slug}>
                  <Link
                    href={`/fleet/${v.slug}`}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {v.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-gold mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/blog" className="text-sm text-white/60 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="text-sm text-white/60 hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-white/60 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-sm text-white/60 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-white/60 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="text-sm text-white/60 hover:text-white transition-colors">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="border-t border-white/10">
        <div className="container-mx container-px py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-semibold text-sm mb-1">Stay Updated</h4>
              <p className="text-white/50 text-xs">
                Get travel tips and special offers for your Umrah journey.
              </p>
            </div>
            <form className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2.5 rounded-full bg-white/10 border border-white/15 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-full bg-gold text-charcoal text-sm font-semibold hover:bg-gold-light transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-mx container-px py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/40">
            <p>
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            <p>Designed for pilgrims, by people who care.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
