"use client";

import { useState, useEffect } from "react";
import { DetailsPage } from "./DetailsPage";
import { VideoElementsPage } from "./VideoElementsPage";
import { CheckPage } from "./CheckPage";
import { VisibilityPage } from "./VisibilityPage";

export default function Page() {
  const [step, setStep] = useState(1);

  useEffect(() => {
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }, [step]);

  const handleNext = () => {
    setStep((prev) => Math.min(prev + 1, 4));
  };

  const handlePrev = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <DetailsPage onNext={handleNext} />;
      case 2:
        return <VideoElementsPage onNext={handleNext} onPrev={handlePrev} />;
      case 3:
        return <CheckPage onNext={handleNext} onPrev={handlePrev} />;
      case 4:
        return <VisibilityPage onPrev={handlePrev} />;
      default:
        return null;
    }
  };

  return (
    <div className="relative">
      <div className="mx-auto max-w-4xl p-8">{renderStep()}</div>
    </div>
  );
}