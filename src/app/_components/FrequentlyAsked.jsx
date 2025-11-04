"use client";
import React, { useState } from "react";
import { Plus } from "lucide-react";

const FrequentlyAsked = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Eassy Parking?",
      answer:
        "Eassy Parking is a smart parking solution that helps users find and reserve parking spots quickly and efficiently.",
    },
    {
      question: "How can I use Eassy Parking?",
      answer:
        "You can use Eassy Parking by signing up, searching for nearby parking spots, and reserving one through the app interface.",
    },
    {
      question: "Is online payment required?",
      answer:
        "Currently, payments are made directly to vendors in cash, but you still earn rewards and commissions through our app.",
    },
    {
      question: "Is online payment required?",
      answer:
        "Currently, payments are made directly to vendors in cash, but you still earn rewards and commissions through our app.",
    },
    {
      question: "Is online payment required?",
      answer:
        "Currently, payments are made directly to vendors in cash, but you still earn rewards and commissions through our app.",
    },
    {
      question: "Is online payment required?",
      answer:
        "Currently, payments are made directly to vendors in cash, but you still earn rewards and commissions through our app.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full p-4  py-20 md:py-20">
      <div className="max-w-[900px] mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-black/20 py-4 transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left"
            >
              <h3 className="text-black tracking-tight md:text-xl text-lg font-medium">
                {faq.question}
              </h3>

              {/* Icon rotation */}
              <div
                className={`transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-45" : "rotate-0"
                }`}
              >
                <Plus color="black" />
              </div>
            </button>

            {/* Smooth expand/collapse */}
            <div
              className={`overflow-hidden transition-all duration-500 ${
                openIndex === index
                  ? "max-h-40 opacity-100 pt-3"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-sm tracking-tight text-black/60">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrequentlyAsked;
