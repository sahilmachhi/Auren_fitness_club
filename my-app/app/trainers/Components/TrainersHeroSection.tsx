import ActionButton from "../../Components/ui/ActionButton";

export default function TrainersHeroSection() {
  return (
    <section
      aria-labelledby="trainers-page-heading"
      className="relative w-full overflow-hidden bg-surface-dark pt-32 pb-16 text-white sm:pt-40 sm:pb-20"
    >
      {/* Ambient Lime Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/3 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(200,255,0,0.8)]" />
              <span className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-primary">
                Auren Coaching Roster
              </span>
            </div>

            <h1
              id="trainers-page-heading"
              className="font-display text-5xl leading-[0.95] tracking-tight text-white uppercase sm:text-6xl lg:text-7xl"
            >
              Accredited Coaches.{" "}
              <span className="block text-primary">
                Accountability On Every Rep.
              </span>
            </h1>
          </div>

          <div className="flex max-w-md flex-col items-start gap-5">
            <p className="font-sans text-sm leading-relaxed text-white/75 sm:text-base">
              Inspect our trainers&apos; backgrounds, certifications, and
              specializations, then book a 1-on-1 consultation directly with the
              coach who fits your goal.
            </p>

            <ActionButton href="#book-consultation" variant="primary" size="sm">
              Book Trainer Consultation
            </ActionButton>
          </div>
        </div>
      </div>
    </section>
  );
}
