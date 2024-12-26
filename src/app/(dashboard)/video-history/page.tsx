"use client";

import React from "react";
import CardsContainer from "../_components/cardsContainer";
import Iconcontainer from "../_components/iconContainer";
import { iconData } from "./components/iconData";
import { Icon } from "@iconify/react";
import "./components/dashboard.scss";
import { Progress } from "@/components/ui/progress";
import { DataTable } from "./components/Table/table";
import { Payment, columns } from "./components/Table/columns";
import { useRouter, useSearchParams } from "next/navigation";
import { data } from "./components/Table/data";
import Ranking from "@/assets/svg/ranking.svg";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import Platinum from "@/assets/img/platinum.png";

export default function Dashboard() {
    const [progress, setProgress] = React.useState(13);

    React.useEffect(() => {
        const timer = setTimeout(() => setProgress(66), 500);
        return () => clearTimeout(timer);
    }, []);
    const router = useRouter();

    return (
        <main className="relative px-10 pt-6 pb-20 flex flex-col">

            <CardsContainer className="flex flex-col relative mb-14">
                <div className="flex flex-row items-center justify-between gap-3 mb-[27px] after:w-[calc(100%_-_68px)] after:h-[50px] after:absolute after:top-[90px] after:rounded-[12px] after:left-[34px] after:bg-[#312316]">
                    <div className="flex flex-row items-center gap-3">
                        <Icon
                            icon="solar:history-line-duotone"
                            className="text-[20px] text-foreground/40"
                        />
                        <h1 className="text-2xl font-normal text-foreground/40">
                            Video History
                        </h1>
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <div className="text-foreground/50 group bg-[#312316] flex flex-row items-center gap-[10px] cursor-pointer rounded-[4px] h-[27px] border-[#CFCFCF1D] border px-3">
                                <p className="text-xs font-medium">October</p>
                                <Icon
                                    icon="iconamoon:arrow-down-2-light"
                                    className="text-foreground text-[26px]"
                                />
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-20 py-10"></DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <DataTable data={data} columns={columns(router)} />
            </CardsContainer>

        </main>
    );
}
