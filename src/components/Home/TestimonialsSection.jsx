import React, { useEffect } from 'react';
import { Star, Quote } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TestimonialCard = ({ image, name, role, rating, quote }) => {
  return (
    <div
      data-aos="fade-up"
      className="relative bg-white dark:bg-[#1F2937] rounded-xl p-6 shadow-md border dark:border-gray-700 transition duration-300 hover:shadow-2xl"
    >
      {/* Decorative Quote Icon */}
      <div className="absolute top-4 right-4 bg-orange-600 p-2 rounded-full">
        <Quote className="text-white w-5 h-5" />
      </div>

      {/* Profile Info */}
      <div className="flex items-center mb-4">
        <img
          src={image}
          alt={name}
          className="w-14 h-14 rounded-full object-cover border-2 border-orange-600"
        />
        <div className="ml-4">
          <h4 className="text-lg font-semibold text-black dark:text-white">{name}</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
          <div className="flex mt-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Quote Text */}
      <p className="text-sm italic text-gray-600 dark:text-gray-300 leading-relaxed">
        "{quote}"
      </p>
    </div>
  );
};

const TestimonialsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const testimonials = [
    {
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
      name: "Priya Sharma",
      role: "Regular Commuter",
      rating: 5,
      quote: "IdharUdhar has transformed my daily commute. The drivers are always on time, and the cars are immaculate. I feel safe and comfortable every trip."
    },
    {
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      name: "Rahul Kapoor",
      role: "Business Executive",
      rating: 5,
      quote: "As someone who travels for work regularly, I rely on IdharUdhar for reliable intercity trip. Their corporate service is unmatched - professional drivers and excellent customer support."
    },
    {
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      name: "Ananya Patel",
      role: "College Student",
      rating: 4,
      quote: "The bike trips are perfect for my quick trips to college. Affordable and quick, especially during rush hour. The app is super easy to use and the rewards system is great!"
    },
    {
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
      name: "Vikram Singh",
      role: "Entrepreneur",
      rating: 5,
      quote: "I appreciate the focus on green transportation. As someone who cares about environmental impact, I choose IdharUdhar over other services. The electric vehicle options are wonderful."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-[#0f172a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">What Our Riders Say</h2>
          <div className="w-20 h-1 bg-orange-700 mx-auto mb-4 rounded" />
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
            Real voices from real riders who trust IdharUdhar for safe, reliable, and green transportation.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
