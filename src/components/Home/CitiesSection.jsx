import React, { useEffect, useState } from "react";
import { Search, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';



const CitiesSection: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  const [searchTerm, setSearchTerm] = useState("");

  const cities = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Hyderabad",
    "Chennai",
    "Kolkata",
    "Pune",
    "Ahmedabad",
    "Jaipur",
    "Surat",
    "Lucknow",
    "Kanpur",
    "Nagpur",
    "Indore",
    "Thane",
    "Bhopal",
  ];

  const filteredCities = cities.filter((city) =>
    city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Generate random positions for dots with animation properties
  const generateDots = () => {
    const dots = [];
    for (let i = 0; i < 50; i++) {
      dots.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        delay: Math.random() * 2,
        duration: Math.random() * 2 + 2,
        distance: Math.random() * 20 + 10
      });
    }
    return dots;
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-900 relative">

      {/* Animated Background Dots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {generateDots().map((dot) => (
          <motion.div
            key={dot.id}
            className="absolute bg-green-500/50 rounded-full"
            style={{
              left: `${dot.x}%`,
              top: `${dot.y}%`,
              width: `${dot.size}px`,
              height: `${dot.size}px`
            }}
            initial={{ opacity: 0, scale: 0, y: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -dot.distance, 0],
              transition: {
                opacity: {
                  delay: dot.delay,
                  duration: 0.7,
                  ease: "easeInOut"
                },
                scale: {
                  delay: dot.delay,
                  duration: 0.7,
                  ease: "easeInOut"
                },
                y: {
                  delay: dot.delay,
                  duration: dot.duration,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse"
                }
              }
            }}
          />
        ))}
      </div>
      <div className="container mx-auto px-4">
        <div
          data-aos="zoom-in"
          className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
            Available in 500+ Cities
          </h2>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            Book your ride anywhere in the country with our extensive coverage.
            We're rapidly expanding to reach every corner.
          </p>
        </div>

        <div className="max-w-md mx-auto mb-10 flex items-center relative rounded-full overflow-hidden focus-within:ring-2 focus-within:ring-green-500 transition-shadow duration-300">
          <Search className="absolute left-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search for a city..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-white dark:bg-[#020817] w-full dark:text-white rounded-full py-3 pl-10 pr-4 focus:outline-none"
            style={{ border: "1px solid gray" }}
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 text-center mb-8">
          {filteredCities.map((city, index) => (
            <Link
              key={index}
              to="#"
              className="relative dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-2 rounded-md group flex items-center justify-center min-w-[80px]"
            >
              <span>{city}</span>
              <span className="absolute right-2 top-[55%] -translate-y-[45%] w-6 h-6 rounded-2xl bg-green-500 flex items-center justify-center ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <MapPin size={16} className="text-white" />
              </span>
              <div className="absolute inset-0 bg-transparent group-hover:bg-green-500/10 rounded-md"></div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/Allcities" // Replace "/all-cities" with the actual path you want to link to
            className="w-full inline-flex items-center justify-center bg-green-500 hover:bg-transparent transition-colors text-white font-medium rounded-full px-6 py-3 border border-green-500 hover:text-green-500"
          >
            View All Cities
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-2"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CitiesSection;
