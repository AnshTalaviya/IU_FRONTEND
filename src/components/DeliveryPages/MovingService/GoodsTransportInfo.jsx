// import React, { useState } from 'react';

// const GoodsTransportInfo = () => {
//   const [showFull, setShowFull] = useState(false);

//   return (
//     <section className="bg-white dark:bg-gray-900 dark:text-gray-300 text-gray-800 py-12 px-4">
//       <div className="max-w-4xl mx-auto space-y-6">
//         {/* Always visible content */}
//         <div>
//           <h3 className="text-green-400 text-3xl font-bold mb-4 text-center">
//             Professional Packers and Movers Services in Your City
//           </h3>

//           <p className="mb-4">
//             Moving your home or office within the city can be stressful without the right help. IdharUdhar’s professional packers and movers ensure safe and timely relocation with complete peace of mind.
//             {!showFull && (
//               <span
//                 onClick={() => setShowFull(true)}
//                 className="ml-2 text-sm text-green-400 cursor-pointer underline hover:text-green-300"
//               >
//                 Know More
//               </span>
//             )}
//           </p>
//         </div>

//         {/* Conditionally rendered full content */}
//         {showFull && (
//           <>
//             <div>
//               <h3 className="text-lg font-semibold mb-2 text-green-400 text-center">
//                 Hassle-Free Home & Office Relocation
//               </h3>
//               <p className="mb-3">
//                 IdharUdhar Packers and Movers offer trusted relocation services for both residential and commercial moves. Whether it's a 1BHK flat or a complete office setup, our trained team ensures smooth, damage-free shifting.
//               </p>
//               <p className="mb-3">
//                 Our service includes packing, loading, transportation, unloading, and unpacking. You can rely on us to handle your belongings with care using quality packing materials and professional handling.
//               </p>
//               <p>
//                 From local city moves to short-distance relocations, we make the process stress-free and budget-friendly.
//               </p>
//             </div>

//             <div>
//               <h3 className="text-lg font-semibold mb-2 text-green-400 text-center">
//                 Why Choose IdharUdhar Packers and Movers?
//               </h3>
//               <ol className="list-decimal list-inside space-y-2 mb-4">
//                 <li>
//                   <span className="font-semibold dark:text-gray-200 text-gray-900">Affordable Pricing:</span> Transparent rates starting at just ₹499 depending on the size and distance.
//                 </li>
//                 <li>
//                   <span className="font-semibold dark:text-gray-200 text-gray-900">Full Service:</span> Includes packing, loading, transport, unloading, and even unpacking on request.
//                 </li>
//                 <li>
//                   <span className="font-semibold dark:text-gray-200 text-gray-900">Expert Handling:</span> Our trained crew uses quality packing materials and secure transport methods.
//                 </li>
//               </ol>
//             </div>

//             <div>
//               <h3 className="text-lg font-semibold mb-2 text-green-400 text-center">
//                 How to Book Packers and Movers with IdharUdhar
//               </h3>
//               <p className="mb-3">
//                 Booking a move is simple and quick with the IdharUdhar app. Follow these steps:
//               </p>
//               <ol className="list-decimal list-inside space-y-2 mb-4">
//                 <li>Open the IdharUdhar app and select "Packers and Movers"</li>
//                 <li>Enter current and destination addresses</li>
//                 <li>Specify the items to be moved</li>
//                 <li>Choose your preferred time and date</li>
//                 <li>Select packing options and payment mode</li>
//                 <li>Confirm your booking and relax — we'll handle the rest</li>
//               </ol>

//               <p className="mb-3">
//                 <span className="text-green-400 cursor-pointer">
//                   IdharUdhar Packers and Movers{' '}
//                 </span>
//                 is your dependable partner for local shifting needs — fast, affordable, and professional.
//                 <span
//                   onClick={() => setShowFull(false)}
//                   className="ml-2 text-sm text-green-400 cursor-pointer underline hover:text-green-300"
//                 >
//                   Know Less
//                 </span>
//               </p>
//             </div>
//           </>
//         )}
//       </div>
//     </section>
//   );
// };

// export default GoodsTransportInfo;


import React, { useState } from 'react';

const GoodsTransportInfo = () => {
  const [showFull, setShowFull] = useState(false);

  return (
    <section className="bg-white dark:bg-gray-900 dark:text-gray-300 text-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Always visible content */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-green-400 mb-4 text-center sm:text-center">
            Professional Packers and Movers Services in Your City
          </h3>

          <p className="text-base sm:text-lg leading-relaxed text-justify sm:text-center mb-4">
            Moving your home or office within the city can be stressful without the right help.
            <span className="inline sm:block">
              IdharUdhar’s professional packers and movers ensure safe and timely relocation with complete peace of mind.
              {!showFull && (
                <span
                  onClick={() => setShowFull(true)}
                  className="ml-2 text-sm text-green-400 cursor-pointer underline hover:text-green-300"
                >
                  Know More
                </span>
              )}
            </span>
          </p>
        </div>

        {/* Full content toggle */}
        {showFull && (
          <>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-green-400 text-center">
                Hassle-Free Home & Office Relocation
              </h3>
              <p className="mb-3 text-justify sm:text-center">
                IdharUdhar Packers and Movers offer trusted relocation services for both residential and commercial moves. Whether it's a 1BHK flat or a complete office setup, our trained team ensures smooth, damage-free shifting.
              </p>
              <p className="mb-3 text-justify sm:text-center">
                Our service includes packing, loading, transportation, unloading, and unpacking. You can rely on us to handle your belongings with care using quality packing materials and professional handling.
              </p>
              <p className="text-justify sm:text-center">
                From local city moves to short-distance relocations, we make the process stress-free and budget-friendly.
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-green-400 text-center">
                Why Choose IdharUdhar Packers and Movers?
              </h3>
              <ol className="list-decimal list-inside space-y-2 mb-4 text-left sm:text-center sm:mx-auto sm:max-w-md">
                <li>
                  <span className="font-semibold dark:text-gray-200 text-gray-900">Affordable Pricing:</span> Transparent rates starting at just ₹499 depending on the size and distance.
                </li>
                <li>
                  <span className="font-semibold dark:text-gray-200 text-gray-900">Full Service:</span> Includes packing, loading, transport, unloading, and even unpacking on request.
                </li>
                <li>
                  <span className="font-semibold dark:text-gray-200 text-gray-900">Expert Handling:</span> Our trained crew uses quality packing materials and secure transport methods.
                </li>
              </ol>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-green-400 text-center">
                How to Book Packers and Movers with IdharUdhar
              </h3>
              <p className="mb-3 text-justify sm:text-center">
                Booking a move is simple and quick with the IdharUdhar app. Follow these steps:
              </p>
              <ol className="list-decimal list-inside space-y-2 mb-4 text-left sm:text-center sm:mx-auto sm:max-w-md">
                <li>Open the IdharUdhar app and select "Packers and Movers"</li>
                <li>Enter current and destination addresses</li>
                <li>Specify the items to be moved</li>
                <li>Choose your preferred time and date</li>
                <li>Select packing options and payment mode</li>
                <li>Confirm your booking and relax — we'll handle the rest</li>
              </ol>

              <p className="mb-3 text-justify sm:text-center">
                <span className="text-green-400 font-medium">
                  IdharUdhar Packers and Movers{' '}
                </span>
                is your dependable partner for local shifting needs — fast, affordable, and professional.
                <span
                  onClick={() => setShowFull(false)}
                  className="ml-2 text-sm text-green-400 cursor-pointer underline hover:text-green-300"
                >
                  Know Less
                </span>
              </p>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default GoodsTransportInfo;
