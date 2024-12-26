import type { Metadata } from "next";
import { Inter, Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import Providers from "@/utils/provider";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";

const montserrat = Montserrat({
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "900"],
  subsets: ["latin"],
  fallback: ["Arial", "sans-serif"],
  variable: "--font-Montserrat",
});

export const metadata: Metadata = {
  title: "GetPaidToCheat",
  description:
    "Earn money quiclky by showcasing cheats.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}
