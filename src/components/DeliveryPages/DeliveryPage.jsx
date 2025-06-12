import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMotorcycle, FaTruckMoving, FaCity } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    name: "Bike Delivery",
    description: "Fast and flexible delivery within the city.",
    icon: <FaMotorcycle className="text-green-400 text-4xl mb-2" />,
  },
  {
    name: "Mini Trucks",
    description: "Reliable transport for medium-sized loads.",
    icon: <FaTruckMoving className="text-green-400 text-3xl" />,
  },
  {
    name: "Moving Services",
    description: "Safe and efficient home or office relocation.",
    icon: <MdLocalShipping className="text-green-400 text-3xl" />,
  },
  {
    name: "City to City",
    description: "Long distance deliveries across cities.",
    icon: <FaCity className="text-green-400 text-3xl" />,
  },
];

const cities = [
  "Ahmedabad", "Bangalore", "Chandigarh", "Chennai", "Coimbatore", "Delhi",
  "Hyderabad", "Indore", "Jaipur", "Kanpur", "Kochi", "Kolkata", "Lucknow",
  "Ludhiana", "Mumbai", "Nagpur", "Nashik", "Pune", "Surat", "Trivandrum",
  "Vadodara", "Visakhapatnam"
];

export default function DeliveryPage() {
  const [isCityModalOpen, setIsCityModalOpen] = useState(false);
  const [isEstimateOpen, setIsEstimateOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Delhi");
  const navigate = useNavigate();

  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;

    if (isCityModalOpen || isEstimateOpen) {
      body.style.overflow = "hidden";
      html.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
      html.style.overflow = "auto";
    }

    return () => {
      body.style.overflow = "auto";
      html.style.overflow = "auto";
    };
  }, [isCityModalOpen, isEstimateOpen]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 dark:text-gray-300 text-gray-800 scroll-smooth relative">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative flex items-center justify-center h-[400px] bg-gray-800 rounded-b-3xl overflow-hidden shadow-inner"
      >
        <img
          src="https://img.freepik.com/free-photo/young-courier-his-colleague-unloading-cardboard-boxes-from-delivery-van_637285-2293.jpg?semt=ais_hybrid&w=740"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
        <div className="relative z-10 text-center px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-white drop-shadow">
            Kya delivery chahiye?
          </h2>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-green-400 mt-2">
            #SabHoJayega
          </h1>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="bg-white dark:bg-gray-800 dark:text-gray-300 text-gray-800 p-6 sm:p-10 rounded-xl shadow-xl max-w-6xl mx-auto -mt-16 relative z-20"
      >
        <div className="flex flex-wrap items-center mb-6 gap-2">
          <IoLocationSharp className="text-xl text-green-500" />
          <span>City:</span>
          <span
            className="text-green-500 font-semibold underline cursor-pointer hover:text-green-400"
            onClick={() => setIsCityModalOpen(true)}
          >
            {selectedCity}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * idx, duration: 0.4 }}
              className="flex flex-col items-center justify-center text-center gap-2 p-4 rounded-xl bg-gray-900/5 dark:bg-gray-700 dark:text-gray-300 text-gray-800 dark:hover:bg-green-900/30 hover:bg-green-300/30 transition-all cursor-pointer"
              onClick={() => {
                if (service.name === "Bike Delivery") {
                  navigate(`/services/bike-delivery?city=${selectedCity}`);
                } else if (service.name === "Mini Trucks") {
                  navigate(`/services/mini-trucks?city=${selectedCity}`);
                } else if (service.name === "Moving Services") {
                  navigate(`/services/move-service?city=${selectedCity}`);
                } else if (service.name === "City to City") {
                  navigate(`/services/city-to-city?city=${selectedCity}`);
                }
              }}
            >
              {service.icon}
              <p className="text-sm font-medium">{service.name}</p>
              {service.description && (
                <p className="text-xs text-gray-400 leading-snug max-w-[140px]">
                  {service.description}
                </p>
              )}
            </motion.div>
          ))}

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center justify-center bg-green-500 text-white p-4 rounded-xl hover:bg-green-600 transition text-center cursor-pointer"
            onClick={() => setIsEstimateOpen(true)}
          >
            <p className="text-sm font-semibold">
              Get an estimate
              <br />
              <span className="text-xs">(in 2 minutes)</span>
            </p>
            <button className="text-white mt-2 text-xl">→</button>
          </motion.div>
        </div>
      </motion.section>

      {/* City Modal */}
      <AnimatePresence>
        {isCityModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCityModalOpen(false)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-gray-900 dark:text-gray-300 text-gray-800 p-6 rounded-lg w-[90%] max-w-3xl max-h-[90vh] overflow-y-auto relative shadow-xl"
              initial={{ y: "-30%", opacity: 0 }}
              animate={{ y: "0", opacity: 1 }}
              exit={{ y: "-30%", opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setIsCityModalOpen(false)}
                className="absolute top-3 right-4 text-gray-600 hover:text-red-500 text-2xl font-bold focus:outline-none"
              >
                &times;
              </button>

              <h2 className="text-xl font-bold text-center mb-4">
                Choose your city
              </h2>

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                {cities.map((city, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setSelectedCity(city);
                      setIsCityModalOpen(false);
                    }}
                    className="cursor-pointer border border-gray-300 rounded-md p-3 text-center text-sm font-medium hover:bg-green-600 transition"
                  >
                    {city}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Estimate Modal */}
      <AnimatePresence>
        {isEstimateOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black bg-opacity-60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsEstimateOpen(false)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl w-full max-w-4xl h-[380px] overflow-hidden flex shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Left Section */}
              <div className="w-[40%] bg-[#1f2b3a] p-8 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-[#e5e7eb] mb-3">Get an Estimate</h2>
                <p className="text-[#cbd5e1] text-base leading-relaxed">
                  Select the service you’re interested in and we’ll help you estimate your delivery in just 2 minutes.
                </p>
              </div>

              {/* Right Section */}
              <div className="w-[60%] bg-[#10141c] text-[#e5e7eb] p-6 relative overflow-y-auto">
                <button
                  onClick={() => setIsEstimateOpen(false)}
                  className="absolute top-4 right-4 text-gray-600 hover:text-red-500 transition"
                  aria-label="Close"
                >
                  <X className="w-5 h-5 text-gray-200" />
                </button>

                <div className="grid grid-cols-1 gap-3 mt-6">
                  {[
                    { name: "Two Wheelers", icon: <FaMotorcycle className="text-green-500 text-xl" /> },
                    { name: "Mini Trucks", icon: <FaTruckMoving className="text-yellow-500 text-xl" /> },
                    { name: "Packers & Movers", icon: <MdLocalShipping className="text-blue-600 text-xl" /> },
                    { name: "City-to-City Courier", icon: <FaCity className="text-purple-600 text-xl" /> },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between border border-gray-700 rounded-lg p-3 hover:bg-[#1a1f2b] transition cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        {item.icon}
                        <span className="font-medium text-[#e5e7eb]">{item.name}</span>
                      </div>
                      <span className="text-gray-200 text-xl">›</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}