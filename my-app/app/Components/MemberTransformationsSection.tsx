"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import ActionButton from "./ui/ActionButton";

interface TransformationStory {
  id: string;
  memberName: string;
  age: number;
  headlineResult: string;
  timeframe: string;
  program: string;
  quote: string;
  coachName: string;
  videoSrc: string;
  posterSrc: string;
  metrics: {
    before: string;
    after: string;
    label: string;
  };
}

const transformations: TransformationStory[] = [
  {
    id: "arjun-mehta",
    memberName: "Arjun Mehta",
    age: 29,
    headlineResult: "-16.5 KG Fat Loss",
    timeframe: "16 Weeks",
    program: "1-on-1 Body Recomposition",
    quote:
      "Dropped from 94 kg to 77.5 kg while adding 30 kg to my deadlift without crash dieting.",
    coachName: "Kavya Nair",
    videoSrc: "/Videos/transformations/arjun-transformation.mp4",
    posterSrc: "/Images/transformations/arjun-poster.jpg",
    metrics: {
      before: "94 kg",
      after: "77.5 kg",
      label: "Bodyweight",
    },
  },
  {
    id: "sneha-kulkarni",
    memberName: "Sneha Kulkarni",
    age: 26,
    headlineResult: "+4.2 KG Lean Muscle",
    timeframe: "20 Weeks",
    program: "Hypertrophy & Strength",
    quote:
      "Went from zero pull-ups and chronic lower-back stiffness to 8 strict reps pain-free.",
    coachName: "Rohan Desai",
    videoSrc: "/Videos/transformations/sneha-transformation.mp4",
    posterSrc: "/Images/transformations/sneha-poster.jpg",
    metrics: {
      before: "29% BF",
      after: "20% BF",
      label: "Body Fat",
    },
  },
  {
    id: "devansh-shah",
    memberName: "Devansh Shah",
    age: 33,
    headlineResult: "-12 KG · Sub-50m 10K",
    timeframe: "12 Weeks",
    program: "Athletic Conditioning",
    quote:
      "Desk-job burnout to the best conditioning of my life in 90 days of structured programming.",
    coachName: "Vikram Rathore",
    videoSrc: "/Videos/transformations/devansh-transformation.mp4",
    posterSrc: "/Images/transformations/devansh-poster.jpg",
    metrics: {
      before: "86 kg",
      after: "74 kg",
      label: "Bodyweight",
    },
  },
];

