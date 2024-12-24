"use client";

import React from "react";
import CardsContainer from "../../_components/cardsContainer";
import { DataTable } from "./component/Table/table";
import { Icon } from "@iconify/react";
import { Payment, columns } from "./component/Table/columns";
import { data } from "./component/Table/data";
import { useRouter } from "next/navigation";
import Iconcontainer from "../../_components/iconContainer";
import keyIcon from "@/assets/svg/keyTableKey.svg";

export default function ActiveKeys() {
  const router = useRouter();

  return (
    <CardsContainer className="flex flex-col relative mb-14">
      <div className="flex flex-row items-center justify-between gap-3 mb-[27px] after:w-[calc(100%_-_68px)] after:h-[50px] after:absolute after:top-[118px] after:rounded-[12px] after:left-[34px] after:bg-[#312316]">
        <div className="flex flex-row items-center gap-6">
          <Iconcontainer SVGIcon={keyIcon} className="bg-[#293700] h-14 w-14" />
          <div className="flex flex-col items-start">
            <h1 className="text-xl font-bold text-foreground/80">
              Active Keys
            </h1>
            <p className="text-sm text-foreground/40 font-normal">
              See your already activated keys here
            </p>
          </div>
        </div>
      </div>
      <DataTable data={data} columns={columns(router)} />
    </CardsContainer>
  );
}
