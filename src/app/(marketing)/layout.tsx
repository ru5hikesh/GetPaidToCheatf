import type { Metadata } from "next";
import Header from "@/app/_components/header";
import Footer from "./home/component/footer";

export const metadata: Metadata = {
  title: "GetPaidToCheat ",
  description:
    "Earn money quiclky by showcasing cheats.",
};

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative w-full">
      {" "}
      <Header />
      {children}
      <Footer />
    </div>
  );
}
