"use client";

import { useState } from "react";
import ActionButton from "../../Components/ui/ActionButton";

type BillingCycle = "monthly" | "quarterly" | "annual";

interface PlanPricing {
  monthlyEquivalent: number;
  billedTotal: number;
  billingNote: string;
  savingsTag?: string;
}

interface MembershipTier {
  id: string;
  name: string;
  badge?: string;
  tagline: string;
  featured?: boolean;
  pricing: Record<BillingCycle, PlanPricing>;
  highlights: string[];
  ctaLabel: string;
}

const BILLING_OPTIONS: {
  id: BillingCycle;
  label: string;
  discountBadge?: string;
}[] = [
  { id: "monthly", label: "Monthly" },
  { id: "quarterly", label: "Quarterly", discountBadge: "Save 15%" },
  { id: "annual", label: "Annual", discountBadge: "Save 30%" },
];

const membershipTiers: MembershipTier[] = [
  {
    id: "floor-access",
    name: "Floor Access",
    tagline:
      "Full access to calibrated strength racks, free weights, cardio zone, and conditioning turf.",
    pricing: {
      monthly: {
        monthlyEquivalent: 2499,
        billedTotal: 2499,
        billingNote: "Billed ₹2,499 every month",
      },
      quarterly: {
        monthlyEquivalent: 2125,
        billedTotal: 6375,
        billingNote: "Billed ₹6,375 every 3 months",
        savingsTag: "Save ₹1,122",
      },
      annual: {
        monthlyEquivalent: 1749,
        billedTotal: 20988,
        billingNote: "Billed ₹20,988 once a year",
        savingsTag: "Save ₹9,000",
      },
    },
    highlights: [
      "Unlimited daily access (5:30 AM - 10:30 PM)",
      "Calibrated plates, squat racks & Olympic platforms",
      "Functional turf & conditioning sleds",
      "1 initial floor orientation & form check",
      "Locker room, showers & digital check-in",
    ],
    ctaLabel: "Choose Floor Access",
  },
  {
    id: "performance-pro",
    name: "Performance Pro",
    badge: "Most Popular",
    tagline:
      "Structured training templates, monthly body-composition tracking, and coach check-ins.",
    featured: true,
    pricing: {
      monthly: {
        monthlyEquivalent: 3999,
        billedTotal: 3999,
        billingNote: "Billed ₹3,999 every month",
      },
      quarterly: {
        monthlyEquivalent: 3399,
        billedTotal: 10197,
        billingNote: "Billed ₹10,197 every 3 months",
        savingsTag: "Save ₹1,800",
      },
      annual: {
        monthlyEquivalent: 2799,
        billedTotal: 33588,
        billingNote: "Billed ₹33,588 once a year",
        savingsTag: "Save ₹14,400",
      },
    },
    highlights: [
      "Everything in Floor Access",
      "Customized 4-week workout & progression split",
      "Monthly body-fat & strength benchmark check",
      "Macro & daily protein calorie target setup",
      "Unlimited small-group turf conditioning sessions",
      "15-day annual travel freeze included",
    ],
    ctaLabel: "Start Performance Pro",
  },
  {
    id: "elite-coaching",
    name: "Elite 1-on-1",
    tagline:
      "Dedicated personal coach, hands-on form correction every session, and weekly nutrition audits.",
    pricing: {
      monthly: {
        monthlyEquivalent: 8499,
        billedTotal: 8499,
        billingNote: "Billed ₹8,499 every month",
      },
      quarterly: {
        monthlyEquivalent: 7225,
        billedTotal: 21675,
        billingNote: "Billed ₹21,675 every 3 months",
        savingsTag: "Save ₹3,822",
      },
      annual: {
        monthlyEquivalent: 5949,
        billedTotal: 71388,
        billingNote: "Billed ₹71,388 once a year",
        savingsTag: "Save ₹30,600",
      },
    },
    highlights: [
      "Everything in Performance Pro",
      "12 dedicated 1-on-1 personal training sessions / mo",
      "Weekly diet, weight-gain & recovery adjustments",
      "Priority peak-hour rack & coach scheduling",
      "2 complimentary guest passes every month",
      "30-day flexible membership freeze",
    ],
    ctaLabel: "Apply For Elite 1-on-1",
  },
];

function formatINR(amount: number) {
  return new Intl.NumberFormat("en-IN").format(amount);
}

