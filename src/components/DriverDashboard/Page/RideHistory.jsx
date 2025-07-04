import React, { useState, useEffect } from 'react';

export default function RideHistory() {
    const initialRides = [
        {
            id: 1,
            customer: "Emily S.",
            time: "Today, 2:45 PM",
            date: new Date(), // Added date field
            pickup: "123 Main St",
            dropoff: "456 Market Ave",
            fare: 14.75,
            duration: "24 mins",
            distance: "5.2 mi",
            cancelled: false,
            rating: 5,
            vehicle: "Toyota Camry",
            paymentMethod: "Credit Card"
        },
        {
            id: 2,
            customer: "Michael R.",
            time: "Today, 12:30 PM",
            date: new Date(),
            pickup: "789 Park Blvd",
            dropoff: "321 Lake View Dr",
            fare: 9.50,
            duration: "18 mins",
            distance: "3.8 mi",
            cancelled: false,
            rating: 4,
            vehicle: "Honda Accord",
            paymentMethod: "Apple Pay"
        },
        {
            id: 3,
            customer: "Sarah J.",
            time: "Today, 10:15 AM",
            date: new Date(),
            pickup: "555 Ocean Ave",
            dropoff: "777 Mountain Rd",
            fare: 22.30,
            duration: "35 mins",
            distance: "8.1 mi",
            cancelled: false,
            rating: 5,
            vehicle: "Tesla Model 3",
            paymentMethod: "Credit Card"
        },
        {
            id: 4,
            customer: "David L.",
            time: "Yesterday, 7:20 PM",
            date: new Date(Date.now() - 86400000), // Yesterday
            pickup: "888 Downtown St",
            dropoff: "999 Uptown Ave",
            fare: 18.65,
            duration: "28 mins",
            distance: "6.4 mi",
            cancelled: false,
            rating: 4,
            vehicle: "Ford Escape",
            paymentMethod: "Google Pay"
        },
        {
            id: 5,
            customer: "Rebecca T.",
            time: "Yesterday, 3:50 PM",
            date: new Date(Date.now() - 86400000),
            pickup: "444 Forest Ln",
            dropoff: "222 Meadow Dr",
            fare: 11.40,
            duration: "21 mins",
            distance: "4.1 mi",
            cancelled: false,
            rating: 5,
            vehicle: "Toyota RAV4",
            paymentMethod: "Credit Card"
        },
        {
            id: 6,
            customer: "James K.",
            time: "Yesterday, 1:10 PM",
            date: new Date(Date.now() - 86400000),
            pickup: "123 Beach Rd",
            dropoff: "456 Sunset Blvd",
            fare: 25.80,
            duration: "42 mins",
            distance: "9.3 mi",
            cancelled: true,
            rating: null,
            vehicle: "Nissan Altima",
            paymentMethod: "Cash"
        },
        {
            id: 7,
            customer: "Alice M.",
            time: "Yesterday, 9:10 AM",
            date: new Date(Date.now() - 86400000),
            pickup: "987 Hill St",
            dropoff: "654 River Rd",
            fare: 13.20,
            duration: "19 mins",
            distance: "4.7 mi",
            cancelled: false,
            rating: 4,
            vehicle: "Hyundai Elantra",
            paymentMethod: "UPI"
        },
        {
            id: 8,
            customer: "Robert F.",
            time: "Today, 6:15 PM",
            date: new Date(),
            pickup: "321 Vine St",
            dropoff: "852 Cherry Ln",
            fare: 16.80,
            duration: "26 mins",
            distance: "6.0 mi",
            cancelled: false,
            rating: 5,
            vehicle: "Chevrolet Malibu",
            paymentMethod: "Credit Card"
        },
        {
            id: 9,
            customer: "Karen D.",
            time: "Today, 4:30 PM",
            date: new Date(),
            pickup: "111 Maple Ave",
            dropoff: "333 Oak Dr",
            fare: 10.00,
            duration: "15 mins",
            distance: "3.5 mi",
            cancelled: true,
            rating: null,
            vehicle: "Kia Seltos",
            paymentMethod: "Cash"
        },
        {
            id: 10,
            customer: "Tom B.",
            time: "Today, 5:20 PM",
            date: new Date(),
            pickup: "222 Elm St",
            dropoff: "999 Birch Blvd",
            fare: 19.00,
            duration: "30 mins",
            distance: "7.0 mi",
            cancelled: false,
            rating: 4,
            vehicle: "Volkswagen Passat",
            paymentMethod: "Paytm"
        },
        {
            id: 11,
            customer: "John D.",
            time: "3 days ago, 11:20 AM",
            date: new Date(Date.now() - 3 * 86400000),
            pickup: "123 Center St",
            dropoff: "456 Plaza Ave",
            fare: 12.50,
            duration: "22 mins",
            distance: "4.5 mi",
            cancelled: false,
            rating: 5,
            vehicle: "Toyota Corolla",
            paymentMethod: "Credit Card"
        },
        {
            id: 12,
            customer: "Lisa P.",
            time: "1 week ago, 9:45 AM",
            date: new Date(Date.now() - 7 * 86400000),
            pickup: "789 Valley Rd",
            dropoff: "321 Highland Ave",
            fare: 15.75,
            duration: "27 mins",
            distance: "5.8 mi",
            cancelled: false,
            rating: 4,
            vehicle: "Honda Civic",
            paymentMethod: "Apple Pay"
        },
        {
            id: 13,
            customer: "Mark T.",
            time: "2 weeks ago, 3:15 PM",
            date: new Date(Date.now() - 14 * 86400000),
            pickup: "555 Sunset Blvd",
            dropoff: "777 Sunrise Dr",
            fare: 20.30,
            duration: "32 mins",
            distance: "7.2 mi",
            cancelled: false,
            rating: 5,
            vehicle: "Tesla Model Y",
            paymentMethod: "Credit Card"
        },
        {
            id: 14,
            customer: "Emma G.",
            time: "1 month ago, 10:30 AM",
            date: new Date(Date.now() - 30 * 86400000),
            pickup: "888 River View",
            dropoff: "999 Mountain Top",
            fare: 17.40,
            duration: "25 mins",
            distance: "6.1 mi",
            cancelled: false,
            rating: 4,
            vehicle: "Subaru Outback",
            paymentMethod: "Google Pay"
        }
    ];

    const [rides, setRides] = useState(initialRides);
    const [timeFilter, setTimeFilter] = useState('all'); // 'today', 'week', 'month', 'all'
    const [statusFilter, setStatusFilter] = useState('all'); // 'all', 'completed', 'cancelled'
    const [sortBy, setSortBy] = useState('time');
    const [expandedRide, setExpandedRide] = useState(null);
    const [stats, setStats] = useState({
        totalRides: 0,
        acceptedRides: 0,
        cancelledPercent: 0,
        deliveredPercent: 0,
    });

    useEffect(() => {
        calculateStats();
        filterAndSortRides(timeFilter, statusFilter, sortBy);
    }, []);

    useEffect(() => {
        filterAndSortRides(timeFilter, statusFilter, sortBy);
    }, [timeFilter, statusFilter, sortBy]);

    const calculateStats = () => {
        const total = initialRides.length;
        const cancelled = initialRides.filter(r => r.cancelled).length;
        const delivered = initialRides.filter(r => !r.cancelled).length;
        const acceptedPercent = Math.round((delivered / total) * 100);
        const cancelPercent = Math.round((cancelled / total) * 100);
        const deliverPercent = Math.round((delivered / total) * 100);

        setStats({
            totalRides: total,
            acceptedRides: acceptedPercent,
            cancelledPercent: cancelPercent,
            deliveredPercent: deliverPercent,
        });
    };

    const filterAndSortRides = (timeFilterType, statusFilterType, sortType) => {
        let filtered = [...initialRides];
        const now = new Date();

        // Apply time filter
        if (timeFilterType === 'today') {
            const todayStart = new Date(now);
            todayStart.setHours(0, 0, 0, 0);
            filtered = filtered.filter(ride => ride.date >= todayStart);
        } else if (timeFilterType === 'week') {
            const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
            filtered = filtered.filter(ride => ride.date >= oneWeekAgo);
        } else if (timeFilterType === 'month') {
            const oneMonthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
            filtered = filtered.filter(ride => ride.date >= oneMonthAgo);
        }

        // Apply status filter
        if (statusFilterType === 'completed') {
            filtered = filtered.filter(ride => !ride.cancelled);
        } else if (statusFilterType === 'cancelled') {
            filtered = filtered.filter(ride => ride.cancelled);
        }

        // Apply sorting
        filtered.sort((a, b) => {
            switch (sortType) {
                case 'time':
                    return b.date - a.date; // Newest first
                case 'fare':
                    return b.fare - a.fare;
                case 'distance':
                    return parseFloat(b.distance) - parseFloat(a.distance);
                case 'duration':
                    return parseFloat(b.duration) - parseFloat(a.duration);
                case 'rating':
                    return (b.rating || 0) - (a.rating || 0);
                default:
                    return 0;
            }
        });

        setRides(filtered);
    };

    const handleTimeFilterChange = (newTimeFilter) => {
        setTimeFilter(newTimeFilter);
    };

    const handleStatusFilterChange = (e) => {
        setStatusFilter(e.target.value);
    };

    const handleSortChange = (newSortBy) => {
        setSortBy(newSortBy);
    };

    const toggleRideDetails = (id) => {
        setExpandedRide(expandedRide === id ? null : id);
    };

    const renderStars = (rating) => {
        if (!rating) return null;
        return (
            <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                    <i
                        key={i}
                        className={`fas fa-star ${i < rating ? 'text-yellow-500' : 'text-gray-300 dark:text-gray-600'}`}
                    ></i>
                ))}
            </div>
        );
    };

    return (
        <div className='p-5 dark:bg-gray-950 bg-gray-50 min-h-screen'>
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                    <div>   
                        <h3 className='text-3xl dark:text-white text-gray-800 font-medium'>Trip History</h3>
                        <p className='dark:text-gray-400 text-gray-600 mt-1'>View your past trips and performance</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm hover:shadow-md">
                        <div className="flex items-center gap-3">
                            <div className="bg-indigo-500/20 p-3 rounded-full">
                                <i className="fas fa-list text-indigo-500 text-xl"></i>
                            </div>
                            <div>
                                <h6 className='text-sm dark:text-gray-400 text-gray-600'>Total Trips</h6>
                                <h3 className='text-2xl font-medium text-indigo-500'>{stats.totalRides}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm hover:shadow-md">
                        <div className="flex items-center gap-3">
                            <div className="bg-blue-500/20 p-3 rounded-full">
                                <i className="fas fa-check text-blue-500 text-xl"></i>
                            </div>
                            <div>
                                <h6 className='text-sm dark:text-gray-400 text-gray-600'>Accepted Trips</h6>
                                <h3 className='text-2xl font-medium text-blue-500'>{stats.acceptedRides}%</h3>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm hover:shadow-md">
                        <div className="flex items-center gap-3">
                            <div className="bg-red-500/20 p-3 rounded-full">
                                <i className="fas fa-user-slash text-red-500 text-xl"></i>
                            </div>
                            <div>
                                <h6 className='text-sm dark:text-gray-400 text-gray-600'>Cancel By Driver</h6>
                                <h3 className='text-2xl font-medium text-red-500'>05%</h3>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm hover:shadow-md">
                        <div className="flex items-center gap-3">
                            <div className="bg-green-500/20 p-3 rounded-full">
                                <i className="fas fa-check-circle text-red-500 text-xl"></i>
                            </div>
                            <div>
                                <h6 className='text-sm dark:text-gray-400 text-gray-600'>Cancel By Customer</h6>
                                <h3 className='text-2xl font-medium text-red-500'>09%</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-4 mb-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <div className="flex-1 flex flex-wrap gap-2">
                            <button
                                onClick={() => handleTimeFilterChange('today')}
                                className={`px-4 py-2 rounded-lg ${timeFilter === 'today' ? 'bg-green-500 text-white' : 'bg-gray-100 dark:bg-gray-800 dark:text-gray-300 text-gray-700'}`}
                            >
                                Today
                            </button>
                            <button
                                onClick={() => handleTimeFilterChange('week')}
                                className={`px-4 py-2 rounded-lg ${timeFilter === 'week' ? 'bg-green-500 text-white' : 'bg-gray-100 dark:bg-gray-800 dark:text-gray-300 text-gray-700'}`}
                            >
                                This Week
                            </button>
                            <button
                                onClick={() => handleTimeFilterChange('month')}
                                className={`px-4 py-2 rounded-lg ${timeFilter === 'month' ? 'bg-green-500 text-white' : 'bg-gray-100 dark:bg-gray-800 dark:text-gray-300 text-gray-700'}`}
                            >
                                This Month
                            </button>
                            <button
                                onClick={() => handleTimeFilterChange('all')}
                                className={`px-4 py-2 rounded-lg ${timeFilter === 'all' ? 'bg-green-500 text-white' : 'bg-gray-100 dark:bg-gray-800 dark:text-gray-300 text-gray-700'}`}
                            >
                                All Time
                            </button>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-lg">
                                <i className="fas fa-filter text-green-500"></i>
                                <select
                                    onChange={handleStatusFilterChange}
                                    value={statusFilter}
                                    className='text-sm dark:text-white text-gray-700 bg-transparent focus:outline-none'
                                >
                                    <option className='dark:bg-gray-950' value="all">All Trips</option>
                                    <option className='dark:bg-gray-950' value="completed">Completed</option>
                                    <option className='dark:bg-gray-950' value="cancelled">Cancelled</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    {rides.length > 0 ? (
                        rides.map((ride) => (
                            <div
                                key={ride.id}
                                className={`ride bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-sm dark:shadow-none transition-all duration-200 ${expandedRide === ride.id ? 'ring-2 ring-green-400' : 'hover:shadow-md'}`}
                            >
                                <div
                                    className="p-4 cursor-pointer"
                                    onClick={() => toggleRideDetails(ride.id)}
                                >
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <div className="flex items-center gap-4">
                                            <div className={`h-12 w-12 rounded-full flex items-center justify-center ${ride.cancelled ? 'bg-red-500/20 text-red-500' : 'bg-green-500/20 text-green-500'}`}>
                                                <i className={`fas ${ride.cancelled ? 'fa-times' : 'fa-check'}`}></i>
                                            </div>
                                            <div>
                                                <h4 className='dark:text-white text-gray-800 font-medium text-start'>{ride.customer}</h4>
                                                <p className='dark:text-gray-400 text-gray-600 text-sm'>{ride.time}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="text-center">
                                                <p className='dark:text-gray-400 text-gray-600 text-sm'>Fare</p>
                                                <p className='text-green-500 font-medium'>₹{ride.fare.toFixed(2)}</p>
                                            </div>
                                            <div className="text-center">
                                                <p className='dark:text-gray-400 text-gray-600 text-sm'>Distance</p>
                                                <p className='dark:text-white text-gray-800 font-medium'>{ride.distance}</p>
                                            </div>
                                            <div className="text-center">
                                                <p className='dark:text-gray-400 text-gray-600 text-sm'>Duration</p>
                                                <p className='dark:text-white text-gray-800 font-medium'>{ride.duration}</p>
                                            </div>
                                            <button className="text-green-500 hover:text-green-600">
                                                <i className={`fas fa-chevron-${expandedRide === ride.id ? 'up' : 'down'}`}></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {expandedRide === ride.id && (
                                    <div className="border-t border-gray-200 dark:border-gray-700 p-4 bg-gray-50 dark:bg-gray-800">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <h5 className="dark:text-gray-300 text-gray-700 font-medium mb-2">Trip Details</h5>
                                                <div className="space-y-3">
                                                    <div className="flex">
                                                        <div className="w-24 dark:text-gray-400 text-gray-600">Pickup:</div>
                                                        <div className="dark:text-white text-gray-800">{ride.pickup}</div>
                                                    </div>
                                                    <div className="flex">
                                                        <div className="w-24 dark:text-gray-400 text-gray-600">Dropoff:</div>
                                                        <div className="dark:text-white text-gray-800">{ride.dropoff}</div>
                                                    </div>
                                                    <div className="flex">
                                                        <div className="w-24 dark:text-gray-400 text-gray-600">Vehicle:</div>
                                                        <div className="dark:text-white text-gray-800">{ride.vehicle}</div>
                                                    </div>
                                                    <div className="flex">
                                                        <div className="w-24 dark:text-gray-400 text-gray-600">Payment:</div>
                                                        <div className="dark:text-white text-gray-800">{ride.paymentMethod}</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <h5 className="dark:text-gray-300 text-gray-700 font-medium mb-2">Rating & Feedback</h5>
                                                {ride.rating ? (
                                                    <div className="space-y-3">
                                                        <div className="flex items-center gap-2">
                                                            {renderStars(ride.rating)}
                                                            <span className="dark:text-white text-gray-800">{ride.rating}.0</span>
                                                        </div>
                                                        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                                                            <p className="dark:text-gray-300 text-gray-700 italic">"Great driver! Very professional and safe."</p>
                                                        </div>
                                                    </div>
                                                ) : ride.cancelled ? (
                                                    <div className="text-red-500">Trip was cancelled</div>
                                                ) : (
                                                    <div className="text-gray-500 dark:text-gray-400">No rating provided</div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-end gap-3">
                                            <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                                                <i className="fas fa-receipt mr-2"></i> Receipt
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-10 dark:text-gray-400 text-gray-600">
                            <i className="fas fa-car-alt text-4xl mb-3 text-gray-300 dark:text-gray-600"></i>
                            <p className="text-lg">No trips found matching your criteria</p>
                            <button
                                onClick={() => {
                                    setTimeFilter('all');
                                    setStatusFilter('all');
                                    setSortBy('time');
                                    setRides(initialRides);
                                }}
                                className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                            >
                                Reset Filters
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}