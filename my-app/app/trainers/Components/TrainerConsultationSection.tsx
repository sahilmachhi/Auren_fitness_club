"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { trainersData } from "../../../data/trainers";

interface TrainerConsultationSectionProps {
  preselectedCoachId?: string;
}

const GOAL_OPTIONS = [
  "Muscle Building & Strength",
  "Weight Loss & Fat Reduction",
  "Beginner Gym Onboarding",
  "Mobility & Injury-Safe Training",
  "Athletic Conditioning",
] as const;

const TIME_SLOTS = [
  "Morning (6:00 AM - 11:00 AM)",
  "Afternoon (11:00 AM - 4:00 PM)",
  "Evening (4:30 PM - 9:30 PM)",
] as const;

const QUICK_NOTE_CHIPS = [
  "First time lifting",
  "Back / knee care",
  "Need diet + workout mix",
  "Want a fixed weekly routine",
] as const;

export default function TrainerConsultationSection({
  preselectedCoachId,
}: TrainerConsultationSectionProps) {
  const [selectedCoach, setSelectedCoach] = useState<string>(
    preselectedCoachId || trainersData[0].id,
  );
  const [goal, setGoal] = useState<string>(GOAL_OPTIONS[0]);
  const [preferredSlot, setPreferredSlot] = useState<string>(TIME_SLOTS[0]);
  const [selectedQuickNotes, setSelectedQuickNotes] = useState<string[]>([]);
  const [customNote, setCustomNote] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedCoachId) {
      setSelectedCoach(preselectedCoachId);
      setSubmitted(false);
    }
  }, [preselectedCoachId]);

  const activeCoach =
    trainersData.find((t) => t.id === selectedCoach) ?? trainersData[0];

  const toggleQuickNote = (chip: string) => {
    setSubmitted(false);
    setSelectedQuickNotes((prev) =>
      prev.includes(chip)
        ? prev.filter((item) => item !== chip)
        : [...prev, chip],
    );
  };

  const combinedNotes = [
    ...selectedQuickNotes,
    ...(customNote.trim() ? [customNote.trim()] : []),
  ].join(", ");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim()) return;

    console.log("Trainer Consultation Booking:", {
      coachId: activeCoach.id,
      coachName: activeCoach.name,
      goal,
      preferredSlot,
      notes: combinedNotes || "None",
      fullName: fullName.trim(),
      phone: phone.trim(),
    });

    setSubmitted(true);
  };

  return (
    <section
      id="book-consultation"
      aria-labelledby="consultation-heading"
      className="relative w-full scroll-mt-24 bg-surface-dark py-24 text-white sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-surface-card p-8 shadow-[0_36px_72px_-16px_rgba(0,0,0,0.95),inset_0_1px_1px_rgba(255,255,255,0.14)] sm:p-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Left 5 Cols: Consultation Overview + Selected Coach Portrait Card */}
            <div className="flex flex-col justify-between lg:col-span-5">
              <div>
                <div className="mb-3 inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(200,255,0,0.8)]" />
                  <span className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-primary">
                    1-on-1 Assessment
                  </span>
                </div>

                <h2
                  id="consultation-heading"
                  className="font-display text-4xl leading-[0.98] tracking-tight text-white uppercase sm:text-5xl"
                >
                  Book Your Trainer{" "}
                  <span className="block text-primary">Consultation</span>
                </h2>

                <p className="mt-4 font-sans text-sm leading-relaxed text-white/75">
                  Tap your preferences in seconds and leave only your name and
                  phone number. Includes a complimentary 30-minute movement
                  check and goal roadmap.
                </p>

                <ul className="mt-8 space-y-3.5 pt-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
                  {[
                    "Posture, squat and hinge mobility assessment",
                    "Honest weekly training frequency recommendation",
                    "Past injury and schedule compatibility check",
                    "Zero obligation to purchase a PT package",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 font-sans text-sm text-white/85"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary shadow-[0_0_8px_rgba(200,255,0,0.9)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Selected Coach Card with Profile Photo */}
              <div className="mt-8 overflow-hidden rounded-2xl bg-surface-dark/95 p-4 shadow-[0_20px_40px_rgba(0,0,0,0.75),inset_0_1px_1px_rgba(200,255,0,0.25)] sm:p-5">
                <div className="flex items-center gap-4">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-black shadow-[0_10px_24px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.16)] sm:h-24 sm:w-24">
                    <Image
                      src={activeCoach.image}
                      alt={`${activeCoach.name} - ${activeCoach.role}`}
                      fill
                      unoptimized
                      sizes="96px"
                      className="object-cover object-[50%_18%]"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-heading text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                        Selected Coach
                      </span>
                      <span className="rounded-md bg-primary/15 px-2 py-0.5 font-heading text-[10px] font-bold uppercase tracking-wider text-primary">
                        {activeCoach.experienceYears}
                      </span>
                    </div>

                    <p className="mt-1 truncate font-display text-2xl text-white uppercase">
                      {activeCoach.name}
                    </p>

                    <p className="mt-0.5 truncate font-sans text-xs text-white/70">
                      {activeCoach.role}
                    </p>

                    <p className="mt-1.5 truncate font-sans text-[11px] text-white/50">
                      {activeCoach.availability}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 7 Cols: Click-First Consultation Builder */}
            <div className="lg:col-span-7">
              {submitted ? (
                <div className="flex h-full flex-col justify-center rounded-2xl bg-surface-dark/95 p-8 text-center shadow-[0_24px_48px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(200,255,0,0.35)] sm:p-10">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-[0_12px_28px_rgba(200,255,0,0.5)]">
                    <svg
                      className="h-7 w-7"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.75}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>

                  <h3 className="mt-5 font-display text-3xl text-white uppercase">
                    Consultation Request Received
                  </h3>
                  <p className="mx-auto mt-3 max-w-md font-sans text-sm leading-relaxed text-white/75">
                    Thanks,{" "}
                    <span className="font-semibold text-white">{fullName}</span>
                    . Your{" "}
                    <span className="font-semibold text-primary">
                      {preferredSlot}
                    </span>{" "}
                    request for{" "}
                    <span className="font-semibold text-white">{goal}</span>{" "}
                    with{" "}
                    <span className="font-semibold text-white">
                      {activeCoach.name}
                    </span>{" "}
                    is ready for confirmation on{" "}
                    <span className="font-semibold text-white">{phone}</span>.
                  </p>

                  <div className="mt-7">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFullName("");
                        setPhone("");
                        setCustomNote("");
                        setSelectedQuickNotes([]);
                      }}
                      className="cursor-pointer rounded-full bg-surface-card px-6 py-3 font-heading text-xs font-bold uppercase tracking-wider text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)] transition-colors hover:text-primary"
                    >
                      Book Another Session
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6 rounded-2xl bg-surface-dark/90 p-6 shadow-[0_24px_48px_rgba(0,0,0,0.75),inset_0_1px_1px_rgba(255,255,255,0.08)] sm:p-8"
                >
                  {/* 1. Tap to Choose Coach */}
                  <div>
                    <p className="font-heading text-xs font-bold uppercase tracking-wider text-primary">
                      1. Tap Your Preferred Trainer
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2.5">
                      {trainersData.map((coach) => {
                        const isActive = coach.id === activeCoach.id;
                        return (
                          <button
                            key={coach.id}
                            type="button"
                            onClick={() => {
                              setSelectedCoach(coach.id);
                              setSubmitted(false);
                            }}
                            className={`cursor-pointer rounded-full px-4 py-2 font-heading text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                              isActive
                                ? "bg-primary text-primary-foreground shadow-[0_8px_20px_-4px_rgba(200,255,0,0.5)]"
                                : "bg-surface-card text-white/75 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] hover:text-white"
                            }`}
                          >
                            {coach.name}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 2. Tap Primary Goal */}
                  <div>
                    <p className="font-heading text-xs font-bold uppercase tracking-wider text-primary">
                      2. Tap Your Main Goal
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2.5">
                      {GOAL_OPTIONS.map((item) => {
                        const active = goal === item;
                        return (
                          <button
                            key={item}
                            type="button"
                            onClick={() => {
                              setGoal(item);
                              setSubmitted(false);
                            }}
                            className={`cursor-pointer rounded-xl px-3.5 py-2.5 font-heading text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                              active
                                ? "bg-primary text-primary-foreground shadow-[0_8px_20px_-4px_rgba(200,255,0,0.45)]"
                                : "bg-surface-card text-white/75 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] hover:text-white"
                            }`}
                          >
                            {item}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 3. Tap Preferred Time Window */}
                  <div>
                    <p className="font-heading text-xs font-bold uppercase tracking-wider text-primary">
                      3. Tap Preferred Time Window
                    </p>
                    <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                      {TIME_SLOTS.map((slot) => {
                        const active = preferredSlot === slot;
                        return (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => {
                              setPreferredSlot(slot);
                              setSubmitted(false);
                            }}
                            className={`cursor-pointer rounded-xl px-3.5 py-3 text-left font-heading text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                              active
                                ? "bg-primary text-primary-foreground shadow-[0_8px_20px_-4px_rgba(200,255,0,0.45)]"
                                : "bg-surface-card text-white/75 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] hover:text-white"
                            }`}
                          >
                            {slot}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 4. One-Tap Context Chips + Optional Short Note */}
                  <div>
                    <p className="font-heading text-xs font-bold uppercase tracking-wider text-primary">
                      4. Quick Context (Tap Chips or Leave Blank)
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {QUICK_NOTE_CHIPS.map((chip) => {
                        const selected = selectedQuickNotes.includes(chip);
                        return (
                          <button
                            key={chip}
                            type="button"
                            onClick={() => toggleQuickNote(chip)}
                            className={`cursor-pointer rounded-full px-3.5 py-1.5 font-heading text-[11px] font-bold uppercase tracking-wider transition-all ${
                              selected
                                ? "bg-primary/20 text-primary shadow-[inset_0_1px_0_rgba(200,255,0,0.5)]"
                                : "bg-surface-card text-white/65 shadow-[inset_0_1px_1px_rgba(255,255,255,0.07)] hover:text-white"
                            }`}
                          >
                            {chip}
                          </button>
                        );
                      })}
                    </div>

                    <input
                      type="text"
                      value={customNote}
                      onChange={(e) => setCustomNote(e.target.value)}
                      placeholder="Optional extra note (injury, schedule, etc.)"
                      className="mt-3 w-full rounded-xl bg-surface-card px-4 py-2.5 font-sans text-xs text-white placeholder:text-white/35 shadow-[inset_0_2px_6px_rgba(0,0,0,0.6),inset_0_1px_0_0_rgba(255,255,255,0.06)] focus:outline-none focus:ring-2 focus:ring-primary sm:text-sm"
                    />
                  </div>

                  {/* 5. Minimal Contact Details (Name + Phone Only) */}
                  <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="consult-name"
                        className="block font-heading text-xs font-bold uppercase tracking-wider text-white/75"
                      >
                        Your Name *
                      </label>
                      <input
                        id="consult-name"
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Full name"
                        className="mt-2 w-full rounded-xl bg-surface-card px-4 py-3 font-sans text-sm text-white placeholder:text-white/35 shadow-[inset_0_2px_6px_rgba(0,0,0,0.6),inset_0_1px_0_0_rgba(255,255,255,0.06)] focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="consult-phone"
                        className="block font-heading text-xs font-bold uppercase tracking-wider text-white/75"
                      >
                        Phone / WhatsApp *
                      </label>
                      <input
                        id="consult-phone"
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="mt-2 w-full rounded-xl bg-surface-card px-4 py-3 font-sans text-sm text-white placeholder:text-white/35 shadow-[inset_0_2px_6px_rgba(0,0,0,0.6),inset_0_1px_0_0_rgba(255,255,255,0.06)] focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  {/* Submit Pill Button with SVG Arrow */}
                  <button
                    type="submit"
                    className="group/btn inline-flex w-full cursor-pointer items-center justify-between rounded-full bg-primary py-2.5 pr-3 pl-6 font-heading text-xs font-extrabold uppercase tracking-[0.12em] text-primary-foreground shadow-[0_14px_32px_-6px_rgba(200,255,0,0.55),inset_0_1px_0_0_rgba(255,255,255,0.6)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#d6ff33] sm:text-sm"
                  >
                    <span>Confirm Free Consultation</span>
                    <span
                      aria-hidden="true"
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-black/15 transition-transform duration-200 group-hover/btn:translate-x-0.5"
                    >
                      <svg
                        className="h-4 w-4"
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
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
