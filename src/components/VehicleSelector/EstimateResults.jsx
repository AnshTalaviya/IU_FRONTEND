import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Pencil } from "lucide-react";
import { motion } from "framer-motion";
import {
  FaMotorcycle,
  FaTruckPickup,
  FaTruckMoving,
  FaLocationArrow,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";

export default function EstimateResults() {
  const { state } = useLocation();

  const results = [
    { title: "2 Wheeler", price: "₹80 - ₹110", weight: "20 Kg", iconName: "FaMotorcycle" },
    { title: "Mini 3 Wheeler", price: "₹200 - ₹350", weight: "50 Kg", iconName: "FaTruckPickup" },
    { title: "3 Wheeler", price: "₹700 - ₹1200", weight: "500 Kg", iconName: "FaTruckPickup" },
    { title: "Tata Ace", price: "₹120 - ₹180", weight: "750 Kg", iconName: "MdLocalShipping" },
    { title: "Pickup 8 Ft.", price: "₹700 - ₹1200", weight: "1200 Kg", iconName: "FaTruckMoving" },
    { title: "Pickup 9 Ft.", price: "₹700 - ₹1200", weight: "1700 Kg", iconName: "FaTruckMoving" },
    { title: "Pickup 14 Ft.", price: "₹700 - ₹1200", weight: "2500 Kg", iconName: "FaTruckMoving" },
    // { title: "Heavy Duty", price: "₹700 - ₹1200", weight: "1000 Kg", iconName: "FaTruckMoving" },
    // { title: "Heavy Duty", price: "₹700 - ₹1200", weight: "1000 Kg", iconName: "FaTruckMoving" },
    // { title: "Heavy Duty", price: "₹700 - ₹1200", weight: "1000 Kg", iconName: "FaTruckMoving" },
    // { title: "Heavy Duty", price: "₹700 - ₹1200", weight: "1000 Kg", iconName: "FaTruckMoving" },
    // { title: "Heavy Duty", price: "₹700 - ₹1200", weight: "1000 Kg", iconName: "FaTruckMoving" },
  ];

  const iconMap = {
    FaMotorcycle: <FaMotorcycle className="text-4xl text-orange-600" />,
    FaTruckPickup: <FaTruckPickup className="text-4xl text-orange-600" />,
    MdLocalShipping: <MdLocalShipping className="text-4xl text-orange-600" />,
    FaTruckMoving: <FaTruckMoving className="text-4xl text-orange-600" />,
  };

  return (
    <div className="min-h-screen px-4 py-12 text-white bg-black">
      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-10 tracking-wide"
      >
        🚚 Estimate Results
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Left Side - Cards (no margin between) */}
        <div
          className="max-h-[600px] overflow-y-auto pr-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <style>{`::-webkit-scrollbar { display: none; }`}</style>

          {results.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="mb-4 last:mb-0 flex justify-between items-center p-5 bg-black/50 border border-white-300 rounded-xl shadow-xl transition duration-300"
            >
              <div className="flex items-center gap-4">
                <div>{iconMap[item.iconName]}</div>
                <div>
                  <h2 className="font-semibold text-white text-xl">{item.title}</h2>
                  <p className="text-white text-lg font-bold">{item.price}</p>
                </div>
              </div>
              <div className="bg-orange-600/60 px-4 py-2 rounded-full text-sm font-medium text-white shadow">
                 {item.weight}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Side - Pickup/Drop/QR */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-4 p-4 rounded-lg border border-orange-600">
            <FaLocationArrow className="text-xl" />
            <p className="text-white text-sm md:text-base font-medium">{state?.pickup}</p>
            <Pencil className="ml-auto text-gray-300 cursor-pointer" size={18} />
          </div>

          <div className="flex items-center gap-4 p-4 rounded-lg border border-orange-600">
            <FaMapMarkerAlt className=" text-xl" />
            <p className="text-white text-sm md:text-base font-medium">{state?.drop}</p>
            <Pencil className="ml-auto text-gray-300 cursor-pointer" size={18} />
          </div>

          <div className="bg-black/40 rounded-lg p-6 text-center border border-blue-900 shadow-inner">
            <h3 className="text-xl font-semibold text-white mb-3">Love what you see?</h3>
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://your-app-link"
              alt="QR Code"
              className="mx-auto"
            />
            <p className="text-sm text-gray-300 mt-2">Scan to download our app!</p>
          </div>
        </motion.div>

          {/* Book Now Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 px-6 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg shadow-lg transition duration-300"
          >
            <Link to="/bookingcomfirmation">
            Book Now
            </Link>
          </motion.button>
        

      </div>
    </div>
  );
}
