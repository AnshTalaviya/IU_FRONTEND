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
    ride: "primary",
  });

  const removeSubDriver = (indexToRemove) => {
  const updated = subDrivers.filter((_, idx) => idx !== indexToRemove);
  setSubDrivers(updated);
};


  const [subDrivers, setSubDrivers] = useState([
    { name: "", license: "", vehicleNumber: "", vehicleType: "" },
  ]);

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

  const handleSubDriverChange = (index, field, value) => {
    const updatedDrivers = [...subDrivers];
    updatedDrivers[index][field] = value;
    setSubDrivers(updatedDrivers);
  };

  const addMoreSubDriver = () => {
    setSubDrivers([
      ...subDrivers,
      { name: "", license: "", vehicleNumber: "", vehicleType: "" },
    ]);
  };

  const handleSendOtp = async () => {
    if (!form.agreed) return setMessage("Please accept terms and conditions.");
    setLoading(true);

    try {
      const res = await axios.post(
        "https://iubackend-production.up.railway.app/api/auth/send-otp",
        {
          ...form,
          subDrivers: form.ride === "sub" ? subDrivers : [],
        },
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
      const res = await axios.post("https://iubackend-production.up.railway.app/api/auth/verify-otp", {
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
    <div className="flex mt-13 items-center justify-center min-h-screen px-4">
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
            placeholder="Enter Your Full Name"
            className="w-full p-3 bg-[#0d1117] text-white border border-gray-700 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-left text-white mb-1">Phone</label>
          <input
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="Enter Your Phone Number"
            className="w-full p-3 bg-[#0d1117] text-white border border-gray-700 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-left text-white mb-1">Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter Your Email"
            className="w-full p-3 bg-[#0d1117] text-white border border-gray-700 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-left text-white mb-1">Role</label>
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="w-full p-3 bg-[#0d1117] text-white border border-gray-700 rounded-md"
          >
            <option>User</option>
            <option>Driver</option>
          </select>
        </div>

        {form.role === "Driver" && (
          <>
            <div className="flex pb-3 sm:space-x-10 flex-wrap">
              <label className="inline-flex items-center text-white">
                <input
                  type="radio"
                  name="ride"
                  value="primary"
                  checked={form.ride === "primary"}
                  onChange={handleChange}
                  className="form-radio mr-2"
                />
                Primary Driver
              </label>
              <label className="inline-flex items-center text-white">
                <input
                  type="radio"
                  name="ride"
                  value="sub"
                  checked={form.ride === "sub"}
                  onChange={handleChange}
                  className="form-radio mr-2"
                />
                Sub Driver
              </label>
            </div>

            {form.ride === "primary" && (
              <>
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-left text-white mb-1">Vehicle Type</label>
                  <input
                    name="vehicleType"
                    type="text"
                    value={form.vehicleType}
                    onChange={handleChange}
                    placeholder="Enter Your Vehicle Type"
                    className="w-full p-3 bg-[#0d1117] text-white border border-gray-700 rounded-md"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-semibold text-left text-white mb-1">Vehicle Number</label>
                  <input
                    name="vehicleNumber"
                    type="text"
                    value={form.vehicleNumber}
                    onChange={handleChange}
                    placeholder="Enter Your Vehicle Number"
                    className="w-full p-3 bg-[#0d1117] text-white border border-gray-700 rounded-md"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-semibold text-left text-white mb-1">License Number</label>
                  <input
                    name="licenseNumber"
                    type="text"
                    value={form.licenseNumber}
                    onChange={handleChange}
                    placeholder="Enter Your License Number"
                    className="w-full p-3 bg-[#0d1117] text-white border border-gray-700 rounded-md"
                  />
                </div>
              </>
            )}

            {form.ride === "sub" && (
              <div className="space-y-6">
                {subDrivers.map((driver, index) => (
                  <div key={index} className="border border-gray-700 p-4 rounded-md space-y-2 bg-[#0d1117] relative">
                    <h4 className="font-semibold text-lg text-white mb-2">Sub Driver {index + 1}</h4>

                    {/* ❌ Delete Button */}
                    {subDrivers.length > 1 && (
                      <button
                        onClick={() => removeSubDriver(index)}
                        className="absolute top-2 right-2 text-red-400 hover:text-red-600 font-bold"
                        title="Remove this sub driver"
                      >
                        ✕
                      </button>
                    )}

                    <input
                      type="text"
                      placeholder="Driver Name"
                      value={driver.name}
                      onChange={(e) =>
                        handleSubDriverChange(index, "name", e.target.value)
                      }
                      className="w-full px-3 py-2 bg-[#161b22] text-white border border-gray-600 rounded-md"
                    />
                    <input
                      type="text"
                      placeholder="License Number"
                      value={driver.license}
                      onChange={(e) =>
                        handleSubDriverChange(index, "license", e.target.value)
                      }
                      className="w-full px-3 py-2 bg-[#161b22] text-white border border-gray-600 rounded-md"
                    />
                    <input
                      type="text"
                      placeholder="Vehicle Number"
                      value={driver.vehicleNumber}
                      onChange={(e) =>
                        handleSubDriverChange(index, "vehicleNumber", e.target.value)
                      }
                      className="w-full px-3 py-2 bg-[#161b22] text-white border border-gray-600 rounded-md"
                    />
                    <input
                      type="text"
                      placeholder="Vehicle Type (e.g., Bike, Auto)"
                      value={driver.vehicleType}
                      onChange={(e) =>
                        handleSubDriverChange(index, "vehicleType", e.target.value)
                      }
                      className="w-full px-3 py-2 bg-[#161b22] text-white border border-gray-600 rounded-md"
                    />
                  </div>
                ))}

                <button
                  type="button"
                  onClick={addMoreSubDriver}
                  className="bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-400"
                >
                  + Add Another Sub Driver
                </button>
              </div>
            )}

          </>
        )}

        <div className="mb-4 flex items-center gap-2 mt-4">
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
                className="w-full p-3 bg-[#0d1117] text-white border border-gray-700 rounded-md"
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