"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ActionButton from "./ui/ActionButton";

type BlogCategory =
  | "All"
  | "Diet & Nutrition"
  | "Weight Gain"
  | "Strength & Form"
  | "Recovery";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: Exclude<BlogCategory, "All">;
  readTime: string;
  publishedAt: string;
  coverImage: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  featured?: boolean;
}

const CATEGORIES: BlogCategory[] = [
  "All",
  "Diet & Nutrition",
  "Weight Gain",
  "Strength & Form",
  "Recovery",
];

const blogPosts: BlogPost[] = [
  {
    id: "post-1",
    slug: "clean-weight-gain-blueprint-indian-diet",
    title:
      "The Clean Weight Gain Blueprint: How to Add 5 KG Without Dirty Bulking",
    excerpt:
      "Most skinny lifters fail to gain weight because they guess their calories instead of hitting a structured 350-kcal surplus with high-protein Indian meals and progressive compound lifts.",
    category: "Weight Gain",
    readTime: "6 Min Read",
    publishedAt: "Nov 18, 2026",
    coverImage: "/Images/hero_section_bg.png",
    author: {
      name: "Rohan Desai",
      role: "Founder & Head Strength Coach",
      avatar: "/Images/person Images/person_5.png",
    },
    featured: true,
  },
  {
    id: "post-2",
    slug: "daily-protein-targets-without-expensive-supplements",
    title: "Hitting 130g Daily Protein on a Normal Home Kitchen Budget",
    excerpt:
      "A practical breakdown of paneer, soya chunks, eggs, whey, and dal combinations that actually digest well and fuel muscle repair.",
    category: "Diet & Nutrition",
    readTime: "5 Min Read",
    publishedAt: "Nov 10, 2026",
    coverImage: "/Images/person Images/person_6.png",
    author: {
      name: "Kavya Nair",
      role: "Lead Nutrition & Recomp Coach",
      avatar: "/Images/person Images/person_6.png",
    },
  },
  {
    id: "post-3",
    slug: "why-your-bench-press-stalled-after-six-months",
    title: "Why Your Bench & Squat Stalled After 6 Months (And How to Fix It)",
    excerpt:
      "Training to failure every single set fries your nervous system. Here is how wave loading and 2 RIR sets restart strength gains.",
    category: "Strength & Form",
    readTime: "7 Min Read",
    publishedAt: "Nov 02, 2026",
    coverImage: "/Images/person Images/person_7.png",
    author: {
      name: "Rohan Desai",
      role: "Founder & Head Strength Coach",
      avatar: "/Images/person Images/person_5.png",
    },
  },
  {
    id: "post-4",
    slug: "sleep-hydration-and-deload-weeks-explained",
    title: "You Grow Outside the Gym: Sleep, Electrolytes & Deload Weeks",
    excerpt:
      "If your joints ache and your morning grip feels weak, you do not need another pre-workout scoop. You need structured recovery.",
    category: "Recovery",
    readTime: "4 Min Read",
    publishedAt: "Oct 24, 2026",
    coverImage: "/Images/person Images/person_1.png",
    author: {
      name: "Vikram Rathore",
      role: "Conditioning & Mobility Lead",
      avatar: "/Images/person Images/person_7.png",
    },
  },
];

