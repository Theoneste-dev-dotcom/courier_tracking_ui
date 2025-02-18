"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();

  return (
    <div className="hero bg-gradient-to-r from-base-100 to-base-100  min-h-screen xl:px-40 z-1">
      <div className="hero-content flex-col lg:flex-row-reverse text-center lg:text-left">
        <img
          src="/assets/images/courier.png" // Replace with your image
          alt="Courier Management"
          className="max-w-md rounded-xl shadow-2xl"
        />
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold text-base-content">
            Revolutionize Your Courier Management
          </h1>
          <p className="py-6 text-base-content">
            Effortlessly track shipments, manage drivers, and streamline
            operations with our real-time courier management platform. Whether
            you're a client, driver, or administrator, we've got you covered.
          </p>
          <div className="flex gap-4 justify-center lg:justify-start">
            {/* onclick get started check if logged in and route him accordingly and if not route to login/ register */}
            <button
              className="btn btn-primary "
              onClick={() => router.push("/login")}
            >
              Get Started1
            </button>
            <button className="btn btn-outline">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
