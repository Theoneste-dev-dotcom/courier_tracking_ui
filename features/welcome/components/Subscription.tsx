"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const subscriptionPlans = [
  {
    id: "FREE_TRIAL",
    title: "FREE TRIAL",
    duration: "2 WEEKS",
    features: [
      "Create 10 shipments",
      "Read, update, delete shipments",
      "QR Code scanning",
      "Email notifications only",
      "Access last 3 days' shipment history",
      "Limited to 10 drivers",
    ],
  },
  {
    id: "BASIC",
    title: "BASIC PLAN",
    duration: "1 MONTH",
    features: [
      "CRUD for 60 shipments/day",
      "Push, email & SMS notifications",
      "Real-time updates",
      "Limited to 30 drivers",
      "Shipment analytics",
      "Full shipment history access",
    ],
  },
  {
    id: "PREMIUM",
    title: "PREMIUM PLAN",
    duration: "6 MONTHS",
    features: [
      "Custom branding (logo, emails, etc.)",
      "Shipment analytics",
      "Unlimited shipments",
      "Real-time location updates",
      "Unlimited user management",
      "Real-time map updates",
    ],
  },
];

const SelectSubscription = () => {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState("");

  useEffect(() => {
    const savedData = localStorage.getItem("companyDetails");
    if (!savedData) router.push("/");
  }, [router]);

  const handleSelect = (planId: string) => {
    setSelectedPlan(planId);
  };

  const handleSubmit = () => {
    const companyData = JSON.parse(localStorage.getItem("companyDetails") || "{}");
    companyData.subscriptionPlan = selectedPlan;
    console.log("Final Submission Data:", companyData);
    alert("Company Registered Successfully!");
    router.push("/");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-base-100 shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold text-center mb-6">Choose a Subscription Plan</h2>

      <div className="grid md:grid-cols-3 gap-4">
        {subscriptionPlans.map((plan) => (
          <div
            key={plan.id}
            onClick={() => handleSelect(plan.id)}
            className={`p-4 border rounded-lg cursor-pointer transition ${
              selectedPlan === plan.id ? "border-primary bg-primary text-white" : "border-gray-300"
            }`}
          >
            <h3 className="text-lg font-bold">{plan.title}</h3>
            <p className="text-sm mb-2">{plan.duration}</p>
            <ul className="text-sm space-y-1">
              {plan.features.map((feature, idx) => (
                <li key={idx}>✅ {feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-6">
        <button onClick={() => router.push("/")} className="btn btn-outline">
          Back
        </button>
        <button onClick={handleSubmit} className="btn btn-primary" disabled={!selectedPlan}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default SelectSubscription;
