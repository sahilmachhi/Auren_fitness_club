import type { Metadata } from "next";
import AboutHeroAndStorySection from "./Components/AboutHeroAndStorySection";
import MissionAndPhilosophySection from "./Components/MissionAndPhilosophySection";
import AchievementsSection from "./Components/AchievementsSection";
import CommunitySection from "./Components/CommunitySection";
import SuccessStoriesSection from "./Components/SuccessStoriesSection";
import FreeTrialCtaSection from "../Components/FreeTrialCtaSection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover the story behind Auren Fitness Club, our training philosophy, facility standards, community culture, and real member success stories.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHeroAndStorySection />
      <MissionAndPhilosophySection />
      <AchievementsSection />
      <CommunitySection />
      <SuccessStoriesSection />
      <FreeTrialCtaSection />
    </>
  );
}
