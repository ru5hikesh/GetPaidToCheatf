import React from "react";
import Section from "./section";
import IMAGES from "@/assets/images";

const HowItWorks: React.FC = () => {
  // const steps = [
  //   {
  //     id: 1,
  //     title: "Registration Via Discord",
  //     description:
  //       "Register on our platform using Discord's custodial login for all authentication-related stuff.",
  //     buttonText: "Register Now",
  //     icon: "discord",
  //   },
  //   {
  //     id: 2,
  //     title: "Connect Accounts",
  //     description:
  //       "Link Social Media Accounts and Payment methods to kickstart the process of onboarding.",
  //     icon: "connect",
  //   },
  //   {
  //     id: 3,
  //     title: "Subscription Fee",
  //     description:
  //       "Pay a Monthly $4.99 fee for cheat key access, so that you can start utilizing them and move to the next step.",
  //     icon: "subscription",
  //   },
  //   {
  //     id: 4,
  //     title: "Content Creation",
  //     description:
  //       "Upload videos revealing cheats, tips, and hacks to gain an edge, improve skills, and master games effortlessly.",
  //     icon: "youtube",
  //   },
  //   {
  //     id: 5,
  //     title: "Verification and Payment",
  //     description:
  //       "Implement manual verification for payments tied to engagement metrics, ensuring accuracy, fairness, and rewarding genuine users.",
  //     icon: "verification",
  //   },
  //   {
  //     id: 6,
  //     title: "Payout Requests",
  //     description:
  //       "Enable manual or automatic payouts using diverse methods, for users to receive their earnings efficiently.",
  //     icon: "payout",
  //   },
  // ];

  return (
    <section className="bg-[#271f14] text-white py-16 px-4 md:px-20 flex flex-col md:flex-row">
      <div className="flex-1 p-4 px-0 md:px-8">
        <h2 className="text-7xl md:text-8xl font-american tracking-wide font-extrabold  mb-12 w-1/2">
          How It Works?<span className="text-yellow-400">.</span>
        </h2>
        <img src={IMAGES.works1} className="mb-20" />

        <Section
          id={4}
          title="Registration Via Discord"
          description="Register on our platform using Discord's custodial login for all authentication-related stuff."
          icon={IMAGES.youtube}
          reverse={true}
        />
        <Section
          id={5}
          title="Registration Via Discord"
          description="Register on our platform using Discord's custodial login for all authentication-related stuff."
          icon={IMAGES.cash}
          reverse={true}
        />
        <Section
          id={6}
          title="Registration Via Discord"
          description="Register on our platform using Discord's custodial login for all authentication-related stuff."
          icon={IMAGES.chat}
          reverse={true}
        />
      </div>
      <div className="w-20 md:flex justify-center py-4 hidden ">
        <div className="h-full w-[1px] bg-yellow-400"></div>
      </div>

      <div className="flex flex-col gap-12 p-4 px-0 md:px-8 flex-1">
        <Section
          id={1}
          title="Registration Via Discord"
          description="Register on our platform using Discord's custodial login for all authentication-related stuff."
          buttonText="Register Now"
          icon={IMAGES.discord}
        />
        <Section
          id={2}
          title="Connect Accounts"
          description="Link Social Media Accounts and Payment methods to kickstart the process of onboarding."
          icon={IMAGES.steam}
        />
        <Section
          id={3}
          title="Subscription Fee"
          description="Pay a Monthly $4.99 fee for cheat key access, so that you can start utilizing them and move to the next step."
          icon={IMAGES.btc}
        />
        <img src={IMAGES.works2} className="" />
        <div>
          <div className="text-2xl font-medium ">
            Special Step:{" "}
            <span className="text-yellow-400">Anti-Fraud Measures</span>
          </div>

          <p className={`text-gray-400 `}>
            Authenticate views through{" "}
            <span className="font-medium text-white">
              social media account access
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
