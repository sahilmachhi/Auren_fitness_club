"use client";

import { useMemo, useState } from "react";

type PlanId = "floor-access" | "performance-pro" | "elite-coaching";
type BillingId = "monthly" | "quarterly" | "annual";
type CheckoutMode = "purchase" | "enquiry";
type ObjectiveId = "weight-gain" | "fat-loss" | "strength" | "conditioning";
type CoachingLevel = "self-guided" | "guided" | "one-on-one";

const OBJECTIVES: {
  id: ObjectiveId;
  label: string;
  sub: string;
  planFocus: string;
}[] = [
  {
    id: "weight-gain",
    label: "Clean Weight Gain",
    sub: "Build mass without excess fat",
    planFocus: "Surplus Diet + Compound Hypertrophy",
  },
  {
    id: "fat-loss",
    label: "Fat Loss & Recomp",
    sub: "Drop body fat, keep strength",
    planFocus: "High-Protein Deficit + Metabolic Circuits",
  },
  {
    id: "strength",
    label: "Strength & Power",
    sub: "Lift heavier with clean form",
    planFocus: "Progressive Overload + Rack Mechanics",
  },
  {
    id: "conditioning",
    label: "Stamina & Turf",
    sub: "Endurance, agility & energy",
    planFocus: "Conditioning Turf + Interval Work",
  },
];

const WORKOUT_OPTIONS = [
  "Barbell & Racks",
  "Conditioning Turf",
  "Dumbbells & Cables",
  "Mobility & Core",
  "Cardio Intervals",
] as const;

const COACHING_OPTIONS: {
  id: CoachingLevel;
  label: string;
  desc: string;
  recommendedPlan: PlanId;
}[] = [
  {
    id: "self-guided",
    label: "Independent Floor",
    desc: "Train on your own with clean equipment & 1 onboarding check",
    recommendedPlan: "floor-access",
  },
  {
    id: "guided",
    label: "Structured Plan + Check-Ins",
    desc: "4-week custom split, diet macros & monthly progress review",
    recommendedPlan: "performance-pro",
  },
  {
    id: "one-on-one",
    label: "Dedicated 1-on-1 Coach",
    desc: "Hands-on coaching sessions & weekly diet adjustments",
    recommendedPlan: "elite-coaching",
  },
];

const PLAN_PRICES: Record<
  PlanId,
  { name: string; monthly: number; quarterly: number; annual: number }
> = {
  "floor-access": {
    name: "Floor Access",
    monthly: 2499,
    quarterly: 6375,
    annual: 20988,
  },
  "performance-pro": {
    name: "Performance Pro",
    monthly: 3999,
    quarterly: 10197,
    annual: 33588,
  },
  "elite-coaching": {
    name: "Elite 1-on-1",
    monthly: 8499,
    quarterly: 21675,
    annual: 71388,
  },
};

const DIET_ADDON_MONTHLY = 999;

function formatINR(amount: number) {
  return new Intl.NumberFormat("en-IN").format(amount);
}

