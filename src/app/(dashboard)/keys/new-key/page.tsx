"use client";

import React from "react";
import CardsContainer from "../../_components/cardsContainer";
import Iconcontainer from "../../_components/iconContainer";
import CrossSword from "@/assets/svg/crossSword.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function NewKeys() {
  return (
    <CardsContainer className="flex flex-col items-start gap-9">
      <div className="flex flex-row items-start gap-5">
        <Iconcontainer SVGIcon={CrossSword} className="bg-[#372A00]" />
        <div className="flex flex-col items-start">
          <h1 className="text-xl font-bold text-foreground">
            Video Uploaded for Previous Key ?
          </h1>
          <p className="mt-6 text-xl font-bold text-[#2E9D36]">TRUE</p>
          <Button
            className={`mt-6 bg-primary text-sm rounded-[10px] text-background font-black py-4 px-7 hover:text-background hover:bg-primary/70 transition-colors duration-500 ease-in-out h-10`}
          >
            GET MY 24 HOUR KEY
          </Button>
        </div>
      </div>
      <div className="flex flex-row items-start gap-5">
        <Iconcontainer SVGIcon={CrossSword} className="bg-[#372A00]" />
        <div className="flex flex-col items-start gap-4 w-full">
          <h1 className="text-xl font-bold text-foreground">
            Already have a cheat ? Upload here and start making Content
          </h1>
          <div className="flex w-full max-w-sm items-center gap-6">
            <Input
              type="text"
              className="ring-0 rounded-[10px] outline-none placeholder:text-primary border-none bg-primary/40"
              placeholder="eg: XXXXXXXXXXX"
            />
            <Button
              type="submit"
              className="text-background text-sm font-black rounded-[10px] px-11"
            >
              UPLOAD
            </Button>
          </div>
        </div>
      </div>
    </CardsContainer>
  );
}
