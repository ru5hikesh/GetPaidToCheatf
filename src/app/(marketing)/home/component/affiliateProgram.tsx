import { FaArrowCircleRight } from "react-icons/fa";
import { IoMdCheckmarkCircle } from "react-icons/io";
import IMAGES from "@/assets/images";

export default function AffiliateProgram() {
  return (
    <section
      className="relative py-20 bg-[#0f0f0f] text-white"
      style={{
        backgroundImage: "url('/Vector.png')", // Replace with the correct path
      }}
    >
      <div className="px-4 md:px-20 flex flex-col md:flex-row gap-10">
        {/* Text Content */}
        <div className="w-full md:w-3/5 flex flex-col justify-between">
          <div>
            <h2 className="text-7xl md:text-8xl font-american tracking-wide  font-bold uppercase leading-none mb-4">
              Affiliate Program<span className="text-yellow-400">.</span>
            </h2>
            <p className="text-2xl font-semibold text-yellow-400 mb-6">
              Earn up to $1000 monthly
            </p>
            <h3 className="text-xl font-bold mb-4">Get Exclusive Benefits:</h3>
          </div>
          <div className="">
            <ul className="space-y-3 mb-6">
              {[
                "Instant account approval, no bureaucracy.",
                "Up to 30% Commission per sub*.",
                "Up to 8 ExitLag 7-Day Keys.",
                "Free EARNTOCHEAT for you.",
              ].map((benefit, index) => (
                <li key={index} className="flex items-center text-lg">
                  <IoMdCheckmarkCircle className="w-6 h-6 mr-3 sm:w-5 sm:h-5 -full text-green-500" />
                  {benefit}
                </li>
              ))}
            </ul>

            <button className="mt-10 flex items-center justify-center gap-2 bg-yellow-400 text-black py-2 px-6 sm:py-3 sm:px-8 rounded-full text-sm sm:text-base md:text-lg font-bold hover:bg-yellow-500 transition-all">
              I want to earn more
              <FaArrowCircleRight className="w-4 h-4 " />
            </button>
          </div>
        </div>
        <div className="space-y-5 w-full md:w-2/5">
          <img src={IMAGES.affialite_one} alt="Gifts" className="rounded" />
          <img src={IMAGES.affiliate} alt="Llamas" className="rounded" />
        </div>
      </div>
    </section>
  );
}
