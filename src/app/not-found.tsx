import Image from "next/image";
import ErrorIcon from "@/assets/404.svg";

export default function Custom404() {
  return (
    <>
      <div className="flex h-screen items-center justify-center bg-foreground">
        <ErrorIcon className="" />
      </div>
    </>
  );
}
