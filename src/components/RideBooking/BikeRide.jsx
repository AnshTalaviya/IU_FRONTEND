import React from "react";
import { User } from "lucide-react";
import { Link } from "react-router-dom";

export default function BikeRide() {
  const handlePayment = () => {
    if (typeof window.Razorpay === 'undefined') {
      alert("Razorpay  not loaded.");
      return;
    }

    const options = {
      key: "rzp_test_abc123XYZ", // ✅ Replace this with your actual Razorpay key
      amount: 9900,
      currency: "INR",
      name: "GreenBike",
      description: "Ride Booking Payment",
      image: "/icons/bike.png",
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

        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Book Your Ride</h1>
        </div>

        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-xl font-semibold">Available Rides</h2>
            <p className="text-sm text-gray-400">
             For immediate pickup
            </p>
          </div>
          <Link to="/book-ride">
            <button className="bg-[#0b111c] hover:bg-green-900 text-white text-sm px-5 py-2.5 rounded-lg cursor-pointer">
              Back
            </button>
          </Link>
        </div>

        <div className="bg-[#0b111c] p-5 rounded-xl flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="bg-[#14532d33] p-3 sm:p-4 rounded-full">
                <img
                  src="/icons/bike.png"
                  alt="bike"
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                />
              </div>
              <div>
                <p className="font-semibold text-white text-lg">GreenBike</p>
                <p className="text-sm text-gray-400">
                  Quick & affordable bike rides
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-white font-semibold text-xl">₹99</p>
              <p className="text-xs text-gray-400">ETA: 4 mins</p>
            </div>
          </div>

          <hr className="border-gray-700" />

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex gap-3">
              <Link to={"/confirm"}>
                <button
                  onClick={handlePayment}
                  className="bg-[#2e3c51] hover:bg-[#3a4b65] text-white px-2 py-1.5 rounded-2xl text-sm font-medium cursor-pointer"
                >
                  Fastest Option
                </button>
              </Link>
              <Link to={"/confirm"}>
                <button
                  onClick={handlePayment}
                  className="bg-[#2e3c51] hover:bg-[#3a4b65] text-white px-2 py-1.5 rounded-2xl text-sm font-medium cursor-pointer"
                >
                  Economical
                </button>
              </Link>
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <User className="w-5 h-5" />
              <span>1 Passenger</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

