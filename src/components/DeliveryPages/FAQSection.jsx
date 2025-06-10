import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is IdharUdhar?",
    answer:
      "IdharUdhar is a reliable and fast delivery service platform where you can easily send your items — whether personal or business-related. It offers multiple options like bike delivery, mini-truck booking, and even packers & movers. You can send items urgently within your city or even intercity without any hassle. IdharUdhar’s goal is to make every delivery simple, safe, and affordable — with real-time tracking and responsive support.",
  },
  {
    question: "How do I book a delivery?",
    answer:
      "Booking is super easy. Just go to IdharUdhar’s official website or mobile app and enter your pickup and drop-off locations. Then, select the type of vehicle — bike, mini-truck, tempo, or packers & movers, depending on your need. You'll see an estimated fare. Confirm it and you’ll instantly get driver details. The whole process takes just a few steps — no lengthy forms, no confusion. You can even schedule an advance booking if needed.",
  },
  {
    question: "Which cities are covered?",
    answer:
      "IdharUdhar is currently active in 20+ major cities across India including Delhi, Mumbai, Bengaluru, Hyderabad, Pune, Ahmedabad, Jaipur, Lucknow, Chandigarh, Indore, Bhopal, Kochi, Surat, and more. We're expanding quickly to new cities so that users from every region have access to reliable delivery. You can check availability for your city directly on the app.",
  },
  {
    question: "How are the delivery charges calculated?",
    answer:
      "Delivery charges are calculated transparently and fairly. They mainly depend on three factors: (1) Distance — how many kilometers need to be covered, (2) Vehicle type — bike, mini-truck, tempo, etc., since each has different fuel and capacity costs, and (3) Timing — especially if it’s during peak hours or for an urgent delivery. Occasionally, charges for tolls, waiting time, or loading/unloading may apply. But everything is shown upfront in the estimated fare — no hidden costs.",
  },
  {
    question: "Is same-day delivery available?",
    answer:
      "Absolutely! Fast and efficient delivery is IdharUdhar’s top priority. If you're delivering within the city, we usually complete it the same day — often within just a few hours. This is perfect for urgent documents, gifts, groceries, medicines, or any last-minute need. If you book in the morning, your package usually reaches the receiver the same day. You also get real-time tracking and active support for peace of mind.",
  },
  {
    question: "How do I get customer support?",
    answer:
      "IdharUdhar offers 24/7 customer support — day or night. You can use live chat via the app or website to get help from trained support agents. For urgent matters, you can also call the support number or send an email. Whether it’s a booking issue, driver delay, parcel update, or payment query — support is quick and responsive.",
  },
  {
    question: "Do you support bulk orders?",
    answer:
      "Yes, IdharUdhar is not just for individuals — it’s also perfect for **businesses and bulk delivery needs**. If you're an e-commerce seller, distributor, or part of a B2B supply chain, you can use our **Enterprise Solutions**. This includes API access for direct system integration, scheduled pickups, monthly billing options, a dedicated dashboard, and business-grade customer support.",
  },
  {
    question: "Is parcel tracking available?",
    answer:
      "Yes, every delivery comes with a live tracking link that’s shared via SMS or email. Using this link, you can see where the delivery partner is in real time, the estimated delivery time, and receive confirmation once it’s delivered. This feature is especially helpful when sending packages to others or if you need proof of delivery. It ensures both transparency and trust.",
  },
];
export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-900 text-white py-7 px-6 max-w-4xl mx-auto rounded-xl shadow-2xl ">
      <h2 className="text-3xl font-bold text-indigo-400 text-center mb-10 tracking-wide">
        FAQs - Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`rounded-xl overflow-hidden transition-colors duration-500 border ${
                isOpen
                  ? "bg-indigo-150 border-indigo-100"
                  : "bg-gray-800 border-gray-700"
              }`}
            >
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-medium transition-all duration-300 ease-in-out"
                onClick={() => toggleFaq(index)}
              >
                <span>{faq.question}</span>
                {isOpen ? (
                  <ChevronUp className="text-indigo-400" />
                ) : (
                  <ChevronDown className="text-indigo-400" />
                )}
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-base text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
