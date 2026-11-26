import type { Metadata } from "next";
import ContactHeroSection from "./Components/ContactHeroSection";
import InteractiveBookingWizard from "./Components/InteractiveBookingWizard";
import LocationAndDetailsSection from "./Components/LocationAndDetailsSection";

export const metadata: Metadata = {
  title: "Contact & Free Trial Booking",
  description:
    "Book a complimentary 1-day trial pass, send a membership enquiry, chat on WhatsApp, or check Auren Fitness Club's location and opening hours.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHeroSection />
      <InteractiveBookingWizard />
      <LocationAndDetailsSection />
    </>
  );
}
