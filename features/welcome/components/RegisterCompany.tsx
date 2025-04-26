"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectToken } from "@/features/user/authSlice";
import PhoneInputComponent from "@/components/Input/PhoneNumber";

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

const RegisterCompany = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    subscriptionPlan: "",
  });

  const token = localStorage.getItem("token");

  if (!token) {
    router.push("/login");
  }

  // const [registerCompany, {isLoading, isError, isSuccess}]  = useRegisterCompanyMutation();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2); // Move to subscription selection
  };

  const handleSelectPlan = (planId: string) => {
    setFormData({ ...formData, subscriptionPlan: planId });
  };

  const handleSubmit = async () => {
    try {
      console.log(formData, "token=> ", token);
      const response = await axios.post(
        "http://localhost:3001/companies",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      window.location.reload();
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  const updateFormValue = ({
    updateType,
    value,
  }: {
    updateType: string;
    value: string;
  }) => {
   
    setFormData({ ...formData, [updateType]: value });
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-base-100 shadow-lg rounded-xl">
      {step === 1 ? (
        // Step 1: Company Details
        <form onSubmit={handleNext} className="space-y-4">
          <h2 className="text-2xl font-bold text-center mb-4 text-base-content">
            Register Your Company
          </h2>

          <div>
            <label className="label">
              <span className="label-text">Company Name</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter company name"
              className="input input-bordered w-full text-base-content"
              required
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter address"
              className="input input-bordered w-full text-base-content"
              required
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              className="input input-bordered w-full text-base-content"
              required
            />
          </div>

          <div>
            <PhoneInputComponent
              type="tel"
              defaultValue={formData.phone}
              updateType="phone"
              containerStyle="mt-4"
              labelTitle="Phone Number"
              updateFormValue={updateFormValue}
            />
          </div>

          <div className="flex justify-end">
            <button type="submit" className="btn btn-primary">
              Next
            </button>
          </div>
        </form>
      ) : (
        // Step 2: Subscription Selection
        <div>
          <h2 className="text-2xl font-bold text-center mb-6 text-base-content ">
            Choose a Subscription Plan
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            {subscriptionPlans.map((plan) => (
              <div
                key={plan.id}
                onClick={() => handleSelectPlan(plan.id)}
                className={`p-4 border rounded-lg cursor-pointer transition  dark:hover:bg-teal-950  ${
                  formData.subscriptionPlan === plan.id
                    ? "border-primary light:text-white bg-teal-800 dark:hover:bg-teal-900 light:hover:bg-teal-900 text-white"
                    : "border-gray-300 "
                }`}
              >
                <h3 className="text-lg font-bold text-base-content">
                  {plan.title}
                </h3>
                <p className="text-sm mb-2 text-base-content">
                  {plan.duration}
                </p>
                <ul className="text-sm space-y-1">
                  {plan.features.map((feature, idx) => (
                    <li
                      className="text-base-content py-2 hover:bg-base-200 px-1 rounded-lg  transition-all"
                      key={idx}
                    >
                      ✅ {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex justify-between mt-6">
            <button onClick={() => setStep(1)} className="btn btn-outline">
              Back
            </button>
            <button
              onClick={handleSubmit}
              className="btn btn-primary"
              disabled={!formData.subscriptionPlan}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisterCompany;
