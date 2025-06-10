// import React, {  useState } from "react";
// import { IoLocationSharp } from "react-icons/io5";
// import { FaArrowRight } from "react-icons/fa";
// import { useLocation, useNavigate } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";

// const cities = [
//   "Ahmedabad", "Bangalore", "Chandigarh", "Chennai", "Coimbatore", "Delhi",
//   "Hyderabad", "Indore", "Jaipur", "Kanpur", "Kochi", "Kolkata", "Lucknow",
//   "Ludhiana", "Mumbai", "Nagpur", "Nashik", "Pune", "Surat", "Trivandrum",
//   "Vadodara", "Visakhapatnam"
// ];

// const BikeDeliveryPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const searchParams = new URLSearchParams(location.search);
//   const defaultCity = searchParams.get("city") || "Delhi";

//   const [selectedCity, setSelectedCity] = useState(defaultCity);
//   const [isCityModalOpen, setIsCityModalOpen] = useState(false);

//   const [formData, setFormData] = useState({
//     pickup: "",
//     drop: "",
//     name: "",
//     phone: "",
//     type: "",
//   });

//   const [errors, setErrors] = useState({});

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.pickup) newErrors.pickup = "Pickup address is required";
//     if (!formData.drop) newErrors.drop = "Drop address is required";
//     if (!formData.name) newErrors.name = "Name is required";
//     if (!formData.phone) newErrors.phone = "Mobile is required";
//     if (!formData.type) newErrors.type = "Please select a valid option for requirement";
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = () => {
//     if (validate()) {
//       alert(`Fare estimate request sent from ${selectedCity}!`);
//     }
//   };

//   return (
//     <div className="relative min-h-screen bg-gray-900 text-white">
//       <motion.div
//         className="absolute inset-0"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1.2 }}
//       >
//         <img
//           src="https://img.freepik.com/free-photo/young-courier-his-colleague-unloading-cardboard-boxes-from-delivery-van_637285-2293.jpg"
//           alt="background"
//           className="w-full h-full object-cover opacity-40"
//         />
//       </motion.div>

//       <motion.div
//         className="relative z-10 px-6 pt-20 pb-10 max-w-7xl mx-auto"
//         initial={{ y: 30, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.8 }}
//       >
//         <div className="text-center mb-10">
//           <motion.h1
//             className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2, duration: 0.6 }}
//           >
//             Reliable Goods Transportation Services in{" "}
//             <span
//               className="text-indigo-400 underline cursor-pointer"
//                 >
//               {selectedCity}
//             </span>
//           </motion.h1>
//           <motion.p
//             className="mt-4 text-lg text-gray-200"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4, duration: 0.6 }}
//           >
//             Book Porter Bikes for all your goods transportation services in {selectedCity}.<br />
//             Experience reliable consignment delivery.
//           </motion.p>
//           <motion.button
//             className="mt-4 text-sm bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white font-medium"
//             whileTap={{ scale: 0.95 }}
//             whileHover={{ scale: 1.05 }}
//           >
//             Know more
//           </motion.button>
//         </div>

//         <motion.div
//           className="bg-white text-gray-900 rounded-lg shadow-lg p-6 grid md:grid-cols-5 gap-4 items-center"
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.5 }}
//         >
//           <div className="col-span-full md:col-span-1 flex items-center gap-2">
//             <IoLocationSharp className="text-indigo-600 text-xl" />
//             <span
//               className="text-indigo-700 font-semibold underline cursor-pointer"
//               onClick={() => setIsCityModalOpen(true)}
//             >
//               {selectedCity}
//             </span>
//           </div>

//           {/* Form Inputs */}
//           {[
//             { label: "Pickup Address *", name: "pickup", placeholder: "Enter Pickup Location" },
//             { label: "Drop Address *", name: "drop", placeholder: "Enter Drop Location" },
//             { label: "Name *", name: "name", placeholder: "Enter Name" },
//             { label: "Phone Number *", name: "phone", placeholder: "Enter Mobile", type: "tel" },
//           ].map(({ label, name, placeholder, type = "text" }) => (
//             <div key={name}>
//               <label className="block text-xs font-medium mb-1">{label}</label>
//               <input
//                 type={type}
//                 placeholder={placeholder}
//                 className="w-full border rounded px-2 py-1 text-sm"
//                 value={formData[name]}
//                 onChange={(e) => setFormData({ ...formData, [name]: e.target.value })}
//               />
//               {errors[name] && <p className="text-red-500 text-xs">{errors[name]}</p>}
//             </div>
//           ))}

//           {/* Select Type */}
//           <div>
//             <label className="block text-xs font-medium mb-1">What best describes you? *</label>
//             <select
//               className="w-full border rounded px-2 py-1 text-sm"
//               value={formData.type}
//               onChange={(e) => setFormData({ ...formData, type: e.target.value })}
//             >
//               <option value="">Click To Choose</option>
//               <option value="individual">Individual</option>
//               <option value="business">Business</option>
//             </select>
//             {errors.type && <p className="text-red-500 text-xs">{errors.type}</p>}
//           </div>

//           {/* Submit */}
//           <div className="col-span-full md:col-span-1 flex justify-end mt-2 md:mt-0">
//             <motion.button
//               className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded flex items-center gap-2"
//               onClick={handleSubmit}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Get Fare Estimate <FaArrowRight />
//             </motion.button>
//           </div>
//         </motion.div>
//       </motion.div>

