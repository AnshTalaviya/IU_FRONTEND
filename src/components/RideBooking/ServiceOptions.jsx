import React, { useState } from 'react';
import { FaMotorcycle, FaCarSide, FaTaxi, FaMoneyBillWave } from 'react-icons/fa';

const rides = [
  { type: 'Bike', eta: '3 mins', drop: '11:40 am', price: 76, fastest: true, icon: <FaMotorcycle /> },
  { type: 'Auto', eta: '3 mins', drop: '11:41 am', price: 119, icon: <FaTaxi /> },
  { type: 'Cab Economy', eta: '4 mins', drop: '11:42 am', price: 147, icon: <FaCarSide /> },
  { type: 'Cab Premium', eta: '3 mins', drop: '11:41 am', price: 186, icon: <FaCarSide /> },
];

const ServiceOptions = () => {
  const [selected, setSelected] = useState('Bike');
  const [isBooking, setIsBooking] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('Cash');
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);

  const handleBook = () => {
    setIsBooking(true);
    setTimeout(() => {
      setIsBooking(false);
      alert(`Your ${selected} is booked with ${paymentMethod} payment!`);
    }, 2000);
  };

  return (
    <div className="text-white sm:mt-4 md:mt-12 sm:flex justify-center">
      <div className="mx-2 min-h-full mt-4 p-5 rounded-lg transition-all duration-300">
        {/* Map Placeholder */}
        <div className="h-80 bg-gray-100 rounded-xl mb-5 flex items-center justify-center text-gray-400 text-lg font-medium">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15122.78449072012!2d72.64325425333514!3d23.06909840814445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e86d301d564e9%3A0x4a614a618d618d60!2sNaroda%2C%20Ahmedabad%2C%20Gujarat!5e1!3m2!1sen!2sin!4v1750237094867!5m2!1sen!2sin" width="100%" height="100%" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        {/* Location Info */}
        <div className="mb-5 space-y-3">
          <input
            className="w-full border border-gray-300 p-3 rounded-lg text-sm focus:outline-none"
            placeholder='Pickup Location'     
          />
          <input
            className="w-full border border-gray-300 p-3 rounded-lg text-sm focus:outline-none"
            placeholder='Droup Location'
          />
        </div>

        {/* Surge Notification */}
        <div className="bg-green-100 border border-green-300 text-green-700 p-3 rounded-lg text-sm font-semibold mb-5 animate-pulse">
          Fares are higher due to increased demand
        </div>
      </div>
      <div className="mx-2 min-h-full p-5 rounded-lg transition-all duration-300">
        <h1 className='text-4xl font-semibold my-3'>Choose a ride</h1>
        {/* Ride Options */}
        <div className="space-y-4">
          {rides.map((ride) => (
            <div
              key={ride.type}
              className={`p-4 border rounded-xl flex justify-between items-center cursor-pointer transition-all duration-200 transform ${selected === ride.type
                ? 'bg-green-200 border-green-600 shadow-md scale-102 text-black'
                : ''
                }`}
              onClick={() => setSelected(ride.type)}
            >
              <div className="flex items-center space-x-3">
                <div className="text-xl text-green-600">{ride.icon}</div>
                <div>
                  <h3 className="font-semibold text-base">{ride.type}</h3>
                  <p className="text-xs text-gray-500">
                    {ride.eta} • Drop {ride.drop}
                  </p>
                </div>
              </div>
              <div className="text-right">
                {ride.fastest && (
                  <span className="text-[10px] bg-green-200 text-green-700 px-2 py-1 rounded-full font-semibold mr-2">
                    FASTEST
                  </span>
                )}
                <span className="font-bold text-green-600 text-base">₹{ride.price}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Payment & Offers with Dropdown */}
        <div className="mt-6 flex justify-between items-center relative">
          <div className="relative">
            <button
              onClick={() => setShowPaymentOptions(!showPaymentOptions)}
              className="flex items-center space-x-2 text-green-600 font-semibold hover:underline transition"
            >
              <FaMoneyBillWave />
              <span>{paymentMethod} ▼</span>
            </button>
          </div>
        </div>

        {/* Book Button */}
        <button
          onClick={handleBook}
          disabled={isBooking}
          className={`mt-5 w-full ${isBooking ? 'bg-green-300' : 'bg-green-600 hover:bg-green-700'
            } transition text-white py-3 rounded-xl font-bold text-lg shadow-md`}
        >
          {isBooking ? 'Booking...' : `Book ${selected}`}
        </button>
      </div>
    </div>
  );
};

export default ServiceOptions;
