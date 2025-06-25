import React, { useEffect, useState } from 'react';

export default function Dashboard() {
<<<<<<< HEAD
  // Static subdrivers and details
  const [subdrivers] = useState([
    { fullName: "Amit Sharma" },
    { fullName: "Ravi Mehta" },
    { fullName: "Suresh Patel" },
    { fullName: "Mukesh Patel" },
  ]);
  // Completely static, hardcoded details (no random, no localStorage)
  const subdriverDetails = [
    {
      license: 'BIKE-LIC-001',
      vehicleNumber: 'GJ01BK1001',
      vehicleType: 'Bike',
      earnings: 75.50,
      rides: 8,
      rating: 4.7,
      acceptance: '92%',
      onlineHours: '3.5',
      recentRides: [
        { earning: 10.25, time: '8 mins ago', status: 'completed' },
        { time: '25 mins ago', status: 'cancelled' },
        { earning: 18.00, time: '1 hour ago', status: 'completed' },
      ],
    },
    {
      license: 'BIKE-LIC-002',
      vehicleNumber: 'GJ01BK1002',
      vehicleType: 'Bike',
      earnings: 62.00,
      rides: 6,
      rating: 4.5,
      acceptance: '90%',
      onlineHours: '2.8',
      recentRides: [
        { earning: 12.00, time: '10 mins ago', status: 'completed' },
        { time: '30 mins ago', status: 'cancelled' },
        { earning: 15.00, time: '2 hours ago', status: 'completed' },
      ],
    },
    {
      license: 'BIKE-LIC-003',
      vehicleNumber: 'GJ01BK1003',
      vehicleType: 'Bike',
      earnings: 80.75,
      rides: 9,
      rating: 4.8,
      acceptance: '95%',
      onlineHours: '4.1',
      recentRides: [
        { earning: 20.00, time: '5 mins ago', status: 'completed' },
        { time: '40 mins ago', status: 'cancelled' },
        { earning: 25.00, time: '3 hours ago', status: 'completed' },
      ],
    },
    {
      license: 'BIKE-LIC-004',
      vehicleNumber: 'GJ01BK1004',
      vehicleType: 'Bike',
      earnings: 55.25,
      rides: 5,
      rating: 4.2,
      acceptance: '88%',
      onlineHours: '2.3',
      recentRides: [
        { earning: 8.00, time: '12 mins ago', status: 'completed' },
        { time: '50 mins ago', status: 'cancelled' },
        { earning: 10.00, time: '4 hours ago', status: 'completed' },
      ],
    },
  ];
=======
  // Subdrivers state
  const [subdrivers, setSubdrivers] = useState([]);
  // Track which driver dashboards are expanded
>>>>>>> 2504fd346c9f646489d19fca1bc19439978a4cc6
  const [expandedDrivers, setExpandedDrivers] = useState({});

  // Toggle driver dashboard expansion
  const toggleDriverDashboard = (driverId) => {
    setExpandedDrivers(prev => ({
      ...prev,
      [driverId]: !prev[driverId]
    }));
  };

<<<<<<< HEAD
  // Sort subdrivers by name
  const sortedSubdrivers = [...subdrivers].sort((a, b) => {
    if (!a.fullName) return 1;
    if (!b.fullName) return -1;
    return a.fullName.localeCompare(b.fullName);
  });

  // Calculate summary values using subdriverDetails state
  const totalDrivers = sortedSubdrivers.length;
  const totalEarnings = subdriverDetails.length ? subdriverDetails.reduce((sum, d) => sum + d.earnings, 0).toFixed(2) : '0.00';
  const avgRating = subdriverDetails.length ? (subdriverDetails.reduce((sum, d) => sum + d.rating, 0) / subdriverDetails.length).toFixed(1) : '0.00';
  const avgAcceptance = subdriverDetails.length ? (subdriverDetails.reduce((sum, d) => sum + parseFloat(d.acceptance), 0) / subdriverDetails.length).toFixed(2) : '0.00';
  const totalOnlineHours = subdriverDetails.length ? subdriverDetails.reduce((sum, d) => sum + parseFloat(d.onlineHours), 0).toFixed(2) : '0.00';

  // Combine all recent rides from all drivers
  const allRecentRides = subdriverDetails.flatMap((d, idx) =>
    d.recentRides.map(ride => ({
      ...ride,
      driver: sortedSubdrivers[idx]?.fullName || `Driver ${idx + 1}`,
    }))
  );

  // Total rides
  const totalRides = subdriverDetails.reduce((sum, d) => sum + d.rides, 0);
=======
  useEffect(() => {
    // Example: Add more drivers to test
    const testSubdrivers = [
      { fullName: "Amit Sharma" },
      { fullName: "Ravi Mehta" },
      { fullName: "Suresh Patel" },
      { fullName: "Rohit Singh" },
    ];
    localStorage.setItem('subdrivers', JSON.stringify(testSubdrivers));
    setSubdrivers(testSubdrivers);
  }, []);

  // Function to generate dummy details for any number of drivers
  function generateSubdriverDetails(count) {
    const baseDetails = [
      {
        license: 'BIKE-LIC-001',
        vehicleNumber: 'GJ01BK0001',
        vehicleType: 'Bike',
        earnings: 46.25,
        rides: 5,
        rating: 4.7,
        acceptance: '92%',
        onlineHours: '3.5',
        recentRides: [
          { earning: 10.25, time: '8 mins ago', status: 'completed' },
          { time: '25 mins ago', status: 'cancelled' },
          { earning: 18.00, time: '1 hour ago', status: 'completed' },
        ],
      },
      {
        license: 'BIKE-LIC-002',
        vehicleNumber: 'GJ01BK0002',
        vehicleType: 'Bike',
        earnings: 39.75,
        rides: 3,
        rating: 4.3,
        acceptance: '88%',
        onlineHours: '2.8',
        recentRides: [
          { earning: 12.00, time: '12 mins ago', status: 'completed' },
          { earning: 15.00, time: '40 mins ago', status: 'completed' },
          { time: '1 hour ago', status: 'cancelled' },
        ],
      },
      {
        license: 'BIKE-LIC-003',
        vehicleNumber: 'GJ01BK4951',
        vehicleType: 'Bike',
        earnings: 79.75,
        rides: 7,
        rating: 4.9,
        acceptance: '88%',
        onlineHours: '2.8',
        recentRides: [
          { earning: 12.00, time: '12 mins ago', status: 'completed' },
          { earning: 15.00, time: '40 mins ago', status: 'completed' },
          { time: '1 hour ago', status: 'cancelled' },
        ],
      },
    ];
    let details = [];
    for (let i = 0; i < count; i++) {
      const base = baseDetails[i % baseDetails.length];
      details.push({
        ...base,
        license: `BIKE-LIC-00${i + 1}`,
        vehicleNumber: `GJ01BK${1000 + i}`,
        earnings: (40 + Math.random() * 60).toFixed(2) * 1,
        rides: 3 + Math.floor(Math.random() * 7),
        rating: (4 + Math.random()).toFixed(1) * 1,
        acceptance: `${85 + Math.floor(Math.random() * 15)}%`,
        onlineHours: (2 + Math.random() * 3).toFixed(1),
        // Optionally, randomize recentRides as well
      });
    }
    return details;
  }
>>>>>>> 2504fd346c9f646489d19fca1bc19439978a4cc6

  // Cards for each subdriver
  const getCards = (details) => ([
    {
      title: "Today's Earnings",
      icon: 'fas fa-dollar-sign',
      color: 'text-green-500',
      value: `₹${details.earnings}`,
      sub: `${details.rides} rides`,
    },
    {
      title: 'Ratings',
      icon: 'fas fa-star',
      color: 'text-yellow-400',
      value: details.rating,
      sub: 'Very Good',
    },
    {
      title: 'Acceptance Rate',
      icon: 'fas fa-check-circle',
      color: 'text-green-500',
      value: details.acceptance,
      sub: 'Good standing',
    },
    {
      title: 'Online Hours',
      icon: 'fas fa-clock',
      color: 'text-blue-500',
      value: details.onlineHours + 'h',
      sub: 'Today',
    },
  ]);

<<<<<<< HEAD
=======
  // Sort subdrivers by name
  const sortedSubdrivers = [...subdrivers].sort((a, b) => {
    if (!a.fullName) return 1;
    if (!b.fullName) return -1;
    return a.fullName.localeCompare(b.fullName);
  });

  // Generate details for all drivers
  const subdriverDetails = generateSubdriverDetails(sortedSubdrivers.length);

  // Calculate summary values
  const totalDrivers = sortedSubdrivers.length;
  const usedDetails = subdriverDetails;
  const totalEarnings = usedDetails.length ? usedDetails.reduce((sum, d) => sum + d.earnings, 0).toFixed(2) : '0.00';
  const avgRating = usedDetails.length ? (usedDetails.reduce((sum, d) => sum + d.rating, 0) / usedDetails.length).toFixed(1) : '0.00';
  const avgAcceptance = usedDetails.length ? (usedDetails.reduce((sum, d) => sum + parseFloat(d.acceptance), 0) / usedDetails.length).toFixed(2) : '0.00';
  // Sum of online hours
  const totalOnlineHours = usedDetails.length ? usedDetails.reduce((sum, d) => sum + parseFloat(d.onlineHours), 0).toFixed(2) : '0.00';

  // Combine all recent rides from all drivers
  const allRecentRides = usedDetails.flatMap((d, idx) =>
    d.recentRides.map(ride => ({
      ...ride,
      driver: sortedSubdrivers[idx]?.fullName || `Driver ${idx + 1}`,
    }))
  );
  // Total rides
  const totalRides = usedDetails.reduce((sum, d) => sum + d.rides, 0);

>>>>>>> 2504fd346c9f646489d19fca1bc19439978a4cc6
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen px-4 sm:px-6 py-6 space-y-16 transition-all">
      {/* Main summary section with averages and total earnings */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 mb-10">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Summary</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 flex items-center space-x-3">
            <i className="fas fa-dollar-sign text-green-500 text-xl"></i>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Today's Earnings (Total)</p>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">₹{totalEarnings}</h3>
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 flex items-center space-x-3">
            <i className="fas fa-star text-yellow-400 text-xl"></i>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Ratings (Avg)</p>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{avgRating}</h3>
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 flex items-center space-x-3">
            <i className="fas fa-check-circle text-green-500 text-xl"></i>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Acceptance Rate (Avg)</p>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{avgAcceptance}%</h3>
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 flex items-center space-x-3">
            <i className="fas fa-clock text-blue-500 text-xl"></i>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Online Hours (Total)</p>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{totalOnlineHours}h</h3>
            </div>
          </div>
        </div>
        {/* Combined Recent Rides and Today's Summary for all drivers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Combined Recent Rides */}
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl shadow">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">All Drivers - Recent Rides</h2>
            <div className="space-y-3 max-h-64 overflow-y-auto pr-2">
              {allRecentRides.map((ride, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`h-10 w-10 rounded-full flex items-center justify-center ${ride.status === 'completed' ? 'bg-green-100 dark:bg-green-600/30' : 'bg-red-100 dark:bg-red-600/30'}`}
                    >
                      <i
                        className={`fas fa-${ride.status === 'completed' ? 'check' : 'times'} text-sm ${ride.status === 'completed' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}
                      ></i>
                    </div>
                    <div>
                      <p className="text-gray-800 dark:text-white font-medium capitalize">
                        {ride.driver} - Ride {ride.status}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{ride.time}</p>
                    </div>
                  </div>
                  <div className="text-sm font-medium">
                    {ride.status === 'completed' ? (
                      <span className="text-green-600 dark:text-green-400">+ ₹{ride.earning}</span>
                    ) : (
                      <span className="text-red-500 dark:text-red-400">Canceled</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Combined Today's Summary - styled like per-driver summary */}
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl shadow space-y-4">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">All Drivers - Today's Summary</h2>
            <div>
              <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>Earning Goal</span>
                <span>₹{(100 * totalDrivers).toFixed(2)}</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full mt-2">
                <div className="bg-green-500 h-full rounded-full" style={{ width: `${Math.round((totalEarnings / (100 * totalDrivers)) * 100)}%` }}></div>
              </div>
              <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mt-1">
                <span>₹{totalEarnings}</span>
                <span>{Math.round((totalEarnings / (100 * totalDrivers)) * 100)}%</span>
              </div>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
              <h3 className="text-sm text-gray-500 dark:text-gray-400">Breakdown</h3>
              <div className="flex justify-between text-sm mt-2">
                <span className="text-gray-600 dark:text-gray-300">Online Time</span>
                <span className="text-white">{totalOnlineHours}h</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-300">Active Time</span>
                <span className="text-white">{(totalOnlineHours - (0.7 * totalDrivers)).toFixed(2)}h</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-300">Utilization</span>
                <span className="text-green-500">{Math.round((totalEarnings / (100 * totalDrivers)) * 100)}%</span>
              </div>
            </div>
            <div className="pt-4 border-t border-gray-200 dark:border-gray-600">
              <h3 className="text-sm text-gray-500 dark:text-gray-400">Expected Payout</h3>
              <h2 className="text-green-600 dark:text-green-400 text-xl font-semibold mt-1">₹{totalEarnings}</h2>
              <p className="text-xs text-gray-500 dark:text-gray-400">Will be transferred on Monday</p>
            </div>
          </div>
        </div>
      </div>
      {sortedSubdrivers.length === 0 && (
        <div className="text-center text-gray-600 dark:text-gray-300 text-lg mt-20">No subdriver data found.</div>
      )}
      <div className="grid grid-cols-1 gap-4">
        {sortedSubdrivers.map((sub, i) => {
          const subFullName = sub.fullName
            ? sub.fullName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
            : `Subdriver ${i + 1}`;
          const details = subdriverDetails[i];
          const isExpanded = expandedDrivers[i];

          return (
            <div key={i} className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
              {/* Driver Name Box - Always Visible */}
              <div
                onClick={() => toggleDriverDashboard(i)}
                className="bg-white dark:bg-gray-800 p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-all flex items-center justify-between"
              >
                <div className="flex items-center space-x-4">
                  <div className="h-10 w-10 bg-blue-100 dark:bg-blue-600/30 rounded-full flex items-center justify-center">
                    <i className="fas fa-user text-blue-600 dark:text-blue-400"></i>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {subFullName}
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {details.vehicleType} • License: {details.license}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      Today's Earnings: ₹{details.earnings}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {details.rides} rides • {details.onlineHours}h online
                    </p>
                  </div>
                  <i className={`fas fa-chevron-${isExpanded ? 'up' : 'down'} text-gray-400`}></i>
                </div>
              </div>

              {/* Expandable Dashboard Section */}
              {isExpanded && (
                <div className="border-t border-gray-200 dark:border-gray-700">
                  {/* Driver Details and Stats */}
                  <div className="p-4 bg-gray-50 dark:bg-gray-900">
                    <div className="flex flex-wrap gap-6 mb-4 text-gray-700 dark:text-gray-200 text-base">
                      <div><span className="font-semibold">Vehicle No:</span> {details.vehicleNumber}</div>
                      <div><span className="font-semibold">Rating:</span> {details.rating}</div>
                      <div><span className="font-semibold">Acceptance:</span> {details.acceptance}</div>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      {getCards(details).map((card, idx) => (
                        <div
                          key={idx}
                          className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 flex items-start space-x-3 hover:shadow-md transition"
                        >
                          <i className={`${card.icon} ${card.color} text-xl mt-1`}></i>
                          <div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{card.title}</p>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                              {card.value}{' '}
                              <span className="text-xs text-gray-500 dark:text-gray-400 font-normal">{card.sub}</span>
                            </h3>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Recent Rides and Summary Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* Recent Rides */}
                      <div className="md:col-span-2 bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
                        <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Recent Rides</h2>
                        <div className="space-y-3">
                          {details.recentRides.map((ride, idx) => (
                            <div
                              key={idx}
                              className="flex items-center justify-between border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                            >
                              <div className="flex items-center space-x-3">
                                <div
                                  className={`h-10 w-10 rounded-full flex items-center justify-center ${ride.status === 'completed' ? 'bg-green-100 dark:bg-green-600/30' : 'bg-red-100 dark:bg-red-600/30'}`}
                                >
                                  <i
                                    className={`fas fa-${ride.status === 'completed' ? 'check' : 'times'} text-sm ${ride.status === 'completed' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}
                                  ></i>
                                </div>
                                <div>
                                  <p className="text-gray-800 dark:text-white font-medium capitalize">
                                    Ride {ride.status}
                                  </p>
                                  <p className="text-xs text-gray-500 dark:text-gray-400">{ride.time}</p>
                                </div>
                              </div>
                              <div className="text-sm font-medium">
                                {ride.status === 'completed' ? (
                                  <span className="text-green-600 dark:text-green-400">+ ₹{ride.earning}</span>
                                ) : (
                                  <span className="text-red-500 dark:text-red-400">Canceled</span>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Today's Summary */}
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow space-y-4">
                        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Today's Summary</h2>
                        <div>
                          <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                            <span>Earning Goal</span>
                            <span>₹100.00</span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full mt-2">
                            <div className="bg-green-500 h-full rounded-full" style={{ width: `${Math.round((details.earnings / 100) * 100)}%` }}></div>
                          </div>
                          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mt-1">
                            <span>₹{details.earnings}</span>
                            <span>{Math.round((details.earnings / 100) * 100)}%</span>
                          </div>
                        </div>
                        <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
                          <h3 className="text-sm text-gray-500 dark:text-gray-400">Breakdown</h3>
                          <div className="flex justify-between text-sm mt-2">
                            <span className="text-gray-600 dark:text-gray-300">Online Time</span>
                            <span className="text-white">{details.onlineHours}h</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600 dark:text-gray-300">Active Time</span>
                            <span className="text-white">{(parseFloat(details.onlineHours) - 0.7).toFixed(1)}h</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600 dark:text-gray-300">Utilization</span>
                            <span className="text-green-500">{Math.round((details.earnings / 100) * 100)}%</span>
                          </div>
                        </div>
                        <div className="pt-4 border-t border-gray-200 dark:border-gray-600">
                          <h3 className="text-sm text-gray-500 dark:text-gray-400">Expected Payout</h3>
                          <h2 className="text-green-600 dark:text-green-400 text-xl font-semibold mt-1">₹{details.earnings}</h2>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Will be transferred on Monday</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
