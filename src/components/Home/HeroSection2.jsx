import { FaTruck, FaShippingFast, FaShieldAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection2 = () => {
  const navigate = useNavigate();

  const handleVehicleSelection = () => {
    navigate("/select-vehicle");
  };

  return (
    <section className="relative text-white bg-gradient-to-br from-[#022c22] to-[#001510] overflow-hidden">
      {/* ✅ Right Side BG Image with soft glow blend */}
      <div
        className="hidden lg:block absolute top-0 right-0 w-1/2 h-full bg-cover bg-right bg-no-repeat opacity-20 blur-sm scale-105"
        style={{ backgroundImage: "url('/assets/truck.png')" }}
      />

      <div className="relative z-10 grid lg:grid-cols-2 items-center max-w-7xl mx-auto px-6 py-20 gap-12">
        {/* LEFT Content */}
        <div className="space-y-8 text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-extrabold leading-tight"
          >
            <span className="text-orange-500">Powered by Idhar Udhar</span>
            <br />
            <span>India’s Fastest Parcel Network</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-white/80 max-w-lg mx-auto lg:mx-0"
          >
            Delivering to 18,000+ Pin Codes with <span className="text-orange-300 font-semibold">99.9% On-Time</span> performance.
          </motion.p>

          <motion.div
            className="grid grid-cols-2 gap-10 max-w-md mx-auto lg:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-3 bg-white/10 px-4 py-3 rounded-xl backdrop-blur-md">
              <FaShippingFast className="text-orange-300 text-lg" />
              <span>18,000+ Pin Codes</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 px-4 py-3 rounded-xl backdrop-blur-md">
              <FaShieldAlt className="text-orange-300 text-lg" />
              <span>Secure Handling</span>
            </div>
          </motion.div>

          <motion.div
            className="pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.button
              onClick={handleVehicleSelection}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 rounded-md font-semibold flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-7  00 transition-all duration-300"
            >
              <FaTruck />
              Select Vehicle Type
            </motion.button>

          </motion.div>
        </div>

        {/* RIGHT Content - Promo Card on Image */}
        <motion.div
          initial={{ opacity: 0, }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="hidden lg:block relative"
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl group relative">
            <div
              className="w-full h-[400px] bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: "url('/images/truck.png')" }}
            >
              <div className="absolute inset-0 bg-black/60 rounded-3xl" />
              <div className="absolute bottom-0 p-4 w-full bg-black/50 backdrop-blur-md rounded-b-3xl">
                <h3 className="text-xl font-semibold">Delivery Network Advantages</h3>
                <ul className="mt-2 space-y-1 text-sm text-orange-200">
                  <li>• 24x7 Operations</li>
                  <li>• Automated Sorting Centers</li>
                  <li>• Temp-Controlled Transport</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection2;
