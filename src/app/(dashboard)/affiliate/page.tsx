"use client";

import React from "react";
import AffiliateCenterWidget from "./components/affiliateCenterWidget";
import CardsContainer from "../_components/cardsContainer";
import Iconcontainer from "../_components/iconContainer";
import CoypIcon from "@/assets/svg/copy.svg";
import Statistics from "@/assets/svg/statistics.svg";
import Eye from "@/assets/svg/eye.svg";
import Money from "@/assets/svg/money.svg";
import ProfileIcon from "@/assets/svg/profileIcon.svg";
import ReferKey from "@/assets/svg/referalKey.svg";
import { toast } from "@/hooks/use-toast";
import TierWidget from "./components/tierWidget";

export type tiersDataType = {
  avatarClassname?: string;
  activeStatus?: boolean;
  id?: number;
  commission?: number;
  requirements?: string[];
};

export default function AffiliateCenter() {
  type affiliateDataType = {
    id: number;
    icon: string;
    name: string;
    content: string;
    contentType: string;
  };

  const affiliateData: affiliateDataType[] = [
    {
      id: 0,
      icon: Eye,
      name: "Visits",
      content: "0",
      contentType: "digit",
    },
    {
      id: 1,
      icon: Money,
      name: "Minimum Payout",
      content: "10.00",
      contentType: "money",
    },
    {
      id: 2,
      icon: ReferKey,
      name: "Referrals",
      content: "0",
      contentType: "digit",
    },
    {
      id: 3,
      icon: ProfileIcon,
      name: "Registerations",
      content: "0",
      contentType: "digit",
    },
    {
      id: 4,
      icon: Money,
      name: "Total Earnings",
      content: "0.00",
      contentType: "money",
    },
    {
      id: 5,
      icon: Money,
      name: "Available Earnings",
      content: "0.00",
      contentType: "money",
    },
  ];

  const tiersData: tiersDataType[] = [
    {
      avatarClassname: "bg-[#373100]",
      activeStatus: true,
      id: 0,
      commission: 5,
      requirements: ["0.00"],
    },
    {
      avatarClassname: "bg-[#371100]",
      activeStatus: false,
      id: 1,
      commission: 6,
      requirements: ["10.00"],
    },
    {
      avatarClassname: "bg-[#C60A84]",
      activeStatus: false,
      id: 2,
      commission: 7,
      requirements: ["100.00"],
    },
    {
      avatarClassname: "bg-[#E7090C]",
      activeStatus: false,
      id: 3,
      commission: 8,
      requirements: ["1000"],
    },
    {
      avatarClassname: "bg-[#E3CA0E]",
      activeStatus: false,
      id: 4,
      commission: 10,
      requirements: ["10000"],
    },
    {
      avatarClassname: "bg-[#7A71FF]",
      activeStatus: false,
      id: 5,
      commission: 15,
      requirements: ["10000", "10000"],
    },
    {
      avatarClassname:
        "bg-[#A39800] shadow-[0_0px_20px_0px_rgba(163, 152, 0, 1)]",
      activeStatus: false,
      id: 6,
      commission: 20,
      requirements: ["10000", "10000"],
    },
    {
      avatarClassname:
        "bg-[#ABFCFF] shadow-[0_0px_30px_0px_rgba(116, 225, 255, 0.5)]",
      activeStatus: false,
      id: 7,
      commission: 25,
      requirements: ["10000", "10000"],
    },
    {
      avatarClassname:
        "bg-[#F05600] shadow-[0_0px_40px_0px_rgba(240, 86, 0, 0.7)]",
      activeStatus: false,
      id: 8,
      commission: 30,
      requirements: ["10000", "10000"],
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
    <main className="relative px-10 pt-6 pb-20 flex flex-col">
      <div className="w-full mb-9">
        <AffiliateCenterWidget />
      </div>
      <div className="flex flex-row items-start gap-5 flex-wrap 1xl:flex-nowrap mb-9">
        <CardsContainer className="py-4 h-24">
          <div className="flex flex-row items-center gap-6">
            <div onClick={() => handleCopy()}>
              <Iconcontainer
                SVGIcon={CoypIcon}
                className="bg-primary/20 hover:bg-primary/10 transition-all cursor-pointer"
              />
            </div>
            <div className="flex flex-col items-start">
              <p className="text-lg font-bold text-foreground">Referral Link</p>
              <p className="text-base font-bold text-foreground/50">
                https://smmflare.com/ref/7g5td
              </p>
            </div>
          </div>
        </CardsContainer>
        <CardsContainer className="py-4 h-24 1md:basis-[50%]">
          <div className="flex flex-row items-center gap-10">
            <p className="text-lg font-bold text-foreground">Commision Rate</p>
            <p className="text-lg font-bold text-foreground/50">5%</p>
          </div>
        </CardsContainer>
        <CardsContainer className="py-4 h-24 flex-1 1md:basis-[40%]">
          <div className="flex flex-row items-center gap-10">
            <p className="text-lg font-bold text-foreground">Conversion Rate</p>
            <p className="text-lg font-bold text-foreground/50">0%</p>
          </div>
        </CardsContainer>
      </div>
      <div className="flex flex-col items-start gap-8 mb-16">
        <div className="flex flex-row items-center gap-3">
          <Statistics className="text-foreground" />
          <p className="text-2xl font-normal text-foreground">STATISTICS</p>
        </div>
        <div className="flex flex-row items-start flex-wrap gap-7 w-full">
          {affiliateData.map(({ id, icon, name, content, contentType }) => (
            <CardsContainer
              key={id}
              className="h-[135px] min-h-[135px] min-w-[340px] flex-1"
            >
              <div key={id} className="flex flex-row items-center gap-7">
                <Iconcontainer
                  SVGIcon={icon}
                  className={`${
                    id === 0
                      ? "bg-[#373100]"
                      : contentType === "money"
                      ? "bg-[#293700]"
                      : id === 2
                      ? "bg-[#003723B0]"
                      : id === 3
                      ? "bg-[#37000091]"
                      : ""
                  }`}
                />
                <div className="flex flex-col items-start">
                  <p className="text-base font-bold text-foreground/80">
                    {name}
                  </p>
                  <p className="text-4xl font-bold text-foreground/80">
                    {contentType === "money" ? `$ ${content}` : content}
                  </p>
                </div>
              </div>
            </CardsContainer>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-start gap-14 mb-16">
        <div className="flex flex-col items-start">
          <h1 className="text-3xl font-bold text-foreground">TIERS</h1>
          <p className="text-xl font-normal text-foreground/50">
            Reach the next Tier to earn higher Commision from your affilates.
          </p>
          <p className="text-xl font-normal text-foreground/50">
            Fullfill any one requirement and unlock the next tier
          </p>
        </div>
        <div className="flex flex-row items-end gap-4 w-full flex-wrap">
          {tiersData?.map(
            ({
              activeStatus,
              avatarClassname,
              commission,
              id,
              requirements,
            }) => {
              return (
                <TierWidget
                  key={id}
                  activeStatus={activeStatus}
                  avatarClassname={avatarClassname}
                  commission={commission}
                  id={id}
                  requirements={requirements}
                />
              );
            }
          )}
        </div>
      </div>
      <div className="flex flex-col items-start gap-7 rounded-[10px] p-9 w-full bg-[#4C4C4C1A]">
        <h1 className="text-3xl font-bold text-foreground">
          Affiliate Terms and Conditions
        </h1>
        <p className="text-xl font-normal text-foreground/50">
          As an authorized affiliate (Affiliate) you agree to abide by the terms
          and conditions contained in this Agreement (Agreement). Please read
          the entire Agreement carefully before registering and promoting
          iseelike.com as an Affiliate.
        </p>
        <p className="text-xl font-normal text-foreground/50">
          Your participation in the Program is solely to legally advertise our
          website to receive a commission on memberships and products purchased
          by individuals referred to Bulkfollows.com by your own website or
          personal referrals.
        </p>
        <p className="text-xl font-normal text-foreground/50">
          By signing up for the Affiliate Program (Program), you indicate your
          acceptance of this Agreement and its terms and conditions.
        </p>
      </div>
    </main>
  );
}
