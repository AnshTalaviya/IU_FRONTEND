import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Auto_Rides() {

    useEffect(() => {
        AOS.init({
            duration: 500,
            once: false,
            mirror: true,
            easing: 'ease-in-out'
        });
    }, []);



    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const slides = [
        {
            title: "GreenAuto Standard",
            subtitle: "Reliable and affordable auto rickshaw rides for everyday travel",
            image: "/images/auto.jpeg",
        },
        {
            title: "GreenAuto Premium",
            subtitle: "Comfort with style – premium auto rides for your urban lifestyle",
            image: "/images/auto2.jpg"
        },
    ];


    return (
        <div className="relative overflow-hidden">

            {/* Hero Slider */}
            <section className="min-h-[90vh] bg-gradient-to-br from-green-700 to-green-900 text-white overflow-hidden flex items-center pb-10 px-4 sm:px-6 lg:px-8">

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
                <div className="flex flex-col lg:flex-row items-center justify-between w-full h-full gap-10 relative z-20 mt-10">
                    {/* Left Content */}
                    <div className="w-full lg:w-[40%] relative z-20 flex items-center justify-center min-h-[300px] rounded-2xl">
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className={`w-full transition-all duration-1000 ease-in-out ${index === currentSlide
                                    ? 'opacity-100 scale-100 absolute'
                                    : 'opacity-0 scale-95 pointer-events-none absolute'
                                    } px-2 sm:px-6 flex flex-col items-center lg:items-start text-center lg:text-left`}
                            >
                                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-3 leading-tight transition text-white">
                                    {slide.title}
                                </h1>
                                <p className="text-sm sm:text-lg lg:text-xl mb-5 transition duration-1000 delay-200 text-gray-200">
                                    {slide.subtitle}
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition duration-1000 delay-400 min-w-[280px] sm:min-w-[320px]">
                                    <Link to="/book" className="w-full sm:w-auto">
                                        <button className="bg-white text-green-600 font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl whitespace-nowrap w-full">
                                            Book a Ride
                                        </button>
                                    </Link>
                                    <Link to="/safety" className="w-full sm:w-auto">
                                        <button className="bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl whitespace-nowrap w-full">
                                            Learn About Safety
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Slider */}
                    <div className="w-full lg:w-[60%] h-[40vh] sm:h-[50vh] md:h-[70vh] relative overflow-hidden rounded-2xl shadow-2xl transition-transform duration-300 flex items-center justify-center">
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


            {/* Features Section */}
            <div className="bg-white dark:bg-gray-900 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 relative z-10 relative overflow-hidden">

                <div className="max-w-7xl mx-auto text-center" data-aos="fade-up">
                    <motion.h1
                        className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-green-600 mb-3 sm:mb-4"
                        whileHover={{
                            transition: { ease: "easeInOut" }
                        }}
                        data-aos="fade-up"
                        data-aos-easing="ease-in-out"
                    >
                        Why Choose GreenAuto?
                    </motion.h1>
                    <motion.p
                        className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-6 sm:mb-10"
                        data-aos-easing="ease-in-out"
                    >
                        The perfect balance of comfort, affordability, and convenience for your daily city travels
                    </motion.p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {/* Card Template */}
                        {[
                            {
                                title: "Cost Effective",
                                desc: "More affordable than cars while providing better protection from weather than bikes",
                                iconPath: (
                                    <>
                                        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                                        <circle cx="7" cy="17" r="2" />
                                        <path d="M9 17h6" />
                                        <circle cx="17" cy="17" r="2" />
                                    </>
                                ),
                            },
                            {
                                title: "Safe & Verified",
                                desc: "All our auto drivers are verified and trained for safe and comfortable rides",
                                iconPath: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
                            },
                            {
                                title: "Quick & Nimble",
                                desc: "Autos can navigate through traffic more efficiently than larger vehicles",
                                iconPath: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />,
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{
                                    boxShadow: "0 12px 28px rgba(0, 0, 0, 0.12)",
                                    transition: { ease: "easeOut" },
                                }}
                                className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-4 sm:p-6 text-left transition-all duration-300 ease-in-out transform hover:scale-[1.01]"
                                data-aos="fade-up"
                                data-aos-easing="ease-in-out"
                            >
                                <div className="mb-3 sm:mb-4 text-green-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        {item.iconPath}
                                    </svg>
                                </div>
                                <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                    {item.title}
                                </h2>
                                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>


            {/* Pricing Section */}
            <section className="bg-gray-100 dark:bg-gray-800 py-8 sm:py-16 px-4 sm:px-6 lg:px-8 flex justify-center items-center relative overflow-hidden">
                <div
                    className="max-w-6xl w-full text-center"
                    data-aos="zoom-out"
                    data-aos-easing="ease-in-out"
                >
                    {/* Heading */}
                    <motion.h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-green-600">
                        Simple & Transparent Pricing
                    </motion.h1>

                    {/* Subtext */}
                    <motion.p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-2">
                        Affordable auto rides with no hidden charges, clear pricing for every journey
                    </motion.p>

                    {/* Cards */}
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-8 sm:mt-12 mx-auto">
                        {/* === Card Template === */}
                        {[
                            {
                                title: "GreenAuto Standard",
                                price: "₹8",
                                baseFare: "₹25",
                                features: ["Standard auto", "Up to 3 passengers", "Basic comfort"],
                                badge: "",
                                link: "/Book_ride"
                            },
                            {
                                title: "GreenAuto Premium",
                                price: "₹10",
                                baseFare: "₹35",
                                features: ["Upgraded auto", "Up to 3 passengers", "Enhanced comfort & space"],
                                badge: "POPULAR",
                                link: "/Book_ride"
                            }
                        ].map((plan, index) => (
                            <motion.div key={index}
                                className="relative border border-gray-300 dark:border-gray-600 rounded-lg shadow-md bg-white dark:bg-gray-900 w-full sm:w-[300px] md:w-[350px]"
                                data-aos="fade-up"
                                data-aos-easing="ease-in-out"
                            >
                                {plan.badge && (
                                    <div className="absolute top-0 right-0 bg-yellow-400 text-white text-xs font-bold px-2 py-1 rounded-b rounded-tr shadow ">
                                        {plan.badge}
                                    </div>
                                )}

                                {/* Card Header */}
                                <div className="bg-green-600 text-white py-3 rounded-t-lg text-center">
                                    <motion.h3
                                        className="text-base sm:text-lg font-semibold"
                                    >
                                        {plan.title}
                                    </motion.h3>
                                </div>

                                {/* Pricing Content */}
                                <div className="py-4 sm:py-6 text-center">
                                    <motion.h2
                                        className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white"
                                    >
                                        {plan.price}
                                        <span className="text-sm font-light">/km</span>
                                    </motion.h2>
                                    <motion.p
                                        className="text-sm text-gray-500 dark:text-gray-300 mt-1"
                                    >
                                        Base fare: {plan.baseFare}
                                    </motion.p>

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

            {/* 4th part */}
            <div className="bg-white dark:bg-gray-900 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">

                <section className="bg-green-700 rounded-xl sm:rounded-2xl text-white py-8 sm:py-12 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto my-6 sm:my-12 transition-all duration-700 ease-in-out">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
                        <div data-aos="zoom-in" className="space-y-5 text-center md:text-left">
                            <motion.h2
                                className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight"
                                whileHover={{
                                    transition: { duration: 0.3, ease: "easeInOut" }
                                }}
                            >
                                Ready for an Auto Ride?
                            </motion.h2>

                            <motion.p
                                className="text-base sm:text-lg text-white/90 leading-relaxed"
                                whileHover={{
                                    transition: { duration: 0.3, ease: "easeInOut" }
                                }}
                            >
                                Download our app and book your first auto ride with a special discount. Use code FIRSTAUTO for 25% off.
                            </motion.p>

                            <div className="pt-3">
                                <Link
                                    to="/book"
                                    className="inline-flex items-center justify-center gap-2 text-sm font-medium h-11 px-8 rounded-md bg-white text-green-700 hover:bg-gray-100 transition-all duration-300 ease-in-out transform hover:scale-105"
                                >
                                    Rent Now
                                </Link>
                            </div>
                        </div>

                        <div className="flex justify-center" data-aos="zoom-in">
                            <motion.img
                                whileHover={{
                                    transition: { duration: 0.3, ease: "easeInOut" }
                                }}

                                className="w-full max-h-[250px] sm:max-h-[300px] md:max-h-[350px] rounded-lg shadow-lg transition-all duration-700 ease-in-out object-cover"
                                src="/images/auto2.jpg"

                                alt="GreenCar App"
                            />
                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}
