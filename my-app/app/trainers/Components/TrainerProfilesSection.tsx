"use client";

import { useState } from "react";
import Image from "next/image";
import { trainersData } from "../../../data/trainers";

interface TrainerProfilesSectionProps {
  onSelectCoach?: (coachId: string) => void;
}

export default function TrainerProfilesSection({
  onSelectCoach,
}: TrainerProfilesSectionProps) {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("All");

  const filterCategories = [
    "All",
    "Strength & Hypertrophy",
    "Weight Loss & Nutrition",
    "Mobility & Conditioning",
  ];

  const filteredTrainers = trainersData.filter((trainer) => {
    if (selectedSpecialty === "All") return true;
    const joined =
      `${trainer.role} ${trainer.specializations.join(" ")}`.toLowerCase();
    if (selectedSpecialty === "Strength & Hypertrophy") {
      return joined.includes("strength") || joined.includes("hypertrophy");
    }
    if (selectedSpecialty === "Weight Loss & Nutrition") {
      return (
        joined.includes("fat") ||
        joined.includes("weight") ||
        joined.includes("nutrition")
      );
    }
    if (selectedSpecialty === "Mobility & Conditioning") {
      return joined.includes("mobility") || joined.includes("conditioning");
    }
    return true;
  });

  const handleBookClick = (coachId: string) => {
    if (onSelectCoach) {
      onSelectCoach(coachId);
    }
    const formEl = document.getElementById("book-consultation");
    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      aria-label="Trainer Profiles and Credentials"
      className="relative w-full bg-surface-dark py-12 text-white sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Filter Bar */}
        <div className="mb-12 flex flex-wrap items-center justify-between gap-4 pb-7 shadow-[inset_0_-1px_0_0_rgba(255,255,255,0.08)]">
          <div className="flex items-center gap-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(200,255,0,0.85)]" />
            <p className="font-heading text-xs font-bold uppercase tracking-[0.22em] text-white/65">
              Filter Coaches By Focus
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {filterCategories.map((category) => {
              const isActive = selectedSpecialty === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedSpecialty(category)}
                  className={`rounded-full px-4 py-2 font-heading text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-[0_10px_24px_-6px_rgba(200,255,0,0.55),inset_0_1px_0_rgba(255,255,255,0.6)]"
                      : "bg-surface-card/85 text-white/75 shadow-[0_8px_20px_rgba(0,0,0,0.55),inset_0_1px_1px_rgba(255,255,255,0.09)] hover:bg-surface-card hover:text-white"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Redesigned 4:3 Bento Trainer Profile Cards */}
        <div className="space-y-10">
          {filteredTrainers.map((trainer, index) => (
            <article
              key={trainer.id}
              id={trainer.id}
              className="group relative scroll-mt-28 overflow-hidden rounded-[30px] bg-gradient-to-b from-[#1d2026]/95 via-surface-card/90 to-[#101215] p-6 shadow-[0_34px_68px_-16px_rgba(0,0,0,0.95),inset_0_1px_1px_rgba(255,255,255,0.14)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_40px_80px_-14px_rgba(0,0,0,1),0_0_45px_-18px_rgba(200,255,0,0.22),inset_0_1px_1px_rgba(200,255,0,0.28)] sm:p-8"
            >
              {/* Top Specular Hairline */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-primary/55 to-transparent"
              />

              {/* UPPER BENTO ROW: 4:3 Photo Stage + Identity & Bio */}
              <div className="grid grid-cols-1 items-center gap-7 lg:grid-cols-12 lg:gap-8">
                {/* 4:3 Portrait Frame (5 Cols on Desktop) */}
                <div className="lg:col-span-5">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#0b0c0e] shadow-[0_20px_42px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.15)]">
                    <Image
                      src={trainer.image}
                      alt={`${trainer.name} - ${trainer.role}`}
                      fill
                      unoptimized
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-cover object-[50%_18%] transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />

                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/15"
                    />

                    {/* Top-Left Coach Index + Experience */}
                    <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                      <span className="rounded-lg bg-black/65 px-2.5 py-1 font-heading text-[11px] font-bold tracking-widest text-white/85 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.14)]">
                        0{index + 1}
                      </span>
                      <span className="rounded-lg bg-primary px-3 py-1 font-heading text-[11px] font-extrabold uppercase tracking-wider text-primary-foreground shadow-[0_8px_18px_-4px_rgba(200,255,0,0.55),inset_0_1px_0_rgba(255,255,255,0.55)]">
                        {trainer.experienceYears}
                      </span>
                    </div>

                    {/* Bottom Schedule Strip inside 4:3 Frame */}
                    <div className="absolute inset-x-3 bottom-3 rounded-xl bg-black/60 px-3.5 py-2.5 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.14)]">
                      <div className="flex items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-1.5 font-heading text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                          Availability
                        </span>
                        <span className="font-sans text-xs font-medium text-white/90">
                          {trainer.availability}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Coach Identity, Bio & Philosophy (7 Cols on Desktop) */}
                <div className="flex flex-col justify-between lg:col-span-7">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="font-heading text-xs font-bold uppercase tracking-[0.22em] text-primary">
                        {trainer.role}
                      </p>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.06] px-3 py-1 font-heading text-[10px] font-bold uppercase tracking-wider text-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        Verified Coach
                      </span>
                    </div>

                    <h2 className="mt-2 font-display text-3xl leading-none tracking-tight text-white uppercase sm:text-5xl">
                      {trainer.name}
                    </h2>

                    <p className="mt-3.5 font-sans text-sm leading-relaxed text-white/80 sm:text-[15px]">
                      {trainer.experienceSummary}
                    </p>
                  </div>

                  {/* Philosophy Quote Strip */}
                  <blockquote className="mt-5 rounded-2xl bg-surface-dark/85 p-4 font-sans text-xs italic leading-relaxed text-white/85 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] sm:text-sm">
                    &ldquo;{trainer.philosophy}&rdquo;
                  </blockquote>
                </div>
              </div>

              {/* LOWER BENTO ROW: Equal-Height Certifications + Specializations & Session Method */}
              <div className="mt-7 grid grid-cols-1 gap-5 pt-7 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] lg:grid-cols-12">
                {/* Left Bento Box: Verified Certifications (6 Cols) */}
                <div className="flex flex-col justify-between rounded-2xl bg-surface-dark/75 p-5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] lg:col-span-6">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-heading text-xs font-bold uppercase tracking-[0.18em] text-primary">
                        Verified Certifications
                      </h3>
                      <span className="font-heading text-[10px] font-bold uppercase tracking-wider text-white/45">
                        {trainer.certifications.length} Credentials
                      </span>
                    </div>

                    <div className="mt-4 space-y-2.5">
                      {trainer.certifications.map((cert) => (
                        <div
                          key={cert.code}
                          className="flex items-center justify-between gap-3 rounded-xl bg-surface-card/90 px-3.5 py-3 shadow-[0_6px_16px_rgba(0,0,0,0.45),inset_0_1px_1px_rgba(255,255,255,0.08)]"
                        >
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="rounded-md bg-primary/15 px-2 py-0.5 font-heading text-[11px] font-bold uppercase tracking-wider text-primary">
                                {cert.code}
                              </span>
                              <span className="font-sans text-xs font-semibold text-white/90">
                                {cert.title}
                              </span>
                            </div>
                            <p className="mt-1 font-sans text-[11px] text-white/55">
                              Issued by {cert.issuer}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Bento Box: Core Specializations + Coaching Pillars (6 Cols) */}
                <div className="flex flex-col justify-between rounded-2xl bg-surface-dark/75 p-5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] lg:col-span-6">
                  <div>
                    <h3 className="font-heading text-xs font-bold uppercase tracking-[0.18em] text-primary">
                      Core Specializations
                    </h3>

                    <div className="mt-3.5 flex flex-wrap gap-2">
                      {trainer.specializations.map((spec) => (
                        <span
                          key={spec}
                          className="inline-flex items-center gap-1.5 rounded-xl bg-surface-card/90 px-3 py-2 font-heading text-[11px] font-bold uppercase tracking-wider text-white/90 shadow-[0_6px_16px_rgba(0,0,0,0.45),inset_0_1px_1px_rgba(255,255,255,0.08)]"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 rounded-xl bg-surface-card/70 p-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]">
                    <p className="font-heading text-[10px] font-bold uppercase tracking-[0.18em] text-white/55">
                      Coaching Standard
                    </p>
                    <p className="mt-1.5 font-sans text-xs leading-relaxed text-white/80">
                      Form cueing on every working set, progressive load
                      tracking, and practical recovery adjustments tailored to
                      your weekly schedule.
                    </p>
                  </div>
                </div>
              </div>

              {/* BOTTOM ACTION BAR */}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
                <p className="font-sans text-xs text-white/65">
                  Includes a 30-minute movement check and goal roadmap.
                </p>

                <button
                  type="button"
                  onClick={() => handleBookClick(trainer.id)}
                  className="group/btn inline-flex cursor-pointer items-center gap-3 rounded-full bg-primary py-2 pr-2.5 pl-6 font-heading text-xs font-extrabold uppercase tracking-[0.12em] text-primary-foreground shadow-[0_14px_30px_-6px_rgba(200,255,0,0.6),inset_0_1px_0_rgba(255,255,255,0.65)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#d6ff33] hover:shadow-[0_18px_36px_-6px_rgba(200,255,0,0.75),inset_0_1px_0_rgba(255,255,255,0.8)] active:translate-y-0 active:scale-[0.99]"
                >
                  <span>Consult With {trainer.name.split(" ")[0]}</span>
                  <span
                    aria-hidden="true"
                    className="flex h-7 w-7 items-center justify-center rounded-full bg-black/15 text-primary-foreground transition-transform duration-200 ease-out group-hover/btn:translate-x-0.5 group-hover/btn:bg-black/20"
                  >
                    <svg
                      className="h-3.5 w-3.5 transition-transform duration-200 ease-out group-hover/btn:translate-x-0.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m13 6 6 6-6 6" />
                    </svg>
                  </span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
