import React, { useState } from "react";

export default function AddPaymentMethod({ onClose, onAdd }) {
  const [activeTab, setActiveTab] = useState("credit");
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [cvv, setCvv] = useState("");
  const [upiId, setUpiId] = useState("");

  const handleAddPayment = () => {
    let paymentMethod;

    if (activeTab === "upi") {
      if (!upiId) return alert("Please enter a valid UPI ID.");
      paymentMethod = {
        title: upiId,
        detail: "",
        icon: "💳",
      };
    } else {
      if (!cardNumber || !cardHolder || !expiryMonth || !expiryYear || !cvv) {
        return alert("Please fill in all card details.");
      }
      const cardType = activeTab === "credit" ? "Credit Card" : "Debit Card";
      const last4 = cardNumber.slice(-4);
      paymentMethod = {
        title: `${cardHolder} (${cardType})`,
        detail: `xxxx ${last4}`,
        icon: "💳",
      };
    }

    onAdd(paymentMethod);
    setCardNumber("");
    setCardHolder("");
    setExpiryMonth("");
    setExpiryYear("");
    setCvv("");
    setUpiId("");
    onClose();
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 11 }, (_, i) => currentYear + i);
  const months = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, "0"));

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
      <div className="bg-[#0c1a2c] text-white rounded-xl p-6 w-full max-w-md max-h-[95vh] overflow-y-auto shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Add Payment Method</h2>
          <button onClick={onClose} className="text-white text-xl font-bold">
            &times;
          </button>
        </div>

        <p className="text-sm text-gray-300 mb-4">
          Enter your payment details to add a new payment method.
        </p>

        <div className="flex space-x-2 mb-6">
          {["credit", "debit", "upi"].map((type) => (
            <button
              key={type}
              onClick={() => setActiveTab(type)}
              className={`flex-1 py-2 rounded text-sm font-medium transition ${activeTab === type
                  ? "bg-green-600 text-white"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                }`}
            >
              {type === "credit"
                ? "Credit Card"
                : type === "debit"
                  ? "Debit Card"
                  : "UPI"}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {activeTab === "upi" ? (
            <input
              className="w-full p-2 rounded bg-gray-900 text-white border border-gray-700"
              placeholder="Enter your UPI ID (e.g. user@bank)"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
            />
          ) : (
            <>
              <input
                className="w-full p-2 rounded bg-gray-900 text-white border border-gray-700"
                placeholder="1234 5678 9012 3456"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
              <input
                className="w-full p-2 rounded bg-gray-900 text-white border border-gray-700"
                placeholder="Card Holder Name"
                value={cardHolder}
                onChange={(e) => setCardHolder(e.target.value)}
              />
              <div className="flex space-x-2">
                <select
                  className="w-1/3 p-2 rounded bg-gray-900 text-white border border-gray-700"
                  value={expiryMonth}
                  onChange={(e) => setExpiryMonth(e.target.value)}
                >
                  <option value="">MM</option>
                  {months.map((month) => (
                    <option key={month} value={month}>{month}</option>
                  ))}
                </select>
                <select
                  className="w-1/3 p-2 rounded bg-gray-900 text-white border border-gray-700"
                  value={expiryYear}
                  onChange={(e) => setExpiryYear(e.target.value)}
                >
                  <option value="">YYYY</option>
                  {years.map((year) => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
                <input
                  className="w-1/3 p-2 rounded bg-gray-900 text-white border border-gray-700"
                  placeholder="CVV"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                />
              </div>
            </>
          )}
        </div>

        <div className="flex justify-end mt-6 space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-600 rounded hover:bg-green-900 text-sm"
          >
            Cancel
          </button>
          <button
            onClick={handleAddPayment}
            className="px-4 py-2 bg-green-600 rounded hover:bg-green-700 text-sm"
          >
            Add Payment Method
          </button>
        </div>
      </div>
    </div>
  );
}
