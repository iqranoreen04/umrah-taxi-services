export interface Route {
  slug: string;
  title: string;
  from: string;
  to: string;
  distance: string;
  duration: string;
  description: string;
  startingPrice: number;
  vehicleTypes: string[];
  included: string[];
  image: string;
  faqs: { question: string; answer: string }[];
  popular?: boolean;
}

export const routes: Route[] = [
  {
    slug: "jeddah-airport-to-makkah",
    title: "Jeddah Airport to Makkah",
    from: "Jeddah Airport (JED)",
    to: "Makkah",
    distance: "~85 km",
    duration: "~60–75 min",
    description:
      "Direct airport pickup from King Abdulaziz International Airport to your hotel in Makkah. Meet-and-greet service available.",
    startingPrice: 150,
    vehicleTypes: ["Sedan", "SUV", "Van", "Minibus"],
    included: [
      "Airport meet and greet",
      "Flight tracking for delays",
      "Bottled water",
      "Free waiting time up to 60 min",
      "English & Arabic speaking driver",
    ],
    image:
      "https://images.pexels.com/photos/1719490/pexels-photo-1719490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    popular: true,
    faqs: [
      {
        question: "How long is the drive from Jeddah Airport to Makkah?",
        answer:
          "The journey typically takes 60 to 75 minutes depending on traffic conditions, covering approximately 85 kilometers.",
      },
      {
        question: "Will the driver track my flight?",
        answer:
          "Yes, we monitor your flight in real time and adjust pickup time automatically if your flight is delayed or arrives early.",
      },
      {
        question: "Can I book a large vehicle for my family?",
        answer:
          "Absolutely. We offer vans, minibuses, and full-size buses for families and groups of any size.",
      },
    ],
  },
  {
    slug: "makkah-to-jeddah-airport",
    title: "Makkah to Jeddah Airport",
    from: "Makkah",
    to: "Jeddah Airport (JED)",
    distance: "~85 km",
    duration: "~60–75 min",
    description:
      "Timely departure from your Makkah hotel to King Abdulaziz International Airport with plenty of time for check-in.",
    startingPrice: 150,
    vehicleTypes: ["Sedan", "SUV", "Van", "Minibus"],
    included: [
      "On-time pickup guarantee",
      "Luggage assistance",
      "Bottled water",
      "Comfortable seating",
      "Direct route to terminal",
    ],
    image:
      "https://images.pexels.com/photos/10999980/pexels-photo-10999980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    faqs: [
      {
        question: "How early should I leave Makkah for my flight?",
        answer:
          "We recommend leaving 4 hours before your departure time to allow for the drive and airport procedures.",
      },
      {
        question: "Do you provide child seats?",
        answer:
          "Child seats are available upon request at no additional charge. Please mention this when booking.",
      },
    ],
  },
  {
    slug: "makkah-to-madinah",
    title: "Makkah to Madinah",
    from: "Makkah",
    to: "Madinah",
    distance: "~420 km",
    duration: "~4–5 hours",
    description:
      "Comfortable intercity transfer between the two holy cities with rest stops along the way.",
    startingPrice: 450,
    vehicleTypes: ["Sedan", "SUV", "Van", "Minibus", "Bus"],
    included: [
      "Comfortable long-distance vehicle",
      "Rest stop on request",
      "Bottled water",
      "Experienced intercity driver",
      "Door-to-door service",
    ],
    image:
      "https://images.pexels.com/photos/10961006/pexels-photo-10961006.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    popular: true,
    faqs: [
      {
        question: "How long is the trip from Makkah to Madinah?",
        answer:
          "The journey covers approximately 420 kilometers and takes about 4 to 5 hours depending on traffic and rest stops.",
      },
      {
        question: "Can we stop for prayer during the trip?",
        answer:
          "Yes, the driver will stop at prayer areas or rest stops whenever you request. Just let the driver know.",
      },
      {
        question: "Is the price per vehicle or per person?",
        answer:
          "All our prices are per vehicle, not per person. You can fill the vehicle to its capacity for the same price.",
      },
    ],
  },
  {
    slug: "madinah-to-makkah",
    title: "Madinah to Makkah",
    from: "Madinah",
    to: "Makkah",
    distance: "~420 km",
    duration: "~4–5 hours",
    description:
      "Smooth transfer from your Madinah hotel to your accommodation in Makkah with experienced long-distance drivers.",
    startingPrice: 450,
    vehicleTypes: ["Sedan", "SUV", "Van", "Minibus", "Bus"],
    included: [
      "Comfortable long-distance vehicle",
      "Rest stop on request",
      "Bottled water",
      "Experienced intercity driver",
      "Door-to-door service",
    ],
    image:
      "https://images.pexels.com/photos/28170223/pexels-photo-28170223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    popular: true,
    faqs: [
      {
        question: "How long is the trip from Madinah to Makkah?",
        answer:
          "The journey covers approximately 420 kilometers and takes about 4 to 5 hours depending on traffic and rest stops.",
      },
      {
        question: "Can we stop at a miqat to assume Ihram?",
        answer:
          "Yes, the driver can stop at the appropriate miqat (Dhul Hulaifah / Abyar Ali) so you can assume Ihram before continuing to Makkah.",
      },
    ],
  },
  {
    slug: "jeddah-to-madinah",
    title: "Jeddah to Madinah",
    from: "Jeddah",
    to: "Madinah",
    distance: "~420 km",
    duration: "~4–5 hours",
    description:
      "Direct transfer from Jeddah city or airport to your hotel in Madinah with comfortable vehicles and professional drivers.",
    startingPrice: 450,
    vehicleTypes: ["Sedan", "SUV", "Van", "Minibus", "Bus"],
    included: [
      "Door-to-door service",
      "Bottled water",
      "Rest stop on request",
      "Experienced intercity driver",
      "Comfortable seating",
    ],
    image:
      "https://images.pexels.com/photos/21377912/pexels-photo-21377912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    faqs: [
      {
        question: "How long is the drive from Jeddah to Madinah?",
        answer:
          "The trip takes approximately 4 to 5 hours, covering about 420 kilometers.",
      },
      {
        question: "Can the driver pick us up from Jeddah Airport?",
        answer:
          "Yes, we provide direct pickup from King Abdulaziz International Airport to Madinah.",
      },
    ],
  },
  {
    slug: "madinah-airport-to-madinah",
    title: "Madinah Airport to Madinah Hotel",
    from: "Madinah Airport (MED)",
    to: "Madinah Hotel",
    distance: "~20 km",
    duration: "~20–30 min",
    description:
      "Quick and convenient transfer from Prince Mohammad bin Abdulaziz Airport to your hotel near the Prophet's Mosque.",
    startingPrice: 80,
    vehicleTypes: ["Sedan", "SUV", "Van"],
    included: [
      "Airport meet and greet",
      "Flight tracking",
      "Luggage assistance",
      "Quick direct route",
      "Bottled water",
    ],
    image:
      "https://images.pexels.com/photos/1730814/pexels-photo-1730814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    faqs: [
      {
        question: "How far is Madinah Airport from the Prophet's Mosque?",
        answer:
          "The airport is approximately 20 kilometers from the city center, a 20 to 30 minute drive depending on traffic.",
      },
      {
        question: "Can you drop us directly at our hotel?",
        answer:
          "Yes, we provide door-to-door service to any hotel in Madinah, including those near the Prophet's Mosque.",
      },
    ],
  },
  {
    slug: "makkah-to-taif",
    title: "Makkah to Taif",
    from: "Makkah",
    to: "Taif",
    distance: "~170 km",
    duration: "~2.5–3 hours",
    description:
      "Scenic mountain transfer from Makkah to Taif, known for its cooler climate and beautiful landscapes.",
    startingPrice: 280,
    vehicleTypes: ["Sedan", "SUV", "Van"],
    included: [
      "Scenic mountain route",
      "Comfortable vehicle",
      "Bottled water",
      "Experienced driver",
      "Door-to-door service",
    ],
    image:
      "https://images.pexels.com/photos/14989848/pexels-photo-14989848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    faqs: [
      {
        question: "Is the road to Taif safe?",
        answer:
          "Yes, the road to Taif is well-maintained and our drivers are experienced with mountain driving. The route is scenic and safe.",
      },
      {
        question: "What is Taif known for?",
        answer:
          "Taif is known for its cooler climate, rose farms, and beautiful mountain scenery. It is a popular summer destination.",
      },
    ],
  },
  {
    slug: "madinah-ziyarat",
    title: "Madinah Ziyarat",
    from: "Madinah",
    to: "Historical Sites",
    distance: "Various",
    duration: "~3–4 hours",
    description:
      "Guided ziyarat tour to the significant historical and religious sites in and around Madinah with flexible timing.",
    startingPrice: 200,
    vehicleTypes: ["Sedan", "SUV", "Van", "Minibus"],
    included: [
      "Experienced local driver",
      "Flexible timing",
      "Visit key ziyarat sites",
      "Comfortable vehicle",
      "Door-to-door service",
    ],
    image:
      "https://images.pexels.com/photos/3926213/pexels-photo-3926213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    popular: true,
    faqs: [
      {
        question: "Which sites are included in the Madinah Ziyarat tour?",
        answer:
          "Typically includes Quba Mosque, Uhud, Masjid Qiblatain, and other significant sites. The itinerary can be customized.",
      },
      {
        question: "How long does the ziyarat take?",
        answer:
          "A typical ziyarat tour takes 3 to 4 hours, but timing is flexible and can be adjusted to your preference.",
      },
    ],
  },
  {
    slug: "makkah-ziyarat",
    title: "Makkah Ziyarat",
    from: "Makkah",
    to: "Historical Sites",
    distance: "Various",
    duration: "~3–4 hours",
    description:
      "Guided ziyarat tour to the important historical sites around Makkah including Jabal al-Nour, Arafat, Mina, and more.",
    startingPrice: 200,
    vehicleTypes: ["Sedan", "SUV", "Van", "Minibus"],
    included: [
      "Experienced local driver",
      "Flexible timing",
      "Visit key ziyarat sites",
      "Comfortable vehicle",
      "Door-to-door service",
    ],
    image:
      "https://images.pexels.com/photos/19174886/pexels-photo-19174886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    popular: true,
    faqs: [
      {
        question: "Which sites are included in the Makkah Ziyarat tour?",
        answer:
          "Typically includes Jabal al-Nour, Arafat, Mina, Muzdalifah, and other significant sites. The itinerary is customizable.",
      },
      {
        question: "Can we customize the ziyarat itinerary?",
        answer:
          "Yes, the itinerary is fully flexible. Let the driver know which sites you would like to visit and they will accommodate.",
      },
    ],
  },
];

export function getRoute(slug: string): Route | undefined {
  return routes.find((r) => r.slug === slug);
}

export const popularRoutes = routes.filter((r) => r.popular);
