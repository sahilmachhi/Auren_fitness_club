"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface FeeItem {
  label: string;
  amount: string;
  note: string;
  waivedOn?: string;
}

interface TermItem {
  id: string;
  title: string;
  summary: string;
  details: string[];
}

const joiningFees: FeeItem[] = [
  {
    label: "One-Time Registration & Access Card",
    amount: "₹999",
    note: "Covers digital member ID, locker access key, and initial floor onboarding.",
    waivedOn: "Waived on Quarterly & Annual Plans",
  },
  {
    label: "45-Min Movement & Body Benchmark Screen",
    amount: "₹750",
    note: "Included free with Performance Pro and Elite 1-on-1 memberships.",
    waivedOn: "₹0 on Pro & Elite",
  },
  {
    label: "Monthly Renewal / Maintenance Fee",
    amount: "₹0",
    note: "We never charge surprise annual equipment maintenance or renewal surcharges.",
  },
];

const termsList: TermItem[] = [
  {
    id: "freeze-policy",
    title: "Membership Freeze & Travel Pause",
    summary:
      "Pause your active days during exams, work travel, or medical recovery.",
    details: [
      "Quarterly members can request one 7-day freeze; Performance Pro includes 15 days/year; Elite 1-on-1 includes 30 days/year.",
      "Freeze requests must be submitted at least 48 hours before your travel or break starts.",
      "Medical freezes with a doctor's note are reviewed flexibly without penalty.",
    ],
  },
  {
    id: "upgrades-renewals",
    title: "Plan Upgrades & Billing Renewals",
    summary: "Upgrade tiers anytime without losing what you already paid.",
    details: [
      "You can upgrade from Floor Access to Performance Pro or Elite 1-on-1 at any point by paying the prorated balance.",
      "No forced auto-debits without notice: we send a reminder 5 days before your cycle ends.",
      "Discounts on Quarterly (15%) and Annual (30%) plans apply when paid upfront for the full cycle.",
    ],
  },
  {
    id: "refunds-transfers",
    title: "Cancellations, Refunds & Transfers",
    summary: "Clear, upfront rules before you complete your online purchase.",
    details: [
      "All memberships include a 7-day satisfaction window: if you are unhappy in your first week, request a full refund minus used day-pass value.",
      "After 7 days, active membership fees are non-refundable, though unused Annual plans can be transferred once to a family member or friend for a ₹500 transfer fee.",
    ],
  },
  {
    id: "floor-etiquette",
    title: "Floor Standards & Safety Guidelines",
    summary:
      "Keeping the training environment clean, safe, and focused for everyone.",
    details: [
      "Clean indoor training shoes, a personal sweat towel, and re-racking calibrated plates after sets are mandatory.",
      "Members under 18 require signed guardian consent during their first floor orientation.",
    ],
  },
];

