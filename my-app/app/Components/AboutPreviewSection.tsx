"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import ActionButton from "./ui/ActionButton";

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
}

export default function AboutPreviewSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [canHover, setCanHover] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const startedByHoverRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const syncHover = () => setCanHover(mq.matches);
    syncHover();
    mq.addEventListener("change", syncHover);
    return () => mq.removeEventListener("change", syncHover);
  }, []);

  const startPlayback = async (preferUnmuted: boolean) => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !preferUnmuted;
    setIsMuted(!preferUnmuted);

    try {
      await video.play();
      setIsPlaying(true);
    } catch {
      video.muted = true;
      setIsMuted(true);
      try {
        await video.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    }
  };

  const pausePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    setIsPlaying(false);
    startedByHoverRef.current = false;
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (!canHover) return;
    const video = videoRef.current;
    if (video && video.paused) {
      startedByHoverRef.current = true;
      void startPlayback(false);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (!canHover) return;
    if (startedByHoverRef.current) {
      pausePlayback();
    }
  };

  const handleVideoSurfaceClick = () => {
    const video = videoRef.current;
    if (!video) return;

    startedByHoverRef.current = false;
    if (video.paused) {
      void startPlayback(true);
    } else if (isMuted) {
      video.muted = false;
      setIsMuted(false);
    } else {
      pausePlayback();
    }
  };

  const handlePlayPauseButton = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    startedByHoverRef.current = false;

    if (video.paused) {
      void startPlayback(true);
    } else {
      pausePlayback();
    }
  };

  const handleMuteToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    const nextMuted = !isMuted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const handleRestart = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    setCurrentTime(0);
    startedByHoverRef.current = false;
    void startPlayback(true);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.min(
      Math.max((e.clientX - rect.left) / rect.width, 0),
      1,
    );
    video.currentTime = ratio * duration;
    setCurrentTime(video.currentTime);
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative w-full bg-surface-dark py-24 text-white sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-12">
          {/* LEFT 4 COLUMNS: Compact 9:16 Gym Tour Reel */}
          <div className="mx-auto w-full max-w-[250px] sm:max-w-[275px] lg:col-span-4 lg:max-w-[290px]">
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={`relative aspect-[9/16] w-full overflow-hidden rounded-[26px] bg-[#0c0e11] transition-all duration-300 ${
                isPlaying || isHovered
                  ? "shadow-[0_34px_68px_-12px_rgba(0,0,0,0.98),0_0_44px_-14px_rgba(200,255,0,0.34),inset_0_1px_1px_rgba(200,255,0,0.45)]"
                  : "shadow-[0_28px_56px_-14px_rgba(0,0,0,0.92),inset_0_1px_1px_rgba(255,255,255,0.16)]"
              }`}
            >
              <video
                ref={videoRef}
                src="/Videos/Gym Tour Video.mp4#t=0.5"
                preload="metadata"
                playsInline
                muted={isMuted}
                onClick={handleVideoSurfaceClick}
                onLoadedMetadata={() => {
                  if (videoRef.current?.duration) {
                    setDuration(videoRef.current.duration);
                  }
                }}
                onTimeUpdate={() => {
                  if (videoRef.current) {
                    setCurrentTime(videoRef.current.currentTime);
                    if (videoRef.current.duration) {
                      setDuration(videoRef.current.duration);
                    }
                  }
                }}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => {
                  setIsPlaying(false);
                  setCurrentTime(0);
                  startedByHoverRef.current = false;
                }}
                className="h-full w-full cursor-pointer object-cover"
              />

              {/* Top Floating HUD Bar */}
              <div className="pointer-events-none absolute inset-x-3 top-3 z-10 flex items-center justify-between gap-1.5">
                <div className="flex items-center gap-1.5 rounded-full bg-black/70 px-2.5 py-1 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.16)]">
                  <span
                    className={`h-1.5 w-1.5 rounded-full bg-primary ${
                      isPlaying ? "animate-ping" : "animate-pulse"
                    }`}
                  />
                  <span className="font-heading text-[9px] font-bold uppercase tracking-[0.18em] text-white">
                    {isPlaying ? "Playing" : "Gym Tour"}
                  </span>
                </div>

                <span className="rounded-full bg-primary/90 px-2.5 py-1 font-heading text-[9px] font-extrabold uppercase tracking-wider text-primary-foreground">
                  {canHover ? "Hover / Tap" : "Tap"}
                </span>
              </div>

              {/* Center Play Trigger Only When Paused */}
              {!isPlaying && (
                <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center gap-2.5 px-4 text-center">
                  <button
                    type="button"
                    onClick={handlePlayPauseButton}
                    aria-label="Play gym tour video"
                    className="pointer-events-auto flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_14px_30px_-4px_rgba(200,255,0,0.7),inset_0_1px_0_rgba(255,255,255,0.7)] transition-transform duration-300 hover:scale-110 active:scale-95"
                  >
                    <svg
                      aria-hidden="true"
                      className="ml-0.5 h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5.14v14l11-7-11-7z" />
                    </svg>
                  </button>

                  <span className="rounded-full bg-black/70 px-3 py-1 font-heading text-[9px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md">
                    {canHover ? "Hover or tap to play" : "Tap to start"}
                  </span>
                </div>
              )}

              {/* Bottom Glass Control Dock */}
              <div className="absolute inset-x-2.5 bottom-2.5 z-20 rounded-xl bg-black/75 p-2.5 backdrop-blur-xl shadow-[0_12px_24px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.16)]">
                <div className="flex items-center justify-between gap-1.5">
                  <p className="font-heading text-[9px] font-bold uppercase tracking-[0.16em] text-primary">
                    Floor Tour
                  </p>
                  <span className="font-heading text-[9px] font-bold tracking-wider text-white/70">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </span>
                </div>

                {/* Clickable Scrub Bar */}
                <div
                  role="slider"
                  tabIndex={0}
                  aria-label="Seek video timeline"
                  aria-valuemin={0}
                  aria-valuemax={Math.round(duration) || 100}
                  aria-valuenow={Math.round(currentTime)}
                  onClick={handleSeek}
                  className="mt-2 h-1.5 w-full cursor-pointer overflow-hidden rounded-full bg-white/15"
                >
                  <div
                    className="h-full rounded-full bg-primary transition-[width] duration-100"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>

                {/* Compact Action Buttons Row */}
                <div className="mt-2.5 flex items-center justify-between gap-1.5">
                  <button
                    type="button"
                    onClick={handlePlayPauseButton}
                    className="flex flex-1 cursor-pointer items-center justify-center gap-1 rounded-full bg-primary px-2.5 py-1.5 font-heading text-[10px] font-extrabold uppercase tracking-wider text-primary-foreground transition-transform active:scale-95"
                  >
                    {isPlaying ? (
                      <>
                        <svg
                          aria-hidden="true"
                          className="h-3 w-3"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <rect x="6" y="4" width="4" height="16" rx="1" />
                          <rect x="14" y="4" width="4" height="16" rx="1" />
                        </svg>
                        <span>Pause</span>
                      </>
                    ) : (
                      <>
                        <svg
                          aria-hidden="true"
                          className="h-3 w-3"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M8 5.14v14l11-7-11-7z" />
                        </svg>
                        <span>Play</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleMuteToggle}
                    className="flex cursor-pointer items-center justify-center gap-1 rounded-full bg-white/10 px-2.5 py-1.5 font-heading text-[10px] font-bold uppercase tracking-wider text-white transition-colors hover:bg-white/20"
                  >
                    {isMuted ? (
                      <>
                        <svg
                          aria-hidden="true"
                          className="h-3 w-3 text-primary"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2.2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M11 5 6 9H2v6h4l5 4V5Z" />
                          <line x1="23" y1="9" x2="17" y2="15" />
                          <line x1="17" y1="9" x2="23" y2="15" />
                        </svg>
                        <span>Unmute</span>
                      </>
                    ) : (
                      <>
                        <svg
                          aria-hidden="true"
                          className="h-3 w-3 text-primary"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2.2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M11 5 6 9H2v6h4l5 4V5Z" />
                          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                        </svg>
                        <span>Muted</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleRestart}
                    aria-label="Restart video"
                    className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    <svg
                      aria-hidden="true"
                      className="h-3 w-3"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                      <path d="M3 3v5h5" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT 8 COLUMNS: Headline + Founder Showcase Card */}
          <div className="lg:col-span-8">
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(200,255,0,0.8)]" />
              <span className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-primary">
                The Founder &amp; Vision
              </span>
            </div>

            <h2
              id="about-heading"
              className="font-display text-3xl leading-[1.06] tracking-tight text-white uppercase sm:text-5xl"
            >
              Built For Lifters Who{" "}
              <span className="text-white/45">
                Take Training Seriously And Want Real Coaching,
              </span>{" "}
              Not Crowded Gimmicks.
            </h2>

            <div className="relative mt-10 overflow-hidden rounded-[26px] bg-gradient-to-br from-[#20242c]/95 via-surface-card/90 to-[#101215] p-6 shadow-[0_28px_56px_-14px_rgba(0,0,0,0.92),inset_0_1px_1px_rgba(255,255,255,0.14)] sm:flex sm:items-center sm:gap-7 sm:p-7">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent"
              />

              <div className="relative aspect-square w-36 shrink-0 overflow-hidden rounded-2xl bg-surface-dark shadow-[0_14px_28px_rgba(0,0,0,0.75),inset_0_1px_1px_rgba(255,255,255,0.16)] sm:w-44">
                <Image
                  src="/Images/Gym_owner.jpg"
                  alt="Founder of Auren Fitness Club"
                  fill
                  unoptimized
                  sizes="(max-width: 640px) 144px, 176px"
                  className="object-cover object-[50%_18%]"
                />
              </div>

              <div className="mt-5 sm:mt-0">
                <span className="inline-block rounded-full bg-primary/15 px-3 py-1 font-heading text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                  Founder &amp; Head Coach
                </span>
                <h3 className="mt-2 font-heading text-2xl font-bold uppercase tracking-wide text-white">
                  Aarav Mehta
                </h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-white/75">
                  &ldquo;I started Auren Fitness Club after seeing too many gyms
                  pack cheap machines onto a floor with zero coaching support.
                  We designed every square foot here around heavy compound
                  lifting, structured programming, and coaches who actually know
                  your name and numbers.&rdquo;
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
              <p className="max-w-md font-sans text-sm leading-relaxed text-white/65">
                Whether it is your first week under a barbell or your fifth year
                chasing PRs, our floor is built to keep you progressing safely.
              </p>

              <div className="shrink-0">
                <ActionButton href="/about" variant="glass" size="sm">
                  Our Full Story
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
