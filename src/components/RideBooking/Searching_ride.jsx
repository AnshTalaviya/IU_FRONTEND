// import io from 'socket.io-client';

// const socket = io(import.meta.env.VITE_BACKEND_URL);
// useEffect(() => {
//     socket.on('driverMatched', (data) => {
//         console.log('Driver matched:', data);
//         navigate('/ride-otp', { state: { ride: data } });
//     });

//     return () => {
//         socket.off('driverMatched');
//     };
// }, [navigate]);

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Searching_ride() {
  const navigate = useNavigate();
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => (prev.length >= 3 ? '' : prev + '.'));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // ⏱ Redirect to /ride-tracking after 30s
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/ride-tracking');
    }, 10000);
    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white relative overflow-hidden">
      <style>{`
        @keyframes drive {
          0% { left: -150px; }
          45% { left: 50%; transform: translateX(-50%); }
          55% { left: 50%; transform: translateX(-50%); }
          100% { left: 100%; }
        }
        .animate-drive {
          animation: drive 6s linear infinite;
        }
        .highway {
          position: relative;
          width: 100%;
          height: 80px;
          background-color: #2e2e2e;
          border-radius: 10px;
          overflow: hidden;
        }
        .center-line {
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 4px;
          transform: translateY(-50%);
          background-image: repeating-linear-gradient(
            to right,
            white,
            white 20px,
            transparent 20px,
            transparent 40px
          );
          opacity: 0.8;
        }
      `}</style>

      {/* Road */}
      <div className="relative w-full max-w-xs mb-6">
        <div className="highway">
          <div className="center-line" />
        </div>

        {/* Car */}
        <div className="absolute top-[18px] animate-drive">
          <svg
            className="w-[22vw] max-w-[120px] h-auto min-w-[70px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 102 40"
          >
            <g
              transform="translate(2 1)"
              fill="none"
              fillRule="evenodd"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="white"
            >
              <path
                d="M47.293 2.375C52.927.792 54.017.805 54.017.805c2.613-.445 6.838-.337 9.42.237l8.381 1.863c2.59.576 6.164 2.606 7.98 4.531l6.348 6.732 6.245 1.877c3.098.508 5.609 3.431 5.609 6.507v4.206c0 .29-2.536 4.189-5.687 4.189H36.808c-2.655 0-4.34-2.1-3.688-4.67 0 0 3.71-19.944 14.173-23.902zM36.5 15.5h54.01"
                strokeWidth="3"
              />
              <ellipse
                strokeWidth="3.2"
                fill="white"
                cx="83.493"
                cy="30.25"
                rx="6.922"
                ry="6.808"
              />
              <ellipse
                strokeWidth="3.2"
                fill="white"
                cx="46.511"
                cy="30.25"
                rx="6.922"
                ry="6.808"
              />
            </g>
          </svg>
        </div>
      </div>

      {/* Text */}
      <h2 className="text-xl font-semibold mb-2">
        Finding a driver{dots}
      </h2>
      <p className="text-gray-400 text-sm">
        Hold tight! We’re looking for the best nearby driver for you.
      </p>
    </div>
  );
}

export default Searching_ride;
