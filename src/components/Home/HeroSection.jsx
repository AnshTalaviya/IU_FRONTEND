import { useState } from "react";
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { motion } from "framer-motion";

// Animation Variants
const fancyFadeUp = {
  hidden: { opacity: 0, y: 80, rotate: -10, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 22,
    },
  },
};

const shimmerEffect = {
  animate: {
    opacity: [1, 0.7, 1],
    transition: {
      repeat: Infinity,
      duration: 4,
      ease: "easeInOut",
    },
  },
};

const HeroSection = () => {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const navigate = useNavigate();
  const { user } = useAuth();

  const isDisabled = !pickup.trim() || !dropoff.trim();

  const handleFindRides = () => {
    if (!isDisabled) {
      navigate(
        `/book?pickup=${encodeURIComponent(pickup)}&dropoff=${encodeURIComponent(dropoff)}`
      );
    }
  };

  const handleBookNow = () => {
    navigate("/book/premium");
  };

  return (
    <section className="text-white min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-green-700 via-green-800 to-green-900 animate-gradientMove">
      {/* Floating particles */}
      <motion.div
        className="absolute inset-0 -z-10 pointer-events-none"
        animate={{ y: [0, -20, 0], opacity: [0.8, 1, 0.8] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      >
        <div className="absolute top-[10%] left-[15%] w-3 h-3 bg-green-400 rounded-full blur-sm opacity-70" />
        <div className="absolute top-[40%] left-[80%] w-4 h-4 bg-green-300 rounded-full blur-md opacity-60" />
        <div className="absolute bottom-[20%] left-[50%] w-2 h-2 bg-green-500 rounded-full blur-sm opacity-80" />
      </motion.div>

      <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-24 lg:py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE */}
          <div className="space-y-6 text-center lg:text-left flex flex-col justify-center items-center lg:items-start relative">
            <motion.h1
              variants={fancyFadeUp}
              initial="hidden"
              animate="visible"
              className="relative text-3xl sm:text-4xl md:text-5xl font-bold leading-tight z-10"
            >
              <motion.span className="block text-white" {...shimmerEffect}>The Future of</motion.span>
              <motion.span className="block text-green-300" {...shimmerEffect}>Ride Sharing</motion.span>
              <motion.span className="block text-white" {...shimmerEffect}>is Green & Sustainable</motion.span>
            </motion.h1>

            <motion.p
              variants={fancyFadeUp}
              initial="hidden"
              animate="visible"
              className="relative text-base md:text-lg text-white/90 max-w-xl z-10"
            >
              Experience seamless, eco-friendly rides at your fingertips.
              <span className="block mt-2">
                Idhar-Udhar connects you with reliable drivers in over <strong>500+ cities</strong> nationwide.
              </span>
            </motion.p>

            {/* Form */}
            <motion.div
              variants={fancyFadeUp}
              initial="hidden"
              animate="visible"
              className="relative border border-white/20 rounded-xl p-4 sm:p-6 shadow-lg space-y-4 max-w-lg w-full z-10"
            >
              {/* Pickup */}
              <motion.div
                className="flex items-center bg-white/10 rounded-md px-3 py-2 border border-white/20"
                animate={{
                  boxShadow: [
                    "0 0 0px #22c55e",
                    "0 0 10px #22c55e",
                    "0 0 0px #22c55e"
                  ],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
              >
                <FaMapMarkerAlt className="text-green-300 mr-3" />
                <input
                  type="text"
                  placeholder="Pickup Location"
                  className="bg-transparent outline-none w-full text-white placeholder-gray-300"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                />
              </motion.div>

              {/* Dropoff */}
              <motion.div
                className="flex items-center bg-white/10 rounded-md px-3 py-2 border border-white/20"
                animate={{
                  boxShadow: [
                    "0 0 0px #22c55e",
                    "0 0 10px #22c55e",
                    "0 0 0px #22c55e"
                  ],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
              >
                <FaMapMarkerAlt className="text-green-300 mr-3" />
                <input
                  type="text"
                  placeholder="Dropoff Location"
                  className="bg-transparent outline-none w-full text-white placeholder-gray-300"
                  value={dropoff}
                  onChange={(e) => setDropoff(e.target.value)}
                />
              </motion.div>

              {/* Button */}
              <motion.button
                onClick={handleFindRides}
                disabled={isDisabled}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className={`w-full py-2 rounded-md flex items-center justify-center gap-2 font-semibold transition-colors
                  bg-green-500 text-white
                  ${isDisabled ? "opacity-50 cursor-not-allowed border border-white/40" : "hover:bg-green-600"}`}
              >
                <FaSearch />
                Find Rides
              </motion.button>
            </motion.div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative w-full h-full hidden lg:block">
            <motion.div
              className="relative overflow-hidden rounded-xl shadow-xl z-20"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
              <img
                src="/images/home_page1.png"
                alt="Luxury car"
                className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-green-800/40 to-transparent rounded-xl"></div>

              <div
                className="absolute inset-x-0 bottom-0 p-3 text-white rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
                style={{
                  boxShadow: "inset 0 -100px 120px -15px rgba(0, 0, 0, 0.89)",
                }}
              >
                <div className="flex items-center space-x-3 mt-24">
                  <div className="bg-green-500 rounded-full w-9 h-9 flex items-center justify-center text-sm font-bold">
                    G
                  </div>
                  <div>
                    <h3 className="font-semibold text-base">IdharUdhar Premium</h3>
                    <p className="text-xs text-green-300">Electric Luxury Experience</p>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-3">
                  <div>
                    <p className="text-xs">Starting at</p>
                    <p className="text-lg font-bold">₹199</p>
                  </div>
                  <motion.button
                    onClick={handleBookNow}
                    whileHover={{ scale: 1.1 }}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="text-sm bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
                  >
                    Book Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
