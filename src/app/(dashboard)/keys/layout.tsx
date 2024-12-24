import Image from "next/image";
import KeysWidget from "./components/keysWidget";
import ToggleTab from "./components/toggleTab";

export default function KeysLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative px-10 pt-6 pb-20 flex flex-col">
      <div className="w-full mb-9">
        {" "}
        <KeysWidget />
      </div>
      <div className="w-full flex flex-col items-start gap-8">
        <div>
          <ToggleTab />
        </div>
        {children}
      </div>
    </main>
  );
}
