"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import ActionButton from "./ui/ActionButton";

type CardTone = "lime" | "cyan" | "amber" | "violet";

interface MemberTestimonial {
  id: string;
  name: string;
  memberSince: string;
  focus: string;
  quote: string;
  avatar: string;
  rating: number;
  reviewDate: string;
  tone: CardTone;
}

const TONE_STYLES: Record<
  CardTone,
  {
    surface: string;
    topLine: string;
    tag: string;
    ring: string;
    badgeGlow: string;
  }
> = {
  lime: {
    surface:
      "bg-gradient-to-br from-[#1d2416] via-[#151814] to-[#0f110e] shadow-[0_24px_50px_-14px_rgba(0,0,0,0.92),0_0_32px_-16px_rgba(200,255,0,0.22),inset_0_1px_1px_rgba(200,255,0,0.28)]",
    topLine: "via-primary/75",
    tag: "bg-primary/12 text-primary shadow-[inset_0_1px_0_rgba(200,255,0,0.2)]",
    ring: "ring-primary/35",
    badgeGlow: "shadow-[0_0_14px_rgba(200,255,0,0.18)]",
  },
  cyan: {
    surface:
      "bg-gradient-to-br from-[#152129] via-[#12161b] to-[#0e1013] shadow-[0_24px_50px_-14px_rgba(0,0,0,0.92),0_0_32px_-16px_rgba(56,189,248,0.2),inset_0_1px_1px_rgba(125,211,252,0.24)]",
    topLine: "via-sky-400/70",
    tag: "bg-sky-400/12 text-sky-300 shadow-[inset_0_1px_0_rgba(125,211,252,0.2)]",
    ring: "ring-sky-400/35",
    badgeGlow: "shadow-[0_0_14px_rgba(56,189,248,0.18)]",
  },
  amber: {
    surface:
      "bg-gradient-to-br from-[#241d14] via-[#171411] to-[#100e0c] shadow-[0_24px_50px_-14px_rgba(0,0,0,0.92),0_0_32px_-16px_rgba(251,191,36,0.22),inset_0_1px_1px_rgba(253,224,71,0.25)]",
    topLine: "via-amber-400/75",
    tag: "bg-amber-400/12 text-amber-300 shadow-[inset_0_1px_0_rgba(253,224,71,0.2)]",
    ring: "ring-amber-400/35",
    badgeGlow: "shadow-[0_0_14px_rgba(251,191,36,0.18)]",
  },
  violet: {
    surface:
      "bg-gradient-to-br from-[#1e1829] via-[#15131c] to-[#0e0d13] shadow-[0_24px_50px_-14px_rgba(0,0,0,0.92),0_0_32px_-16px_rgba(167,139,250,0.22),inset_0_1px_1px_rgba(196,181,253,0.25)]",
    topLine: "via-violet-400/70",
    tag: "bg-violet-400/12 text-violet-300 shadow-[inset_0_1px_0_rgba(196,181,253,0.2)]",
    ring: "ring-violet-400/35",
    badgeGlow: "shadow-[0_0_14px_rgba(167,139,250,0.18)]",
  },
};

