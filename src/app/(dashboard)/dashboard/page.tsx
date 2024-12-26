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
            <div className="w-full flex flex-row items-start gap-6 mb-[22px] flex-wrap">
                <CardsContainer className="min-w-[380px] lg:flex-1 w-full">
                    <div className="flex flex-row items-center gap-7 justify-start">
                        <Iconcontainer SVGIcon={iconData?.wallet} iconColor={"#F05600"} />
                        <div className="flex flex-col items-start gap-[5px]">
                            <p className="text-base text-foreground font-bold">
                                Total Earnings
                            </p>
                            <div className="flex flex-row items-center gap-1">
                                <p className="text-3xl text-foreground font-bold whitespace-nowrap">
                                    $ 4,932
                                </p>
                                <div className="flex flex-col items-start">
                                    <p className="text-xs font-medium text-[#00C60D] whitespace-nowrap flex flex-row items-center gap-[2px]">
                                        <Icon icon="prime:arrow-up-right" className="text-[12px]" />
                                        133.41%
                                    </p>
                                    <p className="text-xs font-medium text-foreground/40 whitespace-nowrap">
                                        From last month
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardsContainer>
                <div className="flex flex-row items-start gap-6 flex-1 flex-wrap lg:flex-nowrap">
                    <CardsContainer className="xl:basis-[10%] basis-[40%] flex-1">
                        <div className="flex flex-row items-center gap-7 justify-start">
                            <Iconcontainer
                                className="bg-[#373100]"
                                SVGIcon={iconData?.medal}
                                iconColor={"#FFD900"}
                            />
                            <div className="flex flex-col items-start gap-[5px]">
                                <p className="text-base text-foreground font-bold whitespace-nowrap">
                                    Community Rank
                                </p>
                                <p className="text-3xl text-foreground font-bold">#21</p>
                            </div>
                        </div>
                    </CardsContainer>
                    <CardsContainer className="xl:basis-[10%] basis-[40%] flex-1">
                        <div className="flex flex-row items-center gap-7 justify-start">
                            <Iconcontainer
                                className="bg-[#293700]"
                                SVGIcon={iconData?.key}
                                iconColor={"#FFD900"}
                            />
                            <div className="flex flex-col items-start gap-[5px]">
                                <p className="text-base text-foreground font-bold whitespace-nowrap">
                                    Active Keys
                                </p>
                                <p className="text-3xl text-foreground font-bold">3</p>
                            </div>
                        </div>
                    </CardsContainer>
                </div>
            </div>
            <div className="w-full flex flex-row items-start gap-6 flex-wrap mb-12">
                <CardsContainer className="min-w-[450px] flex-1">
                    <div className="flex relative flex-row items-center gap-7 justify-start w-full flex-wrap 1lg:flex-nowrap">
                        <Image
                            src={Platinum}
                            alt="Platinum"
                            priority
                            className="absolute z-0 -bottom-[50px] -right-[69px]"
                        />
                        <Iconcontainer
                            className="bg-[#372800]"
                            SVGIcon={iconData?.shield}
                            iconColor={"#F08000"}
                        />
                        <div className="flex flex-col items-start gap-[5px]">
                            <p className="text-base text-foreground font-bold whitespace-nowrap">
                                Current Tier
                            </p>
                            <p className="text-3xl text-[#F0B800] goldenTextShadow font-bold">
                                GOLD
                            </p>
                        </div>
                        <div className="flex flex-col w-full">
                            <div className="w-full flex flex-row items-center justify-between">
                                <p className="first">77%</p>
                                {/* <p className="second">Next Tier</p> */}
                            </div>
                            <Progress value={progress} className="w-full bg-[#FF97461A]" />
                        </div>
                    </div>
                </CardsContainer>
                <CardsContainer className="flex-1">
                    <div className="flex flex-row items-center gap-7 justify-start">
                        <Iconcontainer
                            className="bg-[#2FAB7336]"
                            SVGIcon={iconData?.person}
                            iconColor={"#08DB75"}
                        />
                        <div className="flex flex-col items-start gap-[5px]">
                            <p className="text-base text-foreground font-bold">Referrals</p>
                            <p className="text-3xl text-foreground font-bold">1</p>
                        </div>
                    </div>
                </CardsContainer>
            </div>
            <CardsContainer className="flex flex-col relative mb-14">
                <div className="flex flex-row items-center justify-between gap-3 mb-[27px] after:w-[calc(100%_-_68px)] after:h-[50px] after:absolute after:top-[90px] after:rounded-[12px] after:left-[34px] after:bg-[#312316]">
                    <div className="flex flex-row items-center gap-3">
                        <Icon
                            icon="solar:history-line-duotone"
                            className="text-[20px] text-foreground/40"
                        />
                        <h1 className="text-2xl font-normal text-foreground/40">
                            RECENT ACTIVITY
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
            <div className="flex flex-col items-end">
                <h1 className="text-3xl font-black text-foreground">RANKING SYSTEM</h1>
                <div className="w-full relative">
                    <Ranking />
                    {/* <p className="text-lg text-foreground font-black absolute top-[434px] right-[431px]">
            YOUR LEVEL
          </p> */}
                </div>
            </div>
        </main>
    );
}
