"use client";

import { Check } from "lucide-react";
import PageGradient1 from "@/assets/svg/PageGradient1.svg";
import PageGradient2 from "@/assets/svg/PageGradient2.svg";

interface CheckPageProps {
  onNext: () => void;
  onPrev: () => void;
}

export function CheckPage({ onNext, onPrev }: CheckPageProps) {
  return (
    <div className="relative">
      {/* Gradient Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${PageGradient1.src}), url(${PageGradient2.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1,
        }}
      />

      <div className="mx-auto max-w-full">
        {/* Progress Steps */}
        <div className="mb-10 max-w-2xl mx-auto">
          <div className="relative flex justify-between items-center">
            <div
              className="absolute top-1/2 -translate-y-1/2 left-5 right-5 -mt-4"
              style={{ height: "2px", backgroundColor: "#4C2E21", zIndex: 0 }}
            />
            {["Details", "Video elements", "Check", "Visibility"].map((name, index) => (
              <div key={name} className="relative flex flex-col items-center z-10">
                <div
                  className={`h-5 w-5 rounded-full border-2 ${
                    index <= 2 ? "bg-[#F05600] border-[#F05600]" : "bg-black border-[#4C2E21]"
                  }`}
                  style={{
                    boxShadow: `0 0 0 2px ${
                      index <= 2 ? "#F05600" : "rgba(76, 46, 33, 0.4)"
                    }`,
                  }}
                />
                <span
                  className={`mt-3 text-sm ${
                    index === 2 ? "text-[#F05600]" : "text-[#ffffff]/70"
                  }`}
                >
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Checks Section */}
        <div className="mb-10">
          <h2 className="text-[#ffffff] text-2xl font-semibold">Checks</h2>
          <p className="text-[#ffffff]/70 mb-10">
            We will check your video for copyrighted related issues that may restrict its visibility
          </p>

          {/* Copyright Check Result */}
          <div className="space-y-6">
            <div className="flex items-center justify-between bg-[#F056000D] border border-[#F056004D] p-6 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-[#F056000D] border border-[#F056004D] flex items-center justify-center">
                  <span className="text-[#F05600] text-lg font-semibold">©</span>
                </div>
                <div>
                  <h3 className="text-md text-[#F05600] font-semibold">COPYRIGHT</h3>
                  <p className="text-sm text-[#ffffff]/70">No issues found</p>
                </div>
              </div>
              <Check className="h-6 w-6 text-green-500" />
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="mt-10 flex gap-4">
          <button
            onClick={onPrev}
            className="rounded border border-[#F05600] px-8 py-2 font-medium text-[#F05600] hover:bg-[#F05600]/10 transition-colors"
          >
            PREV
          </button>
          <button
            onClick={onNext}
            className="rounded bg-[#F05600] px-8 py-2 font-semibold text-black hover:bg-[#F05600]/90 transition-colors ml-auto"
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
}