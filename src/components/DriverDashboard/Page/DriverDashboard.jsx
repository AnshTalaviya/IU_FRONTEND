import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../../contexts/GlobalContext';

export default function DriverDashboard() {
  const { Isonline, ToggleOnline } = useGlobalContext();
  const [fullName, setFullName] = useState('');

  const recentRides = [
    { earning: 12.75, time: '13 mins ago', status: 'completed' },
    { time: '42 mins ago', status: 'cancelled' },
    { earning: 22.75, time: '1 hour ago', status: 'completed' },
  ];
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));

    if (userData?.fullName) {
      const capitalizedName = userData.fullName
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      setFullName(capitalizedName);
    }
  }, []);


  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen px-4 sm:px-6 py-6 space-y-6 transition-all">
      {/* Header */}
      <div className="text-left">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Welcome back, {fullName} 👋</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          {Isonline
            ? 'You are online and ready to receive ride requests.'
            : 'You are currently offline. Go online to start receiving rides.'}
        </p>
      </div>

      {/* Offline Banner */}
      {/* {!Isonline && (
        <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-xl p-6 text-center space-y-4 shadow">
          <i className="fas fa-car-side text-blue-500 text-3xl"></i>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">You're Offline</h2>
          <p className="text-gray-500 dark:text-gray-400">Tap below to go online and start earning.</p>
          <button
            onClick={ToggleOnline}
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full text-sm font-medium transition"
          >
            Go Online
          </button>
        </div>
      )} */}

      {/* Dashboard Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          {
            title: "Today's Earnings",
            icon: 'fas fa-dollar-sign',
            color: 'text-green-500',
            value: '$86.50',
            sub: '7 rides',
          },
          {
            title: 'Ratings',
            icon: 'fas fa-star',
            color: 'text-yellow-400',
            value: '4.8',
            sub: 'Excellent',
          },
          {
            title: 'Acceptance Rate',
            icon: 'fas fa-check-circle',
            color: 'text-green-500',
            value: '95%',
            sub: 'Good standing',
          },
          {
            title: 'Online Hours',
            icon: 'fas fa-clock',
            color: 'text-blue-500',
            value: '5.5h',
            sub: 'Today',
          },
        ].map((card, idx) => (
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

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Recent Rides */}
        <div className="md:col-span-2 bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Recent Rides</h2>
          <div className="space-y-3">
            {recentRides.map((ride, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
              >
                <div className="flex items-center space-x-3">
                  <div
                    className={`h-10 w-10 rounded-full flex items-center justify-center ${ride.status === 'completed' ? 'bg-green-100 dark:bg-green-600/30' : 'bg-red-100 dark:bg-red-600/30'
                      }`}
                  >
                    <i
                      className={`fas fa-${ride.status === 'completed' ? 'check' : 'times'} text-sm ${ride.status === 'completed' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                        }`}
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
                    <span className="text-green-600 dark:text-green-400">+ ${ride.earning}</span>
                  ) : (
                    <span className="text-red-500 dark:text-red-400">Canceled</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow space-y-4">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Today's Summary</h2>
          <div>
            <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
              <span>Earning Goal</span>
              <span>$150.00</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full mt-2">
              <div className="bg-green-500 h-full rounded-full w-[58%]"></div>
            </div>
            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mt-1">
              <span>$86.50</span>
              <span>58%</span>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
            <h3 className="text-sm text-gray-500 dark:text-gray-400">Breakdown</h3>
            <div className="flex justify-between text-sm mt-2">
              <span className="text-gray-600 dark:text-gray-300">Online Time</span>
              <span className="text-white">5.5h</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-300">Active Time</span>
              <span className="text-white">4.2h</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-300">Utilization</span>
              <span className="text-green-500">76%</span>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-200 dark:border-gray-600">
            <h3 className="text-sm text-gray-500 dark:text-gray-400">Expected Payout</h3>
            <h2 className="text-green-600 dark:text-green-400 text-xl font-semibold mt-1">$86.50</h2>
            <p className="text-xs text-gray-500 dark:text-gray-400">Will be transferred on Monday</p>
          </div>
        </div>
      </div>
    </div>
  );
}
