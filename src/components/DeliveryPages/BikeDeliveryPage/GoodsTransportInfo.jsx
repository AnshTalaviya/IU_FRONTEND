import React, { useState } from 'react';

const GoodsTransportInfo = () => {
  const [showFull, setShowFull] = useState(false);

  return (
    <section className="bg-white dark:bg-gray-900 dark:text-gray-300 text-gray-800 py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Always visible summary */}
        <div>
          <h3 className="text-green-400 text-3xl font-bold mb-4 text-center">
            Quick Goods Delivery Services by Two-Wheelers in Your City
          </h3>
          <p className="mb-4">
            Navigating city traffic can be tough, but sending light goods doesn’t have to be. With IdharUdhar's
            two-wheeler delivery, you can enjoy quick, affordable and reliable consignment pickups right from your
            doorstep.
            {!showFull && (
              <span
                onClick={() => setShowFull(true)}
                className="ml-2 text-sm text-green-400 cursor-pointer underline hover:text-green-300"
              >
                Know More
              </span>
            )}
          </p>
        </div>

        {/* Conditionally rendered full content */}
        {showFull && (
          <>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-green-400 text-center">
                Easy Pickup and Drop for Light Goods by IdharUdhar Two-Wheelers
              </h3>
              <p className="mb-3">
                Tired of unreliable courier options? Choose IdharUdhar two-wheelers for fast and secure delivery of
                light goods such as parcels, documents, small packages, or even forgotten keys.
              </p>
              <p className="mb-3">
                IdharUdhar’s two-wheeler delivery services support consignments up to <strong>20 kg</strong>. Book a
                rider within minutes using the IdharUdhar app, and get your item delivered across the city with ease.
              </p>
              <p>
                Whether you're a business or an individual, our door-to-door service ensures your delivery reaches on
                time, safely and affordably.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-green-400 text-center">
                Why Choose IdharUdhar for Two-Wheeler Delivery?
              </h3>
              <p className="mb-4">
                Our bike delivery service is designed to handle urgent, on-demand deliveries with speed and efficiency.
              </p>
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  <span className="font-semibold text-gray-900 dark:text-gray-200">Cost-effective:</span> Delivery starts at just ₹52.5 for 1 km and 25 minutes of delivery time.
                </li>
                <li>
                  <span className="font-semibold text-gray-900 dark:text-gray-200">Convenient:</span> Book and track your rider with live status via the IdharUdhar app.
                </li>
                <li>
                  <span className="font-semibold text-gray-900 dark:text-gray-200">Reliable & Fast:</span> Riders are available in under 10 minutes for urgent consignments.
                </li>
              </ol>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-green-400 text-center">
                How to Book a Two-Wheeler Delivery on IdharUdhar
              </h3>
              <p className="mb-3">
                Use these steps to send lightweight consignments within your city quickly:
              </p>
              <ol className="list-decimal list-inside space-y-2 mb-4">
                <li>Open the IdharUdhar app and select the “Two-Wheeler” option</li>
                <li>Enter pickup and drop-off locations with contact details</li>
                <li>Add any extra stops if required</li>
                <li>Select the goods category (optional)</li>
                <li>Choose payment method – Cash, Credit, or UPI</li>
                <li>Apply any coupon and confirm your booking</li>
              </ol>

              <p className="mb-3">
                IdharUdhar's Two-Wheeler Consignment Delivery is your trusted partner for fast, and efficient
                city-wide transport.
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
