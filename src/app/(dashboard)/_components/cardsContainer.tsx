"use client";

import { cn } from "@/lib/utils";
import React from "react";

export default function CardsContainer({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <div
      className={cn(
        "flex bg-dashboardCard/20 rounded-[14px] p-[34px] w-full",
        className
      )}
    >
      {children}
    </div>
  );
}
