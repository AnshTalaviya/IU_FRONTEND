import React, { useState } from 'react';
import { FaWeightHanging, FaTimes, FaMapMarkerAlt, FaPhoneAlt, FaUser } from 'react-icons/fa';
import { motion } from 'framer-motion';

const TwoWheelerCard = () => {
    const [showModal, setShowModal] = useState(false);
    const [pickup, setPickup] = useState('');
    const [drop, setDrop] = useState('');
    const [mobile, setMobile] = useState('');
    const [name, setName] = useState('');
    const [selectedType, setSelectedType] = useState(''); // personal or business

    // ✅ Mobile valid only if 10 digits
    const isMobileValid = /^\d{10}$/.test(mobile);

    // ✅ Enable button if all fields filled & mobile is valid
    const isFormComplete = pickup && drop && isMobileValid && name && selectedType;

    // 🧠 Prevent non-numeric input
    const handleMobileChange = (e) => {
        const value = e.target.value.replace(/\D/g, ''); // remove non-digits
        setMobile(value);
    };

    return (
        <div className=" bg-white dark:bg-gray-900 dark:text-gray-300 text-gray-800 flex flex-col items-center py-12 px-4">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold text-green-400 text-center mb-10"
            >
                Two-Wheelers from Porter
            </motion.h2>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gray-100 dark:bg-gray-900 dark:text-gray-300 text-gray-800 rounded-xl shadow-lg p-6 w-full max-w-4xl flex flex-col sm:flex-row items-center gap-6 sm:gap-8 border border-gray-700"
            >
                {/* Bike Image */}
                <motion.div
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="w-full sm:w-1/3 flex justify-center items-center"
                >
                    <img
                        src="https://www.financialexpress.com/wp-content/uploads/2023/01/porter-two-wheeler-services.jpg"
                        alt="Bike"
                        className="w-60 h-44 object-contain"
                    />
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ x: 30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="w-full sm:w-2/3 dark:text-gray-300 text-gray-800"
                >
                    <h3 className="text-lg font-semibold  dark:text-gray-300  text-gray-800">2 Wheeler</h3>
                    <div className="flex items-center gap-2 my-2 text-gray-300">
                        <FaWeightHanging className="text-green-400" />
                        <span className="text-sm dark:text-gray-300 text-gray-800 font-medium">20 kg</span>
                    </div>

                    <p className="text-sm mb-2">
                        Starting From <span className="font-semibold ">₹48</span>
                    </p>

                    <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                        Base fare is inclusive of 1.0 km distance & 25 minutes of order time.
                        Pricing may vary basis locality. Please note, road tax, parking fee, etc,
                        will be applicable over and above ride fare.
                    </p>

                    <button
                        onClick={() => setShowModal(true)}
                        className="text-green-400 text-sm font-medium underline hover:text-green-300"
                    >
                        Know More
                    </button>
                </motion.div>
            </motion.div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-white dark:bg-gray-900 dark:text-gray-300  text-gray-800  flex justify-center items-center z-50">
                    <div className="bg-white w-full max-w-3xl rounded-lg shadow-lg flex flex-col md:flex-row">
                        {/* Left Section */}
                        <div className="bg-gray-100 dark:bg-gray-800 dark:text-gray-200  text-gray-800  w-full md:w-1/2 p-6 flex flex-col items-center text-center">
                            <img
                                src="https://www.financialexpress.com/wp-content/uploads/2023/01/porter-two-wheeler-services.jpg"
                                alt="Bike"
                                className="w-32 h-32 object-contain"
                            />
                            <span className="text-sm mt-2">40cm x 40cm</span>
                            <span className="bg-green-200 text-green-800 px-2 py-1 text-xs mt-2 rounded">🔒 20 kg</span>
                            <h2 className="text-xl font-semibold mt-4">2 Wheeler</h2>
                            <p>Starting From ₹48</p>
                        </div>

                        {/* Right Section */}
                        <div className="w-full md:w-1/2 bg-gray-100 dark:bg-gray-800 dark:text-gray-200  text-gray-800  border-l border-gray-300 dark:border-gray-600  p-6 relative">
                            <button
                                onClick={() => setShowModal(false)}
                                className="absolute top-2 right-2 text-gray-600 text-xl hover:text-red-500"
                                aria-label="Close Modal"
                            >
                                <FaTimes />
                            </button>

                            <div className="space-y-3 mt-6 dark:text-gray-200  text-gray-800">
                                <div className="flex items-center gap-2  border rounded p-2">
                                    <FaMapMarkerAlt className="text-green-500" />
                                    <input
                                        type="text"
                                        placeholder="Enter Pickup Location"
                                        value={pickup}
                                        onChange={(e) => setPickup(e.target.value)}
                                        className="w-full outline-none"
                                    />
                                </div>

                                <div className="flex items-center gap-2  dark:text-gray-200  text-gray-800 border rounded p-2">
                                    <FaMapMarkerAlt className="text-red-500" />
                                    <input
                                        type="text"
                                        placeholder="Enter Drop Location"
                                        value={drop}
                                        onChange={(e) => setDrop(e.target.value)}
                                        className="w-full outline-none"
                                    />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <div className="flex items-center gap-2 dark:text-gray-200  text-gray-800 border rounded p-2">
                                        <FaPhoneAlt className="text-gray-500" />
                                        <input
                                            type="text"
                                            placeholder="Enter Mobile"
                                            value={mobile}
                                            onChange={handleMobileChange}
                                            maxLength="10"
                                            className="w-full outline-none"
                                        />
                                    </div>
                                    {/* 🔴 Validation Message */}
                                    {mobile && !isMobileValid && (
                                        <p className="text-red-500 text-xs ml-1">Please enter a valid 10-digit mobile number.</p>
                                    )}
                                </div>

                                <div className="flex items-center gap-2  dark:text-gray-200  text-gray-800 border rounded p-2">
                                    <FaUser className="text-gray-500" />
                                    <input
                                        type="text"
                                        placeholder="Enter Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full outline-none"
                                    />
                                </div>

                                {/* Personal / Business */}
                                <div className="flex gap-4">
                                    <button
                                        className={`w-1/2 border py-2 rounded ${selectedType === 'personal'
                                            ? 'bg-green-600 text-white'
                                            : 'bg-white border-gray-400 text-gray-700'
                                            }`}
                                        onClick={() => setSelectedType('personal')}
                                    >
                                        PERSONAL
                                    </button>
                                    <button
                                        className={`w-1/2 border py-2 rounded ${selectedType === 'business'
                                            ? 'bg-green-600 text-white'
                                            : 'bg-white border-gray-400 text-gray-700'
                                            }`}
                                        onClick={() => setSelectedType('business')}
                                    >
                                        BUSINESS
                                    </button>
                                </div>

                                {/* Submit Button */}
                                <button
                                    disabled={!isFormComplete}
                                    className={`w-full py-2 rounded text-white ${isFormComplete ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-300 cursor-not-allowed'
                                        }`}
                                >
                                    Get Fare Estimate
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TwoWheelerCard;
