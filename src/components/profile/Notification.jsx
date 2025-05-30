import { useState } from "react";

const notifications = [
  {
    title: "Ride Completed",
    description: "Your ride with Rahul has been completed. Rate your experience!",
    time: "5 minutes ago",
    type: "Rides",
    icon: "🚗",
    unread: true,
  },
  {
    title: "Weekend Offer",
    description: "Enjoy 20% off on all rides this weekend using code WEEKEND20",
    time: "2 hours ago",
    type: "Promotions",
    icon: "🎁",
    unread: true,
  },
  {
    title: "Payment Successful",
    description: "Your payment of ₹249 for the last ride has been processed successfully",
    time: "3 hours ago",
    type: "Payments",
    icon: "💳",
    unread: false,
  },
  {
    title: "Account Update",
    description: "Your profile information has been updated successfully",
    time: "1 day ago",
    type: "System",
    icon: "ℹ️",
    unread: false,
  },
  {
    title: "New Feature",
    description: "You can now schedule rides up to 7 days in advance",
    time: "3 days ago",
    type: "System",
    icon: "🆕",
    unread: false,
  },
];

export default function Notifications() {
  const [filter, setFilter] = useState("All");

  const filteredNotifications =
    filter === "All"
      ? notifications
      : notifications.filter((n) => n.type === filter);

  return (
    <div className="max-w-3xl mx-auto p-6 text-white mt-10">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-2xl font-semibold">
          <span className="text-green-400">🔔</span> Notifications
          <span className="bg-green-500 text-white text-xs rounded-full px-2 py-0.5 ml-1">2</span>
        </div>
        <button className="flex items-center text-white bg-transparent border border-gray-600 px-3 py-1 rounded-md hover:bg-gray-700">
          <span className="mr-2">⚙️</span> Settings
        </button>
      </div>

      <div className="flex gap-2 mb-4">
        {['All', 'Rides', 'Promotions', 'Payments', 'System'].map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`px-4 py-1 rounded-full text-sm font-medium ${
              filter === tab ? 'bg-green-600 text-white' : 'bg-gray-700 text-gray-300'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="space-y-2">
        {filteredNotifications.map((n, idx) => (
          <div key={idx} className="bg-[#1e293b] p-4 rounded-md flex items-start gap-4 shadow">
            <div className="text-2xl">{n.icon}</div>
            <div className="flex-1">
              <div className="font-semibold text-white">{n.title}</div>
              <div className="text-gray-400 text-sm">{n.description}</div>
            </div>
            <div className="text-sm text-gray-500 whitespace-nowrap">
              {n.time}
              {n.unread && <span className="ml-2 w-2 h-2 bg-green-500 rounded-full inline-block"></span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
