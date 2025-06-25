import React, { useState, useEffect, useRef } from 'react';
import { FaMotorcycle, FaCarSide, FaTaxi, FaMoneyBillWave } from 'react-icons/fa';
import { useNavigate, useSearchParams } from 'react-router-dom';

const rides = [
  { type: 'Bike', eta: '3 mins', drop: '11:40 am', price: 76, fastest: true, icon: <FaMotorcycle /> },
  { type: 'Auto', eta: '3 mins', drop: '11:41 am', price: 119, icon: <FaTaxi /> },
  { type: 'Cab Economy', eta: '4 mins', drop: '11:42 am', price: 147, icon: <FaCarSide /> },
  { type: 'Cab Premium', eta: '3 mins', drop: '11:41 am', price: 186, icon: <FaCarSide /> },
];

const RideBooking = () => {
  const [selected, setSelected] = useState('Bike');
  const [isBooking, setIsBooking] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('Cash');
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [pickup, setPickup] = useState('Naroda, Ahmedabad');
  const [dropoff, setDropoff] = useState('Maninagar, Ahmedabad');
  const [searchParams] = useSearchParams();
  const mapRef = useRef(null);
  const directionsRendererRef = useRef(null);

  // Update pickup and dropoff from query params
  useEffect(() => {
    const pickupParam = searchParams.get('pickup');
    const dropoffParam = searchParams.get('dropoff');
    if (pickupParam) setPickup(decodeURIComponent(pickupParam));
    if (dropoffParam) setDropoff(decodeURIComponent(dropoffParam));
  }, [searchParams]);

  // Load Google Maps Script
  useEffect(() => {
    if (window.google && window.google.maps) {
      initMap();
    } else {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AlzaSyaOBvyVPvSNhfBgNFMm8qPwgMwJPR9UD5u`;
      script.async = true;
      script.defer = true;
      script.onload = initMap;
      document.head.appendChild(script);
    }
  }, []);

  // Initialize Map
  const initMap = () => {
    const map = new window.google.maps.Map(mapRef.current, {
      zoom: 13,
      center: { lat: 23.0225, lng: 72.5714 },
    });

    directionsRendererRef.current = new window.google.maps.DirectionsRenderer();
    directionsRendererRef.current.setMap(map);

    drawRoute(pickup, dropoff);
  };

  // Draw Route
  const drawRoute = (origin, destination) => {
    const directionsService = new window.google.maps.DirectionsService();
    directionsService.route(
      {
        origin,
        destination,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === "OK") {
          directionsRendererRef.current.setDirections(result);
        } else {
          console.error("Directions request failed due to ", status);
        }
      }
    );
  };

  // Update route when pickup or dropoff changes
  useEffect(() => {
    if (window.google && window.google.maps && directionsRendererRef.current) {
      drawRoute(pickup, dropoff);
    }
  }, [pickup, dropoff]);
  const navigation = useNavigate()

  const handleBook = () => {
    setIsBooking(true);
    setTimeout(() => {
      setIsBooking(false);
      alert(`Your ${selected} is booked from ${pickup} to ${dropoff} with ${paymentMethod} payment!`);
      navigation("/ride-tracking")
    }, 2000);
  };

  return (
    <div className="text-white sm:mt-4 md:mt-12 sm:flex justify-center">
      <div className="mx-2 min-h-full mt-4 p-5 rounded-lg transition-all duration-300">
        {/* Map Section */}
        <div className="h-80 bg-gray-100 rounded-xl mb-5 overflow-hidden">
          <div ref={mapRef} className="w-full h-full" />
        </div>

        {/* Location Inputs */}
        <div className="mb-5 space-y-3">
          <input
            className="w-full border border-gray-300 p-3 rounded-lg text-sm focus:outline-none text-white"
            placeholder="Pickup Location"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
          />
          <input
            className="w-full border border-gray-300 p-3 rounded-lg text-sm focus:outline-none text-whhite"
            placeholder="Dropoff Location"
            value={dropoff}
            onChange={(e) => setDropoff(e.target.value)}
          />
        </div>

        <div className="bg-green-100 border border-green-300 text-green-700 p-3 rounded-lg text-sm font-semibold mb-5 animate-pulse">
          Fares are higher due to increased demand
        </div>
      </div>

      {/* Ride Selection */}
      <div className="mx-2 min-h-full p-5 rounded-lg transition-all duration-300">
        <h1 className="text-4xl font-semibold my-3">Choose a ride</h1>

        <div className="space-y-4">
          {rides.map((ride) => (
            <div
              key={ride.type}
              className={`p-4 border rounded-xl flex justify-between items-center cursor-pointer transition-all duration-200 transform ${
                selected === ride.type ? 'bg-green-200 border-green-600 shadow-md scale-102 text-black' : ''
              }`}
              onClick={() => setSelected(ride.type)}
            >
              <div className="flex items-center space-x-3">
                <div className="text-xl text-green-600">{ride.icon}</div>
                <div>
                  <h3 className="font-semibold text-base">{ride.type}</h3>
                  <p className="text-xs text-gray-500">{ride.eta} • Drop {ride.drop}</p>
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

        {/* Payment Options */}
        <div className="mt-6 flex justify-between items-center relative">
          <div className="relative">
            <button
              onClick={() => setShowPaymentOptions(!showPaymentOptions)}
              className="flex items-center space-x-2 text-green-600 font-semibold hover:underline transition"
            >
              <FaMoneyBillWave />
              <span>{paymentMethod} ▼</span>
            </button>
            {showPaymentOptions && (
              <div className="absolute z-10 mt-2 bg-white text-black rounded-md shadow-md w-40">
                {['Cash', 'UPI', 'Card'].map(method => (
                  <div
                    key={method}
                    onClick={() => {
                      setPaymentMethod(method);
                      setShowPaymentOptions(false);
                    }}
                    className="p-2 hover:bg-green-100 cursor-pointer"
                  >
                    {method}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Book Button */}
        <button
          onClick={handleBook}
          disabled={isBooking}
          className={`mt-5 w-full ${isBooking ? 'bg-green-300' : 'bg-green-600 hover:bg-green-700'} transition text-white py-3 rounded-xl font-bold text-lg shadow-md`}
        >
          {isBooking ? 'Booking...' : `Book ${selected}`}
        </button>
      </div>
    </div>
  );
};

export default RideBooking;
