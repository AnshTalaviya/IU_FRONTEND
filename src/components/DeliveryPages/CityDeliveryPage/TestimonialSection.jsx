import React from "react";

const testimonials = [
  {
    name: "Neha Verma",
    rating: 5.0,
    location: "Chandigarh",
    review:
      "I have used Porter for sending intercity couriers. I recommend Porter intercity courier service because it is highly reliable and makes timely deliveries.",
  },
  {
    name: "Rohan Mehta",
    rating: 4.0,
    location: "Delhi",
    review:
      "With Porter Intercity Courier services, I experienced smooth and timely delivery of my couriers. Highly recommended.",
  },
  {
    name: "Sneha Kapoor",
    rating: 5.0,
    location: "Kolkata",
    review:
      "Got really good courier service from Porter! They sent my parcel to a farway city in India. Very impressed!",
  },
  {
    name: "Yusuf Khan",
    rating: 5.0,
    location: "Delhi",
    review:
      "Sending the package was super easy. Porter Intercity courier service is very convenient and cheap.",
  },
];

const TestimonialSection = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-gray-300  text-gray-800 py-5  px-4 sm:px-8 lg:px-16">
      <h2 className="text-center text-3xl text-green-500 font-bold  mb-10">
        Some words from our happy customers!
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="dark:bg-gray-800 bg-gray-900/10 p-6 rounded-lg shadow dark:hover:bg-gray-700 hover:bg-gray-900/20 transition-colors duration-300"
          >
            <div className="flex items-center mb-3 ">
              <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-lg font-bold mr-3">
                {testimonial.name.charAt(0)}
              </div>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm ">
                  Courier, {testimonial.rating} ⭐<br />
                  {testimonial.location}
                </p>
              </div>
            </div>
            <p className="text-sm dark:text-gray-300/70  text-gray-800/70 leading-relaxed">{testimonial.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
