import { useState } from "react";
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const HeroSection = () => {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const navigate = useNavigate();
  // eslint-disable-next-line
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
    <section className="bg-[#166534] text-white">
      <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE */}
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              <span className="block text-white">The Future of</span>
              <span className="block text-green-300">Ride Sharing</span>
              <span className="block text-white">is Green & Sustainable</span>
            </h1>
            <p className="text-base md:text-lg text-white/90 max-w-xl">
              Experience seamless, eco-friendly rides at your fingertips.
              <span className="block mt-2">
                Idhar-Udhar connects you with reliable drivers in over{" "}
                <strong>500+ cities</strong> nationwide.
              </span>
            </p>

            {/* Form */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-4 sm:p-6 shadow-lg space-y-4 max-w-lg w-full">
              {/* Pickup */}
              <div className="flex items-center bg-white/10 rounded-md px-3 py-2">
                <FaMapMarkerAlt className="text-green-300 mr-3" />
                <input
                  type="text"
                  placeholder="Pickup Location"
                  className="bg-transparent outline-none w-full text-white placeholder-gray-300"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                />
              </div>

              {/* Dropoff */}
              <div className="flex items-center bg-white/10 rounded-md px-3 py-2">
                <FaMapMarkerAlt className="text-green-300 mr-3" />
                <input
                  type="text"
                  placeholder="Dropoff Location"
                  className="bg-transparent outline-none w-full text-white placeholder-gray-300"
                  value={dropoff}
                  onChange={(e) => setDropoff(e.target.value)}
                />
              </div>

              {/* Button */}
              <button
                onClick={handleFindRides}
                disabled={isDisabled}
                className={`w-full py-2 rounded-md flex items-center justify-center gap-2 font-semibold transition-colors
                  ${
                    isDisabled
                      ? "bg-green-800 cursor-not-allowed opacity-50"
                      : "bg-green-500 hover:bg-green-600 text-white"
                  }`}
              >
                <FaSearch />
                Find Rides
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative w-full h-full hidden lg:block">
            {/* Decorative Pulsing Circles */}
            <div className="absolute bottom-[-30px] left-[-30px] w-[100px] h-[100px] bg-[#5BA79D] rounded-full  animate-pulse z-0"></div>
            <div className="absolute top-[-30px] right-[-30px] w-[100px] h-[100px] bg-[#5BA79D] rounded-full animate-pulse z-10"></div>

            <div className="relative overflow-hidden rounded-xl shadow-xl z-20">
              <img
                src="/images/home_page1.png"
                alt="Luxury car"
                className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-green-800/40 to-transparent rounded-xl"></div>

              <div
                className="absolute inset-x-0 bottom-0 top-70  p-3 text-white rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
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
                    <p className="text-xs text-green-300">
                      Electric Luxury Experience
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-3">
                  <div>
                    <p className="text-xs">Starting at</p>
                    <p className="text-lg font-bold">₹199</p>
                  </div>
                  <button
                    onClick={handleBookNow}
                    className="text-sm bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;