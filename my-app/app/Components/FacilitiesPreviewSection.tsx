"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ActionButton from "./ui/ActionButton";

interface FacilityZone {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  image: string;
}

const facilityZones: FacilityZone[] = [
  {
    id: "strength",
    number: "01",
    title: "Strength Zone",
    subtitle: "Calibrated Iron & Free Weights",
    description:
      "Heavy-duty competition power racks, deadlift platforms, calibrated plates, and full dumbbell runs built for progressive overload without waiting in line.",
    highlights: [
      "Olympic Lifting Platforms",
      "Full Dumbbell Wall",
      "Plate-Loaded Leverage Machines",
    ],
    image: "/Images/free weights.jpeg",
  },
  {
    id: "cardio",
    number: "02",
    title: "Cardio Deck",
    subtitle: "Endurance & Engine Conditioning",
    description:
      "Commercial curved treadmills, rowers, stair climbers, and air bikes engineered for low-impact stamina and high-output conditioning intervals.",
    highlights: [
      "Commercial Treadmills",
      "Rowing Ergometers",
      "Assault Air Bikes",
    ],
    image: "/Images/cardio.jpeg",
  },
  {
    id: "functional",
    number: "03",
    title: "Functional Turf",
    subtitle: "Athletic Speed & Sled Work",
    description:
      "Dedicated shock-absorbing sprint turf equipped with weighted prowler sleds, kettlebells, battle ropes, and plyometric boxes for explosive conditioning.",
    highlights: [
      "Sprint Turf Track",
      "Weighted Prowler Sleds",
      "Kettlebells & Plyo Boxes",
    ],
    image: "/Images/Turf Zone.jpeg",
  },
  {
    id: "lockers",
    number: "04",
    title: "Lockers & Showers",
    subtitle: "Clean Reset Post-Session",
    description:
      "Spacious private changing suites, hot rain showers, secure digital lockers, and grooming stations so you can head straight to work after training.",
    highlights: [
      "Private Hot Showers",
      "Secure Digital Lockers",
      "Changing & Grooming Lounge",
    ],
    image: "/Images/Shower.jpeg",
  },
];

export default function FacilitiesPreviewSection() {
  const [activeId, setActiveId] = useState<string>("strength");

  return (
    <section
      id="facilities"
      aria-labelledby="facilities-heading"
      className="relative w-full bg-surface-dark py-24 text-white sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Asymmetric Header */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="mb-3 inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(200,255,0,0.8)]" />
              <span className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-primary">
                Our Facilities
              </span>
            </div>

            <h2
              id="facilities-heading"
              className="font-display text-4xl leading-[0.98] tracking-tight text-white uppercase sm:text-5xl lg:text-6xl"
            >
              Built For Serious{" "}
              <span className="block text-white/45">
                Strength &amp; Conditioning
              </span>
            </h2>
          </div>

          {/* Right-Aligned Summary + Signature Glass CTA */}
          <div className="flex max-w-sm flex-col items-start gap-5">
            <p className="font-sans text-sm leading-relaxed text-white/70">
              Four purpose-built training and recovery zones designed so you
              never waste time waiting for a rack, bench, or machine.
            </p>
            <ActionButton href="/facilities" variant="glass" size="sm">
              Explore Facilities
            </ActionButton>
          </div>
        </div>

        {/* Interactive Expanding Zone Showcase */}
        <div className="mt-14 flex flex-col gap-4 lg:h-[470px] lg:flex-row lg:gap-5">
          {facilityZones.map((zone) => {
            const isActive = zone.id === activeId;

            return (
              <div
                key={zone.id}
                onMouseEnter={() => setActiveId(zone.id)}
                onClick={() => setActiveId(zone.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveId(zone.id);
                  }
                }}
                aria-expanded={isActive}
                className={`group relative cursor-pointer overflow-hidden rounded-2xl bg-surface-card transition-all duration-500 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  isActive
                    ? "min-h-[380px] lg:min-h-0 lg:flex-[2.4] shadow-[0_28px_56px_-12px_rgba(0,0,0,0.9),inset_0_1px_1px_rgba(255,255,255,0.16)]"
                    : "min-h-[140px] lg:min-h-0 lg:flex-1 shadow-[0_16px_32px_-12px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.08)]"
                }`}
              >
                {/* Zone Photography */}
                <Image
                  src={zone.image}
                  alt={`${zone.title} at Auren Fitness Club`}
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className={`object-cover object-center transition-all duration-700 ${
                    isActive
                      ? "scale-100 grayscale-0 brightness-95"
                      : "scale-105 grayscale brightness-50 group-hover:brightness-75"
                  }`}
                />

                {/* Bottom-Weighted Contrast Gradient */}
                <div
                  aria-hidden="true"
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    isActive
                      ? "bg-gradient-to-t from-black/95 via-black/45 to-black/15"
                      : "bg-gradient-to-t from-black/90 via-black/50 to-black/35"
                  }`}
                />

                {/* Top Row: Zone Index + Lime Corner Arrow on Active Card */}
                <div className="absolute inset-x-5 top-5 flex items-center justify-between">
                  <span
                    className={`font-heading text-xs font-bold tracking-widest uppercase transition-colors ${
                      isActive ? "text-primary" : "text-white/50"
                    }`}
                  >
                    {zone.number} / ZONE
                  </span>

                  {isActive && (
                    <Link
                      href="/facilities"
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`View ${zone.title} details`}
                      className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-[0_8px_20px_-4px_rgba(200,255,0,0.6),inset_0_1px_0_0_rgba(255,255,255,0.55)] transition-transform duration-200 hover:scale-110"
                    >
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.75}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </Link>
                  )}
                </div>

                {/* Bottom Content Area */}
                <div className="absolute inset-x-5 bottom-5 flex flex-col justify-end">
                  {isActive ? (
                    <div className="max-w-md">
                      <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-primary">
                        {zone.subtitle}
                      </p>
                      <h3 className="mt-1 font-display text-3xl tracking-tight text-white uppercase sm:text-4xl">
                        {zone.title}
                      </h3>
                      <p className="mt-2.5 font-sans text-xs leading-relaxed text-white/80 sm:text-sm">
                        {zone.description}
                      </p>

                      {/* Equipment Tags */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {zone.highlights.map((item) => (
                          <span
                            key={item}
                            className="rounded-md bg-white/10 px-2.5 py-1 font-heading text-[11px] font-semibold uppercase tracking-wider text-white/90 backdrop-blur-md shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)]"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div>
                      <h3 className="font-display text-xl tracking-wide text-primary uppercase sm:text-2xl">
                        {zone.title}
                      </h3>
                      <p className="mt-0.5 font-sans text-xs text-white/60 lg:hidden">
                        Tap to preview zone details
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
