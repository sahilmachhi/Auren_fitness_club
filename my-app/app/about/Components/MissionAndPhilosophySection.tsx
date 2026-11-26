import { missionPillarsData } from "../../../data/about";

export default function MissionAndPhilosophySection() {
  return (
    <section
      id="mission"
      aria-labelledby="mission-heading"
      className="relative w-full bg-surface-dark py-20 text-white sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Split Header */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="mb-3 inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(200,255,0,0.8)]" />
              <span className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-primary">
                Mission &amp; Philosophy
              </span>
            </div>

            <h2
              id="mission-heading"
              className="font-display text-4xl leading-[0.98] tracking-tight text-white uppercase sm:text-5xl lg:text-6xl"
            >
              Four Principles That{" "}
              <span className="block text-white/45">
                Guide Every Session Here
              </span>
            </h2>
          </div>

          <p className="max-w-md font-sans text-sm leading-relaxed text-white/70">
            Our mission is straightforward: help everyday people build strong,
            resilient, high-energy bodies through smart programming and honest
            coaching.
          </p>
        </div>

        {/* 2x2 Architectural Pillars Grid (Zero Borders, Pure Shadows + Inset Highlights) */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {missionPillarsData.map((pillar) => (
            <div
              key={pillar.number}
              className="rounded-3xl bg-surface-card/75 p-7 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.1)] sm:p-9"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-lg bg-surface-dark px-3 py-1.5 font-heading text-xs font-bold tracking-widest text-primary shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]">
                  PILLAR {pillar.number}
                </span>

                <span className="h-2 w-2 rounded-full bg-primary/70" />
              </div>

              <h3 className="mt-5 font-display text-2xl tracking-tight text-white uppercase sm:text-3xl">
                {pillar.title}
              </h3>

              <p className="mt-3 font-sans text-sm leading-relaxed text-white/75 sm:text-base">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
