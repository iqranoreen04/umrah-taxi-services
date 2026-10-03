export interface Package {
  slug: string;
  name: string;
  idealFor: string;
  duration: string;
  startingPrice: number;
  included: string[];
  vehicleOptions: string[];
  popular?: boolean;
  image: string;
}

export const packages: Package[] = [
  {
    slug: "umrah-family-package",
    name: "Umrah Family Package",
    idealFor: "Families of 4–7",
    duration: "5–7 days",
    startingPrice: 1200,
    included: [
      "Jeddah Airport → Makkah transfer",
      "Makkah hotel → Madinah transfer",
      "Madinah Ziyarat tour",
      "Madinah → Jeddah Airport transfer",
      "Bottled water in all vehicles",
      "English & Arabic speaking drivers",
    ],
    vehicleOptions: ["Toyota Camry", "GMC Yukon", "Hyundai Staria"],
    popular: true,
    image:
      "https://images.pexels.com/photos/4173213/pexels-photo-4173213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    slug: "makkah-madinah-transfer-package",
    name: "Makkah + Madinah Transfer Package",
    idealFor: "Individuals and families",
    duration: "Flexible",
    startingPrice: 900,
    included: [
      "Airport pickup",
      "Intercity transfer Makkah ↔ Madinah",
      "Airport drop-off",
      "Choice of vehicle",
      "Flight tracking",
    ],
    vehicleOptions: ["Toyota Camry", "GMC Yukon", "Hyundai Staria", "Toyota Hiace"],
    image:
      "https://images.pexels.com/photos/10961006/pexels-photo-10961006.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    slug: "vip-umrah-package",
    name: "VIP Umrah Package",
    idealFor: "VIPs and executives",
    duration: "Flexible",
    startingPrice: 2500,
    included: [
      "Premium SUV (GMC Yukon)",
      "Professional chauffeur",
      "Airport meet and greet",
      "All intercity transfers",
      "Ziyarat tours",
      "Bottled water and refreshments",
      "Priority booking",
    ],
    vehicleOptions: ["GMC Yukon", "Mercedes V-Class (on request)"],
    popular: true,
    image:
      "https://images.pexels.com/photos/36498953/pexels-photo-36498953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    slug: "airport-hotel-transfer-package",
    name: "Airport + Hotel Transfer Package",
    idealFor: "Short-stay pilgrims",
    duration: "2–3 days",
    startingPrice: 500,
    included: [
      "Airport pickup",
      "Hotel drop-off",
      "Return airport transfer",
      "Flight tracking",
      "Meet and greet",
    ],
    vehicleOptions: ["Toyota Camry", "GMC Yukon", "Hyundai Staria"],
    image:
      "https://images.pexels.com/photos/1719490/pexels-photo-1719490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    slug: "makkah-ziyarat-package",
    name: "Makkah Ziyarat Package",
    idealFor: "Pilgrims in Makkah",
    duration: "3–4 hours",
    startingPrice: 200,
    included: [
      "Guided ziyarat tour",
      "Visit Jabal al-Nour, Arafat, Mina, Muzdalifah",
      "Experienced local driver",
      "Flexible timing",
      "Door-to-door service",
    ],
    vehicleOptions: ["Toyota Camry", "GMC Yukon", "Hyundai Staria", "Toyota Hiace"],
    image:
      "https://images.pexels.com/photos/19174886/pexels-photo-19174886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    slug: "madinah-ziyarat-package",
    name: "Madinah Ziyarat Package",
    idealFor: "Pilgrims in Madinah",
    duration: "3–4 hours",
    startingPrice: 200,
    included: [
      "Guided ziyarat tour",
      "Visit Quba Mosque, Uhud, Masjid Qiblatain",
      "Experienced local driver",
      "Flexible timing",
      "Door-to-door service",
    ],
    vehicleOptions: ["Toyota Camry", "GMC Yukon", "Hyundai Staria", "Toyota Hiace"],
    image:
      "https://images.pexels.com/photos/3926213/pexels-photo-3926213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    slug: "group-umrah-transportation",
    name: "Group Umrah Transportation",
    idealFor: "Groups of 12–45",
    duration: "Flexible",
    startingPrice: 1800,
    included: [
      "All airport transfers",
      "Intercity transfers",
      "Ziyarat tours",
      "Large-capacity vehicle",
      "Professional driver",
      "Coordination for group leaders",
    ],
    vehicleOptions: ["Toyota Hiace", "Toyota Coaster", "Large Bus"],
    image:
      "https://images.pexels.com/photos/20277839/pexels-photo-20277839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    slug: "hajj-transportation-package",
    name: "Hajj Transportation Package",
    idealFor: "Hajj groups",
    duration: "5–7 days",
    startingPrice: 3500,
    included: [
      "All transfers during Hajj",
      "Mina, Arafat, Muzdalifah transportation",
      "Large-capacity vehicle",
      "Experienced Hajj driver",
      "Group coordination",
      "Flexible scheduling",
    ],
    vehicleOptions: ["Toyota Coaster", "Large Bus"],
    popular: true,
    image:
      "https://images.pexels.com/photos/38546878/pexels-photo-38546878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];
