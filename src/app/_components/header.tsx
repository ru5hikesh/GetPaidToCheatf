import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="fixed top-4 md:top-8 left-4 md:left-8 right-4 md:right-8 z-50 border border-[#252525] rounded-full flex items-center justify-between px-6 py-4 bg-[#151515] text-white">
      <div className="flex items-center gap-16">
        <div className="text-lg font-bold">GETPAIDTOCHEAT</div>
        <nav className="hidden md:flex space-x-12">
          <Link href="#games" className="hover:text-yellow-400">
            Games
          </Link>
          <Link href="#how-it-works" className="hover:text-yellow-400">
            How it works?
          </Link>
          <Link href="#pricing" className="hover:text-yellow-400">
            Pricing
          </Link>
          <Link href="#affiliates" className="hover:text-yellow-400">
            Affiliates
          </Link>
          <Link href="#contact" className="hover:text-yellow-400">
            Contact
          </Link>
        </nav>
      </div>
      <div className="flex space-x-2 md:space-x-4 font-medium">
        <button className="px-6 py-2 md:py-3 bg-[#202020] font-bold text-white rounded-full hidden md:block">
          Login
        </button>
        <button className="flex items-center gap-3 px-4 py-2 md:py-3 font-bold bg-yellow-400 text-black rounded-full hover:bg-yellow-500 whitespace-nowrap">
          Get Cheat <FaArrowCircleRight className="text-xl" />
        </button>
      </div>
    </header>
  );
};

export default Header;
