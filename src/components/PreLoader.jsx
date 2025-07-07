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
    <div className="fixed inset-0 w-full h-full bg-black overflow-hidden flex items-center justify-center z-50">
      {/* Center Container */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Road Line */}
        <div
          className={`absolute top-1/2 left-0 w-full h-3 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full shadow-lg overflow-hidden transform -translate-y-1/2 transition-opacity duration-1000 ${hideRoad ? "animate-road-out" : ""
            }`}
        >
          <div className="absolute top-1/2 left-0 w-full h-1 border-t-2 border-dashed border-white/50 transform -translate-y-1/2" />
        </div>

        {/* First Car */}
        {/* First Car */}
        {!showText && (
          <div className="absolute top-1/2 -translate-y-[60%] left-[-120px] animate-move-car flex items-center z-20">
            <MotionLines />
            <CarSVG />
          </div>
        )}

        {/* Text + Final Car */}
        {showText && (
          <div className="absolute top-1/2 left-0 w-full z-30 flex justify-center px-[2vw] text-center -translate-y-[60%]">
            <div className="flex flex-row items-center justify-center space-x-3 max-w-full pl-[3vw]">
              {showFinalCar && (
                <div className="flex items-center animate-car-to-text scale-[1]">
                  <MotionLines />
                  <CarSVG />
                </div>
              )}
              <h1
                className="text-white font-mono font-black animate-idhar-appear whitespace-nowrap"
                style={{
                  fontSize: "clamp(26px, 6vw, 60px)",
                }}
              >
                Idhar<span className="text-orange-600 font-mono">Udhar</span>
              </h1>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

function CarSVG() {
  return (
    <img
  src="/images/Truke.png"
  alt="Truck"
  style={{ filter: 'brightness(0) invert(1)', width: '150px', height: '64px' }}
/>

  );
}
