// components/PricingPlan.tsx
import Image from "next/image";
import pricing from "@/public/assets/images/pricing.png";
export default function PricingPlan() {
    return (
      <div className="flex items-center justify-center px-6 py-16">
        <div className="w-96 p-8 bg-white  rounded-lg shadow-lg text-center border border-gray-200">
          <h3 className="text-2xl font-semibold text-gray-900">Courier Pro Plan</h3>
          <p className="text-4xl font-bold text-blue-600 mt-4">$99/month</p>
          <p className="text-gray-600 mt-2">For transportation businesses of all sizes.</p>
  
          <ul className="mt-6 space-y-3 text-gray-700 text-left">
            <li>✅ Real-time Shipment Tracking</li>
            <li>✅ Driver & Client Management</li>
            <li>✅ Secure Online Payments</li>
            <li>✅ Automated Notifications & Alerts</li>
            <li>✅ 24/7 Customer Support</li>
          </ul>
  
          <button className="mt-6 w-full py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700">
            Get Started
          </button>
        </div>
        </div>

    );
  }
  