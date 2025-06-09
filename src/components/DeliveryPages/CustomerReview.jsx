import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Khush",
    service: "Trucks",
    rating: "4.5",
    location: "Nagpur",
    review:
      "Way better than naaka waalas. Have shifted all my logistics needs to Porter and I can now safely focus on my business growth. Amazing service!",
  },
  {
    name: "Ansh",
    service: "Trucks",
    rating: "3.9",
    location: "Mumbai",
    review:
      "Excellent service by multiple drivers. I own a business and do multiple shiftings. Rather than ask local drivers and bargain every time, I use porter which fulfils all my need. Thanks a lot!",
  },
  {
    name: "Krishna",
    service: "Trucks",
    rating: "5.0",
    location: "Delhi NCR",
    review:
      "Have had an amazing experience. Had three successful deliveries where it’s a struggle to arrange a tempo service for your desired pickup and drop off. Must try this app!",
  },
  {
    name: "Sujal",
    service: "Packers ",
    rating: "4.8",
    location: "Hyderabad",
    review:
      "Smooth experience with Porter's packers and movers! The team was fantastic, handling every detail. Highly recommend their services!",
  },
];

export default function CustomerReview() {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-gray-300  text-gray-800  pb-30">

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-gradient-to-r from-gray-900 via-gray-300 to-gray-900 text-white py-14 px-6 max-w-6xl mx-auto  "
      >
        <h2 className="text-center text-3xl md:text-4xl font-bold dark:text-green-500 text-black mb-12 tracking-wide">
          <span className="inline-block ">What Our Customers Say</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.02,
                // rotateZ: 1,
                boxShadow: "0 10px 20px rgba(99, 241, 158, 0.5)", // green-500 shadow
                transition: { duration: 0.3 },
              }}
              className="relative group dark:bg-gray-900 bg-white  dark:text-gray-300  text-gray-800  border-l-4 border-green-500 p-6 rounded-lg shadow-md "
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-600   flex items-center justify-center rounded-full text-lg font-bold">
                  {testimonial.name[0]}
                </div>
                <div>
                  <h4 className="font-semibold ">{testimonial.name}</h4>
                  <p className="text-sm ">
                    {testimonial.service}, {testimonial.rating} ⭐
                    <br />
                    {testimonial.location}
                  </p>
                </div>
              </div>
              <p className=" text-sm leading-relaxed">
                “{testimonial.review}”
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
