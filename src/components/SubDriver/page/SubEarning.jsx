// Earnings.jsx
import { useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const subdriverEarningsData = {
  week: [
    { name: 'Akash', earnings: 142 },
    { name: 'Ravi', earnings: 130 },
    { name: 'Mehul', earnings: 110 },
    { name: 'Raju', earnings: 105 },
    { name: 'Nayan', earnings: 97 },
  ],
  month: [
    { name: 'Akash', earnings: 480 },
    { name: 'Ravi', earnings: 450 },
    { name: 'Mehul', earnings: 420 },
    { name: 'Raju', earnings: 390 },
    { name: 'Nayan', earnings: 375 },
  ],
  year: [
    { name: 'Akash', earnings: 5520 },
    { name: 'Ravi', earnings: 5380 },
    { name: 'Mehul', earnings: 4990 },
    { name: 'Raju', earnings: 4750 },
    { name: 'Nayan', earnings: 4555 },
  ]
};

const earningsData = {
  week: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    earnings: [65, 85, 72, 90, 120, 145, 110],
    rides: [5, 7, 6, 7, 9, 12, 8]
  },
  month: {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    earnings: [420, 385, 510, 470],
    rides: [35, 30, 42, 38]
  },
  year: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    earnings: [1200, 1350, 1420, 1280, 1500, 1600, 1550, 1400, 1450, 1380, 1600, 1800],
    rides: [95, 105, 110, 100, 115, 125, 120, 110, 115, 105, 130, 145]
  }
};

const SubEarning = () => {
  const [timeFrame, setTimeFrame] = useState('week');
  const currentData = earningsData[timeFrame];
  const totalEarnings = currentData.earnings.reduce((a, b) => a + b, 0);
  const totalRides = currentData.rides.reduce((a, b) => a + b, 0);
  const avgPerRide = totalEarnings / totalRides;
  const availableForCashOut = totalEarnings * 0.9;

  return (
    <div className="min-h-screen p-4 mt-14 sm:p-6 dark:bg-gray-950 bg-gray-50 text-gray-800 dark:text-white">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold mb-1">Earnings</h1>
          <p className="text-gray-600 dark:text-gray-400">Track your performance and income</p>
        </div>
        <div className="flex gap-3 mt-4 sm:mt-0">
          <select
            value={timeFrame}
            onChange={(e) => setTimeFrame(e.target.value)}
            className="dark:bg-gray-800 bg-white dark:border-gray-700 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
          >
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="year">This Year</option>
          </select>
          <button
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-all"
          >
            <i className="fas fa-credit-card mr-2" />Cash Out
          </button>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Total Earnings */}
        <div className="bg-white dark:bg-gray-200/10 p-6 rounded-lg hover:shadow transition-all">
          <div className="flex items-center gap-2 mb-2">
            <div className="bg-green-400/20 p-2 rounded-full">
              <i className="fas fa-money-bill-wave text-green-400" />
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-400">Total Earnings</span>
          </div>
          <div className="text-2xl font-bold">${totalEarnings.toFixed(2)}</div>
          <div className="text-xs text-gray-400 dark:text-gray-500">{totalRides} trips</div>
        </div>

        {/* Available for Cashout */}
        <div className="bg-white dark:bg-gray-200/10 p-6 rounded-lg hover:shadow transition-all">
          <div className="flex items-center gap-2 mb-2">
            <div className="bg-blue-400/20 p-2 rounded-full">
              <i className="fas fa-wallet text-blue-400" />
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-400">Available for Cashout</span>
          </div>
          <div className="text-2xl font-bold">${availableForCashOut.toFixed(2)}</div>
          <div className="text-xs text-green-400 flex items-center gap-1">
            <i className="fas fa-bolt" /> Instant Transfer Available
          </div>
        </div>

        {/* Avg Per Ride */}
        <div className="bg-white dark:bg-gray-200/10 p-6 rounded-lg hover:shadow transition-all">
          <div className="flex items-center gap-2 mb-2">
            <div className="bg-yellow-400/20 p-2 rounded-full">
              <i className="fas fa-chart-line text-yellow-400" />
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-400">Avg Per Trip</span>
          </div>
          <div className="text-2xl font-bold">${avgPerRide.toFixed(2)}</div>
          <div className="text-xs text-gray-400 dark:text-gray-500">
            Based on {timeFrame} data
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white dark:bg-gray-200/10 p-6 rounded-lg mb-6 hover:shadow transition-all">
        <div className="mb-4">
          <h3 className="font-semibold text-lg mb-1">Earnings Chart</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{timeFrame.toUpperCase()} Overview</p>
        </div>
        <div className="w-full h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={currentData.labels.map((label, idx) => ({
                name: label,
                earnings: currentData.earnings[idx],
              }))}
            >
              <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} vertical={false} />
              <XAxis dataKey="name" stroke="#888" />
              <YAxis stroke="#888" tickFormatter={(val) => `$${val}`} />
              <Tooltip />
              <Bar dataKey="earnings" fill="#22c55e" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Subdriver Earnings */}
      <div className="bg-white dark:bg-gray-200/10 p-6 rounded-lg hover:shadow transition-all">
        <h3 className="font-semibold text-lg mb-4">Top 5 Subdrivers</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {subdriverEarningsData[timeFrame].map((driver, idx) => (
            <div key={idx} className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 hover:shadow transition-all">
              <div className="font-semibold text-lg">{driver.name}</div>
              <div className="text-green-500 font-bold mt-1 text-xl">${driver.earnings.toFixed(2)}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Subdriver Earnings</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubEarning;