const testimonials: MemberTestimonial[] = [
  {
    id: "rev-1",
    name: "Devansh Shah",
    memberSince: "Member · Strength & Hypertrophy",
    focus: "Zero Waiting & Calibrated Plates",
    quote:
      "Most gyms cram cheap machines into tight corners. Here you actually have calibrated plates, proper squat racks, and coaches who step in when your form slips.",
    avatar: "/Images/person Images/person_1.png",
    rating: 5,
    reviewDate: "3 weeks ago",
    tone: "lime",
  },
  {
    id: "rev-2",
    name: "Priya Nair",
    memberSince: "Member · Personal Training",
    focus: "Structured Coaching From Day One",
    quote:
      "I started as a complete beginner nervous about lifting weights. My coach broke down every movement step by step, and within three months strength training became the best part of my day.",
    avatar: "/Images/person Images/person_2.png",
    rating: 5,
    reviewDate: "1 month ago",
    tone: "cyan",
  },
  {
    id: "rev-3",
    name: "Harshil Trivedi",
    memberSince: "Member · Weight Loss & Turf",
    focus: "Clean Floor & High Accountability",
    quote:
      "The evening conditioning sessions on the turf pushed my stamina higher than years of running alone. Locker rooms and showers are spotless even during peak hours.",
    avatar: "/Images/person Images/person_3.png",
    rating: 5,
    reviewDate: "2 months ago",
    tone: "amber",
  },
  {
    id: "rev-4",
    name: "Rohan Patel",
    memberSince: "Member · 1-on-1 Coaching",
    focus: "Measurable Strength Progression",
    quote:
      "Every session has a clear plan, progressive overload targets, and honest form feedback. My bench and squat numbers climbed steadily without shoulder or lower-back tweaks.",
    avatar: "/Images/person Images/person_4.png",
    rating: 5,
    reviewDate: "2 weeks ago",
    tone: "violet",
  },
];

function GoogleGLogo({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className}>
      <path
        fill="#4285F4"
        d="M23.745 12.27c0-.79-.07-1.54-.19-2.27h-11.3v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"
      />
      <path
        fill="#34A853"
        d="M12.255 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96h-3.98v3.09C3.515 21.3 7.565 24 12.255 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.525 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62h-3.98a11.86 11.86 0 000 10.76l3.98-3.09z"
      />
      <path
        fill="#EA4335"
        d="M12.255 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C18.205 1.19 15.495 0 12.255 0c-4.69 0-8.74 2.7-10.71 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z"
      />
    </svg>
  );
}

