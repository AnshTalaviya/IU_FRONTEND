import React from 'react'
import { Link } from 'react-router-dom'

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
            duration: 1500,
            once: true,
        });
    }, []);

    return (

        <>
            <div className="bg-[#166534] text-white px-4 sm:px-6 lg:px-8 py-12 md:py-24">
                <div data-aos="fade-up" className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-12">

                    {/* Left Content */}
                    <div className="w-full md:w-1/2 md:pl-4">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Idhar Udhar Intercity</h1>
                        <p className="text-lg md:text-xl mb-8">
                            Safe, comfortable, and reliable intercity travel with fixed pricing
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-white text-green-600 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition">
                                Book an Intercity Ride
                            </button>
                            <button className="bg-green-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-green-700 transition">
                                <Link to="/safety">Learn About Safety</Link>
                            </button>
                        </div>
                    </div>

                    {/* Right Image and Card */}

                    <div className="w-full md:w-1/2 relative flex justify-center items-center ">
                        <img src="/images/Intercity_Ride.png"
                            alt="Intercity Ride"
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
                                <p className="text-sm text-gray-500 dark:text-gray-300">Available in</p>
                                <p className="font-semibold text-gray-900 dark:text-white">50+ City Pairs</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2nd */}
            <div className="bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 dark:text-white">
                        Why Choose Intercity Service?
                    </h1>
                    <p className="text-gray-600 max-w-xl mx-auto mb-10 dark:text-gray-300">
                        The most comfortable and convenient way to travel between cities with professional drivers
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                        {/* Card 1 - Flexible Duration */}
                        <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 text-left">
                            <div className="mb-4 text-green-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                                    <circle cx="7" cy="17" r="2" />
                                    <path d="M9 17h6" />
                                    <circle cx="17" cy="17" r="2" />
                                </svg>
                            </div>
                            <h2 className="text-xl font-semibold text-gray-900 mb-2 dark:text-white">Premium Vehicles</h2>
                            <p className="text-gray-600 dark:text-gray-300">
                                Navigate through congested roads quickly with skilled riders who know the best routes
                            </p>
                        </div>

                        {/* Card 2 - Diverse Fleet */}
                        <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 text-left">
                            <div className="mb-4 text-green-600">
                                {/* Car Icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 2l7 4v6c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-4z" />
                                </svg>
                            </div>
                            <h2 className="text-xl font-semibold text-gray-900 mb-2 dark:text-white">Safety First</h2>
                            <p className="text-gray-600 dark:text-gray-300">
                                Verified drivers, real-time tracking, and 24/7 customer support for peace of mind
                            </p>
                        </div>

                        {/* Card 3 - Fully Insured */}
                        <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 text-left">
                            <div className="mb-4 text-green-600">
                                {/* Shield Icon */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8 text-green-nexus-600 drop-shadow-md dark:text-green-nexus-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                                </svg>
                            </div>
                            <h2 className="text-xl font-semibold text-gray-900 mb-2 dark:text-white">Fixed Pricing</h2>
                            <p className="text-gray-600 dark:text-gray-300">
                                No surge pricing or hidden charges. Pay the same price regardless of traffic or time
                            </p>
                        </div>
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
            <div data-aos="zoom-out" className="bg-gray-50 dark:bg-gray-900 py-16 px-4 md:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 dark:text-white">
                    Book Your Intercity Ride in 3 Simple Steps
                </h2>
                <p className="text-gray-500 mb-10 dark:text-gray-300">
                    Fast, easy, and convenient booking process for your intercity travel needs
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
                    {steps.map((step) => (
                        <div
                            key={step.number}
                            className="bg-white rounded-xl p-6 shadow transition-all dark:bg-gray-800"
                        >
                            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-green-100 text-green-600 text-lg font-bold rounded-full dark:bg-green-900 dark:text-green-200">
                                {step.number}
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                                {step.title}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 p-3" style={{ "fontSize": "16px" }}>{step.description}</p>
                        </div>
                    ))}
                </div>

                <Link to="/Book_ride"><button className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition">
                    Book an Intercity Ride Now
                </button>
                </Link>

            </div>


            {/* 5th */}
            <div className="bg-white dark:bg-gray-900 py-12 px-2">
                <section className="bg-green-600 rounded-2xl text-white py-12 px-4 md:px-8 max-w-7xl mx-auto my-12 ">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        {/* Text Section */}
                        <div data-aos="zoom-in" className="space-y-4 m-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-start">Planning a Group Trip?</h2>
                            <p className="text-lg opacity-90 text-start">
                                We offer special rates for group travel and corporate bookings. Contact our team for custom quotes.
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
                                src="/images/Group_travel.png"
                                alt="Group travel"
                                className="max-h-80 rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </section >
            </div >
        </>

    )
}
