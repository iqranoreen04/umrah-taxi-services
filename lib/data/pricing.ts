export interface PricingItem {
  route: string;
  sedan: number | string;
  suv: number | string;
  van: number | string;
  minibus: number | string;
  bus: number | string;
}

export interface PricingCategory {
  id: string;
  title: string;
  description: string;
  items: PricingItem[];
}

export const pricingCategories: PricingCategory[] = [
  {
    id: "airport-transfers",
    title: "Airport Transfers",
    description: "Pickup and drop-off at Jeddah and Madinah airports.",
    items: [
      { route: "Jeddah Airport → Makkah", sedan: 150, suv: 250, van: 220, minibus: 350, bus: 600 },
      { route: "Makkah → Jeddah Airport", sedan: 150, suv: 250, van: 220, minibus: 350, bus: 600 },
      { route: "Jeddah Airport → Madinah", sedan: 450, suv: 650, van: 550, minibus: 800, bus: 1200 },
      { route: "Madinah Airport → Madinah Hotel", sedan: 80, suv: 150, van: 120, minibus: 250, bus: "—" },
      { route: "Madinah Airport → Makkah", sedan: 500, suv: 700, van: 600, minibus: 850, bus: 1300 },
    ],
  },
  {
    id: "intercity-transfers",
    title: "Intercity Transfers",
    description: "Travel between the holy cities in comfort.",
    items: [
      { route: "Makkah → Madinah", sedan: 450, suv: 650, van: 550, minibus: 800, bus: 1200 },
      { route: "Madinah → Makkah", sedan: 450, suv: 650, van: 550, minibus: 800, bus: 1200 },
      { route: "Makkah → Taif", sedan: 280, suv: 400, van: 350, minibus: 500, bus: "—" },
      { route: "Jeddah → Makkah", sedan: 150, suv: 250, van: 220, minibus: 350, bus: 600 },
      { route: "Jeddah → Madinah", sedan: 450, suv: 650, van: 550, minibus: 800, bus: 1200 },
    ],
  },
  {
    id: "ziyarat",
    title: "Ziyarat Tours",
    description: "Guided tours to historical and religious sites.",
    items: [
      { route: "Makkah Ziyarat (3–4 hrs)", sedan: 200, suv: 300, van: 280, minibus: 400, bus: 700 },
      { route: "Madinah Ziyarat (3–4 hrs)", sedan: 200, suv: 300, van: 280, minibus: 400, bus: 700 },
      { route: "Extended Ziyarat (Full Day)", sedan: 400, suv: 550, van: 500, minibus: 700, bus: 1100 },
    ],
  },
  {
    id: "train-station",
    title: "Train Station Transfers",
    description: "Haramain High Speed Railway station pickup and drop-off.",
    items: [
      { route: "Makkah Station → Hotel", sedan: 60, suv: 120, van: 100, minibus: 200, bus: "—" },
      { route: "Madinah Station → Hotel", sedan: 60, suv: 120, van: 100, minibus: 200, bus: "—" },
      { route: "Jeddah Station → Hotel", sedan: 60, suv: 120, van: 100, minibus: 200, bus: "—" },
    ],
  },
  {
    id: "hourly-hire",
    title: "Hourly Hire",
    description: "Book a chauffeur by the hour for flexible travel.",
    items: [
      { route: "Sedan (per hour)", sedan: 80, suv: "—", van: "—", minibus: "—", bus: "—" },
      { route: "SUV (per hour)", sedan: "—", suv: 120, van: "—", minibus: "—", bus: "—" },
      { route: "Van (per hour)", sedan: "—", suv: "—", van: 100, minibus: "—", bus: "—" },
      { route: "Minibus (per hour)", sedan: "—", suv: "—", van: "—", minibus: 150, bus: "—" },
      { route: "Bus (per hour)", sedan: "—", suv: "—", van: "—", minibus: "—", bus: 250 },
    ],
  },
  {
    id: "vip-vehicles",
    title: "VIP / Premium Vehicles",
    description: "Luxury vehicles with professional chauffeurs.",
    items: [
      { route: "GMC Yukon (Airport)", sedan: "—", suv: 350, van: "—", minibus: "—", bus: "—" },
      { route: "GMC Yukon (Intercity)", sedan: "—", suv: 700, van: "—", minibus: "—", bus: "—" },
      { route: "GMC Yukon (Hourly)", sedan: "—", suv: 150, van: "—", minibus: "—", bus: "—" },
    ],
  },
  {
    id: "group-transportation",
    title: "Group Transportation",
    description: "Vans, minibuses, and buses for groups.",
    items: [
      { route: "Van (12 seats)", sedan: "—", suv: "—", van: 200, minibus: "—", bus: "—" },
      { route: "Coaster (22 seats)", sedan: "—", suv: "—", van: "—", minibus: 350, bus: "—" },
      { route: "King Long Bus (45 seats)", sedan: "—", suv: "—", van: "—", minibus: "—", bus: 600 },
    ],
  },
];

export const pricingNote =
  "Prices may vary depending on date, vehicle availability, and special requirements. All prices are in SAR (Saudi Riyal).";
