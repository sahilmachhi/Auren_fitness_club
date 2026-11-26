import type { Metadata } from "next";
import FacilitiesHeroSection from "./Components/FacilitiesHeroSection";
import FacilityZonesDetailSection from "./Components/FacilityZonesDetailSection";
import EquipmentGallerySection from "./Components/EquipmentGallerySection";
import VirtualTourSection from "./Components/VirtualTourSection";
import FreeTrialCtaSection from "../Components/FreeTrialCtaSection";

export const metadata: Metadata = {
  title: "Facilities & Equipment",
  description:
    "Explore Auren Fitness Club's Strength Zone, Cardio Deck, Functional Turf, Locker Rooms, Private Showers, Equipment Gallery, and Virtual Tour.",
};

export default function FacilitiesPage() {
  return (
    <>
      <FacilitiesHeroSection />
      <FacilityZonesDetailSection />
      <EquipmentGallerySection />
      <VirtualTourSection />
      <FreeTrialCtaSection />
    </>
  );
}
