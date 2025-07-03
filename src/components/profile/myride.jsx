import React from "react";
import { Bike, Car } from "lucide-react";
import { Link } from "react-router-dom";

const rides = [
    {
        id: 1,
        type: "GreenCar",
        date: "15 Jun 2023",
        time: "09:30 AM",
        from: "Andheri East",
        to: "Bandra Kurla Complex",
        price: "₹350",
        status: "Upcoming",
    },
    {
        id: 2,
        type: "GreenBike",
        date: "14 Jun 2023",
        time: "06:15 PM",
        from: "Powai",
        to: "Vikhroli",
        price: "₹120",
        status: "Completed",
    },
];

const RideCard = ({ ride }) => {
    const isCar = ride.type.includes("Car");
    const statusColor = ride.status === "Upcoming" ? "bg-blue-800" : "bg-green-800";

    return (
        <div className="p-4 rounded-lg bg-gray-900 border border-gray-700">
            <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-full ${isCar ? "bg-blue-900" : "bg-green-900"}`}>
                        {isCar ? (
                            <Car className="w-5 h-5 text-blue-300" />
                        ) : (
                            <Bike className="w-5 h-5 text-green-300" />
                        )}
                    </div>
                    <div>
                        <h4 className="font-semibold text-white">{ride.type} Ride</h4>
                        <p className="text-sm text-gray-400">{ride.date} • {ride.time}</p>
                    </div>
                </div>
                <div className="text-right">
                    <p className="font-semibold text-white">{ride.price}</p>
                    <span className={`text-xs text-white px-2 py-0.5 rounded-full ${statusColor}`}>{ride.status}</span>
                </div>
            </div>

            <div className="ml-10 border-l border-gray-600 pl-4">
                <p className="text-green-400 text-sm mb-1">● {ride.from}</p>
                <p className="text-red-400 text-sm">● {ride.to}</p>
            </div>

            <div className="flex gap-2 mt-4 ml-10">
                {ride.status === "Upcoming" && (
                    <button className="px-3 py-1 rounded bg-green-600 text-white text-sm">Track Trip</button>
                )}
                <button className="px-3 py-1 rounded border border-gray-400 text-white text-sm">View Details</button>
                {ride.status === "Completed" && (
                    <button className="px-3 py-1 rounded border border-gray-400 text-white text-sm">Book Again</button>
                )}
            </div>
        </div>
    );
};

export default function RecentRides() {
    return (
        <div className="p-6 text-white min-h-screen">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Your Recent Trips</h2>
                <Link to={"/ViewAllRides"}>
                    <button className="text-sm border border-gray-600 px-3 py-1 rounded text-white">View All Trips</button>
                </Link>
            </div>

            <div className="space-y-4">
                {rides.map((ride) => (
                    <RideCard key={ride.id} ride={ride} />
                ))}
            </div>

            <div className="mt-8 text-center">
                <button className="bg-green-600 text-white px-6 py-2 rounded text-sm">
                    Book a New Trip
                </button>
            </div>
        </div>
    );
}
