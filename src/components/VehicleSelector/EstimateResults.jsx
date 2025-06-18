import React from "react";
import { useLocation } from "react-router-dom";
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
    {
      title: "Quick & Light",
      price: "₹80 - ₹110",
      weight: "10 Kg",
      iconName: "FaMotorcycle",
    },
    {
      title: "Medium & Safe",
      price: "₹120 - ₹180",
      weight: "50 Kg",
      iconName: "FaTruckPickup",
    },
    {
      title: "Spacious & Strong",
      price: "₹200 - ₹350",
      weight: "80 Kg",
      iconName: "MdLocalShipping",
    },
    {
      title: "Heavy Duty",
      price: "₹700 - ₹1200",
      weight: "1000 Kg",
      iconName: "FaTruckMoving",
    },
  ];

  const iconMap = {
    FaMotorcycle: <FaMotorcycle className="text-4xl text-green-400" />,
    FaTruckPickup: <FaTruckPickup className="text-4xl text-yellow-400" />,
    MdLocalShipping: <MdLocalShipping className="text-4xl text-blue-400" />,
    FaTruckMoving: <FaTruckMoving className="text-4xl text-red-400" />,
  };

  return (
    <div className="min-h-screen px-4 py-12 text-white bg-gradient-to-br from-black via-gray-900 to-black">
      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-10 tracking-wide"
      >
        🚚 Estimate Results
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Left Side - Vehicle Estimate Cards */}
        <div className="space-y-6">
          {results.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="flex justify-between items-center p-6 bg-black/50 rounded-xl shadow-xl border border-green-800"
            >
              <div className="flex items-center gap-4">
                <div>{iconMap[item.iconName]}</div>
                <div>
                  <h2 className="font-semibold text-white text-xl">{item.title}</h2>
                  <p className="text-green-400 text-lg font-bold">{item.price}</p>
                </div>
              </div>
              <div className="bg-green-900/60 px-4 py-2 rounded-full text-sm font-medium text-white shadow">
                🏋️‍♂️ {item.weight}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Side - Pickup/Drop & QR */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          {/* Pickup */}
          <div className="flex items-center gap-4 p-4 rounded-lg border border-green-700">
            <FaLocationArrow className="text-green-400 text-xl" />
            <p className="text-white text-sm md:text-base font-medium">{state?.pickup}</p>
            <Pencil className="ml-auto text-gray-300 cursor-pointer" size={18} />
          </div>

          {/* Drop */}
          <div className="flex items-center gap-4 p-4 rounded-lg border border-red-700">
            <FaMapMarkerAlt className="text-red-400 text-xl" />
            <p className="text-white text-sm md:text-base font-medium">{state?.drop}</p>
            <Pencil className="ml-auto text-gray-300 cursor-pointer" size={18} />
          </div>

          {/* QR Code */}
          <div className="bg-black/40 rounded-lg p-6 text-center border border-blue-900 shadow-inner">
            <h3 className="text-xl font-semibold text-white mb-3">Love what you see? ❤️</h3>
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://your-app-link"
              alt="QR Code"
              className="mx-auto"
            />
            <p className="text-sm text-gray-300 mt-2">Scan to download our app!</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
