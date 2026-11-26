const openingHours = [
  {
    day: "Monday – Friday",
    hours: "05:30 AM – 10:30 PM",
    status: "Full Floor & PT",
  },
  {
    day: "Saturday",
    hours: "06:00 AM – 10:00 PM",
    status: "Turf Throwdown + Floor",
  },
  {
    day: "Sunday",
    hours: "07:00 AM – 01:00 PM",
    status: "Open Gym & Recovery",
  },
];

export default function LocationAndDetailsSection() {
  return (
    <section
      id="location-map"
      aria-labelledby="location-heading"
      className="relative w-full scroll-mt-24 bg-surface-dark py-20 text-white sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left 5 Cols: Address, Direct Contact, WhatsApp & Opening Hours */}
          <div className="flex flex-col justify-between space-y-6 lg:col-span-5">
            {/* Address & Direct Contact Card */}
            <div className="rounded-3xl bg-surface-card/75 p-7 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.1)]">
              <span className="font-heading text-xs font-bold uppercase tracking-[0.22em] text-primary">
                Club Location &amp; Desk
              </span>

              <h2
                id="location-heading"
                className="mt-2 font-display text-3xl tracking-tight text-white uppercase sm:text-4xl"
              >
                Auren Fitness Club
              </h2>

              <p className="mt-3 font-sans text-sm leading-relaxed text-white/75">
                2nd Floor, Auren Performance Hub, Main Ring Road, Gujarat, India
              </p>

              {/* Quick Tap Action Tiles (Call, WhatsApp, Email) */}
              <div className="mt-6 space-y-3">
                <a
                  href="https://wa.me/919876543210?text=Hi%20Auren%20Fitness%20Club!%20I%20have%20a%20quick%20question."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-2xl bg-primary px-5 py-3.5 font-heading text-xs font-extrabold uppercase tracking-wider text-primary-foreground shadow-[0_12px_28px_-6px_rgba(200,255,0,0.55),inset_0_1px_0_0_rgba(255,255,255,0.5)] transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <span>Chat Directly On WhatsApp</span>
                  <span>&rarr;</span>
                </a>

                <a
                  href="tel:+919876543210"
                  className="flex items-center justify-between rounded-2xl bg-surface-dark/90 px-5 py-3.5 font-heading text-xs font-bold uppercase tracking-wider text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] transition-colors hover:text-primary"
                >
                  <span>Call Front Desk</span>
                  <span className="text-primary">+91 98765 43210</span>
                </a>

                <a
                  href="mailto:hello@aurenfitness.in"
                  className="flex items-center justify-between rounded-2xl bg-surface-dark/90 px-5 py-3.5 font-heading text-xs font-bold uppercase tracking-wider text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] transition-colors hover:text-primary"
                >
                  <span>Email Desk</span>
                  <span className="lowercase text-white/80">
                    hello@aurenfitness.in
                  </span>
                </a>
              </div>
            </div>

            {/* Opening Hours Card */}
            <div className="rounded-3xl bg-surface-card/75 p-7 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.1)]">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl tracking-tight text-white uppercase">
                  Opening Hours
                </h3>
                <span className="inline-flex items-center gap-1.5 rounded-md bg-surface-dark px-2.5 py-1 font-heading text-[11px] font-bold uppercase tracking-wider text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                  Open 7 Days
                </span>
              </div>

              <div className="mt-5 space-y-3">
                {openingHours.map((slot) => (
                  <div
                    key={slot.day}
                    className="flex flex-col justify-between gap-1 rounded-xl bg-surface-dark/90 px-4 py-3 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] sm:flex-row sm:items-center"
                  >
                    <div>
                      <p className="font-heading text-xs font-bold uppercase tracking-wider text-white">
                        {slot.day}
                      </p>
                      <p className="font-sans text-[11px] text-white/50">
                        {slot.status}
                      </p>
                    </div>
                    <span className="font-heading text-xs font-bold text-primary">
                      {slot.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right 7 Cols: Embedded Google Maps Container (Zero Borders, Elevated Shadow) */}
          <div className="lg:col-span-7">
            <div className="relative h-full min-h-[420px] w-full overflow-hidden rounded-3xl bg-surface-card shadow-[0_32px_64px_-12px_rgba(0,0,0,0.95),inset_0_1px_1px_rgba(255,255,255,0.14)]">
              <iframe
                title="Auren Fitness Club Google Maps Location"
                src="https://www.google.com/maps?q=Godhra,Gujarat,India&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[420px] w-full border-0 grayscale contrast-125 invert-[90%] hue-rotate-180"
              />

              {/* Floating Bottom Directions Bar */}
              <div className="absolute inset-x-4 bottom-4 flex flex-col justify-between gap-3 rounded-2xl bg-surface-dark/90 p-4 backdrop-blur-md shadow-[0_14px_28px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.12)] sm:flex-row sm:items-center">
                <div>
                  <p className="font-heading text-xs font-bold uppercase tracking-widest text-primary">
                    Easy Parking &amp; Main Road Access
                  </p>
                  <p className="mt-0.5 font-sans text-xs text-white/80">
                    2nd Floor, Auren Performance Hub, Main Ring Road, Gujarat
                  </p>
                </div>

                <a
                  href="https://maps.google.com/?q=Godhra,Gujarat,India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 rounded-xl bg-primary px-4 py-2.5 text-center font-heading text-xs font-extrabold uppercase tracking-wider text-primary-foreground shadow-[0_8px_20px_rgba(200,255,0,0.45)]"
                >
                  Open In Maps &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
