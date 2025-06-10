// import { useState } from "react";
// import { ChevronDown } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// const faqs = [
//   {
//     question: "How much does the mini truck transport service cost in Ahmedabad?",
//     answer:
//       "The pricing starts at ₹150 for the first 2 km and 30 minutes of loading time. Final charges vary based on distance, duration, and type of goods.",
//   },
//   {
//     question: "What is the weight limit for sending consignments via IdharUdhar Transport Service?",
//     answer:
//       "With IdharUdhar mini trucks, you can send goods weighing up to 700 kg—perfect for furniture, business supplies, and heavy items.",
//   },
//   {
//     question: "Does IdharUdhar Transport Service provide end-to-end delivery?",
//     answer:
//       "Yes, IdharUdhar provides complete logistics support including pickup, delivery, real-time tracking, and customer assistance.",
//   },
// ];

// export default function FaqSection() {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setOpenIndex(index === openIndex ? null : index);
//   };

//   return (
//     <section className="bg-white dark:bg-gray-900 dark:text-gray-300 text-gray-800 py-10 px-4">
//       <div className="max-w-3xl mx-auto text-center">
//         <h2 className="text-3xl font-bold text-green-500">Frequently Asked Questions</h2>
//         <p className="mt-2 text-sm dark:text-gray-400 text-gray-700">
//           Have more questions? Contact IdharUdhar Transport Service for help.
//         </p>
//       </div>

//       <div className="max-w-3xl mx-auto mt-8 space-y-4">
//         {faqs.map((faq, index) => (
//           <div
//             key={index}
//             className="border-b border-gray-700 pb-4 cursor-pointer"
//             onClick={() => toggleFAQ(index)}
//           >
//             <div className="flex justify-between items-center">
//               <h3 className="text-lg dark:text-gray-300 text-gray-800 font-medium">{faq.question}</h3>
//               <ChevronDown
//                 className={`h-5 w-5 transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
//                   }`}
//               />
//             </div>
//             <AnimatePresence>
//               {openIndex === index && (
//                 <motion.p
//                   initial={{ opacity: 0, height: 0 }}
//                   animate={{ opacity: 1, height: "auto" }}
//                   exit={{ opacity: 0, height: 0 }}
//                   transition={{ duration: 0.3 }}
//                   className="text-md dark:text-gray-400 text-gray-700 mt-2 overflow-hidden"
//                 >
//                   {faq.answer}
//                 </motion.p>
//               )}
//             </AnimatePresence>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How much does the Packers and Movers service cost in Ahmedabad?",
    answer:
      "Prices for IdharUdhar Packers and Movers start at ₹499, depending on the distance, volume of goods, and service type (packing, loading, unloading, etc.). You’ll receive a full estimate before booking.",
  },
  {
    question: "What types of items can I move using IdharUdhar Packers and Movers?",
    answer:
      "You can move everything from household items like furniture and appliances to office equipment and delicate items. We provide professional packing to ensure safety.",
  },
  {
    question: "Does IdharUdhar Packers and Movers provide full-service relocation?",
    answer:
      "Yes, we offer end-to-end solutions including packing, loading, transportation, unloading, and even unpacking upon request — all handled by trained professionals.",
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
        <h2 className="text-3xl font-bold text-green-500">Frequently Asked Questions</h2>
        <p className="mt-2 text-sm dark:text-gray-400 text-gray-700">
          Have more questions? Contact IdharUdhar Packers and Movers for assistance.
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
              <h3 className="text-lg dark:text-gray-300 text-gray-800 font-medium">
                {faq.question}
              </h3>
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
                  className="text-md dark:text-gray-400 text-gray-700 mt-2 overflow-hidden"
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
