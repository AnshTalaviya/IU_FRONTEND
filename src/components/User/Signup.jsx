import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext'; // ✅ ADD THIS

function Signup() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    role: "User",
    phone: 9316003516,
    vehicleType: "",
    vehicleNumber: "",
    licenseNumber: "",
    otp: "",
    agreed: false,
  });

  const [otpSent, setOtpSent] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth(); // ✅ USE CONTEXT LOGIN

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSendOtp = async () => {
    if (!form.agreed) return setMessage("Please accept terms and conditions.");
    try {
      const res = await axios.post("http://localhost:5000/api/auth/send-otp", form);
      setOtpSent(true);
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || "Error sending OTP");
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/verify-otp", {
        email: form.email,
        otp: form.otp,
      });

      if (res.data.token && res.data.user) {
        login(res.data.token); // ✅ CONTEXT LOGIN
        localStorage.setItem("user", JSON.stringify(res.data.user)); // optional
        setMessage(res.data.message);
        navigate('/');
      } else {
        setMessage("Invalid response from server.");
      }
    } catch (err) {
      setMessage(err.response?.data?.message || "OTP verification failed");
    }
  };

  return (
    <div className='bg-white dark:bg-gray-900 pb-4 md:pb-16 pt-8 md:pt-28 px-4'>
      <div className="max-w-md mx-auto bg-[#0d1117] p-6 rounded-xl shadow-xl mt-10 text-white">
        <h2 className="text-2xl font-bold mb-4 text-center">GreenGlide Signup</h2>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-left mb-1">Full Name</label>
          <input
            name="fullName"
            type="text"
            value={form.fullName}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full bg-[#0d1117] border border-gray-700 rounded-md px-3 py-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-left mb-1">Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="email@example.com"
            className="w-full bg-[#0d1117] border border-gray-700 rounded-md px-3 py-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-left mb-1">Role</label>
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="w-full bg-[#0d1117] border border-gray-700 rounded-md px-3 py-2"
          >
            <option>User</option>
            <option>Driver</option>
          </select>
        </div>

        {form.role === "Driver" && (
          <>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-left mb-1">Vehicle Type</label>
              <input
                name="vehicleType"
                type="text"
                value={form.vehicleType}
                onChange={handleChange}
                className="w-full bg-[#0d1117] border border-gray-700 rounded-md px-3 py-2"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold text-left mb-1">Vehicle Number</label>
              <input
                name="vehicleNumber"
                type="text"
                value={form.vehicleNumber}
                onChange={handleChange}
                className="w-full bg-[#0d1117] border border-gray-700 rounded-md px-3 py-2"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold text-left mb-1">License Number</label>
              <input
                name="licenseNumber"
                type="text"
                value={form.licenseNumber}
                onChange={handleChange}
                className="w-full bg-[#0d1117] border border-gray-700 rounded-md px-3 py-2"
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
          <label className="text-sm">I agree to the terms and conditions</label>
        </div>

        {!otpSent ? (
          <button
            onClick={handleSendOtp}
            className="w-full bg-green-600 hover:bg-green-700 rounded-md px-4 py-2 font-semibold"
          >
            Send OTP
          </button>
        ) : (
          <>
            <div className="mb-4 mt-4">
              <label className="block text-sm font-semibold text-left mb-1">Enter OTP</label>
              <input
                name="otp"
                type="text"
                value={form.otp}
                onChange={handleChange}
                placeholder="6-digit OTP"
                className="w-full bg-[#0d1117] border border-gray-700 rounded-md px-3 py-2"
              />
            </div>

            <button
              onClick={handleVerifyOtp}
              className="w-full bg-blue-600 hover:bg-blue-700 rounded-md px-4 py-2 font-semibold"
            >
              Verify OTP
            </button>
          </>
        )}

        {message && (
          <p className="text-sm mt-4 text-yellow-400 text-center">{message}</p>
        )}
      </div>
    </div>
  );
}

export default Signup;
