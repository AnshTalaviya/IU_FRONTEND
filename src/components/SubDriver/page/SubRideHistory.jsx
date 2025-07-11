import React, { useState, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function SubRideHistory() {
  const initialRides = [
    { id: 1, customer: "Emily S.", driver: "Ram", time: "Today, 2:45 PM", pickup: "123 Main St", dropoff: "456 Market Ave", fare: 14.75, cancelled: false, rating: 5, vehicle: "Toyota Camry", paymentMethod: "Credit Card" },
    { id: 2, customer: "Michael R.", driver: "Shyam", time: "Today, 12:30 PM", pickup: "789 Park Blvd", dropoff: "321 Lake View Dr", fare: 9.50, cancelled: false, rating: 4, vehicle: "Honda Accord", paymentMethod: "Apple Pay" },
    { id: 3, customer: "Sarah J.", driver: "Ram", time: "Today, 10:15 AM", pickup: "555 Ocean Ave", dropoff: "777 Mountain Rd", fare: 22.30, cancelled: false, rating: 5, vehicle: "Tesla Model 3", paymentMethod: "Credit Card" },
    { id: 4, customer: "David L.", driver: "Shyam", time: "Yesterday, 7:20 PM", pickup: "888 Downtown St", dropoff: "999 Uptown Ave", fare: 18.65, cancelled: false, rating: 4, vehicle: "Ford Escape", paymentMethod: "Google Pay" },
    { id: 5, customer: "Rebecca T.", driver: "Ram", time: "Yesterday, 3:50 PM", pickup: "444 Forest Ln", dropoff: "222 Meadow Dr", fare: 11.40, cancelled: false, rating: 5, vehicle: "Toyota RAV4", paymentMethod: "Credit Card" },
    { id: 6, customer: "James K.", driver: "Shyam", time: "Yesterday, 1:10 PM", pickup: "123 Beach Rd", dropoff: "456 Sunset Blvd", fare: 25.80, cancelled: true, rating: null, vehicle: "Nissan Altima", paymentMethod: "Cash" },
    { id: 7, customer: "Rachel M.", driver: "Ghanshyam", time: "Today, 1:00 PM", pickup: "678 Pine St", dropoff: "100 Elm Dr", fare: 17.20, cancelled: false, rating: 4, vehicle: "Hyundai i20", paymentMethod: "Paytm" }
  ];

  const [rides, setRides] = useState(initialRides);
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("time");
  const [expandedRide, setExpandedRide] = useState(null);
  const [selectedDriver, setSelectedDriver] = useState("all");
  const [stats, setStats] = useState({ todayEarnings: 0, acceptanceRate: 0, avgRating: 0 });

  const drivers = ["all", ...new Set(initialRides.map(r => r.driver))];

  useEffect(() => {
    applyFilters();
    calculateStats();
  }, [filter, sortBy, selectedDriver]);

  const applyFilters = () => {
    let result = [...initialRides];
    if (filter === "completed") result = result.filter(r => !r.cancelled);
    else if (filter === "cancelled") result = result.filter(r => r.cancelled);
    if (selectedDriver !== "all") result = result.filter(r => r.driver === selectedDriver);
    result.sort((a, b) => {
      if (sortBy === "time") return a.time.localeCompare(b.time);
      if (sortBy === "fare") return b.fare - a.fare;
      if (sortBy === "rating") return (b.rating || 0) - (a.rating || 0);
      return 0;
    });
    setRides(result);
  };

  const calculateStats = () => {
    const todayRides = initialRides.filter(r => r.time.includes("Today") && !r.cancelled);
    const todayEarnings = todayRides.reduce((sum, r) => sum + r.fare, 0);
    const completed = initialRides.filter(r => !r.cancelled).length;
    const acceptanceRate = Math.round((completed / initialRides.length) * 100);
    const ratings = initialRides.filter(r => r.rating).map(r => r.rating);
    const avgRating = ratings.length ? (ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(1) : 0;
    setStats({ todayEarnings, acceptanceRate, avgRating });
  };

  const renderStars = (rating) => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <i key={i} className={`fas fa-star ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} />
      ))}
    </div>
  );

  return (
    <div className="p-6 min-h-screen mt-14 bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-white">
      <h2 className="text-3xl font-bold mb-6">Trips History</h2>

      {/* Top Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <p className="text-sm text-gray-600 dark:text-gray-400">Today's Earnings</p>
          <h3 className="text-2xl font-bold text-white">₹{stats.todayEarnings.toFixed(2)}</h3>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <p className="text-sm text-gray-600 dark:text-gray-400">Acceptance Rate</p>
          <h3 className={`text-2xl font-bold ${stats.acceptanceRate > 90 ? 'text-white' : stats.acceptanceRate > 70 ? 'text-yellow-400' : 'text-red-500'}`}>{stats.acceptanceRate}%</h3>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <p className="text-sm text-gray-600 dark:text-gray-400">Average Rating</p>
          <div className="flex items-center gap-2 mt-1">
            <h3 className="text-2xl font-bold text-yellow-400">{stats.avgRating}</h3>
            {renderStars(Math.round(stats.avgRating))}
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <select value={selectedDriver} onChange={(e) => setSelectedDriver(e.target.value)} className="px-4 py-2 rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-800">
          {drivers.map(driver => (
            <option key={driver} value={driver}>{driver === "all" ? "All Drivers" : driver}</option>
          ))}
        </select>

        <select value={filter} onChange={(e) => setFilter(e.target.value)} className="px-4 py-2 rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-800">
          <option value="all">All Trips</option>
          <option value="completed">Completed</option>
          <option value="cancelled">Cancelled</option>
        </select>

        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="px-4 py-2 rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-800">
          <option value="time">Sort by Time</option>
          <option value="fare">Sort by Fare</option>
          <option value="rating">Sort by Rating</option>
        </select>
      </div>

      {/* Ride Cards */}
      <div className="space-y-5">
        {rides.length > 0 ? rides.map((ride) => (
          <div key={ride.id} className="rounded-lg bg-white dark:bg-gray-900 shadow transition">
            <div
              className="flex justify-between items-center p-4 cursor-pointer"
              onClick={() => setExpandedRide(expandedRide === ride.id ? null : ride.id)}
            >
              <div>
                <h4 className="font-semibold">{ride.customer}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">{ride.time} — Rider: {ride.driver}</p>
              </div>
              <div className="flex items-center gap-4">
                <p className={`${ride.cancelled ? "text-red-500" : "text-green-500"} font-bold`}>₹{ride.fare.toFixed(2)}</p>
                {expandedRide === ride.id ? <FaChevronUp className="text-green-500" /> : <FaChevronDown className="text-green-500" />}
              </div>
            </div>
            {expandedRide === ride.id && (
              <div className="px-5 pb-5 text-sm text-gray-700 dark:text-gray-300 space-y-2">
                <p><strong>Pickup:</strong> {ride.pickup}</p>
                <p><strong>Dropoff:</strong> {ride.dropoff}</p>
                <p><strong>Vehicle:</strong> {ride.vehicle}</p>
                <p><strong>Payment:</strong> {ride.paymentMethod}</p>
                {ride.rating ? (
                  <div className="space-y-1 pt-2">
                    <p><strong>Rating:</strong> {ride.rating}</p>
                    {renderStars(ride.rating)}
                  </div>
                ) : ride.cancelled ? (
                  <p className="text-red-500 pt-2">❌ Trips was cancelled</p>
                ) : (
                  <p className="text-gray-400 pt-2">No rating provided</p>
                )}
              </div>
            )}
          </div>
        )) : (
          <p className="text-center text-gray-500 dark:text-gray-400 mt-8">No trips match the selected criteria.</p>
        )}
      </div>
    </div>
  );
}
