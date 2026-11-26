import HeroSection from "./Components/Hero";
import AboutPreviewSection from "./Components/AboutPreviewSection";
import FacilitiesPreviewSection from "./Components/FacilitiesPreviewSection";
import ProgramsGridSection from "./Components/ProgramsGridSection";
import TrainersHighlightSection from "./Components/TrainersHighlightSection";
import MemberTransformationsSection from "./Components/MemberTransformationsSection";
import PricingPreviewSection from "./Components/PricingPreviewSection";
import TestimonialsSection from "./Components/TestimonialsSection";
import FreeTrialCtaSection from "./Components/FreeTrialCtaSection";
import CoachJournalSection from "./Components/CoachJournalSection";
import GymFaqSection from "./Components/GymFaqSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutPreviewSection />
      <CoachJournalSection />
      <FacilitiesPreviewSection />
      <ProgramsGridSection />
      <TrainersHighlightSection />
      <MemberTransformationsSection />
      <PricingPreviewSection />
      <TestimonialsSection />
      <GymFaqSection />
      <FreeTrialCtaSection />
    </>
  );
}
