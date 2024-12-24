"use client";

import React from "react";
import Image from "next/image";
import Video from "@/assets/img/video.png";
import { Button } from "@/components/ui/button";

export default function PlatformTutorialsWidget() {
  return (
    <div className="rounded-[10px] py-[27px] px-[19px] bg-[#61840966] h-full w-full flex flex-col items-start gap-[45px] relative">
      <Image
        src={Video}
        alt="Video"
        priority
        className="absolute z-0 bottom-0 right-0"
      />
      <div className="flex flex-col max-w-[250px] items-start gap-7 z-[1]">
        <p className="lg:text-2xl text-lg font-bold">
          Full Platform Tutorial avaliable
        </p>
        <Button
          className={`mt-6 bg-[#B0F00033] rounded-[10px] w-[166px] text-[#C0E700] font-[600] py-4 px-7 hover:text-[#c1e700d1] hover:bg-[#b0f0001e] transition-colors duration-500 ease-in-out h-14`}
        >
          Complete
        </Button>
      </div>
    </div>
  );
}
