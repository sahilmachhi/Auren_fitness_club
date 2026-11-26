import Image from "next/image";
import ActionButton from "../../Components/ui/ActionButton";

export default function AboutHeroAndStorySection() {
  return (
    <section
      id="gym-story"
      aria-labelledby="about-page-heading"
      className="relative w-full overflow-hidden bg-surface-dark pt-32 pb-20 text-white sm:pt-40 sm:pb-28"
    >
      {/* Ambient Lime Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Hero Header */}
        <div className="max-w-4xl">
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(200,255,0,0.8)]" />
            <span className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-primary">
              Our Story · Auren Fitness Club
            </span>
          </div>

          <h1
            id="about-page-heading"
            className="font-display text-5xl leading-[0.95] tracking-tight text-white uppercase sm:text-6xl lg:text-7xl"
          >
            Built To Replace{" "}
            <span className="text-primary">Crowded Gimmicks</span> With Real
            Strength &amp; Coaching.
          </h1>
        </div>

        {/* Asymmetric Gym Story Split: Left Founder & Floor Visuals + Right Origin Narrative */}
        <div className="mt-14 grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left 5 Cols: Founder Portrait + Overlapping Floor Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-surface-card shadow-[0_32px_64px_-12px_rgba(0,0,0,0.9),inset_0_1px_1px_rgba(255,255,255,0.14)]">
                <Image
                  src="/Images/Gym_owner.jpg"
                  alt="Founder of Auren Fitness Club"
                  fill
                  unoptimized
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-top"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"
                />

                {/* Floating Founder Identity Dock */}
                <div className="absolute inset-x-5 bottom-5 rounded-2xl bg-surface-dark/85 p-5 backdrop-blur-md shadow-[0_14px_28px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.12)]">
                  <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-primary">
                    Founder &amp; Head Coach
                  </p>
                  <h2 className="mt-1 font-display text-2xl tracking-wide text-white uppercase sm:text-3xl">
                    Aarav Mehta
                  </h2>
                  <p className="mt-1 font-sans text-xs text-white/70">
                    Dedicated to bringing serious strength programming and
                    clean, well-spaced training floors under one roof.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right 7 Cols: The Auren Story */}
          <div className="lg:col-span-7">
            <span className="font-heading text-xs font-bold uppercase tracking-[0.22em] text-primary">
              Why We Started Auren
            </span>

            <h2 className="mt-2 font-display text-3xl leading-[1.04] tracking-tight text-white uppercase sm:text-5xl">
              A Training Environment Engineered For People Who Want{" "}
              <span className="text-white/45">Measurable Progress.</span>
            </h2>

            <div className="mt-6 space-y-4 font-sans text-sm leading-relaxed text-white/75 sm:text-base">
              <p>
                Auren Fitness Club was founded out of a simple frustration: most
                commercial gyms either oversell crowded memberships on cheap,
                poorly maintained machines—or feel so intimidating that
                beginners never touch a barbell.
              </p>
              <p>
                We set out to build the middle ground that should have existed
                all along: a high-standard performance floor stocked with
                calibrated free weights, competition racks, sprint turf, and
                endurance ergometers, backed by accredited coaches who treat
                every member&apos;s form and progress seriously.
              </p>
              <p>
                Whether you are stepping onto a gym floor for the very first
                time or chasing a new personal record, Auren gives you the
                structure, space, and coaching accountability to stay consistent
                for years.
              </p>
            </div>

            {/* Founder Signature Quote */}
            <blockquote className="mt-8 rounded-2xl bg-surface-card/80 p-6 font-sans text-sm italic leading-relaxed text-white/85 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(200,255,0,0.25)]">
              &ldquo;When you remove guesswork from training and surround
              yourself with coaches who care about technique, consistency stops
              feeling like a chore.&rdquo;
            </blockquote>

            <div className="mt-8 flex flex-wrap gap-4">
              <ActionButton href="/facilities" variant="primary" size="sm">
                Explore Our Floor
              </ActionButton>
              <ActionButton href="/trainers" variant="glass" size="sm">
                Meet The Coaches
              </ActionButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
