"use client";

import React from "react";
import Image from "next/image";
import affiliate from "@/assets/img/affiliate.png";
import { Button } from "@/components/ui/button";

export default function AffiliateWidget() {
  return (
    <div className="rounded-[10px] py-[27px] px-[19px] bg-[#F0560066] h-full w-full flex flex-col items-start gap-[45px] relative">
      <Image
        src={affiliate}
        alt="affiliate"
        priority
        className="absolute z-0 bottom-0 right-0"
      />
      <div className="flex flex-col max-w-[350px] items-start gap-7 z-[1]">
        <p className="lg:text-2xl text-lg font-bold">
          Affiliate Program to earn rewards
        </p>
        <Button
          className={`mt-6 bg-[#BFBFBF33] rounded-[10px] w-[166px] text-foreground font-[600] py-4 px-7 hover:text-forground/5 hover:bg-[#bfbfbf20] transition-colors duration-500 ease-in-out h-14`}
        >
          Complete
        </Button>
      </div>
    </div>
  );
}
