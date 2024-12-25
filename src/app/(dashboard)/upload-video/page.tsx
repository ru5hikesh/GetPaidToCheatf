"use client";

import { CloudIcon, ImageIcon } from "lucide-react";
import { useState } from "react";
import Gradient from "@/assets/svg/Gradient.svg";

export default function UploadVideo() {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleImageUpload(e.dataTransfer.files[0]);
    }
  };

  const handleImageUpload = (file: File) => {
    if (file.type.startsWith("image/")) {
      setUploadedImage(file);
    } else {
      alert("Please upload a valid image file.");
    }
  };

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

      <div className="mx-auto max-w-4xl p-8">
        {/* Progress Steps */}
        <div className="mb-10 max-w-2xl mx-auto">
          <div className="relative flex justify-between items-center">
            {/* Progress Line */}
            <div
              className="absolute top-1/2 -translate-y-1/2 left-5 right-5 -mt-4"
              style={{ height: "2px", backgroundColor: "#4C2E21", zIndex: 0 }}
            />
            {["Details", "Video elements", "Check", "Visibility"].map((name, index) => (
              <div key={name} className="relative flex flex-col items-center z-10">
                <div
                  className={`h-5 w-5 rounded-full border-2 ${
                    index === 0 ? "bg-[#F05600] border-[#F05600]" : "bg-black border-[#4C2E21]"
                  }`}
                  style={{
                    boxShadow: `0 0 0 2px ${
                      index === 0 ? "#F05600" : "rgba(76, 46, 33, 0.4)"
                    }`,
                  }}
                />
                <span
                  className={`mt-3 text-sm ${
                    index === 0 ? "text-[#F05600]" : "text-[#ffffff]/70"
                  }`}
                >
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Upload Area */}
        <div
          className={`relative mb-10 rounded border-dashed border-2 border-[#F0560066] bg-[#F056000D] p-16 transition-colors ${
            dragActive ? "border-[#F05600]" : ""
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          style={{ height: "300px", position: "relative" }}
        >
          {uploadedImage ? (
            <div className="relative h-full w-full">
              <img
                src={URL.createObjectURL(uploadedImage)}
                alt="Uploaded Preview"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center gap-6 text-center">
              <CloudIcon className="h-12 w-12 text-[#F05600]" />
              <p className="text-gray-400 text-lg">
                Drop File to Upload
                <br />
                or {" "}
                <label className="cursor-pointer text-[#F05600] hover:text-[#F05600]/80">
                  Browse
                  <input
                    type="file"
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        handleImageUpload(e.target.files[0]);
                      }
                    }}
                  />
                </label>
              </p>
            </div>
          )}
        </div>

        {/* Details Section */}
        <h2 className="text-[#ffffff] text-2xl mb-6 font-semibold">Details</h2>

        <div className="grid gap-10 md:grid-cols-2 pb-8">
          <div className="space-y-8">
            <div>
              <label htmlFor="title" className="mb-3 block text-base text-white font-semibold">
                Title*
              </label>
              <input
                type="text"
                id="title"
                placeholder="eg: Valorant hack live"
                className="w-full rounded border border-[#F056004D] bg-[#F056000D] px-4 py-3 text-gray-200 placeholder-gray-400 focus:border-[#F05600] focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="description"
                className="mb-3 block text-base text-white font-semibold"
              >
                Description
              </label>
              <textarea
                id="description"
                rows={4}
                placeholder="This is the description of the video"
                className="w-full rounded border border-[#F056004D] bg-[#F056000D] px-4 py-3 text-gray-300 placeholder-gray-400 focus:border-[#F05600] focus:outline-none"
              />
            </div>
          </div>

          {/* Thumbnail Upload */}
          <div>
            <span className="mb-3 block text-base text-white font-semibold">
              THUMBNAIL
            </span>
            <div className="flex h-[240px] items-center justify-center rounded border-dashed border-2 border-[#F0560066] bg-[#F056000D]">
              <label className="cursor-pointer text-center">
                <ImageIcon className="mx-auto mb-3 h-8 w-8 text-[#F05600]" />
                <span className="text-base text-gray-300">Upload File</span>
                <input type="file" accept="image/*" className="hidden" />
              </label>
            </div>
          </div>
        </div>

        {/* Additional Settings */}
        <div className="space-y-8">
          {/* Playlist */}
          <div>
            <label htmlFor="playlist" className="mb-3 block text-base text-white font-semibold">
              Playlist
            </label>
            <select
              id="playlist"
              className="w-full rounded border border-[#F056004D] bg-[#F056000D] px-4 py-3 text-gray-200 focus:border-[#F05600] focus:outline-none appearance-none"
            >
              <option value="">Select playlist</option>
            </select>
          </div>

          {/* Audience */}
          <div>
            <div className="mb-0 flex items-center gap-2">
              <span className="text-base text-white font-semibold">Audience</span>
            </div>
            <p className="text-sm text-gray-500 mb-3">
              This video is Made for kids
              <span className="rounded bg-[#ff6b15] px-2 py-0.5 text-sm font-bold text-[#000000] ml-2">
                Set by you
              </span>
            </p>

            <p className="text-sm text-gray-500 mb-4">
              Regardless of your location, you're legally required to comply with the
              Children's Online Privacy Protection Act (COPPA) and/or other laws. You're
              required to tell us whether your videos are made for kids.
            </p>
            <div className="space-y-1">
              <label className="flex items-center gap-3 cursor-pointer  ">
                <input
                  type="radio"
                  name="audience"
                  // change this later
                  className="h-4 w-4 accent-[#a0a0a0] appearance-none border rounded-full"
                />
                <span className="text-gray-400">Yes, it's made for kids</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="audience"
                  className="h-4 w-4 accent-[#F05600] "
                />
                <span className="text-gray-400">No, it's not made for kids</span>
              </label>
            </div>
          </div>

          {/* Paid Promotions */}
          <div>
            <h3 className="text-xl text-white font-semibold mb-2">Paid Promotions</h3>
            <p className="text-sm text-gray-400 mb-4">
              Regardless of your location, you're legally required to comply with the Children's Online Privacy Protection Act (COPPA) and/or other laws.
            </p>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" className="h-4 w-4 accent-[#F05600]" />
              <span className="text-gray-400">Yes, it's made for kids</span>
            </label>
          </div>

          {/* Featured places */}
          <div>
            <h3 className="text-xl text-white font-semibold mb-2">Featured places</h3>
            <p className="text-sm text-gray-400 mb-4">
              Regardless of your location, you're legally required to comply with the Children's Online Privacy Protection Act (COPPA) and/or other laws.
            </p>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" className="h-4 w-4 accent-[#F05600]" />
              <span className="text-gray-400">Allow automatic places</span>
            </label>
          </div>

          {/* Language and Captions */}
          <div>
            <h3 className="flex flex-row text-xl text-white font-semibold mb-2">Language and Captions certification</h3>
            <p className="text-sm text-gray-400 mb-2">
              Select your video language, and if needed a caption certification
            </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="rounded p-4">
                      <label htmlFor="language" className="mb-3 block text-base text-gray-400">
                        Video language
                      </label>
                      <select
                        id="language"
                        className="w-full rounded border border-[#F056004D] bg-transparent px-4 py-3 text-gray-200 focus:border-[#F05600] focus:outline-none appearance-none"
                      >
                        <option value="">Select</option>
                      </select>
                    </div>
                    <div className=" rounded p-4">
                      <label htmlFor="caption" className="mb-3 block text-base text-gray-400">
                        Caption certification
                      </label>
                      <select
                        id="caption"
                        className="w-full rounded border border-[#F056004D] bg-transparent px-4 py-3 text-gray-200 focus:border-[#F05600] focus:outline-none appearance-none"
                      >
                        <option value="">None</option>
                      </select>
                    </div>
                  </div>
          </div>

          {/* Recording Date and Location */}
          <div>
            <h3 className="text-xl text-white font-semibold mb-2">Recording Date and location</h3>
            <p className="text-sm text-gray-400 mb-2">
              Add when and where was your video recorded. Viewers can reach out
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded p-4">
                <label htmlFor="date" className="mb-3 block text-base text-gray-400">
                  Recording Date
                </label>
                <select
                  id="date"
                  className="w-full rounded border border-[#F056004D] bg-transparent px-4 py-3 text-gray-200 focus:border-[#F05600] focus:outline-none appearance-none"
                >
                  <option value="">None</option>
                </select>
              </div>
              <div className="rounded p-4">
                <label htmlFor="location" className="mb-3 block text-base text-gray-400">
                  Location
                </label>
                <select
                  id="location"
                  className="w-full rounded border border-[#F056004D] bg-transparent px-4 py-3 text-gray-200 focus:border-[#F05600] focus:outline-none appearance-none"
                >
                  <option value="">None</option>
                </select>
              </div>
            </div>
          </div>

          {/* Category */}
          <div>
            <h3 className="text-xl text-white font-semibold mb-2">Category</h3>
            <p className="text-sm text-gray-400 mb-0">Add your video game category</p>
            <div className=" rounded p-4">
              <select
                id="category"
                className="w-full rounded border border-[#F056004D] bg-transparent px-4 py-3 text-gray-200 focus:border-[#F05600] focus:outline-none appearance-none"
              >
                <option value="">None</option>
              </select>
            </div>
          </div>

          {/* Shorts Remixing */}
          <div>
            <h3 className="text-xl text-white font-semibold mb-2">Shorts Remixing</h3>
            <p className="text-sm text-gray-400 mb-4">Let other create shorts using your content</p>
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="remixing"
                  className="h-4 w-4 accent-[#F05600]"
                />
                <span className="text-gray-400">Allow audio and video remixing</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="remixing"
                  className="h-4 w-4 accent-[#F05600]"
                />
                <span className="text-gray-400">Allow only audio remixing</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="remixing"
                  className="h-4 w-4 accent-[#F05600]"
                />
                <span className="text-gray-400">Don't allow remixing</span>
              </label>
            </div>
          </div>

          {/* Show likes */}
          <div>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" className="h-4 w-4 accent-[#F05600]" />
              <span className="text-gray-400">Show how many users liked the video</span>
            </label>
          </div>

          {/* Next Button */}
          <div className="mt-10">
            <button className="rounded bg-[#F05600] px-8 py-2 font-medium text-white hover:bg-[#F05600]/90 transition-colors">
              NEXT
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}