//       {/* City Modal */}
//       <AnimatePresence>
//         {isCityModalOpen && (
//           <motion.div
//             className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               className="bg-white text-gray-800 p-6 rounded-lg w-[90%] max-w-3xl max-h-[90vh] overflow-y-auto relative"
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.8, opacity: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               <button
//                 onClick={() => setIsCityModalOpen(false)}
//                 className="absolute top-3 right-4 text-gray-600 hover:text-red-500 text-2xl font-bold focus:outline-none"
//               >
//                 &times;
//               </button>
//               <h2 className="text-xl font-bold text-center mb-4">Choose your city</h2>
//               <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
//                 {cities.map((city, index) => (
//                   <motion.div
//                     key={index}
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={() => {
//                       setSelectedCity(city);
//                       setIsCityModalOpen(false);
//                       navigate(`?city=${city}`, { replace: true });
//                     }}
//                     className="cursor-pointer border border-gray-300 rounded-md p-3 text-center text-sm font-medium hover:bg-indigo-100 transition"
//                   >
//                     {city}
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default BikeDeliveryPage;


import React, { useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const cities = [
  "Ahmedabad", "Bangalore", "Chandigarh", "Chennai", "Coimbatore", "Delhi",
  "Hyderabad", "Indore", "Jaipur", "Kanpur", "Kochi", "Kolkata", "Lucknow",
  "Ludhiana", "Mumbai", "Nagpur", "Nashik", "Pune", "Surat", "Trivandrum",
  "Vadodara", "Visakhapatnam"
];

const BikeDeliveryPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const defaultCity = searchParams.get("city") || "Delhi";

  const [selectedCity, setSelectedCity] = useState(defaultCity);
  const [isCityModalOpen, setIsCityModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    pickup: "",
    drop: "",
    name: "",
    phone: "",
    type: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.pickup) newErrors.pickup = "Pickup address is required";
    if (!formData.drop) newErrors.drop = "Drop address is required";
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.phone) newErrors.phone = "Mobile is required";
    if (!formData.type) newErrors.type = "Please select a valid option for requirement";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      alert(`Fare estimate request sent from ${selectedCity}!`);
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-900 text-white">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <img
          src="https://img.freepik.com/free-photo/young-courier-his-colleague-unloading-cardboard-boxes-from-delivery-van_637285-2293.jpg"
          alt="background"
          className="w-full h-full object-cover opacity-40"
        />
      </motion.div>

      <motion.div
        className="relative z-10 px-6 pt-20 pb-10 max-w-7xl mx-auto"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-10">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Reliable Goods Transportation Services in{" "}
            <span className="text-green-400 underline cursor-pointer">
              {selectedCity}
            </span>
          </motion.h1>
          <motion.p
            className="mt-4 text-lg text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Book Porter Bikes for all your goods transportation services in {selectedCity}.<br />
            Experience reliable consignment delivery.
          </motion.p>
          <motion.button
            className="mt-4 text-sm bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white font-medium"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
          >
            Know more
          </motion.button>
        </div>

        <motion.div
          className="bg-white dark:bg-gray-900 dark:text-gray-300 text-gray-800 rounded-lg shadow-lg p-6 grid md:grid-cols-5 gap-4 items-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="col-span-full md:col-span-1 flex items-center gap-2">
            <IoLocationSharp className="text-green-600 text-xl" />
            <span
              className="text-green-700 font-semibold underline cursor-pointer"
              onClick={() => setIsCityModalOpen(true)}
            >
              {selectedCity}
            </span>
          </div>

          {/* Form Inputs */}
          {[{ label: "Pickup Address *", name: "pickup", placeholder: "Enter Pickup Location" },
          { label: "Drop Address *", name: "drop", placeholder: "Enter Drop Location" },
          { label: "Name *", name: "name", placeholder: "Enter Name" },
          { label: "Phone Number *", name: "phone", placeholder: "Enter Mobile", type: "tel" }
          ].map(({ label, name, placeholder, type = "text" }) => (
            <div key={name}>
              <label className="block text-xs font-medium mb-1">{label}</label>
              <input
                type={type}
                placeholder={placeholder}
                className="w-full border rounded px-2 py-1 text-sm"
                value={formData[name]}
                onChange={(e) => setFormData({ ...formData, [name]: e.target.value })}
              />
              {errors[name] && <p className="text-red-500 text-xs">{errors[name]}</p>}
            </div>
          ))}

          {/* Select Type */}
          <div>
            <label className="block text-xs font-medium mb-1">What best describes you? *</label>
            <select
              className="w-full border rounded px-2 py-1 text-sm"
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
            >
              <option value="">Click To Choose</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
            {errors.type && <p className="text-red-500 text-xs">{errors.type}</p>}
          </div>

          {/* Submit */}
          <div className="col-span-full md:col-span-1 flex justify-end mt-2 md:mt-0">
            <motion.button
              className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded flex items-center gap-2"
              onClick={handleSubmit}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Fare Estimate <FaArrowRight />
            </motion.button>
          </div>
        </motion.div>
      </motion.div>

      {/* ✅ Add city-aware component below */}

      {/* City Modal */}
      <AnimatePresence>
        {isCityModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 dark:text-gray-300 text-gray-800 p-6 rounded-lg w-[90%] max-w-3xl max-h-[90vh] overflow-y-auto relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setIsCityModalOpen(false)}
                className="absolute top-3 right-4 text-gray-600 hover:text-green-500 text-2xl font-bold focus:outline-none"
              >
                &times;
              </button>
              <h2 className="text-xl font-bold text-center mb-4">Choose your city</h2>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                {cities.map((city, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setSelectedCity(city);
                      setIsCityModalOpen(false);
                      navigate(`?city=${city}`, { replace: true });
                    }}
                    className="cursor-pointer border border-gray-300 rounded-md p-3 text-center text-sm font-medium hover:bg-green-600 transition"
                  >
                    {city}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default BikeDeliveryPage;
