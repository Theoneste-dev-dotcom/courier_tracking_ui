const milestones = [
  { year: "2021", event: "Company Founded", description: "Our journey began with a mission to revolutionize the courier industry with innovative technology and seamless service." },
  { year: "2022", event: "Reached 10,000 Deliveries", description: "A major milestone achieved, reflecting the trust and satisfaction of our growing customer base." },
  { year: "2023", event: "Expanded Nationwide", description: "We proudly expanded our operations across the country, bringing reliable courier services to every corner." },
  { year: "2024", event: "Launched Mobile App", description: "Enhancing customer convenience with real-time tracking and easy access to our services on the go." },
  { year: "2025", event: "International Expansion", description: "Taking our expertise global, connecting businesses and individuals across borders." },
];

export default function Timeline() {
  return (
    <div className="flex items-center justify-center my-12 ">
    <div className="py-16 flex flex-col items-center  bg-slate-50 rounded-xl px-4 ">
      <h2 className=" text-3xl font-semibold text-center text-blue-600">Our Journey</h2>
      <p className="mt-4 text-center text-gray-600 max-w-xl">
        Discover the key milestones that have shaped our growth and commitment to excellence in the courier industry.
      </p>
      <div className="mt-10 space-y-8">
        {milestones.map((item, index) => (
          <div key={index} className="flex items-start gap-6">
            <div className="w-24 text-right">
              <span className="block text-xl font-bold text-blue-600">{item.year}</span>
            </div>
            <div className="flex-1 border-l-4 border-blue-500 pl-6">
              <h3 className="text-2xl font-semibold text-gray-800">{item.event}</h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
