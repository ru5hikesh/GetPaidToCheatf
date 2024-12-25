"use client";

import { SubtitlesIcon, VideoIcon } from "lucide-react";
import Gradient from "@/assets/svg/Gradient.svg";

interface VideoElementsPageProps {
  onNext: () => void;
  onPrev: () => void;
}

export function VideoElementsPage({ onNext, onPrev }: VideoElementsPageProps) {
  return (
    <div className="min-h-screen relative">
      {/* Gradient Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${Gradient.src})`,
          backgroundSize: "150%",
          backgroundPosition: "center",
          filter: "blur(100px)",
          zIndex: -1,
        }}
      ></div>

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
                    index <= 1 ? "bg-[#F05600] border-[#F05600]" : "bg-black border-[#4C2E21]"
                  }`}
                  style={{
                    boxShadow: `0 0 0 2px ${
                      index <= 1 ? "#F05600" : "rgba(76, 46, 33, 0.4)"
                    }`,
                  }}
                />
                <span
                  className={`mt-3 text-sm ${
                    index === 1 ? "text-[#F05600]" : "text-[#ffffff]/70"
                  }`}
                >
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Video Elements Section */}
        <div className="mb-10">
          <h2 className="text-[#ffffff] text-2xl font-semibold">Video Elements</h2>
          <p className="text-[#ffffff]/70 mb-10">
            Use cards and an end screen to show viewers related videos, websites, and calls to action.
          </p>

          <div className="space-y-6">
            {/* Add End Screen */}
            <div className="flex items-center justify-between bg-[#F056000D] border border-[#F056004D] p-6 rounded-xl">
              <div className="flex items-center gap-4">
                <VideoIcon className="h-10 w-10 text-[#F05600]" />
                <div>
                  <h3 className="text-md text-white font-semibold">Add an end screen</h3>
                  <p className="text-sm text-[#ffffff]/70">
                    Promote related content at the end of your video.
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="rounded-md bg-[#F05600] px-4 py-1 text-sm font-semibold text-black hover:bg-[#F05600]/90 transition-colors">
                  Import from video
                </button>
                <button className="rounded-md bg-[#F05600] px-4 py-1 text-sm font-semibold text-black hover:bg-[#F05600]/90 transition-colors">
                  Add
                </button>
              </div>
            </div>

            {/* Add Cards */}
            <div className="flex items-center justify-between p-6 rounded-xl bg-[#F056000D] border border-[#F056004D]">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full border-2 border-[#F05600] flex items-center justify-center">
                  <span className="text-[#F05600] text-2xl font-bold">i</span>
                </div>
                <div>
                  <h3 className="text-md text-white font-semibold">Add cards</h3>
                  <p className="text-sm text-[#ffffff]/70">
                    Promote related content during your video.
                  </p>
                </div>
              </div>
              <button className="rounded-md bg-[#F05600] px-4 py-1 text-sm font-semibold text-black hover:bg-[#F05600]/90 transition-colors">
                Add
              </button>
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
            className="rounded bg-[#F05600] px-8 py-2 font-medium text-white hover:bg-[#F05600]/90 transition-colors"
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
}
