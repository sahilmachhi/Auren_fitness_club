export interface PhilosophyPillar {
  number: string;
  title: string;
  description: string;
}

export interface ClubMilestone {
  badge: string;
  metric: string;
  label: string;
  detail: string;
}

export interface SuccessStoryItem {
  id: string;
  memberName: string;
  program: string;
  duration: string;
  headlineResult: string;
  story: string;
  avatar: string;
  featured?: boolean;
}

export const missionPillarsData: PhilosophyPillar[] = [
  {
    number: "01",
    title: "Programming Over Random Sweat",
    description:
      "Exhaustion is not progress. Every member follows structured progressive overload, movement screening, and measurable strength or conditioning benchmarks.",
  },
  {
    number: "02",
    title: "Calibrated Iron & Uncrowded Flow",
    description:
      "We invest in competition racks, calibrated plates, and separate turf and cardio zones so serious lifters and beginners train without waiting in bottlenecks.",
  },
  {
    number: "03",
    title: "Coaching That Knows Your Name",
    description:
      "Our floor coaches actively watch posture, bar path, and recovery—not glued to their phones—so beginners feel safe and experienced lifters hit clean PRs.",
  },
  {
    number: "04",
    title: "Sustainable Habits, Zero Crash Diets",
    description:
      "We pair strength training with realistic protein and calorie guidance built around everyday Indian home meals rather than unsustainable starvation plans.",
  },
];

// Swap these placeholder milestones with Auren Fitness Club's verified club numbers
export const clubAchievementsData: ClubMilestone[] = [
  {
    badge: "Facility Standard",
    metric: "4 Zones",
    label: "Dedicated Training & Recovery Areas",
    detail: "Purpose-built Strength, Cardio, Sprint Turf, and Private Locker Suites.",
  },
  {
    badge: "Coaching Roster",
    metric: "100%",
    label: "Accredited Floor & PT Coaches",
    detail: "Certified across NSCA, ACE, NASM, and Precision Nutrition frameworks.",
  },
  {
    badge: "Member Support",
    metric: "1-on-1",
    label: "Onboarding Movement Assessment",
    detail: "Every new joiner receives a posture, squat, and hinge check on Day 1.",
  },
  {
    badge: "Operating Window",
    metric: "17 Hrs",
    label: "Daily Floor Access (Mon–Sat)",
    detail: "Open 5:30 AM to 10:30 PM to fit early-morning and late-evening schedules.",
  },
];

// Swap these placeholder member stories with verified Auren member transformations
export const successStoriesData: SuccessStoryItem[] = [
  {
    id: "story-1",
    memberName: "Siddharth Patel",
    program: "Weight Loss & Strength Track",
    duration: "16 Weeks",
    headlineResult: "-14 kg Fat Loss & First 100 kg Deadlift",
    story:
      "After years of desk work and failed crash diets, Siddharth started with three full-body barbell sessions a week and simple daily protein targets. Four months later he dropped 14 kg while doubling his lower-body strength.",
    avatar: "/Images/person Images/person_1.png",
  },
  {
    id: "story-2",
    memberName: "Ananya Verma",
    program: "1-on-1 Personal Training",
    duration: "20 Weeks",
    headlineResult: "+6 kg Lean Mass & Pain-Free Lower Back",
    story:
      "Ananya joined nervous about free weights due to recurring stiffness. Through structured core bracing, goblet squats, and progressive deadlift variations, she eliminated her back discomfort and built visible athletic strength.",
    avatar: "/Images/person Images/person_2.png",
    featured: true,
  },
  {
    id: "story-3",
    memberName: "Karan Joshi",
    program: "Muscle Building Hypertrophy",
    duration: "24 Weeks",
    headlineResult: "Full Body Recomposition & 15% Strength Gain",
    story:
      "Stuck lifting the same weights for two years, Karan switched to a tracked 4-day Upper/Lower split at Auren. Consistent logbook progression and bi-weekly coach check-ins reshaped his shoulders, back, and posture.",
    avatar: "/Images/person Images/person_3.png",
  },
];