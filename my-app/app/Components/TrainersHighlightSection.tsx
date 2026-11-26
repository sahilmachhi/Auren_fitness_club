import Image from "next/image";
import Link from "next/link";
import ActionButton from "./ui/ActionButton";

interface TrainerProfile {
  id: string;
  name: string;
  role: string;
  bio: string;
  experience: string;
  certifications: string[];
  specializations: string[];
  image: string;
  availableForPT: boolean;
}

const trainers: TrainerProfile[] = [
  {
    id: "rohan-desai",
    name: "Rohan Desai",
    role: "Head Strength Coach",
    bio: "CSCS & ACE certified coach specializing in barbell mechanics, hypertrophy, and raw powerlifting.",
    experience: "8+ Yrs",
    certifications: ["CSCS", "ACE"],
    specializations: ["Strength", "Powerlifting"],
    image: "/Images/person Images/person_5.png",
    availableForPT: true,
  },
  {
    id: "kavya-nair",
    name: "Kavya Nair",
    role: "Transformation Specialist",
    bio: "NASM-CPT & Precision Nutrition coach focused on sustainable body recomposition and metabolic conditioning.",
    experience: "6+ Yrs",
    certifications: ["NASM-CPT", "PN-L1"],
    specializations: ["Recomp", "Nutrition"],
    image: "/Images/person Images/person_6.png",
    availableForPT: true,
  },
  {
    id: "vikram-rathore",
    name: "Vikram Rathore",
    role: "Conditioning & Mobility",
    bio: "ACE-CPT & FMS Level 2 specialist engineering injury-resilient athletes and explosive turf endurance.",
    experience: "7+ Yrs",
    certifications: ["ACE-CPT", "FMS-2"],
    specializations: ["Mobility", "Endurance"],
    image: "/Images/person Images/person_7.png",
    availableForPT: true,
  },
];

export default function TrainersHighlightSection() {
  return (
    <section
      id="trainers"
      aria-labelledby="trainers-heading"
      className="relative w-full bg-surface-dark py-24 text-white sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Asymmetric Header */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="mb-3 inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(200,255,0,0.8)]" />
              <span className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-primary">
                Our Experts
              </span>
            </div>

            <h2
              id="trainers-heading"
              className="font-display text-4xl leading-[0.98] tracking-tight text-white uppercase sm:text-5xl lg:text-6xl"
            >
              Skilled Trainers{" "}
              <span className="block text-white/45">For Better Fitness</span>
            </h2>
          </div>

          <div className="flex max-w-sm flex-col items-start gap-5">
            <p className="font-sans text-sm leading-relaxed text-white/70">
              Work directly with accredited coaches who track your form, load
              progression, and recovery from day one.
            </p>
            <ActionButton href="/trainers" variant="glass" size="sm">
              Meet All Trainers
            </ActionButton>
          </div>
        </div>

        {/* 3-Column Progressive-Blur Portrait Cards */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {trainers.map((trainer) => (
            <article
              key={trainer.id}
              className="group relative rounded-[30px] bg-[#16171a] p-2 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.95),inset_0_1px_1px_rgba(255,255,255,0.1)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_36px_70px_-12px_rgba(0,0,0,1),inset_0_1px_1px_rgba(255,255,255,0.18)]"
            >
              {/* Inner Tall Portrait Canvas (3:4 Ratio leaves upper 60% completely open for face/shoulders) */}
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[23px] bg-[#0d0e10]">
                {/* Full-Bleed Trainer Image */}
                <Image
                  src={trainer.image}
                  alt={`${trainer.name} - ${trainer.role} at Auren Fitness Club`}
                  fill
                  unoptimized
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-[50%_12%] transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />

                {/* Subtle Top Status Pill (Minimal footprint so hair/head is never blocked) */}
                {trainer.availableForPT && (
                  <div className="absolute top-4 right-4 z-20">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-black/45 px-3 py-1 font-heading text-[10px] font-bold uppercase tracking-wider text-white/95 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                      1-on-1 Open
                    </span>
                  </div>
                )}

                {/* LAYER 1: Seamless Progressive Blur Mask (The signature effect from Card #2) */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[56%] backdrop-blur-2xl"
                  style={{
                    WebkitMaskImage:
                      "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.92) 48%, rgba(0,0,0,0) 100%)",
                    maskImage:
                      "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.92) 48%, rgba(0,0,0,0) 100%)",
                  }}
                />

                {/* LAYER 2: Dark Tonal Scrim for Guaranteed WCAG Text Contrast over bright shirts/backgrounds */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[62%] bg-gradient-to-t from-[#0b0c0e]/95 via-[#0b0c0e]/65 to-transparent"
                />

                {/* LAYER 3: Edge Rim Highlight inside the inner card */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 z-20 rounded-[23px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.14)]"
                />

                {/* LAYER 4: Editorial Content Anchored Directly Over the Seamless Blur */}
                <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col justify-end p-6">
                  {/* Name + Verified Coach Checkmark (Matching Reference Card 2) */}
                  <div className="flex items-center gap-2">
                    <h3 className="font-sans text-2xl font-semibold tracking-tight text-white">
                      {trainer.name}
                    </h3>
                    <span
                      title={`Certified: ${trainer.certifications.join(", ")}`}
                      className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-black shadow-[0_0_12px_rgba(200,255,0,0.45)]"
                    >
                      <svg
                        className="h-3 w-3"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>

                  {/* Role Kicker */}
                  <p className="mt-0.5 font-heading text-[11px] font-bold uppercase tracking-[0.16em] text-primary">
                    {trainer.role}
                  </p>

                  {/* Concise 2-Line Bio */}
                  <p className="mt-2.5 line-clamp-2 font-sans text-[13px] leading-relaxed text-white/75">
                    {trainer.bio}
                  </p>

                  {/* Bottom Metadata + High-Contrast Pill Action (Matching Reference Layout) */}
                  <div className="mt-5 flex items-center justify-between gap-3 pt-1">
                    {/* Left Metrics: Experience & Primary Cert */}
                    <div className="flex items-center gap-3.5 text-xs font-medium text-white/80">
                      <span className="inline-flex items-center gap-1.5">
                        <svg
                          className="h-3.5 w-3.5 text-white/50"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {trainer.experience}
                      </span>

                      <span className="inline-flex items-center gap-1.5">
                        <svg
                          className="h-3.5 w-3.5 text-white/50"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {trainer.certifications[0]}
                      </span>
                    </div>

                    {/* Right Pill CTA */}
                    <Link
                      href={`/trainers?coach=${trainer.id}#book-consultation`}
                      className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 font-sans text-xs font-semibold text-black shadow-[0_8px_20px_rgba(0,0,0,0.4)] transition-all duration-200 hover:scale-105 hover:bg-primary hover:text-black active:scale-95"
                    >
                      <span>Book</span>
                      <span className="text-sm leading-none">+</span>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
