import React from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "John Doe",
    role: "Managing Manager",
    quote: "This platform has transformed our operations. Real-time tracking is a game-changer!",
    image: "/assets/images/peter.png",
    date: "01/01/2023",
    rating: 5,
  },

  {
    name: "Samuel Green",
    role: "Product Manager",
    quote: "A revolutionary product that truly enhances delivery tracking efficiency.",
    image: "/assets/images/samuel.png",
    date: "20/07/2023",
    rating: 4,
  },
  {
    name: "Samuel Green",
    role: "Product Manager",
    quote: "A revolutionary product that truly enhances delivery tracking efficiency.",
    image: "/assets/images/samuel.png",
    date: "20/07/2023",
    rating: 4,
  },


  {
    name: "SoPhia Brown",
    role: "Tech Consultant",
    quote: "The real-time features are simply outstanding. It has improved our workflow dramatically.",
    image: "/assets/images/sophia.png",
    date: "25/08/2023",
    rating: 5,
  },

  {
    name: "Darius Peter",
    role: "Product Manager",
    quote: "A revolutionary product that truly enhances delivery tracking efficiency.",
    image: "/assets/images/samuel.png",
    date: "20/07/2023",
    rating: 4,
  },
  {
    name: "Darius Peter",
    role: "Product Manager",
    quote: "A revolutionary product that truly enhances delivery tracking efficiency.",
    image: "/assets/images/samuel.png",
    date: "20/07/2023",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <div className="items-center justify-center flex my-12" >
    <div className="carousel carousel-center rounded-box space-x-4 space-y-4 w-2/3">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="carousel-item card bg-gray-800  shadow-lg p-4 w-80 ">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            width={80}
            height={80}
            className="rounded-full object-cover mx-auto mb-4"
          />
          <div className="card-body text-center">
            <p className="italic">"{testimonial.quote}"</p>
            <p className="font-bold mt-2">{testimonial.name}</p>
            <p className="text-sm text-gray-500">{testimonial.role}</p>
            <div className="flex justify-center mt-2">
              {Array.from({ length: testimonial.rating }, (_, i) => (
                <span key={i} className="text-yellow-500">★</span>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-1">Reviewed on {testimonial.date}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Testimonials;
