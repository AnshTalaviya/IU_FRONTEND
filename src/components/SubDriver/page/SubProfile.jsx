import React, { useState } from 'react';
import axios from 'axios';

const SubProfile = () => {
  const [profileData, setProfileData] = useState({
    name: 'Rutvik Malhotra',
    fullName: 'Rutvik Malhotra',
    driverId: 'IU-DR-123456',
    rating: 4.9,
    rides: 845,
    level: 'Gold',
    levelNumber: 3,
    progressToNextLevel: 70,
    email: 'rutvik.malhotra@gmail.com',
    phone: '+91 9876543210',
  });

  const [showEditModal, setShowEditModal] = useState(false);
  const [editForm, setEditForm] = useState({
    name: profileData.name,
    email: profileData.email,
    phone: profileData.phone,
    address: 'B-401, Green Heights, Ahmedabad',
    license: 'GJ0420210001234',
  });

  const [selectedSubdriver, setSelectedSubdriver] = useState(null);
  const [showSubdriverModal, setShowSubdriverModal] = useState(false);

  const getLevelColor = (level) => {
    switch (level) {
      case 'Gold': return 'amber-400';
      case 'Silver': return 'gray-500';
      case 'Bronze': return 'red-600';
      case 'Platinum': return 'blue-400';
      default: return 'gray-500';
    }
  };

  const ratingsBreakdown = [
    { label: '5 stars', percent: 87, color: 'bg-green-600' },
    { label: '4 stars', percent: 10, color: 'bg-blue-400' },
    { label: '3 stars', percent: 3, color: 'bg-amber-400' },
    { label: '2 stars', percent: 0, color: 'bg-orange-400' },
    { label: '1 star', percent: 0, color: 'bg-red-400' },
  ];

  const stats = [
    { label: 'Total Trips', value: '845', icon: 'route', className: 'dark:text-white text-gray-800' },
    { label: 'Acceptance Rate', value: '94%', icon: 'check-circle', className: 'text-green-400' },
    { label: 'Cancellation Rate', value: '1.2%', icon: 'times-circle', className: 'text-red-400' },
    { label: 'On-time Arrival', value: '97%', icon: 'clock', className: 'text-green-400' },
    { label: 'Average Trip Time', value: '18 min', icon: 'hourglass-half', className: 'dark:text-white text-gray-800' },
    { label: 'Weekly Earnings', value: '$1,245.50', icon: 'dollar-sign', className: 'text-green-400' },
  ];

  const subdrivers = [
    {
      name: 'Ram',
      phone: '+91 9898989898',
      rides: 324,
      rating: 4.7,
      level: 'Silver',
      levelNumber: 2,
    },
    {
      name: 'Shyam',
      phone: '+91 9876543211',
      rides: 278,
      rating: 4.5,
      level: 'Gold',
      levelNumber: 3,
    },
    {
      name: 'Ghanshyam',
      phone: '+91 9090909090',
      rides: 310,
      rating: 4.6,
      level: 'Bronze',
      levelNumber: 1,
    },
  ];

  const driverInfo = [
    { label: 'Full Name', value: profileData.name, icon: 'user' },
    { label: 'Email', value: profileData.email, icon: 'envelope' },
    { label: 'Phone', value: profileData.phone, icon: 'phone' },
    { label: 'Address', value: editForm.address, icon: 'map-marker-alt' },
    { label: 'Driver License', value: editForm.license, icon: 'id-card' },
  ];

  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setProfileData({
      ...profileData,
      name: editForm.name,
      email: editForm.email,
      phone: editForm.phone,
    });
    setShowEditModal(false);
  };

  return (
    <div className="max-w-6xl mx-auto p-4 mt-14 dark:bg-gray-950 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 dark:text-gray-200 text-gray-800">
          Driver Profile
        </h1>
        <p className="dark:text-gray-400 text-gray-600">Manage your information and track performance</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <div className="md:col-span-1 space-y-6 md:space-y-8">
          {/* Profile Card */}
          <div className="dark:bg-gray-200/10 bg-white rounded-xl p-6 shadow-sm dark:border-gray-700 border-gray-200 hover:shadow-lg transition-all">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 md:w-28 md:h-28 bg-green-600 rounded-full flex items-center justify-center mb-4 shadow-md">
                <i className="fas fa-user text-white text-4xl md:text-5xl"></i>
              </div>
              <h2 className="text-xl font-bold mb-1 dark:text-gray-200 text-gray-800">{profileData.name}</h2>
              <p className="dark:text-gray-400 text-gray-600 mb-4 text-sm">Driver ID: {profileData.driverId}</p>
              <div className="flex items-center mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <i
                    key={i}
                    className={`fas fa-star text-lg mr-1 ${i < Math.round(profileData.rating)
                      ? 'text-amber-400'
                      : 'dark:text-gray-600 text-gray-300'
                      }`}
                  ></i>
                ))}
                <span className="ml-2 font-medium dark:text-gray-300 text-gray-700">
                  {profileData.rating} ({profileData.rides} trips)
                </span>
              </div>
            </div>
          </div>

          {/* Level Card */}
          <div className="dark:bg-gray-200/10 bg-white rounded-xl p-6 shadow-sm dark:border-gray-700 border-gray-200 hover:shadow-lg transition-all">
            <h3 className="text-lg font-semibold mb-4 flex items-center dark:text-gray-200 text-gray-800">
              <i className={`fas fa-medal text-${getLevelColor(profileData.level)} mr-3 text-xl`}></i> Driver Level
            </h3>
            <div className="flex flex-col items-center text-center">
              <div
                className={`relative w-20 h-20 md:w-24 md:h-24 dark:bg-amber-100/10 bg-amber-50 rounded-full flex items-center justify-center mb-4 border-4 border-${getLevelColor(profileData.level)} shadow-sm`}
              >
                <div className={`text-${getLevelColor(profileData.level)} font-bold text-lg md:text-xl`}>
                  {profileData.level}
                </div>
                <div
                  className={`absolute -bottom-2 bg-${getLevelColor(profileData.level)} text-white text-xs px-2 py-1 rounded-full`}
                >
                  Level {profileData.levelNumber}
                </div>
              </div>
              <p className="text-sm dark:text-gray-400 text-gray-600 mb-5 text-center">
                You're a {profileData.level} level driver! Complete 20 more trips this month to reach Platinum.
              </p>
              <div className="w-full">
                <div className="flex justify-between dark:text-gray-400 text-gray-600 text-xs mb-1">
                  <span>Progress to Platinum</span>
                  <span>{profileData.progressToNextLevel}%</span>
                </div>
                <div className="w-full dark:bg-gray-700 bg-gray-200 rounded-full h-2.5">
                  <div
                    className={`bg-${getLevelColor(profileData.level)} h-2.5 rounded-full shadow-sm`}
                    style={{ width: `${profileData.progressToNextLevel}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:col-span-2 space-y-6 md:space-y-8">
          <InfoSection title="Driver Information" data={driverInfo} icon="info-circle" onEdit={() => setShowEditModal(true)} />

          {/* Subdrivers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {subdrivers.map((sd) => (
              <div
                key={sd.name}
                onClick={() => {
                  setSelectedSubdriver(sd);
                  setShowSubdriverModal(true);
                }}
                className="cursor-pointer dark:bg-gray-200/10 bg-white rounded-xl p-5 shadow-sm dark:border-gray-700 border-gray-200 hover:shadow-md transition-all"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold uppercase">
                    {sd.name[0]}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold dark:text-gray-200 text-gray-800">{sd.name}</h4>
                    <p className="text-sm dark:text-gray-400 text-gray-600">{sd.phone}</p>
                  </div>
                </div>
                <div className="mt-4 text-sm space-y-1">
                  <p className="flex justify-between dark:text-gray-300 text-gray-700"><span>Trips</span> <span>{sd.rides}</span></p>
                  <p className="flex justify-between dark:text-gray-300 text-gray-700"><span>Rating</span> <span>{sd.rating} ⭐</span></p>
                  <p className="flex justify-between dark:text-gray-300 text-gray-700"><span>Level</span> <span className={`text-${getLevelColor(sd.level)} font-medium`}>{sd.level} (Lv {sd.levelNumber})</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="dark:bg-gray-200/10 bg-white rounded-xl p-6 shadow-sm dark:border-gray-700 border-gray-200 hover:shadow-lg transition-all hover:scale-[1.01] mt-8">
        <h3 className="text-xl font-semibold mb-6 dark:text-gray-200 text-gray-800">Performance Statistics</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <div>
            <h4 className="font-medium mb-4 dark:text-gray-400 text-gray-600 flex items-center">
              <i className="fas fa-star text-amber-400 mr-2"></i> Ratings Breakdown
            </h4>
            {ratingsBreakdown.map(({ label, percent, color }) => (
              <div key={label} className="mb-3">
                <div className="flex justify-between mb-1 text-sm">
                  <span className="flex items-center dark:text-gray-300 text-gray-700">
                    <i className="fas fa-star text-amber-400 mr-2"></i> {label}
                  </span>
                  <span className="font-medium dark:text-white text-gray-800">{percent}%</span>
                </div>
                <div className="w-full dark:bg-gray-700 bg-gray-200 rounded-full h-2">
                  <div className={`${color} h-2 rounded-full shadow-sm`} style={{ width: `${percent}%` }}></div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <h4 className="font-medium mb-4 dark:text-gray-400 text-gray-600 flex items-center">
              <i className="fas fa-chart-line text-green-400 mr-2"></i> Overall Stats
            </h4>
            {stats.map((stat, idx) => (
              <Stat key={idx} {...stat} />
            ))}
          </div>
        </div>
      </div>

      {/* Modals */}
      {showEditModal && (
        <EditModal editForm={editForm} handleEditChange={handleEditChange} handleSave={handleSave} onClose={() => setShowEditModal(false)} />
      )}

      {showSubdriverModal && selectedSubdriver && (
        <SubdriverModal subdriver={selectedSubdriver} onClose={() => setShowSubdriverModal(false)} />
      )}
    </div>
  );
};

const InfoSection = ({ title, data, icon, onEdit }) => (
  <div className="dark:bg-gray-200/10 bg-white rounded-xl p-6 shadow-sm dark:border-gray-700 border-gray-200 hover:shadow-lg transition-all hover:scale-[1.01]">
    <div className="flex justify-between items-center mb-6">
      <h3 className="text-xl font-semibold dark:text-gray-200 text-gray-800 flex items-center">
        {icon && <i className={`fas fa-${icon} text-green-400 mr-3 text-lg`}></i>}
        {title}
      </h3>
      {onEdit && (
        <button
          onClick={onEdit}
          className="text-lg px-3 py-1 text-white rounded hover:underline hover:decoration-2 hover:decoration-green-500"
        >
          Edit
        </button>
      )}
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-sm">
      {data.map((item) => (
        <Info key={item.label} {...item} />
      ))}
    </div>
  </div>
);

const Info = ({ label, value, icon }) => (
  <div className="flex items-start gap-3 md:gap-4">
    <div className="p-2 rounded-lg dark:bg-gray-800 bg-gray-100 text-green-500">
      <i className={`fas fa-${icon} text-sm`}></i>
    </div>
    <div className="flex flex-col">
      <span className="text-xs uppercase tracking-wide dark:text-gray-400 text-gray-600 text-start">{label}</span>
      <span className="mt-0.5 text-sm font-medium dark:text-white text-gray-800">{value}</span>
    </div>
  </div>
);

const Stat = ({ label, value, icon, className }) => (
  <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-sm">
    <div className="flex items-center space-x-3">
      <i className={`fas fa-${icon} text-xl ${className}`}></i>
      <div className="flex flex-col">
        <span className="text-xs uppercase tracking-wide dark:text-gray-400 text-gray-600">{label}</span>
        <span className="text-base font-semibold dark:text-white text-gray-800">{value}</span>
      </div>
    </div>
  </div>
);

const EditModal = ({ editForm, handleEditChange, handleSave, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg w-full max-w-md shadow-lg">
      <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Edit Driver Info</h3>
      <div className="space-y-4">
        {['name', 'email', 'phone', 'address', 'license'].map((field) => (
          <div key={field} className="flex flex-col">
            <label className="text-sm font-medium text-gray-600 dark:text-gray-300 capitalize">{field}</label>
            <input
              type="text"
              name={field}
              value={editForm[field]}
              onChange={handleEditChange}
              className="p-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-end gap-3 mt-6">
        <button onClick={onClose} className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white rounded">
          Cancel
        </button>
        <button onClick={handleSave} className="px-4 py-2 bg-green-500 text-white rounded">
          Save
        </button>
      </div>
    </div>
  </div>
);

const SubdriverModal = ({ subdriver, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg w-full max-w-md shadow-lg">
      <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
        {subdriver.name}'s Details
      </h3>
      <div className="space-y-3 text-sm">
        <p className="text-gray-700 dark:text-gray-300"><strong>Phone:</strong> {subdriver.phone}</p>
        <p className="text-gray-700 dark:text-gray-300"><strong>Trips:</strong> {subdriver.rides}</p>
        <p className="text-gray-700 dark:text-gray-300"><strong>Rating:</strong> {subdriver.rating}</p>
        <p className="text-gray-700 dark:text-gray-300"><strong>Level:</strong> {subdriver.level} (Lv {subdriver.levelNumber})</p>
      </div>
      <div className="flex justify-end mt-6">
        <button onClick={onClose} className="px-4 py-2 bg-green-500 text-white rounded">
          Close
        </button>
      </div>
    </div>
  </div>
);

export default SubProfile;
