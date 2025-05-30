import React, { useState } from "react";
// import { button } from "@/components/ui/button";
import { Trash2, PlusCircle } from "lucide-react";

export default function PaymentPage() {
  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: 1,
      type: "Credit Card",
      name: "HDFC Credit Card",
      last4: "4242",
      expiry: "12/26",
      isDefault: true,
    },
    {
      id: 2,
      type: "Debit Card",
      name: "ICICI Debit Card",
      last4: "5678",
      expiry: "09/25",
      isDefault: false,
    },
    {
      id: 3,
      type: "UPI",
      name: "user@upi",
      isDefault: false,
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newMethod, setNewMethod] = useState({
    type: "Credit Card",
    cardNumber: "",
    cardHolder: "",
    expiry: "",
    cvv: "",
  });

  const handleInputChange = (e) => {
    setNewMethod({ ...newMethod, [e.target.name]: e.target.value });
  };

  const handleAddPaymentMethod = () => {
    const newEntry = {
      id: Date.now(),
      type: newMethod.type,
      name:
        newMethod.type === "UPI"
          ? newMethod.cardHolder
          : `${newMethod.cardHolder.split(" ")[0]} ${newMethod.type}`,
      last4: newMethod.cardNumber?.slice(-4),
      expiry: newMethod.expiry,
      isDefault: false,
    };
    setPaymentMethods([...paymentMethods, newEntry]);
    setShowForm(false);
    setNewMethod({ type: "Credit Card", cardNumber: "", cardHolder: "", expiry: "", cvv: "" });
  };

  return (
    <div className="p-6 min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-6 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Payment Methods</h3>
          <button
            className="bg-green-600 flex items-center gap-2"
            onClick={() => setShowForm(true)}
          >
            <PlusCircle className="w-4 h-4" /> Add New
          </button>
        </div>

        {showForm && (
          <div className="bg-gray-900 p-6 rounded-lg mb-6 border border-gray-700">
            <h4 className="text-white font-semibold mb-4">Add Payment Method</h4>
            <div className="space-y-4">
              <div className="flex gap-2">
                {['Credit Card', 'Debit Card', 'UPI'].map((option) => (
                  <button
                    key={option}
                    onClick={() => setNewMethod({ ...newMethod, type: option })}
                    className={`px-4 py-2 rounded-full border text-sm ${
                      newMethod.type === option
                        ? 'bg-green-600 border-green-600'
                        : 'bg-gray-700 border-gray-600'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>

              {newMethod.type !== 'UPI' && (
                <>
                  <div>
                    <label className="block mb-1">Card Number</label>
                    <input
                      type="text"
                      name="cardNumber"
                      className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600"
                      placeholder="1234 5678 9012 3456"
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
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="flex gap-4">
                    <div className="w-1/2">
                      <label className="block mb-1">Expiry Date</label>
                      <input
                        type="text"
                        name="expiry"
                        className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600"
                        placeholder="MM/YY"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="w-1/2">
                      <label className="block mb-1">CVV</label>
                      <input
                        type="text"
                        name="cvv"
                        className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600"
                        placeholder="123"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </>
              )}

              {newMethod.type === 'UPI' && (
                <div>
                  <label className="block mb-1">UPI ID</label>
                  <input
                    type="text"
                    name="cardHolder"
                    className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600"
                    placeholder="yourname@upi"
                    onChange={handleInputChange}
                  />
                </div>
              )}

              <div className="flex justify-end gap-2">
                <button
                  variant="ghost"
                  className="text-white border border-gray-600"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
                <button className="bg-green-600" onClick={handleAddPaymentMethod}>
                  Add Payment Method
                </button>
              </div>
            </div>
          </div>
        )}

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
                  {method.expiry && <p className="text-sm text-gray-400">Expires: {method.expiry}</p>}
                  {method.isDefault && <p className="text-green-500 text-sm">Default</p>}
                </div>
              </div>
              <div className="flex gap-2 items-center">
                {!method.isDefault && (
                  <button variant="secondary" className="text-white bg-gray-700 hover:bg-gray-600">
                    Set Default
                  </button>
                )}
                {!method.isDefault && (
                  <button variant="ghost" size="icon" className="text-red-500 hover:text-red-600">
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
