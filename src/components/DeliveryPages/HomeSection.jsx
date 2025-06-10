import React from "react";
import { motion } from "framer-motion";



const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.5, ease: "easeOut" },
  }),
};

export default function HomeSections() {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-gray-300  text-gray-800 pb-20">
     
      {/* How It Works Section */}
      <section className=" px-6  rounded-xl max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-green-500">
          How IdharUdhar Works
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {[ 
            {
              number: "1",
              title: "Place Order",
              desc: "Choose pickup & drop location, and submit your request. It only takes a few seconds!",
            },
            {
              number: "2",
              title: "Pickup by Partner",
              desc: "A delivery partner near you picks up your item quickly and safely.",
            },
            {
              number: "3",
              title: "Fast Delivery",
              desc: "Your parcel is delivered in minutes. Track in real time and get instant confirmation.",
            },
          ].map((step, i) => (
            <motion.div
              key={step.number}
              custom={i}
              variants={stepVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="group flex flex-col items-center text-center relative
               bg-gray-900/10 dark:bg-gray-800 dark:text-gray-300  text-gray-800 p-6 rounded-xl transition-colors duration-300 hover:bg-green-700/20 dark:hover:bg-green-700/10  w-full md:w-72 min-h-[250px]"
            >
              <div className="bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-sm  max-w-xs">{step.desc}</p>
              {i < 2 && (
                <div className="hidden md:block absolute right-[-75px] top-25 text-green-400 text-3xl group-hover:text-white transition-colors duration-300">
                  ➜
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
