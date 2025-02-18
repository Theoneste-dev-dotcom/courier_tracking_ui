// components/ServiceList.tsx
export default function ServiceList() {
    const services = [
      {
        icon: "🚚",
        title: "Real-Time Tracking",
        description: "Track your shipments in real-time with live location updates.",
      },
      {
        icon: "📦",
        title: "Package Management",
        description: "Easily manage, update, and view all your shipment details in one place.",
      },
      {
        icon: "💳",
        title: "Secure Payments",
        description: "Make secure online payments for deliveries with multiple payment options.",
      },
      {
        icon: "📢",
        title: "Instant Notifications",
        description: "Receive SMS, email, and push notifications for delivery updates.",
      },
      {
        icon: "🛠️",
        title: "Admin Dashboard",
        description: "Manage clients, drivers, and shipments through an intuitive dashboard.",
      },
    ];
  
    return (
      <div className="py-16 px-6 grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="card bg-white shadow-xl p-6 text-center border border-gray-200">
            <div className="text-5xl">{service.icon}</div>
            <h3 className="text-2xl font-semibold mt-4 text-gray-700">{service.title}</h3>
            <p className="mt-2 text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    );
  }
  