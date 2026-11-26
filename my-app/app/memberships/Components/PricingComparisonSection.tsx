type CellValue = boolean | string;

interface ComparisonRow {
  feature: string;
  hint?: string;
  floorAccess: CellValue;
  performancePro: CellValue;
  eliteCoaching: CellValue;
}

interface ComparisonGroup {
  category: string;
  rows: ComparisonRow[];
}

const comparisonGroups: ComparisonGroup[] = [
  {
    category: "Floor, Equipment & Schedule",
    rows: [
      {
        feature: "Daily Gym Floor Access (5:30 AM - 10:30 PM)",
        floorAccess: true,
        performancePro: true,
        eliteCoaching: true,
      },
      {
        feature: "Calibrated Plates, Squat Racks & Platforms",
        floorAccess: true,
        performancePro: true,
        eliteCoaching: true,
      },
      {
        feature: "Conditioning Turf & Sled Track",
        floorAccess: true,
        performancePro: true,
        eliteCoaching: true,
      },
      {
        feature: "Small-Group Turf Conditioning Classes",
        hint: "High-energy coached metabolic & athletic sessions",
        floorAccess: "Pay-per-drop-in",
        performancePro: "Unlimited",
        eliteCoaching: "Unlimited + Priority",
      },
      {
        feature: "Peak-Hour Rack & Coach Reservation",
        floorAccess: false,
        performancePro: false,
        eliteCoaching: true,
      },
    ],
  },
  {
    category: "Coaching, Programming & Nutrition",
    rows: [
      {
        feature: "Initial Movement & Form Assessment",
        floorAccess: "1 Onboarding Session",
        performancePro: "Full 45-Min Screen",
        eliteCoaching: "Deep Biomechanics Audit",
      },
      {
        feature: "Structured Workout & Progression Plan",
        floorAccess: false,
        performancePro: "Updated Every 4 Weeks",
        eliteCoaching: "Custom Weekly Periodization",
      },
      {
        feature: "1-on-1 Personal Training Sessions",
        floorAccess: false,
        performancePro: "Optional Add-On",
        eliteCoaching: "12 Sessions / Month",
      },
      {
        feature: "Body Composition & Strength Tracking",
        floorAccess: false,
        performancePro: "Monthly Check-In",
        eliteCoaching: "Bi-Weekly + DEXA Guidance",
      },
      {
        feature: "Diet, Calorie & Protein Macro Blueprint",
        hint: "Practical Indian home-food meal structuring",
        floorAccess: false,
        performancePro: "Initial Macro Setup",
        eliteCoaching: "Weekly Adjustments",
      },
    ],
  },
  {
    category: "Flexibility & Member Perks",
    rows: [
      {
        feature: "Membership Freeze / Travel Pause",
        floorAccess: "7 Days (Annual Only)",
        performancePro: "15 Days / Year",
        eliteCoaching: "30 Days / Year",
      },
      {
        feature: "Complimentary Guest Passes",
        floorAccess: false,
        performancePro: "1 Pass / Quarter",
        eliteCoaching: "2 Passes / Month",
      },
      {
        feature: "Locker Rooms, Showers & Towel Service",
        floorAccess: "Day Lockers",
        performancePro: "Day Lockers",
        eliteCoaching: "Dedicated Locker + Towels",
      },
    ],
  },
];

function RenderCell({
  value,
  highlighted = false,
}: {
  value: CellValue;
  highlighted?: boolean;
}) {
  if (typeof value === "boolean") {
    return value ? (
      <span
        aria-label="Included"
        className={`inline-flex h-6 w-6 items-center justify-center rounded-full ${
          highlighted
            ? "bg-primary text-primary-foreground shadow-[0_0_12px_rgba(200,255,0,0.45)]"
            : "bg-primary/15 text-primary"
        }`}
      >
        <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    ) : (
      <span
        aria-label="Not included"
        className="inline-block h-0.5 w-4 rounded-full bg-white/20"
      />
    );
  }

  return (
    <span
      className={`font-sans text-xs font-semibold sm:text-[13px] ${
        highlighted ? "text-primary" : "text-white/85"
      }`}
    >
      {value}
    </span>
  );
}

export default function PricingComparisonSection() {
  return (
    <section
      id="comparison"
      aria-labelledby="comparison-heading"
      className="relative w-full bg-surface-dark py-20 text-white sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="mb-3 inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(200,255,0,0.8)]" />
            <span className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-primary">
              Full Breakdown
            </span>
          </div>

          <h2
            id="comparison-heading"
            className="font-display text-3xl leading-[0.98] tracking-tight text-white uppercase sm:text-5xl"
          >
            Compare Every{" "}
            <span className="block text-white/45">Membership Feature</span>
          </h2>
        </div>

        {/* Comparison Table Card (Horizontal Scroll Safe on Mobile) */}
        <div className="mt-12 overflow-hidden rounded-3xl bg-surface-card/85 shadow-[0_32px_64px_-14px_rgba(0,0,0,0.95),inset_0_1px_1px_rgba(255,255,255,0.12)]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead>
                <tr className="bg-surface-dark/90 shadow-[inset_0_-1px_0_0_rgba(255,255,255,0.08)]">
                  <th
                    scope="col"
                    className="w-[37%] px-6 py-6 font-heading text-xs font-bold uppercase tracking-[0.2em] text-white/60 sm:px-8"
                  >
                    What&apos;s Included
                  </th>

                  <th
                    scope="col"
                    className="w-[21%] px-4 py-6 text-center font-display text-xl tracking-wide text-white uppercase"
                  >
                    Floor Access
                  </th>

                  <th
                    scope="col"
                    className="w-[21%] bg-primary/[0.08] px-4 py-6 text-center shadow-[inset_0_2px_0_0_var(--color-primary)]"
                  >
                    <span className="mb-1 block font-heading text-[10px] font-extrabold uppercase tracking-[0.2em] text-primary">
                      Most Popular
                    </span>
                    <span className="font-display text-xl tracking-wide text-white uppercase">
                      Performance Pro
                    </span>
                  </th>

                  <th
                    scope="col"
                    className="w-[21%] px-4 py-6 text-center font-display text-xl tracking-wide text-white uppercase"
                  >
                    Elite 1-on-1
                  </th>
                </tr>
              </thead>

              <tbody>
                {comparisonGroups.map((group) => (
                  <FragmentGroup key={group.category} group={group} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

function FragmentGroup({ group }: { group: ComparisonGroup }) {
  return (
    <>
      {/* Category Divider Row */}
      <tr className="bg-black/35">
        <th
          colSpan={4}
          scope="colgroup"
          className="px-6 py-3.5 font-heading text-[11px] font-bold uppercase tracking-[0.22em] text-primary sm:px-8"
        >
          {group.category}
        </th>
      </tr>

      {/* Feature Rows */}
      {group.rows.map((row) => (
        <tr
          key={row.feature}
          className="transition-colors duration-150 hover:bg-white/[0.03] shadow-[inset_0_-1px_0_0_rgba(255,255,255,0.05)]"
        >
          <th
            scope="row"
            className="px-6 py-4 font-sans text-sm font-medium text-white/90 sm:px-8"
          >
            <div>{row.feature}</div>
            {row.hint && (
              <p className="mt-0.5 font-sans text-xs font-normal text-white/50">
                {row.hint}
              </p>
            )}
          </th>

          <td className="px-4 py-4 text-center">
            <RenderCell value={row.floorAccess} />
          </td>

          <td className="bg-primary/[0.05] px-4 py-4 text-center">
            <RenderCell value={row.performancePro} highlighted />
          </td>

          <td className="px-4 py-4 text-center">
            <RenderCell value={row.eliteCoaching} />
          </td>
        </tr>
      ))}
    </>
  );
}
