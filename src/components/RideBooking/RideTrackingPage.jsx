import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  MapPin,
  Phone,
  ShieldCheck,
  MessageCircle,
  AlertTriangle,
  Clock,
} from "lucide-react";

const RideTrackingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [progress, setProgress] = useState(0);
  const [displayMinutes, setDisplayMinutes] = useState("3 min");

  useEffect(() => {
    if (location.state?.showPopup) {
      setShowPopup(true);
      const timer = setTimeout(() => setShowPopup(false), 10000);
      return () => clearTimeout(timer);
    }
  }, [location.state]);

  useEffect(() => {
    const totalDuration = 180;
    const displayDuration = 5;
    let secondsLeft = totalDuration;
    let elapsed = 0;

    const interval = setInterval(() => {
      const progressPercent = ((elapsed + 1) / displayDuration) * 100;
      setProgress(progressPercent > 100 ? 100 : progressPercent);

      const mins = Math.floor(secondsLeft / 60);
      setDisplayMinutes(`${mins} min`);

      secondsLeft--;
      elapsed++;

      if (elapsed >= displayDuration) {
        clearInterval(interval);
        setProgress(100);
        setDisplayMinutes("0 min");
        setTimeout(() => navigate("/payment"), 500);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex items-center justify-center px-4 py-8">
      <div className="bg-gray-900 w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gray-800 p-6 text-center border-b border-gray-700">
          <h2 className="text-xl font-semibold">rider is on the way</h2>
          <p className="text-gray-400 text-sm mt-1">Tracking your trip in real-time</p>
        </div>

        {/* Progress Bar */}
        <div className="bg-green-700 text-white text-sm px-6 py-3 flex justify-between items-center">
          <span className="flex items-center gap-2 font-medium">
            <Clock className="w-4 h-4" /> {displayMinutes}
          </span>
          <div className="h-2 w-2/3 bg-green-600 rounded-full overflow-hidden">
            <div
              className="h-full bg-green-400 rounded-full transition-all duration-200"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Trip Info */}
        <div className="p-6 space-y-5">
          <div>
            <h3 className="font-semibold text-lg mb-2">Trip Details</h3>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3 items-start">
                <MapPin className="text-green-500 w-5 h-5" />
                <div>
                  <p className="font-semibold">Pickup</p>
                  <p className="text-gray-400">Naroda, Ahmedabad</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <MapPin className="text-green-500 w-5 h-5" />
                <div>
                  <p className="font-semibold">Dropoff</p>
                  <p className="text-gray-400">Maninagar, Ahmedabad</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center border-t pt-4 border-gray-700">
            <div className="flex gap-3 items-center">
              <img
                src="https://i.pravatar.cc/100?img=12"
                alt="rider"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-semibold">Rahul Singh</p>
                <p className="text-sm text-gray-400">⭐ 4.8 • 1243 trips</p>
              </div>
            </div>
            <div className="text-right text-sm text-gray-300">
              <p className="font-semibold">Honda City</p>
              <p className="text-gray-400">DL 01 AB 1234</p>
              <p>White</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-4">
            <button className="w-full bg-green-600 hover:bg-green-700 text-sm py-2 rounded-md flex items-center justify-center gap-2 font-medium">
              <Phone className="w-4 h-4" /> Call rider
            </button>
            <button className="w-full bg-gray-800 hover:bg-gray-700 border border-gray-600 text-sm py-2 rounded-md flex items-center justify-center gap-2 font-medium">
              <MessageCircle className="w-4 h-4" /> Message
            </button>
          </div>

          {/* Safety Section */}
          <div className="bg-gray-800 p-4 rounded-md border border-gray-700 mt-5 text-sm">
            <div className="flex items-start gap-3">
              <ShieldCheck className="text-green-500 w-5 h-5" />
              <div>
                <p className="font-semibold text-white">Trip Safety</p>
                <p className="text-gray-400 text-xs">
                  Share your trip status with friends and family for added safety. Your trip is protected with insurance coverage.
                </p>
                <button className="mt-2 text-xs text-green-400 hover:underline">Share trip status</button>
              </div>
            </div>
          </div>

          {/* Emergency Button */}
          <button className="w-full bg-red-600 hover:bg-red-700 text-white text-sm py-3 mt-4 rounded-md flex items-center justify-center gap-2 font-semibold">
            <AlertTriangle className="w-5 h-5" /> SOS Emergency
          </button>
        </div>

        {/* Popup */}
        {showPopup && (
          <div className="fixed bottom-6 right-6 z-50">
            <div className="bg-black text-white px-6 py-4 rounded-xl shadow-lg animate-bounce-in">
              <p className="font-semibold">Trip Confirmed</p>
              <p className="text-sm text-gray-300">Your trip has been booked successfully.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RideTrackingPage;
