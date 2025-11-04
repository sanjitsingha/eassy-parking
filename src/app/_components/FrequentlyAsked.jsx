"use client";
import React, { useState } from "react";
import { Plus } from "lucide-react";

const FrequentlyAsked = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Eassy Parking?",
      answer:
        "Eassy Parking is a smart parking platform that helps users find, book, and manage parking spaces easily. It connects users with verified parking vendors in their area.",
    },
    {
      question: "How do I list my parking space on Eassy Parking?",
      answer:
        "If you own or manage a parking space, you can list it on Eassy Parking by signing up and adding your space details, pricing, and location. Once approved, it becomes visible to nearby users.",
    },
    {
      question: "Do I need to pay online?",
      answer:
        "No, payments are made directly to the parking vendor in cash or via their own QR code. Eassy Parking does not handle any online transactions at the moment.",
    },
    {
      question: "Can I reserve a parking spot in advance?",
      answer:
        "Yes, you can check real-time availability and reserve your parking spot before you reach your destination, ensuring a hassle-free experience.",
    },
    {
      question: "Is my vehicle safe at listed parking spots?",
      answer:
        "All parking vendors on Eassy Parking are verified. However, users are advised to check vendor details and ensure they collect any entry or parking slip when parking.",
    },
    {
      question: "Does Eassy Parking charge any commission?",
      answer:
        "Eassy Parking earns a small commission from parking vendors for each successful booking. Users are not charged any additional fees.",
    },
    {
      question: "Can I use Eassy Parking without signing up?",
      answer:
        "You can browse nearby parking spots without signing up, but you’ll need an account to make a reservation or list your own space.",
    },
    {
      question: "How can I contact support?",
      answer:
        "You can reach our support team through the 'Help & Support' section in the app or by emailing us at eassyparking@gmail.com.",
    },
    {
      question: "Is Eassy Parking available in my city?",
      answer:
        "Eassy Parking is currently expanding to multiple cities. You can check availability inside the app by entering your city or location.",
    },
    {
      question: "Can I edit or remove my parking listing?",
      answer:
        "Yes, you can edit your space details, availability, or remove your listing anytime from your dashboard.",
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
