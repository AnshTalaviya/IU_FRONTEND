import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddPaymentMethod from "./AddPaymentMethod";
import { Trash2, Check } from "lucide-react";

const ConfirmRide = ({
  pickupLocation,
  dropLocation,
  rideType,
  eta,
  fareDetails,
  totalFare,
  Route,
  rideIcon,
}) => {
  const [showAddPayment, setShowAddPayment] = useState(false);
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleAddPayment = (method) => {
    setPaymentMethods([...paymentMethods, method]);
    setSelectedIndex(paymentMethods.length); // set newly added as default
    setShowAddPayment(false);
  };

  const handleDelete = (index) => {
    const updated = [...paymentMethods];
    updated.splice(index, 1);
    setPaymentMethods(updated);
    if (selectedIndex === index) {
      setSelectedIndex(null);
    } else if (selectedIndex > index) {
      setSelectedIndex((prev) => prev - 1);
    }
  };

  const handleSetDefault = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div
      className={`min-h-screen bg-white dark:bg-[#1F2937] flex items-center justify-center px-4 py-10 text-white ${
        showAddPayment ? "overflow-hidden fixed inset-0" : ""
      }`}
    >
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
          <h4 className="text-sm font-medium mb-3 text-gray-300">Fare Breakdown</h4>
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
          <h4 className="text-sm font-medium mb-3 text-gray-300">Payment Method</h4>
          <div className="space-y-3">
            {paymentMethods.length > 0 ? (
              paymentMethods.map((method, i) => (
                <div
                  key={i}
                  className={`relative group p-4 rounded-lg border ${
                    selectedIndex === i
                      ? "bg-[#111826] border-green-500"
                      : "bg-[#111826] border-gray-700"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div
                      className="cursor-pointer"
                      onClick={() => handleSetDefault(i)}
                    >
                      <p className="text-sm font-medium text-white">
                        {method.icon} {method.title}
                      </p>
                      {method.detail && (
                        <p className="text-xs text-gray-400 mt-1">
                          {method.detail}
                        </p>
                      )}
                      {selectedIndex === i && (
                        <div className="text-xs text-green-400 mt-1 flex items-center gap-1">
                          <Check className="w-4 h-4" /> Default
                        </div>
                      )}
                      {selectedIndex !== i && (
                        <p className="text-xs text-blue-400 mt-1 hover:underline">
                          Set as Default
                        </p>
                      )}
                    </div>

                    <button
                      onClick={() => {
                        if (selectedIndex !== i) handleDelete(i);
                      }}
                      className={`${
                        selectedIndex === i
                          ? "text-gray-600 cursor-not-allowed"
                          : "text-gray-400 hover:text-red-500"
                      }`}
                      disabled={selectedIndex === i}
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500">No method selected</p>
            )}

            <button
              onClick={() => setShowAddPayment(true)}
              className="bg-gray-900 cursor-pointer text-white text-sm font-semibold py-3 px-4 rounded-lg hover:bg-green-900 transition-colors w-full text-center"
            >
              ➕ Add Payment Method
            </button>

            {showAddPayment && (
              <div className="fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4">
                <div className="bg-[#1F2937] rounded-lg w-full max-w-2xl">
                  <AddPaymentMethod
                    onClose={() => setShowAddPayment(false)}
                    onAdd={handleAddPayment}
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        <Link to="/Searching_ride" state={{ showPopup: true }}>
          <button className="w-full cursor-pointer bg-green-600 hover:bg-green-700 py-3 rounded-lg text-sm font-medium text-black">
            Confirm {rideType} (₹{totalFare})
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ConfirmRide;
// import React, { useState } from "react";