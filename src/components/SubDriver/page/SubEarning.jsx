// Earnings.jsx
import { useState, useEffect } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const subdriverEarningsData = {
  week: [
    { name: 'Akash', earnings: 142 },
    { name: 'Ravi', earnings: 130 },
    { name: 'Mehul', earnings: 110 },
    { name: 'Raju', earnings: 105 },
    { name: 'Nayan', earnings: 97 },
  ],
  month: [
    { name: 'Akash', earnings: 480 },
    { name: 'Ravi', earnings: 450 },
    { name: 'Mehul', earnings: 420 },
    { name: 'Raju', earnings: 390 },
    { name: 'Nayan', earnings: 375 },
  ],
  year: [
    { name: 'Akash', earnings: 5520 },
    { name: 'Ravi', earnings: 5380 },
    { name: 'Mehul', earnings: 4990 },
    { name: 'Raju', earnings: 4750 },
    { name: 'Nayan', earnings: 4555 },
  ]
};

const earningsData = {
  week: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    earnings: [65.50, 85.25, 72.75, 90.00, 120.50, 145.75, 110.25],
    rides: [5, 7, 6, 7, 9, 12, 8]
  },
  month: {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    earnings: [420.50, 385.75, 510.25, 470.50],
    rides: [35, 30, 42, 38]
  },
  year: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    earnings: [1200.50, 1350.75, 1420.25, 1280.00, 1500.50, 1600.75, 1550.25, 1400.50, 1450.75, 1380.25, 1600.50, 1800.75],
    rides: [95, 105, 110, 100, 115, 125, 120, 110, 115, 105, 130, 145]
  }
};

// Generate daily data for custom date range
const generateDailyData = (startDate, endDate) => {
  const days = [];
  const currentDate = new Date(startDate);
  
  while (currentDate <= endDate) {
    days.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return {
    labels: days.map(date => date.toLocaleDateString('en-US', { weekday: 'short' })),
    earnings: days.map(() => Math.random() * 200 + 50), // Random earnings between 50 and 250
    rides: days.map(() => Math.floor(Math.random() * 10) + 3) // Random rides between 3 and 12
  };
};

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount).replace('₹', '₹');
};

