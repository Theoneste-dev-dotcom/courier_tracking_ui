import React from 'react';

const PricingTable = () => {
  const plans = [
    {
      name: "Basic",
      price: "$10/month",
      features: ["Real-time tracking", "Driver management", "Up to 100 shipments"],
    },
    {
      name: "Pro",
      price: "$30/month",
      features: ["All Basic features", "Advanced analytics", "Unlimited shipments"],
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: ["All Pro features", "Dedicated support", "Custom integrations"],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {plans.map((plan, index) => (
        <div key={index} className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{plan.name}</h2>
            <p className="text-2xl font-bold">{plan.price}</p>
            <ul className="my-4">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span>✔️</span> {feature}
                </li>
              ))}
            </ul>
            <div className="card-actions">
              <button className="btn btn-primary w-full">Choose Plan</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricingTable;