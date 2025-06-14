import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { auth, provider } from '../../firebase'; // ⬅️ import Firebase
import { signInWithPopup } from 'firebase/auth';

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
      if (role === 'Driver') {
        navigate('/driver');
      } else {
        navigate('/');
      }
    } catch (err) {
      setMessage(err.response?.data?.message || 'Invalid OTP');
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Send email to backend to login or register user
      const res = await axios.post('https://login-signup-iu.onrender.com/api/auth/google-login', {
        email: user.email,
        name: user.displayName,
      });

      login(res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));

      const role = res.data.user.role;
      if (role === 'Driver') {
        navigate('/driver');
      } else {
        navigate('/');
      }
    } catch (err) {
      setMessage(err.response?.data?.message || 'Google Login failed');
    }
  };

  return (
    <div className="flex items-center justify-center bg-white dark:bg-gray-900 text-white pb-20 pt-36 px-4">
      <div className="bg-[#161b22] p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-white">
          Sign in to <span className="text-green-400">Idhar Udhar</span>
        </h2>

        {step === 1 ? (
          <>
            <p className="text-sm text-gray-400 text-center mb-6">Enter your email to receive an OTP</p>
            <label className="text-sm font-semibold mb-2 block">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 mb-4 bg-[#0d1117] border border-gray-700 rounded text-white"
              placeholder="you@example.com"
            />
            <button
              onClick={handleSendOtp}
              disabled={loading}
              className={`w-full ${
                loading ? 'bg-gray-600 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'
              } text-black font-semibold py-2 rounded-md mb-3`}
            >
              {loading ? 'Sending OTP...' : 'Send OTP'}
            </button>
          </>
        ) : (
          <>
            <p className="text-sm text-gray-400 text-center mb-6">Enter the OTP sent to your email</p>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full p-2 mb-4 bg-[#0d1117] border border-gray-700 rounded text-white"
              placeholder="Enter OTP"
            />
            <button
              onClick={handleVerifyOtp}
              className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold py-2 rounded-md"
            >
              Verify OTP
            </button>
          </>
        )}

        {/* Google Login Button */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400 mb-2">or</p>
          <button
            onClick={handleGoogleLogin}
            className="w-full bg-white text-black font-semibold py-2 rounded-md border border-gray-300 hover:bg-gray-100"
          >
            Continue with Google
          </button>
        </div>

        {message && <p className="text-center mt-4 text-sm text-red-400">{message}</p>}
      </div>
    </div>
  );
}

export default Login;
