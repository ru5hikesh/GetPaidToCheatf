
import SubscriptionWidget from "./component/Subscription";
import check from "@/assets/img/check.png"
import React from 'react'
import Image from "next/image";
const plans = [
    {
        title: "BASIC",
        price: "$9.99 /2mo",
        description: "Get access to the cheat key for lifetime for the specific game",
        features: [
            "Cheat Key Access for all the games",
            "Access to creator's Dashboard",
            "Access to Earnings Portal",
            "Etc Etc"
        ],
        buttonText: "Get Now",
        tag: "CURRENT"
    },
    {
        title: "SUPER-SAVER",
        price: "$15 /3mo",
        description: "Get access to the cheat key for lifetime for the specific game",
        features: [
            "Cheat Key Access for all the games",
            "Access to creator's Dashboard",
            "Access to Earnings Portal",
            "Etc Etc"
        ],
        buttonText: "Get Now",
        tag: "UPGRADE"
    },
    {
        title: "LIFETIME ACCESS",
        price: "$50",
        description: "Get access to the cheat key for lifetime for the specific game",
        features: [
            "Cheat Key Access for all the games",
            "Access to creator's Dashboard",
            "Access to Earnings Portal",
            "Etc Etc"
        ],
        buttonText: "Get Now",
        tag: "UPGRADE"
    }
];
function page() {
    return (
        <main className="relative px-10 pt-6 pb-20 flex flex-col">
            <div className="w-full mb-9">
                <SubscriptionWidget />
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className="bg-[#171717] text-center border-2 border-primary rounded-lg p-6 relative"
                    >
                        <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary px-4 py-1 rounded-full text-sm text-white`}>
                            {plan.tag}
                        </div>
                        <h3 className="text-3xl text-left font-bold mt-6 text-primary">{plan.title}</h3>
                        <p className="text-sm mt-1 text-left text-gray-400">{plan.description}</p>
                        <p className="text-4xl my-3 text-left font-bold text-gray-300">{plan.price}</p>
                        <hr />
                        <ul className="mt-4 text-left space-y-2 text-sm text-gray-300">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-center">
                                    <Image src={check} alt="Check" className="w-4 h-4 mr-2" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <button className="bg-primary text-darkPrimary px-4 py-1 rounded-full mt-4 items-center hover:bg-primary transition duration-200">
                            {plan.buttonText}
                        </button>
                    </div>
                ))}
            </div>
        </main>

    )
}

export default page
