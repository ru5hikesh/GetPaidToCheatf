"use client";

import React from "react";
import CardsContainer from "../../_components/cardsContainer";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import "./Subscription.scss";
import Image from "next/image";
import widgetSubscriptionImage from "@/assets/img/WidgetSubscriptionImage.png";

export default function SubsciptionWidget() {


  return (
    <CardsContainer className="keysBackgroundMesh relative overflow-hidden">
      <div className="test-overlay absolute -top-[111px] z-0 -left-[392px] w-[1800px] h-[1157px]"></div>
      <Image
        src={widgetSubscriptionImage}
        alt="keys"
        priority
        className="absolute z-[2] top-0 right-0"
      />
      <div className="flex flex-col items-start z-[2]">
        <h1 className="text-4xl font-bold text-foreground mb-6">
          CURRENT SUBSCRIPTION
        </h1>
        <div className="flex flex-row items-start gap-8 xxl:flex-nowrap flex-wrap">
          <h1 className="text-4xl font-bold text-foreground mb-6">
            $9.99 /2mo
          </h1>

        </div>
        <div className="flex gap-3 ">
          <Button
            className={`mt-6 bg-primary/20 rounded-[10px] w-[166px] text-primary font-[600] py-2 px-7 hover:text-primary/70 hover:bg-primary/10 transition-colors duration-500 ease-in-out h-12`}
          >
            Claim you key
          </Button>
          <Button
            className={`mt-6 bg-primary rounded-[10px] w-[166px] text-darkPrimary font-[600] py-2 px-7 hover:text-primary/70 hover:bg-primary/10 transition-colors duration-500 ease-in-out h-12`}
          >
            Renew
          </Button>
        </div>
      </div>
    </CardsContainer>
  );
}
