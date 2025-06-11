import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBox, FaFlask, FaAppleAlt, FaWeightHanging, FaTimes } from "react-icons/fa";

const trucks = [
    {
        title: '3 Wheeler',
        image: 'https://t4.ftcdn.net/jpg/01/30/64/81/360_F_130648163_zLEs0gxg4j7tGDV8PQqxzjeJmiIF4tFu.jpg',
        size: '350 kg',
        weight: 350,
        price: '₹150',
        dimension: '40cm x 40cm',
    },
    {
        title: 'Pickup 8ft',
        image: 'https://t4.ftcdn.net/jpg/01/30/64/81/360_F_130648163_zLEs0gxg4j7tGDV8PQqxzjeJmiIF4tFu.jpg',
        size: '700 kg',
        weight: 700,
        price: '₹205',
        dimension: '6ft x 7ft',
    },
    {
        title: 'Tata Ace',
        image: 'https://t4.ftcdn.net/jpg/01/30/64/81/360_F_130648163_zLEs0gxg4j7tGDV8PQqxzjeJmiIF4tFu.jpg',
        size: '1250 kg',
        weight: 1250,
        price: '₹300',
        dimension: '5.5ft x 8ft',
    },
    {
        title: 'Canter 14ft',
        image: 'https://t4.ftcdn.net/jpg/01/30/64/81/360_F_130648163_zLEs0gxg4j7tGDV8PQqxzjeJmiIF4tFu.jpg',
        size: '1500 kg',
        weight: 1500,
        price: '₹350',
        dimension: '14ft x 6ft',
    },
    {
        title: '1.7 ton',
        image: 'https://t4.ftcdn.net/jpg/01/30/64/81/360_F_130648163_zLEs0gxg4j7tGDV8PQqxzjeJmiIF4tFu.jpg',
        size: '1700 kg',
        weight: 1700,
        price: '₹400',
        dimension: '16ft x 7ft',
    }
];

