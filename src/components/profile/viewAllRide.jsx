import React, { useState } from 'react';
import { FaCarSide, FaMotorcycle, FaTruckPickup } from 'react-icons/fa';

const rides = [
  {
    id: 1,
    type: 'GreenCar Ride',
    icon: <FaCarSide className="text-blue-400" />,
    status: 'Upcoming',
    date: 'Jun 15, 2023 - 09:30 AM',
    from: 'Andheri East',
    to: 'Bandra Kurla Complex',
    amount: 350,
  },
  {
    id: 2,
    type: 'GreenBike Ride',
    icon: <FaMotorcycle className="text-green-400" />,
    status: 'Completed',
    date: 'Jun 14, 2023 - 06:15 PM',
    from: 'Powai',
    to: 'Vikhroli',
    amount: 120,
  },
  {
    id: 3,
    type: 'GreenAuto Ride',
    icon: <FaTruckPickup className="text-yellow-400" />,
    status: 'Completed',
    date: 'Jun 12, 2023 - 11:45 AM',
    from: 'Ghatkopar',
    to: 'Kurla',
    amount: 180,
  },
];

const tabs = ['All', 'Upcoming', 'Completed', 'Cancelled'];

const ViewAllRides = () => {
  const [activeTab, setActiveTab] = useState('All');

  const filteredRides =
    activeTab === 'All'
      ? rides
      : rides.filter((ride) => ride.status === activeTab);

  const getStatusBadge = (status) => {
    const baseClass = 'px-2 py-1 text-sm rounded-full font-medium border';
    switch (status) {
      case 'Upcoming':
        return <span className={`${baseClass} text-blue-400 border-blue-400`}>Upcoming</span>;
      case 'Completed':
        return <span className={`${baseClass} text-green-400 border-green-400`}>Completed</span>;
      case 'Cancelled':
        return <span className={`${baseClass} text-red-400 border-red-400`}>Cancelled</span>;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 text-white">
      <h2 className="text-2xl font-bold mb-6">My Rides</h2>

      {/* Tabs */}
      <div className="flex bg-gray-800 rounded-lg overflow-hidden mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2 text-center transition-all ${
              activeTab === tab
                ? 'bg-gray-900 text-white font-semibold'
                : 'text-gray-400 hover:bg-gray-700'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Ride List */}
      <div className="space-y-4">
        {filteredRides.length === 0 ? (
          <div className="text-center text-gray-400">No rides found.</div>
        ) : (
          filteredRides.map((ride) => (
            <div
              key={ride.id}
              className="bg-gray-900 p-4 rounded-lg border border-gray-700 shadow"
            >
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2 text-lg font-semibold">
                  {ride.icon}
                  {ride.type}
                </div>
                <div className="text-xl font-bold text-green-300">₹{ride.amount}</div>
              </div>

              <div className="text-sm text-gray-400 mb-2">{ride.date}</div>

              <div className="text-sm space-y-1">
                <div>
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  {ride.from}
                </div>
                <div>
                  <span className="inline-block w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  {ride.to}
                </div>
              </div>

              <div className="mt-3">{getStatusBadge(ride.status)}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ViewAllRides
