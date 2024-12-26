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
  dateTime: string;
  activityType: string;
  amount: string;
  status: string;
  action: boolean;
};

export const columns: (args: AppRouterInstance) => ColumnDef<Payment>[] = (
  router
) => [
  {
    accessorKey: "dateTime",
    header: ({ table, column }) => {
      // console.log("table checking......", table);
      return <p className="text-sm font-bold text-foreground">Date-Time</p>;
    },
    cell: ({ row }) => (
      <div className="text-foreground/80">{row.getValue("dateTime")}</div>
    ),
  },
  {
    accessorKey: "activityType",
    header: ({ column, table }) => (
      <p className="text-sm font-bold text-foreground">Activity Type</p>
    ),
    cell: ({ row }) => (
      <div className="text-foreground/80">{row.getValue("activityType")}</div>
    ),
  },
  {
    accessorKey: "amount",
    header: ({ column, table }) => (
      <p className="text-sm font-bold text-foreground">Amount</p>
    ),
    cell: ({ row }) => (
      <div
        className={`text-foreground/80 ${
          row.getValue("amount") === "" ? "ml-[15px]" : ""
        }`}
      >
        {row.getValue("amount") === "" ? "-" : row.getValue("amount")}
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: ({ column, table }) => (
      <p className="text-sm font-bold text-foreground">Status</p>
    ),
    cell: ({ row }) => (
      <div
        className={`h-7 px-3 flex flex-row items-center justify-center w-fit rounded-full ${
          row.getValue("status") === "Delivered"
            ? "bg-[#00B69B]"
            : row.getValue("status") === "Pending"
            ? "bg-[#FCBE2D]"
            : row.getValue("status") === "Rejected"
            ? "bg-[#FD5454]"
            : "bg-[#fdcb9b]"
        }`}
      >
        {row.getValue("status")}
      </div>
    ),
  },
  {
    accessorKey: "action",
    header: ({ column, table }) => (
      <p className="text-sm font-bold text-foreground">Action</p>
    ),
    cell: ({ row }) => (
      <Button
        variant="default"
        className="bg-primary/30 border-none rounded-full px-7 h-7"
      >
        {row.getValue("action")}
        Details
      </Button>
    ),
  },
];
