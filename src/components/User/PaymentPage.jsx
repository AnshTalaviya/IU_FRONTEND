import React, { useState } from "react";
import {
  FaCreditCard,
  FaGooglePay,
  FaMoneyBillWave,
  FaWallet,
  FaGift,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const PaymentPage = () => {
  const [selectedMethod, setSelectedMethod] = useState("card");

  const methods = [
    { key: "card", label: "Credit / Debit Card", icon: <FaCreditCard size={20} /> },
    { key: "upi", label: "UPI", icon: <FaGooglePay size={20} /> },
    { key: "wallet", label: "Wallet", icon: <FaWallet size={20} /> },
    { key: "credits", label: "Ride Credits", icon: <FaGift size={20} /> },
    { key: "cod", label: "Pay to Driver", icon: <FaMoneyBillWave size={20} /> },
  ];

  const inputStyle =
    "w-full px-4 py-2 rounded-lg bg-white/5 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all duration-300";

  return (
    <div className="min-h-screen text-white py-10 px-4 flex items-center justify-center">
      <div className="max-w-5xl w-full bg-[#0d1b2a]/60 backdrop-blur-xl border border-green-600/50 rounded-3xl p-10 space-y-6">
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent text-white mb-3">
            Select Payment Option
          </h1>
          <p className="text-sm text-gray-400">
            Complete your ride with your preferred method
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-5">
          {methods.map(({ key, label, icon }) => (
            <button
              key={key}
              onClick={() => setSelectedMethod(key)}
              className={`flex flex-col items-center justify-center p-4 rounded-2xl border font-semibold transition-transform duration-300 text-sm shadow-md backdrop-blur-sm ${
                selectedMethod === key
                  ? "bg-green-600/90 border-green-300 scale-105 shadow-lg"
                  : "bg-white/5 border-white/10 hover:bg-green-500/30 hover:border-green-300/80"
              }`}
            >
              <div className="text-xl mb-2">{icon}</div>
              <span className="text-center">{label}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
          {/* Left: Payment Form */}
          <div className="space-y-6">
            {selectedMethod === "card" && (
              <form className="space-y-4 animate-fade-in">
                <input type="text" placeholder="Name on Card" className={inputStyle} />
                <input type="text" placeholder="Card Number" className={inputStyle} />
                <div className="flex gap-4">
                  <input type="text" placeholder="MM/YY" className={`w-1/2 ${inputStyle}`} />
                  <input type="password" placeholder="CVV" className={`w-1/2 ${inputStyle}`} />
                </div>
                <Link to={"/payment-success"}>
                <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-bold shadow-md mt-4 transition-all">
                  Pay Now
                </button>
                </Link>
              </form>
            )}

            {selectedMethod === "upi" && (
              <form className="space-y-4 animate-fade-in">
                <input type="text" placeholder="yourname@upi" className={inputStyle} />
                <Link to={"/payment-success"}>
                <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-bold shadow-md mt-4 transition-all">
                  Pay via UPI
                </button>
                </Link>
              </form>
            )}

            {selectedMethod === "wallet" && (
              <div className="space-y-2 text-center animate-fade-in">
                <p className="text-lg text-gray-400">
                  Connected Wallet:{" "}
                  <span className="text-green-300 font-semibold">Paytm</span>
                </p>
                <p className="text-md text-gray-500">Balance: ₹550.00</p>
                <Link to={"/payment-success"}>
                <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-bold shadow-md mt-4 transition-all">
                  Pay with Wallet
                </button>
                </Link>
              </div>
            )}

            {selectedMethod === "credits" && (
              <div className="space-y-2 text-center animate-fade-in">
                <p className="text-lg text-gray-400">
                  Available Credits:{" "}
                  <span className="text-green-300 font-semibold">₹200</span>
                </p>
                <Link to={"/payment-success"}>
                <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-bold shadow-md mt-4 transition-all">
                  Use Ride Credits
                </button>
                </Link>
              </div>
            )}

            {selectedMethod === "cod" && (
              <div className="space-y-3 text-center animate-fade-in">
                <p className="text-lg text-gray-400">
                  Pay cash to the driver after your ride.
                </p>
                <Link to={"/payment-success"}>
                <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-bold shadow-md mt-4 transition-all">
                  Pay cash
                </button>
                </Link>
              </div>
            )}
          </div>

          {/* Right: QR Code */}
          <div className="flex flex-col items-center justify-center gap-3 border border-white/10 rounded-2xl p-6 bg-white/5 text-center">
            <p className="text-lg font-semibold text-white">
              Love what you see? <span className="text-pink-400">❤</span>
            </p>
            <img
              src="/images/qr.jpg" // replace this with your QR image path
              alt="QR Code"
              className="w-40 h-40 rounded-md"
            />
            <p className="text-sm text-gray-400">Scan to download our app!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;