import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../../contexts/GlobalContext';
import { Link } from 'react-router-dom';

export default function DashboardNav() {
  const { Isonline, ToggleOnline, ToggleSidebar } = useGlobalContext();
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, message: "You received a new trip request", time: "5 mins ago", read: false },
    { id: 2, message: "Payout processed successfully", time: "1 hour ago", read: false },
    { id: 3, message: "Rating updated to 4.8", time: "2 hours ago", read: true }
  ]);
  const [showRideRequest, setShowRideRequest] = useState(false);
  const [showChatPopup, setShowChatPopup] = useState(false);
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { id: 1, text: "Hello! How can we help you today?", sender: 'support', time: 'Just now' },
  ]);
  // eslint-disable-next-line
  const [rideRequest, setRideRequest] = useState({
    customerName: "Harsh Prajapati",
    // eslint-disable-next-line
    distance: "3" + ' miles',
    pickupLocation: "Nikol",
    dropoffLocation: "SEU",
    // eslint-disable-next-line
    fare: '$' + '4'
  });

  // eslint-disable-next-line
  const [timeLeft, setTimeLeft] = useState(2000);

  const toggleNotifications = () => setShowNotifications(prev => !prev);
  const closeNotifications = () => setShowNotifications(false);

  const markAsRead = (id) => {
    setNotifications(prev =>
      prev.map(n => n.id === id ? { ...n, read: true } : n)
    );
  };

  const hasUnread = notifications.some(n => !n.read);

  useEffect(() => {
    if (Isonline) {
      setTimeout(() => {
        setShowRideRequest(true)
      }, 20000)
    }
  })

  const cancleRide = () => {
    setShowRideRequest(false)
  }
  const Acceptride = () => {
    setShowRideRequest(false)
  }

  const toggleChatPopup = () => {
    setShowChatPopup(prev => !prev);
  };

  const handleCallNow = () => {
    window.location.href = 'tel:+911234567890';
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() === '') return;
    
    const newMessage = {
      id: chatMessages.length + 1,
      text: message,
      sender: 'user',
      time: 'Just now'
    };
    
    setChatMessages([...chatMessages, newMessage]);
    setMessage('');
    
    // Simulate response after 1 second
    setTimeout(() => {
      const responseMessage = {
        id: chatMessages.length + 2,
        text: "Thanks for your message! Our team will get back to you shortly.",
        sender: 'support',
        time: 'Just now'
      };
      setChatMessages(prev => [...prev, responseMessage]);
    }, 1000);
  };

  return (
    <div className='w-full h-[8%] p-1 bg-gray-200/10 flex justify-between items-center px-2 py-2 rounded-lg md:rounded-none relative'>
      <h3 className='text-3xl dark:text-white flex items-center gap-3 ps-1'>
        <div className="icon text-xl cursor-pointer lg:hidden" onClick={ToggleSidebar}>
          <i className="fas fa-bars"></i>
        </div>
      </h3>

      <div className="Nav-buttons flex items-center justify-center gap-4">
        <span className='dark:text-white font-medium flex items-center'>
          {Isonline ? 'Online' : 'Offline'}
        </span>

          <div className="ToggleButton flex items-center">
            <button
              onClick={ToggleOnline}
              className={`relative inline-flex items-center h-5 rounded-full w-11 px-1 transition-colors duration-300 
                ${Isonline ? 'bg-green-500' : 'bg-gray-600'}`}
            >
              <span
                className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-300 
                  ${Isonline ? 'translate-x-2.5' : 'translate-x-0'}`}
              />
            </button>
          </div>

        <div className={`onlineStatus text-green-400/80 h-6 w-6 text-lg items-center justify-center ${Isonline ? 'flex' : 'hidden'}`}>
          <i className="fas fa-car animate-pulse"></i>
        </div>

        {/* Notification Icon */}
        <div
          className="Notification relative dark:text-white h-8 w-8 text-lg flex items-center justify-center hover:bg-gray-500/30 rounded-full transition-all duration-200 cursor-pointer"
          onClick={toggleNotifications}
        >
          <i className="fas fa-bell"></i>
          {hasUnread && <span className="absolute top-0 right-0 h-2 w-2 bg-green-500 rounded-full"></span>}
        </div>

        {/* Notification Dropdown */}
        <div className={`absolute right-4 top-16 w-80 bg-gray-800 border border-gray-600 rounded-lg shadow-lg z-50 transition-all duration-300 ${showNotifications ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
          <div className="flex justify-between items-center p-3 border-b border-gray-600">
            <h3 className="text-white text-lg">Notifications</h3>
            <button onClick={closeNotifications} className="text-gray-400 hover:text-red-400 transition">
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="max-h-60 overflow-y-auto">
            {notifications.length > 0 ? notifications.map(notif => (
              <div
                key={notif.id}
                onClick={() => markAsRead(notif.id)}
                className="flex items-start gap-3 p-3 hover:bg-gray-700 cursor-pointer transition-all"
              >
                <div className="relative pt-1">
                  <i className="fas fa-bell text-white"></i>
                  {!notif.read && <span className="absolute top-0 right-0 h-2 w-2 bg-green-500 rounded-full"></span>}
                </div>
                <div className="text-sm text-white">
                  <p>{notif.message}</p>
                  <span className="text-xs text-gray-400">{notif.time}</span>
                </div>
              </div>
            )) : (
              <div className="p-3 text-gray-400 text-sm">No notifications</div>
            )}
          </div>
        </div>

        {/* Chat Icon with Popup */}
        <div className="relative">
          <div
            className="ChatIcon dark:text-white h-8 w-8 text-lg flex items-center justify-center hover:bg-gray-500/30 rounded-full transition-all duration-200 cursor-pointer"
            onClick={toggleChatPopup}
          >
            <i className="fas fa-comment-dots"></i>
          </div>
          
          {/* Chat Popup */}
          {showChatPopup && (
            <div className="absolute right-0 top-12 w-80 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl z-50 overflow-hidden flex flex-col" style={{ maxHeight: '500px' }}>
              {/* Chat Header */}
              <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center bg-gray-50 dark:bg-gray-700">
                <div className="flex items-center">
                  <div className="bg-blue-500 dark:bg-blue-600 p-2 rounded-full mr-3">
                    <i className="fas fa-headset text-white"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Support Chat</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-300">We're here to help</p>
                  </div>
                </div>
                <button 
                  onClick={toggleChatPopup}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
              
              {/* Chat Messages */}
              <div className="flex-1 p-4 overflow-y-auto" style={{ height: '300px' }}>
                {chatMessages.map((msg) => (
                  <div 
                    key={msg.id} 
                    className={`mb-4 flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${msg.sender === 'user' 
                        ? 'bg-blue-500 text-white rounded-br-none' 
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-none'}`}
                    >
                      <p>{msg.text}</p>
                      <p className={`text-xs mt-1 ${msg.sender === 'user' ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'}`}>
                        {msg.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Message Input */}
              <form onSubmit={handleSendMessage} className="p-3 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-lg transition-colors duration-200"
                  >
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </div>
              </form>
              
              {/* Call Option */}
              <div className="p-3 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full mr-3">
                      <i className="fas fa-phone text-green-500 dark:text-green-300"></i>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-800 dark:text-white">Prefer to call?</h4>
                      <p className="text-xs text-gray-500 dark:text-gray-300">Available 24/7</p>
                    </div>
                  </div>
                  <button
                    onClick={handleCallNow}
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm flex items-center transition-colors duration-200"
                  >
                    <i className="fas fa-phone mr-2"></i>
                    Call Now
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        <Link to='profile'>
          <div className="profile h-11 rounded-md flex items-center hover:bg-gray-500/30 transition-all duration-200 p-1">
            <div className="ProfileIcon h-10 w-10 rounded-lg bg-gray-400/60 text-white flex items-center justify-center mr-2">
              <i className="fas fa-user"></i>
            </div>
          </div>
        </Link>
      </div>

      {showRideRequest && Isonline && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-end justify-center z-50 sm:items-center">
          <div
            className="bg-white dark:bg-gray-800 rounded-t-3xl sm:rounded-3xl w-full max-w-md relative overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700 transition-all duration-300 transform sm:scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Elegant map container */}
            <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
              {/* Map placeholder with route animation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Road */}
                  <div className="absolute left-0 right-0 top-1/2 h-4 bg-gray-300 dark:bg-gray-600"></div>
                  {/* Animated car */}
                  <div className="absolute left-[140px] top-1/2 transform -translate-x-1/2 -translate-y- animate-bounce">
                    <div className="text-blue-500 dark:text-blue-400 text-2xl">
                      <i className="fas fa-car-side"></i>
                    </div>
                  </div>
                  {/* Route markers */}
                  <div className="absolute left-1/4 top-1/2 transform -translate-x-1/2">
                    <div className="w-5 h-5 bg-white dark:bg-blue-500 rounded-full border-4 border-blue-500 dark:border-blue-400 shadow-lg flex items-center justify-center">
                      <i className="fas fa-circle text-xs text-blue-500 dark:text-white"></i>
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-700 dark:text-gray-200 bg-white/90 dark:bg-gray-700/90 px-2 py-1 rounded whitespace-nowrap">
                      Pickup
                    </div>
                  </div>
                  <div className="absolute left-3/4 top-1/2 transform -translate-x-1/2">
                    <div className="w-5 h-5 bg-white dark:bg-red-500 rounded-full border-4 border-red-500 dark:border-red-400 shadow-lg flex items-center justify-center">
                      <i className="fas fa-flag-checkered text-xs text-red-500 dark:text-white"></i>
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-700 dark:text-gray-200 bg-white/90 dark:bg-gray-700/90 px-2 py-1 rounded whitespace-nowrap">
                      Dropoff
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ride details with subtle card styling */}
            <div className="p-5 space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900 dark:to-blue-800 flex items-center justify-center">
                      <i className="fas fa-user text-blue-500 dark:text-blue-300"></i>
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-blue-500 dark:bg-blue-400 text-white rounded-full flex justify-center items-center h-5 w-5 shadow-sm">
                      <i className="fas fa-star text-xs"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white text-start">{rideRequest.customerName}</h3>
                    <div className="flex items-center space-x-2 text-sm">
                      <span className="text-yellow-500">
                        <i className="fas fa-star"></i> 4.8
                      </span>
                      <span className="text-gray-500 dark:text-gray-400">
                        <i className="fas fa-clock"></i> 2 mins away
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-500 dark:text-blue-400">
                    {rideRequest?.fare}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    ESTIMATED FARE
                  </div>
                </div>
              </div>

              {/* Location details with elegant divider */}
              <div className="relative py-4">
                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-4 h-4 rounded-full bg-blue-500 dark:bg-blue-400 border-2 border-white dark:border-gray-800 shadow-sm"></div>
                    </div>
                    <div>
                      <h4 className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">PICKUP</h4>
                      <p className="text-gray-800 dark:text-gray-100">{rideRequest?.pickupLocation}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-4 h-4 rounded-full bg-red-500 dark:bg-red-400 border-2 border-white dark:border-gray-800 shadow-sm"></div>
                    </div>
                    <div>
                      <h4 className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase text-start">DROPOFF</h4>
                      <p className="text-gray-800 dark:text-gray-100 text-start">{rideRequest?.dropoffLocation}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ride summary chips */}
              <div className="flex flex-wrap gap-2">
                <div className="flex items-center space-x-1 bg-gray-100 dark:bg-gray-700 px-3 py-1.5 rounded-full text-sm">
                  <i className="fas fa-road text-blue-500 dark:text-blue-400"></i>
                  <span className="text-gray-700 dark:text-gray-200">{rideRequest?.distance}</span>
                </div>
                <div className="flex items-center space-x-1 bg-gray-100 dark:bg-gray-700 px-3 py-1.5 rounded-full text-sm">
                  <i className="fas fa-clock text-blue-500 dark:text-blue-400"></i>
                  <span className="text-gray-700 dark:text-gray-200">8 mins</span>
                </div>
                <div className="flex items-center space-x-1 bg-gray-100 dark:bg-gray-700 px-3 py-1.5 rounded-full text-sm">
                  <i className="fas fa-car text-blue-500 dark:text-blue-400"></i>
                  <span className="text-gray-700 dark:text-gray-200">Premium</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}