import Image from "next/image";
import Link from "next/link";
import ActionButton from "./ui/ActionButton";

interface ProgramItem {
  slug: string;
  number: string;
  title: string;
  targetAudience: string;
  description: string;
  deliverables: string[];
  image: string;
  featured?: boolean;
}

const programs: ProgramItem[] = [
  {
    slug: "weight-loss",
    number: "01",
    title: "Weight Loss",
    targetAudience: "For sustainable fat loss & metabolic conditioning",
    description:
      "Structured strength-first fat loss combining resistance circuits, conditioning intervals, and practical nutrition targets so you drop fat without losing muscle.",
    deliverables: [
      "Custom Calorie & Macro Targets",
      "Bi-Weekly Body Composition Check-Ins",
    ],
    image: "/Images/training program/weight loss.webp",
    featured: true,
  },
  {
    slug: "muscle-building",
    number: "02",
    title: "Muscle Building",
    targetAudience: "For hypertrophy, symmetry & lean mass gain",
    description:
      "Progressive hypertrophy splits engineered around mechanical tension, optimal weekly volume, and recovery tracking to build dense, balanced muscle.",
    deliverables: [
      "4 to 5-Day Hypertrophy Split",
      "Progressive Overload Logbook",
    ],
    image: "/Images/training program/muscle building.jpeg",
    featured: true,
  },
  {
    slug: "personal-training",
    number: "03",
    title: "Personal Training",
    targetAudience: "For 1-on-1 coaching, beginners & injury-safe progression",
    description:
      "Dedicated coaching sessions tailored around your biomechanics, schedule, and goals with real-time form correction and accountability.",
    deliverables: [
      "1-on-1 Movement Assessment",
      "Personalized Session Programming",
    ],
    image: "/Images/training program/personal training.jpeg",
  },
  {
    slug: "strength-training",
    number: "04",
    title: "Strength Training",
    targetAudience: "For raw barbell strength & compound lift mastery",
    description:
      "Periodized squat, bench, deadlift, and overhead press cycles built to increase force output, joint stability, and top-end lifting numbers.",
    deliverables: ["Periodized Strength Cycles", "Barbell Technique Coaching"],
    image: "/Images/training program/Strength Training.jpeg",
  },
  {
    slug: "group-classes",
    number: "05",
    title: "Group Classes",
    targetAudience: "For high-energy squad workouts & stamina",
    description:
      "Coach-led small-group turf and conditioning sessions blending sleds, kettlebells, and ergometers for high output in 50 minutes.",
    deliverables: [
      "Capped Small-Group Batches",
      "Daily Coach-Led Conditioning",
    ],
    image: "/Images/training program/group classes.jpeg",
  },
];

export default function ProgramsGridSection() {
  return (
    <section
      id="programs"
      aria-labelledby="programs-heading"
      className="relative w-full bg-surface-dark py-24 text-white sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Reference-Style Asymmetric Header */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="mb-3 inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(200,255,0,0.8)]" />
              <span className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-primary">
                Training Programs
              </span>
            </div>

            <h2
              id="programs-heading"
              className="font-display text-4xl leading-[0.98] tracking-tight text-white uppercase sm:text-5xl lg:text-6xl"
            >
              Structured Programs{" "}
              <span className="block text-white/45">
                Built For Measurable Results
              </span>
            </h2>
          </div>

          <div className="flex max-w-sm flex-col items-start gap-5">
            <p className="font-sans text-sm leading-relaxed text-white/70">
              Every training track includes clear progression milestones, coach
              guidance, and structured sessions tailored to your starting point.
            </p>
            <ActionButton href="/programs" variant="glass" size="sm">
              All Programs
            </ActionButton>
          </div>
        </div>

        {/* 2 + 3 Asymmetric Bento Grid (Zero Borders, Pure Layered Shadows) */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6">
          {programs.map((program) => (
            <Link
              key={program.slug}
              href={`/programs/${program.slug}`}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-surface-card shadow-[0_24px_48px_-12px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_32px_64px_-12px_rgba(0,0,0,0.95),inset_0_1px_1px_rgba(200,255,0,0.35)] ${
                program.featured ? "lg:col-span-3" : "lg:col-span-2"
              }`}
            >
              {/* Top Image Header */}
              <div
                className={`relative w-full overflow-hidden bg-black ${
                  program.featured ? "aspect-[16/9]" : "aspect-[16/10]"
                }`}
              >
                <Image
                  src={program.image}
                  alt={`${program.title} program at Auren Fitness Club`}
                  fill
                  unoptimized
                  sizes={
                    program.featured
                      ? "(max-width: 1024px) 100vw, 50vw"
                      : "(max-width: 1024px) 100vw, 33vw"
                  }
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-surface-card via-black/30 to-black/20"
                />

                {/* Top Row: Index Number + Corner Diagonal Arrow */}
                <div className="absolute inset-x-5 top-5 flex items-center justify-between">
                  <span className="rounded-md bg-surface-dark/80 px-2.5 py-1 font-heading text-xs font-bold tracking-widest text-primary backdrop-blur-md shadow-[0_6px_16px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.12)]">
                    {program.number}
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface-dark/85 text-white backdrop-blur-md shadow-[0_8px_20px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.14)] transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <svg
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col justify-between p-6 pt-3 sm:p-7 sm:pt-3">
                <div>
                  <p className="font-heading text-xs font-bold uppercase tracking-wider text-primary">
                    {program.targetAudience}
                  </p>

                  <h3 className="mt-1.5 font-display text-2xl tracking-tight text-white uppercase sm:text-3xl">
                    {program.title}
                  </h3>

                  <p className="mt-3 font-sans text-sm leading-relaxed text-white/70">
                    {program.description}
                  </p>
                </div>

                {/* Deliverables Strip (Zero Borders, Subtle Inset Divider) */}
                <div className="mt-6 pt-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
                  <div className="flex flex-wrap gap-2">
                    {program.deliverables.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-2 rounded-md bg-surface-dark/85 px-3 py-1.5 font-heading text-[11px] font-semibold uppercase tracking-wider text-white/85 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
