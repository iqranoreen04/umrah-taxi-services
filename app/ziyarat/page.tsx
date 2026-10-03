"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, MessageCircle } from "lucide-react";
import PageHero from "@/components/site/page-hero";
import CTASection from "@/components/site/cta-section";
import { buildWhatsAppLink } from "@/lib/site-config";

const tours = [
  {
    id: "makkah-ziyarat",
    title: "Makkah Ziyarat",
    duration: "3–4 hours",
    price: 200,
    image:
      "https://images.pexels.com/photos/19174886/pexels-photo-19174886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "Visit the significant historical and religious sites in and around Makkah with an experienced local driver and flexible timing.",
    sites: [
      "Jabal al-Nour (Cave of Hira)",
      "Jabal Thawr",
      "Mount Arafat (Jabal al-Rahmah)",
      "Muzdalifah",
      "Mina",
      "Masjid al-Jinn",
    ],
  },
  {
    id: "madinah-ziyarat",
    title: "Madinah Ziyarat",
    duration: "3–4 hours",
    price: 200,
    image:
      "https://images.pexels.com/photos/3926213/pexels-photo-3926213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "Visit the blessed historical sites of Madinah in a comfortable vehicle with a driver who knows the city well.",
    sites: [
      "Masjid Quba",
      "Masjid al-Qiblatayn",
      "Mount Uhud & Martyrs' Cemetery",
      "Seven Mosques (Khandaq)",
      "Date farms",
      "Masjid al-Ghamama",
    ],
  },
];

export default function ZiyaratPage() {
  return (
    <>
      <PageHero
        eyebrow="Ziyarat Tours"
        title="Guided Ziyarat in Makkah & Madinah"
        description="Comfortable, door-to-door tours of the holy sites with experienced local drivers."
      />

      <section className="section-py">
        <div className="container-mx container-px space-y-12">
          {tours.map((t, i) => (
            <motion.div
              key={t.id}
              id={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="scroll-mt-24 grid lg:grid-cols-2 gap-8 items-center rounded-3xl border border-border bg-white p-6 card-shadow"
            >
              <div className={i % 2 ? "lg:order-2" : ""}>
                <img src={t.image} alt={t.title} className="w-full h-72 object-cover rounded-2xl" />
              </div>
              <div>
                <h2 className="font-display text-3xl font-bold mb-3">{t.title}</h2>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <span className="inline-flex items-center gap-1.5"><Clock className="w-4 h-4 text-emerald" />{t.duration}</span>
                  <span className="font-semibold text-emerald">From SAR {t.price}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-5">{t.description}</p>
                <ul className="grid sm:grid-cols-2 gap-2 mb-6">
                  {t.sites.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-gold shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
                <a
                  href={buildWhatsAppLink(`I would like to book a ${t.title} tour`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] text-white font-semibold hover:bg-[#1faa4f] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Book via WhatsApp
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