const TruckCard = () => {
    const [showModal, setShowModal] = useState(false);
    const [pickup, setPickup] = useState('');
    const [drop, setDrop] = useState('');
    const [mobile, setMobile] = useState('');
    const [name, setName] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const [selectedTruck, setSelectedTruck] = useState(null);
    const [weightFilter, setWeightFilter] = useState('light');
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

    const filteredTrucks = trucks.filter(truck => {
        if (weightFilter === 'light') return truck.weight < 750;
        if (weightFilter === 'heavy') return truck.weight >= 750;
        return true;
    });

    return (
        <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-300 pt-20 pb-20">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 }}
                className="text-3xl font-bold text-green-500 text-center mb-4"
            >
                Mini Trucks from IdharUdhar
            </motion.h2>

            <div className="flex justify-center gap-0 mb-8">
                <button
                    onClick={() => setWeightFilter('light')}
                    className={`px-6 py-2 font-medium border-b-2 ${weightFilter === 'light'
                        ? 'border-gray-700 dark:text-gray-200 dark:border-gray-200'
                        : 'border-gray-200 text-black dark:text-white dark:border-gray-700'
                        }`}
                >
                    Light (below 750kg)
                </button>
                <button
                    onClick={() => setWeightFilter('heavy')}
                    className={`px-6 py-2 font-medium border-b-2 ${weightFilter === 'heavy'
                        ? 'border-gray-700 dark:text-gray-200 dark:border-gray-200'
                        : 'border-gray-200 text-black dark:text-white dark:border-gray-700'
                        }`}
                >
                    Heavy (above 750kg)
                </button>
            </div>

            <div className={`grid gap-4 justify-items-center mx-auto ${weightFilter === 'light'
                ? 'grid-cols-2 max-w-2xl'
                : 'grid-cols-3 max-w-4xl'
                }`}>
                {filteredTrucks.map((truck, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-gray-100 dark:bg-gray-800 rounded-sm shadow-lg p-4 flex flex-col items-center w-full max-w-[300px]"
                    >
                        <img src={truck.image} alt={truck.title} className="w-60 h-44 object-contain mb-4" />
                        <h3 className="text-lg font-semibold">{truck.title}</h3>
                        <div className="flex items-center gap-2 text-sm mb-2">
                            <FaWeightHanging className="text-green-400" />
                            <span className="font-medium">{truck.size}</span>
                        </div>
                        <p className="text-sm mb-4">Starting From <span className="font-semibold">{truck.price}</span></p>
                        <button
                            onClick={() => {
                                setSelectedTruck(truck);
                                setShowModal(true);
                            }}
                            className="text-green-400 text-sm font-medium underline hover:text-green-300"
                        >
                            Know More
                        </button>
                    </motion.div>
                ))}
            </div>

            {showModal && selectedTruck && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-40 dark:bg-gray-900 dark:bg-opacity-40 flex justify-center items-center px-4 pt-10">
                    <div className="w-full max-w-2xl h-[85vh] bg-white flex flex-col md:flex-row rounded-md overflow-hidden shadow-xl">
                        <div className=" bg-[#f2f6ff] dark:bg-gray-800 text-gray-800 dark:text-gray-300 w-full md:w-1/2 p-6 text-center px-10 py-20">
                            <img src={selectedTruck.image} alt={selectedTruck.title} className="mx-auto w-44 h-32 object-contain" />
                            <div className="text-sm text-gray-800 dark:text-gray-400  mt-2">{selectedTruck.dimension}</div>
                            <div className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 dark:bg-green-700 text-green-800 dark:text-green-300  rounded-full text-sm font-medium mt-3">
                                <FaWeightHanging /> {selectedTruck.size}
                            </div>
                            <h2 className="text-xl font-semibold mt-4">{selectedTruck.title}</h2>
                            <p className="text-sm text-gray-800 dark:text-gray-400 mt-1">
                                Starting from <strong>{selectedTruck.price}</strong>
                            </p>
                            <hr className="my-6" />
                            <div className="text-left">
                                <h3 className="font-semibold text-sm mb-2">Best for sending:</h3>
                                <ul className="space-y-2 text-xs text-gray-800 dark:text-gray-400">
                                    <li className="flex items-center gap-2"><FaBox /> FMCG Food Products</li>
                                    <li className="flex items-center gap-2"><FaFlask /> Chemicals</li>
                                    <li className="flex items-center gap-2"><FaAppleAlt /> Fruits & Vegetables</li>
                                </ul>
                            </div>
                        </div>

                        {/* Right Side: Form */}
                        <div className="relative bg-white dark:bg-black text-gray-800 dark:text-gray-300 w-full md:w-1/2 p-6 py-10 overflow-y-auto">
                            <button
                                onClick={() => setShowModal(false)}
                                className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 dark:hover:text-red-600 hover:text-red-500 text-2xl"
                            >
                                <FaTimes />
                            </button>

                            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-300 mb-6">Get an estimate</h2>

                            <div className="space-y-4">
                                {/* Floating Input for Pickup Address */}
                                <div className="relative w-full">
                                    <label htmlFor="pickup"
                                        className={`absolute left-3 transition-all duration-200 ease-in-out bg-white dark:bg-black px-1 ${isPickupFocused || pickup
                                            ? '-top-2 text-sm text-gray-400 dark:text-gray-300 border-black' : 'top-4 text-base text-gray-400 dark:text-gray-300'}`} >
                                        Pickup Address *
                                    </label>
                                    <input id="pickup" type="text" value={pickup}
                                        onChange={(e) => setPickup(e.target.value)}
                                        onFocus={() => setIsPickupFocused(true)}
                                        onBlur={() => setIsPickupFocused(false)}
                                        placeholder=" "
                                        className="w-full h-14 px-3 pt-6 pb-2 text-base bg-white dark:bg-black text-gray-900 dark:text-gray-300 border border-gray-300 rounded-md focus:outline-none"
                                    />
                                </div>

                                {/* Floating Input for Drop Address */}
                                <div className="relative w-full">
                                    <label htmlFor="drop"
                                        className={`absolute left-3 transition-all duration-200 ease-in-out bg-white dark:bg-black px-1 ${isDropFocused || drop
                                            ? '-top-2 text-sm text-gray-400 dark:text-gray-300 border-black' : 'top-4 text-base text-gray-400 dark:text-gray-300'}`} >
                                        Drop Address *
                                    </label>
                                    <input id="drop" type="text" value={drop}
                                        onChange={(e) => setDrop(e.target.value)}
                                        onFocus={() => setIsDropFocused(true)}
                                        onBlur={() => setIsDropFocused(false)}
                                        placeholder=" "
                                        className="w-full h-14 px-3 pt-6 pb-2 text-base bg-white dark:bg-black text-gray-900 dark:text-gray-300 border border-gray-300 rounded-md focus:outline-none"
                                    />
                                </div>

                                {/* Floating Input for Phone Number */}
                                <div className="relative w-full">
                                    <label htmlFor="mobile"
                                        className={`absolute left-3 transition-all duration-200 ease-in-out bg-white dark:bg-black px-1 ${isMobileFocused || mobile
                                            ? '-top-2 text-sm text-gray-400 dark:text-gray-300 border-black' : 'top-4 text-base text-gray-400 dark:text-gray-300'}`} >
                                        Phone Number *
                                    </label>
                                    <input id="mobile" type="text" value={mobile}
                                        onChange={handleMobileChange}
                                        onFocus={() => setIsMobileFocused(true)}
                                        onBlur={() => setIsMobileFocused(false)}
                                        maxLength="10"
                                        placeholder=" "
                                        className="w-full h-14 px-3 pt-6 pb-2 text-base bg-white dark:bg-black text-gray-900 dark:text-gray-300 border border-gray-300 rounded-md focus:outline-none"
                                    />
                                    {mobile && !isMobileValid && (
                                        <p className="text-red-500 text-xs mt-1">Please enter a valid 10-digit number.</p>
                                    )}
                                </div>

                                {/* Floating Input for Name */}
                                <div className="relative w-full">
                                    <label htmlFor="name"
                                        className={`absolute left-3 transition-all duration-200 ease-in-out bg-white dark:bg-black px-1 ${isNameFocused || name
                                            ? '-top-2 text-sm text-gray-400 dark:text-gray-300 border-black' : 'top-4 text-base text-gray-400 dark:text-gray-300'}`} >
                                        Name *
                                    </label>
                                    <input id="name" type="text" value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        onFocus={() => setIsNameFocused(true)}
                                        onBlur={() => setIsNameFocused(false)}
                                        placeholder=" "
                                        className="w-full h-14 px-3 pt-6 pb-2 text-base bg-white dark:bg-black text-gray-900 dark:text-gray-300 border border-gray-300 rounded-md focus:outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">What describes you best? *</label>
                                    <div className="flex gap-3">
                                        <button
                                            onClick={() => setSelectedType('personal')}
                                            className={`flex-1 h-12 rounded border text-sm font-medium ${selectedType === 'personal'
                                                ? 'bg-green-600 text-white'
                                                : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-gray-300'
                                                }`}
                                        >
                                            Personal User
                                        </button>
                                        <button
                                            onClick={() => setSelectedType('business')}
                                            className={`flex-1 h-12 rounded border text-sm font-medium ${selectedType === 'business'
                                                ? 'bg-green-600 text-white'
                                                : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-gray-300'
                                                }`}
                                        >
                                            Business User
                                        </button>
                                    </div>
                                </div>

                                <button
                                    disabled={!isFormComplete}
                                    className={`w-full flex justify-center items-center gap-2 h-14 rounded-md text-white text-sm font-semibold ${isFormComplete
                                        ? 'bg-green-600 hover:bg-green-700'
                                        : 'bg-gray-300 dark:bg-gray-800 cursor-not-allowed'
                                        }`}
                                >
                                    Get an estimate <span className="text-xl">→</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TruckCard;
