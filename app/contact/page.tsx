"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail, MapPin, Clock, Send } from "lucide-react";
import PageHero from "@/components/site/page-hero";
import { siteConfig, buildWhatsAppLink } from "@/lib/site-config";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const update = (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      "Assalamu Alaikum, I have an inquiry:",
      "",
      `Name: ${form.name}`,
      form.phone ? `Phone: ${form.phone}` : null,
      form.email ? `Email: ${form.email}` : null,
      "",
      form.message,
    ].filter((l) => l !== null);
    window.open(buildWhatsAppLink(lines.join("\n")), "_blank");
  };

  const cards = [
    { icon: Phone, label: "Call Us", value: siteConfig.phone, href: siteConfig.phoneHref },
    { icon: MessageCircle, label: "WhatsApp", value: siteConfig.phone, href: `https://wa.me/${siteConfig.whatsapp}` },
    { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { icon: MapPin, label: "Location", value: siteConfig.address },
    { icon: Clock, label: "Hours", value: "24 hours, 7 days a week" },
  ];

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-border bg-white text-sm focus:outline-none focus:border-emerald focus:ring-2 focus:ring-emerald/20 transition";

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="We Are Here to Help, 24/7"
        description="Questions about routes, vehicles, or prices? Reach us by phone, WhatsApp, or email."
      />

      <section className="section-py">
        <div className="container-mx container-px grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-4">
            {cards.map((c) => {
              const inner = (
                <>
                  <div className="w-11 h-11 rounded-xl bg-emerald/10 flex items-center justify-center shrink-0">
                    <c.icon className="w-5 h-5 text-emerald" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-muted-foreground">{c.label}</div>
                    <div className="font-semibold break-words">{c.value}</div>
                  </div>
                </>
              );
              const cls = "flex items-center gap-4 rounded-2xl border border-border bg-white p-4 card-shadow";
              return c.href ? (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={`${cls} hover:border-emerald transition-colors`}
                >
                  {inner}
                </a>
              ) : (
                <div key={c.label} className={cls}>{inner}</div>
              );
            })}
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 rounded-3xl border border-border bg-white p-6 sm:p-8 card-shadow space-y-4"
          >
            <h2 className="font-display text-2xl font-bold">Send Us a Message</h2>
            <p className="text-sm text-muted-foreground">
              Your message will open in WhatsApp so our team can reply right away.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <input required placeholder="Your name" value={form.name} onChange={update("name")} className={inputClass} />
              <input placeholder="Phone / WhatsApp" value={form.phone} onChange={update("phone")} className={inputClass} />
            </div>
            <input type="email" placeholder="you@email.com" value={form.email} onChange={update("email")} className={inputClass} />
            <textarea required rows={5} placeholder="How can we help?" value={form.message} onChange={update("message")} className={inputClass} />
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] text-white font-semibold hover:bg-[#1faa4f] transition-colors"
            >
              <Send className="w-4 h-4" />
              Send via WhatsApp
            </button>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-2 pt-3 border-t border-border text-sm text-muted-foreground">
              <a href={siteConfig.phoneHref} className="inline-flex items-center gap-1.5 hover:text-emerald">
                <Phone className="w-4 h-4 text-emerald" />
                {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-1.5 hover:text-emerald">
                <Mail className="w-4 h-4 text-emerald" />
                {siteConfig.email}
              </a>
            </div>
          </motion.form>
        </div>
      </section>
    </>
  );
}
