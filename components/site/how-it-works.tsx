"use client";

import { motion } from "framer-motion";
import { MapPin, Car, CheckCircle2, Heart } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import SectionHeading from "./section-heading";

const steps = [
  {
    number: "01",
    icon: MapPin,
    title: "Choose Your Route",
    description: "Select your pickup and destination from our popular routes or enter a custom location.",
  },
  {
    number: "02",
    icon: Car,
    title: "Select Your Vehicle",
    description: "Pick the vehicle that suits your group size and luggage, from sedans to full-size buses.",
  },
  {
    number: "03",
    icon: CheckCircle2,
    title: "Confirm Your Booking",
    description: "Submit your details and get a confirmation via WhatsApp within minutes.",
  },
  {
    number: "04",
    icon: Heart,
    title: "Enjoy a Comfortable Journey",
    description: "Your driver arrives on time. Sit back, relax, and focus on your sacred journey.",
  },
];

export default function HowItWorks() {
  return (
    <section className="section-py bg-secondary/30">
      <div className="container-mx container-px">
        <SectionHeading
          eyebrow="Simple Process"
          title="How Booking Works"
          description="Four simple steps between you and a comfortable ride."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative"
        >
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-20 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              variants={fadeInUp}
              className="relative text-center"
            >
              <div className="relative inline-flex items-center justify-center mb-5">
                <div className="w-16 h-16 rounded-2xl bg-white border-2 border-emerald/20 flex items-center justify-center shadow-sm">
                  <step.icon className="w-7 h-7 text-emerald" />
                </div>
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gold text-charcoal text-xs font-bold flex items-center justify-center">
                  {step.number}
                </span>
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
