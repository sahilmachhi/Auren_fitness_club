"use client";

import { useState } from "react";
import ActionButton from "./ui/ActionButton";

type FaqCategory =
  | "All"
  | "First Visit & Trial"
  | "Training & Diet"
  | "Membership & Hours";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: Exclude<FaqCategory, "All">;
}

const FAQ_CATEGORIES: FaqCategory[] = [
  "All",
  "First Visit & Trial",
  "Training & Diet",
  "Membership & Hours",
];

const faqItems: FaqItem[] = [
  {
    id: "faq-1",
    question: "I have never lifted weights before. Will I feel out of place?",
    answer:
      "Not at all. A huge part of our floor is built for first-time lifters and people returning after a long break. You do not need to know exercise names or gym slang before walking in. During your onboarding and movement check, a coach shows you how to set up racks, adjust benches, and lift safely at your own pace.",
    category: "First Visit & Trial",
  },
  {
    id: "faq-2",
    question:
      "What happens during the free trial session and what should I bring?",
    answer:
      "Your trial includes full access to our training floor plus a focused 20-minute coach movement check so we understand your goals, joint history, and schedule. Just bring comfortable workout clothes, clean indoor training shoes, a water bottle, and a sweat towel.",
    category: "First Visit & Trial",
  },
  {
    id: "faq-3",
    question: "Do you help with weight gain and diet plans, or just workouts?",
    answer:
      "Both. Gaining lean mass or losing fat without burning out requires matching your training stimulus with realistic daily protein and calorie habits. Our coaches help you structure practical meal routines around everyday foods rather than extreme crash diets or expensive supplement stacks you do not need.",
    category: "Training & Diet",
  },
  {
    id: "faq-4",
    question: "Will coaches actually correct my form on the gym floor?",
    answer:
      "Yes. Good coaching is about catching bad habits early before bad reps become ingrained or strain your lower back, shoulders, or knees. Whether you are learning barbell squats, Romanian deadlifts, or conditioning drills on the turf, our team prioritizes safe mechanics over ego weights.",
    category: "Training & Diet",
  },
  {
    id: "faq-5",
    question: "What are your daily opening hours and peak times?",
    answer:
      "We are open daily from 5:30 AM to 10:30 PM. Early mornings and late evenings are naturally livelier, while mid-morning and afternoon slots offer a quieter, unhurried floor if you prefer extra space on racks and platforms.",
    category: "Membership & Hours",
  },
  {
    id: "faq-6",
    question: "Will I be stuck waiting forever for squat racks or weights?",
    answer:
      "We plan our floor layout and equipment ratios carefully so members can train with real structure instead of standing around between sets. Having dedicated strength stations, calibrated plates, and conditioning turf keeps sessions moving smoothly.",
    category: "Membership & Hours",
  },
  {
    id: "faq-7",
    question: "Can I pause or freeze my membership if I travel or get sick?",
    answer:
      "Life happens: work trips, exams, family commitments, and recovery days are part of long-term consistency. Speak with our front desk team when a planned break comes up so we can handle your membership freeze clearly and fairly.",
    category: "Membership & Hours",
  },
  {
    id: "faq-8",
    question: "Is personal training required, or can I train on my own?",
    answer:
      "You can train independently on a standard membership, add structured programming guidance, or pair up for 1-on-1 personal training if you want closer accountability, custom progression tracking, and hands-on coaching every session.",
    category: "Training & Diet",
  },
];

