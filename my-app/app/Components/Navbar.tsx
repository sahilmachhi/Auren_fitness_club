"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ActionButton from "./ui/ActionButton";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Facilities", href: "/facilities" },
  { label: "Programs", href: "/programs" },
  { label: "Membership", href: "/memberships" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 w-full transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? "bg-surface-dark/85 backdrop-blur-xl shadow-[0_12px_32px_-8px_rgba(0,0,0,0.75),inset_0_-1px_0_0_rgba(255,255,255,0.08)]"
          : "bg-black/20 backdrop-blur-md shadow-[0_8px_24px_-6px_rgba(0,0,0,0.35),inset_0_-1px_0_0_rgba(255,255,255,0.06)]"
      }`}
    >
      <nav
        aria-label="Primary Navigation"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        {/* Brand Logo */}
        <Link
          href="/"
          onClick={() => setMobileMenuOpen(false)}
          className="flex items-center rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <Image
            src="/logo/Auren_logo_light.png"
            alt="Auren Fitness Club"
            width={150}
            height={44}
            priority
            unoptimized
            className="h-14 w-auto object-contain"
          />
        </Link>

        {/* Centered Desktop Nav Links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`font-heading text-xs font-semibold tracking-widest uppercase transition-colors duration-200 ${
                    isActive
                      ? "text-primary drop-shadow-[0_0_10px_rgba(200,255,0,0.35)]"
                      : "text-white/80 hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right Signature Glass CTA */}
        <div className="hidden lg:flex items-center">
          <ActionButton href="/contact#free-trial" variant="glass" size="sm">
            Book Free Trial
          </ActionButton>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav-drawer"
          aria-label="Toggle navigation menu"
          className="inline-flex lg:hidden items-center justify-center rounded-lg bg-white/5 p-2.5 text-white shadow-[0_4px_12px_rgba(0,0,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.14)] hover:bg-white/10 hover:text-primary transition-colors"
        >
          {mobileMenuOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden bg-surface-dark/95 backdrop-blur-2xl px-4 pt-4 pb-8 shadow-[0_24px_48px_rgba(0,0,0,0.85),inset_0_1px_0_0_rgba(255,255,255,0.08)]"
        >
          <ul className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block rounded-lg px-4 py-3 font-heading text-sm font-semibold uppercase tracking-wider transition-colors ${
                      isActive
                        ? "bg-surface-card/90 text-primary shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]"
                        : "text-white/85 hover:bg-surface-card/60 hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-6 pt-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
            <ActionButton
              href="/contact#free-trial"
              variant="primary"
              className="w-full"
            >
              Book a Free Trial
            </ActionButton>
          </div>
        </div>
      )}
    </header>
  );
}