function StarRow({
  count = 5,
  size = "h-4 w-4",
}: {
  count?: number;
  size?: string;
}) {
  return (
    <div
      className="inline-flex items-center gap-0.5"
      aria-label={`${count} out of 5 stars`}
    >
      {Array.from({ length: count }).map((_, idx) => (
        <svg
          key={idx}
          aria-hidden="true"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`${size} text-[#FBBF24]`}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ item }: { item: MemberTestimonial }) {
  const styles = TONE_STYLES[item.tone];

  return (
    <article
      className={`group/card relative flex w-[340px] shrink-0 flex-col justify-between overflow-hidden rounded-3xl p-7 transition-transform duration-200 ease-out hover:-translate-y-1 sm:w-[400px] sm:p-8 ${styles.surface}`}
    >
      {/* Colored Top Accent Hairline */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-x-6 top-0 h-[1.5px] bg-gradient-to-r from-transparent ${styles.topLine} to-transparent`}
      />

      <div>
        {/* Top Row: 5 Stars + Verified Google Pill */}
        <div className="flex items-center justify-between gap-3">
          <StarRow count={item.rating} size="h-4 w-4" />

          <span
            className={`inline-flex items-center gap-1.5 rounded-full bg-black/35 px-3 py-1 font-sans text-[11px] font-medium text-white/85 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] ${styles.badgeGlow}`}
          >
            <GoogleGLogo className="h-3.5 w-3.5" />
            <span>Verified Review</span>
          </span>
        </div>

        {/* Distinct Tinted Focus Tag */}
        <div className="mt-5">
          <span
            className={`inline-block rounded-lg px-3 py-1 font-heading text-[11px] font-bold uppercase tracking-wider ${styles.tag}`}
          >
            {item.focus}
          </span>
        </div>

        {/* Quote */}
        <blockquote className="mt-4 font-sans text-sm leading-relaxed text-white/90 sm:text-[15px]">
          &ldquo;{item.quote}&rdquo;
        </blockquote>
      </div>

      {/* Author Footer + Timestamp */}
      <div className="mt-8 flex items-center justify-between gap-3 pt-5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
        <div className="flex items-center gap-3.5">
          <div
            className={`relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-surface-dark shadow-[0_8px_18px_rgba(0,0,0,0.8)] ring-2 ${styles.ring}`}
          >
            <Image
              src={item.avatar}
              alt={item.name}
              fill
              unoptimized
              sizes="48px"
              className="object-cover object-top"
            />
          </div>

          <div>
            <div className="flex items-center gap-1.5">
              <p className="font-heading text-sm font-bold uppercase tracking-wide text-white">
                {item.name}
              </p>
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4 text-[#4285F4]"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="mt-0.5 font-sans text-xs text-white/60">
              {item.memberSince}
            </p>
          </div>
        </div>

        <span className="shrink-0 font-sans text-[11px] text-white/45">
          {item.reviewDate}
        </span>
      </div>
    </article>
  );
}

export default function TestimonialsSection() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const [isPaused, setIsPaused] = useState(false);

  // Smooth, zero-restart frame loop: freezes cleanly on hover without layout thrashing
  useAnimationFrame((_, delta) => {
    if (isPaused || !trackRef.current) return;

    const halfWidth = trackRef.current.scrollWidth / 2;
    if (halfWidth <= 0) return;

    // Speed: ~42px per second (clamped delta avoids jumps after tab switching)
    const clampedDelta = Math.min(delta, 50);
    const nextX = x.get() - (clampedDelta / 1000) * 42;

    if (Math.abs(nextX) >= halfWidth) {
      x.set(nextX + halfWidth);
    } else {
      x.set(nextX);
    }
  });

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative w-full overflow-hidden bg-surface-dark py-24 text-white sm:py-32"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Asymmetric Header + Google Aggregate Trust Badge */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="mb-3 inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(200,255,0,0.8)]" />
              <span className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-primary">
                Member Stories
              </span>
            </div>

            <h2
              id="testimonials-heading"
              className="font-display text-4xl leading-[0.98] tracking-tight text-white uppercase sm:text-5xl lg:text-6xl"
            >
              What Our Members{" "}
              <span className="block text-white/45">
                Say About Training Here
              </span>
            </h2>
          </div>

          <div className="flex max-w-sm flex-col items-start gap-5">
            {/* Google Verified Rating Aggregate Card */}
            <div className="inline-flex items-center gap-3.5 rounded-2xl bg-surface-card/95 px-4 py-3 shadow-[0_18px_36px_-8px_rgba(0,0,0,0.9),inset_0_1px_1px_rgba(255,255,255,0.14)] backdrop-blur-md">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
                <GoogleGLogo className="h-5 w-5" />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="font-heading text-base font-bold text-white">
                    4.9
                  </span>
                  <StarRow count={5} size="h-3.5 w-3.5" />
                </div>
                <p className="mt-0.5 font-sans text-xs text-white/65">
                  Rated on{" "}
                  <span className="font-semibold text-white/90">
                    Google Reviews
                  </span>{" "}
                  · 320+ Members
                </p>
              </div>
            </div>

            <p className="font-sans text-sm leading-relaxed text-white/70">
              Hover over any card to pause smoothly. Real members, real coaches,
              and consistent floor standards.
            </p>

            <ActionButton href="/about#stories" variant="glass" size="sm">
              Read More Google Reviews
            </ActionButton>
          </div>
        </div>
      </div>

      {/* Lag-Free Infinite Marquee Track */}
      <div
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="relative mt-14 w-full overflow-hidden py-4"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
        }}
      >
        <motion.div
          ref={trackRef}
          style={{ x, transform: "translateZ(0)" }}
          className="flex w-max gap-7 px-4 will-change-transform"
        >
          {testimonials.map((item) => (
            <TestimonialCard key={`set-1-${item.id}`} item={item} />
          ))}
          {testimonials.map((item) => (
            <TestimonialCard key={`set-2-${item.id}`} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
