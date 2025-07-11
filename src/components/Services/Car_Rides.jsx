import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Car_Rides = () => {
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
      image: "/images/Idhar Udhar Car 1.png",
      title: "Premium Trips",
      subtitle: "Experience luxury on wheels",
      bgColor: "from-green-600/80 to-green-800/80"
    },
    {
      image: "/images/Idhar Udhar Car 2.png",
      title: "Eco-Friendly",
      subtitle: "Green transportation for a better tomorrow",
      bgColor: "from-blue-600/80 to-blue-800/80"
    },
    {
      image: "/images/Idhar Udhar Car 6.png",
      title: "24/7 Service",
      subtitle: "Your trusted trip partner anytime, anywhere",
      bgColor: "from-purple-600/80 to-purple-800/80"
    }
  ];

  return (
    <div className="relative overflow-hidden">

      {/* Hero Slider */}
      <section className="relative min-h-[90vh] bg-gradient-to-br from-green-700 to-green-900 text-white overflow-hidden flex items-center py-10 px-4 sm:px-6 lg:px-12">
        {/* Sea Wave Animation Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="ocean">
            <div className="wave wave1"></div>
            <div className="wave wave2"></div>
            <div className="wave wave3"></div>
            <div className="wave wave4"></div>
            <div className="wave wave5"></div>
            <div className="wave wave6"></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-green-700/40 to-green-900/40"></div>
        </div>

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
                    <button className="bg-white text-green-600 font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-100 hover:shadow-xl whitespace-nowrap w-full">
                      Book a Trip
                    </button>
                  </Link>
                  <Link to="/safety" className="w-full sm:w-auto">
                    <button className="bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-green-700 hover:shadow-xl whitespace-nowrap w-full">
                      Learn About Safety
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Right Slider */}
          <div className="w-full lg:w-[60%] h-[40vh] sm:h-[50vh] md:h-[70vh] relative overflow-hidden rounded-2xl shadow-2xl flex items-center justify-center">

            {/* Image Slides */}
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

          .wave1 {
            animation: wave1 8s linear infinite;
            z-index: 1;
            opacity: 0.9;
            top: 0;
            left: -50%;
          }

          .wave2 {
            animation: wave2 12s linear infinite;
            z-index: 2;
            opacity: 0.8;
            top: 20%;
            left: -45%;
            animation-delay: -2s;
          }

          .wave3 {
            animation: wave3 15s linear infinite;
            z-index: 3;
            opacity: 0.7;
            top: 40%;
            left: -55%;
            animation-delay: -4s;
          }

          .wave4 {
            animation: wave4 10s linear infinite;
            z-index: 4;
            opacity: 0.6;
            top: 60%;
            left: -40%;
            animation-delay: -6s;
          }

          .wave5 {
            animation: wave5 18s linear infinite;
            z-index: 5;
            opacity: 0.5;
            top: 80%;
            left: -60%;
            animation-delay: -3s;
          }

          .wave6 {
            animation: wave6 14s linear infinite;
            z-index: 6;
            opacity: 0.4;
            top: 90%;
            left: -50%;
            animation-delay: -5s;
          }

          @keyframes wave1 {
            0% { transform: translateX(0) scaleY(1); }
            50% { transform: translateX(-25%) scaleY(0.8); }
            100% { transform: translateX(-50%) scaleY(1); }
          }

          @keyframes wave2 {
            0% { transform: translateX(0) scaleY(1); }
            50% { transform: translateX(-25%) scaleY(0.8); }
            100% { transform: translateX(-50%) scaleY(1); }
          }

          @keyframes wave3 {
            0% { transform: translateX(0) scaleY(1); }
            50% { transform: translateX(-25%) scaleY(0.8); }
            100% { transform: translateX(-50%) scaleY(1); }
          }

          @keyframes wave4 {
            0% { transform: translateX(0) scaleY(1); }
            50% { transform: translateX(-25%) scaleY(0.8); }
            100% { transform: translateX(-50%) scaleY(1); }
          }

          @keyframes wave5 {
            0% { transform: translateX(0) scaleY(1); }
            50% { transform: translateX(-25%) scaleY(0.8); }
            100% { transform: translateX(-50%) scaleY(1); }
          }

          @keyframes wave6 {
            0% { transform: translateX(0) scaleY(1); }
            50% { transform: translateX(-25%) scaleY(0.8); }
            100% { transform: translateX(-50%) scaleY(1); }
          }
        `}</style>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-8">
        <div
          className="max-w-6xl mx-auto text-center"
          data-aos="zoom-out"
          data-aos-easing="ease-in-out"
        >
          {/* Heading */}
          <motion.h1 className="text-4xl md:text-5xl font-bold text-green-600">
            Simple & Transparent Pricing
          </motion.h1>

          {/* Subtext */}
          <motion.p className="text-gray-600 dark:text-gray-300 mt-2 text-base">
            Affordable auto trips with no hidden charges, clear pricing for every journey
          </motion.p>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 mx-auto ">
            {/* === Card Template === */}
            {[
              {
                title: "GreenCar Mini",
                price: "₹9",
                baseFare: "₹30",
                features: ["Compact Hatchback", "Up to 3 passengers", "Air conditioning"],
                badge: "",
                link: "/Book_ride"
              },
              {
                title: "GreenAuto Premium",
                price: "₹12",
                baseFare: "₹40",
                features: ["Spacious Sedan", "Up to 4 passengers", "Premium comfort"],
                badge: "GreenCar Sedan",
                link: "/Book_ride"
              },
              {
                title: "GreenCar XL",
                price: "₹16",
                baseFare: "₹60",
                features: ["SUV/Premium vehicle", "Up to 6 passengers", "Extra luggage space"],
                badge: "",
                link: "/Book_ride"
              }
            ].map((plan, index) => (
              <motion.div key={index}
                className="relative border border-gray-300 dark:border-gray-600 rounded-lg shadow-md bg-white dark:bg-gray-900"
                data-aos="fade-up"
                data-aos-easing="ease-in-out"
              >
                {plan.badge && (
                  <div className="absolute top-0 right-0 bg-yellow-400 text-white text-xs font-bold px-2 py-1rounded-b rounded-tr shadow transform hover:scale-105 transition-all duration-700 ease-in-out">
                    {plan.badge}
                  </div>
                )}

                {/* Card Header */}
                <div className="bg-green-600 text-white py-3 rounded-t-lg text-center">
                  <motion.h3
                    className="text-lg font-semibold"
                  >
                    {plan.title}
                  </motion.h3>
                </div>

                {/* Pricing Content */}
                <div className="py-6 text-center">
                  <motion.h2
                    className="text-4xl font-bold text-gray-900 dark:text-white"
                  >
                    {plan.price}
                    <span className="text-sm font-light">/km</span>
                  </motion.h2>
                  <motion.p
                    className="text-sm text-gray-500 dark:text-gray-300 mt-1"
                  >
                    Base fare: {plan.baseFare}
                  </motion.p>

                  <div className="mt-4 space-y-3 text-gray-700 dark:text-gray-200 text-sm text-left px-6">
                    {plan.features.map((feature, fIndex) => (
                      <motion.p key={fIndex}>
                        <span className="inline-block w-2 h-2 rounded-full bg-green-600 mr-4 shadow-[0_0_8px_0.2px_#bbf7d0]" />
                        {feature}
                      </motion.p>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="px-6 pb-6">
                  <Link to={plan.link}>
                    <motion.button
                      className="w-full py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded hover:scale-102">
                      Book Now
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Features Section */}
      <div className="bg-white dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8" >
        <div className="max-w-7xl mx-auto text-center " data-aos="fade-up">
          <motion.h1
            className="text-3xl sm:text-4xl font-extrabold text-green-600   mb-4"
            whileHover={{
              color: "#16a34a",
              transition: { ease: "easeInOut" }
            }}
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
          >
            Why Choose GreenCar?
          </motion.h1>
          <motion.p
            className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-10"
            data-aos-easing="ease-in-out"
          >
            We provide the best car trip experience with comfort, safety, and affordability in mind
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card Template */}
            {[
              {
                title: "Comfortable Trips",
                desc: "Enjoy spacious, air-conditioned cars with professional riders for a smooth journey",
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
                title: "Safe & Secure",
                desc: "All trips are monitored with real-time tracking, emergency assistance, and verified riders",
                iconPath: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
              },
              {
                title: "Quick & Efficient",
                desc: "Fast pickup times, optimized routes, and experienced riders to get you there quickly",
                iconPath: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />,
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  boxShadow: "0 12px 28px rgba(0, 0, 0, 0.12)",
                  transition: { ease: "easeOut" },
                }}
                className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 text-left duration-300 ease-in-out hover:scale-[1.01] transition-all transform"
                data-aos="fade-up"
                data-aos-easing="ease-in-out"
              >
                <div className="mb-4 text-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {item.iconPath}
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white dark:bg-gray-900 py-10 px-4 sm:px-6 lg:px-8">
        <section className="bg-[#166534] rounded-2xl text-white py-10 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left Text */}
            <div data-aos="zoom-in" className="space-y-5 text-center md:text-left">
              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight"
                whileHover={{
                  transition: { duration: 0.3, ease: "easeInOut" }
                }}
              >
                Ready to Experience GreenCar?
              </motion.h2>

              <motion.p
                className="text-base sm:text-lg text-white/90 leading-relaxed"
                whileHover={{
                  transition: { duration: 0.3, ease: "easeInOut" }
                }}
              >
                Download our app and get your first trip with a special discount.
                Use code{" "}
                <strong className="inline-block transition-all duration-700 ease-in-out">
                  FIRSTTRIP
                </strong>{" "}
                for 50% off.
              </motion.p>

              <div className="pt-3">
                <Link
                  to="/book"
                  className="inline-flex items-center justify-center gap-2 text-sm font-medium h-11 px-8 rounded-md bg-white text-green-700 hover:bg-gray-100 transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                  Book Now
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center md:justify-end" data-aos="zoom-in">
              <motion.img
                whileHover={{
                  transition: { duration: 0.3, ease: "easeInOut" }
                }}
                className="w-full h-auto rounded-lg shadow-lg transition-all duration-700 ease-in-out hover:shadow-xl hover:shadow-green-500/20"
                src="/images/Rentals2.png"
                alt="GreenCar App"
              />
            </div>
          </div>
        </section>
      </div>


      {/* New Testimonials Section */}
      <section className="bg-gray-100 dark:bg-gray-900 py-16 px-4">
        <div className="max-w-7xl mx-auto" data-aos="fade-up">
          <motion.h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
            whileHover={{
              transition: { ease: "easeInOut" }
            }}
          >
            What Our Customers Say
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <motion.div
              whileHover={{
                transition: { duration: 0.2, ease: "easeOut" },
              }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:scale-[1.01] transition-all duration-300 ease-in-out transform"
              data-aos="fade-up"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 text-xl font-bold">
                  R
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Rahul Sharma</h3>
                  <p className="text-gray-600 dark:text-gray-400">Regular User</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                "The service is amazing! Clean cars, professional riders, and always on time. GreenCar has made my daily commute so much better."
              </p>
              <div className="mt-4 flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div
              whileHover={{
                transition: { duration: 0.2, ease: "easeOut" },
              }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:scale-[1.01] transition-all duration-300 ease-in-out transform"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 text-xl font-bold">
                  P
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Priya Patel</h3>
                  <p className="text-gray-600 dark:text-gray-400">Business Traveler</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                "As a frequent business traveler, I appreciate the reliability and comfort of GreenCar. The premium service is worth every penny!"
              </p>
              <div className="mt-4 flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div
              whileHover={{
                transition: { duration: 0.2, ease: "easeOut" },
              }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm transform hover:scale-[1.01] transition-all duration-300 ease-in-out "
              data-aos="fade-up"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 text-xl font-bold">
                  A
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Amit Kumar</h3>
                  <p className="text-gray-600 dark:text-gray-400">Family User</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                "Perfect for family trips! Spacious cars, safe riders, and great service. My kids love the comfortable trips."
              </p>
              <div className="mt-4 flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          </div>


          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Happy Customers */}
            <motion.div
              whileHover={{ transition: { ease: "easeOut" } }}
              className="text-center transform transition-transform"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">10K+</div>
              <div className="text-gray-600 dark:text-gray-400">Happy Customers</div>
            </motion.div>

            {/* Active riders */}
            <motion.div
              whileHover={{ transition: { ease: "easeOut" } }}
              className="text-center transform transition-transform"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">500+</div>
              <div className="text-gray-600 dark:text-gray-400">Active riders</div>
            </motion.div>

            {/* Rides Completed */}
            <motion.div
              whileHover={{ transition: { ease: "easeOut" } }}
              className="text-center transform transition-transform"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">50K+</div>
              <div className="text-gray-600 dark:text-gray-400">Trips Completed</div>
            </motion.div>

            {/* Average Rating */}
            <motion.div
              whileHover={{ transition: { ease: "easeOut" } }}
              className="text-center transform transition-transform"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">4.9</div>
              <div className="text-gray-600 dark:text-gray-400">Average Rating</div>
            </motion.div>
          </div>

        </div>
      </section>

      <style jsx>{`
        .hero-slider .slick-dots {
          bottom: 25px;
        }
        .hero-slider .slick-dots li button:before {
          display: none;
        }
        .hero-slider .slick-dots li {
          margin: 0 8px;
        }
        .hero-slider .slick-dots li.slick-active div {
          background: white;
          transform: scale(1.2);
          transition: all 300ms ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Car_Rides;
