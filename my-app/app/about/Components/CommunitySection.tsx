import Image from "next/image";
import ActionButton from "../../Components/ui/ActionButton";

const communityAvatars = [
  "/Images/person Images/person_1.png",
  "/Images/person Images/person_2.png",
  "/Images/person Images/person_3.png",
  "/Images/person Images/person_4.png",
  "/Images/person Images/person_5.png",
];

const communityHighlights = [
  {
    title: "Zero-Ego Lifting Culture",
    detail:
      "Experienced lifters and complete beginners share the floor with mutual respect, clean re-racking habits, and zero intimidation.",
  },
  {
    title: "Saturday Turf Throwdowns",
    detail:
      "Weekly small-group conditioning sessions where members team up on sleds, rowers, and kettlebell circuits.",
  },
  {
    title: "Monthly Benchmark & PR Check-Ins",
    detail:
      "Structured strength, stamina, and body-composition check-ins that keep everyone focused on measurable milestones.",
  },
];

export default function CommunitySection() {
  return (
    <section
      id="community"
      aria-labelledby="community-heading"
      className="relative w-full bg-surface-dark py-20 text-white sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left 6 Cols: Community Culture & Highlights */}
          <div className="lg:col-span-6">
            <div className="mb-3 inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(200,255,0,0.8)]" />
              <span className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-primary">
                The Auren Community
              </span>
            </div>

            <h2
              id="community-heading"
              className="font-display text-4xl leading-[0.98] tracking-tight text-white uppercase sm:text-5xl"
            >
              Surround Yourself With{" "}
              <span className="block text-white/45">
                People Who Show Up &amp; Work.
              </span>
            </h2>

            <p className="mt-4 font-sans text-sm leading-relaxed text-white/75 sm:text-base">
              Consistency becomes effortless when the people training beside you
              are disciplined, supportive, and focused on getting 1% stronger
              every week.
            </p>

            {/* Member Avatar Row */}
            <div className="mt-6 flex items-center gap-4">
              <div className="flex -space-x-2.5">
                {communityAvatars.map((src) => (
                  <div
                    key={src}
                    className="relative h-11 w-11 overflow-hidden rounded-full bg-surface-card shadow-[0_4px_12px_rgba(0,0,0,0.85),0_0_0_2px_rgba(24,24,27,0.95)]"
                  >
                    <Image
                      src={src}
                      alt="Auren Fitness Club member"
                      fill
                      unoptimized
                      sizes="44px"
                      className="object-cover object-top"
                    />
                  </div>
                ))}
              </div>
              <p className="font-heading text-xs font-bold uppercase tracking-wider text-primary">
                Beginners · Lifters · Weekend Athletes
              </p>
            </div>

            {/* 3 Culture Highlights */}
            <div className="mt-8 space-y-4">
              {communityHighlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl bg-surface-card/75 p-5 shadow-[0_16px_32px_-8px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.08)]"
                >
                  <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white sm:text-base">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 font-sans text-xs leading-relaxed text-white/70 sm:text-sm">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <ActionButton
                href="/contact#free-trial"
                variant="primary"
                size="sm"
              >
                Train With Our Community
              </ActionButton>
            </div>
          </div>

          {/* Right 6 Cols: Dual Photo Collage */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-6">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-surface-card shadow-[0_28px_56px_-12px_rgba(0,0,0,0.9),inset_0_1px_1px_rgba(255,255,255,0.12)]">
              <Image
                src="/Images/free weights.jpeg"
                alt="Strength training floor at Auren Fitness Club"
                fill
                unoptimized
                sizes="(max-width: 640px) 100vw, 25vw"
                className="object-cover object-center"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"
              />
              <p className="absolute bottom-4 left-4 font-heading text-xs font-bold uppercase tracking-widest text-primary">
                Strength Floor
              </p>
            </div>

            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-surface-card shadow-[0_28px_56px_-12px_rgba(0,0,0,0.9),inset_0_1px_1px_rgba(255,255,255,0.12)] sm:mt-10">
              <Image
                src="/Images/Turf Zone.jpeg"
                alt="Group conditioning turf at Auren Fitness Club"
                fill
                unoptimized
                sizes="(max-width: 640px) 100vw, 25vw"
                className="object-cover object-center"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"
              />
              <p className="absolute bottom-4 left-4 font-heading text-xs font-bold uppercase tracking-widest text-primary">
                Group Conditioning Turf
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
