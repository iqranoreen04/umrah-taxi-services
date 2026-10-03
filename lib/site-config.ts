export const siteConfig = {
  name: "Safwa Rihla",
  tagline: "Premium Umrah & Hajj Transportation",
  description:
    "Reliable, comfortable, and hassle-free transportation for your sacred journey across Makkah, Madinah, and Jeddah.",
  url: "https://safwarihla.com",
  whatsapp: "966500000000",
  phone: "+966 50 000 0000",
  email: "info@safwarihla.com",
  address: "Makkah, Saudi Arabia",
  social: {
    twitter: "https://twitter.com/safwarihla",
    instagram: "https://instagram.com/safwarihla",
    facebook: "https://facebook.com/safwarihla",
    youtube: "https://youtube.com/@safwarihla",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Routes", href: "/routes" },
    { label: "Fleet", href: "/fleet" },
    { label: "Pricing", href: "/pricing" },
    { label: "Packages", href: "/packages" },
    { label: "Blog", href: "/blog" },
    { label: "FAQs", href: "/faqs" },
    { label: "Contact", href: "/contact" },
  ],
};

export type SiteConfig = typeof siteConfig;

export const whatsappNumber = siteConfig.whatsapp;

export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function buildWhatsAppBookingLink(data: {
  name?: string;
  pickup?: string;
  destination?: string;
  date?: string;
  time?: string;
  vehicle?: string;
  passengers?: string;
  luggage?: string;
  phone?: string;
  email?: string;
}): string {
  const lines = [
    "Assalamu Alaikum, I would like to book a ride:",
    "",
    data.name ? `Name: ${data.name}` : null,
    data.pickup ? `Pickup: ${data.pickup}` : null,
    data.destination ? `Destination: ${data.destination}` : null,
    data.date ? `Date: ${data.date}` : null,
    data.time ? `Time: ${data.time}` : null,
    data.vehicle ? `Vehicle: ${data.vehicle}` : null,
    data.passengers ? `Passengers: ${data.passengers}` : null,
    data.luggage ? `Luggage: ${data.luggage}` : null,
    data.phone ? `Phone: ${data.phone}` : null,
    data.email ? `Email: ${data.email}` : null,
    "",
    "Please confirm availability and pricing. Jazak Allah Khair.",
  ].filter(Boolean);
  return buildWhatsAppLink(lines.join("\n"));
}
