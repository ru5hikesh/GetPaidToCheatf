"use client";

import React, { useState } from "react";
import Image from "next/image";
import SwitchOrganization from "@/assets/img/briefcase.png";
import Home from "@/assets/img/home.png";
import Logout from "@/assets/img/sign-out.png";
import { sidebarData } from "./sideBarData";
import { usePathname, useRouter } from "next/navigation";

export default function SideBar() {
  const pathname = usePathname();
  const router = useRouter();
  const handleRouting = (link: any) => {
    router.push(link);
  };
  const handleLogout = () => {
    if (
      typeof window !== "undefined" &&
      typeof window.localStorage !== "undefined"
    ) {
      window.localStorage.clear();
      router.push("/signin");
    }
  };
  return (
    <div className="w-full flex flex-col items-start gap-[30px] mb-[71px]">
      {sidebarData.map(({ section, list }, id) => {
        return (
          <div
            key={id}
            className={`w-full flex flex-col items-start gap-[35px] pb-11 ${
              section === "MAIN MENU" ? "border-b border-b-[#ffffff1d]" : ""
            }`}
          >
            <p className="text-sideBarText text-base pl-[30px] font-[500]">
              {section}
            </p>
            <div className="flex flex-col items-start gap-[10px] w-full">
              {list?.map(({ name, path, Icon }, id) => {
                return (
                  <div
                    onClick={() => handleRouting(path)}
                    key={`name${id}`}
                    className={`pl-[30px] rounded-[10px] cursor-pointer h-[40px] w-full flex flex-row items-center gap-[20px] hover:bg-primary/10 group ${
                      pathname === path ? "bg-primary/20" : "text-sideBarText"
                    }`}
                  >
                    <Icon
                      className={`group-hover:text-primary ${
                        pathname === path ? "text-primary" : "text-sideBarText"
                      }`}
                    />
                    <p
                      className={`text-xl font-medium group-hover:text-primary ${
                        pathname === path ? "text-primary" : "text-sideBarText"
                      }`}
                    >
                      {name}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
