import Image from "next/image";
import ActionButton from "./ui/ActionButton";

const memberAvatars = [
  {
    src: "/Images/person Images/person_1.png",
    alt: "Auren Fitness Club member 1",
  },
  {
    src: "/Images/person Images/person_2.png",
    alt: "Auren Fitness Club member 2",
  },
  {
    src: "/Images/person Images/person_3.png",
    alt: "Auren Fitness Club member 3",
  },
  {
    src: "/Images/person Images/person_4.png",
    alt: "Auren Fitness Club member 4",
  },
];

export default function HeroSection() {
  return (
    <section
      aria-label="Hero"
      className="relative isolate flex h-svh min-h-[600px] max-h-[1080px] w-full flex-col justify-end overflow-hidden bg-surface-dark pt-24 pb-10 text-white sm:pb-14 lg:pb-16"
    >
      {/* Full-Bleed Gym Photography */}
      <Image
        src="/Images/hero_section_bg.png"
        alt="Auren Fitness Club equipment and strength floor"
        fill
        priority
        unoptimized
        sizes="100vw"
        className="object-cover object-center -z-20"
      />

      {/* Bottom-Weighted Cinematic Vignette (Lets Top Image Breathe) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-surface-dark via-black/55 to-black/25"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-black/75 via-transparent to-black/50"
      />

      {/* Bottom-Anchored Asymmetric Split Content */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end lg:gap-12">
          {/* Bottom-Left: Real Member Avatar Stack + Massive 2-Line Headline */}
          <div className="max-w-2xl">
            {/* Overlapping Photo Avatar Stack (Zero Borders, Layered Shadows) */}
            <div className="mb-4 flex items-center gap-3.5">
              <div className="flex -space-x-2.5">
                {memberAvatars.map((avatar) => (
                  <div
                    key={avatar.src}
                    className="relative h-10 w-10 overflow-hidden rounded-full bg-surface-card shadow-[0_4px_12px_rgba(0,0,0,0.85),0_0_0_2px_rgba(24,24,27,0.95)]"
                  >
                    <Image
                      src={avatar.src}
                      alt={avatar.alt}
                      fill
                      unoptimized
                      sizes="40px"
                      className="object-cover object-top"
                    />
                  </div>
                ))}
              </div>
              <p className="font-heading text-xs font-bold uppercase tracking-wider text-primary sm:text-sm">
                Active Training Community
              </p>
            </div>

            {/* Tight, High-Impact Display Headline (BBH Bogle) */}
            <h1 className="font-display text-5xl leading-[0.94] tracking-tight text-white uppercase sm:text-6xl lg:text-[4.5rem]">
              Strong Body Starts
              <span className="block text-white">
                With <span className="text-primary">Smart Plan</span>
              </span>
            </h1>
          </div>

          {/* Bottom-Right: Short Copy Block + Signature Dual-Box CTA */}
          <div className="flex max-w-sm flex-col items-start gap-5 lg:pb-1">
            <p className="font-sans text-sm leading-relaxed text-white/80 sm:text-base">
              Build real strength, improve conditioning, and stay consistent
              with structured coaching and serious training equipment.
            </p>

            <div className="flex flex-wrap items-center gap-3.5">
              <ActionButton href="/contact#free-trial" variant="primary">
                Join Us Now
              </ActionButton>

              <ActionButton href="/memberships" variant="glass">
                View Plans
              </ActionButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
