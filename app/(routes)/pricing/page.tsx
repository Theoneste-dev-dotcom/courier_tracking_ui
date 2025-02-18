import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import Features from "@/components/pricing/Features";
import CTA from "@/components/pricing/CTA";
import PricingPlan from "@/components/pricing/PricingPlan";

const page = () => {
  return (
    <div>
      <Header />
      <main className="px-40">
        <PricingPlan />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default page;
