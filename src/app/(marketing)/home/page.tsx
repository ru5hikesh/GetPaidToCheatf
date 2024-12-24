"use client";

import Pricing from "./component/Pricing";
import AffiliateProgram from "./component/affiliateProgram";
import AvailableGame from "./component/availableGame";
import Hero from "./component/hero";
import HowItWorks from "./component/howItWorks";
import Partner from "./component/partner";

function Home() {
  return (
    <div>
      <Hero />
      <Partner />
      <AvailableGame />
      <HowItWorks />
      <Pricing />
      <AffiliateProgram />
    </div>
  );
}

export default Home;
