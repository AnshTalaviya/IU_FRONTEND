import React, { useState, useEffect } from 'react';
import { FaWeightHanging, FaTimes, FaMapMarkerAlt, FaPhoneAlt, FaUser ,FaBox,FaFlask,FaAppleAlt} from 'react-icons/fa';
import { motion } from 'framer-motion';

const TwoWheelerCard = () => {
    const [showModal, setShowModal] = useState(false);
    const [pickup, setPickup] = useState('');
    const [drop, setDrop] = useState('');
    const [mobile, setMobile] = useState('');
    const [name, setName] = useState('');
    const [selectedType, setSelectedType] = useState(''); // personal or business
    const [isPickupFocused, setIsPickupFocused] = useState(false);
    const [isDropFocused, setIsDropFocused] = useState(false);
    const [isMobileFocused, setIsMobileFocused] = useState(false);
    const [isNameFocused, setIsNameFocused] = useState(false);


    const isMobileValid = /^\d{10}$/.test(mobile);
    const isFormComplete = pickup && drop && isMobileValid && name && selectedType;

    const handleMobileChange = (e) => {
        const value = e.target.value.replace(/\D/g, '');
        setMobile(value);
    };

    // 🔒 Prevent scroll when modal is open
    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        };
    }, [showModal]);

    return (
        <div className="bg-white dark:bg-gray-900 dark:text-gray-300 text-gray-800 flex flex-col items-center py-12 px-4">
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

                <motion.div
                    initial={{ x: 30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="w-full sm:w-2/3 dark:text-gray-300 text-gray-800"
                >
                    <h3 className="text-lg font-semibold">2 Wheeler</h3>
                    <div className="flex items-center gap-2 my-2 text-gray-300">
                        <FaWeightHanging className="text-green-400" />
                        <span className="text-sm font-medium">20 kg</span>
                    </div>

                    <p className="text-sm mb-2">
                        Starting From <span className="font-semibold">₹48</span>
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

            {showModal && (

                <div className="fixed inset-0 z-50 bg-black bg-opacity-40 dark:bg-gray-900 dark:bg-opacity-40 flex justify-center items-start sm:items-center px-2 sm:px-4 pt-4 sm:pt-10 overflow-y-auto">
                    <div className="w-full max-w-2xl min-h-[85vh] bg-white dark:bg-gray-800 flex flex-col md:flex-row rounded-md overflow-hidden shadow-xl my-2 sm:my-4">
                        {/* Left Section */}
                        <div className="bg-[#f2f6ff] dark:bg-gray-800 text-gray-800 dark:text-gray-300 w-full md:w-1/2 p-3 sm:p-4 md:p-6 text-center px-4 sm:px-6 md:px-10 py-8 sm:py-10 md:py-20">
                            <img
                                src="https://www.financialexpress.com/wp-content/uploads/2023/01/porter-two-wheeler-services.jpg"
                                alt="Bike"
                                className="mx-auto w-28 sm:w-32 md:w-44 h-20 sm:h-24 md:h-32 object-contain"
                            />
                            <div className="text-xs sm:text-sm text-gray-800 dark:text-gray-400 mt-2">40cm x 40cm</div>
                            <div className="inline-flex items-center gap-1 px-2 sm:px-3 py-1 bg-green-100 dark:bg-green-700 text-green-800 dark:text-green-300 rounded-full text-xs sm:text-sm font-medium mt-2 sm:mt-3">
                                <FaWeightHanging className="text-xs sm:text-sm" /> 20 kg
                            </div>
                            <h2 className="text-xl font-semibold mt-4">2 Wheeler</h2>
                            <p className="text-xs sm:text-sm text-gray-800 dark:text-gray-400 mt-1">
                                Starting from <strong> ₹48</strong>
                            </p>
                            <hr className="my-3 sm:my-4 md:my-6" />
                            <div className="text-left">
                                <h3 className="font-semibold text-xs sm:text-sm mb-1 sm:mb-2">Best for sending:</h3>
                                <ul className="space-y-1 sm:space-y-2 text-xs text-gray-800 dark:text-gray-400">
                                    <li className="flex items-center gap-1 sm:gap-2"><FaBox className="text-xs sm:text-sm" /> FMCG Food Products</li>
                                    <li className="flex items-center gap-1 sm:gap-2"><FaFlask className="text-xs sm:text-sm" /> Chemicals</li>
                                    <li className="flex items-center gap-1 sm:gap-2"><FaAppleAlt className="text-xs sm:text-sm" /> Fruits & Vegetables</li>
                                </ul>
                            </div>
                        </div>
                        {/* <div className="bg-gray-100 dark:bg-gray-800 dark:text-gray-200  text-gray-800  w-full md:w-1/2 p-6 flex flex-col items-center text-center">
                            <img
                                src="https://www.financialexpress.com/wp-content/uploads/2023/01/porter-two-wheeler-services.jpg"
                                alt="Bike"
                                className="w-32 h-32 object-contain"
                            />
                            <span className="text-sm mt-2">40cm x 40cm</span>
                            <span className="bg-green-200 text-green-800 px-2 py-1 text-xs mt-2 rounded">🔒 20 kg</span>
                            <h2 className="text-xl font-semibold mt-4">2 Wheeler</h2>
                            <p>Starting From ₹48</p>
                        </div> */}

                        {/* Right Section */}

                        <div className="relative bg-white dark:bg-black text-gray-800 dark:text-gray-300 w-full md:w-1/2 p-3 sm:p-4 md:p-6 py-6 sm:py-8 md:py-10 overflow-y-auto">

                            <button
                                onClick={() => setShowModal(false)}
                                className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 text-gray-600 dark:text-gray-300 dark:hover:text-red-600 hover:text-red-500 text-lg sm:text-xl md:text-2xl"
                                aria-label="Close Modal"
                            >
                                <FaTimes />
                            </button>
                            <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 dark:text-gray-300 mb-3 sm:mb-4 md:mb-6">Get an estimate</h2>

                            <div className="space-y-2 sm:space-y-3 md:space-y-4">
                                {/* Floating Input for Pickup Address */}
                                <div className="relative w-full">
                                    <label htmlFor="pickup"
                                        className={`absolute left-3 transition-all duration-200 ease-in-out bg-white dark:bg-black px-1 ${isPickupFocused || pickup
                                            ? '-top-2 text-xs sm:text-sm text-gray-400 dark:text-gray-300 border-black' : 'top-3 sm:top-4 text-sm sm:text-base text-gray-400 dark:text-gray-300'}`} >
                                        Pickup Address *
                                    </label>
                                    <input id="pickup" type="text" value={pickup}
                                        onChange={(e) => setPickup(e.target.value)}
                                        onFocus={() => setIsPickupFocused(true)}
                                        onBlur={() => setIsPickupFocused(false)}
                                        placeholder=" "
                                        className="w-full h-10 sm:h-12 md:h-14 px-3 pt-5 sm:pt-6 pb-2 text-sm sm:text-base bg-white dark:bg-black text-gray-900 dark:text-gray-300 border border-gray-300 rounded-md focus:outline-none"
                                    />
                                </div>

                                {/* Floating Input for Drop Address */}
                                <div className="relative w-full">
                                    <label htmlFor="drop"
                                        className={`absolute left-3 transition-all duration-200 ease-in-out bg-white dark:bg-black px-1 ${isDropFocused || drop
                                            ? '-top-2 text-xs sm:text-sm text-gray-400 dark:text-gray-300 border-black' : 'top-3 sm:top-4 text-sm sm:text-base text-gray-400 dark:text-gray-300'}`} >
                                        Drop Address *
                                    </label>
                                    <input id="drop" type="text" value={drop}
                                        onChange={(e) => setDrop(e.target.value)}
                                        onFocus={() => setIsDropFocused(true)}
                                        onBlur={() => setIsDropFocused(false)}
                                        placeholder=" "
                                        className="w-full h-10 sm:h-12 md:h-14 px-3 pt-5 sm:pt-6 pb-2 text-sm sm:text-base bg-white dark:bg-black text-gray-900 dark:text-gray-300 border border-gray-300 rounded-md focus:outline-none"
                                    />
                                </div>

                                {/* Floating Input for Phone Number */}
                                <div className="relative w-full">
                                    <label htmlFor="mobile"
                                        className={`absolute left-3 transition-all duration-200 ease-in-out bg-white dark:bg-black px-1 ${isMobileFocused || mobile
                                            ? '-top-2 text-xs sm:text-sm text-gray-400 dark:text-gray-300 border-black' : 'top-3 sm:top-4 text-sm sm:text-base text-gray-400 dark:text-gray-300'}`} >
                                        Phone Number *
                                    </label>
                                    <input id="mobile" type="text" value={mobile}
                                        onChange={handleMobileChange}
                                        onFocus={() => setIsMobileFocused(true)}
                                        onBlur={() => setIsMobileFocused(false)}
                                        maxLength="10"
                                        placeholder=" "
                                        className="w-full h-10 sm:h-12 md:h-14 px-3 pt-5 sm:pt-6 pb-2 text-sm sm:text-base bg-white dark:bg-black text-gray-900 dark:text-gray-300 border border-gray-300 rounded-md focus:outline-none"
                                    />

                                    {mobile && !isMobileValid && (
                                        <p className="text-red-500 text-xs mt-1">Please enter a valid 10-digit number.</p>
                                    )}
                                </div>

                                {/* Floating Input for Name */}
                                <div className="relative w-full">
                                    <label htmlFor="name"
                                        className={`absolute left-3 transition-all duration-200 ease-in-out bg-white dark:bg-black px-1 ${isNameFocused || name
                                            ? '-top-2 text-xs sm:text-sm text-gray-400 dark:text-gray-300 border-black' : 'top-3 sm:top-4 text-sm sm:text-base text-gray-400 dark:text-gray-300'}`} >
                                        Name *
                                    </label>
                                    <input id="name" type="text" value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        onFocus={() => setIsNameFocused(true)}
                                        onBlur={() => setIsNameFocused(false)}
                                        placeholder=" "
                                        className="w-full h-10 sm:h-12 md:h-14 px-3 pt-5 sm:pt-6 pb-2 text-sm sm:text-base bg-white dark:bg-black text-gray-900 dark:text-gray-300 border border-gray-300 rounded-md focus:outline-none"
                                    />
                                </div>

                                {/* Personal / Business */}
                                <div>
                                    <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">What describes you best? *</label>
                                    <div className="flex gap-2 sm:gap-3">
                                        <button
                                            onClick={() => setSelectedType('personal')}
                                            className={`flex-1 h-9 sm:h-10 md:h-12 rounded border text-xs sm:text-sm font-medium ${selectedType === 'personal'
                                                ? 'bg-green-600 text-white'
                                                : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-gray-300'
                                                }`}
                                        >
                                            Personal User
                                        </button>
                                        <button
                                            onClick={() => setSelectedType('business')}
                                            className={`flex-1 h-9 sm:h-10 md:h-12 rounded border text-xs sm:text-sm font-medium ${selectedType === 'business'
                                                ? 'bg-green-600 text-white'
                                                : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-gray-300'
                                                }`}
                                        >
                                            Business User
                                        </button>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <button
                                    disabled={!isFormComplete}
                                    className={`w-full flex justify-center items-center gap-2 h-10 sm:h-12 md:h-14 rounded-md text-white text-xs sm:text-sm font-semibold ${isFormComplete
                                        ? 'bg-green-600 hover:bg-green-700'
                                        : 'bg-gray-300 dark:bg-gray-800 cursor-not-allowed'
                                        }`}
                                >
                                    Get an estimate <span className="text-lg sm:text-xl">→</span>
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
