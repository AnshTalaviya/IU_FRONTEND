// import React, { useState } from "react";

// const BookRideForm = () => {
//     const [isSchedule, setIsSchedule] = useState(false);
//     const [pickup, setPickup] = useState("");
//     const [dropoff, setDropoff] = useState("");
//     const [date, setDate] = useState("");
//     const [time, setTime] = useState("");

//     const handleScheduleClick = () => {
//         const now = new Date();
//         const today = now.toISOString().split("T")[0]; // yyyy-mm-dd
//         const currentTime = now.toTimeString().slice(0, 5); // hh:mm
//         setIsSchedule(true);
//         setDate(today);
//         setTime(currentTime);
//     };

//     return (
//         <div className="flex justify-center items-center px-4 py-10 bg-gray-50 dark:bg-gray-900 dark:text-white min-h-screen">
//             <div className="bg-white dark:bg-[#0F141B] rounded-xl shadow-lg p-8 w-full max-w-xl">
//                 <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Book Your Ride</h2>

//                 {/* Pickup */}
//                 <div className="mb-4">
//                     <label className="block text-gray-700 dark:text-white font-medium mb-1">Pickup Location</label>
//                     <div className="flex items-center border border-gray-300 rounded px-3 py-2 bg-gray-50">
//                         <span className="text-gray-400   mr-2">📍</span>
//                         <input
//                             type="text"
//                             placeholder="Enter pickup location"
//                             value={pickup}
//                             onChange={(e) => setPickup(e.target.value)}
//                             className="w-full bg-transparent outline-none"
//                         />
//                     </div>
//                 </div>

//                 {/* Dropoff */}
//                 <div className="mb-4">
//                     <label className="block text-gray-700 dark:text-white font-medium mb-1">Dropoff Location</label>
//                     <div className="flex items-center border border-gray-300 rounded px-3 py-2 bg-gray-50">
//                         <span className="text-gray-400 mr-2">✈️</span>
//                         <input
//                             type="text"
//                             placeholder="Enter dropoff location"
//                             value={dropoff}
//                             onChange={(e) => setDropoff(e.target.value)}
//                             className="w-full bg-transparent outline-none"
//                         />
//                     </div>
//                 </div>

//                 {/* Toggle Buttons */}
//                 <div className="mb-4 flex border border-gray-300 rounded overflow-hidden">
//                     <button
//                         onClick={() => setIsSchedule(false)}
//                         className={`w-1/2 py-2 font-medium ${!isSchedule ? "bg-gray-100 text-gray-900" : "bg-white text-gray-500"
//                             }`}
//                     >
//                         Ride Now
//                     </button>
//                     <button
//                         onClick={handleScheduleClick}
//                         className={`w-1/2 py-2 font-medium ${isSchedule ? "bg-gray-100 text-gray-900" : "bg-white text-gray-500"
//                             }`}
//                     >
//                         Schedule
//                     </button>
//                 </div>

//                 {/* Conditional Content */}
//                 {isSchedule ? (
//                     <>
//                         {/* Schedule: Show Date & Time Fields */}
//                         <div className="mb-4">
//                             <label className="block text-gray-700 font-medium mb-1">Date</label>
//                             <div className="flex items-center border border-gray-300 rounded px-3 py-2 bg-gray-50">
//                                 <span className="text-gray-400 mr-2">
//                                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
//                                         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
//                                         className="lucide lucide-calendar h-5 w-5 text-gray-400">
//                                         <path d="M8 2v4"></path>
//                                         <path d="M16 2v4"></path>
//                                         <rect width="18" height="18" x="3" y="4" rx="2"></rect>
//                                         <path d="M3 10h18"></path>
//                                     </svg>
//                                 </span>
//                                 <input
//                                     type="date"
//                                     value={date}
//                                     onChange={(e) => setDate(e.target.value)}
//                                     className="w-full bg-transparent outline-none"
//                                 />
//                             </div>
//                         </div>

//                         <div className="mb-4">
//                             <label className="block text-gray-700 font-medium mb-1">Time</label>
//                             <div className="flex items-center border border-gray-300 rounded px-3 py-2 bg-gray-50">
//                                 <span className="text-gray-400 mr-2">
//                                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
//                                         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
//                                         className="lucide lucide-clock h-5 w-5 text-gray-400">
//                                         <circle cx="12" cy="12" r="10"></circle>
//                                         <polyline points="12 6 12 12 16 14"></polyline>
//                                     </svg>
//                                 </span>

