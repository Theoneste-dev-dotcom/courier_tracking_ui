import React, { useState } from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: "How does real-time tracking work?",
      answer: "Our system uses GPS to provide live updates on shipment locations.",
    },
    {
      question: "Can I manage multiple drivers?",
      answer: "Yes, our platform supports managing multiple drivers and vehicles.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="collapse collapse-arrow bg-base-200">
          <input
          title='chck'
            type="checkbox"
            checked={activeIndex === index}
            onChange={() => setActiveIndex(activeIndex === index ? null : index)}
          />
          <div className="collapse-title text-xl font-medium">
            {faq.question}
          </div>
          <div className="collapse-content">
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;