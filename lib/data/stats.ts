export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 24, suffix: "/7", label: "Customer Support" },
  { value: 50, suffix: "+", label: "Professional Drivers" },
  { value: 6, suffix: "", label: "Vehicle Options" },
  { value: 10000, suffix: "+", label: "Pilgrims Served" },
];
