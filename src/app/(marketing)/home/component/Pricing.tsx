import { FaArrowCircleRight } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const pricingTiers = [
  {
    title: "CHEAT KEY ACCESS",
    price: 4.99,
    oldPrice: 999,
    description:
      "Get access to the cheat key for a lifetime for the specific game",
    features: [
      "Cheat Key Access for all the games",
      "Access to creator's Dashboard",
      "Access to Earnings Portal",
      "Etc Etc",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="py-24 bg-black text-white relative">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-center font-bold uppercase tracking-wider mb-12 text-7xl md:text-8xl font-american">
          Pricing
          <span className="text-yellow-400 ">.</span>
        </h2>

        <div className="max-w-md mx-auto bg-[#0f0f0f] rounded-lg shadow-lg p-8 relative border border-yellow-400">
          {pricingTiers.map(
            ({ title, price, oldPrice, description, features }) => (
              <div key={title}>
                <h3 className="text-yellow-400 text-4xl text-center font-bold mb-2">
                  {title}
                </h3>
                <p className="text-gray-400 mb-6">{description}</p>

                {/* Pricing Section */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-gray-600 line-through text-4xl font-bold">
                    ${oldPrice}
                  </span>
                  <span className="text-4xl font-bold">${price}</span>
                </div>
                <div className="text-gray-600 h-1 w-full" />
                {/* Features List */}
                <ul className="space-y-3 mb-6">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <IoMdCheckmarkCircleOutline className="w-5 h-5 text-green-500 mr-3" />

                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="button flex items-center justify-center">
                  <button className="mt-10 flex items-center justify-center gap-2 bg-yellow-400 text-black py-2 px-6 sm:py-3 sm:px-8 rounded-full text-sm sm:text-base md:text-lg font-medium hover:bg-yellow-500 transition-all">
                    Get Now
                    <FaArrowCircleRight className="w-4 h-4 " />
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
