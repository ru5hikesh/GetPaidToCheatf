import React from "react";
import IMAGES from "@/assets/images";
import { FaArrowCircleDown } from "react-icons/fa";

const Hero: React.FC = () => {
  return (
    <section className="relative flex flex-col justify-between bg-black text-white text-center p-8 h-screen">
      <div className="absolute top-0 left-0 w-full h-full">
        <img src={IMAGES.bg} alt="Robot Mascot" className=" w-full h-full" />
      </div>
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2  w-3/4 md:w-[33%]">
        <img src={IMAGES.bot} alt="Robot Mascot" className=" w-full" />
      </div>
      <div className="absolute top-1/3 left-3/4 ">
        <img src={IMAGES.btc} alt="Bitcoin" className="w-20 md:w-40" />
      </div>
      <div className="absolute top-3/4 right-1/4 ">
        <img src={IMAGES.litecoin} alt="Litecoin" className="w-16 md:w-32" />
      </div>
      <div className="absolute top-1/3 left-[20%] ">
        <img src={IMAGES.litecoin} alt="Litecoin" className="w-16 md:w-32" />
      </div>
      <div className="absolute top-[60%] left-[10%] ">
        <img
          src={IMAGES.btc}
          alt="Litecoin"
          className="w-20 md:w-40 -rotate-12"
        />
      </div>
      <div className="absolute top-[40%] left-[60%] ">
        <img src={IMAGES.joystick} alt="Controller" className="w-20 md:w-40" />
      </div>
      <div className="z-20">
        <div className=" text-7xl md:text-[9rem] z-20 tracking-wide leading-none font-extrabold uppercase font-american mt-28">
          Get Paid to Cheat
        </div>
        <p className="text-lg md:text-2xl  text-yellow-400 font-bold uppercase">
          Earn money quickly by showcasing cheats
        </p>
      </div>
      <div className="flex justify-center  mt-10 z-20">
        <button className="flex items-center gap-3 px-4 py-2 md:py-3 font-bold bg-yellow-400 text-black rounded-full hover:bg-yellow-500">
          Get Started Now <FaArrowCircleDown className="text-xl" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
