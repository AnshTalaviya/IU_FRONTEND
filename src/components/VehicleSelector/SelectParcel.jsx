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
    FaMotorcycle: <FaMotorcycle className="text-5xl text-green-400" />,
    FaTruckPickup: <FaTruckPickup className="text-5xl text-yellow-400" />,
    MdLocalShipping: <MdLocalShipping className="text-5xl text-blue-400" />,
    FaTruckMoving: <FaTruckMoving className="text-5xl text-red-400" />,
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
    <div className="min-h-screen flex flex-col items-center p-6 mt-10 text-white bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="w-full max-w-2xl bg-black/60 rounded-xl p-8 shadow-lg text-center">
        <div className="mb-4">{iconMap[iconName]}</div>
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-300 mb-2">{description}</p>

        <div className="text-left space-y-2">
          <h3 className="text-lg font-semibold text-center mb-1">What Are You Sending?</h3>
          <p className="text-sm text-gray-300 text-center mb-3">Choose the type of parcel you want to ship.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {parcelTypes.map((type, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedType(type);
                  setWeight("");
                  if (type !== "Others") setCustomName("");
                }}
                className={`w-full py-2 px-4 rounded-md text-sm font-medium ${selectedType === type ? "bg-green-500 text-white" : "bg-gray-700/60 hover:bg-gray-600"}`}
              >
                {type}
              </button>
            ))}
          </div>

          <AnimatePresence>
            {selectedType && (
              <motion.div
                key="inputs"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="mt-4 space-y-3"
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

        <button
          onClick={handleContinue}
          className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded-md transition"
        >
          Continue
        </button>

        <button
          onClick={() => navigate(-1)}
          className="mt-3 text-sm text-gray-300 hover:text-white underline"
        >
          ← Go Back
        </button>
      </div>
    </div>
  );
}
