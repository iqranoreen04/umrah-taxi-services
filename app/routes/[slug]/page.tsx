"use client";

import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  Car,
  Check,
  ArrowRight,
  MessageCircle,
  ChevronRight,
} from "lucide-react";
import CTASection from "@/components/site/cta-section";
import FAQAccordion from "@/components/site/faq-accordion";
import { getRoute, routes } from "@/lib/data/routes";
import { buildWhatsAppLink } from "@/lib/site-config";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export default function RouteDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const route = getRoute(slug);
  if (!route) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={route.image}
            alt={route.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="container-mx container-px relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <nav className="flex items-center gap-1.5 text-sm text-white/60 mb-4">
              <Link href="/" className="hover:text-white">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link href="/routes" className="hover:text-white">Routes</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-white">{route.title}</span>
            </nav>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white text-balance">
              {route.title}
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-2xl leading-relaxed">
              {route.description}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-white/15">
                <MapPin className="w-4 h-4 text-gold" />
                <span className="text-sm text-white">{route.distance}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-white/15">
                <Clock className="w-4 h-4 text-gold" />
                <span className="text-sm text-white">{route.duration}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-white/15">
                <Car className="w-4 h-4 text-gold" />
                <span className="text-sm text-white">{route.vehicleTypes.join(", ")}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Route Details */}
      <section className="section-py">
        <div className="container-mx container-px">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* What's included */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl bg-white border border-border p-6 card-shadow"
              >
                <h2 className="font-display text-2xl font-bold mb-5">
                  What Is Included
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {route.included.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <Check className="w-5 h-5 text-emerald shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Route FAQ */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-6"
              >
                <h2 className="font-display text-2xl font-bold mb-5">
                  Route FAQs
                </h2>
                <FAQAccordion faqs={route.faqs} />
              </motion.div>
            </div>

            {/* Pricing sidebar */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="sticky top-24 rounded-2xl bg-gradient-to-b from-emerald to-emerald-dark text-white p-6 card-shadow"
              >
                <div className="text-sm text-white/70 mb-1">Starting from</div>
                <div className="font-display text-4xl font-bold mb-1">
                  {route.startingPrice} <span className="text-lg font-normal">SAR</span>
                </div>
                <div className="text-sm text-white/60 mb-6">per vehicle</div>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center justify-between text-sm border-b border-white/15 pb-2">
                    <span className="text-white/70">Distance</span>
                    <span>{route.distance}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm border-b border-white/15 pb-2">
                    <span className="text-white/70">Duration</span>
                    <span>{route.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/70">Vehicles</span>
                    <span>{route.vehicleTypes.length} options</span>
                  </div>
                </div>

                <Link
                  href="/booking"
                  className="flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-xl bg-white text-emerald font-semibold hover:bg-gold hover:text-charcoal transition-colors mb-3"
                >
                  Book This Route
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={buildWhatsAppLink(`I would like to book: ${route.title}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-xl bg-[#25D366] text-white font-semibold hover:bg-[#1faa4f] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Book via WhatsApp
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Routes */}
      <section className="section-py bg-secondary/30">
        <div className="container-mx container-px">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-center mb-10">
            Other Popular Routes
          </h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {routes
              .filter((r) => r.slug !== slug)
              .slice(0, 3)
              .map((r) => (
                <motion.div key={r.slug} variants={fadeInUp}>
                  <Link
                    href={`/routes/${r.slug}`}
                    className="group flex items-center gap-4 p-4 rounded-2xl bg-white border border-border card-shadow hover:card-shadow-hover transition-shadow"
                  >
                    <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0">
                      <img src={r.image} alt={r.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm group-hover:text-emerald transition-colors">
                        {r.title}
                      </h3>
                      <div className="text-xs text-muted-foreground">
                        From {r.startingPrice} SAR
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-emerald transition-colors" />
                  </Link>
                </motion.div>
              ))}
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
