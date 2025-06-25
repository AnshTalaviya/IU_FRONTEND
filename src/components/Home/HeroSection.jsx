import { useState } from "react";
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const navigate = useNavigate();
  const { user } = useAuth();

  const isDisabled = !pickup.trim() || !dropoff.trim();

  const handleFindRides = () => {
    if (!isDisabled) {
      navigate(`/book?pickup=${encodeURIComponent(pickup)}&dropoff=${encodeURIComponent(dropoff)}`);
    }
  };

  const handleBookNow = () => {
    navigate("/book/premium");
  };

  return (
    <section className="bg-gradient-to-br from-[#022c22] to-[#001510] mt-10 sm:mt-20 lg:mt-28 text-white">
      {/* Main Grid */}
      <div className="w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT Content */}
        <div className="space-y-6 text-center lg:text-left">
          <motion.h1
            className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-green-400">Eco Rides</span> That<br />
            <span className="text-green-300">Move You Forward</span>
          </motion.h1>

          <motion.p
            className="text-lg text-white/80 max-w-lg mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Book green rides with IdharUdhar. 🚗 Clean, fast, and reliable rides across 500+ cities. Zero hassle, max comfort.
          </motion.p>

          {/* Input Box */}
          <motion.div
            className="bg-white/5 border border-white/10 backdrop-blur-xl p-5 rounded-2xl space-y-4 shadow-2xl max-w-md mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {/* Pickup */}
            <div className="flex items-center gap-3 px-4 py-3 bg-white/10 rounded-md border border-white/10">
              <FaMapMarkerAlt className="text-green-300 text-xl" />
              <input
                type="text"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                placeholder="Pickup Location"
                className="w-full bg-transparent text-white placeholder-white/60 focus:outline-none"
              />
            </div>

            {/* Dropoff */}
            <div className="flex items-center gap-3 px-4 py-3 bg-white/10 rounded-md border border-white/10">
              <FaMapMarkerAlt className="text-green-300 text-xl" />
              <input
                type="text"
                value={dropoff}
                onChange={(e) => setDropoff(e.target.value)}
                placeholder="Dropoff Location"
                className="w-full bg-transparent text-white placeholder-white/60 focus:outline-none"
              />
            </div>

            {/* Find Rides Button */}
            <motion.button
              onClick={handleFindRides}
              disabled={isDisabled}
              whileTap={{ scale: 0.95 }}
              className={`w-full py-3 rounded-md font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                isDisabled
                  ? "bg-green-500/30 cursor-not-allowed"
                  : "bg-green-500 hover:bg-green-600"
              }`}
            >
              <FaSearch />
              Find Rides
            </motion.button>
          </motion.div>
        </div>

        {/* RIGHT - Premium Ride Promo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="hidden lg:block"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-xl hover:scale-102 transition-transform duration-500 group">
            <img
              src="/images/Idhar Udhar Car 1.png"
              alt="Premium Ride"
              className="w-full h-[400px] object-cover rounded-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 flex justify-between items-center bg-black/50 backdrop-blur-md rounded-b-3xl">
              <div>
                <h3 className="text-xl font-semibold">IdharUdhar Premium</h3>
                <p className="text-green-300 text-sm">EV Class • Starting ₹199</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleBookNow}
                className="bg-green-500 hover:bg-green-600 px-4 py-2 text-sm rounded-md font-medium shadow-md"
              >
                Book Now
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