export default function GymFaqSection() {
  const [activeCategory, setActiveCategory] = useState<FaqCategory>("All");
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    "faq-1": true,
  });

  const filteredFaqs =
    activeCategory === "All"
      ? faqItems
      : faqItems.filter((item) => item.category === activeCategory);

  const toggleItem = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative w-full bg-surface-dark py-24 text-white sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          {/* LEFT 5 COLUMNS: Sticky Intro + Filter Pills + Direct CTA */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <div className="mb-3 inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(200,255,0,0.8)]" />
                <span className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-primary">
                  Common Questions
                </span>
              </div>

              <h2
                id="faq-heading"
                className="font-display text-4xl leading-[0.98] tracking-tight text-white uppercase sm:text-5xl lg:text-6xl"
              >
                Everything New{" "}
                <span className="block text-white/45">Members Ask First</span>
              </h2>

              <p className="mt-5 font-sans text-sm leading-relaxed text-white/70 sm:text-base">
                Straight answers on beginner coaching, weight gain and diet
                guidance, trial passes, and daily floor rules before you step
                in.
              </p>

              {/* Category Filter Chips */}
              <div
                role="tablist"
                aria-label="Filter frequently asked questions"
                className="mt-7 flex flex-wrap gap-2"
              >
                {FAQ_CATEGORIES.map((category) => {
                  const isSelected = activeCategory === category;
                  return (
                    <button
                      key={category}
                      type="button"
                      role="tab"
                      aria-selected={isSelected}
                      onClick={() => setActiveCategory(category)}
                      className={`rounded-full px-3.5 py-2 font-heading text-[11px] font-bold uppercase tracking-wider transition-all duration-200 ${
                        isSelected
                          ? "bg-primary text-primary-foreground shadow-[0_8px_20px_-4px_rgba(200,255,0,0.45),inset_0_1px_0_rgba(255,255,255,0.55)]"
                          : "bg-surface-card/85 text-white/70 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] hover:bg-surface-card hover:text-white"
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>

              {/* Still Have a Question Box */}
              <div className="mt-8 rounded-2xl bg-surface-card/90 p-6 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.12)]">
                <p className="font-heading text-xs font-bold uppercase tracking-[0.18em] text-primary">
                  Still Unsure?
                </p>
                <p className="mt-1.5 font-sans text-sm leading-relaxed text-white/80">
                  Come see the floor in person and talk directly with a coach
                  with zero pressure to sign up on the spot.
                </p>
                <div className="mt-5">
                  <ActionButton
                    href="/contact#free-trial"
                    variant="primary"
                    size="sm"
                  >
                    Book Free Trial Visit
                  </ActionButton>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT 7 COLUMNS: Expandable Accordion List */}
          <div className="space-y-4 lg:col-span-7">
            {filteredFaqs.map((item, index) => {
              const isOpen = Boolean(openIds[item.id]);

              return (
                <div
                  key={item.id}
                  className={`overflow-hidden rounded-2xl transition-all duration-300 ${
                    isOpen
                      ? "bg-surface-card shadow-[0_24px_52px_-12px_rgba(0,0,0,0.92),inset_0_1px_1px_rgba(200,255,0,0.28)]"
                      : "bg-surface-card/75 shadow-[0_16px_36px_-12px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.1)] hover:bg-surface-card"
                  }`}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${item.id}`}
                    onClick={() => toggleItem(item.id)}
                    className="flex w-full items-start justify-between gap-4 p-6 text-left sm:items-center sm:px-7 sm:py-6"
                  >
                    <div className="flex items-start gap-4 sm:items-center">
                      <span className="mt-0.5 font-heading text-xs font-bold tracking-widest text-primary/80 sm:mt-0">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <span className="mb-1 block font-heading text-[10px] font-bold uppercase tracking-[0.18em] text-white/45">
                          {item.category}
                        </span>
                        <h3 className="font-heading text-base font-bold leading-snug text-white sm:text-lg">
                          {item.question}
                        </h3>
                      </div>
                    </div>

                    {/* Plus / Minus Indicator */}
                    <span
                      aria-hidden="true"
                      className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-200 sm:mt-0 ${
                        isOpen
                          ? "bg-primary text-primary-foreground rotate-45 shadow-[0_0_16px_rgba(200,255,0,0.4)]"
                          : "bg-white/[0.07] text-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]"
                      }`}
                    >
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                    </span>
                  </button>

                  {/* Smooth CSS Grid Expand/Collapse */}
                  <div
                    id={`faq-panel-${item.id}`}
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pt-1 pb-6 pl-14 sm:px-7 sm:pb-7 sm:pl-16">
                        <div className="pt-3 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
                          <p className="font-sans text-sm leading-relaxed text-white/80 sm:text-[15px]">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
