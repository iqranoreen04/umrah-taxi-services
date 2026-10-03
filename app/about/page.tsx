"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Target,
  Eye,
  Heart,
  ShieldCheck,
  Users,
  Car,
  Clock,
  MapPin,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import SectionHeading from "@/components/site/section-heading";
import CTASection from "@/components/site/cta-section";
import StatsCounter from "@/components/site/stats-counter";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const values = [
  { icon: ShieldCheck, title: "Reliability", description: "We are there when you need us, every time, on time." },
  { icon: Heart, title: "Respect", description: "We treat every pilgrim with the dignity their journey deserves." },
  { icon: Sparkles, title: "Comfort", description: "Clean, well-maintained vehicles for a stress-free ride." },
  { icon: Users, title: "Care", description: "Patient, courteous drivers who understand pilgrim needs." },
];

const coverage = [
  "Makkah",
  "Madinah",
  "Jeddah",
  "Jeddah Airport",
  "Madinah Airport",
  "Taif",
  "Haramain Railway Stations",
  "All major hotels",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/38546878/pexels-photo-38546878.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&dpr=2"
            alt="Makkah"
            className="w-full h-full object-cover"
          />
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
                About Us
              </span>
              <span className="h-px w-8 bg-gold" />
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-balance">
              Making Every Journey Between the Holy Cities Comfortable
            </h1>
            <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
              We exist to serve pilgrims on their sacred journey, providing
              reliable, comfortable, and stress-free transportation across
              Saudi Arabia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-py">
        <div className="container-mx container-px">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/27291499/pexels-photo-27291499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=900&dpr=2"
                  alt="Makkah Clock Tower"
                  className="w-full h-[450px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-emerald text-white p-6 rounded-2xl shadow-xl hidden sm:block">
                <div className="font-display text-3xl font-bold">10+</div>
                <div className="text-sm text-white/80">Years Serving Pilgrims</div>
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
                  Our Story
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 text-balance">
                Built on Trust, Driven by Purpose
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Marhaba Umrah Taxi Service began with a simple observation: pilgrims arriving
                  in Saudi Arabia for Umrah and Hajj often struggled to find
                  reliable, comfortable transportation. After long flights,
                  they faced uncertain waits, unfamiliar roads, and vehicles
                  that were not suited to their needs.
                </p>
                <p>
                  We set out to change that. Starting with a small fleet of
                  well-maintained vehicles and drivers who understood the
                  significance of the journey, we built a service focused on
                  one thing: making every pilgrim's transportation between the
                  holy cities as comfortable and stress-free as possible.
                </p>
                <p>
                  Today, we serve thousands of pilgrims each year from around
                  the world, with a fleet ranging from comfortable sedans to
                  full-size buses, and drivers who are not just professionals
                  but people who care.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsCounter />

      {/* Mission & Vision */}
      <section className="section-py bg-secondary/30">
        <div className="container-mx container-px">
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl bg-white border border-border p-8 card-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald/10 flex items-center justify-center mb-5">
                <Target className="w-6 h-6 text-emerald" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide every pilgrim with reliable, comfortable, and
                dignified transportation across the holy cities, so they can
                focus on what matters most: their sacred journey.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-3xl bg-white border border-border p-8 card-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-5">
                <Eye className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted transportation partner for pilgrims
                  visiting the holy cities, known for reliability, comfort, and
                  service that honors the significance of every journey.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-py">
        <div className="container-mx container-px">
          <SectionHeading
            eyebrow="What We Stand For"
            title="Our Values"
            description="The principles that guide every ride we provide."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {values.map((v) => (
              <motion.div
                key={v.title}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                className="text-center p-6 rounded-2xl bg-white border border-border card-shadow"
              >
                <div className="w-14 h-14 rounded-2xl bg-emerald/8 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-6 h-6 text-emerald" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {v.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Pilgrims Trust Us */}
      <section className="section-py bg-secondary/30">
        <div className="container-mx container-px">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="h-px w-8 bg-gold" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  Trust
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6 text-balance">
                Why Pilgrims Trust Us
              </h2>
              <div className="space-y-4">
                {[
                  { icon: Car, title: "Our Fleet", text: "A wide range of well-maintained vehicles, from sedans to buses, suited to every group size and budget." },
                  { icon: Users, title: "Our Drivers", text: "Experienced, licensed, and respectful drivers who speak Arabic and English, and understand pilgrim needs." },
                  { icon: Clock, title: "24/7 Support", text: "Round-the-clock customer support via WhatsApp, phone, and email, so help is always available." },
                  { icon: MapPin, title: "Service Coverage", text: "We cover Makkah, Madinah, Jeddah, Taif, and all airports and major hotels in the region." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="shrink-0 w-11 h-11 rounded-xl bg-emerald/8 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-emerald" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl bg-white">
                <img
                  src="/images/fleet/toyota-camry.jpeg"
                  alt="Toyota Camry from our fleet"
                  className="w-full h-[500px] object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Coverage */}
      <section className="section-py">
        <div className="container-mx container-px">
          <SectionHeading
            eyebrow="Where We Operate"
            title="Service Coverage"
            description="We provide transportation across the key cities and destinations pilgrims visit."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 flex flex-wrap justify-center gap-3"
          >
            {coverage.map((c, i) => (
              <motion.div
                key={c}
                variants={fadeInUp}
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-border card-shadow"
              >
                <MapPin className="w-4 h-4 text-emerald" />
                <span className="text-sm font-medium">{c}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
