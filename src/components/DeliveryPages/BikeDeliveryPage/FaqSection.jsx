import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How much does the pickup and drop consignment service by two-wheeler cost in Ahmedabad?",
    answer: "The cost depends on distance, weight, and time. Please check the app for an accurate quote.",
  },
  {
    question: "What is the weight limit for sending consignments by Porter?",
    answer: "The maximum weight limit for two-wheeler deliveries is 20kg.",
  },
  {
    question: "Does Porter provide end-to-end delivery?",
    answer: "Yes, Porter provides end-to-end logistics including pickup, delivery, and tracking.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="bg-white dark:bg-gray-900 dark:text-gray-300 text-gray-800 py-10 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-green-400">Frequently Asked Questions</h2>
        <p className="mt-2 text-sm dark:text-gray-400 text-gray-700">
          In case you have more questions, feel free to reach out to us.
        </p>
      </div>

      <div className="max-w-3xl mx-auto mt-8 space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-700 pb-4 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className=" text-lg dark:text-gray-300 text-gray-800 font-medium">{faq.question}</h3>
              <ChevronDown
                className={`h-5 w-5 transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>
            <AnimatePresence>
              {openIndex === index && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-md dark:text-gray-400 text-gray-700  mt-2 overflow-hidden"
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
