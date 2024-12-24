"use client";

import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ToggleTab() {
  const pathname = usePathname();
  // console.log(pathname === "/keys/active-key");
  const [tab, setTab] = useState<string>(pathname);
  const router = useRouter();
  const handleTab = (value: string) => {
    setTab(value);
    router.push(value);
  };
  return (
    <Tabs defaultValue={tab} className="w-[400px]">
      <TabsList className="bg-primary/40">
        <TabsTrigger
          onClick={() => handleTab("/keys/active-key")}
          value="/keys/active-key"
          className="data-[state=active]:bg-primary data-[state=active]:text-background text-foreground"
        >
          <p
            className={`transition-all ${
              tab === "/keys/active-key" ? "text-background" : "text-foreground"
            }`}
          >
            Active Keys
          </p>
        </TabsTrigger>
        <TabsTrigger
          onClick={() => handleTab("/keys/new-key")}
          value="/keys/new-key"
          className="data-[state=active]:bg-primary data-[state=active]:text-background text-foreground"
          //   className={`${
          //     pathname === "/keys/active-key"
          //       ? "text-background"
          //       : "text-foreground"
          //   }`}
        >
          <p
            className={`transition-all ${
              tab === "/keys/new-key" ? "text-background" : "text-foreground"
            }`}
          >
            Get New Key
          </p>
        </TabsTrigger>
      </TabsList>
      {/* <TabsContent value="account"></TabsContent>
      <TabsContent value="password"></TabsContent> */}
    </Tabs>
  );
}
