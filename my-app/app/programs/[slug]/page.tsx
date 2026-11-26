import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ActionButton from "../../Components/ui/ActionButton";
import { trainingProgramsData } from "../../../data/programs";

interface ProgramDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return trainingProgramsData.map((program) => ({
    slug: program.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProgramDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const program = trainingProgramsData.find((p) => p.slug === slug);

  if (!program) {
    return { title: "Program Not Found" };
  }

  return {
    title: `${program.title} Program`,
    description: program.summary,
  };
}

export default async function ProgramDetailPage({
  params,
}: ProgramDetailPageProps) {
  const { slug } = await params;
  const program = trainingProgramsData.find((p) => p.slug === slug);

  if (!program) {
    notFound();
  }

  return (
    <section className="relative w-full bg-surface-dark pt-32 pb-24 text-white sm:pt-40 sm:pb-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Back Breadcrumb */}
        <Link
          href="/programs"
          className="inline-flex items-center gap-2 font-heading text-xs font-bold uppercase tracking-widest text-primary hover:underline"
        >
          &larr; All Training Programs
        </Link>

        {/* Hero Split */}
        <div className="mt-8 grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-primary">
              Program {program.number} · {program.intensity}
            </span>
            <h1 className="mt-2 font-display text-5xl leading-[0.96] tracking-tight text-white uppercase sm:text-6xl">
              {program.title}
            </h1>
            <p className="mt-3 font-heading text-lg font-semibold text-white/75">
              {program.tagline}
            </p>
            <p className="mt-5 font-sans text-sm leading-relaxed text-white/75 sm:text-base">
              {program.summary}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <ActionButton
                href={`/contact?program=${program.slug}#free-trial`}
                variant="primary"
              >
                Book Free Trial For {program.title}
              </ActionButton>
              <ActionButton href="/memberships" variant="glass">
                View Membership Plans
              </ActionButton>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-surface-card shadow-[0_28px_56px_-12px_rgba(0,0,0,0.9),inset_0_1px_1px_rgba(255,255,255,0.14)]">
              <Image
                src={program.image}
                alt={program.title}
                fill
                unoptimized
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Program-Specific Details Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left: Who It's For + Inclusions */}
          <div className="space-y-8 rounded-3xl bg-surface-card p-7 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.1)] lg:col-span-6">
            <div>
              <h2 className="font-display text-2xl text-white uppercase">
                Who This Program Is Built For
              </h2>
              <ul className="mt-4 space-y-3">
                {program.whoIsItFor.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 font-sans text-sm text-white/80"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
              <h2 className="font-display text-2xl text-white uppercase">
                Program Inclusions
              </h2>
              <ul className="mt-4 space-y-3">
                {program.whatYouGet.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 font-sans text-sm text-white/85"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary shadow-[0_0_8px_rgba(200,255,0,0.9)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Weekly Training Structure */}
          <div className="rounded-3xl bg-surface-card p-7 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.1)] lg:col-span-6">
            <h2 className="font-display text-2xl text-white uppercase">
              Sample Weekly Structure
            </h2>
            <p className="mt-2 font-sans text-xs text-white/60">
              {program.frequency} · {program.sessionLength} per session
            </p>

            <div className="mt-6 space-y-3">
              {program.weeklyStructure.map((slot) => (
                <div
                  key={slot.day}
                  className="flex flex-col justify-between gap-1 rounded-xl bg-surface-dark/90 px-4 py-3.5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] sm:flex-row sm:items-center"
                >
                  <span className="font-heading text-xs font-bold uppercase tracking-widest text-primary">
                    {slot.day}
                  </span>
                  <span className="font-heading text-sm font-semibold text-white">
                    {slot.focus}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
