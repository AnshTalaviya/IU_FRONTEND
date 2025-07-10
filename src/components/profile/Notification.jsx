import { useState } from "react";

const notifications = [
  {
    title: "Trip Completed",
    description: "Your trip with Rahul has been completed. Rate your experience!",
    time: "5 minutes ago",
    type: "Trips",
    icon: "🚗",
    unread: true,
  },
  {
    title: "Weekend Offer",
    description: "Enjoy 20% off on all trips this weekend using code WEEKEND20",
    time: "2 hours ago",
    type: "Promotions",
    icon: "🎁",
    unread: true,
  },
  {
    title: "Payment Successful",
    description: "Your payment of ₹249 for the last trip has been processed successfully",
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
    description: "You can now schedule trips up to 7 days in advance",
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
    <div className="max-w-4xl mx-auto p-4 sm:p-6 text-white mt-6 sm:mt-10">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between mb-6 gap-y-3">
        <div className="flex items-center gap-2 text-xl sm:text-2xl font-semibold">
          <span className="text-green-400">🔔</span>
          <span>Notifications</span>
          <span className="bg-orange-600 text-white text-xs rounded-full px-2 py-0.5 ml-1">
            {notifications.filter((n) => n.unread).length}
          </span>
        </div>

        <button className="flex items-center text-white bg-transparent border border-gray-600 px-3 py-1 rounded-md hover:bg-gray-700 text-sm sm:text-base">
          <span className="mr-1">⚙️</span> Settings
        </button>
      </div>

      {/* Filter Tabs with Horizontal Scroll */}
      <div className="overflow-x-auto no-scrollbar">
        <div className="flex gap-2 mb-4 w-max">
          {["All", "Trips", "Promotions", "Payments", "System"].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4 py-1 rounded-full text-sm font-medium whitespace-nowrap transition ${filter === tab
                  ? "bg-orange-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Notifications List */}
      <div className="space-y-3">
        {filteredNotifications.length > 0 ? (
          filteredNotifications.map((n, idx) => (
            <div
              key={idx}
              className="bg-[#1e293b] p-4 rounded-md flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 shadow"
            >
              <div className="text-2xl">{n.icon}</div>
              <div className="flex-1">
                <div className="font-semibold text-white text-base sm:text-lg">{n.title}</div>
                <div className="text-gray-400 text-sm sm:text-base">{n.description}</div>
              </div>
              <div className="text-sm text-gray-500 whitespace-nowrap flex items-center">
                {n.time}
                {n.unread && (
                  <span className="ml-2 w-2 h-2 bg-green-500 rounded-full inline-block"></span>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="text-gray-400 text-center py-10">No notifications found.</div>
        )}
      </div>
    </div>
  );
}
