export default function Mission() {
  return (
    <div className="flex items-center justify-center bg-gray-60 py-16 px-6">
      <div className="max-w-5xl text-left bg-white shadow-xl rounded-xl p-10 mx-4">
        <h2 className="text-4xl font-bold text-primary text-center mb-6">Our Mission & Vision</h2>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          Our mission is to revolutionize package delivery with <strong className="text-primary">real-time tracking</strong> and 
          efficient logistics, ensuring seamless experiences for both clients and transportation companies. 
          We aim to create a network where transparency, speed, and security are at the forefront of every shipment.
        </p>

        <h3 className="mt-8 text-3xl font-semibold text-primary">Vision Statement</h3>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          Our vision is to be the global leader in courier management, 
          connecting people and businesses with smart, innovative, and reliable delivery solutions.
        </p>

        <h3 className="mt-8 text-3xl font-semibold text-primary">Core Values</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
          <span className="px-4 py-3 btn btn-primary rounded-md shadow-md">Trust</span>
          <span className="px-4 py-3 btn btn-primary rounded-md shadow-md">Innovation</span>
          <span className="px-4 py-3 btn btn-primary rounded-md shadow-md">Reliability</span>
          <span className="px-4 py-3 btn btn-primary rounded-md shadow-md">Integrity</span>
          <span className="px-4 py-3 btn btn-primary rounded-md shadow-md">Customer Focus</span>
          <span className="px-4 py-3 btn btn-primary rounded-md shadow-md">Sustainability</span>
        </div>

        <h3 className="mt-8 text-3xl font-semibold text-primary">Why Choose Us?</h3>
        <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
          <li>Real-time package tracking for complete transparency.</li>
          <li>Efficient and secure delivery management for businesses and individuals.</li>
          <li>24/7 customer support to address your needs promptly.</li>
          <li>Advanced technology ensuring smooth operations and logistics.</li>
          <li>Dedicated teams focused on providing exceptional service.</li>
        </ul>
      </div>
    </div>
  );
}
