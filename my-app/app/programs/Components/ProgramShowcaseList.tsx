import Image from "next/image";
import ActionButton from "../../Components/ui/ActionButton";
import { trainingProgramsData } from "../../../data/programs";

export default function ProgramShowcaseList() {
  return (
    <section
      aria-label="All Training Programs"
      className="relative w-full bg-surface-dark py-12 text-white sm:py-16"
    >
      <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:space-y-24 lg:px-8">
        {trainingProgramsData.map((program, index) => {
          const isReversed = index % 2 === 1;

          return (
            <article
              key={program.slug}
              id={program.slug}
              className="scroll-mt-28 overflow-hidden rounded-3xl bg-surface-card/70 p-6 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.9),inset_0_1px_1px_rgba(255,255,255,0.12)] sm:p-8 lg:p-10"
            >
              <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
                {/* Image Column (Alternates Left / Right on Desktop) */}
                <div
                  className={`lg:col-span-5 ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-black shadow-[0_24px_48px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.14)]">
                    <Image
                      src={program.image}
                      alt={`${program.title} at Auren Fitness Club`}
                      fill
                      unoptimized
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />

                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"
                    />

                    {/* Top-Left Index Pill */}
                    <div className="absolute top-4 left-4 rounded-lg bg-surface-dark/85 px-3 py-1.5 font-heading text-xs font-bold tracking-widest text-primary backdrop-blur-md shadow-[0_8px_20px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.12)]">
                      PROGRAM {program.number}
                    </div>

                    {/* Bottom Intensity Strip */}
                    <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-xl bg-surface-dark/85 px-4 py-2.5 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                      <span className="font-heading text-[11px] font-semibold uppercase tracking-wider text-white/65">
                        Intensity Level
                      </span>
                      <span className="font-heading text-xs font-bold uppercase tracking-wider text-primary">
                        {program.intensity}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Details Column */}
                <div
                  className={`lg:col-span-7 ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <p className="font-heading text-xs font-bold uppercase tracking-[0.22em] text-primary">
                    {program.tagline}
                  </p>

                  <h2 className="mt-2 font-display text-4xl leading-[0.98] tracking-tight text-white uppercase sm:text-5xl">
                    {program.title}
                  </h2>

                  <p className="mt-4 font-sans text-sm leading-relaxed text-white/75 sm:text-base">
                    {program.summary}
                  </p>

                  {/* 3 Quick Specs Row (Zero Borders, Recessed Dark Pills) */}
                  <div className="mt-6 grid grid-cols-3 gap-3">
                    <div className="rounded-xl bg-surface-dark/90 p-3.5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]">
                      <p className="font-heading text-[10px] font-bold uppercase tracking-widest text-white/50">
                        Duration
                      </p>
                      <p className="mt-1 font-heading text-xs font-bold text-white sm:text-sm">
                        {program.duration}
                      </p>
                    </div>

                    <div className="rounded-xl bg-surface-dark/90 p-3.5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]">
                      <p className="font-heading text-[10px] font-bold uppercase tracking-widest text-white/50">
                        Frequency
                      </p>
                      <p className="mt-1 font-heading text-xs font-bold text-white sm:text-sm">
                        {program.frequency}
                      </p>
                    </div>

                    <div className="rounded-xl bg-surface-dark/90 p-3.5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]">
                      <p className="font-heading text-[10px] font-bold uppercase tracking-widest text-white/50">
                        Session
                      </p>
                      <p className="mt-1 font-heading text-xs font-bold text-white sm:text-sm">
                        {program.sessionLength}
                      </p>
                    </div>
                  </div>

                  {/* Who It's For + What You Get Two-Column List */}
                  <div className="mt-7 grid grid-cols-1 gap-6 pt-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] sm:grid-cols-2">
                    <div>
                      <h3 className="font-heading text-xs font-bold uppercase tracking-widest text-primary">
                        Who It Is For
                      </h3>
                      <ul className="mt-3 space-y-2">
                        {program.whoIsItFor.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-2.5 font-sans text-xs leading-relaxed text-white/80 sm:text-sm"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/50" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-heading text-xs font-bold uppercase tracking-widest text-primary">
                        What You Get
                      </h3>
                      <ul className="mt-3 space-y-2">
                        {program.whatYouGet.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-2.5 font-sans text-xs leading-relaxed text-white/85 sm:text-sm"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary shadow-[0_0_8px_rgba(200,255,0,0.8)]" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <ActionButton
                      href={`/programs/${program.slug}`}
                      variant="primary"
                      size="sm"
                    >
                      Program-Specific Details
                    </ActionButton>

                    <ActionButton
                      href={`/contact?program=${program.slug}#free-trial`}
                      variant="glass"
                      size="sm"
                    >
                      Try This Track Free
                    </ActionButton>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
