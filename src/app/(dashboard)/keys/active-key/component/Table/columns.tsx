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
import SecretText from "../secretText";

// This type is used to define the shape of our data.
export type Payment = {
  id: string;
  key: string;
  game: string;
  date: string;
  timeLeft: string;
};

export const columns: (args: AppRouterInstance) => ColumnDef<Payment>[] = (
  router
) => [
  {
    accessorKey: "id",
    header: ({ table, column }) => {
      return <p className="text-sm font-bold text-foreground">ID</p>;
    },
    cell: ({ row }) => (
      <div className="text-foreground/80">{row.getValue("id")}</div>
    ),
  },
  {
    accessorKey: "key",
    header: ({ column, table }) => (
      <p className="text-sm font-bold text-foreground">KEY</p>
    ),
    cell: ({ row }) => (
      <SecretText />
      // <div className="text-foreground/80">{row.getValue("key")}</div>
    ),
  },
  {
    accessorKey: "game",
    header: ({ column, table }) => (
      <p className="text-sm font-bold text-foreground">GAME</p>
    ),
    cell: ({ row }) => (
      <div className="text-foreground/80">{row.getValue("game")}</div>
    ),
  },
  {
    accessorKey: "date",
    header: ({ column, table }) => (
      <p className="text-sm font-bold text-foreground">DATE</p>
    ),
    cell: ({ row }) => <div className="capitalize">{row.getValue("date")}</div>,
  },
  {
    accessorKey: "timeLeft",
    header: ({ column, table }) => (
      <p className="text-sm font-bold text-foreground">TIME LEFT</p>
    ),
    cell: ({ row }) =>
      row.getValue("timeLeft") === "EXPIRED" ? (
        <div className="capitalize text-[#2E9D36]">
          {row.getValue("timeLeft")}
        </div>
      ) : (
        <div className="capitalize text-[#E40D0D]">
          {row.getValue("timeLeft")}
        </div>
      ),
  },
];
