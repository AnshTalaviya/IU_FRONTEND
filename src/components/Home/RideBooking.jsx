import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const RideBooking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);

  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [activeTab, setActiveTab] = useState("now");
  const [scheduleDate, setScheduleDate] = useState("");
  const [scheduleTime, setScheduleTime] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const pickupParam = params.get("pickup");
    const dropoffParam = params.get("dropoff");

    if (pickupParam) setPickup(pickupParam);
    if (dropoffParam) setDropoff(dropoffParam);
  }, [location.search]);

  const formatDateForInput = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const formatTimeForInput = (date) => {
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const getCurrentDateTime = () => {
    const now = new Date();
    now.setMinutes(now.getMinutes() + 15);
    setScheduleDate(formatDateForInput(now));
    setScheduleTime(formatTimeForInput(now));
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === "schedule") {
      getCurrentDateTime();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!pickup.trim() || !dropoff.trim()) {
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
      return; // Redirect nahi hoga jab input blank ho
    }

    let queryParams = `pickup=${encodeURIComponent(pickup)}&dropoff=${encodeURIComponent(dropoff)}`;

    if (activeTab === "schedule") {
      if (!scheduleDate || !scheduleTime) return;
      queryParams += `&scheduleDate=${scheduleDate}&scheduleTime=${scheduleTime}`;
    }

    navigate(`/book-ride?${queryParams}`);
  };

  return (
    <div className="min-h-[85vh] bg-white dark:bg-[#0f172a] flex items-center justify-center px-4 py-30 relative">

      {/* Notification Toast */}
      {showNotification && (
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-red-600 text-white px-6 py-3 rounded-md shadow-lg">
          Please fill both Pickup and Dropoff locations!
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-white dark:bg-[#1e293b] text-black dark:text-white rounded-2xl p-8 shadow-xl space-y-6"
      >
        <h2 className="text-2xl font-bold text-start">Book Your Ride</h2>

        {/* Pickup Field */}
        <div>
          <label htmlFor="pickup-loc" className="text-sm font-medium mb-1 block text-start">
            Pickup Location
          </label>
          <div className="flex items-center bg-[#f1f5f9] dark:bg-[#0f172a] px-4 py-3 rounded-lg">
            <FaMapMarkerAlt className="text-gray-400 mr-3 text-lg" />
            <input
              id="pickup-loc"
              type="text"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="bg-transparent w-full outline-none text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
              placeholder="Enter pickup"
            />
          </div>
        </div>

        {/* Dropoff Field */}
        <div>
          <label htmlFor="dropoff-loc" className="text-sm font-medium mb-1 block text-start">
            Dropoff Location
          </label>
          <div className="flex items-center bg-[#f1f5f9] dark:bg-[#0f172a] px-4 py-3 rounded-lg">
            <FaPaperPlane className="text-gray-400 mr-3 text-lg" />
            <input
              id="dropoff-loc"
              type="text"
              value={dropoff}
              onChange={(e) => setDropoff(e.target.value)}
              className="bg-transparent w-full outline-none text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
              placeholder="Enter dropoff"
            />
          </div>
        </div>

        {/* Date and Time (Only for schedule) */}
        {activeTab === "schedule" && (
          <>
            <div>
              <label htmlFor="schedule-date" className="text-sm font-medium mb-1 block text-start">
                Date
              </label>
              <input
                id="schedule-date"
                type="date"
                value={scheduleDate}
                onChange={(e) => setScheduleDate(e.target.value)}
                min={formatDateForInput(new Date())}
                className="w-full p-2 rounded-md bg-[#f1f5f9] dark:bg-[#0f172a] text-black dark:text-white"
              />
            </div>

            <div>
              <label htmlFor="schedule-time" className="text-sm font-medium mb-1 block text-start">
                Time
              </label>
              <input
                id="schedule-time"
                type="time"
                value={scheduleTime}
                onChange={(e) => setScheduleTime(e.target.value)}
                className="w-full p-2 rounded-md bg-[#f1f5f9] dark:bg-[#0f172a] text-black dark:text-white"
              />
            </div>
          </>
        )}

        {/* Tabs */}
        <div className="flex bg-[#f1f5f9] dark:bg-[#0f172a] rounded-lg overflow-hidden">
          <button
            type="button"
            onClick={() => handleTabClick("now")}
            className={`w-1/2 py-2 font-semibold ${
              activeTab === "now" ? "bg-[#020617] text-white" : "text-gray-400"
            }`}
          >
            Ride Now
          </button>
          <button
            type="button"
            onClick={() => handleTabClick("schedule")}
            className={`w-1/2 py-2 font-semibold ${
              activeTab === "schedule" ? "bg-[#020617] text-white" : "text-gray-400"
            }`}
          >
            Schedule
          </button>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="block w-full font-semibold py-3 rounded-md bg-green-500 hover:bg-green-600 text-white"
        >
          Find Rides
        </button>
      </form>
    </div>
  );
};

export default RideBooking;
