import React from 'react';
import { motion } from 'framer-motion';
import { DoorOpen, Clock, FileText } from 'lucide-react';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: 'easeOut'
    }
  })
};

const IntercityBenefits = () => {
  return (
    <section className="bg-white dark:bg-gray-900 dark:text-gray-300  text-gray-800 py-12 px-4 md:px-20 text-center">
      <h2 className="text-2xl md:text-3xl text-green-600 font-bold mb-4">
        Why is Porter your go-to for Intercity Courier Services?
      </h2>
      <p className=" mb-10 max-w-3xl mx-auto">
        Your reliable intercity courier partner to ship all your parcels to 19000+ Indian pincodes. 
        Hassle-free & easy to send couriers for all individuals and businesses.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[{
          icon: <DoorOpen size={36} strokeWidth={2.5} />, 
          title: "Door-to-Door Delivery", 
          desc: "Enjoy doorstep pick-up & delivery with Porter Intercity Courier Services"
        }, {
          icon: <Clock size={36} strokeWidth={2.5} />, 
          title: "Timely Deliveries", 
          desc: "Choose the mode of intercity courier delivery, via air or surface, for reliable and on-time parcel deliveries"
        }, {
          icon: <FileText size={36} strokeWidth={2.5} />, 
          title: "Shipping Label Printing On Us", 
          desc: "Just mention your CR number and we take care of printing shipping labels for you"
        }].map((card, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center transition-colors duration-300 dark:hover:bg-green-800/30 hover:bg-gray-900/10 p-6 rounded-xl"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <div className="bg-green-600 hover:bg-green-700 text-white rounded-full p-4 mb-4">
              {card.icon}
            </div>
            <h3 className="font-bold text-lg mb-2">{card.title}</h3>
            <p className="  max-w-xs">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default IntercityBenefits;