//                                 <input
//                                     type="time"
//                                     value={time}
//                                     onChange={(e) => setTime(e.target.value)}
//                                     className="w-full bg-transparent outline-none"
//                                 />
//                             </div>
//                             <p className="text-xs text-green-600 mt-1">
//                                 Rides can be scheduled at least 15 minutes in advance
//                             </p>
//                         </div>
//                     </>
//                 ) : (
//                     <>
//                         {/* Ride Now: Show Immediate Pickup Message */}
//                         <div className="mb-4 px-3 py-2">
//                             <p className="text-sm text-gray-600 dark:text-gray-400">
//                                 Book a ride for immediate pickup at your location
//                             </p>
//                         </div>
//                     </>
//                 )}

//                 {/* Submit */}
//                 <button className="w-full py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700">
//                     Find Rides
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default BookRideForm;



import React from 'react';
import { Link } from 'react-router-dom';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Car_Rides() {

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  return (
    <>

      {/* Hero Section */}
      <div className="bg-[#166534] text-white px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div data-aos="fade-up" className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
          {/* Left */}
          <div className="w-full md:w-1/2 md:pl-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">GreenCar Rides</h1>
            <p className="text-lg md:text-xl mb-8">
              Comfortable, affordable, and eco-friendly car rides for your daily commute
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white hover:bg-white/80 text-green-600 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition">
                <Link to="/book">   Book a Ride </Link>
              </button>
              <button className="bg-green-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-green-700 transition">
              <Link to="/safety">    Learn About Safety</Link>
            
              </button>
            </div>
          </div>

          {/* Right */}

          <div className="w-full md:w-1/2 relative flex justify-center items-center ">
            <img src="/images/cars.png"
              alt="Car"
              className="rounded-xl shadow-lg w-full h-[250px] sm:h-[350px] md:h-[400px] object-cover"
            />

            {/* City Coverage Card */}
            <div className="absolute -bottom-10  bg-white text-gray-800 dark:bg-gray-800 dark:text-white shadow-xl rounded-lg p-4 flex items-center gap-4 w-[230px]">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-300">Average Arrival Time</p>
                <p className="font-semibold text-gray-900 dark:text-white">3 minutes</p>
              </div>
            </div>
          </div>
          {/* <div className="w-full md:w-1/2 relative flex justify-center items-center">
            <img
              src="/images/cars.png"
              alt="Car"
              className="rounded-xl shadow-lg w-full max-w-[1400px] h-[250px] sm:h-[350px] md:h-[450px] object-cover mt-6 md:mt-10"
            />

            <div className="  absolute top-1/2 left-1/2   transform -translate-x-1/2 -translate-y-1/2  translate-x-[-3rem] translate-y-[105px] 

                 sm:translate-x-[-2rem] sm:translate-y-[70px]    md:translate-x-[-2.5rem] md:translate-y-[90px]   lg:translate-x-[-3rem] lg:translate-y-[105px]  

               bg-white text-gray-800 dark:bg-gray-800 dark:text-white   shadow-xl rounded-lg p-3 flex items-center gap-4   w-[230px]">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-300">Average Arrival Time</p>
                <p className="font-semibold text-gray-900 dark:text-white">3 minutes</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* Why Choose */}
      <div className="bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            Why Choose GreenCar?
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-10">
            We provide the best car ride experience with comfort, safety, and affordability in mind
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 text-left">
              <div className="mb-4 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                  <circle cx="7" cy="17" r="2" />
                  <path d="M9 17h6" />
                  <circle cx="17" cy="17" r="2" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Comfortable Rides</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Enjoy spacious, air-conditioned cars with professional drivers for a smooth journey
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 text-left">
              <div className="mb-4 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Safe & Secure</h2>
              <p className="text-gray-600 dark:text-gray-300">
                All rides are monitored with real-time tracking, emergency assistance, and verified drivers
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 text-left">
              <div className="mb-4 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Quick & Efficient</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Fast pickup times, optimized routes, and experienced drivers to get you there quickly
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16 px-4 sm:px-8">
        <div data-aos="zoom-out" className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            Simple & Transparent Pricing
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2 text-base">
            Affordable auto rides with no hidden charges, clear pricing for every journey
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 px-2 sm:px-2 lg:px-0 mx-auto">

            {/* Mini */}
            <div className="relative border border-gray-300 dark:border-gray-600 rounded-lg shadow-md bg-white dark:bg-gray-900">
              <div className="bg-green-600 text-white py-3 rounded-t-lg text-center">
                <h3 className="text-lg font-semibold">GreenCar Mini</h3>
              </div>
              <div className="py-6 text-center">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white">₹9<span className="text-sm font-light">/km</span></h2>
                <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">Base fare: ₹30</p>
                <div className="mt-4 space-y-3 text-gray-700 dark:text-gray-200 text-sm text-left px-6">
                  <p><span className="inline-block w-2 h-2 rounded-full bg-green-600 mr-2 shadow-[0_0_8px_2px_#bbf7d0]" />Compact Hatchback</p>
                  <p><span className="inline-block w-2 h-2 rounded-full bg-green-600 mr-2 shadow-[0_0_8px_2px_#bbf7d0]" />Up to 3 passengers</p>
                  <p><span className="inline-block w-2 h-2 rounded-full bg-green-600 mr-2 shadow-[0_0_8px_2px_#bbf7d0]" />Air conditioning</p>
                </div>
              </div>
              <div className="px-6 pb-6">
                <Link to="/Book_ride">
                  <button className="w-full py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded transition">Book Now</button>
                </Link>
              </div>
            </div>
            {/* 2 */}
            <div className="relative border border-gray-300 dark:border-gray-600 rounded-lg shadow-md bg-white dark:bg-gray-900">
              <div className="absolute top-0 right-0 bg-yellow-400 text-white text-xs font-bold px-2 py-1 rounded-b rounded-tr shadow">
                GreenCar Sedan
              </div>
              <div className="bg-green-600 text-white py-3 rounded-t-lg text-center">
                <h3 className="text-lg font-semibold">GreenAuto Premium</h3>
              </div>
              <div className="py-6 text-center">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white">₹12<span style={{ fontSize: "17px", fontWeight: "lighter" }}>/km</span></h2>
                <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">Base fare: ₹40</p>

                <div className="mt-4 space-y-3 text-gray-700 dark:text-gray-200 text-sm text-left px-6">
                  <p>
                    <span className="inline-block w-2 h-2 rounded-full bg-green-600 mr-2 shadow-[0_0_8px_2px_#bbf7d0]" ></span>
                    Spacious Sedan
                  </p>
                  <p>
                    <span className="inline-block w-2 h-2 rounded-full bg-green-600 mr-2 shadow-[0_0_8px_2px_#bbf7d0]"></span>
                    Up to 4 passengers
                  </p>
                  <p>
                    <span className="inline-block w-2 h-2 rounded-full bg-green-600 mr-2 shadow-[0_0_8px_2px_#bbf7d0]"></span>
                    Premium comfort
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6">
                <Link to='/Book_ride'> <button className="w-full py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded transition">
                  Book Now
                </button></Link>
              </div>
            </div>
            {/* 3 */}
            <div className="relative border border-gray-300 dark:border-gray-600 rounded-lg shadow-md bg-white dark:bg-gray-900">
              <div className="bg-green-600 text-white py-3 rounded-t-lg text-center">
                <h3 className="text-lg font-semibold">GreenCar XL</h3>
              </div>
              <div className="py-6 text-center">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white">₹16<span style={{ fontSize: "17px", fontWeight: "lighter" }}>/km</span></h2>
                <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">Base fare: ₹60</p>

                <div className="mt-4 space-y-3 text-gray-700 dark:text-gray-200 text-sm text-left px-6">
                  <p>
                    <span className="inline-block w-2 h-2 rounded-full bg-green-600 mr-2 shadow-[0_0_8px_2px_#bbf7d0]"></span>
                    SUV/Premium vehicle
                  </p>
                  <p>
                    <span className="inline-block w-2 h-2 rounded-full bg-green-600 mr-2 shadow-[0_0_8px_2px_#bbf7d0]"></span>
                    Up to 6 passengers
                  </p>
                  <p>
                    <span className="inline-block w-2 h-2 rounded-full bg-green-600 mr-2 shadow-[0_0_8px_2px_#bbf7d0]"></span>
                    Extra luggage space
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6">
                <Link to='/Book_ride'> <button className="w-full py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded transition">
                  Book Now
                </button></Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/*  */}
      <div className="bg-white dark:bg-gray-900 py-12 px-2">

        <section className="bg-green-600 rounded-2xl text-white py-12 px-4 md:px-8 max-w-7xl mx-auto my-12 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Text Section */}
            <div data-aos="zoom-in" className="space-y-4 m-6">
              <h2 className="text-3xl md:text-4xl font-bold text-start">Ready to Experience GreenCar?</h2>
              <p className="text-lg opacity-90 text-start">
                Download our app and get your first ride with a special discount.
                Use code <strong>FIRSTRIDE</strong> for 50% off.
              </p>
              <div className="pt-4 text-start">
                <Link
                  to="/book"
                  className="inline-flex items-center justify-center gap-2 text-sm font-medium h-11 px-8 rounded-md bg-white text-green-700 hover:bg-gray-100 transition"
                >
                  Book Now
                </Link>
              </div>

            </div>

            {/* Image Section */}
            <div className="flex justify-center">
              <img
                src="/images/Rentals2.png"
                alt="GreenCar App"
                className="max-h-80 rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>
      </div>

    </>
  );
}
