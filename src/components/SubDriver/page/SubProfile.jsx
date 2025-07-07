import React, { useState } from 'react';
import axios from 'axios';

const Profile2 = () => {
  const [profileData, setProfileData] = useState({
    name: 'Rutvik Malhotra',
    fullName: 'Rutvik Malhotra',
    driverId: 'IU-DR-123456',
    rating: 4.9,
    rides: 845,
    email: 'rutvik.malhotra@gmail.com',
    phone: '+91 9876543210',
    license: 'GJ0120210009876'
  });

  const [showEditModal, setShowEditModal] = useState(false);
  const [editForm, setEditForm] = useState({
    name: profileData.name,
    email: profileData.email,
    phone: profileData.phone,
    license: profileData.license
  });

  const [selectedSubdriver, setSelectedSubdriver] = useState(null);
  const [showSubdriverModal, setShowSubdriverModal] = useState(false);
  const [showSubdriverEditModal, setShowSubdriverEditModal] = useState(false);
  const [subdriverEditForm, setSubdriverEditForm] = useState({
    name: '',
    phone: '',
    rides: 0,
    rating: 0,
    address: '',
    license: '',
    makeModel: '',
    color: '',
    licensePlate: '',
    registration: '',
    insurance: ''
  });

  const ratingsBreakdown = [
    { label: '5 stars', percent: 87, color: 'bg-green-600' },
    { label: '4 stars', percent: 10, color: 'bg-blue-400' },
    { label: '3 stars', percent: 3, color: 'bg-amber-400' },
    { label: '2 stars', percent: 0, color: 'bg-orange-400' },
    { label: '1 star', percent: 0, color: 'bg-red-400' },
  ];

  const stats = [
    { label: 'Total Rides', value: '845', icon: 'route', className: 'dark:text-white text-gray-800' },
    { label: 'Acceptance Rate', value: '94%', icon: 'check-circle', className: 'text-green-400' },
    { label: 'Cancellation Rate', value: '1.2%', icon: 'times-circle', className: 'text-red-400' },
    { label: 'On-time Arrival', value: '97%', icon: 'clock', className: 'text-green-400' },
    { label: 'Average Trip Time', value: '18 min', icon: 'hourglass-half', className: 'dark:text-white text-gray-800' },
    { label: 'Weekly Earnings', value: '$1,245.50', icon: 'dollar-sign', className: 'text-green-400' },
  ];

  const [subdrivers, setSubdrivers] = useState([
    {
      id: 1,
      name: 'Ram',
      phone: '+91 9898989898',
      rides: 324,
      rating: 4.7,
      address: 'B-401, Green Heights, Ahmedabad',
      license: 'GJ0420210001234',
      makeModel: 'Hyundai Aura 1.2 SX',
      color: 'Titan Grey',
      licensePlate: 'GJ01AB1234',
      registration: 'REG-2021-3345',
      insurance: 'INS-987654321'
    },
    {
      id: 2,
      name: 'Shyam',
      phone: '+91 9876543211',
      rides: 278,
      rating: 4.5,
      address: 'C-502, Sunshine Apartments, Ahmedabad',
      license: 'GJ0520200005678',
      makeModel: 'Maruti Suzuki Dzire VXI',
      color: 'Pearl Arctic White',
      licensePlate: 'GJ01CD5678',
      registration: 'REG-2020-7890',
      insurance: 'INS-123456789'
    },
    {
      id: 3,
      name: 'Ghanshyam',
      phone: '+91 9090909090',
      rides: 310,
      rating: 4.6,
      address: 'A-303, Royal Residency, Ahmedabad',
      license: 'GJ0320190009012',
      makeModel: 'Honda Amaze S MT',
      color: 'Radiant Red Metallic',
      licensePlate: 'GJ01EF9012',
      registration: 'REG-2019-1234',
      insurance: 'INS-567891234'
    },
  ]);

  const driverInfo = [
    { label: 'Full Name', value: profileData.name, icon: 'user' },
    { label: 'Email', value: profileData.email, icon: 'envelope' },
    { label: 'Phone', value: profileData.phone, icon: 'phone' },
    { label: 'License Number', value: profileData.license, icon: 'id-card' }
  ];

  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setProfileData({
      ...profileData,
      name: editForm.name,
      email: editForm.email,
      phone: editForm.phone
      // License is not updated as it's non-editable
    });
    setShowEditModal(false);
  };

  const handleSubdriverClick = (subdriver) => {
    setSelectedSubdriver(subdriver);
    setShowSubdriverModal(true);
  };

  const handleEditSubdriver = () => {
    setSubdriverEditForm({
      name: selectedSubdriver.name,
      phone: selectedSubdriver.phone,
      rides: selectedSubdriver.rides,
      rating: selectedSubdriver.rating,
      address: selectedSubdriver.address,
      license: selectedSubdriver.license,
      makeModel: selectedSubdriver.makeModel,
      color: selectedSubdriver.color,
      licensePlate: selectedSubdriver.licensePlate,
      registration: selectedSubdriver.registration,
      insurance: selectedSubdriver.insurance
    });
    setShowSubdriverModal(false);
    setShowSubdriverEditModal(true);
  };

  const handleSubdriverEditChange = (e) => {
    setSubdriverEditForm({ ...subdriverEditForm, [e.target.name]: e.target.value });
  };

  const handleSubdriverSave = () => {
    const updatedSubdrivers = subdrivers.map(sd => 
      sd.id === selectedSubdriver.id ? { ...sd, ...subdriverEditForm } : sd
    );
    setSubdrivers(updatedSubdrivers);
    setSelectedSubdriver({ ...selectedSubdriver, ...subdriverEditForm });
    setShowSubdriverEditModal(false);
    setShowSubdriverModal(true);
  };

  return (
    <div className="max-w-6xl mx-auto p-4 mt-14 dark:bg-gray-950 bg-gray-50 min-h-screen relative">
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
                  {profileData.rating} ({profileData.rides} rides)
                </span>
              </div>
            </div>
          </div>

          {/* Stats Card */}
          <div className="dark:bg-gray-200/10 bg-white rounded-xl p-6 shadow-sm dark:border-gray-700 border-gray-200 hover:shadow-lg transition-all">
            <h3 className="text-lg font-semibold mb-4 flex items-center dark:text-gray-200 text-gray-800">
              <i className="fas fa-chart-line text-green-400 mr-3 text-lg"></i> Quick Stats
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
                <div className="text-xs uppercase tracking-wide dark:text-gray-400 text-gray-600">Total Rides</div>
                <div className="text-xl font-bold dark:text-white text-gray-800">{profileData.rides}</div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
                <div className="text-xs uppercase tracking-wide dark:text-gray-400 text-gray-600">Rating</div>
                <div className="text-xl font-bold dark:text-white text-gray-800">{profileData.rating}</div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
                <div className="text-xs uppercase tracking-wide dark:text-gray-400 text-gray-600">Acceptance</div>
                <div className="text-xl font-bold text-green-400">94%</div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
                <div className="text-xs uppercase tracking-wide dark:text-gray-400 text-gray-600">Cancellation</div>
                <div className="text-xl font-bold text-red-400">1.2%</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:col-span-2 space-y-6 md:space-y-8">
          <InfoSection title="Driver Information" data={driverInfo} icon="info-circle" onEdit={() => setShowEditModal(true)} />

          {/* Subdrivers */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold dark:text-gray-200 text-gray-800 flex items-center">
              <i className="fas fa-users text-green-400 mr-3 text-lg"></i>
              Subdrivers
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {subdrivers.map((sd) => (
                <div
                  key={sd.id}
                  onClick={() => handleSubdriverClick(sd)}
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
                    <p className="flex justify-between dark:text-gray-300 text-gray-700"><span>Rides</span> <span>{sd.rides}</span></p>
                    <p className="flex justify-between dark:text-gray-300 text-gray-700"><span>Rating</span> <span>{sd.rating} ⭐</span></p>
                    <p className="flex justify-between dark:text-gray-300 text-gray-700"><span>Vehicle</span> <span>{sd.makeModel}</span></p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="dark:bg-gray-200/10 bg-white rounded-xl p-6 shadow-sm dark:border-gray-700 border-gray-200 hover:shadow-lg transition-all hover:scale-[1.01] mt-8">
        <h3 className="text-xl font-semibold mb-6 dark:text-gray-200 text-gray-800">Performance Statistics</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
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
                  <div className={`${color} h-2 rounded-full shadow-sm} style={{ width: ${percent}% }`}></div>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:col-span-2">
            <h4 className="font-medium mb-4 dark:text-gray-400 text-gray-600 flex items-center">
              <i className="fas fa-chart-pie text-blue-400 mr-2"></i> Detailed Stats
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {stats.map((stat, idx) => (
                <Stat key={idx} {...stat} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {showEditModal && (
        <div className="fixed inset-0 z-50">
          <EditModal 
            editForm={editForm} 
            handleEditChange={handleEditChange} 
            handleSave={handleSave} 
            onClose={() => setShowEditModal(false)} 
          />
        </div>
      )}

      {showSubdriverModal && selectedSubdriver && (
        <div className="fixed inset-0 z-50">
          <SubdriverModal 
            subdriver={selectedSubdriver} 
            onClose={() => setShowSubdriverModal(false)}
            onEdit={handleEditSubdriver}
          />
        </div>
      )}

      {showSubdriverEditModal && (
        <div className="fixed inset-0 z-50">
          <SubdriverEditModal 
            editForm={subdriverEditForm} 
            handleChange={handleSubdriverEditChange} 
            handleSave={handleSubdriverSave} 
            onClose={() => {
              setShowSubdriverEditModal(false);
              setShowSubdriverModal(true);
            }} 
          />
        </div>
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
          className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
        >
          <i className="fas fa-edit mr-1"></i> Edit
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

const EditModal = ({ editForm, handleEditChange, handleSave, onClose }) => {
  const nonEditableFields = ['license'];
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg w-full max-w-md shadow-lg max-h-[90vh] overflow-hidden flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">Edit Driver Info</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="space-y-4 overflow-y-auto flex-grow pr-2">
          {Object.keys(editForm).map((field) => (
            <div key={field} className="flex flex-col">
              <label className="text-sm font-medium text-gray-600 dark:text-gray-300 capitalize mb-1">
                {field.replace(/([A-Z])/g, ' $1').trim()}
              </label>
              {nonEditableFields.includes(field) ? (
                <input
                  type="text"
                  name={field}
                  value={editForm[field]}
                  readOnly
                  className="p-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-300 cursor-not-allowed"
                />
              ) : (
                <input
                  type="text"
                  name={field}
                  value={editForm[field]}
                  onChange={handleEditChange}
                  className="p-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
          <button 
            onClick={onClose} 
            className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white rounded hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors"
          >
            Cancel
          </button>
          <button 
            onClick={handleSave} 
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

const SubdriverModal = ({ subdriver, onClose, onEdit }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg w-full max-w-md shadow-lg max-h-[90vh] overflow-hidden flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white">
          <i className="fas fa-user-shield mr-2"></i> Subdriver Details
        </h3>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
          <i className="fas fa-times"></i>
        </button>
      </div>
      
      <div className="overflow-y-auto flex-grow pr-2">
        <div className="flex flex-col items-center mb-6">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white text-3xl font-bold uppercase mb-4">
            {subdriver.name[0]}
          </div>
          <h4 className="text-2xl font-bold dark:text-white text-gray-800">{subdriver.name}</h4>
          <div className="flex items-center mt-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <i
                key={i}
                className={`fas fa-star text-lg mr-1 ${i < Math.round(subdriver.rating)
                  ? 'text-amber-400'
                  : 'dark:text-gray-600 text-gray-300'
                  }`}
              ></i>
            ))}
            <span className="ml-2 font-medium dark:text-gray-300 text-gray-700">
              {subdriver.rating}
            </span>
          </div>
        </div>
        
        <div className="space-y-4 text-sm">
          <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
            <span className="font-medium dark:text-gray-400 text-gray-600">Phone</span>
            <span className="dark:text-white text-gray-800">{subdriver.phone}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
            <span className="font-medium dark:text-gray-400 text-gray-600">Total Rides</span>
            <span className="dark:text-white text-gray-800">{subdriver.rides}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
            <span className="font-medium dark:text-gray-400 text-gray-600">Address</span>
            <span className="dark:text-white text-gray-800">{subdriver.address}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
            <span className="font-medium dark:text-gray-400 text-gray-600">Driver License</span>
            <span className="dark:text-white text-gray-800">{subdriver.license}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
            <span className="font-medium dark:text-gray-400 text-gray-600">Make & Model</span>
            <span className="dark:text-white text-gray-800">{subdriver.makeModel}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
            <span className="font-medium dark:text-gray-400 text-gray-600">Color</span>
            <span className="dark:text-white text-gray-800">{subdriver.color}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
            <span className="font-medium dark:text-gray-400 text-gray-600">License Plate</span>
            <span className="dark:text-white text-gray-800">{subdriver.licensePlate}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
            <span className="font-medium dark:text-gray-400 text-gray-600">Registration</span>
            <span className="dark:text-white text-gray-800">{subdriver.registration}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
            <span className="font-medium dark:text-gray-400 text-gray-600">Insurance</span>
            <span className="dark:text-white text-gray-800">{subdriver.insurance}</span>
          </div>
        </div>
      </div>
      
      <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
        <button 
          onClick={onEdit}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          <i className="fas fa-edit mr-2"></i> Edit
        </button>
        <button 
          onClick={onClose} 
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  </div>
);

const SubdriverEditModal = ({ editForm, handleChange, handleSave, onClose }) => {
  const hiddenFields = ['rides', 'rating'];
  const visibleFields = Object.keys(editForm).filter(field => !hiddenFields.includes(field));
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg w-full max-w-md shadow-lg max-h-[90vh] overflow-hidden flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">Edit Subdriver</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="overflow-y-auto flex-grow pr-2">
          <div className="space-y-4">
            {visibleFields.map((field) => (
              <div key={field} className="flex flex-col">
                <label className="text-sm font-medium text-gray-600 dark:text-gray-300 capitalize mb-1">
                  {field.replace(/([A-Z])/g, ' $1').trim()}
                </label>
                <input
                  type={field === 'rides' || field === 'rating' ? 'number' : 'text'}
                  name={field}
                  value={editForm[field]}
                  onChange={handleChange}
                  className="p-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
          <button 
            onClick={onClose} 
            className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white rounded hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors"
          >
            Cancel
          </button>
          <button 
            onClick={handleSave} 
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile2;