"use client";

import { ColumnDef } from "@tanstack/react-table";
import { useRouter, useSearchParams } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import creator from "@/assets/img/creator-profile.png";

// This type is used to define the shape of our data.
export type Payment = {
  id: string;
  place: string;
  creator: string;
  totalRevenue: string;
  totalVideos: string;
};

export const columns: (args: AppRouterInstance) => ColumnDef<Payment>[] = (
  router
) => [
  {
    accessorKey: "place",
    header: ({ table, column }) => {
      // console.log("table checking......", table);
      return <p className="text-xl font-normal text-primary">PLACE</p>;
    },
    cell: ({ row }) => (
      <div className="text-[#FF9746]">{row.getValue("place")}</div>
    ),
  },
  {
    accessorKey: "creator",
    header: ({ column, table }) => (
      <p className="text-xl font-normal text-primary">CREATOR</p>
    ),
    cell: ({ row }) => (
      <div className="text-foreground/40 flex flex-row items-center gap-[6px]">
        <Image src={creator} alt="creator" priority className="" />

        {row.getValue("creator")}
      </div>
    ),
  },
  {
    accessorKey: "totalRevenue",
    header: ({ column, table }) => (
      <p className="text-xl font-normal text-primary">TOTAL REVENUE</p>
    ),
    cell: ({ row }) => (
      <div className="text-[#2E9D36]">{row.getValue("totalRevenue")}</div>
    ),
  },
  {
    accessorKey: "totalVideos",
    header: ({ column, table }) => (
      <p className="text-xl font-normal text-primary">TOTAL VIDEOS</p>
    ),
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("totalVideos")}</div>
    ),
  },
];