export default function MemberTransformationsSection() {
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});
  const [unmutedId, setUnmutedId] = useState<string | null>(null);
  const [pausedMap, setPausedMap] = useState<Record<string, boolean>>({});

  const toggleMute = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();

    const nextUnmuted = unmutedId === id ? null : id;
    setUnmutedId(nextUnmuted);

    Object.entries(videoRefs.current).forEach(([key, videoEl]) => {
      if (!videoEl) return;
      videoEl.muted = key !== nextUnmuted;
      if (key === nextUnmuted && videoEl.paused) {
        videoEl.play().catch(() => {});
        setPausedMap((prev) => ({ ...prev, [key]: false }));
      }
    });
  };

  const togglePlayPause = (id: string) => {
    const videoEl = videoRefs.current[id];
    if (!videoEl) return;

    if (videoEl.paused) {
      videoEl.play().catch(() => {});
      setPausedMap((prev) => ({ ...prev, [id]: false }));
    } else {
      videoEl.pause();
      setPausedMap((prev) => ({ ...prev, [id]: true }));
    }
  };

  return (
    <section
      id="transformations"
      aria-labelledby="transformations-heading"
      className="relative w-full bg-surface-dark py-24 text-white sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Asymmetric Header (Consistent with Trainers Section) */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="mb-3 inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(200,255,0,0.8)]" />
              <span className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-primary">
                Real Proof
              </span>
            </div>

            <h2
              id="transformations-heading"
              className="font-display text-4xl leading-[0.98] tracking-tight text-white uppercase sm:text-5xl lg:text-6xl"
            >
              Member{" "}
              <span className="block text-white/45">Transformations</span>
            </h2>
          </div>

          <div className="flex max-w-sm flex-col items-start gap-5">
            <p className="font-sans text-sm leading-relaxed text-white/70">
              Unfiltered video diaries, DEXA-tracked milestones, and real
              strength progressions built inside Auren Fitness Club.
            </p>
            <ActionButton href="/transformations" variant="glass" size="sm">
              Watch All Stories
            </ActionButton>
          </div>
        </div>

        {/* 3-Column 9:16 Portrait Video Cards */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {transformations.map((item) => {
            const isUnmuted = unmutedId === item.id;
            const isPaused = Boolean(pausedMap[item.id]);

            return (
              <article
                key={item.id}
                onClick={() => togglePlayPause(item.id)}
                className="group relative cursor-pointer rounded-[30px] bg-[#16171a] p-2 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.95),inset_0_1px_1px_rgba(255,255,255,0.1)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_36px_70px_-12px_rgba(0,0,0,1),inset_0_1px_1px_rgba(255,255,255,0.18)]"
              >
                {/* True 9:16 Vertical Portrait Video Frame */}
                <div className="relative aspect-[9/16] w-full overflow-hidden rounded-[23px] bg-[#0b0c0e]">
                  <video
                    ref={(el) => {
                      videoRefs.current[item.id] = el;
                    }}
                    src={item.videoSrc}
                    poster={item.posterSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />

                  {/* Top Floating Bar: Result Badge + Audio Control */}
                  <div className="absolute inset-x-4 top-4 z-20 flex items-center justify-between gap-2">
                    {/* Headline Stat Pill */}
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-black/55 px-3.5 py-1.5 font-heading text-[11px] font-bold uppercase tracking-wider text-primary backdrop-blur-md shadow-[0_8px_20px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.14)]">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {item.headlineResult}
                    </span>

                    {/* Mute / Unmute Button */}
                    <button
                      type="button"
                      onClick={(e) => toggleMute(item.id, e)}
                      aria-label={
                        isUnmuted
                          ? `Mute ${item.memberName}'s transformation video`
                          : `Unmute ${item.memberName}'s transformation video`
                      }
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-md shadow-[0_8px_20px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.16)] transition-all duration-200 hover:scale-110 hover:bg-primary hover:text-black"
                    >
                      {isUnmuted ? (
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
                          />
                        </svg>
                      )}
                    </button>
                  </div>

                  {/* Center Pause Indicator (Appears only when user pauses reel) */}
                  {isPaused && (
                    <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center bg-black/25">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black/65 text-white backdrop-blur-md shadow-[0_12px_30px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.2)]">
                        <svg
                          className="ml-0.5 h-6 w-6"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M8 5.14v14l11-7-11-7z" />
                        </svg>
                      </div>
                    </div>
                  )}

                  {/* LAYER 1: Seamless Progressive Blur Mask */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[48%] backdrop-blur-2xl"
                    style={{
                      WebkitMaskImage:
                        "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.92) 45%, rgba(0,0,0,0) 100%)",
                      maskImage:
                        "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.92) 45%, rgba(0,0,0,0) 100%)",
                    }}
                  />

                  {/* LAYER 2: Bottom Dark Scrim for Guaranteed Text Readability */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[55%] bg-gradient-to-t from-[#090a0c]/95 via-[#090a0c]/65 to-transparent"
                  />

                  {/* LAYER 3: Inner Glass Edge Highlight */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 z-20 rounded-[23px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.14)]"
                  />

                  {/* LAYER 4: Member Story & Proof Footer */}
                  <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col justify-end p-6">
                    {/* Member Name + Verified Transformation Check */}
                    <div className="flex items-center gap-2">
                      <h3 className="font-sans text-2xl font-semibold tracking-tight text-white">
                        {item.memberName}
                      </h3>
                      <span
                        title="Verified Member Transformation"
                        className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-black shadow-[0_0_12px_rgba(200,255,0,0.45)]"
                      >
                        <svg
                          className="h-3 w-3"
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
                    </div>

                    {/* Program + Duration */}
                    <p className="mt-0.5 font-heading text-[11px] font-bold uppercase tracking-[0.16em] text-primary">
                      {item.program} · {item.timeframe}
                    </p>

                    {/* Member Quote */}
                    <p className="mt-2.5 line-clamp-2 font-sans text-[13px] leading-relaxed text-white/80">
                      &ldquo;{item.quote}&rdquo;
                    </p>

                    {/* Bottom Before -> After Metric + Action Pill */}
                    <div className="mt-5 flex items-center justify-between gap-3 pt-1">
                      <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 font-sans text-xs font-medium text-white/90 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
                        <span className="text-white/55 line-through">
                          {item.metrics.before}
                        </span>
                        <span className="text-primary">→</span>
                        <span className="font-semibold text-white">
                          {item.metrics.after}
                        </span>
                      </div>

                      <Link
                        href={`/start?program=${encodeURIComponent(item.program)}`}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 font-sans text-xs font-semibold text-black shadow-[0_8px_20px_rgba(0,0,0,0.4)] transition-all duration-200 hover:scale-105 hover:bg-primary hover:text-black active:scale-95"
                      >
                        <span>Start</span>
                        <span className="text-sm leading-none">+</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
