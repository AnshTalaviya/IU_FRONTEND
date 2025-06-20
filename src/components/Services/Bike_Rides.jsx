import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';


export default function Bike_Rides() {

    useEffect(() => {
        AOS.init({
            duration: 500,
            once: false,
            mirror: true,
            easing: 'ease-in-out'
        });
    }, []);

    const features = [
        {
            title: "Beat the Traffic",
            desc: "Navigate through congested roads quickly with skilled riders who know the best routes",
            icon: (
                <>
                    <circle cx="18.5" cy="17.5" r="3.5"></circle>
                    <circle cx="5.5" cy="17.5" r="3.5"></circle>
                    <circle cx="15" cy="5" r="1"></circle>
                    <path d="M12 17.5V14l-3-3 4-3 2 3h2"></path>
                </>
            ),
        },
        {
            title: "Safety First",
            desc: "All rides come with complimentary helmets, trained riders, and real-time tracking",
            icon: (
                <path d="M12 2l7 4v6c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-4z" />
            ),
        },
        {
            title: "Affordable & Fast",
            desc: "Our bike rides are the most cost-effective and quickest way to reach nearby destinations",
            icon: (
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            ),
        },
    ];


    const slides = [
        {
            title: "GreenBike Standard",
            subtitle: "Reliable and affordable Bike rides for everyday travel",
            image: "/images/Auto_rides.png"


        },
        {
            title: "GreenBike Premium",
            subtitle: "Comfort with style – premium Bike rides for your urban lifestyle",
            image: "/images/auto2.jpg"
        },
    ];


    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);



    return (
        <div className="relative overflow-hidden">

            {/* Hero Slider */}
            <section className="relative min-h-[90vh] bg-gradient-to-br from-green-700 to-green-900 text-white overflow-hidden flex items-center py-6 sm:py-10 px-4 sm:px-6 lg:px-12">
                {/* Ocean Wave Background */}
                <div className="absolute inset-0 overflow-hidden z-0">
                    <div className="ocean">
                        {[1, 2, 3, 4, 5, 6].map((n) => (
                            <div key={n} className={`wave wave${n}`}></div>
                        ))}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-green-700/40 to-green-900/40"></div>
                </div>

                {/* Content */}
                <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6 sm:gap-10 relative z-20 mt-6 sm:mt-10">
                    {/* Left Side Text */}
                    <div className="w-full md:w-[40%] min-h-[250px] sm:min-h-[300px] flex items-center justify-center">
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className={`transition-all duration-1000 ease-in-out ${index === currentSlide
                                    ? 'opacity-100 scale-100 absolute'
                                    : 'opacity-0 scale-95 pointer-events-none absolute'
                                    } px-2 sm:px-6 flex flex-col items-center md:items-start text-center md:text-left`}
                            >
                                <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 leading-tight">
                                    {slide.title}
                                </h1>
                                <p className="text-sm sm:text-base lg:text-lg xl:text-xl mb-4 sm:mb-5 text-gray-200 transition-opacity duration-500">
                                    {slide.subtitle}
                                </p>
                                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start min-w-[280px] sm:min-w-[320px]">
                                    <Link to="/book" className="w-full sm:w-auto">
                                        <button className="bg-white text-green-600 font-semibold px-4 sm:px-6 py-2 sm:py-3 transition-all duration-300 ease-in-out transform hover:scale-105 rounded-lg shadow-lg w-full whitespace-nowrap text-sm sm:text-base">
                                            Book a Ride
                                        </button>
                                    </Link>
                                    <Link to="/safety" className="w-full sm:w-auto">
                                        <button className="bg-green-600 text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 transition-all duration-300 ease-in-out transform hover:scale-105 rounded-lg shadow-lg w-full whitespace-nowrap text-sm sm:text-base">
                                            Learn About Safety
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Side Image */}
                    <div className="w-full md:w-[60%] h-[40vh] sm:h-[50vh] md:h-[70vh] relative overflow-hidden rounded-2xl shadow-2xl flex items-center justify-center">
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentSlide
                                    ? 'opacity-100 scale-100'
                                    : 'opacity-0 scale-105 pointer-events-none'
                                    }`}
                            >
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className="w-full h-full object-cover rounded-2xl"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/50 z-10 rounded-2xl" />
                            </div>
                        ))}
 
                    </div>
                </div>

                {/* Wave Animation CSS */}
                <style jsx>{`
        .ocean {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
          background: linear-gradient(to bottom, #166534, rgb(1, 136, 52));
        }

        .wave {
          position: absolute;
          width: 200%;
          height: 100%;
          background: linear-gradient(45deg, rgba(13, 50, 27, 0.6), rgba(20, 83, 45, 0.3));
          border-radius: 50%;
          transform-origin: 50% 50%;
        }

        ${[...Array(6)].map((_, i) => `
          .wave${i + 1} {
            animation: wave${i + 1} ${8 + i * 2}s linear infinite;
            z-index: ${i + 1};
            opacity: ${0.9 - i * 0.1};
            top: ${i * 15}%;
            left: ${-50 + i * 5}%;
            animation-delay: -${i * 1.5}s;
          }

          @keyframes wave${i + 1} {
            0% { transform: translateX(0) scaleY(1); }
            50% { transform: translateX(-25%) scaleY(0.8); }
            100% { transform: translateX(-50%) scaleY(1); }
          }
        `).join('')}
                `}</style>
            </section>


            {/* Why Choose GreenBike */}
            <div className="bg-white dark:bg-gray-900/10 py-12 px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-7xl mx-auto text-center" data-aos="fade-up">
                    <motion.h1
                        className="text-3xl sm:text-4xl font-extrabold text-green-600 mb-4"
                    >
                        Why Choose GreenBike?
                    </motion.h1>

                    <motion.p
                        className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-10"
                    >
                        The fastest way to navigate through city traffic with trained riders and safety equipment
                    </motion.p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((item, idx) => (
                            <motion.div
                                key={idx}
                                className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 text-left transition-all duration-300 ease-in-out transform hover:scale-[1.01]"
                                data-aos="fade-up"
                                data-aos-easing="ease-in-out"
                            >
                                <div className="mb-4 text-green-600">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-8 w-8"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        {item.icon}
                                    </svg>
                                </div>
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                    {item.title}
                                </h2>
                                <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Pricing Section */}
            <section className="py-8 sm:py-16 px-4 sm:px-6 lg:px-8 flex justify-center items-center relative overflow-hidden">
                {/* Main Content */}
                <div className="max-w-6xl w-full text-center relative z-10" data-aos="zoom-out" data-aos-easing="ease-in-out">
                    {/* Heading */}
                    <motion.h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-green-600">
                        Simple & Affordable Pricing
                    </motion.h1>

                    {/* Subtext */}
                    <motion.p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-2">
                        The most cost-effective way to travel short to medium distances in the city
                    </motion.p>

                    {/* Pricing Cards */}
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-8 sm:mt-12 mx-auto">
                        {[
                            {
                                title: "GreenBike Standard",
                                price: "₹6",
                                baseFare: "₹15",
                                features: ["Standard bike", "Single passenger", "Helmet provided"],
                                badge: "",
                                link: "/Book_ride"
                            },
                            {
                                title: "GreenBike Premium",
                                price: "₹8",
                                baseFare: "₹20",
                                features: ["Performance bike", "Single passenger", "Premium helmet & jacket"],
                                badge: "POPULAR",
                                link: "/Book_ride"
                            }
                        ].map((plan, index) => (
                            <motion.div
                                key={index}
                                className="relative border border-gray-300 dark:border-gray-600 rounded-lg shadow-md bg-white dark:bg-gray-900 w-full sm:w-[300px] md:w-[350px]"
                                data-aos="fade-up"
                                data-aos-easing="ease-in-out"
                            >
                                {/* Badge */}
                                {plan.badge && (
                                    <div className="absolute top-0 right-0 bg-yellow-400 text-white text-xs font-bold px-2 py-1 rounded-b rounded-tr shadow">
                                        {plan.badge}
                                    </div>
                                )}

                                {/* Card Header */}
                                <div className="bg-green-600 text-white py-3 rounded-t-lg text-center">
                                    <motion.h3 className="text-base sm:text-lg font-semibold">
                                        {plan.title}
                                    </motion.h3>
                                </div>

                                {/* Price Section */}
                                <div className="py-4 sm:py-6 text-center">
                                    <motion.h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                                        {plan.price}
                                        <span className="text-sm font-light">/km</span>
                                    </motion.h2>
                                    <motion.p className="text-sm text-gray-500 dark:text-gray-300 mt-1">
                                        Base fare: {plan.baseFare}
                                    </motion.p>

                                    {/* Features */}
                                    <div className="mt-4 space-y-2 sm:space-y-3 text-gray-700 dark:text-gray-200 text-sm text-left px-4 sm:px-6">
                                        {plan.features.map((feature, fIndex) => (
                                            <motion.p key={fIndex}>
                                                <span className="inline-block w-2 h-2 rounded-full bg-green-600 mr-3 sm:mr-4 shadow-[0_0_8px_0.2px_#bbf7d0]" />
                                                {feature}
                                            </motion.p>
                                        ))}
                                    </div>
                                </div>

                                {/* CTA Button */}
                                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                                    <Link to={plan.link} className="block w-full">
                                        <motion.button
                                            className="w-full py-2 sm:py-3 bg-green-600 text-white font-semibold rounded text-sm sm:text-base hover:scale-102"
                                        >
                                            Book Now
                                        </motion.button>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <div className="bg-white dark:bg-gray-900 py-10 px-4 sm:px-6 lg:px-8">
                <section className="bg-[#166534] rounded-2xl text-white py-10 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                        {/* Left Text */}
                        <div data-aos="zoom-in" className="space-y-5 text-center md:text-left">
                            <motion.h2
                                className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight"
                            >
                                Ready for a Quick Ride?
                            </motion.h2>

                            <motion.p
                                className="text-base sm:text-lg text-white/90 leading-relaxed"
                            >
                                Download our app and book your first bike ride with a special discount. Use code FIRSTBIKE for 30% off.

                            </motion.p>

                            <div className="pt-3">
                                <Link
                                    to="/book"
                                    className="inline-flex items-center justify-center gap-2 text-sm font-medium h-11 px-8 rounded-md bg-white text-green-700 transition-all duration-300 ease-in-out transform hover:scale-105"
                                >
                                    Rent Now
                                </Link>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="flex justify-center md:justify-end" data-aos="zoom-in">
                            <motion.img
                                className="w-full h-auto rounded-lg shadow-lg"
                                src="/images/Rentals2.png"
                                alt="GreenCar App"
                            />
                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}