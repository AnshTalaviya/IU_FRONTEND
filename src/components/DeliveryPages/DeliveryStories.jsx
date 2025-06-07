import React from "react";
import { motion } from "framer-motion";

const stories = [
  {
    title: "Emergency Medicine in 25 mins",
    description:
      "Rahul from Pune urgently needed medicines for his mother. IdharUdhar delivered them in just 25 minutes — even faster than a local chemist!",
    img: "https://www.shutterstock.com/image-vector/25-minutes-timer-stopwatch-symbol-260nw-2185202643.jpg",
  },
  {
    title: "Birthday Cake Before Midnight",
    description:
      "Sneha in Mumbai forgot her friend’s birthday — booked IdharUdhar at 11:15 PM. Cake delivered at 11:50 PM, just in time to celebrate!",
    img: "https://www.faridabadcake.com/wp-content/uploads/2022/04/benefits-of-midnight-cake.jpeg",
  },
  {
    title: "Bulk Garment Shipment Delivered On Time",
    description:
      "A Delhi-based seller sent 12 boxes of garments to a store in Gurgaon. On-time, zero damage. Business saved. Customer retained.",
    img: "https://www.shutterstock.com/image-photo/closeup-view-female-online-store-600nw-1832128345.jpg",
  },
];

export default function DeliveryStories() {
  return (
    <section className="bg-gray-900 text-white py-16 px-6 max-w-6xl mx-auto rounded-xl shadow-2xl ">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-green-400">
        Real Deliveries. Real Stories.
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {stories.map((story, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img
              src={story.img}
              alt={story.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-300">
                {story.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {story.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
