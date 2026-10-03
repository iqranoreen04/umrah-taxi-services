"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageCircle, Crown, Landmark, Building2 } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import Hero from "@/components/site/hero";
import BookingWidget from "@/components/site/booking-widget";
import StatsCounter from "@/components/site/stats-counter";
import SectionHeading from "@/components/site/section-heading";
import CTASection from "@/components/site/cta-section";
import ServiceCard from "@/components/site/service-card";
import RouteCard from "@/components/site/route-card";
import VehicleCard from "@/components/site/vehicle-card";
import PackageCard from "@/components/site/package-card";
import TestimonialCard from "@/components/site/testimonial-card";
import FAQAccordion from "@/components/site/faq-accordion";
import BlogCard from "@/components/site/blog-card";
import HowItWorks from "@/components/site/how-it-works";
import WhyChooseUs from "@/components/site/why-choose-us";
import { services } from "@/lib/data/services";
import { popularRoutes } from "@/lib/data/routes";
import { vehicles } from "@/lib/data/vehicles";
import { packages } from "@/lib/data/packages";
import { testimonials } from "@/lib/data/testimonials";
import { faqs } from "@/lib/data/faqs";
import { blogPosts } from "@/lib/data/blog";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Quick Booking Widget */}
      <section className="relative -mt-20 z-20 pb-6">
        <div className="container-mx container-px">
          <BookingWidget />
        </div>
      </section>

      {/* Trust Statistics */}
      <StatsCounter />

      {/* Services */}
      <section className="section-py">
        <div className="container-mx container-px">
          <SectionHeading
            eyebrow="What We Offer"
            title="Our Services"
            description="Comprehensive transportation services designed for every aspect of your sacred journey."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {services.map((s) => (
              <ServiceCard key={s.title} service={s} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="section-py bg-secondary/30">
        <div className="container-mx container-px">
          <SectionHeading
            eyebrow="Most Booked"
            title="Popular Routes"
            description="The routes pilgrims book most often, with transparent pricing and reliable service."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {popularRoutes.map((r) => (
              <RouteCard key={r.slug} route={r} />
            ))}
          </motion.div>
          <div className="text-center mt-10">
            <Link
              href="/routes"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-emerald text-emerald font-medium text-sm hover:bg-emerald hover:text-white transition-colors"
            >
              View All Routes
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Fleet */}
      <section className="section-py">
        <div className="container-mx container-px">
          <SectionHeading
            eyebrow="Our Vehicles"
            title="Premium Fleet"
            description="From comfortable sedans to spacious buses, choose the vehicle that fits your needs."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {vehicles.map((v) => (
              <VehicleCard key={v.slug} vehicle={v} />
            ))}
          </motion.div>
          <div className="text-center mt-10">
            <Link
              href="/fleet"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-emerald text-emerald font-medium text-sm hover:bg-emerald hover:text-white transition-colors"
            >
              View Full Fleet
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* How It Works */}
      <HowItWorks />

      {/* Ziyarat Section */}
      <section className="section-py bg-secondary/30">
        <div className="container-mx container-px">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3926213/pexels-photo-3926213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=900&dpr=2"
                  alt="Madinah Ziyarat"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-dark/60 to-transparent" />
              </div>
              <div className="absolute -bottom-5 -right-5 w-32 h-32 rounded-2xl overflow-hidden shadow-xl border-4 border-background hidden sm:block">
                <img
                  src="https://images.pexels.com/photos/19174886/pexels-photo-19174886.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2"
                  alt="Makkah Ziyarat"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="h-px w-8 bg-gold" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  Sacred Journeys
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 text-balance">
                Ziyarat Transportation
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Visit the significant historical and religious sites in Makkah
                and Madinah with experienced local drivers who know every site
                and its story. Flexible timing, comfortable vehicles, and
                respectful service.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  { icon: Landmark, text: "Makkah Ziyarat: Jabal al-Nour, Arafat, Mina, Muzdalifah" },
                  { icon: Building2, text: "Madinah Ziyarat: Quba Mosque, Uhud, Masjid Qiblatain" },
                  { icon: Crown, text: "Private vehicle with experienced local driver" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="shrink-0 w-9 h-9 rounded-lg bg-emerald/8 flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-emerald" />
                    </div>
                    <p className="text-sm text-muted-foreground pt-1.5">{item.text}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/ziyarat"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-emerald text-white font-semibold hover:bg-emerald-dark transition-colors"
              >
                Plan Your Ziyarat
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VIP Transportation */}
      <section className="section-py">
        <div className="container-mx container-px">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-charcoal via-emerald-dark to-charcoal px-6 py-14 sm:px-12 sm:py-16"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-gold/10 rounded-full blur-3xl" />
            <div className="relative grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 mb-4">
                  <Crown className="w-5 h-5 text-gold" />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                    VIP Transportation
                  </span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
                  Travel Like Royalty
                </h2>
                <p className="text-white/70 leading-relaxed mb-6">
                  For those who expect the highest standard of comfort and
                  service, our VIP transportation offers premium SUVs,
                  professional chauffeurs, and priority booking. Every detail
                  is handled with care.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/packages"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gold text-charcoal font-semibold hover:bg-gold-light transition-colors"
                  >
                    View VIP Packages
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Inquire via WhatsApp
                  </a>
                </div>
              </div>
              <div className="relative h-64 lg:h-80 rounded-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/36498953/pexels-photo-36498953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=800&dpr=2"
                  alt="VIP chauffeur service"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-py bg-secondary/30">
        <div className="container-mx container-px">
          <SectionHeading
            eyebrow="Pilgrim Stories"
            title="What Our Customers Say"
            description="Real experiences from pilgrims who traveled with us."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {testimonials.slice(0, 4).map((t) => (
              <TestimonialCard key={t.name} testimonial={t} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-py">
        <div className="container-mx container-px">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Got Questions?"
                title="Frequently Asked Questions"
                description="Everything you need to know about booking transportation with us."
              />
              <div className="mt-8">
                <Link
                  href="/faqs"
                  className="inline-flex items-center gap-2 text-emerald font-medium hover:gap-3 transition-all"
                >
                  View All FAQs
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div>
              <FAQAccordion faqs={faqs.slice(0, 5)} />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="section-py bg-secondary/30">
        <div className="container-mx container-px">
          <SectionHeading
            eyebrow="Latest Articles"
            title="Travel Tips & Guides"
            description="Helpful information to make your Umrah journey smoother."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {blogPosts.slice(0, 3).map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </motion.div>
          <div className="text-center mt-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-emerald text-emerald font-medium text-sm hover:bg-emerald hover:text-white transition-colors"
            >
              Read All Articles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Strong CTA */}
      <CTASection />
    </>
  );
}
