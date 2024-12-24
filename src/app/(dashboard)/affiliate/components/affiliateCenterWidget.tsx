"use client";

import React from "react";
import CardsContainer from "../../_components/cardsContainer";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import "./affiliateCenter.scss";
import { Icon } from "@iconify/react";
import { toast } from "@/hooks/use-toast";
import Image from "next/image";
import affiliateCenter from "@/assets/img/affiliateCenter.png";

export default function AffiliateCenterWidget() {
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
        { id: 1, value: "Get upto 24 hours of cheat key" },
        { id: 2, value: "Choose upto 4 games" },
      ],
    },
    {
      idx: 1,
      list: [{ id: 3, value: "Upload cheat content and earn" }],
    },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText("https://smmflare.com/ref/7g5td");
    toast({
      variant: "default",
      title: "Copied",
      description: "Link Copied to Clipboard",
      className:
        "bg-[#BEF2B9] border-[#519E47] text-[#197624] text-[14px] font-[400]",
    });
  };

  return (
    <CardsContainer className="affiliateCenterBackgroundMesh relative overflow-hidden">
      <div className="affiliateCenterTestOverlay absolute -top-[111px] z-0 -left-[392px] w-[1800px] h-[1157px]"></div>
      <Image
        src={affiliateCenter}
        alt="affiliate"
        priority
        className="absolute z-[1] bottom-0 right-0"
      />
      <div className="flex flex-col items-start z-[2]">
        <h1 className="text-4xl font-bold text-foreground mb-6">
          GETPAIDTOCHEAT Affiliate Program
        </h1>
        <div className="flex flex-row items-start gap-8 xxl:flex-nowrap flex-wrap mb-9 ">
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
                        className="text-xl whitespace-pre-wrap font-normal text-foreground/60 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
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
          onClick={() => handleCopy()}
          className={`bg-primary/20 gap-4 group rounded-[10px] text-primary font-[600] hover:text-primary/70 hover:bg-primary/10 duration-500 ease-in-out min-h-10`}
        >
          <Icon
            icon="lucide:copy"
            className="text-primary text-[30px] group-hover:text-text-primary/70 transition-all"
          />
          Copy Link
        </Button>
      </div>
    </CardsContainer>
  );
}
