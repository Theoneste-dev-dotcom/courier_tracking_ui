import React from "react";
import Hero from "./about/Hero";
import Mission from "./about/Mission";
import Team from "./about/Team";
import Timeline from "./about/Timeline";
import Testimonials from "./Testimonials";
import CTA from "./about/CTA";

const AboutSection = () => {
  return (
    <div className="bg-base-200">
      <Hero />
      <div>
        <Mission />

        <Team />

        <Timeline />

        <Testimonials />

        <CTA />
      </div>
    </div>
  );
};

export default AboutSection;
