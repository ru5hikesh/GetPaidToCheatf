"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { Input } from "@/components/ui/input";

export default function SearchInputBox() {
  return (
    <div className="w-full md:w-[50%] bg-white relative rounded-[10px] py-[0px] sm:py-[20px] px-[10px] sm:px-[30px] h-full flex flex-row">
      <input
        type="text"
        placeholder="Address, neighbourhood,city....."
        className="h-full w-full pr-[26px] border-background outline-none ring-background"
      />
      <Icon
        icon="iconamoon:search-light"
        className="text-[20px] sm:text-[26px] text-foreground absolute top-[14px] sm:top-[20px] right-[10px] sm:right-[30px] cursor-pointer"
      />
    </div>
  );
}
