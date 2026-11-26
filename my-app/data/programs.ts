export interface TrainingProgramDetail {
  slug: string;
  number: string;
  title: string;
  tagline: string;
  targetAudience: string;
  duration: string;
  frequency: string;
  sessionLength: string;
  intensity: "Beginner Friendly" | "All Levels" | "Moderate to High" | "High Intensity";
  summary: string;
  image: string;
  whoIsItFor: string[];
  whatYouGet: string[];
  weeklyStructure: {
    day: string;
    focus: string;
  }[];
}

export const trainingProgramsData: TrainingProgramDetail[] = [
  {
    slug: "weight-loss",
    number: "01",
    title: "Weight Loss",
    tagline: "Sustainable Fat Loss Without Crash Dieting",
    targetAudience: "For sustainable fat loss & metabolic conditioning",
    duration: "12–16 Weeks",
    frequency: "4–5 Days / Week",
    sessionLength: "50–60 Mins",
    intensity: "Moderate to High",
    summary:
      "A strength-first fat-loss track combining resistance training, metabolic turf circuits, and realistic calorie targets so you drop body fat while keeping lean muscle and daily energy high.",
    image: "/Images/training program/weight loss.webp",
    whoIsItFor: [
      "Beginners or busy professionals wanting steady, sustainable fat loss",
      "Lifters who hit a plateau with random cardio-only routines",
      "Anyone looking to improve stamina, waist-to-hip ratio, and metabolic health",
    ],
    whatYouGet: [
      "Personalized daily calorie and protein targets (no extreme restriction)",
      "3 resistance training sessions + 2 conditioning intervals weekly",
      "Bi-weekly body composition, weight, and measurement check-ins",
      "Coach accountability and habit tracking inside Auren",
    ],
    weeklyStructure: [
      { day: "Day 01", focus: "Lower Body Strength + Sled Conditioning" },
      { day: "Day 02", focus: "Upper Body Push/Pull + Core Stability" },
      { day: "Day 03", focus: "Active Recovery / Low-Impact Ergometer" },
      { day: "Day 04", focus: "Full-Body Metabolic Circuit & Kettlebells" },
      { day: "Day 05", focus: "Posterior Chain + Interval Finishers" },
    ],
  },
  {
    slug: "muscle-building",
    number: "02",
    title: "Muscle Building",
    tagline: "Structured Hypertrophy & Progressive Overload",
    targetAudience: "For hypertrophy, symmetry & lean mass gain",
    duration: "12–24 Weeks",
    frequency: "4–5 Days / Week",
    sessionLength: "60–75 Mins",
    intensity: "Moderate to High",
    summary:
      "Engineered around mechanical tension, controlled eccentric execution, and tracked weekly volume so every muscle group grows proportionally without junk volume.",
    image: "/Images/training program/muscle building.jpeg",
    whoIsItFor: [
      "Hardgainers struggling to add noticeable size and upper-body density",
      "Intermediate gym-goers stuck lifting the same weights for months",
      "Members seeking balanced aesthetics, posture, and joint resilience",
    ],
    whatYouGet: [
      "Structured Upper/Lower or Push-Pull-Legs hypertrophy split",
      "Progressive overload rep-and-load tracking sheet",
      "Lean surplus nutrition & recovery guidelines",
      "Form audits on key compound and isolation movements",
    ],
    weeklyStructure: [
      { day: "Day 01", focus: "Upper Body Hypertrophy (Chest, Back, Delts)" },
      { day: "Day 02", focus: "Lower Body Quad & Calf Focus" },
      { day: "Day 03", focus: "Rest & Mobility" },
      { day: "Day 04", focus: "Push Hypertrophy + Arms" },
      { day: "Day 05", focus: "Pull & Posterior Chain Density" },
    ],
  },
  {
    slug: "personal-training",
    number: "03",
    title: "Personal Training",
    tagline: "1-on-1 Coaching Tailored To Your Body & Schedule",
    targetAudience: "For 1-on-1 coaching, beginners & injury-safe progression",
    duration: "Flexible (4 / 12 / 24 Weeks)",
    frequency: "3–5 Sessions / Week",
    sessionLength: "60 Mins",
    intensity: "All Levels",
    summary:
      "Dedicated 1-on-1 sessions built around your biomechanics, past injuries, and exact fitness goals with real-time rep-by-rep coaching and zero guesswork.",
    image: "/Images/training program/personal training.jpeg",
    whoIsItFor: [
      "First-time gym members who want to learn proper lifting form safely",
      "Members returning from lower-back, knee, or shoulder setbacks",
      "Executives and founders who want maximum output in 60 focused minutes",
    ],
    whatYouGet: [
      "Full 30-minute movement, posture, and mobility screening on Day 1",
      "100% custom workout programming adapted session by session",
      "Dedicated coach spotting, tempo control, and load progression",
      "Direct WhatsApp check-ins for nutrition and travel workouts",
    ],
    weeklyStructure: [
      { day: "Session 01", focus: "Movement Assessment + Foundational Squat/Push" },
      { day: "Session 02", focus: "Hinge Mechanics + Upper Pull & Core" },
      { day: "Session 03", focus: "Unilateral Stability + Conditioning Block" },
      { day: "Session 04", focus: "Progressive Load Testing & Mobility Reset" },
    ],
  },
  {
    slug: "strength-training",
    number: "04",
    title: "Strength Training",
    tagline: "Raw Force Output & Compound Barbell Mastery",
    targetAudience: "For raw barbell strength & compound lift mastery",
    duration: "12-Week Strength Blocks",
    frequency: "3–4 Days / Week",
    sessionLength: "65–80 Mins",
    intensity: "High Intensity",
    summary:
      "Periodized strength cycles centered on the barbell squat, bench press, deadlift, and overhead press to build real-world power, bone density, and lifting confidence.",
    image: "/Images/training program/Strength Training.jpeg",
    whoIsItFor: [
      "Lifters who want to master heavy compound barbell movements safely",
      "Athletes seeking explosive force production and core bracing",
      "Anyone tired of light pump workouts who wants measurable PRs",
    ],
    whatYouGet: [
      "12-week undulating or linear periodized strength block",
      "Calibrated plates, competition racks, and chalk-friendly platforms",
      "Bracing, bar-path, and weak-point accessory programming",
      "Peak testing week at the end of every 12-week cycle",
    ],
    weeklyStructure: [
      { day: "Day 01", focus: "Heavy Back Squat + Quad/Core Accessories" },
      { day: "Day 02", focus: "Competition Bench Press + Upper Back" },
      { day: "Day 03", focus: "Heavy Deadlift + Posterior Chain" },
      { day: "Day 04", focus: "Overhead Press + Close-Grip & Triceps" },
    ],
  },
  {
    slug: "group-classes",
    number: "05",
    title: "Group Classes",
    tagline: "High-Energy Small-Group Turf & Engine Sessions",
    targetAudience: "For high-energy squad workouts & stamina",
    duration: "Ongoing Daily Schedule",
    frequency: "3–6 Classes / Week",
    sessionLength: "50 Mins",
    intensity: "High Intensity",
    summary:
      "Coach-led small-group workouts capped for personal attention, combining sprint turf sleds, kettlebells, rowers, and bodyweight athletics in an electric team atmosphere.",
    image: "/Images/training program/group classes.jpeg",
    whoIsItFor: [
      "People who thrive on group energy, music, and friendly competition",
      "Runners, cyclists, and weekend athletes building all-around engine",
      "Members who want a fast-paced 50-minute sweat without planning sets",
    ],
    whatYouGet: [
      "Capped class sizes so coaches still correct your technique",
      "Morning and evening batch options across the week",
      "Full turf, Concept2 rower, ski-erg, and kettlebell circuits",
      "Scalable weights and paces for both beginners and advanced athletes",
    ],
    weeklyStructure: [
      { day: "Mon / Thu", focus: "Engine & Ergometer Endurance Intervals" },
      { day: "Tue / Fri", focus: "Turf Sleds, Kettlebells & Power Circuits" },
      { day: "Wednesday", focus: "Core, Carry & Athletic Mobility Flow" },
      { day: "Saturday", focus: "Auren Team Throwdown (Full-Body Metcon)" },
    ],
  },
];