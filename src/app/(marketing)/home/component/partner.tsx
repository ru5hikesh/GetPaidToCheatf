import { motion } from "motion/react";
import IMAGES from "@/assets/images";

const logos = [
  {
    name: "Acme logo",
    image: IMAGES.apple_pay,
  },
  {
    name: "Apex logo",
    image: IMAGES.g_pay,
  },
  {
    name: "Celestial logo",
    image: IMAGES.zelle,
  },
  {
    name: "Echo logo",
    image: IMAGES.paypal,
  },
  {
    name: "Pulse logo",
    image: IMAGES.bank,
  },
  {
    name: "Quantum logo",
    image: IMAGES.cashapp,
  },
];

export default function Partner() {
  return (
    <div className="py-8 mb:py-12 bg-black">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            {logos.map((logo) => (
              <img
                key={logo.name}
                src={logo.image}
                alt={logo.name}
                className="h-10 md:h-16"
              />
            ))}
            {logos.map((logo) => (
              <img
                key={logo.name}
                src={logo.image}
                alt={logo.name}
                className="h-10 md:h-16"
              />
            ))}
          </motion.div>
        </div>
      </div>
      <div className="text-white opacity-50 text-lg text-center mt-4">
        Payment Partners
      </div>
    </div>
  );
}
