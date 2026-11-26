import FreeTrialCtaSection from "../Components/FreeTrialCtaSection";
import ProgramsHeroSection from "./Components/ProgramsHeroSection";
import ProgramShowcaseList from "./Components/ProgramShowcaseList";
import ProgramSpecificDetailsSection from "./Components/ProgramSpecificDetailsSection";

export default function page() {
  return (
    <>
      <main className="min-h-screen bg-surface-dark">
        <ProgramsHeroSection />
        <ProgramShowcaseList />
        <ProgramSpecificDetailsSection />
        <FreeTrialCtaSection />
      </main>
    </>
  );
}
