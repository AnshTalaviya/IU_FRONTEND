import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import AOS from 'aos';
import { motion } from 'framer-motion';
import 'aos/dist/aos.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Car_Rides = () => {
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

      const [currentSlide, setCurrentSlide] = useState(0);
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    customPaging: function (i) {
      return (
        <div className="w-3 h-3 bg-white/50 rounded-full hover:bg-white transition-all duration-300 ease-in-out cursor-pointer"></div>
      );
    }
  };
 const slides = [
        {
            image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            title: "Premium Rides",
            subtitle: "Experience luxury on wheels",
            bgColor: "from-green-600/80 to-green-800/80"
        },
        {
            image: "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            title: "Eco-Friendly",
            subtitle: "Green transportation for a better tomorrow",
            bgColor: "from-blue-600/80 to-blue-800/80"
        },
        {
            image: "https://images.pexels.com/photos/2920064/pexels-photo-2920064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            title: "24/7 Service",
            subtitle: "Your trusted ride partner anytime, anywhere",
            bgColor: "from-purple-600/80 to-purple-800/80"
        }
    ];
  return (
    <div className="relative overflow-hidden">
      {/* Animated Background Dots */}
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

      {/* Hero Slider */}
      <section className="relative h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
          >
            <div className="relative h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgColor} transition-all duration-1000`} />
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="text-center text-white max-w-4xl px-4">
                  <h1 className={`text-5xl md:text-7xl font-bold mb-4 transform transition-all duration-1000 ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}>
                    {slide.title}
                  </h1>
                  <p className={`text-xl md:text-2xl mb-8 transform transition-all duration-1000 delay-200 ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}>
                    {slide.subtitle}
                  </p>
                  <div className={`flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-1000 delay-400 ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}>
                    <button className="bg-white text-green-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
                      Book a Ride
                    </button>
                    <button className="bg-green-600 text-white font-semibold px-8 py-4 rounded-lg hover:bg-green-700 transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/70'
                }`}
            />
          ))}
        </div>
      </section>

      {/* <div className="relative h-screen">
        <Slider {...settings} className="hero-slider">
          <div className="relative h-screen group">
            <div className="absolute inset-0 bg-black/50 z-10 group-hover:bg-black/40 transition-all duration-700 ease-in-out"></div>
            <img
              src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="Premium Rides"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-700 ease-in-out"
            />
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <div className="text-center text-white max-w-4xl px-4" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
                <motion.h1
                  className="text-5xl md:text-7xl font-bold mb-4"
                  whileHover={{
                    scale: 1.02,
                    color: "#009e25",
                    transition: { duration: 0.3, ease: "easeInOut" }
                  }}
                >
                  Premium Rides
                </motion.h1>
                <motion.p
                  className="text-xl md:text-2xl mb-8"
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.3, ease: "easeInOut" }
                  }}
                >
                  Experience luxury on wheels
                </motion.p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    className="bg-white text-green-600 font-semibold px-8 py-4 rounded-md"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "#f3f4f6",
                      boxShadow: "0 0 20px rgba(34, 197, 94, 0.3)",
                      transition: { duration: 0.3, ease: "easeInOut" }
                    }}
                  >
                    <Link to="/book">Book a Ride</Link>
                  </motion.button>
                  <motion.button
                    className="bg-green-600 text-white font-semibold px-8 py-4 rounded-md"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "#16a34a",
                      boxShadow: "0 0 20px rgba(34, 197, 94, 0.3)",
                      transition: { duration: 0.3, ease: "easeInOut" }
                    }}
                  >
                    <Link to="/safety">Learn About Safety</Link>
                  </motion.button>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-screen group">
            <div className="absolute inset-0 bg-black/50 z-10 group-hover:bg-black/40 transition-all duration-700 ease-in-out"></div>
            <img
              src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="Eco-Friendly"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-700 ease-in-out"
            />
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <div className="text-center text-white max-w-4xl px-4" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
                <motion.h1
                  className="text-5xl md:text-7xl font-bold mb-4"
                  whileHover={{
                    scale: 1.02,
                    color: "#4ade80",
                    transition: { duration: 0.3, ease: "easeInOut" }
                  }}
                >
                  Eco-Friendly
                </motion.h1>
                <motion.p
                  className="text-xl md:text-2xl mb-8"
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.3, ease: "easeInOut" }
                  }}
                >
                  Green transportation for a better tomorrow
                </motion.p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    className="bg-white text-green-600 font-semibold px-8 py-4 rounded-md"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "#f3f4f6",
                      boxShadow: "0 0 20px rgba(34, 197, 94, 0.3)",
                      transition: { duration: 0.3, ease: "easeInOut" }
                    }}
                  >
                    <Link to="/book">Book a Ride</Link>
                  </motion.button>
                  <motion.button
                    className="bg-green-600 text-white font-semibold px-8 py-4 rounded-md"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "#16a34a",
                      boxShadow: "0 0 20px rgba(34, 197, 94, 0.3)",
                      transition: { duration: 0.3, ease: "easeInOut" }
                    }}
                  >
                    <Link to="/safety">Learn About Safety</Link>
                  </motion.button>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-screen group">
            <div className="absolute inset-0 bg-black/50 z-10 group-hover:bg-black/40 transition-all duration-700 ease-in-out"></div>
            <img
              src="https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2025&q=80"
              alt="24/7 Service"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-700 ease-in-out"
            />
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <div className="text-center text-white max-w-4xl px-4" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
                <motion.h1
                  className="text-5xl md:text-7xl font-bold mb-4"
                  whileHover={{
                    scale: 1.02,
                    color: "#4ade80",
                    transition: { duration: 0.3, ease: "easeInOut" }
                  }}
                >
                  24/7 Service
                </motion.h1>
                <motion.p
                  className="text-xl md:text-2xl mb-8"
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.3, ease: "easeInOut" }
                  }}
                >
                  Your trusted ride partner anytime, anywhere
                </motion.p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    className="bg-white text-green-600 font-semibold px-8 py-4 rounded-md"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "#f3f4f6",
                      boxShadow: "0 0 20px rgba(34, 197, 94, 0.3)",
                      transition: { duration: 0.3, ease: "easeInOut" }
                    }}
                  >
                    <Link to="/book">Book a Ride</Link>
                  </motion.button>
                  <motion.button
                    className="bg-green-600 text-white font-semibold px-8 py-4 rounded-md"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "#16a34a",
                      boxShadow: "0 0 20px rgba(34, 197, 94, 0.3)",
                      transition: { duration: 0.3, ease: "easeInOut" }
                    }}
                  >
                    <Link to="/safety">Learn About Safety</Link>
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div> */}


      {/* Pricing Section */}

      <section className="bg-gray-100 dark:bg-gray-800 py-16 px-4 sm:px-8">
        <div data-aos="zoom-out" data-aos-easing="ease-in-out" className="max-w-6xl mx-auto text-center">
          <motion.h1
            className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white "
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            whileHover={{
              scale: 1.05,
              color: "#16a34a",
              transition: { duration: 0.3, ease: "easeInOut" }
            }}
          >
            Simple & Transparent Pricing
          </motion.h1>
          <motion.p className="text-gray-600 dark:text-gray-300 mt-2 text-base"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-easing="ease-in-out"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3, ease: "easeInOut" }
            }}
          >
            Affordable auto rides with no hidden charges, clear pricing for every journey
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 px-2 sm:px-2 lg:px-0 mx-auto">
            {/* Mini */}
            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.1, ease: "easeInOut" }
              }}
              className="relative border border-gray-300 dark:border-gray-600 rounded-lg shadow-md bg-white dark:bg-gray-900"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-easing="ease-in-out"
            >
              <div className="bg-green-600 text-white py-3 rounded-t-lg text-center">
                <motion.h3
                  className="text-lg font-semibold"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3, ease: "easeInOut" }
                  }}
                >
                  GreenCar Mini
                </motion.h3>
              </div>
              <div className="py-6 text-center">
                <motion.h2
                  className="text-4xl font-bold text-gray-900 dark:text-white"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3, ease: "easeInOut" }
                  }}
                >
                  ₹9<span className="text-sm font-light">/km</span>
                </motion.h2>
                <motion.p
                  className="text-sm text-gray-500 dark:text-gray-300 mt-1"
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.3, ease: "easeInOut" }
                  }}
                >
                  Base fare: ₹30
                </motion.p>
                <div className="mt-4 space-y-3 text-gray-700 dark:text-gray-200 text-sm text-left px-6">
                  <motion.p
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.3, ease: "easeInOut" }
                    }}
                  >
                    <span className="inline-block w-2 h-2 rounded-full bg-green-600 mr-2 shadow-[0_0_8px_2px_#bbf7d0]" />
                    Compact Hatchback
                  </motion.p>
                  <motion.p
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.3, ease: "easeInOut" }
                    }}
                  >
                    <span className="inline-block w-2 h-2 rounded-full bg-green-600 mr-2 shadow-[0_0_8px_2px_#bbf7d0]" />
                    Up to 3 passengers
                  </motion.p>
                  <motion.p
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.3, ease: "easeInOut" }
                    }}
                  >
                    <span className="inline-block w-2 h-2 rounded-full bg-green-600 mr-2 shadow-[0_0_8px_2px_#bbf7d0]" />
                    Air conditioning
                  </motion.p>
                </div>
              </div>
              <div className="px-6 pb-6">
                <Link to="/Book_ride">
                  <motion.button
                    className="w-full py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "#16a34a",
                      boxShadow: "0 0 20px rgba(34, 197, 94, 0.3)",
                      transition: { duration: 0.3, ease: "easeInOut" }
                    }}
                  >
                    Book Now
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Premium */}
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.3, ease: "easeInOut" }
              }}
              className="relative border border-gray-300 dark:border-gray-600 rounded-lg shadow-md bg-white dark:bg-gray-900"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-easing="ease-in-out"
            >
              <div className="absolute top-0 right-0 bg-yellow-400 text-white text-xs font-bold px-2 py-1 rounded-b rounded-tr shadow transform hover:scale-105 transition-all duration-700 ease-in-out">
                GreenCar Sedan
              </div>
              <div className="bg-green-600 text-white py-3 rounded-t-lg text-center">
                <motion.h3
                  className="text-lg font-semibold"
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.3, ease: "easeInOut" }
                  }}
                >
                  GreenAuto Premium
                </motion.h3>
              </div>
              <div className="py-6 text-center">
                <motion.h2
                  className="text-4xl font-bold text-gray-900 dark:text-white"
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.3, ease: "easeInOut" }
                  }}
                >
                  ₹12<span className="text-sm font-light">/km</span>
                </motion.h2>
                <motion.p
                  className="text-sm text-gray-500 dark:text-gray-300 mt-1"
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.3, ease: "easeInOut" }
                  }}
                >
                  Base fare: ₹40
                </motion.p>
                <div className="mt-4 space-y-3 text-gray-700 dark:text-gray-200 text-sm text-left px-6">
                  <motion.p
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.3, ease: "easeInOut" }
                    }}
                  >
                    <span className="inline-block w-2 h-2 rounded-full bg-green-600 mr-2 shadow-[0_0_8px_2px_#bbf7d0]" />
                    Spacious Sedan
                  </motion.p>
                  <motion.p
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.3, ease: "easeInOut" }
                    }}
                  >
                    <span className="inline-block w-2 h-2 rounded-full bg-green-600 mr-2 shadow-[0_0_8px_2px_#bbf7d0]" />
                    Up to 4 passengers
                  </motion.p>
                  <motion.p
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.3, ease: "easeInOut" }
                    }}
                  >
                    <span className="inline-block w-2 h-2 rounded-full bg-green-600 mr-2 shadow-[0_0_8px_2px_#bbf7d0]" />
                    Premium comfort
                  </motion.p>
                </div>
              </div>
              <div className="px-6 pb-6">
                <Link to='/Book_ride'>
                  <motion.button
                    className="w-full py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded"
                    whileHover={{
                      scale: 1.02,
                      backgroundColor: "#16a34a",
                      boxShadow: "0 0 20px rgba(34, 197, 94, 0.3)",
                      transition: { duration: 0.3, ease: "easeInOut" }
                    }}
                  >
                    Book Now
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* XL */}
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.3, ease: "easeInOut" }
              }}
              className="relative border border-gray-300 dark:border-gray-600 rounded-lg shadow-md bg-white dark:bg-gray-900"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-easing="ease-in-out"
            >
              <div className="bg-green-600 text-white py-3 rounded-t-lg text-center">
                <motion.h3
                  className="text-lg font-semibold"
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.3, ease: "easeInOut" }
                  }}
                >
                  GreenCar XL
                </motion.h3>
              </div>
              <div className="py-6 text-center">
                <motion.h2
                  className="text-4xl font-bold text-gray-900 dark:text-white"
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.3, ease: "easeInOut" }
                  }}
                >
                  ₹16<span className="text-sm font-light">/km</span>
                </motion.h2>
                <motion.p
                  className="text-sm text-gray-500 dark:text-gray-300 mt-1"
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.3, ease: "easeInOut" }
                  }}
                >
                  Base fare: ₹60
                </motion.p>
                <div className="mt-4 space-y-3 text-gray-700 dark:text-gray-200 text-sm text-left px-6">
                  <motion.p
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.3, ease: "easeInOut" }
                    }}
                  >
                    <span className="inline-block w-2 h-2 rounded-full bg-green-600 mr-2 shadow-[0_0_8px_2px_#bbf7d0]" />
                    SUV/Premium vehicle
                  </motion.p>
                  <motion.p
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.3, ease: "easeInOut" }
                    }}
                  >
                    <span className="inline-block w-2 h-2 rounded-full bg-green-600 mr-2 shadow-[0_0_8px_2px_#bbf7d0]" />
                    Up to 6 passengers
                  </motion.p>
                  <motion.p
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.3, ease: "easeInOut" }
                    }}
                  >
                    <span className="inline-block w-2 h-2 rounded-full bg-green-600 mr-2 shadow-[0_0_8px_2px_#bbf7d0]" />
                    Extra luggage space
                  </motion.p>
                </div>
              </div>
              <div className="px-6 pb-6">
                <Link to='/Book_ride'>
                  <motion.button
                    className="w-full py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded"
                    whileHover={{
                      scale: 1.02,
                      backgroundColor: "#16a34a",
                      boxShadow: "0 0 20px rgba(34, 197, 94, 0.3)",
                      transition: { duration: 0.3, ease: "easeInOut" }
                    }}
                  >
                    Book Now
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <div className="bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4"
            whileHover={{
              scale: 1.02,
              color: "#16a34a",
              transition: { duration: 0.3, ease: "easeInOut" }
            }}
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
          >
            Why Choose GreenCar?
          </motion.h1>
          <motion.p
            className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-10"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-easing="ease-in-out"
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3, ease: "easeInOut" }
            }}
          >
            We provide the best car ride experience with comfort, safety, and affordability in mind
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.3, ease: "easeInOut" }
              }}
              className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 text-left"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-easing="ease-in-out"
            >
              <div className="mb-4 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                  <circle cx="7" cy="17" r="2" />
                  <path d="M9 17h6" />
                  <circle cx="17" cy="17" r="2" />
                </svg>
              </div>
              <motion.h2
                className="text-xl font-semibold text-gray-900 dark:text-white mb-2"
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeInOut" }
                }}
              >
                Comfortable Rides
              </motion.h2>
              <motion.p
                className="text-gray-600 dark:text-gray-300"
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeInOut" }
                }}
              >
                Enjoy spacious, air-conditioned cars with professional drivers for a smooth journey
              </motion.p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.3, ease: "easeInOut" }
              }}
              className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 text-left"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-easing="ease-in-out"
            >
              <div className="mb-4 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <motion.h2
                className="text-xl font-semibold text-gray-900 dark:text-white mb-2"
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeInOut" }
                }}
              >
                Safe & Secure
              </motion.h2>
              <motion.p
                className="text-gray-600 dark:text-gray-300"
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeInOut" }
                }}
              >
                All rides are monitored with real-time tracking, emergency assistance, and verified drivers
              </motion.p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.3, ease: "easeInOut" }
              }}
              className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 text-left"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-easing="ease-in-out"
            >
              <div className="mb-4 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <motion.h2
                className="text-xl font-semibold text-gray-900 dark:text-white mb-2"
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeInOut" }
                }}
              >
                Quick & Efficient
              </motion.h2>
              <motion.p
                className="text-gray-600 dark:text-gray-300"
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeInOut" }
                }}
              >
                Fast pickup times, optimized routes, and experienced drivers to get you there quickly
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white dark:bg-gray-900 py-12 px-2">
        <section className="bg-green-600 rounded-2xl text-white py-12 px-4 md:px-8 max-w-7xl mx-auto my-12 transform hover:scale-[1.02] transition-all duration-700 ease-in-out hover:shadow-xl hover:shadow-green-500/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div data-aos="zoom-in" data-aos-easing="ease-in-out" className="space-y-4 m-6">
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-start"
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeInOut" }
                }}
              >
                Ready to Experience GreenCar?
              </motion.h2>
              <motion.p
                className="text-lg opacity-90 text-start"
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeInOut" }
                }}
              >
                Download our app and get your first ride with a special discount.
                Use code <strong className="transform hover:scale-110 transition-all duration-700 ease-in-out">FIRSTRIDE</strong> for 50% off.
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

            <div className="flex justify-center">
              <motion.img
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeInOut" }
                }}
                className="max-h-80 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-700 ease-in-out hover:shadow-xl hover:shadow-green-500/20"
                src="/images/Rentals2.png"
                alt="GreenCar App"
              />
            </div>
          </div>
        </section>
      </div>

      {/* New Testimonials Section */}
      <section className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
            data-aos="fade-up"
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3, ease: "easeInOut" }
            }}
          >
            What Our Customers Say
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.3, ease: "easeInOut" }
              }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-700 ease-in-out hover:shadow-xl hover:shadow-green-500/20"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 text-xl font-bold">
                  R
                </div>
                <div className="ml-4">
                  <motion.h3
                    className="text-lg font-semibold text-gray-900 dark:text-white"
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.3, ease: "easeInOut" }
                    }}
                  >
                    Rahul Sharma
                  </motion.h3>
                  <motion.p
                    className="text-gray-600 dark:text-gray-400"
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.3, ease: "easeInOut" }
                    }}
                  >
                    Regular User
                  </motion.p>
                </div>
              </div>
              <motion.p
                className="text-gray-600 dark:text-gray-300"
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeInOut" }
                }}
              >
                "The service is amazing! Clean cars, professional drivers, and always on time. GreenCar has made my daily commute so much better."
              </motion.p>
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
                scale: 1.02,
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.3, ease: "easeInOut" }
              }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-700 ease-in-out hover:shadow-xl hover:shadow-green-500/20"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 text-xl font-bold">
                  P
                </div>
                <div className="ml-4">
                  <motion.h3
                    className="text-lg font-semibold text-gray-900 dark:text-white"
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.3, ease: "easeInOut" }
                    }}
                  >
                    Priya Patel
                  </motion.h3>
                  <motion.p
                    className="text-gray-600 dark:text-gray-400"
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.3, ease: "easeInOut" }
                    }}
                  >
                    Business Traveler
                  </motion.p>
                </div>
              </div>
              <motion.p
                className="text-gray-600 dark:text-gray-300"
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeInOut" }
                }}
              >
                "As a frequent business traveler, I appreciate the reliability and comfort of GreenCar. The premium service is worth every penny!"
              </motion.p>
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
                scale: 1.02,
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.3, ease: "easeInOut" }
              }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-700 ease-in-out hover:shadow-xl hover:shadow-green-500/20"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 text-xl font-bold">
                  A
                </div>
                <div className="ml-4">
                  <motion.h3
                    className="text-lg font-semibold text-gray-900 dark:text-white"
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.3, ease: "easeInOut" }
                    }}
                  >
                    Amit Kumar
                  </motion.h3>
                  <motion.p
                    className="text-gray-600 dark:text-gray-400"
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.3, ease: "easeInOut" }
                    }}
                  >
                    Family User
                  </motion.p>
                </div>
              </div>
              <motion.p
                className="text-gray-600 dark:text-gray-300"
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeInOut" }
                }}
              >
                "Perfect for family trips! Spacious cars, safe drivers, and great service. My kids love the comfortable rides."
              </motion.p>
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
            <motion.div
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeInOut" }
              }}
              className="text-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">10K+</div>
              <div className="text-gray-600 dark:text-gray-400">Happy Customers</div>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeInOut" }
              }}
              className="text-center"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">500+</div>
              <div className="text-gray-600 dark:text-gray-400">Active Drivers</div>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeInOut" }
              }}
              className="text-center"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">50K+</div>
              <div className="text-gray-600 dark:text-gray-400">Rides Completed</div>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeInOut" }
              }}
              className="text-center"
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
