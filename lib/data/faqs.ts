export interface FAQ {
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQ[] = [
  {
    category: "Booking",
    question: "How do I book an Umrah taxi?",
    answer:
      "You can book through our website's booking form, via WhatsApp, or by calling us directly. Simply choose your route, select a vehicle, and confirm your booking. Our team will confirm within minutes.",
  },
  {
    category: "Booking",
    question: "How far in advance should I book?",
    answer:
      "We recommend booking at least 24 hours in advance to ensure vehicle availability, especially during peak Umrah and Hajj seasons. However, we also accept last-minute bookings subject to availability.",
  },
  {
    category: "Booking",
    question: "Can I book through WhatsApp?",
    answer:
      "Yes, WhatsApp is one of the easiest ways to book. Click any 'Book via WhatsApp' button on our website, and a pre-filled message with your trip details will be generated automatically.",
  },
  {
    category: "Services",
    question: "Do you provide airport pickup?",
    answer:
      "Yes, we provide airport pickup at both King Abdulaziz International Airport in Jeddah and Prince Mohammad bin Abdulaziz Airport in Madinah, with flight tracking and meet-and-greet service.",
  },
  {
    category: "Services",
    question: "Can I book transportation from Jeddah Airport?",
    answer:
      "Absolutely. We provide direct transfers from Jeddah Airport to Makkah, Madinah, or any hotel in the region. Our drivers track your flight and adjust for delays.",
  },
  {
    category: "Services",
    question: "Do you provide Makkah to Madinah transfers?",
    answer:
      "Yes, we offer comfortable intercity transfers between Makkah and Madinah with a range of vehicles from sedans to full-size buses. The journey takes approximately 4 to 5 hours.",
  },
  {
    category: "Services",
    question: "Can I book a vehicle for Ziyarat?",
    answer:
      "Yes, we offer guided Ziyarat tours in both Makkah and Madinah. Our experienced drivers will take you to the significant historical and religious sites with flexible timing.",
  },
  {
    category: "Services",
    question: "Do you provide transportation for families?",
    answer:
      "Yes, we are family-friendly. Child seats are available upon request at no additional charge, and our drivers are patient and courteous with families.",
  },
  {
    category: "Vehicles",
    question: "What vehicles are available?",
    answer:
      "Our fleet includes Toyota Camry sedans, GMC Yukon SUVs, Hyundai Staria vans, Toyota Hiace vans, Toyota Coaster minibuses, and full-size buses. View our Fleet page for details.",
  },
  {
    category: "Vehicles",
    question: "Can I book a large group vehicle?",
    answer:
      "Yes, we offer Toyota Hiace (12 seats), Toyota Coaster (22 seats), and full-size buses (45 seats) for groups of any size. We also coordinate with tour operators.",
  },
  {
    category: "Support",
    question: "Do you provide 24/7 support?",
    answer:
      "Yes, our customer support is available 24 hours a day, 7 days a week. You can reach us via WhatsApp, phone, or email at any time.",
  },
  {
    category: "Payment",
    question: "What payment methods are available?",
    answer:
      "We accept cash (SAR), bank transfers, and major credit cards. Payment is typically made after the service is completed, though advance payment can be arranged for groups.",
  },
];