export default function CoachJournalSection() {
  const [activeCategory, setActiveCategory] = useState<BlogCategory>("All");

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  const heroPost =
    filteredPosts.find((post) => post.featured) || filteredPosts[0];
  const secondaryPosts = filteredPosts.filter(
    (post) => post.id !== heroPost?.id,
  );

  return (
    <section
      id="journal"
      aria-labelledby="journal-heading"
      className="relative w-full bg-surface-dark py-24 text-white sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Asymmetric Header */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="mb-3 inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(200,255,0,0.8)]" />
              <span className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-primary">
                From The Floor
              </span>
            </div>

            <h2
              id="journal-heading"
              className="font-display text-4xl leading-[0.98] tracking-tight text-white uppercase sm:text-5xl lg:text-6xl"
            >
              Training, Diet &amp;{" "}
              <span className="block text-white/45">Gym Owner Notes</span>
            </h2>
          </div>

          <div className="flex max-w-sm flex-col items-start gap-5">
            <p className="font-sans text-sm leading-relaxed text-white/70">
              No bro-science or recycled fluff. Practical nutrition guides,
              weight-gain blueprints, and lifting mechanics written directly by
              our coaching team.
            </p>
            <ActionButton href="/blog" variant="glass" size="sm">
              Explore All Articles
            </ActionButton>
          </div>
        </div>

        {/* Interactive Category Filter Bar */}
        <div
          role="tablist"
          aria-label="Filter gym articles by category"
          className="mt-10 flex flex-wrap items-center gap-2.5"
        >
          {CATEGORIES.map((category) => {
            const isSelected = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-2 font-heading text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                  isSelected
                    ? "bg-primary text-primary-foreground shadow-[0_8px_20px_-4px_rgba(200,255,0,0.5),inset_0_1px_0_rgba(255,255,255,0.55)]"
                    : "bg-surface-card/80 text-white/70 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] hover:bg-surface-card hover:text-white"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Editorial Grid: 7-Col Featured Story + 5-Col Secondary Stack */}
        {heroPost && (
          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* LEFT 7 COLUMNS: Featured Flagship Article */}
            <article
              className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-surface-card shadow-[0_32px_64px_-14px_rgba(0,0,0,0.95),inset_0_1px_1px_rgba(255,255,255,0.14)] transition-transform duration-300 hover:-translate-y-1 ${
                secondaryPosts.length > 0 ? "lg:col-span-7" : "lg:col-span-12"
              }`}
            >
              {/* Cover Image Header */}
              <Link
                href={`/blog/${heroPost.slug}`}
                className="relative block aspect-[16/9] w-full overflow-hidden bg-black"
              >
                <Image
                  src={heroPost.coverImage}
                  alt={heroPost.title}
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-surface-card via-black/30 to-transparent"
                />

                {/* Top Badges */}
                <div className="absolute inset-x-5 top-5 flex items-center justify-between gap-2">
                  <span className="rounded-full bg-primary px-3.5 py-1 font-heading text-[11px] font-extrabold uppercase tracking-wider text-primary-foreground shadow-[0_6px_18px_rgba(200,255,0,0.4)]">
                    {heroPost.category}
                  </span>

                  <span className="rounded-full bg-black/60 px-3 py-1 font-heading text-[11px] font-bold uppercase tracking-wider text-white/90 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]">
                    {heroPost.readTime}
                  </span>
                </div>
              </Link>

              {/* Featured Article Body */}
              <div className="flex flex-1 flex-col justify-between p-7 sm:p-9">
                <div>
                  <p className="font-sans text-xs font-medium text-white/50">
                    Published {heroPost.publishedAt}
                  </p>

                  <Link href={`/blog/${heroPost.slug}`}>
                    <h3 className="mt-2 font-display text-2xl leading-tight tracking-tight text-white uppercase transition-colors group-hover:text-primary sm:text-3xl lg:text-4xl">
                      {heroPost.title}
                    </h3>
                  </Link>

                  <p className="mt-4 font-sans text-sm leading-relaxed text-white/75 sm:text-base">
                    {heroPost.excerpt}
                  </p>
                </div>

                {/* Author Footer + Read Arrow */}
                <div className="mt-8 flex items-center justify-between gap-4 pt-5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.09)]">
                  <div className="flex items-center gap-3.5">
                    <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-surface-dark ring-2 ring-primary/40">
                      <Image
                        src={heroPost.author.avatar}
                        alt={heroPost.author.name}
                        fill
                        unoptimized
                        sizes="44px"
                        className="object-cover object-top"
                      />
                    </div>
                    <div>
                      <p className="font-heading text-sm font-bold uppercase tracking-wide text-white">
                        {heroPost.author.name}
                      </p>
                      <p className="font-sans text-xs text-white/60">
                        {heroPost.author.role}
                      </p>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${heroPost.slug}`}
                    aria-label={`Read ${heroPost.title}`}
                    className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 font-heading text-xs font-bold uppercase tracking-wider text-white transition-all duration-200 hover:bg-primary hover:text-black"
                  >
                    <span>Read Guide</span>
                    <svg
                      className="h-3.5 w-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>

            {/* RIGHT 5 COLUMNS: Secondary Gym Owner Articles */}
            {secondaryPosts.length > 0 && (
              <div className="flex flex-col justify-between gap-6 lg:col-span-5">
                {secondaryPosts.map((post) => (
                  <article
                    key={post.id}
                    className="group relative flex flex-col justify-between rounded-2xl bg-surface-card/85 p-6 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.11)] transition-all duration-300 hover:-translate-y-1 hover:bg-surface-card hover:shadow-[0_28px_56px_-12px_rgba(0,0,0,0.95),inset_0_1px_1px_rgba(200,255,0,0.28)]"
                  >
                    <div>
                      {/* Category + Read Time */}
                      <div className="flex items-center justify-between gap-3">
                        <span className="rounded-md bg-surface-dark/90 px-2.5 py-1 font-heading text-[10px] font-bold uppercase tracking-wider text-primary shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]">
                          {post.category}
                        </span>

                        <span className="font-sans text-xs text-white/50">
                          {post.readTime} · {post.publishedAt}
                        </span>
                      </div>

                      {/* Title */}
                      <Link href={`/blog/${post.slug}`}>
                        <h3 className="mt-3.5 font-heading text-lg font-bold leading-snug text-white transition-colors group-hover:text-primary sm:text-xl">
                          {post.title}
                        </h3>
                      </Link>

                      {/* Excerpt */}
                      <p className="mt-2 line-clamp-2 font-sans text-xs leading-relaxed text-white/70 sm:text-sm">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Compact Author + Read Link */}
                    <div className="mt-5 flex items-center justify-between pt-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.07)]">
                      <div className="flex items-center gap-2.5">
                        <div className="relative h-7 w-7 shrink-0 overflow-hidden rounded-full bg-surface-dark">
                          <Image
                            src={post.author.avatar}
                            alt={post.author.name}
                            fill
                            unoptimized
                            sizes="28px"
                            className="object-cover object-top"
                          />
                        </div>
                        <span className="font-sans text-xs font-medium text-white/75">
                          {post.author.name}
                        </span>
                      </div>

                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1 font-heading text-xs font-bold uppercase tracking-wider text-primary transition-transform group-hover:translate-x-0.5"
                      >
                        <span>Read</span>
                        <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
