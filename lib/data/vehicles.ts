export interface Vehicle {
  slug: string;
  name: string;
  category: string;
  image: string;
  passengers: number;
  luggage: number;
  fuelType: string;
  transmission: string;
  idealFor: string;
  startingPrice: number;
  features: string[];
  description: string;
}

export const vehicles: Vehicle[] = [
  {
    slug: "toyota-camry",
    name: "Toyota Camry",
    category: "Sedan",
    image:
      "https://images.pexels.com/photos/11285174/pexels-photo-11285174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    passengers: 4,
    luggage: 3,
    fuelType: "Petrol / Hybrid",
    transmission: "Automatic",
    idealFor: "Individuals, couples, and small families",
    startingPrice: 150,
    features: [
      "Air conditioning",
      "Comfortable leather seats",
      "Phone charging",
      "Bottled water",
      "English & Arabic speaking driver",
    ],
    description:
      "A reliable and comfortable sedan perfect for individuals, couples, and small families. The Toyota Camry offers a smooth ride with ample legroom and modern amenities.",
  },
  {
    slug: "gmc-yukon",
    name: "GMC Yukon",
    category: "Premium SUV",
    image:
      "https://images.pexels.com/photos/14471686/pexels-photo-14471686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    passengers: 7,
    luggage: 5,
    fuelType: "Petrol",
    transmission: "Automatic",
    idealFor: "Families, VIPs, and small groups",
    startingPrice: 280,
    features: [
      "Premium leather interior",
      "Tri-zone climate control",
      "Spacious third-row seating",
      "Phone charging ports",
      "Bottled water",
      "Professional chauffeur",
    ],
    description:
      "A premium SUV offering luxury and space for larger families or VIP travelers. The GMC Yukon provides exceptional comfort with its spacious interior and premium finishes.",
  },
  {
    slug: "hyundai-staria",
    name: "Hyundai Staria",
    category: "Premium Van",
    image:
      "https://images.pexels.com/photos/39075475/pexels-photo-39075475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    passengers: 9,
    luggage: 8,
    fuelType: "Diesel",
    transmission: "Automatic",
    idealFor: "Large families and small groups",
    startingPrice: 220,
    features: [
      "Spacious cabin",
      "Individual captain seats",
      "Rear air conditioning",
      "Large luggage space",
      "Phone charging",
      "Bottled water",
    ],
    description:
      "A modern premium van designed for comfort on long journeys. The Hyundai Staria offers generous space for passengers and luggage, making it ideal for families and small groups.",
  },
  {
    slug: "toyota-hiace",
    name: "Toyota Hiace",
    category: "Van",
    image:
      "https://images.pexels.com/photos/35491084/pexels-photo-35491084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    passengers: 12,
    luggage: 10,
    fuelType: "Diesel",
    transmission: "Manual / Automatic",
    idealFor: "Groups and large families",
    startingPrice: 200,
    features: [
      "High roof for comfort",
      "Air conditioning",
      "Large luggage capacity",
      "Comfortable seating",
      "Bottled water",
    ],
    description:
      "A dependable and spacious van for groups and large families. The Toyota Hiace is known for its reliability and generous capacity for both passengers and luggage.",
  },
  {
    slug: "coaster",
    name: "Toyota Coaster",
    category: "Mini Bus",
    image:
      "https://images.pexels.com/photos/16180485/pexels-photo-16180485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    passengers: 22,
    luggage: 20,
    fuelType: "Diesel",
    transmission: "Manual",
    idealFor: "Medium to large groups",
    startingPrice: 350,
    features: [
      "High capacity seating",
      "Air conditioning",
      "Ample luggage space",
      "Comfortable seats",
      "Professional driver",
    ],
    description:
      "A comfortable mini bus for medium to large groups. The Toyota Coaster provides reliable group transportation with air conditioning and ample space for luggage.",
  },
  {
    slug: "bus",
    name: "Large Bus",
    category: "Bus",
    image:
      "https://images.pexels.com/photos/29566879/pexels-photo-29566879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    passengers: 45,
    luggage: 45,
    fuelType: "Diesel",
    transmission: "Manual",
    idealFor: "Large groups and tour operators",
    startingPrice: 600,
    features: [
      "Full-size coach",
      "Air conditioning",
      "Large luggage compartments",
      "Reclining seats",
      "Professional driver",
      "Ideal for Hajj groups",
    ],
    description:
      "A full-size bus for large groups and tour operators. Ideal for Hajj and Umrah groups, with comfortable reclining seats and large luggage compartments.",
  },
];

export function getVehicle(slug: string): Vehicle | undefined {
  return vehicles.find((v) => v.slug === slug);
}
