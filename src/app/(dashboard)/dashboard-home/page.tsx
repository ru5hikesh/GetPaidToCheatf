"use client";

import React, { useEffect, useState } from "react";
import AffiliateWidget from "./components/affiliateWidget";
import GetCheatKey from "./components/getCheatKeyWidget";
import PlatformTutorialsWidget from "./components/platformTutorialWidget";
import { DataTable } from "./components/Table/table";
import { Payment, columns } from "./components/Table/columns";
import { useRouter, useSearchParams } from "next/navigation";
import { data } from "./components/Table/data";

export default function Home() {
  // const [tableData, setData] = useState<Payment[]>([]);
  const router = useRouter();

  return (
    <main className="relative px-10 pt-6 pb-20 flex flex-col">
      <div className="flex flex-row items-start gap-4 h-[250px] mb-8">
        <GetCheatKey />
        <div className="flex flex-row h-full w-full items-start gap-4">
          <PlatformTutorialsWidget />
          <AffiliateWidget />
        </div>
      </div>
      <div className="flex flex-col items-start gap-7">
        <h1 className="text-3xl font-normal">Top Earners</h1>
        <DataTable data={data} columns={columns(router)} />
      </div>
    </main>
  );
}
