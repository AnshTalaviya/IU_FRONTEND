"use client"

import { useState } from "react"
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"

const HeroSection = () => {
  const [pickup, setPickup] = useState("")
  const [dropoff, setDropoff] = useState("")
  const navigate = useNavigate()
  const { user } = useAuth()

  const isDisabled = !pickup.trim() || !dropoff.trim()

  const handleFindRides = () => {
    // if (!user) {
    //   alert("Please signup or login first to book a ride")
    //   navigate("/signup")
    //   return
    // }
    if (!isDisabled) {
      navigate(`/book?pickup=${encodeURIComponent(pickup)}&dropoff=${encodeURIComponent(dropoff)}`)
    }
  }

  const handleBookNow = () => {
    // if (!user) {
    //   alert("Please signup or login first to book a ride")
    //   navigate("/auth/signup")
    //   return
    // }
    navigate("/book/premium")
  }

  return (
    <section className="bg-[#166534] text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20 md:py-28 lg:py-48">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* LEFT SIDE */}
          <div className="w-full lg:max-w-xl text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
              <span className="block text-white">The Future of</span>
              <span className="block text-green-300">Ride Sharing</span>
              <span className="block text-white">is Green &</span>
              <span className="block text-white">Sustainable</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg mb-8">
              Experience seamless, eco-friendly rides at your fingertips.<br />
              <span className="block mt-2">
                Idhar-Udhar connects you with reliable drivers in over <strong>500+ cities</strong> nationwide.
              </span>
            </p>

            <div className="mt-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 sm:p-6 space-y-4 shadow-lg w-full max-w-lg">
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

              <button
                onClick={handleFindRides}
                disabled={isDisabled}
                className={`w-full py-2 rounded-md flex items-center justify-center gap-2 font-semibold
                  ${isDisabled ? "bg-green-800 cursor-not-allowed opacity-50" : "bg-green-500 hover:bg-green-600 text-white"}`}
              >
                <FaSearch />
                Find Rides
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative w-full h-full hidden sm:block">
            <div className="absolute bottom-[-30px] left-[-30px] w-[80px] h-[80px] bg-[#5BA79D] rounded-full opacity-50 z-0 animate-pulse-custom"></div>
            <div className="absolute top-[-30px] right-[-30px] w-[80px] h-[80px] bg-[#5BA79D] rounded-full z-20 animate-pulse-custom" />

            <div className="relative rounded-xl overflow-hidden shadow-lg z-10">
              <img
                src="/images/home_page1.png"
                alt="Luxury car"
                className="object-cover w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-green-800/40 to-transparent"></div>
              <div className="absolute bottom-4 inset-x-4 p-4 text-white max-w-md mx-auto">
                <div className="mb-3">
                  <div className="flex items-center mb-1">
                    <div className="bg-green-500 rounded-full w-9 h-9 flex items-center justify-center text-sm font-bold mr-4">
                      G
                    </div>
                    <div>
                      <h3 className="text-base font-semibold">IdharUdhar Premium</h3>
                      <p className="text-xs text-green-300">Electric Luxury Experience</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs">Starting at</p>
                    <p className="text-xl font-bold">₹199</p>
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
  )
}

export default HeroSection;
