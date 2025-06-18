import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { auth, provider } from '../../firebase';
import { signInWithPopup } from 'firebase/auth';
import { FcGoogle } from 'react-icons/fc';
import { motion } from 'framer-motion';

function Login() {
  const [email, setEmail] = useState('');
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSendOtp = async () => {
    setLoading(true);
    try {
      const res = await axios.post('https://login-signup-iu.onrender.com/api/auth/login-otp', { email });
      setStep(2);
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || 'Error sending OTP');
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const res = await axios.post('https://login-signup-iu.onrender.com/api/auth/verify-otp', { email, otp });
      login(res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      const role = res.data.user.role;
      navigate(role === 'Driver' ? '/driver' : '/');
    } catch (err) {
      setMessage(err.response?.data?.message || 'Invalid OTP');
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const res = await axios.post('https://login-signup-iu.onrender.com/api/auth/google-login', {
        email: user.email,
        name: user.displayName,
      });

      if (res.data?.token && res.data?.user) {
        login(res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        const role = res.data.user.role;
        navigate(role === 'Driver' ? '/driver' : '/');
      } else {
        throw new Error('Invalid response from server');
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message || 'Google Login failed';
      setMessage(errorMessage);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-gray-900 via-black to-gray-900 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-[#161b22] w-full max-w-md p-8 rounded-2xl shadow-2xl backdrop-blur-md border border-gray-700"
      >
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Sign in to <span className="text-green-400">Idhar Udhar</span>
        </h2>

        {step === 1 ? (
          <>
            <p className="text-sm text-gray-400 text-center mb-6">Enter your email to receive an OTP</p>
            <label className="text-sm font-medium text-white block mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 mb-4 bg-[#0d1117] text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter Your Email"
            />
            <motion.button
              onClick={handleSendOtp}
              disabled={loading}
              whileTap={{ scale: 0.95 }}
              className={`w-full ${
                loading
                  ? 'bg-gray-600 cursor-not-allowed'
                  : 'bg-green-500 hover:bg-green-600'
              } text-black font-bold py-3 rounded-lg transition`}
            >
              {loading ? 'Sending OTP...' : 'Send OTP'}
            </motion.button>
          </>
        ) : (
          <>
            <p className="text-sm text-gray-400 text-center mb-6">Enter the OTP sent to your email</p>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              className="w-full p-3 mb-4 bg-[#0d1117] text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <motion.button
              onClick={handleVerifyOtp}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-green-500 hover:bg-green-600 text-black font-bold py-3 rounded-lg transition"
            >
              Verify OTP
            </motion.button>
          </>
        )}

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-700"></div>
          <span className="text-gray-500 px-3 text-sm">or</span>
          <div className="flex-grow h-px bg-gray-700"></div>
        </div>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 py-3 bg-white hover:bg-gray-100 text-black font-semibold rounded-lg border border-gray-300 transition"
        >
          <FcGoogle className="text-xl" /> Continue with Google
        </button>

        {/* Message (Success / Error) */}
        {message && (
          <p
            className={`text-center text-sm mt-4 ${
              message.toLowerCase().includes('otp') || message.toLowerCase().includes('success')
                ? 'text-green-400'
                : 'text-red-400'
            }`}
          >
            {message}
          </p>
        )}
      </motion.div>
    </div>
  );
}

export default Login;
