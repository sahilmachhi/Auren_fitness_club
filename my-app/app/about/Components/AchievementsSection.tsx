import { clubAchievementsData } from "../../../data/about";

export default function AchievementsSection() {
  return (
    <section
      id="achievements"
      aria-labelledby="achievements-heading"
      className="relative w-full bg-surface-dark py-16 text-white sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-surface-card p-8 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.95),inset_0_1px_1px_rgba(255,255,255,0.12)] sm:p-12">
          <div className="max-w-2xl">
            <div className="mb-3 inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(200,255,0,0.8)]" />
              <span className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-primary">
                Club Standards &amp; Milestones
              </span>
            </div>

            <h2
              id="achievements-heading"
              className="font-display text-3xl leading-[0.98] tracking-tight text-white uppercase sm:text-5xl"
            >
              Built For Performance,{" "}
              <span className="text-white/45">Backed By Standards.</span>
            </h2>
          </div>

          {/* 4-Column Stat & Milestone Cards */}
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {clubAchievementsData.map((item) => (
              <div
                key={item.label}
                className="flex flex-col justify-between rounded-2xl bg-surface-dark/90 p-6 shadow-[0_16px_32px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.08)]"
              >
                <div>
                  <span className="font-heading text-[11px] font-bold uppercase tracking-widest text-primary">
                    {item.badge}
                  </span>

                  <p className="mt-3 font-display text-4xl tracking-tight text-white uppercase sm:text-5xl">
                    {item.metric}
                  </p>

                  <h3 className="mt-2 font-heading text-sm font-bold uppercase tracking-wide text-white">
                    {item.label}
                  </h3>
                </div>

                <p className="mt-4 pt-4 font-sans text-xs leading-relaxed text-white/65 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
