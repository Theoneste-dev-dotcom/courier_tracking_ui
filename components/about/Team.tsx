import ceo from "@/public/assets/images/ceo.png";
import dev from "@/public/assets/images/dev.png";
import Image from "next/image";

const teamMembers = [
  { name: "Amani To Pray", role: "CEO & Founder", image: ceo, description: "A visionary leader with a passion for innovation and excellence." },
  { name: "Theoneste Dufite", role: "FullStack Developer", image: dev, description: "A skilled developer with expertise in building robust and scalable applications." },
];

export default function Team() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
    <div className=" py-16 px-32 flex flex-col gap-8 items-center dark:bg-slate-50  rounded-xl">
      <h2 className="text-4xl font-bold text-center text-blue-600 ">Meet Our Team</h2>
      <p className="text-center text-gray-700 max-w-2xl">
        Our dedicated team works tirelessly to ensure the best service for our clients. We are passionate about technology and committed to innovation.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-10">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 w-80">
            <Image className="rounded-lg object-cover h-60 w-60" src={member.image} alt={member.name} />
            <h3 className="mt-4 text-2xl font-semibold text-center text-gray-800">{member.name}</h3>
            <p className="text-gray-600 text-center text-lg">{member.role}</p>
            <p className="mt-2 text-gray-500 text-center">{member.description}</p>
          </div>
        ))}
      </div>

      <section className="mt-16 text-center max-w-3xl">
        <h3 className="text-3xl font-semibold text-blue-500">Our Commitment</h3>
        <p className="mt-4 text-gray-700">
          We believe in fostering a culture of trust, creativity, and continuous improvement. Our team members are encouraged to innovate and bring forward new ideas that can help us grow and serve our clients better.
        </p>
      </section>

      <section className="mt-12 text-center max-w-3xl">
        <h3 className="text-3xl font-semibold text-blue-500">Join Our Team</h3>
        <p className="mt-4 text-gray-700">
          We are always looking for talented individuals who share our vision and passion. If you're interested in becoming part of our dynamic team, feel free to reach out to us.
        </p>
      </section>
    </div>
    </div>
  );
}