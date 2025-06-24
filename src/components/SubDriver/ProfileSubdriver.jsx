import React, { useState, useEffect } from 'react';

const defaultPersonalInfo = [
  { label: 'Full Name', value: '', icon: 'user', key: 'fullName', type: 'text', required: true, pattern: /^[a-zA-Z ]+$/ },
  { label: 'Email', value: '', icon: 'envelope', key: 'email', type: 'email', required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
  { label: 'Phone', value: '', icon: 'phone', key: 'phone', type: 'tel', required: true, pattern: /^\+?[\d\s-]+$/ },
  { label: 'Address', value: '', icon: 'map-marker-alt', key: 'address', type: 'text', required: true },
  { label: 'Driver License', value: '', icon: 'id-card', key: 'licenseNumber', type: 'text', required: true },
  { label: 'Make & Model', value: '', icon: 'car', key: 'makeAndModel', type: 'text', required: true },
  { label: 'Color', value: '', icon: 'palette', key: 'color', type: 'text', required: true },
  { label: 'License Plate', value: '', icon: 'tag', key: 'vehicleNumber', type: 'text', required: true },
  { label: 'Registration', value: '', icon: 'file-alt', key: 'registration', type: 'text', required: true },
  { label: 'Insurance', value: '', icon: 'shield-alt', key: 'insurance', type: 'text', required: true },
];

const defaultStats = [
  { label: 'Total Rides', value: '845', icon: 'route', className: 'dark:text-white text-gray-800' },
  { label: 'Acceptance Rate', value: '94%', icon: 'check-circle', className: 'text-green-400' },
  { label: 'Cancellation Rate', value: '1.2%', icon: 'times-circle', className: 'text-red-400' },
  { label: 'On-time Arrival', value: '97%', icon: 'clock', className: 'text-green-400' },
  { label: 'Average Trip Time', value: '18 min', icon: 'hourglass-half', className: 'dark:text-white text-gray-800' },
  { label: 'Weekly Earnings', value: '$1,245.50', icon: 'dollar-sign', className: 'text-green-400' },
];

const defaultRatingsBreakdown = [
  { label: '5 stars', percent: 87, color: 'bg-green-600' },
  { label: '4 stars', percent: 10, color: 'bg-blue-400' },
  { label: '3 stars', percent: 3, color: 'bg-amber-400' },
  { label: '2 stars', percent: 0, color: 'bg-orange-400' },
  { label: '1 star', percent: 0, color: 'bg-red-400' },
];

const getLevelColor = (level) => {
  switch (level) {
    case 'Gold':
      return 'amber-400';
    case 'Silver':
      return 'gray-500';
    case 'Bronze':
      return 'red-600';
    case 'Platinum':
      return 'blue-400';
    default:
      return 'gray-500';
  }
};

// Default subdriver data (like dashboard)
const initialSubdrivers = [
  { fullName: 'Amit Sharma' },
  { fullName: 'Ravi Mehta' },
  { fullName: 'Suresh Patel' },
  { fullName: 'Mukesh Patel' },
];

const initialSubdriverDetails = [
  {
    fullName: 'Amit Sharma',
    driverId: 'SUB1001',
    rating: 4.7,
    rides: 120,
    level: 'Gold',
    levelNumber: 2,
    progressToNextLevel: 60,
    email: 'amit.sharma@example.com',
    phone: '+91 9876543210',
    address: 'Ahmedabad',
    licenseNumber: 'BIKE-LIC-001',
    makeAndModel: 'Honda Shine',
    color: 'Black',
    vehicleNumber: 'GJ01BK1001',
    registration: 'REG1001',
    insurance: 'INS1001',
  },
  {
    fullName: 'Ravi Mehta',
    driverId: 'SUB1002',
    rating: 4.5,
    rides: 98,
    level: 'Silver',
    levelNumber: 1,
    progressToNextLevel: 40,
    email: 'ravi.mehta@example.com',
    phone: '+91 9876543211',
    address: 'Surat',
    licenseNumber: 'BIKE-LIC-002',
    makeAndModel: 'Bajaj Pulsar',
    color: 'Blue',
    vehicleNumber: 'GJ05BK1002',
    registration: 'REG1002',
    insurance: 'INS1002',
  },
  {
    fullName: 'Suresh Patel',
    driverId: 'SUB1003',
    rating: 4.2,
    rides: 75,
    level: 'Bronze',
    levelNumber: 1,
    progressToNextLevel: 20,
    email: 'suresh.patel@example.com',
    phone: '+91 9876543212',
    address: 'Vadodara',
    licenseNumber: 'BIKE-LIC-003',
    makeAndModel: 'TVS Apache',
    color: 'Red',
    vehicleNumber: 'GJ06BK1003',
    registration: 'REG1003',
    insurance: 'INS1003',
  },
  {
    fullName: 'Mukesh Patel',
    driverId: 'SUB1004',
    rating: 4.8,
    rides: 140,
    level: 'Platinum',
    levelNumber: 3,
    progressToNextLevel: 80,
    email: 'mukesh.patel@example.com',
    phone: '+91 9876543213',
    address: 'Rajkot',
    licenseNumber: 'BIKE-LIC-004',
    makeAndModel: 'Hero Splendor',
    color: 'White',
    vehicleNumber: 'GJ10BK1004',
    registration: 'REG1004',
    insurance: 'INS1004',
  },
];

// MainDriverSection component
const MainDriverSection = () => {
  // Dummy data for main driver (local state for editing)
  const [mainDriverInfo, setMainDriverInfo] = useState({
    fullName: 'Owner',
    email: ' ',
    phone: '1234567890',
    address: 'Company HQ, Ahmedabad',
  });
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [formData, setFormData] = useState(mainDriverInfo);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Info fields for main driver (only required fields)
  const mainPersonalInfo = [
    { label: 'Full Name', value: mainDriverInfo.fullName, icon: 'user', key: 'fullName', type: 'text', required: true, pattern: /^[a-zA-Z ]+$/ },
    { label: 'Email', value: mainDriverInfo.email, icon: 'envelope', key: 'email', type: 'email', required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
    { label: 'Phone', value: mainDriverInfo.phone, icon: 'phone', key: 'phone', type: 'tel', required: true, pattern: /^\+?[\d\s-]+$/ },
    { label: 'Address', value: mainDriverInfo.address, icon: 'map-marker-alt', key: 'address', type: 'text', required: true },
  ];

  // Edit modal handlers
  const openEdit = () => {
    setFormData(mainDriverInfo);
    setFormErrors({});
    setIsEditOpen(true);
  };
  const closeEdit = () => setIsEditOpen(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };
  const validateForm = (fields) => {
    const errors = {};
    let isValid = true;
    fields.forEach((field) => {
      const rawValue = formData[field.key];
      const value = rawValue != null ? String(rawValue).trim() : '';
      if (field.required && !value) {
        errors[field.key] = `${field.label} is required`;
        isValid = false;
      } else if (field.pattern && value && !field.pattern.test(value)) {
        errors[field.key] = `Invalid ${field.label.toLowerCase()} format`;
        isValid = false;
      } else if (field.type === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        errors[field.key] = 'Please enter a valid email';
        isValid = false;
      }
    });
    setFormErrors(errors);
    return isValid;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm(mainPersonalInfo)) return;
    setIsSubmitting(true);
    setMainDriverInfo(formData);
    setIsSubmitting(false);
    setIsEditOpen(false);
  };

  // Render input field for main driver
  const renderInputField = (field) => {
    const commonProps = {
      name: field.key,
      value: formData[field.key] || '',
      onChange: handleInputChange,
      className: `w-full dark:bg-gray-800 bg-white border ${formErrors[field.key] ? 'border-red-500' : 'dark:border-gray-700 border-gray-300'} rounded-lg px-4 py-2 dark:text-white text-gray-800 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all`,
      placeholder: `Enter ${field.label.toLowerCase()}`,
      required: field.required,
    };
    switch (field.type) {
      case 'number':
        return <input type="number" {...commonProps} min={field.min} max={field.max} />;
      case 'email':
        return <input type="email" {...commonProps} />;
      case 'tel':
        return <input type="tel" {...commonProps} />;
      default:
        return <input type="text" {...commonProps} />;
    }
  };

  return (
    <div className="mb-8 bg-white dark:bg-gray-900 rounded-xl p-6 shadow border dark:border-gray-700 max-w-8xl mx-auto">
      <div className="flex flex-col md:flex-row items-center md:items-center gap-6 md:justify-around md:px-8 h-auto mx-auto">
        {/* Left Side: Profile Info */}
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center mb-4 shadow">
            <i className="fas fa-user text-white text-3xl"></i>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
            {mainDriverInfo.fullName}
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Main Driver</p>
        </div>

        {/* Right Side: Personal Info */}
        <div className="h-auto w-full self-center">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow border dark:border-gray-700 relative">
            {/* Edit button in top-right corner */}
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-green-600 dark:hover:text-green-400 transition"
              onClick={openEdit}
              title="Edit Personal Information"
            >
              <i className="fas fa-pencil-alt"></i>
            </button>
            <h3 className="text-lg font-semibold mb-4 flex items-center text-gray-800 dark:text-white">
              <i className="fas fa-info-circle text-green-400 mr-2"></i> Personal Information
            </h3>

            <div className="flex flex-wrap gap-6 text-sm">
              {mainPersonalInfo.map((item) => (
                <div key={item.key} className="flex items-center gap-3 min-w-[200px]">
                  <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-green-500">
                    <i className={`fas fa-${item.icon} text-sm`}></i>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-wide text-gray-600 dark:text-gray-400">
                      {item.label}
                    </span>
                    <span className="text-sm font-medium text-gray-800 dark:text-white">
                      {item.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


      {/* Edit Modal */}
      {isEditOpen && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          onClick={closeEdit}
        >
          <div
            className="bg-white dark:bg-gray-900 rounded-xl max-w-md w-full p-6 shadow-lg border dark:border-gray-700 border-gray-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-5">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Edit Personal Information
              </h3>
              <button
                onClick={closeEdit}
                className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition"
              >
                <i className="fas fa-times text-xl"></i>
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSubmit}>
              <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-1">
                {mainPersonalInfo.map((field) => (
                  <div key={field.key}>
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                      {field.label}
                      {field.required && (
                        <span className="text-red-500 ml-1">*</span>
                      )}
                    </label>
                    {renderInputField(field)}
                    {formErrors[field.key] && (
                      <p className="mt-1 text-sm text-red-500">
                        {formErrors[field.key]}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-6 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={closeEdit}
                  className="px-4 py-2 border rounded-lg text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                  disabled={isSubmitting}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition flex items-center ${isSubmitting ? 'opacity-70' : ''
                    }`}
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin mr-2"></i>Saving...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-save mr-2"></i>Save Changes
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>

  );
};

const ProfileSubdriver = () => {
  // Use only in-component state, no localStorage
  const [subdrivers, setSubdrivers] = useState(initialSubdrivers);
  const [selectedSubdriverIdx, setSelectedSubdriverIdx] = useState(0);
  const [subdriverDetails, setSubdriverDetails] = useState(initialSubdriverDetails);
  const [subPersonalInfo, setSubPersonalInfo] = useState(defaultPersonalInfo);
  const [subProfileData, setSubProfileData] = useState({
    name: '',
    fullName: '',
    driverId: '',
    rating: 0,
    rides: 0,
    level: '',
    levelNumber: 0,
    progressToNextLevel: 0,
    email: '',
    phone: '',
  });

  // Modal state (shared)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingSection, setEditingSection] = useState(null);
  const [formData, setFormData] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Ratings and stats (shared for all subdrivers)
  const [ratingsBreakdown] = useState(defaultRatingsBreakdown);
  const [stats] = useState(defaultStats);

  // Add state for modal to show subdriver details
  const [showSubdriverModal, setShowSubdriverModal] = useState(false);
  const [modalSubdriverIdx, setModalSubdriverIdx] = useState(null);

  // Track which subdriver is being edited in modal (null = not editing)
  const [modalEditIdx, setModalEditIdx] = useState(null);

  // Remove all useEffect code that reads/writes localStorage
  // Instead, on mount, just set state from initialSubdrivers/initialSubdriverDetails
  useEffect(() => {
    setSelectedSubdriverIdx(0);
  }, []);

  // When selected subdriver changes, update info
  useEffect(() => {
    // No localStorage, just use state
    // ...rest of the logic remains unchanged, but use subdriverDetails from state...
  }, [selectedSubdriverIdx, subdrivers, subdriverDetails]);

  // Modified openEditModal to accept an index (for modal editing)
  const openEditModal = (section, dataArray, idx = selectedSubdriverIdx) => {
    setEditingSection(section);
    const initialFormData = {};
    const initialErrors = {};
    dataArray.forEach((item) => {
      initialFormData[item.key] = item.value || '';
      initialErrors[item.key] = '';
    });
    setFormData(initialFormData);
    setFormErrors(initialErrors);
    setIsModalOpen(true);
    setModalEditIdx(idx); // Track which subdriver is being edited
  };

  // Update handleSubmit to update correct subdriver (selected or modal)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const currentFields = subPersonalInfo;
    if (!validateForm(currentFields)) return;
    setIsSubmitting(true);
    // Subdriver: localStorage update
    const idxToUpdate = modalEditIdx !== null ? modalEditIdx : selectedSubdriverIdx;
    setSubdriverDetails(subdriverDetails.map((item, index) =>
      index === idxToUpdate ? { ...item, ...formData } : item
    ));
    if (idxToUpdate === selectedSubdriverIdx) {
      setSubPersonalInfo(subPersonalInfo.map((item) => ({ ...item, value: formData[item.key] || '' })));
      setSubProfileData((prev) => ({ ...prev, ...formData }));
    }
    setIsSubmitting(false);
    setIsModalOpen(false);
    setModalEditIdx(null);
  };

  // When closing edit modal, reset modalEditIdx
  const closeEditModal = () => {
    setIsModalOpen(false);
    setModalEditIdx(null);
  };

  // Validate form
  const validateForm = (fields) => {
    const errors = {};
    let isValid = true;
    fields.forEach((field) => {
      const rawValue = formData[field.key];
      const value = rawValue != null ? String(rawValue).trim() : '';
      if (field.required && !value) {
        errors[field.key] = `${field.label} is required`;
        isValid = false;
      } else if (field.pattern && value && !field.pattern.test(value)) {
        errors[field.key] = `Invalid ${field.label.toLowerCase()} format`;
        isValid = false;
      } else if (field.type === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        errors[field.key] = 'Please enter a valid email';
        isValid = false;
      } else if (field.type === 'number' && value) {
        const numValue = Number(value);
        if (isNaN(numValue)) {
          errors[field.key] = 'Please enter a valid number';
          isValid = false;
        } else {
          if (field.min !== undefined && numValue < field.min) {
            errors[field.key] = `Minimum value is ${field.min}`;
            isValid = false;
          }
          if (field.max !== undefined && numValue > field.max) {
            errors[field.key] = `Maximum value is ${field.max}`;
            isValid = false;
          }
        }
      }
    });
    setFormErrors(errors);
    return isValid;
  };

  // Render input field
  const renderInputField = (field) => {
    const commonProps = {
      name: field.key,
      value: formData[field.key] || '',
      onChange: handleInputChange,
      className: `w-full dark:bg-gray-800 bg-white border ${formErrors[field.key] ? 'border-red-500' : 'dark:border-gray-700 border-gray-300'} rounded-lg px-4 py-2 dark:text-white text-gray-800 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all`,
      placeholder: `Enter ${field.label.toLowerCase()}`,
      required: field.required,
    };
    switch (field.type) {
      case 'number':
        return <input type="number" {...commonProps} min={field.min} max={field.max} />;
      case 'email':
        return <input type="email" {...commonProps} />;
      case 'tel':
        return <input type="tel" {...commonProps} />;
      default:
        return <input type="text" {...commonProps} />;
    }
  };

  // Helper to open modal for a subdriver
  const openSubdriverModal = (idx) => {
    setModalSubdriverIdx(idx);
    setShowSubdriverModal(true);
  };

  // Helper to close modal
  const closeSubdriverModal = () => {
    setShowSubdriverModal(false);
    setModalSubdriverIdx(null);
  };

  // Handle input change for edit modal
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  // UI
  return (
    <div className="mx-auto p-4 dark:bg-gray-950 bg-gray-50 min-h-screen">
      {/* Main Driver Section */}
      <MainDriverSection />

      {/* Subdriver Cards Grid */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 dark:text-gray-200 text-gray-800">All Subdrivers Profile</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {subdrivers.map((sub, idx) => {
            const details = subdriverDetails[idx] || {};
            return (
              <div
                key={idx}
                className="cursor-pointer bg-white dark:bg-gray-800 rounded-xl shadow p-5 flex flex-col items-center hover:shadow-lg transition border border-gray-200 dark:border-gray-700"
                onClick={() => openSubdriverModal(idx)}
              >
                <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center mb-3">
                  <i className="fas fa-user text-white text-2xl"></i>
                </div>
                <h3 className="font-semibold text-lg dark:text-gray-100 text-gray-800 mb-1">{sub.fullName}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">{details.vehicleType || 'Vehicle'} • {details.licenseNumber || 'License'}</p>
                <div className="flex items-center mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <i key={i} className={`fas fa-star text-sm ${i < Math.round(details.rating || 0) ? 'text-amber-400' : 'text-gray-300 dark:text-gray-700'}`}></i>
                  ))}
                  <span className="ml-2 text-xs text-gray-600 dark:text-gray-300">{details.rating || 0}</span>
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Rides: {details.rides || 0}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Subdriver Profile Modal */}
      {showSubdriverModal && modalSubdriverIdx !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 transition-opacity duration-300" onClick={closeSubdriverModal}>
          <div className="dark:bg-gray-900 bg-white rounded-xl max-w-5xl w-full p-6 border dark:border-gray-700 border-gray-300 relative overflow-y-auto max-h-[90vh]" onClick={e => e.stopPropagation()}>
            <button onClick={closeSubdriverModal} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 dark:hover:text-white text-xl"><i className="fas fa-times"></i></button>
            {/* Profile.jsx style layout for subdriver */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {/* Left Column: Profile Card + Level */}
              <div className="md:col-span-1 space-y-6 md:space-y-8">
                {/* Profile Card */}
                <div className="dark:bg-gray-200/10 bg-white rounded-xl p-6 shadow-sm dark:border-gray-700 border-gray-200 hover:shadow-lg transition-all">
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24 md:w-28 md:h-28 bg-green-600 rounded-full flex items-center justify-center mb-4 shadow-md">
                      <i className="fas fa-user text-white text-4xl md:text-5xl"></i>
                    </div>
                    <h2 className="text-xl font-bold mb-1 dark:text-gray-200 text-gray-800">{subdrivers[modalSubdriverIdx]?.fullName}</h2>
                    <p className="dark:text-gray-400 text-gray-600 mb-4 text-sm">Subdriver ID: {subdriverDetails[modalSubdriverIdx]?.driverId || ''}</p>
                    <div className="flex items-center mb-6">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <i key={i} className={`fas fa-star text-lg mr-1 ${i < Math.round(subdriverDetails[modalSubdriverIdx]?.rating || 0) ? 'text-amber-400' : 'dark:text-gray-600 text-gray-300'}`}></i>
                      ))}
                      <span className="ml-2 font-medium dark:text-gray-300 text-gray-700">{subdriverDetails[modalSubdriverIdx]?.rating || 0} ({subdriverDetails[modalSubdriverIdx]?.rides || 0} rides)</span>
                    </div>
                    <button className="bg-green-600 text-white px-6 py-3 rounded-lg w-full hover:opacity-90 transition-opacity shadow-sm font-medium" onClick={() => openEditModal('personal', defaultPersonalInfo.map((item) => ({ ...item, value: subdriverDetails[modalSubdriverIdx]?.[item.key] || '' })), modalSubdriverIdx)}>Edit Profile</button>
                  </div>
                </div>
                {/* Driver Level */}
                <div className="dark:bg-gray-200/10 bg-white rounded-xl p-6 shadow-sm dark:border-gray-700 border-gray-200 hover:shadow-lg transition-all">
                  <h3 className="text-lg font-semibold mb-4 flex items-center dark:text-gray-200 text-gray-800">
                    <i className={`fas fa-medal text-${getLevelColor(subdriverDetails[modalSubdriverIdx]?.level)} mr-3 text-xl`}></i>{' '}
                    Driver Level
                  </h3>
                  <div className="flex flex-col items-center text-center">
                    <div className={`relative w-20 h-20 md:w-24 md:h-24 dark:bg-amber-100/10 bg-amber-50 rounded-full flex items-center justify-center mb-4 border-4 border-${getLevelColor(subdriverDetails[modalSubdriverIdx]?.level)} shadow-sm`}>
                      <div className={`text-${getLevelColor(subdriverDetails[modalSubdriverIdx]?.level)} font-bold text-lg md:text-xl`}>
                        {subdriverDetails[modalSubdriverIdx]?.level}
                      </div>
                      <div className={`absolute -bottom-2 bg-${getLevelColor(subdriverDetails[modalSubdriverIdx]?.level)} text-white text-xs px-2 py-1 rounded-full`}>
                        Level {subdriverDetails[modalSubdriverIdx]?.levelNumber}
                      </div>
                    </div>
                    <p className="text-sm dark:text-gray-400 text-gray-600 mb-5 text-center">
                      You&#39;re a {subdriverDetails[modalSubdriverIdx]?.level} level driver! Complete 20 more rides this month to reach Platinum.
                    </p>
                    <div className="w-full">
                      <div className="flex justify-between dark:text-gray-400 text-gray-600 text-xs mb-1">
                        <span>Progress to Platinum</span>
                        <span>{subdriverDetails[modalSubdriverIdx]?.progressToNextLevel || 0}%</span>
                      </div>
                      <div className="w-full dark:bg-gray-700 bg-gray-200 rounded-full h-2.5">
                        <div className={`bg-${getLevelColor(subdriverDetails[modalSubdriverIdx]?.level)} h-2.5 rounded-full shadow-sm`} style={{ width: `${subdriverDetails[modalSubdriverIdx]?.progressToNextLevel || 0}%` }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right Column: InfoSection, Ratings, Stats */}
              <div className="md:col-span-2 space-y-6 md:space-y-8">
                {/* Personal Info */}
                <InfoSection
                  title="Driver Information"
                  data={defaultPersonalInfo.map((item) => ({
                    ...item,
                    value: subdriverDetails[modalSubdriverIdx]?.[item.key] || '',
                  }))}
                  icon="info-circle"
                  onEdit={() => openEditModal('personal', defaultPersonalInfo.map((item) => ({ ...item, value: subdriverDetails[modalSubdriverIdx]?.[item.key] || '' })), modalSubdriverIdx)}
                />
                {/* Ratings Breakdown */}
                <div className="dark:bg-gray-200/10 bg-white rounded-xl p-6 shadow-sm dark:border-gray-700 border-gray-200 hover:shadow-lg transition-all">
                  <h3 className="text-lg font-semibold mb-4 flex items-center dark:text-gray-200 text-gray-800">
                    <i className="fas fa-star text-amber-400 mr-3 text-xl"></i>Ratings Breakdown
                  </h3>
                  <div className="space-y-2">
                    {ratingsBreakdown.map((item, idx) => (
                      <div key={idx} className="flex items-center">
                        <span className="w-20 text-xs text-gray-600 dark:text-gray-400">{item.label}</span>
                        <div className="flex-1 mx-2 h-2 rounded-full bg-gray-200 dark:bg-gray-700">
                          <div className={`${item.color} h-2 rounded-full`} style={{ width: `${item.percent}%` }}></div>
                        </div>
                        <span className="w-8 text-xs text-gray-600 dark:text-gray-400">{item.percent}%</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Stats */}
                <div className="dark:bg-gray-200/10 bg-white rounded-xl p-6 shadow-sm dark:border-gray-700 border-gray-200 hover:shadow-lg transition-all">
                  <h3 className="text-lg font-semibold mb-4 flex items-center dark:text-gray-200 text-gray-800">
                    <i className="fas fa-chart-bar text-blue-400 mr-3 text-xl"></i>Performance Stats
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {stats.map((stat, idx) => (
                      <Stat key={idx} {...stat} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 transition-opacity duration-300" onClick={() => { if (!isSubmitting) closeEditModal(); }}>
          <div className="dark:bg-gray-900 bg-white rounded-xl max-w-md w-full p-6 border dark:border-gray-700 border-gray-300 transform transition-all duration-300 scale-95 opacity-0 animate-[modalEnter_0.3s_ease-out_forwards]" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold dark:text-gray-200 text-gray-800">Edit Personal Information</h3>
              <button onClick={() => { if (!isSubmitting) closeEditModal(); }} className="dark:text-gray-400 text-gray-600 hover:dark:text-white hover:text-gray-800 transition-colors" disabled={isSubmitting}>
                <i className="fas fa-times text-xl"></i>
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                {subPersonalInfo.map((field) => (
                  <div key={field.key} className="mb-4">
                    <label className="block text-sm font-medium dark:text-gray-400 text-gray-600 mb-1">{field.label}{field.required && <span className="text-red-500 ml-1">*</span>}</label>
                    {renderInputField(field)}
                    {formErrors[field.key] && (<p className="mt-1 text-sm text-red-500">{formErrors[field.key]}</p>)}
                  </div>
                ))}
              </div>
              <div className="mt-6 flex justify-end space-x-3">
                <button type="button" onClick={closeEditModal} className="px-4 py-2 rounded-lg border dark:border-gray-600 border-gray-300 dark:text-gray-300 text-gray-700 hover:dark:bg-gray-800 hover:bg-gray-100 transition-colors" disabled={isSubmitting}>Cancel</button>
                <button type="submit" className={`px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors flex items-center ${isSubmitting ? 'opacity-70' : ''}`} disabled={isSubmitting}>{isSubmitting ? (<><i className="fas fa-spinner fa-spin mr-2"></i>Saving...</>) : (<><i className="fas fa-save mr-2"></i>Save Changes</>)}</button>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* Modal enter animation */}
      <style jsx>{`
        @keyframes modalEnter {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

// ProfileSection: shared for subdriver (edit button optional)
const ProfileSection = ({ profileData, personalInfo, openEditModal, ratingsBreakdown, stats, getLevelColor, showEdit = true }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
    {/* Left Column */}
    <div className="md:col-span-1 space-y-6 md:space-y-8">
      {/* Profile Card */}
      <div className="dark:bg-gray-200/10 bg-white rounded-xl p-6 shadow-sm dark:border-gray-700 border-gray-200 hover:shadow-lg transition-all">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 md:w-28 md:h-28 bg-green-600 rounded-full flex items-center justify-center mb-4 shadow-md">
            <i className="fas fa-user text-white text-4xl md:text-5xl"></i>
          </div>
          <h2 className="text-xl font-bold mb-1 dark:text-gray-200 text-gray-800">{profileData.name}</h2>
          <p className="dark:text-gray-400 text-gray-600 mb-4 text-sm">Subdriver ID: {profileData.driverId}</p>
          <div className="flex items-center mb-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <i key={i} className={`fas fa-star text-lg mr-1 ${i < Math.round(profileData.rating) ? 'text-amber-400' : 'dark:text-gray-600 text-gray-300'}`}></i>
            ))}
            <span className="ml-2 font-medium dark:text-gray-300 text-gray-700">{profileData.rating} ({profileData.rides} rides)</span>
          </div>
          {showEdit && <button className="bg-green-600 text-white px-6 py-3 rounded-lg w-full hover:opacity-90 transition-opacity shadow-sm font-medium" onClick={openEditModal}>Edit Profile</button>}
        </div>
      </div>
      {/* Subdriver Level */}
      <div className="dark:bg-gray-200/10 bg-white rounded-xl p-6 shadow-sm dark:border-gray-700 border-gray-200 hover:shadow-lg transition-all">
        <h3 className="text-lg font-semibold mb-4 flex items-center dark:text-gray-200 text-gray-800">
          <i className={`fas fa-medal text-${getLevelColor(profileData.level)} mr-3 text-xl`}></i>{' '}
          Driver Level
        </h3>
        <div className="flex flex-col items-center text-center">
          <div className={`relative w-20 h-20 md:w-24 md:h-24 dark:bg-amber-100/10 bg-amber-50 rounded-full flex items-center justify-center mb-4 border-4 border-${getLevelColor(profileData.level)} shadow-sm`}>
            <div className={`text-${getLevelColor(profileData.level)} font-bold text-lg md:text-xl`}>
              {profileData.level}
            </div>
            <div className={`absolute -bottom-2 bg-${getLevelColor(profileData.level)} text-white text-xs px-2 py-1 rounded-full`}>
              Level {profileData.levelNumber}
            </div>
          </div>
          <p className="text-sm dark:text-gray-400 text-gray-600 mb-5 text-center">
            You&#39;re a {profileData.level} level driver! Complete 20 more rides this month to reach Platinum.
          </p>
          <div className="w-full">
            <div className="flex justify-between dark:text-gray-400 text-gray-600 text-xs mb-1">
              <span>Progress to Platinum</span>
              <span>{profileData.progressToNextLevel}%</span>
            </div>
            <div className="w-full dark:bg-gray-700 bg-gray-200 rounded-full h-2.5">
              <div className={`bg-${getLevelColor(profileData.level)} h-2.5 rounded-full shadow-sm`} style={{ width: `${profileData.progressToNextLevel}%` }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Right Column */}
    <div className="md:col-span-2 space-y-6 md:space-y-8">
      {/* Personal Info */}
      <InfoSection title="Driver Information" data={personalInfo} icon="info-circle" onEdit={showEdit ? openEditModal : undefined} showEdit={showEdit} />
      {/* Ratings Breakdown */}
      <div className="dark:bg-gray-200/10 bg-white rounded-xl p-6 shadow-sm dark:border-gray-700 border-gray-200 hover:shadow-lg transition-all">
        <h3 className="text-lg font-semibold mb-4 flex items-center dark:text-gray-200 text-gray-800">
          <i className="fas fa-star text-amber-400 mr-3 text-xl"></i>Ratings Breakdown
        </h3>
        <div className="space-y-2">
          {ratingsBreakdown.map((item, idx) => (
            <div key={idx} className="flex items-center">
              <span className="w-20 text-xs text-gray-600 dark:text-gray-400">{item.label}</span>
              <div className="flex-1 mx-2 h-2 rounded-full bg-gray-200 dark:bg-gray-700">
                <div className={`${item.color} h-2 rounded-full`} style={{ width: `${item.percent}%` }}></div>
              </div>
              <span className="w-8 text-xs text-gray-600 dark:text-gray-400">{item.percent}%</span>
            </div>
          ))}
        </div>
      </div>
      {/* Stats */}
      <div className="dark:bg-gray-200/10 bg-white rounded-xl p-6 shadow-sm dark:border-gray-700 border-gray-200 hover:shadow-lg transition-all">
        <h3 className="text-lg font-semibold mb-4 flex items-center dark:text-gray-200 text-gray-800">
          <i className="fas fa-chart-bar text-blue-400 mr-3 text-xl"></i>Performance Stats
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {stats.map((stat, idx) => (
            <Stat key={idx} {...stat} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

// InfoSection component (No changes needed here)
const InfoSection = ({ title, data, icon, onEdit, showEdit }) => (
  <div className="dark:bg-gray-200/10 bg-white rounded-xl p-6 shadow-sm dark:border-gray-700 border-gray-200 hover:shadow-lg transition-all hover:scale-[1.01]">
    <div className="flex justify-between items-center mb-6">
      <h3 className="text-xl font-semibold dark:text-gray-200 text-gray-800 flex items-center">{icon && <i className={`fas fa-${icon} text-green-400 mr-3 text-lg`}></i>}{title}</h3>
      {showEdit && <button onClick={onEdit} className="text-green-400 hover:text-green-300 text-sm font-medium flex items-center"><i className="fas fa-pencil-alt mr-2"></i> Edit</button>}
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-sm">{data.map((item) => (<Info key={item.key} {...item} />))}</div>
  </div>
);

// Info component (No changes needed here)
const Info = ({ label, value, icon }) => (
  <div className="flex items-start gap-3 md:gap-4">
    <div className="p-2 rounded-lg dark:bg-gray-800 bg-gray-100 text-green-500"><i className={`fas fa-${icon} text-sm`}></i></div>
    <div className="flex flex-col"><span className="text-xs uppercase tracking-wide dark:text-gray-400 text-gray-600 text-start">{label}</span><span className="mt-0.5 text-sm font-medium dark:text-white text-gray-800">{value}</span></div>
  </div>
);

// Stat component (No changes needed here)
const Stat = ({ label, value, className = '', icon }) => (
  <div className="flex justify-between items-center mb-3 p-3 dark:bg-gray-800 bg-gray-100 rounded-lg hover:shadow transition">
    <div className="flex items-center"><i className={`fas fa-${icon} dark:text-gray-400 text-gray-600 mr-3 text-sm`}></i><span className="dark:text-gray-300 text-gray-700 text-sm">{label}</span></div>
    <span className={`font-medium ${className}`}>{value}</span>
  </div>
);

export default ProfileSubdriver;
