"use client";

import { useState, useRef } from "react";
import ActionButton from "../../Components/ui/ActionButton";

const tourStops = [
  {
    step: "01",
    title: "Strength & Power Rack Floor",
    detail: "Calibrated bumper plates, squat racks, and full dumbbell wall.",
  },
  {
    step: "02",
    title: "Functional Sprint Turf",
    detail:
      "Sled track, kettlebells, battle ropes, and athletic conditioning rig.",
  },
  {
    step: "03",
    title: "Cardio & Endurance Deck",
    detail: "Commercial treadmills, rowers, and interval air bikes.",
  },
  {
    step: "04",
    title: "Locker Rooms & Hot Showers",
    detail: "Private shower suites, digital day lockers, and changing lounge.",
  },
];

export default function VirtualTourSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handlePlay = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  return (
    <section
      id="virtual-tour"
      aria-labelledby="virtual-tour-heading"
      className="relative w-full scroll-mt-24 bg-surface-dark py-20 text-white sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-surface-card p-6 shadow-[0_36px_72px_-16px_rgba(0,0,0,0.95),inset_0_1px_1px_rgba(255,255,255,0.14)] sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left 5 Cols: 9:16 Virtual Walkthrough Video */}
            <div className="mx-auto w-full max-w-[340px] sm:max-w-[380px] lg:col-span-5 lg:max-w-none">
              <div className="group relative aspect-[9/16] w-full overflow-hidden rounded-2xl bg-black shadow-[0_28px_56px_rgba(0,0,0,0.9),inset_0_1px_1px_rgba(255,255,255,0.14)]">
                <video
                  ref={videoRef}
                  src="/Videos/Gym Tour Video.mp4#t=0.5"
                  preload="metadata"
                  controls={isPlaying}
                  playsInline
                  onEnded={() => setIsPlaying(false)}
                  className="h-full w-full object-cover"
                />

                {!isPlaying && (
                  <button
                    type="button"
                    onClick={handlePlay}
                    aria-label="Play Auren Fitness Club virtual walkthrough video"
                    className="absolute inset-0 h-full w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/30"
                    />

                    <div className="absolute top-4 left-4 flex items-center gap-2 rounded-lg bg-surface-dark/85 px-3 py-1.5 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)]">
                      <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                      <span className="font-heading text-[11px] font-bold uppercase tracking-widest text-white">
                        Virtual Walkthrough
                      </span>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-[0_14px_32px_-4px_rgba(200,255,0,0.65),inset_0_1px_0_0_rgba(255,255,255,0.6)] transition-transform duration-300 group-hover:scale-110">
                        <svg
                          className="ml-1 h-7 w-7"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5.14v14l11-7-11-7z" />
                        </svg>
                      </div>
                    </div>

                    <div className="absolute inset-x-4 bottom-4 rounded-xl bg-surface-dark/85 p-4 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)]">
                      <p className="font-heading text-[11px] font-bold uppercase tracking-widest text-primary">
                        Full Facility Tour
                      </p>
                      <p className="mt-1 font-heading text-sm font-semibold text-white">
                        Watch our complete floor &amp; equipment walkthrough.
                      </p>
                    </div>
                  </button>
                )}
              </div>
            </div>

            {/* Right 7 Cols: Tour Stops & In-Person Visit CTA */}
            <div className="lg:col-span-7">
              <div className="mb-3 inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(200,255,0,0.8)]" />
                <span className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-primary">
                  Virtual Tour
                </span>
              </div>

              <h2
                id="virtual-tour-heading"
                className="font-display text-4xl leading-[0.98] tracking-tight text-white uppercase sm:text-5xl"
              >
                Walk Through Every Zone{" "}
                <span className="block text-white/45">
                  Before Your First Session
                </span>
              </h2>

              <p className="mt-4 font-sans text-sm leading-relaxed text-white/75 sm:text-base">
                Take a quick look inside our training floor layout, lighting,
                spacing, and amenities—or drop by in person for a guided tour
                and complimentary trial workout.
              </p>

              {/* 4 Tour Stops */}
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {tourStops.map((stop) => (
                  <div
                    key={stop.step}
                    className="rounded-2xl bg-surface-dark/90 p-5 shadow-[0_12px_24px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.08)]"
                  >
                    <span className="font-heading text-xs font-bold tracking-widest text-primary uppercase">
                      STOP {stop.step}
                    </span>
                    <h3 className="mt-1 font-heading text-base font-bold uppercase text-white">
                      {stop.title}
                    </h3>
                    <p className="mt-1.5 font-sans text-xs leading-relaxed text-white/70">
                      {stop.detail}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <ActionButton href="/contact#free-trial" variant="primary">
                  Book In-Person Tour &amp; Trial
                </ActionButton>
                <ActionButton href="/memberships" variant="glass">
                  View Membership Plans
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
