import React, { useState } from "react";
import { Trash2, PlusCircle } from "lucide-react";

export default function PaymentPage() {
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const [newMethod, setNewMethod] = useState({
    type: "Credit Card",
    cardNumber: "",
    cardHolder: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
  });

  const handleInputChange = (e) => {
    setNewMethod({ ...newMethod, [e.target.name]: e.target.value });
  };

  const isValidDetails = () => {
    if (newMethod.type === "UPI") {
      return newMethod.cardHolder.trim().length > 0 && newMethod.cardHolder.includes("@");
    } else {
      return (
        newMethod.cardNumber.length >= 12 &&
        newMethod.cardHolder.trim().length > 0 &&
        newMethod.expiryMonth &&
        newMethod.expiryYear &&
        /^\d{3,4}$/.test(newMethod.cvv)
      );
    }
  };

  const handleAddPaymentMethod = () => {
    if (!isValidDetails()) {
      alert("Please enter valid payment details.");
      return;
    }

    const newEntry = {
      id: Date.now(),
      type: newMethod.type,
      name:
        newMethod.type === "UPI"
          ? newMethod.cardHolder
          : `${newMethod.cardHolder.split(" ")[0]} ${newMethod.type}`,
      last4: newMethod.cardNumber?.slice(-4),
      expiry: `${newMethod.expiryMonth}/${newMethod.expiryYear}`,
      isDefault: paymentMethods.length === 0,
    };

    setPaymentMethods([...paymentMethods, newEntry]);
    setShowForm(false);
    setNewMethod({
      type: "Credit Card",
      cardNumber: "",
      cardHolder: "",
      expiryMonth: "",
      expiryYear: "",
      cvv: "",
    });
  };

  const handleDelete = (id) => {
    setPaymentMethods((prev) => prev.filter((m) => m.id !== id));
  };

  const handleSetDefault = (id) => {
    setPaymentMethods((prev) =>
      prev.map((m) => ({ ...m, isDefault: m.id === id }))
    );
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen w-full text-white flex flex-col items-center">
      <div className="bg-gray-800 p-6 w-full">
        <div className="flex justify-center mb-4">
          <button
            className="bg-green-600 px-4 py-2 rounded-lg flex items-center gap-2"
            onClick={() => setShowForm(true)}
          >
            <PlusCircle className="w-4 h-4" /> Choose Your Payment Method
          </button>
        </div>

        {showForm && (
          <div className="bg-gray-900 p-6 rounded-lg mb-6 border border-gray-700 w-full">
            <h4 className="text-white font-semibold mb-4">Add Payment Method</h4>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {["Credit Card", "Debit Card", "UPI"].map((option) => (
                  <button
                    key={option}
                    onClick={() => setNewMethod({ ...newMethod, type: option })}
                    className={`px-4 py-2 rounded-full border text-sm ${
                      newMethod.type === option
                        ? "bg-green-600 border-green-600"
                        : "bg-gray-700 border-gray-600"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>

              {newMethod.type !== "UPI" && (
                <>
                  <div>
                    <label className="block mb-1">Card Number</label>
                    <input
                      type="text"
                      name="cardNumber"
                      className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600"
                      placeholder="1234 5678 9012 3456"
                      value={newMethod.cardNumber}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <label className="block mb-1">Card Holder Name</label>
                    <input
                      type="text"
                      name="cardHolder"
                      className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600"
                      placeholder="John Doe"
                      value={newMethod.cardHolder}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* Responsive Expiry and CVV */}
                  <div className="flex flex-wrap gap-4">
                    <div className="flex flex-col flex-1 min-w-[120px]">
                      <label className="block mb-1">Expiry Month</label>
                      <select
                        name="expiryMonth"
                        className="w-full px-3 py-2 rounded bg-gray-800 text-white border border-gray-600"
                        value={newMethod.expiryMonth}
                        onChange={handleInputChange}
                      >
                        <option value="">Month</option>
                        {Array.from({ length: 12 }, (_, i) => {
                          const month = (i + 1).toString().padStart(2, "0");
                          return (
                            <option key={month} value={month}>
                              {month}
                            </option>
                          );
                        })}
                      </select>
                    </div>

                    <div className="flex flex-col flex-1 min-w-[120px]">
                      <label className="block mb-1">Expiry Year</label>
                      <select
                        name="expiryYear"
                        className="w-full px-3 py-2 rounded bg-gray-800 text-white border border-gray-600"
                        value={newMethod.expiryYear}
                        onChange={handleInputChange}
                      >
                        <option value="">Year</option>
                        {Array.from({ length: 10 }, (_, i) => {
                          const year = currentYear + i;
                          return (
                            <option key={year} value={year}>
                              {year}
                            </option>
                          );
                        })}
                      </select>
                    </div>

                    <div className="flex flex-col flex-1 min-w-[120px]">
                      <label className="block mb-1">CVV</label>
                      <input
                        type="text"
                        name="cvv"
                        className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600"
                        placeholder="123"
                        value={newMethod.cvv}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </>
              )}

              {newMethod.type === "UPI" && (
                <div>
                  <label className="block mb-1">UPI ID</label>
                  <input
                    type="text"
                    name="cardHolder"
                    className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600"
                    placeholder="yourname@upi"
                    value={newMethod.cardHolder}
                    onChange={handleInputChange}
                  />
                </div>
              )}

              <div className="flex justify-end gap-2 flex-wrap">
                <button
                  className="text-white border border-gray-600 px-4 py-2 rounded"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
                <button
                  className="bg-green-600 px-4 py-2 rounded"
                  onClick={handleAddPaymentMethod}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Render Payment Methods */}
        <div className="space-y-4">
          {paymentMethods.map((method) => (
            <div
              key={method.id}
              className={`flex justify-between items-center p-4 rounded-lg bg-gray-900 border ${
                method.isDefault ? "border-green-500" : "border-gray-700"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="bg-gray-700 rounded-full p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-gray-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75A2.25 2.25 0 014.5 4.5h15a2.25 2.25 0 012.25 2.25v1.5H2.25v-1.5zM2.25 9h19.5v7.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V9z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-white">{method.name}</p>
                  {method.last4 && <p className="text-sm text-gray-400">•••• {method.last4}</p>}
                  {method.expiry && (
                    <p className="text-sm text-gray-400">Expires: {method.expiry}</p>
                  )}
                  {method.isDefault && <p className="text-green-500 text-sm">Default</p>}
                </div>
              </div>
              <div className="flex gap-2 items-center">
                {!method.isDefault && (
                  <button
                    className="text-white bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded text-sm"
                    onClick={() => handleSetDefault(method.id)}
                  >
                    Set Default
                  </button>
                )}
                {!method.isDefault && (
                  <button
                    className="text-red-500 hover:text-red-600"
                    onClick={() => handleDelete(method.id)}
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
