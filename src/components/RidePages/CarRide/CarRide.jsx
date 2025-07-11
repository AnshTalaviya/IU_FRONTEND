import React from "react";
import { FaCarSide, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

const rides = [
  { 
    id: 1,
    name: "GreenCar",
    description: "Comfortable sedans for daily commute",
    price: 19900,
    displayPrice: "₹199",
    eta: "5 mins",
    capacity: 4,
    tags: ["Air Conditioned", "Preferred Option"],
  },
  {
    id: 2,
    name: "GreenPremium",
    description: "Luxury cars for premium experience",
    price: 34900,
    displayPrice: "₹349",
    eta: "8 mins",
    capacity: 4,
    tags: ["Premium Cars", "Top-rated riders", "Complimentary Water"],
  },
  {
    id: 3,
    name: "GreenXL",
    description: "Spacious SUVs for group travel",
    price: 29900,
    displayPrice: "₹299",
    eta: "7 mins",
    capacity: 6,
    tags: ["Spacious", "For Groups", "Extra Luggage Space"],
  },
];

const tagRoutes = {
  "Air Conditioned": "/features/air-conditioned",
  "Preferred Option": "/features/air-conditioned",
  "Premium Cars": "/features/premium-cars",
  "Top-rated riders": "/features/premium-cars",
  "Complimentary Water": "/features/premium-cars",
  "Spacious": "/features/spacious",
  "For Groups": "/features/spacious",
  "Extra Luggage Space": "/features/spacious",
};

export default function CarRide() {
  // eslint-disable-next-line
  const handlePayment = (amount) => {
    if (typeof window.Razorpay === "undefined") {
      alert("Razorpay not loaded.");
      return;
    }

    const options = {
      key: "rzp_test_abc123XYZ",
      amount,
      currency: "INR",
      name: "GreenCar",
      description: "Car Trip Payment",
      image: "/icons/car.png",
      handler: function (response) {
        alert("Payment successful. Payment ID: " + response.razorpay_payment_id);
      },
      prefill: {
        name: "Test User",
        email: "user@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#0f172a",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="min-h-[85vh] bg-white dark:bg-[#1F2937] text-white flex items-center justify-center px-4 py-10">
      <div className="bg-[#1f2a3b] rounded-2xl w-full max-w-3xl p-6 sm:p-8 shadow-xl">
        <h1 className="text-2xl font-bold mb-4">Book Your Trip</h1>

        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-lg font-semibold">Available Trips</h2>
            <p className="text-sm text-gray-400">For immediate pickup</p>
          </div>
          <Link to="/book-ride">
            <button className="bg-[#0b111c] hover:bg-green-900 text-white text-sm px-5 py-2.5 rounded-lg">
              Back
            </button>
          </Link>
        </div>

        {rides.map((ride) => (
          <div
            key={ride.id}
            className="bg-[#0b111c] p-5 rounded-xl mb-4 hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-3">
              <div className="flex items-center gap-4">
                <div className="bg-[#14532d33] p-3 rounded-full">
                  <FaCarSide className="text-green-400 text-2xl" />
                </div>
                <div>
                  <p className="font-semibold text-white text-lg">{ride.name}</p>
                  <p className="text-sm text-gray-400">{ride.description}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-white font-semibold text-xl">{ride.displayPrice}</p>
                <p className="text-xs text-gray-400">ETA: {ride.eta}</p>
              </div>
            </div>

            <hr className="my-4 border-t border-gray-700" />

            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap gap-2">
                {ride.tags.map((tag, i) => {
                  const route = tagRoutes[tag];
                  return route ? (
                    <Link to={route} key={i}>
                      <span className="bg-[#2e3c51] cursor-pointer text-gray-300 px-3 py-1 text-xs rounded-full transition">
                        {tag}
                      </span>
                    </Link>
                  ) : (
                    <span
                      key={i}
                      className="bg-[#2e3c51] text-gray-300 px-3 py-1 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>

              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <FaUsers className="w-5 h-5" />
                <span>{ride.capacity}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
