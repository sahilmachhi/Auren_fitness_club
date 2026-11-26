import ActionButton from "../../Components/ui/ActionButton";

export default function ProgramsHeroSection() {
  return (
    <section
      aria-labelledby="programs-page-heading"
      className="relative w-full overflow-hidden bg-surface-dark pt-32 pb-16 text-white sm:pt-40 sm:pb-20"
    >
      {/* Subtle Radial Lime Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(200,255,0,0.8)]" />
              <span className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-primary">
                Auren Training Tracks
              </span>
            </div>

            <h1
              id="programs-page-heading"
              className="font-display text-5xl leading-[0.95] tracking-tight text-white uppercase sm:text-6xl lg:text-7xl"
            >
              Five Structured Paths.{" "}
              <span className="block text-primary">Zero Random Workouts.</span>
            </h1>
          </div>

          <div className="flex max-w-md flex-col items-start gap-5">
            <p className="font-sans text-sm leading-relaxed text-white/75 sm:text-base">
              Whether your goal is dropping stubborn body fat, building dense
              muscle, or hitting new barbell PRs, every track follows a proven
              weekly progression.
            </p>

            <ActionButton
              href="/contact#free-trial"
              variant="primary"
              size="sm"
            >
              Book Free Assessment
            </ActionButton>
          </div>
        </div>

        {/* Quick Jump Anchor Strip (Zero Borders, Glass Pills) */}
        <div className="mt-12 flex flex-wrap items-center gap-2.5 pt-8 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
          <span className="mr-2 font-heading text-xs font-bold uppercase tracking-widest text-white/50">
            Jump To:
          </span>
          {[
            { label: "01. Weight Loss", href: "#weight-loss" },
            { label: "02. Muscle Building", href: "#muscle-building" },
            { label: "03. Personal Training", href: "#personal-training" },
            { label: "04. Strength Training", href: "#strength-training" },
            { label: "05. Group Classes", href: "#group-classes" },
            { label: "Program Breakdown", href: "#program-details" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg bg-surface-card/80 px-3.5 py-2 font-heading text-xs font-semibold uppercase tracking-wider text-white/85 shadow-[0_6px_16px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.1)] transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
