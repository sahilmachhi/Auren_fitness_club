import Link from "next/link";
import Image from "next/image";
import ActionButton from "./ui/ActionButton";

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Facilities", href: "/facilities" },
  { label: "Trainers", href: "/trainers" },
  { label: "Memberships", href: "/memberships" },
  { label: "Contact", href: "/contact" },
];

const programLinks = [
  { label: "Weight Loss", href: "/programs/weight-loss" },
  { label: "Muscle Building", href: "/programs/muscle-building" },
  { label: "Personal Training", href: "/programs/personal-training" },
  { label: "Strength Training", href: "/programs/strength-training" },
  { label: "Group Classes", href: "/programs/group-classes" },
];

const clubHours = [
  { days: "Monday – Saturday", hours: "05:30 AM – 10:30 PM" },
  { days: "Sunday", hours: "07:00 AM – 01:00 PM" },
];

export default function Footer() {
  return (
    <footer
      aria-label="Site Footer"
      className="relative w-full overflow-hidden bg-black pt-20 text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] sm:pt-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Conversion & Brand Banner (Zero Borders, Elevated Card) */}
        <div className="flex flex-col justify-between gap-8 rounded-3xl bg-surface-dark p-8 shadow-[0_28px_56px_-12px_rgba(0,0,0,0.95),inset_0_1px_1px_rgba(255,255,255,0.1)] sm:p-10 lg:flex-row lg:items-center">
          <div className="max-w-xl">
            <p className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-primary">
              Ready To Train?
            </p>
            <h2 className="mt-2 font-display text-3xl leading-[1.02] tracking-tight text-white uppercase sm:text-5xl">
              Step Onto The Floor With A{" "}
              <span className="text-primary">Free 1-Day Pass.</span>
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <ActionButton href="/contact#free-trial" variant="primary">
              Book Free Trial
            </ActionButton>
            <ActionButton href="/memberships" variant="glass">
              Membership Plans
            </ActionButton>
          </div>
        </div>

        {/* Main 12-Column Footer Grid */}
        <div className="mt-16 grid grid-cols-1 gap-12 pb-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Col 1–4: Brand Story, Logo & Social Links */}
          <div className="lg:col-span-4 lg:pr-6">
            <Link
              href="/"
              className="inline-flex items-center rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <Image
                src="/logo/Auren_logo_light.png"
                alt="Auren Fitness Club"
                width={170}
                height={50}
                unoptimized
                className="h-14 w-auto object-contain"
              />
            </Link>

            <p className="mt-5 font-sans text-sm leading-relaxed text-white/65">
              Strength training, calibrated free weights, functional turf
              conditioning, and accredited 1-on-1 coaching engineered for
              lifters who want measurable results.
            </p>

            {/* Social Icon Buttons (Zero Borders, Glass + Inset Highlight) */}
            <div className="mt-7 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Auren Fitness Club on Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-dark text-white/80 shadow-[0_8px_20px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.1)] transition-all duration-200 hover:bg-primary hover:text-primary-foreground"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Auren Fitness Club on YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-dark text-white/80 shadow-[0_8px_20px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.1)] transition-all duration-200 hover:bg-primary hover:text-primary-foreground"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Auren Fitness Club on WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-dark text-white/80 shadow-[0_8px_20px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.1)] transition-all duration-200 hover:bg-primary hover:text-primary-foreground"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zM12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.5l4.645-1.464A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 5–6: Quick Navigation */}
          <div className="lg:col-span-2">
            <h3 className="font-heading text-xs font-bold uppercase tracking-[0.22em] text-primary">
              Club Links
            </h3>
            <ul className="mt-5 space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-white/70 transition-colors duration-200 hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 7–9: Training Programs */}
          <div className="lg:col-span-3">
            <h3 className="font-heading text-xs font-bold uppercase tracking-[0.22em] text-primary">
              Training Programs
            </h3>
            <ul className="mt-5 space-y-3">
              {programLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-white/70 transition-colors duration-200 hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 10–12: Location, Contact & Opening Hours */}
          <div className="lg:col-span-3">
            <h3 className="font-heading text-xs font-bold uppercase tracking-[0.22em] text-primary">
              Visit &amp; Hours
            </h3>

            <div className="mt-5 space-y-4 font-sans text-sm text-white/75">
              <p className="leading-relaxed">
                2nd Floor, Auren Performance Hub, Main Ring Road, Gujarat, India
              </p>

              <div className="space-y-1">
                <a
                  href="tel:+919876543210"
                  className="block font-medium text-white transition-colors hover:text-primary"
                >
                  +91 98765 43210
                </a>
                <a
                  href="mailto:hello@aurenfitness.in"
                  className="block text-white/70 transition-colors hover:text-primary"
                >
                  hello@aurenfitness.in
                </a>
              </div>

              {/* Hours Box (Zero Border, Subtle Dark Surface + Inset Highlight) */}
              <div className="rounded-xl bg-surface-dark/90 p-4 shadow-[0_10px_24px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.08)]">
                <ul className="space-y-2 text-xs">
                  {clubHours.map((slot) => (
                    <li
                      key={slot.days}
                      className="flex items-center justify-between gap-2"
                    >
                      <span className="text-white/60">{slot.days}</span>
                      <span className="font-heading font-bold text-white">
                        {slot.hours}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal Strip */}
        <div className="flex flex-col items-center justify-between gap-4 py-6 text-xs text-white/50 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] sm:flex-row">
          <p>&copy; 2026 Auren Fitness Club. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="/memberships#terms"
              className="transition-colors hover:text-primary"
            >
              Membership Terms
            </Link>
            <Link
              href="/contact#free-trial"
              className="transition-colors hover:text-primary"
            >
              Free Trial Policy
            </Link>
            <Link
              href="/admin"
              className="transition-colors hover:text-white/80"
            >
              Staff Portal
            </Link>
          </div>
        </div>
      </div>

      {/* Oversized Edge-to-Edge Architectural Brand Watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none overflow-hidden pt-2 text-center"
      >
        <p className="font-display text-[17vw] leading-[0.78] tracking-tight text-white/[0.04] uppercase">
          AUREN FITNESS
        </p>
      </div>
    </footer>
  );
}
