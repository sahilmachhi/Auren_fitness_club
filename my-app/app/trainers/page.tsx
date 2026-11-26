import type { Metadata } from "next";
import TrainersHeroSection from "./Components/TrainersHeroSection";
import TrainersPageClient from "./Components/TrainersPageClient";

export const metadata: Metadata = {
  title: "Trainers & Coaches",
  description:
    "Meet Auren Fitness Club's accredited strength, fat-loss, and athletic conditioning coaches, view certifications, and book a 1-on-1 consultation.",
};

export default function TrainersPage() {
  return (
    <>
      <TrainersHeroSection />
      <TrainersPageClient />
    </>
  );
}
