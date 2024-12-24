"use client";

import React from "react";
import CardsContainer from "../../_components/cardsContainer";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import "./keys.scss";
import Image from "next/image";
import widgetKeyImage from "@/assets/img/getyourkeys.png";

export default function KeysWidget() {
  type cheatListType = {
    id: number;
    value: string;
  };
  type cheatKeyType<T> = {
    idx: number;
    list: T;
  };
  const cheatData: cheatKeyType<cheatListType[]>[] = [
    {
      idx: 0,
      list: [
        { id: 1, value: "Can Claim Another Key After Video Upload!" },
        { id: 2, value: "Choose All of our Supported Games" },
      ],
    },
    {
      idx: 1,
      list: [
        { id: 3, value: "Upload cheat content and earn" },
        {
          id: 4,
          value: "Claim more then 24 hours when you build video reputation",
        },
      ],
    },
  ];

  return (
    <CardsContainer className="keysBackgroundMesh relative overflow-hidden">
      <div className="test-overlay absolute -top-[111px] z-0 -left-[392px] w-[1800px] h-[1157px]"></div>
      <Image
        src={widgetKeyImage}
        alt="keys"
        priority
        className="absolute z-[2] top-0 right-0"
      />
      <div className="flex flex-col items-start z-[2]">
        <h1 className="text-4xl font-bold text-foreground mb-6">
          Claim your 24 Hour Cheat Key
        </h1>
        <div className="flex flex-row items-start gap-8 xxl:flex-nowrap flex-wrap">
          {cheatData?.map(({ idx, list }) => {
            return (
              <div key={idx} className="flex flex-col items-start gap-6">
                {list?.map(({ id, value }) => {
                  return (
                    <div
                      key={id}
                      className="flex items-start gap-4 min-w-[400px]"
                    >
                      <Checkbox
                        className="rounded-full w-6 h-6"
                        id="terms"
                        checked
                      />
                      <label
                        htmlFor="terms"
                        className="text-xl max-w-[350px] whitespace-pre-wrap font-normal text-foreground/60 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {value}
                      </label>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        <Button
          className={`mt-6 bg-primary/20 rounded-[10px] w-[166px] text-primary font-[600] py-4 px-7 hover:text-primary/70 hover:bg-primary/10 transition-colors duration-500 ease-in-out h-14`}
        >
          Claim you key
        </Button>
      </div>
    </CardsContainer>
  );
}
