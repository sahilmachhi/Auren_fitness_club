import Link from "next/link";
import ActionButton from "./ui/ActionButton";

interface MembershipTier {
  id: string;
  name: string;
  billingCycle: string;
  tagline: string;
  price: string;
  periodLabel: string;
  joiningFee: string;
  popular?: boolean;
  badgeText?: string;
  features: string[];
  ctaText: string;
  href: string;
}

// Update these placeholder rates with Auren Fitness Club's exact pricing
const membershipPlans: MembershipTier[] = [
  {
    id: "monthly",
    name: "Monthly Pass",
    billingCycle: "1 Month",
    tagline: "Flexible month-to-month access with zero long-term lock-in.",
    price: "₹2,499",
    periodLabel: "/ month",
    joiningFee: "+ ₹500 one-time registration",
    features: [
      "Unlimited strength, cardio & turf access",
      "Initial body composition & movement check",
      "Digital locker & hot shower access",
      "Open floor hours: 5:30 AM – 10:30 PM",
    ],
    ctaText: "Choose Monthly",
    href: "/memberships?plan=monthly",
  },
  {
    id: "quarterly",
    name: "Quarterly Plan",
    billingCycle: "3 Months",
    tagline:
      "Our most chosen 12-week window for visible strength and fat-loss milestones.",
    price: "₹6,499",
    periodLabel: "/ 3 months",
    joiningFee: "Zero joining fee included",
    popular: true,
    badgeText: "Most Popular",
    features: [
      "Everything in Monthly Pass",
      "Personalized starter workout & macro guide",
      "Monthly progress & body-fat reassessment",
      "2 complimentary group conditioning classes",
      "7-day membership freeze option",
    ],
    ctaText: "Choose Quarterly",
    href: "/memberships?plan=quarterly",
  },
  {
    id: "annual",
    name: "Annual Club",
    billingCycle: "12 Months",
    tagline: "Lowest effective monthly rate for lifters committed year-round.",
    price: "₹18,999",
    periodLabel: "/ year",
    joiningFee: "Zero joining fee + 1 guest pass/mo",
    features: [
      "Everything in Quarterly Plan",
      "Bi-weekly coach check-ins & program updates",
      "Unlimited small-group conditioning classes",
      "Up to 30 days travel freeze protection",
      "Priority peak-hour equipment & class booking",
    ],
    ctaText: "Choose Annual",
    href: "/memberships?plan=annual",
  },
];

export default function PricingPreviewSection() {
  return (
    <section
      id="memberships"
      aria-labelledby="pricing-heading"
      className="relative w-full bg-surface-dark py-24 text-white sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Reference-Style Asymmetric Header */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="mb-3 inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(200,255,0,0.8)]" />
              <span className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-primary">
                Membership Plans
              </span>
            </div>

            <h2
              id="pricing-heading"
              className="font-display text-4xl leading-[0.98] tracking-tight text-white uppercase sm:text-5xl lg:text-6xl"
            >
              Pick The Right Plan{" "}
              <span className="block text-white/45">
                For Your Training Goals
              </span>
            </h2>
          </div>

          <div className="flex max-w-sm flex-col items-start gap-5">
            <p className="font-sans text-sm leading-relaxed text-white/70">
              Transparent pricing with clear inclusions and zero hidden floor
              charges. Compare full terms and Half-Yearly options on our
              membership page.
            </p>
            <ActionButton href="/memberships" variant="glass" size="sm">
              Compare All Plans
            </ActionButton>
          </div>
        </div>

        {/* 3-Column Pricing Cards (Zero Borders, Pure Shadows + Inset Highlights) */}
        <div className="mt-14 grid grid-cols-1 items-stretch gap-7 lg:grid-cols-3">
          {membershipPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col justify-between overflow-hidden rounded-2xl p-7 transition-transform duration-300 hover:-translate-y-1 sm:p-8 ${
                plan.popular
                  ? "bg-surface-card shadow-[0_32px_64px_-12px_rgba(0,0,0,0.95),0_0_40px_-15px_rgba(200,255,0,0.22),inset_0_1px_1px_rgba(200,255,0,0.45)]"
                  : "bg-surface-card/75 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.1)]"
              }`}
            >
              {/* Top Electric Lime Accent Bar on Popular Plan */}
              {plan.popular && (
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1 bg-primary shadow-[0_0_16px_rgba(200,255,0,0.9)]"
                />
              )}

              <div>
                {/* Plan Title & Badge Row */}
                <div className="flex items-center justify-between gap-3">
                  <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                    {plan.billingCycle}
                  </span>

                  {plan.badgeText && (
                    <span className="rounded-md bg-primary px-2.5 py-1 font-heading text-[11px] font-bold uppercase tracking-wider text-primary-foreground shadow-[0_6px_16px_-4px_rgba(200,255,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.5)]">
                      {plan.badgeText}
                    </span>
                  )}
                </div>

                <h3
                  className={`mt-2 font-display text-3xl tracking-tight uppercase ${
                    plan.popular ? "text-primary" : "text-white"
                  }`}
                >
                  {plan.name}
                </h3>

                <p className="mt-2 font-sans text-xs leading-relaxed text-white/70 sm:text-sm">
                  {plan.tagline}
                </p>

                {/* Price & Joining Fee Block */}
                <div className="mt-6 pb-6 shadow-[inset_0_-1px_0_0_rgba(255,255,255,0.08)]">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-4xl tracking-tight text-white sm:text-5xl">
                      {plan.price}
                    </span>
                    <span className="font-heading text-xs font-semibold uppercase tracking-wider text-white/55">
                      {plan.periodLabel}
                    </span>
                  </div>
                  <p className="mt-1.5 font-sans text-xs font-medium text-primary/90">
                    {plan.joiningFee}
                  </p>
                </div>

                {/* Plan Inclusions List */}
                <ul className="mt-6 space-y-3.5">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 font-sans text-sm text-white/85"
                    >
                      <span
                        className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                          plan.popular
                            ? "bg-primary shadow-[0_0_8px_rgba(200,255,0,0.9)]"
                            : "bg-white/45"
                        }`}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Full-Width Signature Dual-Box CTA */}
              <div className="mt-8 pt-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
                <ActionButton
                  href={plan.href}
                  variant={plan.popular ? "primary" : "glass"}
                  className="w-full"
                >
                  {plan.ctaText}
                </ActionButton>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Free Trial & Custom PT Note */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl bg-surface-card/50 px-6 py-5 text-center shadow-[0_16px_32px_-8px_rgba(0,0,0,0.75),inset_0_1px_1px_rgba(255,255,255,0.08)] sm:flex-row sm:text-left">
          <p className="font-sans text-sm text-white/75">
            Not sure which duration fits your schedule?{" "}
            <span className="font-semibold text-white">
              Try the floor first with a complimentary 1-day session.
            </span>
          </p>

          <Link
            href="/contact#free-trial"
            className="shrink-0 font-heading text-xs font-bold uppercase tracking-widest text-primary hover:underline"
          >
            Book Free Trial &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
