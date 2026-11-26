import Image from "next/image";
import ActionButton from "../../Components/ui/ActionButton";
import { successStoriesData } from "../../../data/about";

export default function SuccessStoriesSection() {
  return (
    <section
      id="stories"
      aria-labelledby="stories-heading"
      className="relative w-full scroll-mt-24 bg-surface-dark py-20 text-white sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Split Header */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="mb-3 inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(200,255,0,0.8)]" />
              <span className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-primary">
                Success Stories
              </span>
            </div>

            <h2
              id="stories-heading"
              className="font-display text-4xl leading-[0.98] tracking-tight text-white uppercase sm:text-5xl lg:text-6xl"
            >
              Real Transformations{" "}
              <span className="block text-white/45">Built Inside Auren</span>
            </h2>
          </div>

          <div className="flex max-w-sm flex-col items-start gap-5">
            <p className="font-sans text-sm leading-relaxed text-white/70">
              Consistent training, progressive strength plans, and practical
              nutrition habits applied week after week.
            </p>
            <ActionButton
              href="/contact#free-trial"
              variant="primary"
              size="sm"
            >
              Start Your Story
            </ActionButton>
          </div>
        </div>

        {/* 3-Column Success Stories Grid (Zero Borders, Pure Layered Shadows) */}
        <div className="mt-14 grid grid-cols-1 items-stretch gap-7 lg:grid-cols-3">
          {successStoriesData.map((item) => (
            <article
              key={item.id}
              className={`relative flex flex-col justify-between overflow-hidden rounded-3xl p-7 transition-transform duration-300 hover:-translate-y-1 sm:p-8 ${
                item.featured
                  ? "bg-surface-card shadow-[0_32px_64px_-12px_rgba(0,0,0,0.95),0_0_40px_-15px_rgba(200,255,0,0.2),inset_0_1px_1px_rgba(200,255,0,0.35)]"
                  : "bg-surface-card/75 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.1)]"
              }`}
            >
              <div>
                {/* Duration & Program Row */}
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-md bg-surface-dark px-3 py-1.5 font-heading text-[11px] font-bold uppercase tracking-wider text-white/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]">
                    {item.duration}
                  </span>

                  <span className="rounded-md bg-primary px-3 py-1.5 font-heading text-[11px] font-extrabold uppercase tracking-wider text-primary-foreground shadow-[0_6px_16px_-4px_rgba(200,255,0,0.5)]">
                    {item.program}
                  </span>
                </div>

                {/* Milestone Headline */}
                <h3 className="mt-6 font-display text-2xl leading-tight tracking-tight text-white uppercase sm:text-3xl">
                  {item.headlineResult}
                </h3>

                {/* Story Narrative */}
                <p className="mt-4 font-sans text-sm leading-relaxed text-white/75">
                  {item.story}
                </p>
              </div>

              {/* Member Profile Footer */}
              <div className="mt-8 flex items-center gap-3.5 pt-5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-surface-dark shadow-[0_6px_16px_rgba(0,0,0,0.75),inset_0_1px_1px_rgba(255,255,255,0.2)]">
                  <Image
                    src={item.avatar}
                    alt={item.memberName}
                    fill
                    unoptimized
                    sizes="48px"
                    className="object-cover object-top"
                  />
                </div>

                <div>
                  <p className="font-heading text-sm font-bold uppercase tracking-wide text-white">
                    {item.memberName}
                  </p>
                  <p className="mt-0.5 font-sans text-xs text-primary">
                    Auren Member
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
