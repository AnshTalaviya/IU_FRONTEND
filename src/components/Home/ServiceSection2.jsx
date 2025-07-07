import React, { useEffect } from "react";
import {
  FaMotorcycle,
  FaTruckPickup,
  FaTruckMoving,
} from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const vehicleOptions = [
  {
    id: 1,
    title: "Quick & Light",
    description: "Ideal for small parcels, documents, or lightweight items.",
    iconName: "FaMotorcycle",
    weight: "Max 10 KG",
    aos: "fade-up"
  },
  {
    id: 2,
    title: "Medium & Safe",
    description: "Perfect for electronics, boxes, and mid-size deliveries.",
    iconName: "FaTruckPickup",
    weight: "Max 50 KG",
    aos: "fade-down"
  },
  {
    id: 3,
    title: "Spacious & Strong",
    description: "Best for furniture, heavier goods, or stacked parcels.",
    iconName: "MdLocalShipping",
    weight: "Max 80 KG",
    aos: "zoom-in"
  },
  {
    id: 4,
    title: "Heavy Duty",
    description: "For bulk deliveries, industrial items, or extra-large loads.",
    iconName: "FaTruckMoving",
    weight: "Max 1000 KG",
    aos: "flip-left"
  },
];

// Icon mapping component
const VehicleIcon = ({ iconName }) => {
  const iconMap = {
    FaMotorcycle: <FaMotorcycle size={32} />,
    FaTruckPickup: <FaTruckPickup size={32} />,
    MdLocalShipping: <MdLocalShipping size={32} />,
    FaTruckMoving: <FaTruckMoving size={32} />,
  };

  return iconMap[iconName] || null;
};

const VehicleCard = ({ vehicle, onClick }) => {
  return (
    <div
      data-aos={vehicle.aos}
      onClick={onClick}
      className={`group relative w-full max-w-[280px] h-[180px] rounded-xl overflow-hidden 
        ${vehicle.bg} text-white shadow-2xl cursor-pointer 
        transition-all duration-700 ease-in-out border border-orange-500/40 hover:scale-[1.02]`}
    >
      {/* Watermark Icon */}
      <div className="absolute inset-0 flex items-center justify-center opacity-40 text-orange-400 scale-150">
        <VehicleIcon iconName={vehicle.iconName} />
      </div>

      {/* Top Icon */}
      <div className="absolute top-4 left-4 z-10 w-14 h-14 bg-black/70 rounded-full flex items-center justify-center text-orange-600 animate-icon-bounce">
        <VehicleIcon iconName={vehicle.iconName} />
      </div>

      {/* Content */}
      <div className="absolute bottom-4 left-4 right-4 z-20">
        <h3 className="text-lg font-semibold">{vehicle.title}</h3>
        <p className="text-sm text-gray-300">{vehicle.description}</p>
        <span className="text-xs font-semibold mt-1">
          {vehicle.weight}
        </span>
      </div>
    </div>
  );
};

export default function VehicleSelector2() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: 'ease-in-out'
    });
  }, []);

  const handleVehicleSelect = (vehicle) => {
    // Create a simplified vehicle object without React elements
    const vehicleData = {
      id: vehicle.id,
      title: vehicle.title,
      description: vehicle.description,
      weight: vehicle.weight,
      iconName: vehicle.iconName,
      bg: vehicle.bg
    };
    
    navigate("/select-parcel", {
      state: {
        selectedVehicle: vehicleData
      },
    });
  };

  return (
    <section className="min-h-[70px] py-8 mt-14  relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Select a vehicle based on your <span className="text-orange-600"> Parcel's Size </span>  and weight.
          </motion.h1>
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            Choose the best option for your delivery needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 justify-items-center max-w-6xl mx-auto px-4 mt-18 ">
          {vehicleOptions.map((vehicle) => (
            <div key={vehicle.id} className="w-full max-w-[280px]">
              <VehicleCard
                vehicle={vehicle}
                onClick={() => handleVehicleSelect(vehicle)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}