const CashoutModal = ({ availableAmount, onClose, onCashout }) => {
  const [selectedMethod, setSelectedMethod] = useState('bank');
  const [amount, setAmount] = useState(availableAmount.toFixed(2));
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleAmountChange = (e) => {
    const value = e.target.value;
    if (value === '') {
      setAmount('');
      return;
    }
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      setAmount(Math.min(availableAmount, numValue).toFixed(2));
    }
  };

  const handleCashout = () => {
    setIsProcessing(true);
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      setTimeout(() => {
        onCashout(parseFloat(amount || 0));
        onClose();
      }, 1500);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full">
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
              <i className="fas fa-check text-green-600 text-xl"></i>
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mt-3">Cashout Successful!</h3>
            <div className="mt-2">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {formatCurrency(amount)} has been successfully transferred to your {selectedMethod === 'bank' ? 'bank account' : 'Razorpay account'}.
              </p>
            </div>
            <div className="mt-5">
              <button
                type="button"
                onClick={onClose}
                className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-orange-600 text-base font-medium text-white hover:bg-orange-700 focus:outline-none sm:text-sm"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Cash Out</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <i className="fas fa-times"></i>
          </button>
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Available Amount
          </label>
          <div className="relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">₹</span>
            </div>
            <input
              type="number"
              value={amount}
              onChange={handleAmountChange}
              onBlur={() => {
                if (amount === '') {
                  setAmount(availableAmount.toFixed(2));
                }
              }}
              max={availableAmount}
              step="0.01"
              className="focus:ring-orange-500 focus:border-orange-500 block w-full pl-7 pr-12 py-2 sm:text-sm border-gray-300 dark:bg-gray-700 dark:border-gray-600 rounded-md"
              placeholder={availableAmount.toFixed(2)}
            />
            <div className="absolute inset-y-0 right-0 flex items-center">
              <button 
                onClick={() => setAmount(availableAmount.toFixed(2))}
                className="text-xs bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded mr-2"
              >
                MAX
              </button>
            </div>
          </div>
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
            Maximum amount: {formatCurrency(availableAmount)}
          </p>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Payment Method
          </label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setSelectedMethod('bank')}
              className={`p-3 border rounded-md flex items-center justify-center ${selectedMethod === 'bank' ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/20' : 'border-gray-300 dark:border-gray-600'}`}
            >
              <i className={`fas fa-university mr-2 ${selectedMethod === 'bank' ? 'text-orange-500' : 'text-gray-400'}`}></i>
              <span className={selectedMethod === 'bank' ? 'text-orange-500 font-medium' : 'text-gray-700 dark:text-gray-300'}>Bank Account</span>
            </button>
            <button
              type="button"
              onClick={() => setSelectedMethod('razorpay')}
              className={`p-3 border rounded-md flex items-center justify-center ${selectedMethod === 'razorpay' ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/20' : 'border-gray-300 dark:border-gray-600'}`}
            >
              <i className={`fas fa-wallet mr-2 ${selectedMethod === 'razorpay' ? 'text-orange-500' : 'text-gray-400'}`}></i>
              <span className={selectedMethod === 'razorpay' ? 'text-orange-500 font-medium' : 'text-gray-700 dark:text-gray-300'}>Razorpay</span>
            </button>
          </div>
        </div>

        {selectedMethod === 'bank' && (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Bank Account Details
            </label>
            <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-md">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-2">
                  <i className="fas fa-university text-blue-500 text-sm"></i>
                </div>
                <div>
                  <p className="text-sm font-medium">HDFC Bank</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">XXXXXX7890</p>
                </div>
              </div>
              <button className="text-xs text-orange-600 dark:text-orange-400">Change Account</button>
            </div>
          </div>
        )}

        {selectedMethod === 'razorpay' && (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Razorpay Account
            </label>
            <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-md">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mr-2">
                  <i className="fas fa-wallet text-purple-500 text-sm"></i>
                </div>
                <div>
                  <p className="text-sm font-medium">Razorpay Wallet</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Connected</p>
                </div>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                Amount will be transferred to your registered Razorpay account instantly.
              </p>
            </div>
          </div>
        )}

        <div className="mt-6">
          <button
            onClick={handleCashout}
            disabled={isProcessing || !amount || parseFloat(amount) <= 0}
            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none ${(isProcessing || !amount || parseFloat(amount) <= 0) ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isProcessing ? (
              <>
                <i className="fas fa-spinner fa-spin mr-2"></i> Processing...
              </>
            ) : (
              `Withdraw ${formatCurrency(amount || 0)}`
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

const SubEarning = () => {
  const [timeFrame, setTimeFrame] = useState('week');
  const [showCashoutModal, setShowCashoutModal] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  
  // Initialize with default data
  const [currentData, setCurrentData] = useState(earningsData.week);
  const [totalEarnings, setTotalEarnings] = useState(
    earningsData.week.earnings.reduce((a, b) => a + b, 0)
  );

  useEffect(() => {
    if (timeFrame === 'custom') {
      const customData = generateDailyData(startDate, endDate);
      setCurrentData(customData);
      setTotalEarnings(customData.earnings.reduce((a, b) => a + b, 0));
    } else {
      const selectedData = earningsData[timeFrame];
      setCurrentData(selectedData);
      setTotalEarnings(selectedData.earnings.reduce((a, b) => a + b, 0));
    }
  }, [timeFrame, startDate, endDate]);

  const handleDateRangeSelect = () => {
    setTimeFrame('custom');
    setShowDatePicker(false);
  };

  const totalRides = currentData.rides.reduce((a, b) => a + b, 0);
  const avgPerRide = totalRides > 0 ? totalEarnings / totalRides : 0;
  const availableForCashOut = totalEarnings * 0.9;

  const handleCashout = (amount) => {
    setTotalEarnings(prev => prev - amount / 0.9); // Adjust total earnings after cashout
  };

  // Prevent body scroll when date picker is open
  useEffect(() => {
    if (showDatePicker) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showDatePicker]);

  return (
    <div className="min-h-screen p-4 mt-14 sm:p-6 dark:bg-gray-950 bg-gray-50 text-gray-800 dark:text-white">
      {showCashoutModal && (
        <CashoutModal
          availableAmount={availableForCashOut}
          onClose={() => setShowCashoutModal(false)}
          onCashout={handleCashout}
        />
      )}
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold mb-1">Earnings</h1>
          <p className="text-gray-600 dark:text-gray-400">Track your performance and income</p>
        </div>
        <div className="flex gap-3 mt-4 sm:mt-0">
          <select
            value={timeFrame}
            onChange={(e) => {
              setTimeFrame(e.target.value);
              if (e.target.value !== 'custom') {
                setShowDatePicker(false);
              }
            }}
            className="dark:bg-gray-800 bg-white dark:border-gray-700 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
          >
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="year">This Year</option>
            <option value="custom">Custom Date Range</option>
          </select>
          {timeFrame === 'custom' && (
            <div className="relative">
              <button
                onClick={() => setShowDatePicker(!showDatePicker)}
                className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white px-4 py-2 rounded-lg transition-all flex items-center"
              >
                <i className="fas fa-calendar-alt mr-2"></i>
                Select Dates
              </button>
              {showDatePicker && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 max-w-md w-full mx-4">
                    <div className="flex flex-col sm:flex-row gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Start Date
                        </label>
                        <DatePicker
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          selectsStart
                          startDate={startDate}
                          endDate={endDate}
                          className="dark:bg-gray-700 dark:border-gray-600 border border-gray-300 rounded-md px-3 py-2 focus:outline-none w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          End Date
                        </label>
                        <DatePicker
                          selected={endDate}
                          onChange={(date) => setEndDate(date)}
                          selectsEnd
                          startDate={startDate}
                          endDate={endDate}
                          minDate={startDate}
                          className="dark:bg-gray-700 dark:border-gray-600 border border-gray-300 rounded-md px-3 py-2 focus:outline-none w-full"
                        />
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setShowDatePicker(false)}
                        className="flex-1 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white px-4 py-2 rounded-md"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleDateRangeSelect}
                        className="flex-1 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
          <button
            onClick={() => setShowCashoutModal(true)}
            className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg transition-all"
          >
            <i className="fas fa-credit-card mr-2" />Cash Out
          </button>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Total Earnings */}
        <div className="bg-white dark:bg-gray-200/10 p-6 rounded-lg hover:shadow transition-all">
          <div className="flex items-center gap-2 mb-2">
            <div className="bg-orange-600 p-2 rounded-full">
              <i className="fas fa-money-bill-wave text-white" />
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-400">Total Earnings</span>
          </div>
          <div className="text-2xl text-white font-bold">{formatCurrency(totalEarnings)}</div>
          <div className="text-xs text-gray-400 dark:text-gray-500">{totalRides} trips</div>
        </div>

        {/* Available for Cashout */}
        <div className="bg-white dark:bg-gray-200/10 p-6 rounded-lg hover:shadow transition-all">
          <div className="flex items-center gap-2 mb-2">
            <div className="bg-blue-400/20 p-2 rounded-full">
              <i className="fas fa-wallet text-blue-400" />
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-400">Available for Cashout</span>
          </div>
          <div className="text-2xl text-white font-bold">{formatCurrency(availableForCashOut)}</div>
          <div className="text-xs text-white flex items-center gap-1">
            <i className="fas fa-bolt" /> Instant Transfer Available
          </div>
        </div>

        {/* Avg Per Ride */}
        <div className="bg-white dark:bg-gray-200/10 p-6 rounded-lg hover:shadow transition-all">
          <div className="flex items-center gap-2 mb-2">
            <div className="bg-yellow-400/20 p-2 rounded-full">
              <i className="fas fa-chart-line text-yellow-400" />
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-400">Avg Per Trip</span>
          </div>
          <div className="text-2xl text-white font-bold">{formatCurrency(avgPerRide)}</div>
          <div className="text-xs text-gray-400 dark:text-gray-500">
            Based on {timeFrame === 'custom' ? 'selected date range' : `${timeFrame} data`}
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white dark:bg-gray-200/10 p-6 rounded-lg mb-6 hover:shadow transition-all">
        <div className="mb-4">
          <h3 className="font-semibold text-lg mb-1">Earnings Chart</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {timeFrame === 'custom' 
              ? `From ${startDate.toLocaleDateString()} to ${endDate.toLocaleDateString()}`
              : `${timeFrame.charAt(0).toUpperCase() + timeFrame.slice(1)} Overview`}
          </p>
        </div>
        <div className="w-full h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={currentData.labels.map((label, idx) => ({
                name: timeFrame === 'custom' ? 
                  new Date(startDate.getTime() + idx * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { day: 'numeric', month: 'short' }) : 
                  label,
                earnings: currentData.earnings[idx],
              }))}
            >
              <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} vertical={false} />
              <XAxis dataKey="name" stroke="#888" />
              <YAxis stroke="#888" tickFormatter={(val) => `₹${val.toFixed(2)}`} />
              <Tooltip 
                formatter={(value) => [`₹${value.toFixed(2)}`, 'Earnings']}
                labelFormatter={(label) => `${label}`}
              />
              <Bar dataKey="earnings" fill="orange" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Subdriver Earnings */}
      <div className="bg-white dark:bg-gray-200/10 p-6 rounded-lg hover:shadow transition-all">
        <h3 className="font-semibold text-lg mb-4">Top 5 Subriders</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {subdriverEarningsData[timeFrame === 'custom' ? 'week' : timeFrame].map((driver, idx) => (
            <div key={idx} className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 hover:shadow transition-all">
              <div className="font-semibold text-lg">{driver.name}</div>
              <div className="text-white font-bold mt-1 text-xl">{formatCurrency(driver.earnings)}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Subriders Earnings</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubEarning;