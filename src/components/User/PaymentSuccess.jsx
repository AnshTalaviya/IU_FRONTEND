import React from "react";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const PaymentSuccess = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="bg-[#161b22] max-w-md w-full p-8 rounded-2xl shadow-2xl text-center border border-green-600"
            >
                <motion.div
                    initial={{ rotate: -90 }}
                    animate={{ rotate: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center"
                >
                    <CheckCircle size={72} className="text-green-500 mb-4" />
                </motion.div>

                <h1 className="text-3xl font-bold text-green-400 mb-2">Payment Successful</h1>
                <p className="text-gray-300 mb-6">
                    Thank you for your payment. Your transaction has been completed successfully.
                </p>

                {/* Optional: Payment details (customize as needed) */}
                <div className="bg-[#0d1117] border border-gray-700 rounded-md p-4 mb-6 text-left text-sm text-gray-300 space-y-2">
                    <p><strong>Order ID:</strong> #IU12345678</p>
                    <p><strong>Amount Paid:</strong> ₹499.00</p>
                    <p><strong>Payment Method:</strong> UPI</p>
                    <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
                </div>
                <div className="flex justify-between">
                    <button
                        onClick={() => navigate("/invoice")}
                        className="bg-green-500 hover:bg-green-600 text-black font-semibold py-2 px-6 rounded-lg transition"
                    >
                        View Invoice
                    </button>
                    <button
                        onClick={() => navigate("/rating")}
                        className="bg-green-500 hover:bg-green-600 text-black font-semibold py-2 px-6 rounded-lg transition"
                    >
                        Back to Home
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default PaymentSuccess;
