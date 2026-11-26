export interface TrainerFullProfile {
  id: string;
  name: string;
  role: string;
  experienceYears: string;
  experienceSummary: string;
  certifications: {
    code: string;
    title: string;
    issuer: string;
  }[];
  specializations: string[];
  philosophy: string;
  availability: string;
  image: string;
  featured?: boolean;
}

export const trainersData: TrainerFullProfile[] = [
  {
    id: "aarav-mehta",
    name: "Aarav Mehta",
    role: "Founder & Head Performance Coach",
    experienceYears: "10+ Years Experience",
    experienceSummary:
      "Over a decade coaching competitive lifters, corporate professionals, and first-time strength athletes across barbell mechanics and long-term body recomposition.",
    certifications: [
      {
        code: "NSCA-CSCS",
        title: "Certified Strength & Conditioning Specialist",
        issuer: "National Strength & Conditioning Association",
      },
      {
        code: "PN-L2",
        title: "Master Health & Performance Nutrition Coach",
        issuer: "Precision Nutrition",
      },
    ],
    specializations: [
      "Compound Barbell Strength",
      "Body Recomposition",
      "Program Periodization",
      "Movement Screening",
    ],
    philosophy:
      "Master the basics with strict technique, log every lift, and build sustainable nutrition habits you can actually keep for years.",
    availability: "Mon – Sat · Morning & Evening Slots",
    image: "/Images/Gym_owner.jpg",
    featured: true,
  },
  {
    id: "rohan-desai",
    name: "Rohan Desai",
    role: "Senior Strength & Hypertrophy Coach",
    experienceYears: "8+ Years Experience",
    experienceSummary:
      "Specializes in hypertrophy splits, progressive overload systems, and helping intermediate lifters break through stubborn strength and muscle plateaus.",
    certifications: [
      {
        code: "ACE-CPT",
        title: "Certified Personal Trainer",
        issuer: "American Council on Exercise",
      },
      {
        code: "ASCA-L1",
        title: "Strength & Conditioning Coach Level 1",
        issuer: "Australian Strength & Conditioning Association",
      },
    ],
    specializations: [
      "Muscle Building & Hypertrophy",
      "Powerlifting Foundations",
      "Weak-Point Accessory Work",
      "Progressive Overload Tracking",
    ],
    philosophy:
      "Consistent mechanical tension and clean form beat random high-fatigue workouts every single time.",
    availability: "Mon – Sat · 06:00 AM – 02:00 PM & 05:00 PM – 09:30 PM",
    image: "/Images/person Images/person_5.png",
  },
  {
    id: "kavya-nair",
    name: "Kavya Nair",
    role: "Transformation & Fat-Loss Specialist",
    experienceYears: "6+ Years Experience",
    experienceSummary:
      "Dedicated to sustainable fat loss, beginner confidence building, and structured strength-plus-conditioning plans tailored for busy schedules.",
    certifications: [
      {
        code: "NASM-CPT",
        title: "Certified Personal Trainer",
        issuer: "National Academy of Sports Medicine",
      },
      {
        code: "PN-L1",
        title: "Certified Nutrition Coach",
        issuer: "Precision Nutrition",
      },
    ],
    specializations: [
      "Sustainable Weight Loss",
      "Beginner Strength Onboarding",
      "Metabolic Conditioning",
      "Calorie & Habit Coaching",
    ],
    philosophy:
      "You do not need starvation diets or two-hour treadmill sessions—just structured resistance training and realistic protein targets.",
    availability: "Mon – Sat · 07:00 AM – 01:00 PM & 04:30 PM – 08:30 PM",
    image: "/Images/person Images/person_6.png",
  },
  {
    id: "vikram-rathore",
    name: "Vikram Rathore",
    role: "Athletic Conditioning & Mobility Coach",
    experienceYears: "7+ Years Experience",
    experienceSummary:
      "Leads high-output small-group turf circuits, sprint mechanics, and joint-resilience training for recreational athletes and desk professionals.",
    certifications: [
      {
        code: "FMS-L2",
        title: "Functional Movement Screen Specialist",
        issuer: "Functional Movement Systems",
      },
      {
        code: "ACE-GFI",
        title: "Group Fitness & Conditioning Instructor",
        issuer: "American Council on Exercise",
      },
    ],
    specializations: [
      "Functional Turf & Sleds",
      "Endurance & Engine Building",
      "Mobility & Injury Prevention",
      "Small-Group Conditioning",
    ],
    philosophy:
      "Move pain-free first, then build explosive engine, agility, and conditioning that carry over into everyday life.",
    availability: "Mon – Sat · 06:00 AM – 11:00 AM & 05:30 PM – 09:30 PM",
    image: "/Images/person Images/person_7.png",
  },
];