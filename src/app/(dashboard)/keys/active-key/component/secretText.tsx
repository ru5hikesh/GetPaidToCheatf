"use client";

import React from "react";
import { Icon } from "@iconify/react";

export default function SecretText() {
  return (
    <div className="flex flex-row items-center">
      <p className="text-sm font-semibold text-foreground whitespace-nowrap">
        ********************
      </p>
      <Icon
        icon="solar:eye-closed-broken"
        className="text-foreground cursor-pointer"
      />
    </div>
  );
}
