import React, { useEffect, useState } from "react";

export default function Preloader({ onComplete }) {
  const [showText, setShowText] = useState(false);
  const [hideRoad, setHideRoad] = useState(false);
  const [showFinalCar, setShowFinalCar] = useState(false);

  useEffect(() => {
    const textTimer = setTimeout(() => {
      setShowText(true);
      setHideRoad(true);
      setShowFinalCar(true);
    }, 4000);

    const finalCarTimer = setTimeout(() => {
      setShowFinalCar(true);
    }, 6100);


    const finishTimer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 6000);
    return () => {
      clearTimeout(textTimer);
      clearTimeout(finalCarTimer);
      clearTimeout(finishTimer);
    };
  }, [onComplete]);

  const MotionLines = () => (
    <div className="relative flex -ml-8 -mr-8 space-y-1 flex-col">
      <div className="w-6 h-0.5 bg-white/90 rounded animate-trail-line1" />
      <div className="w-4 h-0.5 bg-white/60 rounded animate-trail-line2" />
      <div className="w-3 h-0.5 bg-white/40 rounded animate-trail-line3" />
    </div>
  );

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center z-50">
      {/* Road Line */}
      <div
        className={`absolute bottom-[40%] w-full h-3 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full shadow-lg overflow-hidden transition-opacity duration-1000 ${hideRoad ? "animate-road-out" : ""
          }`}
      >
        <div className="absolute top-1/2 left-0 w-full h-1 border-t-2 border-dashed border-white/50 transform -translate-y-1/2" />
      </div>

      {/* First Car (rides full) */}
      {!showText && (
        <div className="absolute bottom-[43%] left-[-120px] animate-move-car flex items-center z-20">
          <MotionLines />
          <CarSVG />
        </div>
      )}

      {/* Text and Final Car together */}
      {showText && (
        <div className="absolute z-30 bottom-[40%] flex flex-col items-center justify-center md:flex-row md:space-x-4">
          {showFinalCar && (
            <div className="flex items-center animate-car-to-text">
              <MotionLines />
              <CarSVG />
            </div>
          )}
          <h1 className="text-white font-mono text-5xl md:text-6xl font-black animate-idhar-appear mt-4 md:mt-0">

            Idhar<span className="text-green-400 font-mono">Udhar</span>
          </h1>
        </div>
      )}
    </div>
  );
}

function CarSVG() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="102" height="40">
      <g
        transform="translate(2 1)"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="white"
      >
        <path
          className="animate-shake"
          d="M47.293 2.375C52.927.792 54.017.805 54.017.805c2.613-.445 6.838-.337 9.42.237l8.381 1.863c2.59.576 6.164 2.606 7.98 4.531l6.348 6.732 6.245 1.877c3.098.508 5.609 3.431 5.609 6.507v4.206c0 .29-2.536 4.189-5.687 4.189H36.808c-2.655 0-4.34-2.1-3.688-4.67 0 0 3.71-19.944 14.173-23.902zM36.5 15.5h54.01"
          strokeWidth="3"
        />
        <ellipse strokeWidth="3.2" fill="white" cx="83.493" cy="30.25" rx="6.922" ry="6.808" />
        <ellipse strokeWidth="3.2" fill="white" cx="46.511" cy="30.25" rx="6.922" ry="6.808" />
      </g>
    </svg>
  );
}