"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Icon } from "@iconify/react";
import Image from "next/image";
import ProfileAvatar from "@/assets/img/profile-avatar.png";
import { usePathname, useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Nav() {
  const pathname = usePathname();
  return (
    <div className="min-h-[146px] z-[1] bg-background w-full flex flex-row items-center justify-between border-b border-b-[#141414] px-10">
      <div className="flex flex-col items-start gap-1">
      <h1 className="xl:text-3xl text-sm font-bold text-foreground">
          {pathname === "/dashboard-home"
            ? "Leaderboard"
            : pathname === "/dashboard"
            ? "Welcome Back, Dhruv"
            : pathname.includes("/keys")
            ? "Get your keys"
            : pathname === "/affiliate"
            ? "Affiliate Center"
            : pathname === "/subscriptions"
            ? ""
            : pathname === "/upload-video"
            ? "Upload your video"
            : ""}
      </h1>
      <p className="xl:text-lg text-xs font-normal text-foreground">
          {pathname === "/dashboard-home"
            ? "See Live Earnings of your fellow creators"
            : pathname === "/dashboard"
            ? "See your Dashboard and content overview here"
            : pathname.includes("/keys")
            ? "Get your 24 hour temporary key for games"
            : pathname === "/affiliate"
            ? "Welcome abroad the affiliate center and earn"
            : pathname === "/subscriptions"
            ? ""
            : pathname === "/upload-video"
            ? "See your Dashboard and content overview here"
            : ""}
      </p>

      </div>
      <div className="flex relative">
        <Input
          className="border-searchBorder w-full pl-12 rounded-[20px] h-[59px] placeholder:text-[#958E86] text-foreground"
          type="text"
          placeholder="Search Anything"
        />
        <Icon
          icon="majesticons:search-line"
          className="text-foreground text-[26px] absolute top-[16px] left-[10px]"
        />
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="text-foreground group hover:text-[#21407d7e] text-[16px] leading-[18.75px] font-[400] flex flex-row items-center gap-[10px] cursor-pointer rounded-[20px] h-[59px] border-searchBorder border px-3">
            <Image className="" src={ProfileAvatar} alt={"profile"} />
            <p className="text-xs font-bold">Dhruv Deora</p>
            <Icon
              icon="iconamoon:arrow-down-2-light"
              className="text-foreground text-[26px] group-hover:text-[#21407d7e]"
            />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-20 py-10"></DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