export default function MembershipPlansSection() {
  const [billing, setBilling] = useState<BillingCycle>("quarterly");

  return (
    <section
      id="plans"
      aria-labelledby="plans-heading"
      className="relative w-full overflow-hidden bg-surface-dark pt-28 pb-20 text-white sm:pt-36 sm:pb-28"
    >
      {/* Subtle Top Ambient Lime Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 h-[380px] w-[760px] -translate-x-1/2 rounded-full bg-primary/[0.06] blur-[150px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Centered Page Hero Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(200,255,0,0.85)]" />
            <span className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-primary">
              Transparent Memberships
            </span>
          </div>

          <h1
            id="plans-heading"
            className="font-display text-4xl leading-[0.96] tracking-tight text-white uppercase sm:text-6xl lg:text-[4.25rem]"
          >
            Invest In Real{" "}
            <span className="block text-primary">Strength &amp; Coaching</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl font-sans text-sm leading-relaxed text-white/75 sm:text-base">
            No hidden registration traps or confusing lock-ins. Pick the
            training tier and billing rhythm that matches your commitment.
          </p>

          {/* Interactive Monthly / Quarterly / Annual Switcher */}
          <div className="mt-9 inline-flex flex-wrap items-center justify-center gap-1.5 rounded-2xl bg-surface-card/90 p-1.5 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.9),inset_0_1px_1px_rgba(255,255,255,0.12)] backdrop-blur-md">
            {BILLING_OPTIONS.map((option) => {
              const isActive = billing === option.id;

              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setBilling(option.id)}
                  className={`relative inline-flex items-center gap-2 rounded-xl px-4 py-2.5 font-heading text-xs font-bold uppercase tracking-wider transition-all duration-200 sm:px-5 ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-[0_8px_20px_-4px_rgba(200,255,0,0.5),inset_0_1px_0_rgba(255,255,255,0.6)]"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  <span>{option.label}</span>
                  {option.discountBadge && (
                    <span
                      className={`rounded-md px-2 py-0.5 text-[10px] font-extrabold tracking-wide ${
                        isActive
                          ? "bg-black/15 text-black"
                          : "bg-primary/15 text-primary"
                      }`}
                    >
                      {option.discountBadge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3-Column Pricing Cards */}
        <div className="mt-14 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-3">
          {membershipTiers.map((tier) => {
            const activePrice = tier.pricing[billing];

            return (
              <article
                key={tier.id}
                className={`relative flex flex-col justify-between overflow-hidden rounded-3xl p-7 transition-transform duration-300 hover:-translate-y-1.5 sm:p-9 ${
                  tier.featured
                    ? "bg-gradient-to-b from-[#202619] via-surface-card to-[#131512] shadow-[0_36px_72px_-14px_rgba(0,0,0,0.96),0_0_50px_-16px_rgba(200,255,0,0.28),inset_0_1px_1px_rgba(200,255,0,0.45)]"
                    : "bg-surface-card/85 shadow-[0_26px_54px_-14px_rgba(0,0,0,0.9),inset_0_1px_1px_rgba(255,255,255,0.12)]"
                }`}
              >
                {/* Top Highlight Line for Featured Card */}
                {tier.featured && (
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-8 top-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"
                  />
                )}

                <div>
                  {/* Tier Header + Optional Popular Badge */}
                  <div className="flex items-center justify-between gap-3">
                    <h2 className="font-display text-2xl tracking-wide text-white uppercase sm:text-3xl">
                      {tier.name}
                    </h2>

                    {tier.badge && (
                      <span className="rounded-full bg-primary px-3 py-1 font-heading text-[10px] font-extrabold uppercase tracking-wider text-primary-foreground shadow-[0_6px_16px_rgba(200,255,0,0.4)]">
                        {tier.badge}
                      </span>
                    )}
                  </div>

                  <p className="mt-2.5 font-sans text-sm leading-relaxed text-white/70">
                    {tier.tagline}
                  </p>

                  {/* Dynamic Price Block */}
                  <div className="mt-7 rounded-2xl bg-surface-dark/80 p-5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]">
                    <div className="flex items-baseline justify-between gap-2">
                      <div className="flex items-baseline gap-1">
                        <span className="font-heading text-lg font-bold text-primary">
                          ₹
                        </span>
                        <span className="font-display text-4xl tracking-tight text-white sm:text-5xl">
                          {formatINR(activePrice.monthlyEquivalent)}
                        </span>
                        <span className="font-sans text-xs font-medium text-white/60">
                          / month
                        </span>
                      </div>

                      {activePrice.savingsTag && (
                        <span className="rounded-md bg-primary/15 px-2.5 py-1 font-heading text-[11px] font-bold uppercase tracking-wider text-primary">
                          {activePrice.savingsTag}
                        </span>
                      )}
                    </div>

                    <p className="mt-2 font-sans text-xs text-white/55">
                      {activePrice.billingNote}
                    </p>
                  </div>

                  {/* Included Highlights List */}
                  <ul className="mt-7 space-y-3.5">
                    {tier.highlights.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 font-sans text-sm text-white/85"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                          <svg
                            className="h-3.5 w-3.5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Bottom CTA */}
                <div className="mt-9 pt-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
                  <ActionButton
                    href={`/contact?plan=${tier.id}&billing=${billing}#join`}
                    variant={tier.featured ? "primary" : "glass"}
                    className="w-full justify-center"
                  >
                    {tier.ctaLabel}
                  </ActionButton>
                </div>
              </article>
            );
          })}
        </div>

        {/* Reassurance Strip Below Cards */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-center font-sans text-xs text-white/60">
          <span>Zero hidden annual maintenance fees</span>
          <span className="hidden h-1 w-1 rounded-full bg-white/25 sm:inline-block" />
          <span>Upgrade tiers anytime by paying only the difference</span>
          <span className="hidden h-1 w-1 rounded-full bg-white/25 sm:inline-block" />
          <span>Free 1-day trial available before committing</span>
        </div>
      </div>
    </section>
  );
}
