"use client";

import { useState } from "react";

type RequestType =
  | "Free 1-Day Trial Pass"
  | "Membership Plan Enquiry"
  | "1-on-1 Personal Training"
  | "Club Visit & Tour";

const requestOptions: {
  id: RequestType;
  badge: string;
  title: string;
  subtitle: string;
}[] = [
  {
    id: "Free 1-Day Trial Pass",
    badge: "INR 0 - Most Chosen",
    title: "Free 1-Day Trial",
    subtitle: "Full floor workout + 20-min coach check",
  },
  {
    id: "Membership Plan Enquiry",
    badge: "Plans & Rates",
    title: "Membership Plans",
    subtitle: "Monthly, Quarterly & Annual pricing",
  },
  {
    id: "1-on-1 Personal Training",
    badge: "Coach Match",
    title: "Personal Training",
    subtitle: "Dedicated 1-on-1 strength or fat-loss coach",
  },
  {
    id: "Club Visit & Tour",
    badge: "Walkthrough",
    title: "Guided Floor Tour",
    subtitle: "Inspect racks, turf, cardio & showers first",
  },
];

const goalOptions = [
  { label: "Weight Loss & Fat Burn", tag: "Lean & Conditioning" },
  { label: "Muscle Building & Size", tag: "Hypertrophy Split" },
  { label: "Raw Barbell Strength", tag: "Squat, Bench & Deadlift" },
  { label: "Beginner Gym Start", tag: "Guided Onboarding" },
  { label: "Group Conditioning", tag: "Turf & Engine Squad" },
  { label: "Just Exploring Plans", tag: "Tour & Fee Sheet" },
];

const dayOptions = ["Today", "Tomorrow", "This Weekend", "Next Week"];

const timeSlotOptions = [
  { label: "Early Morning", time: "05:30 AM - 09:00 AM" },
  { label: "Mid-Morning", time: "09:00 AM - 12:30 PM" },
  { label: "Afternoon", time: "12:30 PM - 04:30 PM" },
  { label: "Evening Peak", time: "04:30 PM - 08:30 PM" },
  { label: "Late Night", time: "08:30 PM - 10:30 PM" },
];

const WHATSAPP_NUMBER = "919876543210";
const CLUB_PHONE_DISPLAY = "+91 98765 43210";
const CLUB_EMAIL = "hello@aurenfitness.in";

function InstagramIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YouTubeIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.5 7.5a2.8 2.8 0 0 0-2-2C17.7 5 12 5 12 5s-5.7 0-7.5.5a2.8 2.8 0 0 0-2 2A29.5 29.5 0 0 0 2 12a29.5 29.5 0 0 0 .5 4.5 2.8 2.8 0 0 0 2 2C6.3 19 12 19 12 19s5.7 0 7.5-.5a2.8 2.8 0 0 0 2-2A29.5 29.5 0 0 0 22 12a29.5 29.5 0 0 0-.5-4.5Z" />
      <polygon
        points="10 9.2 15.2 12 10 14.8 10 9.2"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

function WhatsAppIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
    </svg>
  );
}

function ArrowRightIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
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
  );
}

function ArrowLeftIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 12H5" />
      <path d="m11 18-6-6 6-6" />
    </svg>
  );
}

