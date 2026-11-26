"use client";

import { useState } from "react";
import TrainerProfilesSection from "./TrainerProfilesSection";
import TrainerConsultationSection from "./TrainerConsultationSection";

export default function TrainersPageClient() {
  const [selectedCoachId, setSelectedCoachId] = useState<string>("aarav-mehta");

  return (
    <>
      <TrainerProfilesSection onSelectCoach={setSelectedCoachId} />
      <TrainerConsultationSection preselectedCoachId={selectedCoachId} />
    </>
  );
}
