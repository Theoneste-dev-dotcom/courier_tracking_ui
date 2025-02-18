// components/CTA.tsx
export default function CTA() {
    return (
      <div className="text-center py-16 bg-gray-700 rounded-lg text-white">
        <h2 className="text-3xl font-semibold">Get Started with Our Mobile App</h2>
        <p className="mt-4 text-lg">Download the app to manage your shipments and track deliveries effortlessly.</p>
        
        <div className="mt-6 flex justify-center gap-4">
          <button className="btn btn-primary btn-lg bg-black text-white">
            📱 Download on App Store
          </button>
          <button className="btn btn-primary bg-white btn-lg">
            🤖 Get it on Google Play
          </button>
        </div>
      </div>
    );
  }
  