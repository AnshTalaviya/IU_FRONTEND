import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../../contexts/GlobalContext';
function SummaryCard1({
  title,
  goal,
  earned,
  onlineTime,
  activeTime,
  utilization,
  payout,
  theme,
  rides = 7,
  cancellations = 1
}) {
  const percentage = goal ? Math.min(Math.round((earned / goal) * 100), 100) : 100;

  const colorThemes = {
    green: {
      border: 'border-green-500',
      bg: 'bg-green-950/60',
      ring: 'ring-green-500',
      bar: 'bg-green-400',
    },
    blue: {
      border: 'border-blue-500',
      bg: 'bg-blue-950/60',
      ring: 'ring-blue-500',
      bar: 'bg-blue-400',
    },
    yellow: {
      border: 'border-yellow-400',
      bg: 'bg-yellow-950/60',
      ring: 'ring-yellow-400',
      bar: 'bg-yellow-300',
    },
  };

  const themeClass = colorThemes[theme] || colorThemes.green;

  return (
    <div
      className={`p-5 rounded-2xl shadow space-y-5 border ${themeClass.border} ${themeClass.bg} ring-1 ${themeClass.ring} transition-all my-2`}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white flex items-center gap-2">
          <i className="fas fa-chart-line text-green-400" />
          {title}
        </h2>
        {goal > 0 && (
          <span className="text-sm text-gray-300">Goal: ₹{goal.toFixed(2)}</span>
        )}
      </div>

      {/* Progress Bar */}
      {goal > 0 && (
        <div>
          <div className="w-full bg-gray-700 h-2 rounded-full mt-1">
            <div
              className={`${themeClass.bar} h-full rounded-full`}
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-sm text-gray-300 mt-1">
            <span className="font-semibold text-white">₹{earned.toFixed(2)}</span>
            <span>{percentage}%</span>
          </div>
        </div>
      )}

      {/* Ride Stats */}
      <div className="grid grid-cols-2 gap-4 text-sm text-gray-200 mt-2">
        <div className="flex justify-between">
          <span>Trips Completed</span>
          <span className="font-semibold text-white">{rides}</span>
        </div>
        <div className="flex justify-between">
          <span>Cancellations</span>
          <span className="font-semibold text-red-400">{cancellations}</span>
        </div>
      </div>

      {/* Breakdown */}
      <div className="pt-4 border-t border-gray-600">
        <h3 className="text-sm text-gray-400 mb-2">Breakdown</h3>
        <div className="space-y-1 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-300">Online Time</span>
            <span className="text-white font-medium">{onlineTime}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-300">Active Time</span>
            <span className="text-white font-medium">{activeTime}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-300">Utilization</span>
            <span className="text-green-400 font-medium">{utilization}</span>
          </div>
        </div>
      </div>

      {/* Expected Payout */}
      <div className="pt-4 border-t border-gray-600">
        <h3 className="text-sm text-gray-400">Expected Payout</h3>
        <h2 className="text-green-400 text-2xl font-bold mt-1">{payout}</h2>
        <p className="text-xs text-gray-400">Will be transferred on Monday</p>
      </div>

      {/* View Details Link */}
      <div className="pt-2 text-right">
        <button className="text-sm text-green-300 hover:underline">View full earnings</button>
      </div>
    </div>
  );
}




export default function DriverDashboard() {
  const { Isonline, ToggleOnline } = useGlobalContext();
  const [fullName, setFullName] = useState('');

  const recentRides = [
    { earning: 12.75, time: '13 mins ago', status: 'completed' },
    { time: '42 mins ago', status: 'cancelled' },
    { earning: 22.75, time: '1 hour ago', status: 'completed' },
    { earning: 12.75, time: '13 mins ago', status: 'completed' },
    { time: '42 mins ago', status: 'cancelled' },
    { earning: 22.75, time: '1 hour ago', status: 'completed' },
    { earning: 12.75, time: '13 mins ago', status: 'completed' },
    { earning: 22.75, time: '1 hour ago', status: 'completed' },
    { earning: 12.75, time: '13 mins ago', status: 'completed' },
    { earning: 22.75, time: '1 hour ago', status: 'completed' },
    { earning: 12.75, time: '13 mins ago', status: 'completed' },
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
            ? 'You are online and ready to receive trip requests.'
            : 'You are currently offline. Go online to start receiving trips.'}
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
            icon: 'fa-solid fa-indian-rupee-sign',
            color: 'text-green-500',
            value: '₹86.50',
            sub: '7 trips',
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
     
        {/* Summaries Section */}
        <div className="flex flex-wrap justify-around w-full">
    
          <SummaryCard1
            title="Today's Summary"
            earned={86.5}
            onlineTime="5.5h"
            activeTime="4.2h"
            utilization="76%"
            payout="₹86.50"
            rides={7}
            cancellations={1}
            theme="green"
          />
          <SummaryCard1
            title="This Month's Summary"
            earned={1265.75}
            onlineTime="42h"
            activeTime="32h"
            utilization="76%"
            payout="₹1265.75"
            rides={7}
            cancellations={1}
            theme="blue"
          />
          <SummaryCard1
            title="LTD Summary"
            earned={4920.35}
            onlineTime="158h"
            activeTime="123h"
            utilization="78%"
            payout="₹4920.35"
            rides={7}
            cancellations={1}
            theme="yellow"
          />

        </div>
       {/* Recent Rides */}
        <div className="md:col-span-2 bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Recent Trips</h2>
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
                      Trip {ride.status}
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
    </div>
  );
}

