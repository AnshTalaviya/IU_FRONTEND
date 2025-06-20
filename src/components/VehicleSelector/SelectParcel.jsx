import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaMotorcycle,
  FaTruckPickup,
  FaTruckMoving,
} from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

export default function SelectParcel() {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedVehicle } = location.state || {};

  const [selectedType, setSelectedType] = useState("");
  const [customName, setCustomName] = useState("");
  const [weight, setWeight] = useState("");

  const iconMap = {
    FaMotorcycle: <FaMotorcycle className="text-6xl text-green-400" />,
    FaTruckPickup: <FaTruckPickup className="text-6xl text-yellow-400" />,
    MdLocalShipping: <MdLocalShipping className="text-6xl text-blue-400" />,
    FaTruckMoving: <FaTruckMoving className="text-6xl text-red-400" />,
  };

  const parcelTypes = [
    "Timber / Plywood / Laminate",
    "General",
    "Electrical / Electronics",
    "Building / Construction",
    "Catering / Restaurant",
    "Machines / Equipments",
    "Textile / Garments",
    "Others",
  ];

  if (!selectedVehicle) {
    return <div className="text-center text-white py-12">No vehicle selected</div>;
  }

  const { title, description, iconName } = selectedVehicle;

  const handleContinue = () => {
    if (!selectedType) return alert("Please select a parcel type.");
    if (!weight.trim()) return alert("Please enter the parcel weight.");
    if (selectedType === "Others" && !customName.trim()) {
      return alert("Please enter the custom parcel name.");
    }

    const finalType = selectedType === "Others" ? customName.trim() : selectedType;

    navigate("/parcel-details", {
      state: {
        selectedVehicle,
        parcelType: finalType,
        parcelWeight: weight,
      },
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center text-white bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="w-full max-w-2xl rounded-xl shadow-lg text-center p-4 sm:p-8">

        {/* Centered icon */}
        <div className="w-full h-20 flex justify-center items-center">
          {iconMap[iconName]}
        </div>

        {/* Title and Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          <p className="text-gray-400 text-sm">{description}</p>
        </motion.div>

        {/* Parcel Type Section */}
        <div className="text-left space-y-2">
          <h3 className="text-base font-semibold text-center mb-1">What Are You Sending?</h3>
          <p className="text-sm text-gray-300 text-center mb-2">Choose the type of parcel you want to ship.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {parcelTypes.map((type, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedType(type);
                  setWeight("");
                  if (type !== "Others") setCustomName("");
                }}
                className={`w-full py-2 px-4 rounded-md text-sm font-medium ${selectedType === type
                    ? "bg-green-500 text-white"
                    : "bg-gray-700/60 hover:bg-gray-600"
                  }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Custom input fields */}
          <AnimatePresence>
            {selectedType && (
              <motion.div
                key="inputs"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="mt-3 space-y-3"
              >
                {selectedType === "Others" && (
                  <input
                    type="text"
                    value={customName}
                    onChange={(e) => setCustomName(e.target.value)}
                    placeholder="Enter custom parcel type..."
                    className="w-full py-2 px-4 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                )}
                <div className="relative flex items-center">
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={weight}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (/^\d*$/.test(value)) setWeight(value);
                    }}
                    placeholder="Enter parcel weight"
                    className="w-full py-2 px-4 pr-14 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <span className="absolute right-4 text-white text-sm">kg</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Action Buttons */}
        <button
          onClick={handleContinue}
          className="mt-5 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded-md transition"
        >
          Continue
        </button>

        <button
          onClick={() => navigate(-1)}
          className="mt-2 text-sm text-gray-300 hover:text-white underline"
        >
          ← Go Back
        </button>
      </div>
    </div>
  );
}
