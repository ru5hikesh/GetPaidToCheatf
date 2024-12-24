"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

type SVGIconProps = {
  color?: string;
};

export default function Iconcontainer({
  className,
  SVGIcon,
  iconColor,
}: {
  className?: string;
  SVGIcon: React.FC<SVGIconProps> | string;
  iconColor?: string;
}) {
  return (
    <div
      className={cn(
        "bg-primary/20 h-[60px] min-w-[60px] min-h-[60px] w-[60px] rounded-[14px] flex flex-col items-center justify-center",
        className
      )}
    >
      <SVGIcon color={iconColor} />
    </div>
  );
}
