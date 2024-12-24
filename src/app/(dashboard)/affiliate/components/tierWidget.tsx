"use client";

import React from "react";
import RadioIcon from "@/assets/svg/radioIcon.svg";
import Pig from "@/assets/svg/pig.svg";
import { cn } from "@/lib/utils";
import { tiersDataType } from "../page";

export default function TierWidget({
  avatarClassname,
  activeStatus,
  id,
  commission,
  requirements,
}: tiersDataType) {
  return (
    <div key={id} className="relative flex flex-1">
      <div
        className={`rounded-[14px] w-full min-w-[376px] min-h-[180px] p-6 bg-[#4C4C4C33] ${
          activeStatus
            ? "border border-primary after:absolute after:-top-[13px] after:left-[126px] after:w-[103px] after:h-[27px] after:rounded-[10px] after:bg-primary after:content-['ACTIVE'] after:text-sm after:text-background after:font-bold after:flex after:flex-row after:items-center after:justify-center"
            : ""
        }`}
      >
        <div className="w-full flex flex-col items-start gap-3">
          <div className="flex flex-row items-center gap-16 pb-5 w-full border-b border-b-primary/60">
            <div className="flex flex-row items-center gap-3">
              <div
                className={cn(
                  "w-[35px] h-[35px] rounded-[14px] bg-[#373100]",
                  avatarClassname
                )}
              ></div>
              <h2 className="text-foreground text-base font-bold">
                TIER {id ? id + 1 : "1"}
              </h2>
            </div>
            <div className="flex flex-row items-center gap-2">
              <Pig />
              <p className="font-bold text-base text-foreground">
                {commission}% Commision
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-2">
            <p className="text-xs font-bold text-foreground/50">Requirements</p>
            {requirements?.map((value, idx) => (
              <div key={idx} className="flex flex-row items-center gap-2">
                <RadioIcon />
                <p className="text-xs font-medium text-foreground/50">
                  ${value} Affilate Earning
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
