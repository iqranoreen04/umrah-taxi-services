"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { whyChooseUs } from "@/lib/data/why-choose-us";
import SectionHeading from "./section-heading";

export default function WhyChooseUs() {
  return (
    <section className="section-py">
      <div className="container-mx container-px">
        <SectionHeading
          eyebrow="Why Pilgrims Trust Us"
          title="Why Choose Safwa Rihla"
          description="We understand the importance of your journey and are committed to making every mile comfortable."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {whyChooseUs.map((item) => {
            const Icon = (Icons as any)[item.icon] ?? Icons.CheckCircle2;
            return (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="group flex gap-4 p-5 rounded-2xl bg-white border border-border card-shadow hover:card-shadow-hover transition-shadow"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-emerald/8 flex items-center justify-center group-hover:bg-emerald transition-colors">
                  <Icon className="w-5 h-5 text-emerald group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
