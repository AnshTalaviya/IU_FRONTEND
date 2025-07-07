import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MapPin, Send, User, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";

export default function ParcelDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const validateName = (value) => {
    const regex = /^[A-Za-z\s]+$/;
    if (!regex.test(value)) {
      setNameError("Name must contain only letters and spaces.");
    } else {
      setNameError("");
    }
    setName(value);
  };

  const validatePhone = (value) => {
    const numericValue = value.replace(/\D/g, "");
    if (!/^\d{10}$/.test(numericValue)) {
      setPhoneError("Phone must be exactly 10 digits.");
    } else {
      setPhoneError("");
    }
    setPhone(numericValue);
  };

  const isValid = () =>
    pickup && drop && name && phone && !nameError && !phoneError;

  const handleEstimate = () => {
    if (!isValid()) return;

    navigate("/estimate-results", {
      state: { pickup, drop, name, phone },
    });
  };

  const inputBaseClass = "w-full py-2 pl-10 pr-4 rounded-mdtext-white bg-gradient-to-br from-black via-gray-900 to-black border focus:outline-none";

  const getInputClass = (hasError, value) => {
    if (hasError) return `${inputBaseClass} border-red-500 ring-2 ring-red-500`;
    if (value) return `${inputBaseClass} border-green-500 ring-2 ring-green-600`;
    return `${inputBaseClass} border-gray-600 focus:ring-2 focus:ring-orange-600`;
  };

  const containerClass = "relative flex flex-col text-gray-400";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 text-white bg-gradient-to-br from-black via-gray-900 to-black">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl p-8 rounded-2xl shadow-2xl"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-white tracking-wide">
          📦 Delivery Details
        </h2>

        <div className="space-y-6">
          {/* Pickup */}
          <div className={containerClass}>
            <div className="absolute left-3 top-2.5">
              <MapPin className="text-green-400" />
            </div>
            <input
              type="text"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              placeholder="Pickup Address"
              className={getInputClass(false, pickup)}
            />
          </div>

          {/* Drop */}
          <div className={containerClass}>
            <div className="absolute left-3 top-2.5">
              <Send className="text-blue-400" />
            </div>
            <input
              type="text"
              value={drop}
              onChange={(e) => setDrop(e.target.value)}
              placeholder="Drop Address"
              className={getInputClass(false, drop)}
            />
          </div>

          {/* Name */}
          <div className={containerClass}>
            <div className="absolute left-3 top-2.5">
              <User className="text-yellow-400" />
            </div>
            <input
              type="text"
              value={name}
              onChange={(e) => validateName(e.target.value)}
              placeholder="Your Name"
              className={getInputClass(!!nameError, name)}
            />
            {nameError && (
              <span className="text-sm text-red-400 mt-1 ml-1">
                {nameError}
              </span>
            )}
          </div>

          {/* Phone */}
          <div className={containerClass}>
            <div className="absolute left-3 top-2.5">
              <PhoneCall className="text-pink-400" />
            </div>
            <input
              type="text"
              value={phone}
              onChange={(e) => validatePhone(e.target.value)}
              placeholder="Phone Number"
              maxLength={10}
              className={getInputClass(!!phoneError, phone)}
            />
            {phoneError && (
              <span className="text-sm text-red-400 mt-1 ml-1">
                {phoneError}
              </span>
            )}
          </div>

          {/* Button */}
          <motion.button
            onClick={handleEstimate}
            whileTap={{ scale: 0.95 }}
            disabled={!isValid()}
            className={`w-full font-bold py-3 rounded-md mt-4 transition ${
              isValid()
                ? "bg-green-500 hover:bg-green-600 text-white"
                : "bg-gray-600 cursor-not-allowed text-gray-300"
            }`}
          >
            🚚 Get Estimate
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
