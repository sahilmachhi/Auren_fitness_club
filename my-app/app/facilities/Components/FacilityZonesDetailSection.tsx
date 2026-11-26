import Image from "next/image";
import ActionButton from "../../Components/ui/ActionButton";
import { facilityZonesData } from "../../../data/facilities";

export default function FacilityZonesDetailSection() {
  return (
    <section
      aria-label="Training Zones and Locker Room Amenities"
      className="relative w-full bg-surface-dark py-12 text-white sm:py-16"
    >
      <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:space-y-24 lg:px-8">
        {facilityZonesData.map((zone, index) => {
          const isReversed = index % 2 === 1;

          return (
            <article
              key={zone.id}
              id={zone.id}
              className="scroll-mt-28 overflow-hidden rounded-3xl bg-surface-card/75 p-6 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.9),inset_0_1px_1px_rgba(255,255,255,0.12)] sm:p-8 lg:p-10"
            >
              <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
                {/* Zone Photography (Alternates Left/Right) */}
                <div
                  className={`lg:col-span-6 ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-black shadow-[0_24px_48px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.14)]">
                    <Image
                      src={zone.image}
                      alt={`${zone.title} at Auren Fitness Club`}
                      fill
                      unoptimized
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />

                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"
                    />

                    {/* Top-Left Zone Badge */}
                    <div className="absolute top-4 left-4 rounded-lg bg-surface-dark/85 px-3 py-1.5 font-heading text-xs font-bold tracking-widest text-primary backdrop-blur-md shadow-[0_8px_20px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.12)]">
                      ZONE {zone.number} · {zone.category}
                    </div>

                    {/* Bottom Highlight Pills */}
                    <div className="absolute inset-x-4 bottom-4 flex flex-wrap gap-2">
                      {zone.highlights.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-surface-dark/85 px-3 py-1.5 font-heading text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Zone Specs & Equipment Breakdown */}
                <div
                  className={`lg:col-span-6 ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <p className="font-heading text-xs font-bold uppercase tracking-[0.22em] text-primary">
                    {zone.subtitle}
                  </p>

                  <h2 className="mt-2 font-display text-4xl leading-[0.98] tracking-tight text-white uppercase sm:text-5xl">
                    {zone.title}
                  </h2>

                  <p className="mt-4 font-sans text-sm leading-relaxed text-white/75 sm:text-base">
                    {zone.description}
                  </p>

                  {/* Detailed Equipment / Amenity Checklist */}
                  <div className="mt-7 pt-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
                    <h3 className="font-heading text-xs font-bold uppercase tracking-widest text-primary">
                      What Is Inside This Zone
                    </h3>

                    <ul className="mt-4 space-y-2.5">
                      {zone.equipmentList.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 font-sans text-xs leading-relaxed text-white/85 sm:text-sm"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary shadow-[0_0_8px_rgba(200,255,0,0.85)]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8">
                    <ActionButton
                      href="/contact#free-trial"
                      variant="glass"
                      size="sm"
                    >
                      Experience This Zone Free
                    </ActionButton>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
