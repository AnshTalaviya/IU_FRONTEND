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


  useEffect(() => {
    const pickupParam = params.get("pickup");
    const dropoffParam = params.get("dropoff");

    if (pickupParam) setPickup(pickupParam);
    if (dropoffParam) setDropoff(dropoffParam);

    if (activeTab === "schedule") {
      // Set initial schedule date/time if not already set or if they are in the past
      const currentDate = scheduleDate ? new Date(scheduleDate) : null;
      const now = new Date();
      now.setHours(0,0,0,0); // Compare dates only for this check

      if (!scheduleDate || (currentDate && currentDate < now)) {
        getCurrentDateTime(); // This sets a valid future date/time
      } else if (scheduleDate === formatDateForInput(new Date())) {
        // If date is today, ensure time is valid
        const [currentHours, currentMinutes] = scheduleTime.split(':').map(Number);
        const minTime = new Date();
        minTime.setMinutes(minTime.getMinutes() + 15);
        if (currentHours < minTime.getHours() || (currentHours === minTime.getHours() && currentMinutes < minTime.getMinutes())) {
          setScheduleTime(formatTimeForInput(minTime));
        }
      }
    }
  }, [location.search, activeTab, scheduleDate]); // Added scheduleDate to ensure re-check if it changes


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
    now.setMinutes(now.getMinutes() + 15); // Set default to 15 minutes in the future

    setScheduleDate(formatDateForInput(now));
    setScheduleTime(formatTimeForInput(now));
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === "schedule") {
   
      const currentScheduledDateTime = new Date(`${scheduleDate}T${scheduleTime}`);
      const minValidDateTime = new Date();
      minValidDateTime.setMinutes(minValidDateTime.getMinutes() + 15);

      if (!scheduleDate || !scheduleTime || isNaN(currentScheduledDateTime.getTime()) || currentScheduledDateTime < minValidDateTime) {
        getCurrentDateTime();
      }
    }
  };

  const handleFindRides = () => {
    // Pickup and Dropoff are already validated by button's disabled state.
    // Additional validation for schedule can be added here if needed.

    let queryParams = `pickup=${encodeURIComponent(pickup)}&dropoff=${encodeURIComponent(dropoff)}`;

    if (activeTab === "schedule") {
      // Simple validation for schedule fields if they are relevant
      if (!scheduleDate || !scheduleTime) {
        alert("Please select a valid date and time for your scheduled ride.");
        return;
      }
      const scheduledDateTime = new Date(`${scheduleDate}T${scheduleTime}`);
      const minScheduledDateTime = new Date();
      minScheduledDateTime.setMinutes(minScheduledDateTime.getMinutes() + 14); // Allow scheduling ~15 mins ahead

      if (scheduledDateTime < minScheduledDateTime) {
        alert(`Scheduled rides must be at least 15 minutes in advance. Please choose a later time or date.`);
        return;
      }
      queryParams += `&scheduleDate=${scheduleDate}&scheduleTime=${scheduleTime}`;
    }

    navigate(`/book-ride?${queryParams}`);
  };

  const isButtonDisabled = !pickup.trim() || !dropoff.trim();

  return (
    <div className="min-h-[85vh] bg-white dark:bg-[#0f172a] flex items-center justify-center px-4 py-30">
      <div className="w-full max-w-3xl bg-white dark:bg-[#1e293b] text-black dark:text-white rounded-2xl p-8 shadow-xl space-y-6">
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

        {/* Schedule Fields */}
        {activeTab === "schedule" && (
          <>
            <div>
              <label htmlFor="schedule-date-input" className="text-sm font-medium mb-1 block text-start">Date</label>
              <div className="relative">
                <input
                  id="schedule-date-input"
                  type="date"
                  value={scheduleDate}
                  onChange={(e) => setScheduleDate(e.target.value)}
                  min={formatDateForInput(new Date())} // Minimum today
                  className="bg-[#f1f5f9] dark:bg-[#0f172a] text-black dark:text-white w-full rounded-lg py-3 pl-10 pr-4 outline-none appearance-none"
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  📅
                </span>
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="schedule-time-input" className="text-sm font-medium mb-1 block text-start">Time</label>
              <div className="relative">
                <input
                  id="schedule-time-input"
                  type="time"
                  value={scheduleTime}
                  onChange={(e) => setScheduleTime(e.target.value)}
                  className="bg-[#f1f5f9] dark:bg-[#0f172a] text-black dark:text-white w-full rounded-lg py-3 pl-10 pr-4 outline-none appearance-none"
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  ⏰
                </span>
              </div>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-2 text-start">
                Rides can be scheduled at least 15 minutes in advance.
              </p>
            </div>
          </>
        )}

        {/* Tab Switcher */}
        <div className="flex bg-[#f1f5f9] dark:bg-[#0f172a] rounded-lg overflow-hidden">
          <button
            onClick={() => handleTabClick("now")}
            className={`w-1/2 py-2 font-semibold text-sm transition-colors duration-150 ${
              activeTab === "now"
                ? "bg-[#020617] text-white dark:bg-white dark:text-black"
                : "text-gray-400 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            Ride Now
          </button>
          <button
            onClick={() => handleTabClick("schedule")}
            className={`w-1/2 py-2 font-semibold text-sm transition-colors duration-150 ${
              activeTab === "schedule"
                ? "bg-[#020617] text-white dark:bg-white dark:text-black"
                : "text-gray-400 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            Schedule
          </button>
        </div>

        <p className="text-sm text-gray-400 dark:text-gray-500 text-start">
          {activeTab === "now"
            ? "Book a ride for immediate pickup at your location."
            : "Schedule your ride for later pickup."}
        </p>

        {/* Submit Button */}
        <button
          onClick={handleFindRides}
          disabled={isButtonDisabled}
          className={`block w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-md transition-colors duration-150 ${
            isButtonDisabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Find Rides
        </button>
      </div>
    </div>
  );
};

export default RideBooking; 