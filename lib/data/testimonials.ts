export interface Testimonial {
  name: string;
  country: string;
  rating: number;
  text: string;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Ahmed Al-Rashid",
    country: "United Kingdom",
    rating: 5,
    text: "The driver was waiting for us at Jeddah Airport with a name sign. The vehicle was clean and comfortable, and we reached Makkah smoothly. Excellent service from start to finish.",
  },
  {
    name: "Fatima Noor",
    country: "Indonesia",
    rating: 5,
    text: "We booked the family package for our Umrah trip. Everything was well-organized, from airport pickup to ziyarat. The driver was respectful and patient with our elderly parents.",
  },
  {
    name: "Mohammed Khan",
    country: "Pakistan",
    rating: 5,
    text: "Booked via WhatsApp and got a confirmation within minutes. The GMC Yukon was spacious for our family of six. Highly recommend for anyone traveling for Umrah.",
  },
  {
    name: "Sarah Abdullah",
    country: "Malaysia",
    rating: 5,
    text: "The Madinah Ziyarat tour was excellent. Our driver knew all the important sites and was very knowledgeable. The vehicle was comfortable and the timing was flexible.",
  },
  {
    name: "Yusuf Ibrahim",
    country: "Turkey",
    rating: 5,
    text: "Used their service for Makkah to Madinah transfer. The driver was professional and stopped for prayer when we asked. Very comfortable journey. Will use again.",
  },
  {
    name: "Aisha Rahman",
    country: "United States",
    rating: 5,
    text: "As a first-time Umrah pilgrim, I was nervous about transportation. The team made everything easy. The booking process was simple and the driver was punctual and kind.",
  },
  {
    name: "Omar Hassan",
    country: "Egypt",
    rating: 5,
    text: "We had a group of 22 people and booked the Coaster. The vehicle was spacious and comfortable. The driver was experienced and the coordination was seamless.",
  },
  {
    name: "Khadija Ali",
    country: "Canada",
    rating: 5,
    text: "The VIP package was worth every riyal. Premium SUV, professional chauffeur, and excellent service throughout. Made our Umrah journey stress-free and comfortable.",
  },
];
