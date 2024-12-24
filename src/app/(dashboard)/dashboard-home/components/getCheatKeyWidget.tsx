"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import key from "@/assets/img/keys.png";
import Image from "next/image";

export default function GetCheatKey() {
  return (
    <div className="w-full h-full px-7 py-8 bg-[#4C4C4C33] relative overflow-hidden rounded-[10px]">
      {/* <Image
        src={key}
        alt="key"
        priority
        className="absolute z-0 top-0 right-0"
      /> */}
      <div className="flex flex-col max-w-[350px] items-start gap-7 z-[1]">
        <p className="lg:text-2xl text-lg font-bold">
          Conquer the leaderboard and become the top earner
        </p>
        <Button
          className={`mt-6 bg-primary/30 rounded-[10px] w-[166px] text-primary font-[600] py-4 px-7 hover:text-primary/80 hover:bg-primary/20 transition-colors duration-500 ease-in-out h-14`}
        >
          Get Cheat Key
        </Button>
      </div>
    </div>
  );
}
