import React from "react";
import {  Link } from "react-router-dom";
import AddPaymentMethod from "./AddPaymentMethod";


const ConfirmRide = ({
  pickupLocation,
  dropLocation,
  rideType,
  eta,
  fareDetails,
  totalFare,
  paymentMethods,
  selectedMethod,
  onSelectMethod,
  onShowAddPayment,
  onHideAddPayment,
  showAddPayment,
  onAddPayment,
  Route,
  rideIcon
}) => {

  return (
    <>
      <div className="min-h-screen bg-[#0E121C] flex items-center justify-center px-4 py-10 text-white">
        <div className="bg-[#1C2431] w-full max-w-2xl rounded-xl p-8 shadow-2xl">
          <h2 className="text-2xl font-semibold mb-1">Book Your Ride</h2>
          <p className="text-sm text-gray-400 mb-4">
            {pickupLocation} to {dropLocation}{" "}
            <Link to={"/book"}>
              <span className="text-blue-400 cursor-pointer hover:underline">
                Edit
              </span>
            </Link>


          </p>
          <div className="bg-[#111826] p-4 rounded-lg flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="bg-gray-800 p-3 rounded-full">
                <span className="text-[#0fa958] text-2xl">{rideIcon}</span>
              </div>

              <div>
                <h3 className="font-semibold text-sm">{rideType}</h3>
                <p className="text-xs text-gray-400">ETA: {eta}</p>
              </div>
            </div>
            <Link to={Route}>
              <button className="bg-[#0b111c] hover:bg-green-900 text-white text-sm px-4 py-2 rounded-lg cursor-pointer">
                Change
              </button>
            </Link>
          </div>

          <div className="mb-6">
            <h4 className="text-sm font-medium mb-3 text-gray-300">
              Fare Breakdown
            </h4>
            <div className="space-y-1 text-sm text-gray-300">
              {fareDetails.map((item, i) => (
                <div key={i} className="flex justify-between">
                  <span>{item.label}</span>
                  <span>₹{item.amount}</span>
                </div>
              ))}
              <div className="flex justify-between font-semibold text-white mt-3">
                <span>Total fare</span>
                <span>₹{totalFare}</span>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-sm font-medium mb-3 text-gray-300">
              Payment Method
            </h4>
            <div className="space-y-3">
              {paymentMethods.map((method, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between p-4 rounded-lg cursor-pointer transition-all ${selectedMethod === index
                    ? "border border-green-500 bg-[#111826]"
                    : "border border-[#2E3748] bg-[#111826] hover:border-green-500"
                    }`}
                  onClick={() => onSelectMethod(index)}
                >
                  <div className="flex items-center gap-3">
                    <div className="text-xl">{method.icon}</div>
                    <div>
                      <p className="text-sm text-white">{method.title}</p>
                      {method.detail && (
                        <p className="text-xs text-gray-400">
                          {method.detail}
                        </p>
                      )}
                    </div>
                  </div>
                  {selectedMethod === index && (
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  )}
                </div>
              ))}
              <button
                onClick={onShowAddPayment}
                className="bg-gray-900 cursor-pointer text-white text-sm font-semibold py-3 px-4 rounded-lg hover:bg-green-900 transition-colors w-full text-center mt-1"
              >
                ➕ Add New Payment Method
              </button>
            </div>
          </div>

          <Link to="/ride-tracking" state={{ showPopup: true }}>
            <button className="w-full cursor-pointer bg-green-600 hover:bg-green-700 py-3 rounded-lg text-sm font-medium text-black">
              Confirm {rideType} (₹{totalFare})
            </button>
          </Link>
        </div>
      </div>

      {showAddPayment && (
        <AddPaymentMethod
          onClose={onHideAddPayment}
          onAdd={onAddPayment}
        />
      )}
    </>
  );
};


export default ConfirmRide;