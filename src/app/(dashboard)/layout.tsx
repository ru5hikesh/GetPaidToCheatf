import type { Metadata } from "next";
import Image from "next/image";
import BackgroundEffect from "@/assets/img/dashboardBg.png";
import Logo from "@/assets/img/Logo.png";
import { sidebarData } from "./_components/sideBarData";
import SideBar from "./_components/sideBar";
import Nav from "./_components/nav";
import "./_components/dashboard.css";

export const metadata: Metadata = {
  title: "GetPaidToCheat ",
  description: "Earn money quickly by showcasing cheats",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative w-screen h-screen flex flex-row items-start">
      <div className="w-[25%] h-full overflow-auto pt-12 px-9 border-r border-r-[#141414]">
        <Image src={Logo} alt="Logo" className="mb-14" priority />
        <SideBar />
      </div>
      <div className="flex-1 w-[70%] h-full relative flex flex-col">
        <Nav />
        <div className="w-full overflow-auto backgroundEffect">{children}</div>
      </div>
    </div>
  );
}
