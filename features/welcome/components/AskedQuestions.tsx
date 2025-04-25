import React from "react";
import theo from "@/public/assets/images/theo.png";
import john from "@/public/assets/images/john.png";
import peter from "@/public/assets/images/peter.png";
import Image from "next/image";
import Link from "next/link";

const data = [
  {
    image: theo,
    name: "Theoneste",
    question: "Yesterday, I lost my package that was in your car H445DF",
  },
  {
    image: peter,
    name: "Peter",
    question:
      "Yesterday, I wasn't able to receive my package that was sent by my Parent Peter",
  },
  {
    image: john,
    name: "John ",
    question:
      "Today, I am given incorrect package, (it wasn't sent to me but, Bonheur)",
  },
];

const AskedQuestions = () => {
  return (
    <div className="relative">
      {data.map((driver, key) => (
        <div key={driver.name} className="flex  gap-4 items-center justify-start    mb-6">
          <div>
            <Image
              className="default w-12 h-12 object-fit-cover rounded-full"
              title="peter"
              src={driver.image}
              alt={`${driver.name}'s image`}
            />
          </div>
          <div
            key={key}
            className="flex flex-col items-start gap-2   rounded-lg  justify-center justify-content-center "
          >
            <h2 className="text-base-content">{driver.name}</h2>
            <p className="text-base-content bg-base-100 py-4 px-2 rounded-lg ">
            {driver.question}
          </p>
          </div>
         
        </div>
      ))}
      <div>
        <Link href={"/"} className="text-teal-300 absolute right-6">
          View All
        </Link>
      </div>
    </div>
  );
};

export default AskedQuestions;
