import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import Footer from "../Footer";
import { useRide } from "../../contexts/RideContext";

const RideBooking = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const { setPickupLocation, setDropLocation } = useRide();

    const [pickup, setPickup] = useState("");
    const [dropoff, setDropoff] = useState("");
    const [activeTab, setActiveTab] = useState("now");
    const [scheduleDate, setScheduleDate] = useState("");
    const [scheduleTime, setScheduleTime] = useState("");

    useEffect(() => {
        const pickupParam = params.get("pickup");
        const dropoffParam = params.get("dropoff");

        if (pickupParam) {
            setPickup(pickupParam);
            setPickupLocation(pickupParam); // Sync with context
        }

        if (dropoffParam) {
            setDropoff(dropoffParam);
            setDropLocation(dropoffParam); // Sync with context
        }

        if (activeTab === "schedule") {
            getCurrentDateTime();
        }
    }, [location.search, activeTab]);

    const getCurrentDateTime = () => {
        const now = new Date();
        now.setMinutes(now.getMinutes() + 15);

        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, "0");
        const day = String(now.getDate()).padStart(2, "0");
        const formattedDate = `${year}-${month}-${day}`;

        const hours = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        const formattedTime = `${hours}:${minutes}`;

        setScheduleDate(formattedDate);
        setScheduleTime(formattedTime);
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        if (tab === "schedule") {
            getCurrentDateTime();
        }
    };

    return (
        <>
            <div className="min-h-[85vh] bg-[#0f172a] flex items-center justify-center px-4 py-10">
                <div className="w-full max-w-3xl bg-[#1e293b] text-white rounded-2xl p-8 shadow-xl space-y-6">
                    <h2 className="text-2xl font-bold">Book Your Ride</h2>

                    {/* Pickup Input */}
                    <div>
                        <label className="text-sm font-medium mb-1 block">Pickup Location</label>
                        <div className="flex items-center bg-[#0f172a] px-4 py-3 rounded-lg">
                            <FaMapMarkerAlt className="text-gray-400 mr-3 text-lg" />
                            <input
                                type="text"
                                value={pickup}
                                onChange={(e) => {
                                    setPickup(e.target.value);
                                    setPickupLocation(e.target.value);
                                }}
                                className="bg-transparent w-full outline-none text-white placeholder-gray-400"
                                placeholder="Enter pickup"
                            />
                        </div>
                    </div>

                    {/* Dropoff Input */}
                    <div>
                        <label className="text-sm font-medium mb-1 block">Dropoff Location</label>
                        <div className="flex items-center bg-[#0f172a] px-4 py-3 rounded-lg">
                            <FaPaperPlane className="text-gray-400 mr-3 text-lg" />
                            <input
                                type="text"
                                value={dropoff}
                                onChange={(e) => {
                                    setDropoff(e.target.value);
                                    setDropLocation(e.target.value);
                                }}
                                className="bg-transparent w-full outline-none text-white placeholder-gray-400"
                                placeholder="Enter dropoff"
                            />
                        </div>
                    </div>

                    {/* Schedule Ride Fields */}
                    {activeTab === "schedule" && (
                        <>
                            <div>
                                <label className="text-sm font-medium mb-1 block">Date</label>
                                <div className="relative">
                                    <input
                                        type="date"
                                        value={scheduleDate}
                                        onChange={(e) => setScheduleDate(e.target.value)}
                                        min={new Date().toISOString().split("T")[0]}
                                        className="bg-[#0f172a] text-white w-full rounded-lg py-3 pl-10 pr-4 outline-none placeholder-gray-400 appearance-none"
                                    />
                                    <span className="absolute left-3 top-9 transform -translate-y-1/2 text-gray-400 text-lg pointer-events-none">
                                        📅
                                    </span>
                                </div>
                            </div>

                            <div className="mt-4">
                                <label className="text-sm font-medium mb-1 block">Time</label>
                                <div className="relative">
                                    <input
                                        type="time"
                                        value={scheduleTime}
                                        onChange={(e) => setScheduleTime(e.target.value)}
                                        className="bg-[#0f172a] text-white w-full rounded-lg py-3 pl-10 pr-4 outline-none placeholder-gray-400 appearance-none"
                                    />
                                    <span className="absolute left-3 top-9 transform -translate-y-1/2 text-gray-400 text-lg pointer-events-none">
                                        🕒
                                    </span>
                                </div>
                                <p className="text-xs text-gray-400 mt-2">
                                    Rides can be scheduled at least 15 minutes in advance
                                </p>
                            </div>
                        </>
                    )}

                    {/* Tabs */}
                    <div className="flex bg-[#0f172a] rounded-lg overflow-hidden">
                        <button
                            onClick={() => handleTabClick("now")}
                            className={`w-1/2 py-2 font-semibold cursor-pointer text-sm ${activeTab === "now" ? "bg-[#020617] text-white" : "text-gray-400"}`}
                        >
                            Ride Now
                        </button>
                        <button
                            onClick={() => handleTabClick("schedule")}
                            className={`w-1/2 py-2 font-semibold cursor-pointer text-sm ${activeTab === "schedule" ? "bg-[#020617] text-white" : "text-gray-400"}`}
                        >
                            Schedule
                        </button>
                    </div>

                    <p className="text-sm text-gray-400">
                        {activeTab === "now"
                            ? "Book a ride for immediate pickup at your location"
                            : "Schedule your ride for later pickup"}
                    </p>

                    {/* Redirect to Ride Results */}
                    <Link
                        to="/Book-ride"
                        state={{ pickupLocation: pickup, dropLocation: dropoff }}
                        className="block w-full text-center bg-green-500 hover:bg-green-600 transition duration-200 text-white font-semibold py-3 rounded-md"
                    >
                        Find Rides
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default RideBooking;
