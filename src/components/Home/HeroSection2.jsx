import { FaTruck, FaShippingFast, FaShieldAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection2 = () => {
  const navigate = useNavigate();

  const handleVehicleSelection = () => {
    navigate("/select-vehicle");
  };

  const handleExpressDelivery = () => {
    navigate("/book/express");
  };

  return (
    <section className="bg-gradient-to-br from-[#022c22] to-[#001510] sm:mt-18 lg:mt-12 text-white">
      <div className="w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center py-12">
        {/* LEFT Content */}
        <div className="space-y-6 text-center lg:text-left">
          <motion.h1
            className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-orange-600">Powered by Idhar Udhar</span> <br />
            <h3>
            <span className="text-white">India's Fastest & Most Reliable Parcel Service</span>
            </h3>

          </motion.h1>

          <motion.p
            className="text-lg text-white/80 max-w-lg mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
           Partnering with India’s Leading Network to Reach 18,000+ Pin Codes with 99.9% On-Time Reliability.
          </motion.p>

          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-2 text-sm bg-white/10 p-3 rounded-lg">
              <FaShippingFast className="text-orange-300" />
              <span>18,000+ Pin Codes</span>
            </div>
            <div className="flex items-center gap-2 text-sm bg-white/10 p-3 rounded-lg">
              <FaShieldAlt className="text-orange-300" />
              <span>Secure Handling</span>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
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

        {/* RIGHT - Delhivery Network Promo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="hidden lg:block"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-xl hover:scale-[1.02] transition-transform duration-500 group">
            <img
              src="/images/truck.png"
              alt="Delhivery Network"
              className="w-full h-[400px] mb-5 object-cover rounded-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-1 flex flex-col bg-black/50 backdrop-blur-md rounded-b-3xl">
              <h3 className="text-xl font-semibold">Delivery Network Advantages</h3>
              <ul className="mt-1 space-y-1 text-sm text-orange-200">
                <li>• 24x7 Operations</li>
                <li>• Automated Sorting Centers</li>
                <li>• Temperature Controlled Transport</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection2;