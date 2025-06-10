import React, { useState } from 'react';

const GoodsTransport = () => {
  const [showFull, setShowFull] = useState(false);

  return (
    <section className="bg-white dark:bg-gray-900 dark:text-gray-300  text-gray-800 py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Always visible content */}
        <div>
          <h3 className="text-green-400 text-3xl font-bold mb-4 text-center">
            Reliable Goods Transportation Services in Your City
          </h3>

          <p className="mb-4">
            Navigating the busy streets of your city, known for its fast-paced lifestyle and traffic, might be
            challenging. But transporting heavy goods across your city can be effortless with IdharUdhar Transport.
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
                Easy Pickup and Delivery Services by IdharUdhar Mini Trucks
              </h3>
              <p className="mb-3">
                If you're tired of finding reliable goods pickup and delivery services, choose IdharUdhar Mini Trucks.
              </p>
              <p className="mb-3">
                IdharUdhar's goods transport in your city can handle deliveries up to 700 kg, ideal for shifting
                equipment, furniture, or bulk supplies. Book our on-demand logistics service through the IdharUdhar app
                in minutes. Once you book, our trusted driver-partner will arrive for a secure pickup and delivery.
              </p>
              <p>
                Our full-service solution caters to both individuals and businesses, making goods transportation
                seamless and dependable.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-green-400 text-center">
                Choose IdharUdhar Transport for Mini Truck Services in Your City
              </h3>
              <p className="mb-4">
                Enjoy hassle-free mini truck logistics in your city with IdharUdhar Transport. We offer affordable,
                flexible, and trustworthy transport services for all your delivery needs.
              </p>
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  <span className="font-semibold dark:text-gray-200  text-gray-900">Affordable:</span> Our mini truck services start at just ₹150,
                  covering 2 km and 30 minutes of loading time.
                </li>
                <li>
                  <span className="font-semibold dark:text-gray-200  text-gray-900">Convenient:</span> Book and track your delivery through the
                  IdharUdhar app in just a few clicks.
                </li>
                <li>
                  <span className="font-semibold  dark:text-gray-200  text-gray-900">Reliable & Efficient:</span> Our trained driver-partners ensure
                  safe and timely deliveries every time.
                </li>
              </ol>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-green-400 text-center">
                How to Book a Mini Truck with IdharUdhar in Your City
              </h3>
              <p className="mb-3">
                IdharUdhar makes it simple to send heavy consignments with mini trucks. Here's how to book:
              </p>
              <ol className="list-decimal list-inside space-y-2 mb-4">
                <li>Open the IdharUdhar app and select the Mini Truck option</li>
                <li>Enter pickup and drop-off locations, along with contact details</li>
                <li>Add additional stops if required</li>
                <li>Select the type of goods being transported</li>
                <li>Choose a payment method – Cash, Credit, or UPI</li>
                <li>Apply any discounts or coupons and confirm the booking</li>
              </ol>

              <p className="mb-3">
                <span className="text-green-400  cursor-pointer">
                  IdharUdhar Mini Truck{' '}
                </span>
                Transport is your trusted solution for quick and reliable goods delivery within your city.
                <span
                  onClick={() => setShowFull(false)}
                  className=" ml-2 text-sm text-green-400 cursor-pointer underline hover:text-green-300 ml-1"
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

export default GoodsTransport;