export default function JoiningFeesAndTermsSection() {
  const [openTermId, setOpenTermId] = useState<string>("freeze-policy");

  return (
    <section
      id="fees-and-terms"
      aria-labelledby="fees-terms-heading"
      className="relative w-full bg-surface-dark py-20 text-white sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="mb-3 inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(200,255,0,0.8)]" />
            <span className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-primary">
              Zero Hidden Surprises
            </span>
          </div>

          <h2
            id="fees-terms-heading"
            className="font-display text-3xl leading-[0.98] tracking-tight text-white uppercase sm:text-5xl"
          >
            Joining Fees &amp;{" "}
            <span className="block text-white/45">Membership Terms</span>
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          {/* LEFT 5 COLUMNS: Transparent Joining Fees Breakdown */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-surface-card p-7 shadow-[0_28px_56px_-14px_rgba(0,0,0,0.92),inset_0_1px_1px_rgba(255,255,255,0.12)] sm:p-8">
              <div className="flex items-center justify-between pb-4 shadow-[inset_0_-1px_0_0_rgba(255,255,255,0.08)]">
                <div>
                  <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-primary">
                    Upfront Fee Policy
                  </p>
                  <h3 className="mt-1 font-display text-2xl tracking-wide text-white uppercase">
                    Joining &amp; Onboarding
                  </h3>
                </div>
              </div>

              <div className="mt-6 space-y-5">
                {joiningFees.map((fee) => (
                  <div
                    key={fee.label}
                    className="rounded-2xl bg-surface-dark/80 p-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.07)]"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <p className="font-heading text-sm font-bold text-white">
                        {fee.label}
                      </p>
                      <span className="shrink-0 font-display text-xl text-primary">
                        {fee.amount}
                      </span>
                    </div>

                    <p className="mt-1.5 font-sans text-xs leading-relaxed text-white/65">
                      {fee.note}
                    </p>

                    {fee.waivedOn && (
                      <span className="mt-2.5 inline-block rounded-md bg-primary/15 px-2.5 py-1 font-heading text-[10px] font-bold uppercase tracking-wider text-primary">
                        {fee.waivedOn}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              <p className="mt-6 font-sans text-xs leading-relaxed text-white/55">
                All prices are inclusive of applicable GST. Choose Quarterly or
                Annual billing below to waive the ₹999 registration fee
                automatically.
              </p>
            </div>
          </div>

          {/* RIGHT 7 COLUMNS: Smooth Drop-Down & Drop-Up Terms Accordion */}
          <div className="space-y-4 lg:col-span-7">
            {termsList.map((term, idx) => {
              const isOpen = openTermId === term.id;
              const panelId = `term-panel-${term.id}`;

              return (
                <motion.div
                  key={term.id}
                  layout="position"
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className={`overflow-hidden rounded-2xl transition-colors duration-300 ${
                    isOpen
                      ? "bg-surface-card shadow-[0_24px_48px_-12px_rgba(0,0,0,0.92),inset_0_1px_1px_rgba(200,255,0,0.32)]"
                      : "bg-surface-card/75 shadow-[0_16px_36px_-12px_rgba(0,0,0,0.82),inset_0_1px_1px_rgba(255,255,255,0.09)] hover:bg-surface-card"
                  }`}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenTermId(isOpen ? "" : term.id)}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left"
                  >
                    <div className="flex items-start gap-4">
                      <span className="mt-0.5 font-heading text-xs font-bold tracking-widest text-primary">
                        0{idx + 1}
                      </span>
                      <div>
                        <h3 className="font-heading text-base font-bold text-white sm:text-lg">
                          {term.title}
                        </h3>
                        <p className="mt-0.5 font-sans text-xs text-white/60">
                          {term.summary}
                        </p>
                      </div>
                    </div>

                    {/* Smooth Rotating Plus/Close Icon */}
                    <motion.span
                      aria-hidden="true"
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-200 ${
                        isOpen
                          ? "bg-primary text-primary-foreground shadow-[0_0_16px_rgba(200,255,0,0.45)]"
                          : "bg-white/[0.07] text-white/80"
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
                    </motion.span>
                  </button>

                  {/* Smooth Drop-Down & Drop-Up Content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                          transition: {
                            height: {
                              duration: 0.34,
                              ease: [0.22, 1, 0.36, 1],
                            },
                            opacity: { duration: 0.22, delay: 0.08 },
                          },
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                          transition: {
                            height: { duration: 0.26, ease: [0.4, 0, 0.2, 1] },
                            opacity: { duration: 0.14 },
                          },
                        }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pt-1 pb-6 pl-14">
                          <ul className="space-y-2.5 pt-3 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
                            {term.details.map((point, pointIdx) => (
                              <motion.li
                                key={point}
                                initial={{ opacity: 0, y: 6 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -4 }}
                                transition={{
                                  duration: 0.22,
                                  delay: 0.08 + pointIdx * 0.05,
                                  ease: "easeOut",
                                }}
                                className="flex items-start gap-2.5 font-sans text-xs leading-relaxed text-white/80 sm:text-sm"
                              >
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                <span>{point}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
