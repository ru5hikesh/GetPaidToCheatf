import type { Metadata } from "next";
import Header from "@/app/_components/header";
import Footer from "./home/component/footer";

export const metadata: Metadata = {
  title: "Gasifyx ",
  description:
    "Gasifyx is a gas monitoring and safety system designed to help users track their LPG usage, detect leaks, and make gas ordering more convenient.",
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
