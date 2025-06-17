import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'framer-motion';


export default function Intercity() {
    const routes = [
        {
            from: 'Mumbai',
            to: 'Pune',
            distance: '150 km',
            time: '3 hours',
            // price: '\u20B91,999',
            image: '/images/Mumbai.png',
        },
        {
            from: 'Delhi',
            to: 'Agra',
            distance: '233 km',
            time: '3.5 hours',
            // price: '\u20B92,499',
            image: '/images/Delhi.png',
        },
        {
            from: 'Bangalore',
            to: 'Mysore',
            distance: '150 km',
            time: '3.5 hours',
            // price: '\u20B91,899',
            image: '/images/Bangalore.png',
        },
        {
            from: 'Chennai',
            to: 'Pondicherry',
            distance: '170 km',
            time: '3 hours',
            // price: '\u20B91,799',
            image: '/images/Chennai.png',
        },
        {
            from: 'Hyderabad',
            to: 'Warangal',
            distance: '140 km',
            time: '2.5 hours',
            image: '/images/Hyderabad.jpg',
        },
        {
            from: 'Kolkata',
            to: 'Digha',
            distance: '180 km',
            time: '4 hours',
            image: '/images/kolkata.jpg',
        },
        {
            from: 'Jaipur',
            to: 'Ajmer',
            distance: '135 km',
            time: '2.5 hours',
            image: '/images/jaipur.jpg',
        },
        {
            from: 'Ahmedabad',
            to: 'Gandhinagar',
            distance: '30 km',
            time: '1 hour',
            image: '/images/adalaj.jpg',
        },
    ];
    const steps = [
        {
            number: "1",
            title: "Select Cities",
            description: "Choose your pickup and drop-off cities, along with your travel date and time"
        },
        {
            number: "2",
            title: "Choose Vehicle",
            description: "Select from our range of comfortable vehicles based on your needs and group size"
        },
        {
            number: "3",
            title: "Pay & Confirm",
            description: "Make a secure payment and receive instant confirmation for your journey"
        }
    ];

    useEffect(() => {
        AOS.init({
            duration: 500,
            once: false,
            mirror: true,
            easing: 'ease-in-out'
        });
    }, []);



    // Generate random positions for dots with animation properties
    const generateDots = () => {
        const dots = [];
        for (let i = 0; i < 50; i++) {
            dots.push({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 4 + 2,
                delay: Math.random() * 2,
                duration: Math.random() * 2 + 2,
                distance: Math.random() * 20 + 10
            });
        }
        return dots;
    };



    const intercityFeatures = [
        {
            title: "Premium Vehicles",
            desc: "Navigate through congested roads quickly with skilled riders who know the best routes.",
            icon: (
                <>
                    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                    <circle cx="7" cy="17" r="2" />
                    <path d="M9 17h6" />
                    <circle cx="17" cy="17" r="2" />
                </>
            ),
        },
        {
            title: "Safety First",
            desc: "Verified drivers, real-time tracking, and 24/7 customer support for peace of mind.",
            icon: <path d="M12 2l7 4v6c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-4z" />,
        },
        {
            title: "Fixed Pricing",
            desc: "No surge pricing or hidden charges. Pay the same price regardless of traffic or time.",
            icon: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />,
        },
    ];

    return (

        <div className="relative overflow-hidden ">
            {/* Animated Background Dots - For all sections except hero */}
            <div className="fixed inset-0 pointer-events-none z-0">
                {generateDots().map((dot) => (
                    <motion.div
                        key={dot.id}
                        className="absolute bg-green-500/50 rounded-full"
                        style={{
                            left: `${dot.x}%`,
                            top: `${dot.y}%`,
                            width: `${dot.size}px`,
                            height: `${dot.size}px`
                        }}
                        initial={{ opacity: 0, scale: 0, y: 0 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            y: [0, -dot.distance, 0],
                            transition: {
                                opacity: {
                                    delay: dot.delay,
                                    duration: 0.7,
                                    ease: "easeInOut"
                                },
                                scale: {
                                    delay: dot.delay,
                                    duration: 0.7,
                                    ease: "easeInOut"
                                },
                                y: {
                                    delay: dot.delay,
                                    duration: dot.duration,
                                    ease: "easeInOut",
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }
                            }
                        }}
                    />
                ))}
            </div>
            {/* Hero */}



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
                <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-6 sm:gap-10 relative z-20 mt-6 sm:mt-10">
                    {/* Left Text */}
                    <div className="w-full lg:w-[40%] min-h-[250px] flex flex-col items-center lg:items-start text-center lg:text-left px-2 sm:px-6">
                        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-3 leading-tight hover:scale-105 hover:text-green-200 transition duration-300">
                            Idhar Udhar Intercity
                        </h1>
                        <p className="text-sm sm:text-base lg:text-lg mb-4 text-gray-200">
                            Safe, comfortable, and reliable intercity travel with fixed pricing
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start min-w-[280px] sm:min-w-[320px]">
                                <Link to="/book" className="w-full sm:w-auto">
                                    <button className="bg-white text-green-600 font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg transition duration-300 hover:bg-gray-100 hover:scale-105 w-full whitespace-nowrap text-sm sm:text-base">
                                        Book an Intercity Ride
                                    </button>
                                </Link>
                                <Link to="/safety" className="w-full sm:w-auto">
                                    <button className="bg-green-600 text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg transition duration-300 hover:bg-green-700 hover:scale-105 w-full whitespace-nowrap text-sm sm:text-base">
                                        Learn About Safety
                                    </button>
                                </Link>
                            </div>

                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="w-full lg:w-[60%] h-[40vh] sm:h-[50vh] lg:h-[70vh] relative overflow-hidden rounded-2xl shadow-2xl flex items-center justify-center">
                        <img
                            src="/images/Intercity_Ride.png"
                            alt="Intercity Ride"
                            className="w-full h-full object-cover rounded-2xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/50 z-10 rounded-2xl" />

                        {/* Info Card */}
                        <div className="absolute bottom-4 z-20 bg-white text-gray-800 dark:bg-gray-800 dark:text-white shadow-xl rounded-lg p-3 sm:p-4 flex items-center gap-3 sm:gap-4 w-[200px] sm:w-[230px] transform hover:scale-[1.02] transition duration-300">
                            <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-green-200 flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 sm:h-6 sm:w-6 text-green-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 11.5a2 2 0 100-4 2 2 0 000 4z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-300">
                                    Available in
                                </p>
                                <p className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">
                                    50+ City Pairs
                                </p>
                            </div>
                        </div>
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
        `).join("")}
      `}</style>
            </section>




            {/* 2nd */}

            <div className="bg-gray-50 dark:bg-gray-900/50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center" data-aos="fade-up">
                    <motion.h1
                        className="text-3xl sm:text-4xl font-extrabold text-green-600 mb-4"
                        whileHover={{
                            scale: 1.05,
                            color: "#16a34a",
                            transition: { ease: "easeInOut" },
                        }}
                    >
                        Why Choose Intercity Service?
                    </motion.h1>
                    <motion.p
                        className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-10"
                        whileHover={{
                            scale: 1.05,
                            transition: { ease: "easeInOut" },
                        }}
                    >
                        The most comfortable and convenient way to travel between cities with professional drivers.
                    </motion.p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {intercityFeatures.map((item, idx) => (
                            <motion.div
                                key={idx}
                                className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 text-left"
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 12px 28px rgba(0, 0, 0, 0.12)",
                                    transition: { ease: "easeOut" },
                                }}
                                data-aos="fade-up"
                                data-aos-delay={idx * 100}
                                data-aos-easing="ease-in-out"
                            >
                                <div className="mb-4 text-green-600">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-8 w-8"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
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

            {/* 3 */}
            <section className="bg-gray-50 dark:bg-gray-800 py-10 px-0">
                <div data-aos="zoom-in" className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">Popular Intercity Routes</h2>
                    <p className="text-gray-600 mt-2 dark:text-gray-300">Most traveled routes with fixed fares and comfortable rides</p>
                </div>

                <div data-aos="fade-up" className="w-full">
                    <Slider
                        dots={true}
                        infinite={true}
                        speed={500}
                        slidesToShow={4}
                        slidesToScroll={1}
                        autoplay={true}
                        autoplaySpeed={2000}
                        arrows={false}
                        className="mx-0"
                        responsive={[
                            {
                                breakpoint: 1024,
                                settings: {
                                    slidesToShow: 3,
                                    slidesToScroll: 1,
                                }
                            },
                            {
                                breakpoint: 768,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 1
                                }
                            },
                            {
                                breakpoint: 480,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1
                                }
                            }
                        ]}
                    >
                        {routes.map((route, index) => (
                            <div key={index} className="px-1">
                                <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden mx-1">
                                    <img
                                        src={route.image}
                                        alt={`${route.from} to ${route.to}`}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-4 dark:bg-black">
                                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white flex justify-between items-center mb-2">
                                            <span className="text-left flex-1">{route.from}</span>
                                            <span className="text-green-500 text-center flex-1">→</span>
                                            <span className="text-right flex-1">{route.to}</span>
                                        </h3>

                                        <p className="text-sm text-gray-600 dark:text-gray-400 flex justify-between mb-4">
                                            <span>Distance: {route.distance}</span>
                                            <span>Time: {route.time}</span>
                                        </p>

                                        <div className="flex justify-between items-center">
                                            <Link to='/Book_ride'>
                                                <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition">
                                                    Book Now
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>

            {/* 4th */}
            <div data-aos="zoom-out" className="bg-gray-50 dark:bg-gray-900/10 py-16 px-4 md:px-8 text-center relative"
            >
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 dark:text-white"
                    data-aos="fade-up"
                    whileHover={{
                        scale: 1.03,
                        color: "#16a34a",
                        transition: { ease: "easeInOut" },
                    }}
                >
                    Book Your Intercity Ride in 3 Simple Steps
                </motion.h2>

                <motion.p
                    className="text-gray-500 mb-10 dark:text-gray-300"
                    data-aos="fade-up"
                    whileHover={{
                        scale: 1.03,
                        transition: { ease: "easeInOut" },
                    }}
                >
                    Fast, easy, and convenient booking process for your intercity travel needs
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow transition-all"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 12px 24px rgba(0,0,0,0.1)",
                                transition: { ease: "easeOut" },
                            }}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-green-100 text-green-600 text-lg font-bold rounded-full dark:bg-green-900 dark:text-green-200">
                                {step.number}
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                                {step.title}
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400 text-base px-2">{step.description}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    whileHover={{
                        scale: 1.05,
                        transition: { ease: "easeInOut" },
                    }}
                    data-aos="zoom-in"
                >
                    <Link to="/Book_ride">
                        <button className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition">
                            Book an Intercity Ride Now
                        </button>
                    </Link>
                </motion.div>
            </div>


            {/* 5th */}
            <div className="bg-white dark:bg-gray-900 py-12 px-2">
                <section className="bg-[#166534] hover:bg-green-700 rounded-2xl text-white py-12 px-4 md:px-8 max-w-7xl mx-auto my-12 transform hover:scale-[1.02] transition-all duration-700 ease-in-out hover:shadow-xl hover:shadow-green-500/20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div data-aos="zoom-in" data-aos-easing="ease-in-out" className="space-y-4 m-6">
                            <motion.h2
                                className="text-3xl md:text-4xl font-bold text-start"
                                whileHover={{
                                    scale: 1.02,
                                    transition: { duration: 0.3, ease: "easeInOut" }
                                }}
                            >
                                Planning a Group Trip?
                            </motion.h2>
                            <motion.p
                                className="text-lg opacity-90 text-start"
                                whileHover={{
                                    scale: 1.02,
                                    transition: { duration: 0.3, ease: "easeInOut" }
                                }}
                            >
                                We offer special rates for group travel and corporate bookings. Contact our team for custom quotes.
                            </motion.p>
                            <div className="pt-4 text-start">
                                <Link
                                    to="/book"
                                    className="inline-flex items-center justify-center gap-2 text-sm font-medium h-11 px-8 rounded-md bg-white text-green-700 hover:bg-gray-100 transition-all duration-700 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/50"
                                >
                                    Book Now
                                </Link>
                            </div>
                        </div>

                        <div className="flex justify-center" data-aos="zoom-in">
                            <motion.img
                                whileHover={{
                                    scale: 1.02,
                                    transition: { duration: 0.3, ease: "easeInOut" }
                                }}
                                className="max-h-80 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-700 ease-in-out hover:shadow-xl hover:shadow-green-500/20"
                                src="/images/Group_travel.png"
                                alt="Group travel"
                            />
                        </div>
                    </div>
                </section>
            </div>

        </div>

    )
}