export default function MembershipEnquirySection() {
  const [mode, setMode] = useState<CheckoutMode>("purchase");

  // Interactive Question States (Click & Slider Friendly)
  const [objective, setObjective] = useState<ObjectiveId>("weight-gain");
  const [workouts, setWorkouts] = useState<string[]>([
    "Barbell & Racks",
    "Dumbbells & Cables",
  ]);
  const [daysPerWeek, setDaysPerWeek] = useState<number>(4);
  const [coaching, setCoaching] = useState<CoachingLevel>("guided");
  const [selectedBilling, setSelectedBilling] =
    useState<BillingId>("quarterly");
  const [includeDietPlan, setIncludeDietPlan] = useState<boolean>(true);
  const [manualPlanOverride, setManualPlanOverride] = useState<PlanId | null>(
    null,
  );

  // Minimal Contact Inputs
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [agreedTerms, setAgreedTerms] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const recommendedPlan: PlanId = useMemo(() => {
    if (manualPlanOverride) return manualPlanOverride;
    const match = COACHING_OPTIONS.find((c) => c.id === coaching);
    return match ? match.recommendedPlan : "performance-pro";
  }, [coaching, manualPlanOverride]);

  const activeObjective =
    OBJECTIVES.find((o) => o.id === objective) || OBJECTIVES[0];
  const planInfo = PLAN_PRICES[recommendedPlan];

  const monthsCount =
    selectedBilling === "monthly"
      ? 1
      : selectedBilling === "quarterly"
        ? 3
        : 12;

  const basePlanAmount = planInfo[selectedBilling];

  // Diet & macro coaching add-on is already included inside Performance Pro & Elite 1-on-1
  const needsSeparateDietAddon =
    includeDietPlan && recommendedPlan === "floor-access";
  const dietAddonTotal = needsSeparateDietAddon
    ? DIET_ADDON_MONTHLY * monthsCount
    : 0;

  const joiningFee = selectedBilling === "monthly" ? 999 : 0;
  const totalPayable = basePlanAmount + dietAddonTotal + joiningFee;

  const toggleWorkout = (item: string) => {
    setSubmitted(false);
    setWorkouts((prev) =>
      prev.includes(item) ? prev.filter((w) => w !== item) : [...prev, item],
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim() || !agreedTerms) return;

    const collectedData = {
      submittedAt: new Date().toISOString(),
      mode,
      member: {
        fullName: fullName.trim(),
        phone: phone.trim(),
        agreedTerms,
      },
      preferences: {
        objective,
        objectiveLabel: activeObjective.label,
        planFocus: activeObjective.planFocus,
        workouts,
        daysPerWeek,
        coaching,
        includeDietPlan,
      },
      plan: {
        planId: recommendedPlan,
        planName: planInfo.name,
        billing: selectedBilling,
        monthsCount,
      },
      pricing: {
        basePlanAmount,
        dietAddonTotal,
        dietIncludedInPlan: includeDietPlan && !needsSeparateDietAddon,
        joiningFee,
        totalPayable,
        currency: "INR",
      },
    };

    console.log("Auren Membership Submission Data:", collectedData);
    setSubmitted(true);
  };

  return (
    <section
      id="join"
      aria-labelledby="join-heading"
      className="relative w-full bg-surface-dark py-20 text-white sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-surface-card p-6 shadow-[0_36px_72px_-16px_rgba(0,0,0,0.95),0_0_50px_-20px_rgba(200,255,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.14)] sm:p-10 lg:p-12">
          {/* Top Header + Mode Switcher */}
          <div className="flex flex-col justify-between gap-6 pb-8 shadow-[inset_0_-1px_0_0_rgba(255,255,255,0.08)] lg:flex-row lg:items-end">
            <div>
              <div className="mb-3 inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(200,255,0,0.85)]" />
                <span className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-primary">
                  Interactive Plan Builder &amp; Calculator
                </span>
              </div>

              <h2
                id="join-heading"
                className="font-display text-3xl leading-[0.98] tracking-tight text-white uppercase sm:text-5xl"
              >
                Build Your Plan{" "}
                <span className="block text-white/45">
                  In 5 Quick Taps &amp; Sliders
                </span>
              </h2>
            </div>

            {/* Mode Switcher */}
            <div className="inline-flex rounded-2xl bg-surface-dark/90 p-1.5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]">
              <button
                type="button"
                onClick={() => {
                  setMode("purchase");
                  setSubmitted(false);
                }}
                className={`rounded-xl px-4 py-2.5 font-heading text-xs font-bold uppercase tracking-wider transition-all ${
                  mode === "purchase"
                    ? "bg-primary text-primary-foreground shadow-[0_6px_18px_rgba(200,255,0,0.4)]"
                    : "text-white/70 hover:text-white"
                }`}
              >
                Online Purchase
              </button>

              <button
                type="button"
                onClick={() => {
                  setMode("enquiry");
                  setSubmitted(false);
                }}
                className={`rounded-xl px-4 py-2.5 font-heading text-xs font-bold uppercase tracking-wider transition-all ${
                  mode === "enquiry"
                    ? "bg-primary text-primary-foreground shadow-[0_6px_18px_rgba(200,255,0,0.4)]"
                    : "text-white/70 hover:text-white"
                }`}
              >
                Coach Callback
              </button>
            </div>
          </div>

          {/* Main 12-Col Grid: Left Guided Questions, Right Personalized Summary & Calculator */}
          <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12">
            {/* LEFT 7 COLUMNS: Click & Slider Questions */}
            <div className="space-y-8 lg:col-span-7">
              {/* Q1: Main Objective */}
              <div>
                <p className="font-heading text-xs font-bold uppercase tracking-wider text-primary">
                  Q1 · What is your main objective?
                </p>
                <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {OBJECTIVES.map((item) => {
                    const active = objective === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => {
                          setObjective(item.id);
                          setSubmitted(false);
                        }}
                        className={`rounded-2xl p-4 text-left transition-all duration-200 ${
                          active
                            ? "bg-primary/15 text-white shadow-[inset_0_1px_1px_rgba(200,255,0,0.5),0_12px_28px_-10px_rgba(200,255,0,0.3)]"
                            : "bg-surface-dark/80 text-white/75 shadow-[inset_0_1px_1px_rgba(255,255,255,0.07)] hover:bg-surface-dark hover:text-white"
                        }`}
                      >
                        <p className="font-heading text-sm font-bold text-white">
                          {item.label}
                        </p>
                        <p className="mt-1 font-sans text-xs text-white/60">
                          {item.sub}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Q2: Preferred Workouts (Multi-Click Chips) */}
              <div>
                <p className="font-heading text-xs font-bold uppercase tracking-wider text-primary">
                  Q2 · Which workouts do you enjoy most? (Tap to toggle)
                </p>
                <div className="mt-3 flex flex-wrap gap-2.5">
                  {WORKOUT_OPTIONS.map((item) => {
                    const selected = workouts.includes(item);
                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => toggleWorkout(item)}
                        className={`rounded-full px-4 py-2.5 font-heading text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                          selected
                            ? "bg-primary text-primary-foreground shadow-[0_8px_20px_-4px_rgba(200,255,0,0.45)]"
                            : "bg-surface-dark/85 text-white/70 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] hover:text-white"
                        }`}
                      >
                        {selected ? `✓ ${item}` : `+ ${item}`}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Q3: Weekly Training Days Slider */}
              <div className="rounded-2xl bg-surface-dark/80 p-5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-heading text-xs font-bold uppercase tracking-wider text-primary">
                      Q3 · How many days a week can you train?
                    </p>
                    <p className="mt-1 font-sans text-xs text-white/60">
                      {daysPerWeek <= 3
                        ? "Full-body or upper/lower essentials with extra recovery"
                        : daysPerWeek === 4
                          ? "Sweet spot for balanced strength, conditioning & recovery"
                          : "High-frequency split for faster volume & muscle gain"}
                    </p>
                  </div>

                  <span className="shrink-0 rounded-xl bg-primary/15 px-3.5 py-2 font-display text-2xl text-primary">
                    {daysPerWeek} Days/Wk
                  </span>
                </div>

                <input
                  type="range"
                  min={2}
                  max={6}
                  step={1}
                  aria-label="Training days per week"
                  value={daysPerWeek}
                  onChange={(e) => {
                    setDaysPerWeek(Number(e.target.value));
                    setSubmitted(false);
                  }}
                  className="mt-4 h-2 w-full cursor-pointer appearance-none rounded-full bg-white/15 accent-primary"
                />

                <div className="mt-2 flex justify-between font-heading text-[10px] font-bold uppercase tracking-wider text-white/45">
                  <span>2 Days</span>
                  <span>3 Days</span>
                  <span>4 Days</span>
                  <span>5 Days</span>
                  <span>6 Days</span>
                </div>
              </div>

              {/* Q4: Coaching Support Level */}
              <div>
                <p className="font-heading text-xs font-bold uppercase tracking-wider text-primary">
                  Q4 · How much coaching guidance do you want?
                </p>
                <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {COACHING_OPTIONS.map((opt) => {
                    const active = coaching === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => {
                          setCoaching(opt.id);
                          setManualPlanOverride(null);
                          setSubmitted(false);
                        }}
                        className={`rounded-2xl p-4 text-left transition-all duration-200 ${
                          active
                            ? "bg-primary/15 text-white shadow-[inset_0_1px_1px_rgba(200,255,0,0.5)]"
                            : "bg-surface-dark/80 text-white/75 shadow-[inset_0_1px_1px_rgba(255,255,255,0.07)] hover:text-white"
                        }`}
                      >
                        <p className="font-heading text-xs font-bold uppercase tracking-wide text-white">
                          {opt.label}
                        </p>
                        <p className="mt-1.5 font-sans text-xs leading-relaxed text-white/60">
                          {opt.desc}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Q5: Billing Duration & Diet Toggle */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-12">
                <div className="sm:col-span-7">
                  <p className="font-heading text-xs font-bold uppercase tracking-wider text-primary">
                    Q5 · Billing Duration
                  </p>
                  <div className="mt-3 grid grid-cols-3 gap-2.5">
                    {(
                      [
                        { id: "monthly", label: "Monthly" },
                        { id: "quarterly", label: "Quarterly -15%" },
                        { id: "annual", label: "Annual -30%" },
                      ] as { id: BillingId; label: string }[]
                    ).map((cycle) => {
                      const active = selectedBilling === cycle.id;
                      return (
                        <button
                          key={cycle.id}
                          type="button"
                          onClick={() => {
                            setSelectedBilling(cycle.id);
                            setSubmitted(false);
                          }}
                          className={`rounded-xl px-3 py-3 font-heading text-xs font-bold uppercase tracking-wider transition-all ${
                            active
                              ? "bg-primary text-primary-foreground shadow-[0_6px_18px_rgba(200,255,0,0.4)]"
                              : "bg-surface-dark/85 text-white/75 shadow-[inset_0_1px_1px_rgba(255,255,255,0.07)] hover:text-white"
                          }`}
                        >
                          {cycle.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Diet & Nutrition Guidance Toggle */}
                <div className="flex flex-col justify-between rounded-2xl bg-surface-dark/80 p-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] sm:col-span-5">
                  <div>
                    <p className="font-heading text-xs font-bold uppercase tracking-wider text-white">
                      Diet &amp; Macro Plan
                    </p>
                    <p className="mt-1 font-sans text-xs text-white/60">
                      {recommendedPlan === "floor-access"
                        ? `+₹${DIET_ADDON_MONTHLY}/mo add-on`
                        : "Included in your plan"}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIncludeDietPlan((prev) => !prev)}
                    className={`mt-3 w-full rounded-xl py-2 font-heading text-xs font-bold uppercase tracking-wider transition-all ${
                      includeDietPlan
                        ? "bg-primary/20 text-primary shadow-[inset_0_1px_0_rgba(200,255,0,0.35)]"
                        : "bg-white/[0.06] text-white/60"
                    }`}
                  >
                    {includeDietPlan ? "✓ Diet Included" : "No Diet Plan"}
                  </button>
                </div>
              </div>

              {/* Quick Tier Override Chips (In Case User Wants to Compare Directly) */}
              <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-white/60">
                <span>Matched plan:</span>
                {(Object.keys(PLAN_PRICES) as PlanId[]).map((planKey) => {
                  const isCurrent = recommendedPlan === planKey;
                  return (
                    <button
                      key={planKey}
                      type="button"
                      onClick={() => setManualPlanOverride(planKey)}
                      className={`rounded-lg px-3 py-1 font-heading text-[11px] font-bold uppercase tracking-wider transition-all ${
                        isCurrent
                          ? "bg-white text-black"
                          : "bg-surface-dark/80 text-white/65 hover:text-white"
                      }`}
                    >
                      {PLAN_PRICES[planKey].name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* RIGHT 5 COLUMNS: Personalized Plan Card + Live Calculator + Minimal Checkout */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-surface-dark/95 p-6 shadow-[0_24px_52px_rgba(0,0,0,0.9),inset_0_1px_1px_rgba(255,255,255,0.14)] sm:p-7">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-primary">
                    Your Personalized Blueprint
                  </span>
                  <span className="rounded-md bg-primary/15 px-2.5 py-1 font-heading text-[10px] font-bold uppercase text-primary">
                    {daysPerWeek}x / Week
                  </span>
                </div>

                <h3 className="mt-1.5 font-display text-2xl tracking-wide text-white uppercase sm:text-3xl">
                  {planInfo.name} · {selectedBilling}
                </h3>

                <p className="mt-1 font-sans text-xs font-medium text-primary/90">
                  {activeObjective.planFocus}
                </p>

                {/* Selected Workouts Summary */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {workouts.length > 0 ? (
                    workouts.map((w) => (
                      <span
                        key={w}
                        className="rounded-md bg-white/[0.06] px-2.5 py-1 font-sans text-[11px] text-white/80"
                      >
                        {w}
                      </span>
                    ))
                  ) : (
                    <span className="font-sans text-xs text-white/45">
                      Tap workouts on the left to customize focus
                    </span>
                  )}
                </div>

                {/* Live Price Breakdown */}
                <div className="mt-6 space-y-3 border-t border-white/10 pt-5 font-sans text-sm">
                  <div className="flex items-center justify-between text-white/80">
                    <span>
                      {planInfo.name} ({monthsCount}{" "}
                      {monthsCount === 1 ? "month" : "months"})
                    </span>
                    <span className="font-semibold text-white">
                      ₹{formatINR(basePlanAmount)}
                    </span>
                  </div>

                  {includeDietPlan && (
                    <div className="flex items-center justify-between text-white/80">
                      <span>Diet &amp; Macro Plan</span>
                      {needsSeparateDietAddon ? (
                        <span className="font-semibold text-white">
                          +₹{formatINR(dietAddonTotal)}
                        </span>
                      ) : (
                        <span className="rounded-md bg-primary/15 px-2 py-0.5 font-heading text-[11px] font-bold uppercase text-primary">
                          Included
                        </span>
                      )}
                    </div>
                  )}

                  <div className="flex items-center justify-between text-white/80">
                    <span>One-Time Joining Fee</span>
                    {joiningFee === 0 ? (
                      <span className="rounded-md bg-primary/15 px-2 py-0.5 font-heading text-[11px] font-bold uppercase text-primary">
                        ₹0 (Waived)
                      </span>
                    ) : (
                      <span className="font-semibold text-white">
                        +₹{formatINR(joiningFee)}
                      </span>
                    )}
                  </div>
                </div>

                {/* Calculated Total */}
                <div className="mt-5 flex items-baseline justify-between border-t border-white/10 pt-4">
                  <span className="font-heading text-xs font-bold uppercase tracking-wider text-white/65">
                    {mode === "purchase"
                      ? "Calculated Total"
                      : "Estimated Total"}
                  </span>
                  <span className="font-display text-3xl text-primary sm:text-4xl">
                    ₹{formatINR(totalPayable)}
                  </span>
                </div>

                {/* Minimal 2-Field Contact Capture */}
                <form onSubmit={handleSubmit} className="mt-5 space-y-3">
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Your Full Name"
                    className="w-full rounded-xl bg-surface-card px-4 py-3 font-sans text-sm text-white placeholder:text-white/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] focus:outline-none focus:ring-2 focus:ring-primary/60"
                  />

                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="WhatsApp / Phone (+91...)"
                    className="w-full rounded-xl bg-surface-card px-4 py-3 font-sans text-sm text-white placeholder:text-white/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] focus:outline-none focus:ring-2 focus:ring-primary/60"
                  />

                  <label className="flex cursor-pointer items-start gap-2.5 pt-1 font-sans text-[11px] text-white/65">
                    <input
                      type="checkbox"
                      checked={agreedTerms}
                      onChange={(e) => setAgreedTerms(e.target.checked)}
                      required
                      className="mt-0.5 h-3.5 w-3.5 rounded accent-primary"
                    />
                    <span>
                      I accept the membership terms &amp; 7-day satisfaction
                      policy.
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="mt-2 w-full rounded-2xl bg-primary px-5 py-3.5 font-heading text-sm font-extrabold uppercase tracking-wider text-primary-foreground shadow-[0_14px_30px_-6px_rgba(200,255,0,0.55),inset_0_1px_0_rgba(255,255,255,0.6)] transition-transform duration-200 hover:scale-[1.01] active:scale-[0.99]"
                  >
                    {mode === "purchase"
                      ? `Continue · Pay ₹${formatINR(totalPayable)}`
                      : "Request Personalized Callback"}
                  </button>
                </form>

                {submitted && (
                  <div
                    role="status"
                    className="mt-4 rounded-xl bg-primary/15 p-3.5 font-sans text-xs leading-relaxed text-white shadow-[inset_0_1px_1px_rgba(200,255,0,0.4)]"
                  >
                    <p className="font-bold text-primary">
                      {mode === "purchase"
                        ? `Plan Ready for ${fullName}`
                        : `Callback Request Logged for ${fullName}`}
                    </p>
                    <p className="mt-1 text-white/85">
                      {activeObjective.label} · {daysPerWeek} days/wk ·{" "}
                      {planInfo.name} ({selectedBilling}) · Total ₹
                      {formatINR(totalPayable)}.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
