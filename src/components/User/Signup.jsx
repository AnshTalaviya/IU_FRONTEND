import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { motion } from 'framer-motion';

function Signup() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    role: "User",
    phone: "",
    vehicleType: "",
    vehicleNumber: "",
    licenseNumber: "",
    otp: "",
    agreed: false,
  });

  const [otpSent, setOtpSent] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSendOtp = async () => {
    if (!form.agreed) return setMessage("Please accept terms and conditions.");
    setLoading(true);

    try {
      const res = await axios.post(
        "https://login-signup-iu.onrender.com/api/auth/send-otp",
        form,
        {
          validateStatus: () => true,
        }
      );

      if (res.status === 200 || res.status === 201) {
        setOtpSent(true);
        setMessage(res.data?.message || "OTP sent successfully.");
      } else {
        setMessage(res.data?.message || "Failed to send OTP.");
      }
    } catch (err) {
      setMessage(err.response?.data?.message || "Error sending OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const res = await axios.post("https://login-signup-iu.onrender.com/api/auth/verify-otp", {
        email: form.email,
        otp: form.otp,
      });

      if (res.data.token && res.data.user) {
        login(res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        setMessage(res.data.message);
        const role = res.data.user.role;
        navigate(role === 'Driver' ? '/driver' : '/');
      } else {
        setMessage("Invalid response from server.");
      }
    } catch (err) {
      setMessage(err.response?.data?.message || "OTP verification failed");
    }
  };

  return (
    <div className="flex mt-13 items-center justify-center min-h-screen bg-gradient-to-tr from-gray-900 via-black to-gray-900 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-[#161b22] w-full max-w-md p-8 rounded-2xl shadow-2xl backdrop-blur-md border border-gray-700"
      >
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Sign up for <span className="text-green-400">Idhar Udhar</span>
        </h2>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-left text-white mb-1">Full Name</label>
          <input
            name="fullName"
            type="text"
            value={form.fullName}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full p-3 bg-[#0d1117] text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-left text-white mb-1">Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="email@example.com"
            className="w-full p-3 bg-[#0d1117] text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-left text-white mb-1">Phone</label>
          <input
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="1234567890"
            className="w-full p-3 bg-[#0d1117] text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-left text-white mb-1">Role</label>
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="w-full p-3 bg-[#0d1117] text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option>User</option>
            <option>Driver</option>
          </select>
        </div>

        {form.role === "Driver" && (
          <>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-left text-white mb-1">Vehicle Type</label>
              <input
                name="vehicleType"
                type="text"
                value={form.vehicleType}
                onChange={handleChange}
                className="w-full p-3 bg-[#0d1117] text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold text-left text-white mb-1">Vehicle Number</label>
              <input
                name="vehicleNumber"
                type="text"
                value={form.vehicleNumber}
                onChange={handleChange}
                className="w-full p-3 bg-[#0d1117] text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold text-left text-white mb-1">License Number</label>
              <input
                name="licenseNumber"
                type="text"
                value={form.licenseNumber}
                onChange={handleChange}
                className="w-full p-3 bg-[#0d1117] text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </>
        )}

        <div className="mb-4 flex items-center gap-2">
          <input
            name="agreed"
            type="checkbox"
            checked={form.agreed}
            onChange={handleChange}
            className="accent-green-600"
          />
          <label className="text-sm text-white">I agree to the terms and conditions</label>
        </div>

        {!otpSent ? (
          <motion.button
            onClick={handleSendOtp}
            disabled={loading}
            whileTap={{ scale: 0.95 }}
            className={`w-full ${loading ? 'bg-gray-600 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'} text-black font-bold py-3 rounded-lg transition`}
          >
            {loading ? 'Sending OTP...' : 'Send OTP'}
          </motion.button>
        ) : (
          <>
            <div className="mb-4 mt-4">
              <label className="block text-sm font-semibold text-left text-white mb-1">Enter OTP</label>
              <input
                name="otp"
                type="text"
                value={form.otp}
                onChange={handleChange}
                placeholder="6-digit OTP"
                className="w-full p-3 bg-[#0d1117] text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <motion.button
              onClick={handleVerifyOtp}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition"
            >
              Verify OTP
            </motion.button>
          </>
        )}

        {message && (
          <p className={`text-center text-sm mt-4 ${message.toLowerCase().includes('otp') || message.toLowerCase().includes('success') ? 'text-green-400' : 'text-red-400'}`}>
            {message}
          </p>
        )}
      </motion.div>
    </div>
  );
}

export default Signup;