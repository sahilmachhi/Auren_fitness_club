"use client";

import { useState } from "react";
import ActionButton from "../../Components/ui/ActionButton";
import { trainingProgramsData } from "../../../data/programs";

export default function ProgramSpecificDetailsSection() {
  const [selectedSlug, setSelectedSlug] = useState<string>(
    trainingProgramsData[0].slug,
  );

  const activeProgram =
    trainingProgramsData.find((p) => p.slug === selectedSlug) ??
    trainingProgramsData[0];

  return (
    <section
      id="program-details"
      aria-labelledby="program-details-heading"
      className="relative w-full scroll-mt-24 bg-surface-dark py-24 text-white sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(200,255,0,0.8)]" />
            <span className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-primary">
              Program-Specific Details
            </span>
          </div>

          <h2
            id="program-details-heading"
            className="font-display text-4xl leading-[0.98] tracking-tight text-white uppercase sm:text-5xl"
          >
            Inspect Weekly Structure{" "}
            <span className="block text-white/45">&amp; Training Split</span>
          </h2>
        </div>

        {/* Interactive Program Selector Tabs (Zero Borders, Shadow + Lime Active State) */}
        <div
          role="tablist"
          aria-label="Select program for weekly breakdown"
          className="mt-10 flex flex-wrap gap-3"
        >
          {trainingProgramsData.map((program) => {
            const isSelected = program.slug === activeProgram.slug;

            return (
              <button
                key={program.slug}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedSlug(program.slug)}
                className={`rounded-xl px-5 py-3 font-heading text-xs font-bold uppercase tracking-wider transition-all duration-200 sm:text-sm ${
                  isSelected
                    ? "bg-primary text-primary-foreground shadow-[0_10px_24px_-6px_rgba(200,255,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.55)]"
                    : "bg-surface-card/80 text-white/75 shadow-[0_8px_20px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.08)] hover:bg-surface-card hover:text-white"
                }`}
              >
                {program.number}. {program.title}
              </button>
            );
          })}
        </div>

        {/* Active Program Weekly Blueprint Panel */}
        <div
          role="tabpanel"
          className="mt-8 rounded-3xl bg-surface-card p-6 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.9),inset_0_1px_1px_rgba(255,255,255,0.12)] sm:p-10"
        >
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            {/* Left 5 Cols: Program Summary & CTA */}
            <div className="flex flex-col justify-between lg:col-span-5">
              <div>
                <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  Sample Weekly Blueprint
                </span>
                <h3 className="mt-2 font-display text-3xl text-white uppercase sm:text-4xl">
                  {activeProgram.title}
                </h3>
                <p className="mt-4 font-sans text-sm leading-relaxed text-white/75">
                  {activeProgram.summary}
                </p>

                <div className="mt-6 space-y-2.5 pt-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
                  <div className="flex justify-between text-xs">
                    <span className="font-heading uppercase tracking-wider text-white/55">
                      Recommended Cycle
                    </span>
                    <span className="font-heading font-bold text-white">
                      {activeProgram.duration}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="font-heading uppercase tracking-wider text-white/55">
                      Weekly Commitment
                    </span>
                    <span className="font-heading font-bold text-white">
                      {activeProgram.frequency}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="font-heading uppercase tracking-wider text-white/55">
                      Avg. Session Time
                    </span>
                    <span className="font-heading font-bold text-primary">
                      {activeProgram.sessionLength}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <ActionButton
                  href={`/programs/${activeProgram.slug}`}
                  variant="primary"
                  size="sm"
                >
                  Open Full Guide
                </ActionButton>
                <ActionButton
                  href={`/contact?program=${activeProgram.slug}#free-trial`}
                  variant="glass"
                  size="sm"
                >
                  Book Trial Session
                </ActionButton>
              </div>
            </div>

            {/* Right 7 Cols: Day-by-Day Split Rows */}
            <div className="lg:col-span-7">
              <div className="space-y-3">
                {activeProgram.weeklyStructure.map((slot) => (
                  <div
                    key={slot.day}
                    className="flex flex-col justify-between gap-2 rounded-2xl bg-surface-dark/90 px-5 py-4 shadow-[0_10px_24px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.08)] sm:flex-row sm:items-center"
                  >
                    <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-primary">
                      {slot.day}
                    </span>
                    <span className="font-heading text-sm font-semibold text-white sm:text-base">
                      {slot.focus}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