function ExternalArrowIcon({
  className = "h-3.5 w-3.5",
}: {
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export default function InteractiveBookingWizard() {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [requestType, setRequestType] = useState<RequestType>(
    "Free 1-Day Trial Pass",
  );
  const [selectedGoal, setSelectedGoal] = useState<string>(
    "Weight Loss & Fat Burn",
  );
  const [selectedDay, setSelectedDay] = useState<string>("Tomorrow");
  const [selectedSlot, setSelectedSlot] = useState<string>(
    "Evening Peak (04:30 PM - 08:30 PM)",
  );
  const [fullName, setFullName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [emailCopied, setEmailCopied] = useState<boolean>(false);

  const progressPercentage = isSubmitted ? 100 : step * 25;

  const handleSelectRequest = (type: RequestType) => {
    setRequestType(type);
    setStep(2);
  };

  const handleSelectGoal = (goal: string) => {
    setSelectedGoal(goal);
    setStep(3);
  };

  const handleSelectSlot = (slotLabel: string, slotTime: string) => {
    setSelectedSlot(`${slotLabel} (${slotTime})`);
    setStep(4);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CLUB_EMAIL);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2200);
    } catch {
      // Fallback ignored
    }
  };

  const whatsappPrefilledUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi Auren Fitness Club! I'd like to book:\n- Pass / Enquiry: ${requestType}\n- Goal: ${selectedGoal}\n- Day: ${selectedDay}\n- Time Slot: ${selectedSlot}${
      fullName ? `\n- Name: ${fullName}` : ""
    }${phone ? `\n- Phone: ${phone}` : ""}`,
  )}`;

  const handleConfirmSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim()) return;
    setIsSubmitted(true);
  };

  const resetWizard = () => {
    setStep(1);
    setFullName("");
    setPhone("");
    setIsSubmitted(false);
  };

  return (
    <section
      id="free-trial"
      aria-labelledby="wizard-heading"
      className="relative w-full scroll-mt-24 bg-surface-dark py-12 text-white sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-10">
          {/* LEFT COLUMN: DIRECT GYM CONTACT & SOCIAL CHANNELS */}
          <aside className="flex flex-col justify-between rounded-[28px] bg-gradient-to-b from-[#1e2127]/95 via-surface-card/90 to-[#111316] p-7 shadow-[0_32px_64px_-14px_rgba(0,0,0,0.92),inset_0_1px_1px_rgba(255,255,255,0.14)] sm:p-9 lg:col-span-5">
            <div>
              <div className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(200,255,0,0.9)]" />
                <span className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-primary">
                  Direct Club Desk
                </span>
              </div>

              <h2 className="mt-3 font-display text-3xl leading-[1.02] tracking-tight text-white uppercase sm:text-4xl">
                Prefer To Reach Us{" "}
                <span className="text-white/45">Directly?</span>
              </h2>

              <p className="mt-3 font-sans text-sm leading-relaxed text-white/70">
                Tap any channel below to message our front desk on WhatsApp,
                call during floor hours, or follow daily training clips.
              </p>

              {/* Direct Tap Contact Cards */}
              <div className="mt-7 space-y-3.5">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    "Hi Auren Fitness Club! I'd like to ask about memberships and a free trial.",
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn flex items-center justify-between rounded-full bg-primary py-2.5 pr-2.5 pl-6 text-primary-foreground shadow-[0_14px_30px_-6px_rgba(200,255,0,0.55),inset_0_1px_0_rgba(255,255,255,0.65)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#d6ff33]"
                >
                  <div>
                    <p className="font-heading text-[10px] font-extrabold uppercase tracking-widest opacity-80">
                      Instant Reply - WhatsApp
                    </p>
                    <p className="mt-0.5 font-heading text-sm font-extrabold uppercase tracking-wide sm:text-base">
                      Chat With Front Desk
                    </p>
                  </div>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black/15 transition-transform duration-200 group-hover/btn:translate-x-0.5">
                    <ArrowRightIcon className="h-4 w-4" />
                  </span>
                </a>

                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="group flex items-center justify-between rounded-2xl bg-surface-dark/90 px-5 py-4 shadow-[0_12px_24px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.08)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-surface-dark"
                >
                  <div>
                    <p className="font-heading text-[11px] font-bold uppercase tracking-widest text-white/50">
                      Phone Support (5:30 AM - 10:30 PM)
                    </p>
                    <p className="mt-0.5 font-heading text-base font-bold tracking-wide text-white group-hover:text-primary">
                      {CLUB_PHONE_DISPLAY}
                    </p>
                  </div>
                  <span className="rounded-full bg-surface-card px-3.5 py-1.5 font-heading text-[11px] font-bold uppercase tracking-wider text-primary shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]">
                    Call
                  </span>
                </a>

                <div className="flex items-center justify-between rounded-2xl bg-surface-dark/90 px-5 py-4 shadow-[0_12px_24px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.08)]">
                  <div className="min-w-0 pr-3">
                    <p className="font-heading text-[11px] font-bold uppercase tracking-widest text-white/50">
                      Email Enquiries
                    </p>
                    <a
                      href={`mailto:${CLUB_EMAIL}`}
                      className="mt-0.5 block truncate font-sans text-sm font-semibold text-white hover:text-primary"
                    >
                      {CLUB_EMAIL}
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="shrink-0 cursor-pointer rounded-full bg-surface-card px-3.5 py-1.5 font-heading text-[11px] font-bold uppercase tracking-wider text-primary shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] transition-all hover:bg-primary hover:text-primary-foreground"
                  >
                    {emailCopied ? "Copied" : "Copy"}
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Social Channels & Floor Address */}
            <div className="mt-8 pt-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
              <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-white/55">
                Follow Training &amp; Updates
              </p>

              <div className="mt-3 grid grid-cols-2 gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link flex items-center justify-between rounded-full bg-surface-dark/90 px-4 py-3 font-heading text-xs font-bold uppercase tracking-wider text-white/85 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground"
                >
                  <span className="inline-flex items-center gap-2.5">
                    <InstagramIcon className="h-4 w-4 transition-transform duration-200 group-hover/link:scale-110" />
                    <span>Instagram</span>
                  </span>
                  <ExternalArrowIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>

                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link flex items-center justify-between rounded-full bg-surface-dark/90 px-4 py-3 font-heading text-xs font-bold uppercase tracking-wider text-white/85 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground"
                >
                  <span className="inline-flex items-center gap-2.5">
                    <YouTubeIcon className="h-4 w-4 transition-transform duration-200 group-hover/link:scale-110" />
                    <span>YouTube</span>
                  </span>
                  <ExternalArrowIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              </div>

              <p className="mt-4 font-sans text-xs leading-relaxed text-white/55">
                2nd Floor, Auren Performance Hub, Main Ring Road, Gujarat, India
              </p>
            </div>
          </aside>

          {/* RIGHT COLUMN: 4-STEP ZERO-FRICTION INTERACTIVE WIZARD */}
          <div className="flex flex-col justify-between rounded-[28px] bg-gradient-to-b from-[#20232a]/95 via-surface-card to-[#111316] p-6 shadow-[0_36px_72px_-16px_rgba(0,0,0,0.95),0_0_45px_-20px_rgba(200,255,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.14)] sm:p-9 lg:col-span-7">
            <div>
              {/* Top Speed Assurance + Step Counter */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-3.5 py-1.5 font-heading text-[11px] font-bold uppercase tracking-wider text-primary shadow-[inset_0_1px_0_rgba(200,255,0,0.25)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>Only 4 Quick Taps - Under 20 Seconds</span>
                </span>

                <span className="font-heading text-xs font-bold uppercase tracking-widest text-white/60">
                  {isSubmitted ? "Completed (100%)" : `Step ${step} of 4`}
                </span>
              </div>

              {/* Smooth Animated Progress Bar Track */}
              <div
                aria-hidden="true"
                className="mt-4 h-2 w-full overflow-hidden rounded-full bg-surface-dark shadow-[inset_0_1px_3px_rgba(0,0,0,0.8)]"
              >
                <div
                  className="h-full rounded-full bg-primary shadow-[0_0_14px_rgba(200,255,0,0.85)] transition-all duration-500 ease-out"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>

              {/* Clickable Step Breadcrumb Tabs */}
              <div className="mt-4 grid grid-cols-4 gap-2">
                {[
                  { num: 1 as const, label: "1. Pass" },
                  { num: 2 as const, label: "2. Goal" },
                  { num: 3 as const, label: "3. Time" },
                  { num: 4 as const, label: "4. Send" },
                ].map((item) => {
                  const isActive = step === item.num && !isSubmitted;
                  const isDone = step > item.num || isSubmitted;

                  return (
                    <button
                      key={item.num}
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setStep(item.num);
                      }}
                      className={`cursor-pointer rounded-full py-2 text-center font-heading text-[11px] font-bold uppercase tracking-wider transition-all sm:text-xs ${
                        isActive
                          ? "bg-primary text-primary-foreground shadow-[0_6px_16px_-4px_rgba(200,255,0,0.55)]"
                          : isDone
                            ? "bg-surface-dark text-primary shadow-[inset_0_1px_1px_rgba(200,255,0,0.25)]"
                            : "bg-surface-dark/60 text-white/40 hover:text-white/75"
                      }`}
                    >
                      {isDone && !isActive
                        ? `Done - ${item.label.slice(3)}`
                        : item.label}
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Step Title */}
              <div className="mt-7">
                <h2
                  id="wizard-heading"
                  className="font-display text-3xl leading-none tracking-tight text-white uppercase sm:text-4xl"
                >
                  {isSubmitted
                    ? "Your Pass Is Reserved"
                    : step === 1
                      ? "What Would You Like To Book?"
                      : step === 2
                        ? "Tap Your Primary Fitness Goal"
                        : step === 3
                          ? "When Should We Expect You?"
                          : "Final Tap - Lock In Your Spot"}
                </h2>

                {/* Live Tapped Chips Summary */}
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-surface-dark px-3 py-1 font-heading text-[11px] font-bold uppercase tracking-wider text-primary shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]">
                    {requestType}
                  </span>
                  {step >= 2 && (
                    <span className="rounded-full bg-surface-dark px-3 py-1 font-heading text-[11px] font-semibold uppercase tracking-wider text-white/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]">
                      {selectedGoal}
                    </span>
                  )}
                  {step >= 3 && (
                    <span className="rounded-full bg-surface-dark px-3 py-1 font-heading text-[11px] font-semibold uppercase tracking-wider text-white/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]">
                      {selectedDay} - {selectedSlot}
                    </span>
                  )}
                </div>
              </div>

              {/* STEP 1: TAP REQUEST TYPE */}
              {!isSubmitted && step === 1 && (
                <div className="mt-6 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                  {requestOptions.map((option) => {
                    const isSelected = requestType === option.id;
                    return (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => handleSelectRequest(option.id)}
                        className={`group/card flex cursor-pointer flex-col justify-between rounded-2xl p-5 text-left transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.99] ${
                          isSelected
                            ? "bg-surface-dark shadow-[0_18px_36px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(200,255,0,0.5)]"
                            : "bg-surface-dark/80 shadow-[0_12px_24px_rgba(0,0,0,0.65),inset_0_1px_1px_rgba(255,255,255,0.08)] hover:bg-surface-dark"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="rounded-full bg-primary/15 px-3 py-1 font-heading text-[10px] font-bold uppercase tracking-wider text-primary">
                            {option.badge}
                          </span>
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-card text-white transition-all duration-200 group-hover/card:translate-x-0.5 group-hover/card:bg-primary group-hover/card:text-primary-foreground">
                            <ArrowRightIcon className="h-3.5 w-3.5" />
                          </span>
                        </div>

                        <div className="mt-4">
                          <h3 className="font-display text-2xl tracking-tight text-white uppercase">
                            {option.title}
                          </h3>
                          <p className="mt-1 font-sans text-xs leading-relaxed text-white/65">
                            {option.subtitle}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* STEP 2: TAP GOAL */}
              {!isSubmitted && step === 2 && (
                <div className="mt-6">
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {goalOptions.map((goal) => {
                      const isSelected = selectedGoal === goal.label;
                      return (
                        <button
                          key={goal.label}
                          type="button"
                          onClick={() => handleSelectGoal(goal.label)}
                          className={`group/goal flex cursor-pointer items-center justify-between rounded-2xl p-4 text-left transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.99] ${
                            isSelected
                              ? "bg-primary text-primary-foreground shadow-[0_14px_28px_-6px_rgba(200,255,0,0.55),inset_0_1px_0_0_rgba(255,255,255,0.55)]"
                              : "bg-surface-dark/85 text-white shadow-[0_12px_24px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.08)] hover:bg-surface-dark"
                          }`}
                        >
                          <div>
                            <p
                              className={`font-heading text-[10px] font-bold uppercase tracking-widest ${
                                isSelected
                                  ? "text-primary-foreground/75"
                                  : "text-primary"
                              }`}
                            >
                              {goal.tag}
                            </p>
                            <p className="mt-0.5 font-heading text-sm font-bold uppercase tracking-wide sm:text-base">
                              {goal.label}
                            </p>
                          </div>

                          <span
                            className={`ml-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-200 group-hover/goal:translate-x-0.5 ${
                              isSelected
                                ? "bg-black/15 text-primary-foreground"
                                : "bg-surface-card text-primary group-hover/goal:bg-primary group-hover/goal:text-primary-foreground"
                            }`}
                          >
                            <ArrowRightIcon className="h-3.5 w-3.5" />
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="group/back mt-5 inline-flex cursor-pointer items-center gap-2 font-heading text-xs font-bold uppercase tracking-widest text-white/60 transition-colors hover:text-primary"
                  >
                    <ArrowLeftIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover/back:-translate-x-0.5" />
                    <span>Back To Pass Type</span>
                  </button>
                </div>
              )}

              {/* STEP 3: TAP DAY + TIME WINDOW */}
              {!isSubmitted && step === 3 && (
                <div className="mt-6 space-y-6">
                  <div>
                    <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-primary">
                      1. Tap Preferred Day
                    </p>
                    <div className="mt-2.5 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                      {dayOptions.map((day) => {
                        const isSelected = selectedDay === day;
                        return (
                          <button
                            key={day}
                            type="button"
                            onClick={() => setSelectedDay(day)}
                            className={`cursor-pointer rounded-full px-3 py-3 font-heading text-xs font-bold uppercase tracking-wider transition-all ${
                              isSelected
                                ? "bg-primary text-primary-foreground shadow-[0_8px_20px_-4px_rgba(200,255,0,0.5)]"
                                : "bg-surface-dark/85 text-white/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] hover:bg-surface-dark hover:text-white"
                            }`}
                          >
                            {day}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-primary">
                      2. Tap Time Window
                    </p>
                    <div className="mt-2.5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                      {timeSlotOptions.map((slot) => {
                        const fullLabel = `${slot.label} (${slot.time})`;
                        const isSelected = selectedSlot === fullLabel;
                        return (
                          <button
                            key={slot.label}
                            type="button"
                            onClick={() =>
                              handleSelectSlot(slot.label, slot.time)
                            }
                            className={`group/slot flex cursor-pointer items-center justify-between rounded-2xl px-4 py-3.5 text-left transition-all duration-200 hover:-translate-y-0.5 ${
                              isSelected
                                ? "bg-surface-dark shadow-[0_14px_28px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(200,255,0,0.45)]"
                                : "bg-surface-dark/85 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] hover:bg-surface-dark"
                            }`}
                          >
                            <div>
                              <span className="block font-heading text-[11px] font-bold uppercase tracking-wider text-primary">
                                {slot.label}
                              </span>
                              <span className="font-heading text-xs font-bold text-white sm:text-sm">
                                {slot.time}
                              </span>
                            </div>
                            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-surface-card text-primary transition-transform duration-200 group-hover/slot:translate-x-0.5">
                              <ArrowRightIcon className="h-3.5 w-3.5" />
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="group/back inline-flex cursor-pointer items-center gap-2 font-heading text-xs font-bold uppercase tracking-widest text-white/60 transition-colors hover:text-primary"
                  >
                    <ArrowLeftIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover/back:-translate-x-0.5" />
                    <span>Back To Goal</span>
                  </button>
                </div>
              )}

              {/* STEP 4: ZERO-TYPING WHATSAPP OR 2-FIELD CONFIRM */}
              {!isSubmitted && step === 4 && (
                <div className="mt-6 space-y-5">
                  <div className="rounded-2xl bg-surface-dark/90 p-5 shadow-[inset_0_1px_1px_rgba(200,255,0,0.25)]">
                    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                      <div>
                        <span className="font-heading text-[11px] font-bold uppercase tracking-widest text-primary">
                          Option A - Zero Typing Required
                        </span>
                        <p className="mt-1 font-heading text-base font-bold uppercase text-white">
                          Send Selections Directly On WhatsApp
                        </p>
                      </div>

                      <a
                        href={whatsappPrefilledUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/wa inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-primary py-2.5 pr-3 pl-6 font-heading text-xs font-extrabold uppercase tracking-wider text-primary-foreground shadow-[0_12px_28px_-6px_rgba(200,255,0,0.55),inset_0_1px_0_0_rgba(255,255,255,0.55)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#d6ff33]"
                      >
                        <span>Open WhatsApp</span>
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black/15 transition-transform duration-200 group-hover/wa:translate-x-0.5">
                          <ArrowRightIcon className="h-3.5 w-3.5" />
                        </span>
                      </a>
                    </div>
                  </div>

                  <form
                    onSubmit={handleConfirmSubmit}
                    className="space-y-4 rounded-2xl bg-surface-dark/90 p-5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]"
                  >
                    <p className="font-heading text-[11px] font-bold uppercase tracking-widest text-white/60">
                      Option B - Confirm With Name &amp; Number
                    </p>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="wizard-name"
                          className="block font-heading text-[11px] font-bold uppercase tracking-wider text-white/75"
                        >
                          Your Name *
                        </label>
                        <input
                          id="wizard-name"
                          type="text"
                          required
                          autoComplete="name"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Enter your name"
                          className="mt-1.5 w-full rounded-xl bg-surface-card px-4 py-3 font-sans text-sm text-white placeholder:text-white/35 shadow-[inset_0_2px_6px_rgba(0,0,0,0.6)] focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="wizard-phone"
                          className="block font-heading text-[11px] font-bold uppercase tracking-wider text-white/75"
                        >
                          Mobile / WhatsApp *
                        </label>
                        <input
                          id="wizard-phone"
                          type="tel"
                          inputMode="tel"
                          required
                          autoComplete="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+91 98765 43210"
                          className="mt-1.5 w-full rounded-xl bg-surface-card px-4 py-3 font-sans text-sm text-white placeholder:text-white/35 shadow-[inset_0_2px_6px_rgba(0,0,0,0.6)] focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="group/back inline-flex cursor-pointer items-center gap-2 font-heading text-xs font-bold uppercase tracking-widest text-white/60 transition-colors hover:text-primary"
                      >
                        <ArrowLeftIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover/back:-translate-x-0.5" />
                        <span>Change Slot</span>
                      </button>

                      <button
                        type="submit"
                        className="group/sub inline-flex cursor-pointer items-center gap-3 rounded-full bg-primary py-2 pr-2.5 pl-6 font-heading text-xs font-extrabold uppercase tracking-wider text-primary-foreground shadow-[0_12px_28px_-6px_rgba(200,255,0,0.55),inset_0_1px_0_rgba(255,255,255,0.6)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#d6ff33]"
                      >
                        <span>Confirm {requestType}</span>
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black/15 transition-transform duration-200 group-hover/sub:translate-x-0.5">
                          <ArrowRightIcon className="h-3.5 w-3.5" />
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* SUCCESS STATE */}
              {isSubmitted && (
                <div className="mt-6 rounded-2xl bg-surface-dark/95 p-7 text-center shadow-[0_24px_48px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(200,255,0,0.4)]">
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

                  <h3 className="mt-4 font-display text-3xl text-white uppercase">
                    Locked In, {fullName}
                  </h3>
                  <p className="mx-auto mt-2 max-w-md font-sans text-sm leading-relaxed text-white/75">
                    Your{" "}
                    <span className="font-semibold text-primary">
                      {requestType}
                    </span>{" "}
                    for{" "}
                    <span className="font-semibold text-white">
                      {selectedGoal}
                    </span>{" "}
                    ({selectedDay} - {selectedSlot}) is confirmed. We will
                    message{" "}
                    <span className="font-semibold text-white">{phone}</span>{" "}
                    shortly.
                  </p>

                  <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={whatsappPrefilledUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 font-heading text-xs font-extrabold uppercase tracking-wider text-primary-foreground shadow-[0_10px_24px_rgba(200,255,0,0.45)] transition-transform hover:-translate-y-0.5"
                    >
                      <span>Also Ping On WhatsApp</span>
                      <ExternalArrowIcon className="h-3.5 w-3.5" />
                    </a>
                    <button
                      type="button"
                      onClick={resetWizard}
                      className="cursor-pointer rounded-full bg-surface-card px-5 py-3 font-heading text-xs font-bold uppercase tracking-wider text-white/85 shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)] transition-colors hover:text-primary"
                    >
                      New Request
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Trust Assurance Footer */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-2 pt-4 text-[11px] text-white/50 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
              <span>Zero spam - Zero obligation to join</span>
              <span className="font-heading font-bold uppercase tracking-wider text-primary/85">
                Instant Front-Desk Confirmation
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
