"use client";

import { ChevronDown } from "lucide-react";
import VisibilityPageGradient from "@/assets/svg/VisibilityPageGradient.svg";
import { SchedulePicker } from "./SchedulePicker";

interface VisibilityPageProps {
  onPrev: () => void;
}

export function VisibilityPage({ onPrev }: VisibilityPageProps) {
  return (
    <div className="relative">
      {/* Gradient Background */}
      <div
        className="absolute w-full h-[200%]" // Double the height
        style={{
          backgroundImage: `url(${VisibilityPageGradient.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          top: "500px", // Moves it down by 500px
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
                    index <= 3 ? "bg-[#F05600] border-[#F05600]" : "bg-black border-[#4C2E21]"
                  }`}
                  style={{
                    boxShadow: `0 0 0 2px ${
                      index <= 3 ? "#F05600" : "rgba(76, 46, 33, 0.4)"
                    }`,
                  }}
                />
                <span
                  className={`mt-3 text-sm ${
                    index === 3 ? "text-[#F05600]" : "text-[#ffffff]/70"
                  }`}
                >
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Visibility Section */}
        <div className="mb-10">
          <h2 className="text-[#ffffff] text-2xl font-semibold">Visibility</h2>
          <p className="text-[#ffffff]/70 mb-6">
            Choose when to publish and who can see your video
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Save or Publish Section */}
            <div className="bg-[#F056001A] rounded-xl p-6 border-[#F05600] border">
              <h3 className="text-white text-lg font-semibold mb-2">Save or Publish</h3>
              <p className="text-[#ffffff]/70 text-sm mb-4">
                Make your video public, unlisted or private
              </p>

              <div className="space-y-4">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input type="radio" name="visibility" className="mt-1" />
                  <div>
                    <div className="text-white font-medium">Private</div>
                    <div className="text-[#ffffff]/70 text-sm">
                      Only you and people you choose can watch your video
                    </div>
                    <button className="mt-2 px-4 py-1.5 text-sm bg-[#F05600] rounded text-black font-medium hover:bg-[#F05600]/90 transition-colors">
                      Share Privately
                    </button>
                  </div>
                </label>

                <label className="flex items-start gap-3 cursor-pointer group">
                  <input type="radio" name="visibility" className="mt-1" />
                  <div>
                    <div className="text-white font-medium">Unlisted</div>
                    <div className="text-[#ffffff]/70 text-sm">
                      Anyone with the video link can watch your video
                    </div>
                  </div>
                </label>

                <label className="flex items-start gap-3 cursor-pointer group">
                  <input type="radio" name="visibility" className="mt-1" />
                  <div>
                    <div className="text-white font-medium">Public</div>
                    <div className="text-[#ffffff]/70 text-sm">
                      Everyone can watch your video
                    </div>
                  </div>
                </label>
              </div>
            </div>

            {/* Video Preview */}
            <div className="bg-[#1C1917] rounded-xl overflow-hidden">
              <img
                src="https://m.media-amazon.com/images/I/91mp9eEux-L._SX522_.jpg"
                alt="Video preview"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Schedule Section */}
          <div className="mt-6 bg-[#F056001A] rounded-xl p-6 border-[#F05600] border">
            <h3 className="text-white text-lg font-semibold mb-2">Schedule</h3>
            <p className="text-[#ffffff]/70 text-sm mb-4">
              Select a date to make your video public
            </p>

            {/* Integrating SchedulePicker */}
            <SchedulePicker />

            <p className="mt-4 text-[#ffffff]/70 text-sm">
              Video will be private before publishing
            </p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="mt-10 flex gap-4">
          <button
            onClick={onPrev}
            className="rounded border border-[#F05600] px-8 bg-[#F0560066] py-2 font-medium text-[#F05600] hover:bg-[#F05600]/10 transition-colors"
          >
            PREV
          </button>
          <button
            className="rounded bg-[#F05600] px-8 py-2 font-semibold text-black hover:bg-[#F05600]/90 transition-colors ml-auto"
          >
            UPLOAD
          </button>
        </div>
      </div>
    </div>
  );
}
