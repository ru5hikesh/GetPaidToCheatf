"use client";

import { useState } from "react";
import { DetailsPage } from "./DetailsPage"; // Adjust the path as per your folder structure
import { VideoElementsPage } from "./VideoElementsPage";

export default function Page() {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep((prev) => Math.min(prev + 1, 4)); // Increment step, max is 4
  };

  const handlePrev = () => {
    setStep((prev) => Math.max(prev - 1, 1)); // Decrement step, min is 1
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <DetailsPage onNext={handleNext} />;
      case 2:
        return <VideoElementsPage onNext={handleNext} onPrev={handlePrev} />;
      // Add other cases for future steps
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen relative">
      <div className="mx-auto max-w-4xl p-8">
        {renderStep()}
      </div>
    </div>
  );
}
