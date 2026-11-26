export interface FacilityZoneDetail {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  equipmentList: string[];
  image: string;
  category: "Strength" | "Cardio" | "Functional" | "Recovery & Amenities";
}

export interface EquipmentGalleryItem {
  id: string;
  name: string;
  zone: "Strength Zone" | "Cardio Zone" | "Functional Turf" | "Lockers & Showers";
  specs: string;
  image: string;
}

export const facilityZonesData: FacilityZoneDetail[] = [
  {
    id: "strength-zone",
    number: "01",
    title: "Strength Zone",
    subtitle: "Calibrated Iron, Power Racks & Free Weights",
    description:
      "Engineered for serious progressive overload with competition-grade power racks, deadlift platforms, calibrated steel plates, and an expansive dumbbell wall so lifters never waste sets waiting for equipment.",
    highlights: [
      "Olympic Lifting Platforms",
      "5–50 kg Dumbbell Run",
      "Plate-Loaded Leverage Machines",
    ],
    equipmentList: [
      "Heavy-Duty Half & Full Power Racks with Band Pegs",
      "Shock-Absorbing Oak & Rubber Deadlift Platforms",
      "Calibrated Bumper Plates & 20 kg Power Barbells",
      "Incline, Decline & Flat Adjustable Competition Benches",
      "Dual-Stack Cable Crossover & Iso-Lateral Plate Machines",
    ],
    image: "/Images/free weights.jpeg",
    category: "Strength",
  },
  {
    id: "cardio-zone",
    number: "02",
    title: "Cardio Zone",
    subtitle: "Endurance, Stamina & Metabolic Conditioning",
    description:
      "Dedicated low-impact and high-output endurance deck outfitted with commercial slat treadmills, rowing ergometers, stair climbers, and air bikes for heart-rate training and active recovery.",
    highlights: [
      "Commercial Slat Treadmills",
      "Rowing Ergometers",
      "Assault Air Bikes",
    ],
    equipmentList: [
      "Commercial Shock-Absorbing Treadmills with Incline Control",
      "Air-Resistance Rowing Ergometers for Full-Body Conditioning",
      "Heavy-Duty Assault Air Bikes for HIIT Intervals",
      "Stair Climbers & Upright/Recumbent Ergometer Bikes",
      "Dedicated Stretching & Heart-Rate Cooldown Mats",
    ],
    image: "/Images/cardio.jpeg",
    category: "Cardio",
  },
  {
    id: "functional-turf",
    number: "03",
    title: "Functional Turf",
    subtitle: "Athletic Speed, Sled Work & Mobility",
    description:
      "High-density shock-absorbing indoor sprint turf designed for weighted sled pushes, kettlebell flows, battle ropes, and small-group athletic conditioning sessions.",
    highlights: [
      "Indoor Sprint Turf Track",
      "Weighted Prowler Sleds",
      "Kettlebells & Plyo Boxes",
    ],
    equipmentList: [
      "20-Meter Marked Sprint & Sled Push Turf Track",
      "Weighted Prowler Sleds & Harness Attachments",
      "Cast-Iron Kettlebell Rack (8 kg to 32 kg)",
      "Soft Plyometric Boxes, Slam Balls & Battle Ropes",
      "Mobility Foam Rollers, Resistance Bands & Pull-Up Rig",
    ],
    image: "/Images/Turf Zone.jpeg",
    category: "Functional",
  },
  {
    id: "lockers-and-showers",
    number: "04",
    title: "Locker Rooms & Showers",
    subtitle: "Private Changing Suites & Hot Rain Showers",
    description:
      "Clean, spacious changing suites equipped with secure personal lockers, private walk-in hot rain showers, and grooming stations so you can transition smoothly from training to work.",
    highlights: [
      "Private Hot Rain Showers",
      "Secure Personal Lockers",
      "Grooming & Changing Lounge",
    ],
    equipmentList: [
      "Private Walk-In Shower Cubicles with Instant Hot Water",
      "Full-Height Ventilated Day Lockers for Gym Bags",
      "Well-Lit Vanity Mirrors, Hair Dryers & Grooming Counters",
      "Sanitized Changing Benches & Slip-Resistant Flooring",
      "Filtered Chilled Hydration Station Outside Lounge",
    ],
    image: "/Images/Shower.jpeg",
    category: "Recovery & Amenities",
  },
];

export const equipmentGalleryData: EquipmentGalleryItem[] = [
  {
    id: "eq-1",
    name: "Power Racks & Olympic Barbells",
    zone: "Strength Zone",
    specs: "Competition J-hooks, safety spotter arms & calibrated plates",
    image: "/Images/free weights.jpeg",
  },
  {
    id: "eq-2",
    name: "Dumbbell & Free-Weight Floor",
    zone: "Strength Zone",
    specs: "Full commercial dumbbell run with heavy-duty adjustable benches",
    image: "/Images/hero_section_bg.png",
  },
  {
    id: "eq-3",
    name: "Endurance Treadmills & Ergometers",
    zone: "Cardio Zone",
    specs: "Commercial treadmills, rowers & interval conditioning bikes",
    image: "/Images/cardio.jpeg",
  },
  {
    id: "eq-4",
    name: "Sprint Turf, Sleds & Kettlebells",
    zone: "Functional Turf",
    specs: "Shock-absorbing turf lane with prowlers, ropes & plyo boxes",
    image: "/Images/Turf Zone.jpeg",
  },
  {
    id: "eq-5",
    name: "Private Shower Suites & Lockers",
    zone: "Lockers & Showers",
    specs: "Sanitized walk-in rain showers, digital lockers & vanity lounge",
    image: "/Images/Shower.jpeg",
  },
  {
    id: "eq-6",
    name: "Plate-Loaded & Cable Stations",
    zone: "Strength Zone",
    specs: "Biomechanically aligned leverage machines & dual pulley towers",
    image: "/Images/free weights.jpeg",
  },
];