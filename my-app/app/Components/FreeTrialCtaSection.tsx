import Image from "next/image";
import ActionButton from "./ui/ActionButton";

const trialInclusions = [
  "Full Strength, Cardio & Turf Access",
  "20-Minute Coach Movement Check",
  "Zero Obligation or Pressure",
];

export default function FreeTrialCtaSection() {
  return (
    <section
      id="free-trial-cta"
      aria-labelledby="final-cta-heading"
      className="relative w-full bg-surface-dark py-20 text-white sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Elevated Conversion Stage with Visible Gym Photography */}
        <div className="relative isolate overflow-hidden rounded-3xl bg-[#101214] p-8 shadow-[0_36px_72px_-16px_rgba(0,0,0,0.95),0_0_50px_-20px_rgba(200,255,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.16)] sm:p-12 lg:p-16">
          {/* Background Gym Photography (Clear & Visible Across the Stage) */}
          <Image
            src="/Images/hero_section_bg.png"
            alt="Auren Fitness Club floor"
            fill
            unoptimized
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover object-center opacity-55 contrast-105 brightness-90 -z-20"
          />

          {/* Subtle Directional Scrim (Keeps Left Copy Legible While Letting Photo Breathe) */}
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0b0d0f]/85 via-[#0b0d0f]/50 to-[#0b0d0f]/35"
          />

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left 7 Columns: Bold Closing Headline + Dual Action Buttons */}
            <div className="lg:col-span-7">
              <div className="mb-4 inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse shadow-[0_0_12px_rgba(200,255,0,0.9)]" />
                <span className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-primary">
                  Complimentary 1-Day Pass
                </span>
              </div>

              <h2
                id="final-cta-heading"
                className="font-display text-4xl leading-[0.96] tracking-tight text-white uppercase sm:text-6xl lg:text-[4rem]"
              >
                Your Fitness Journey{" "}
                <span className="block text-primary">Starts Here.</span>
              </h2>

              <p className="mt-5 max-w-xl font-sans text-sm leading-relaxed text-white/85 sm:text-base">
                Step onto the floor, test our calibrated racks and conditioning
                turf, and meet a coach in person before choosing any membership
                plan.
              </p>

              {/* Primary + Secondary Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <ActionButton href="/contact#free-trial" variant="primary">
                  Book Your Free Visit
                </ActionButton>

                <ActionButton href="/contact" variant="glass">
                  Location &amp; Hours
                </ActionButton>
              </div>
            </div>

            {/* Right 5 Columns: Frosted Blur Guest Pass Card */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-2xl bg-black/45 p-6 backdrop-blur-2xl shadow-[0_24px_54px_rgba(0,0,0,0.75),inset_0_1px_1px_rgba(255,255,255,0.22)] sm:p-7">
                {/* Subtle Top Glass Highlight */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent"
                />

                <div className="flex items-center justify-between pb-4 shadow-[inset_0_-1px_0_0_rgba(255,255,255,0.12)]">
                  <div>
                    <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-primary">
                      Auren Guest Pass
                    </p>
                    <p className="mt-0.5 font-display text-2xl tracking-wide text-white uppercase">
                      Free Trial Session
                    </p>
                  </div>

                  <span className="rounded-lg bg-primary px-3 py-1.5 font-heading text-xs font-extrabold uppercase tracking-wider text-primary-foreground shadow-[0_6px_18px_rgba(200,255,0,0.35),inset_0_1px_0_0_rgba(255,255,255,0.55)]">
                    ₹0 / Day
                  </span>
                </div>

                <ul className="mt-5 space-y-3">
                  {trialInclusions.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 font-sans text-sm text-white/90"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary shadow-[0_0_8px_rgba(200,255,0,0.9)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center justify-between pt-4 text-xs shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)]">
                  <span className="font-heading uppercase tracking-wider text-white/65">
                    Open Daily
                  </span>
                  <span className="font-heading font-bold text-white">
                    5:30 AM - 10:30 PM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
