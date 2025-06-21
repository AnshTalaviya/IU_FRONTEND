import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaCar,
  FaMotorcycle,
  FaShuttleVan,
  FaMapMarkedAlt,
} from 'react-icons/fa';
import { PiVanLight } from 'react-icons/pi';

const services = [
  {
    title: 'Car Ride',
    icon: <FaCar size={36} />,
    subtitle: 'Comfortable city travel',
    description:
      'Experience hassle-free travel with our well-maintained cars and trained drivers. Ideal for everyday city commutes, meetings, and airport transfers.',
    features: [
      'AC & Non-AC options',
      'Verified drivers with local expertise',
      'Live GPS tracking for safety',
      'Flexible online and cash payments',
    ],
    tags: ['Safe', 'Fast', 'Everyday', 'Affordable'],
  },
  {
    title: 'Rentals',
    icon: <FaShuttleVan size={36} />,
    subtitle: 'Hourly or daily rentals',
    description:
      'Rent a car or bike for as long as you need. Perfect for business trips, tourism, or family outings. Enjoy a smooth rental experience.',
    features: [
      'Self-drive & chauffeur-driven',
      'Hourly, daily & weekly plans available',
      'Fuel-inclusive rental packages',
      'Doorstep vehicle delivery & pickup',
    ],
    tags: ['Flexible', 'Tour Friendly', 'Convenient'],
  },
  {
    title: 'Auto Rides',
    icon: <PiVanLight size={36} />,
    subtitle: 'Affordable local transport',
    description:
      'Get quick access to autos in your area at fair rates. Ideal for short trips, markets, or station commutes.',
    features: [
      'Lowest rates in the area',
      'Real-time auto availability',
      'Safe & licensed auto drivers',
      'Easy meter-based billing system',
    ],
    tags: ['Budget-Friendly', 'Fast Booking', '24/7'],
  },
  {
    title: 'Bike Rides',
    icon: <FaMotorcycle size={36} />,
    subtitle: 'Beat the traffic, go fast',
    description:
      'Perfect for solo travel, quick errands, or beating the rush hour. Save time and money with fast bike rides.',
    features: [
      'Fast and traffic-smart routes',
      'Riders wear helmets & safety gear',
      'Real-time tracking of your ride',
      'Affordable for students and workers',
    ],
    tags: ['Quick', 'Solo Rides', 'Smart'],
  },
  {
    title: 'Intercity',
    icon: <FaMapMarkedAlt size={36} />,
    subtitle: 'City-to-city rides',
    description:
      'Need to reach another city? Pre-book intercity rides for one-way or return journeys with luggage options.',
    features: [
      'AC vehicles for long routes',
      'Experienced intercity drivers',
      'Timely pickups and drop-offs',
      'Sanitized vehicles & comfortable seating',
    ],
    tags: ['Long Distance', 'Clean', 'Reliable'],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, type: 'spring' },
  }),
};

export default function Service() {
  const [selected, setSelected] = useState(null);
  const [comingSoon, setComingSoon] = useState(false);

  const handleSelect = (service) => {
    if (service.title === 'Intercity') {
      setComingSoon(true);
    } else {
      setSelected(service);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-2">
        Our Services
        <span className="block w-20 h-1 bg-green-500 mt-2 mx-auto rounded"></span>
      </h1>

      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-center text-gray-400 text-sm max-w-xl mx-auto mb-10"
      >
        Pick the right ride for every journey – fast, safe, and affordable!
      </motion.p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto mb-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            onClick={() => handleSelect(service)}
            className="cursor-pointer bg-white/10 backdrop-blur-lg border border-green-500/30 rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-lg hover:scale-105 hover:shadow-green-500/20 transition"
          >
            <div className="text-green-400 mb-2">{service.icon}</div>
            <h2 className="text-base font-semibold">{service.title}</h2>
          </motion.div>
        ))}
      </div>


      {/* Coming Soon Popup */}
      <AnimatePresence>
        {comingSoon && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ y: 40 }}
              animate={{ y: 0 }}
              exit={{ y: 40 }}
              className="bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-2xl shadow-xl border border-green-500/30 max-w-md text-center"
            >
              <h2 className="text-3xl font-bold text-green-400 mb-4">🚧 Coming Soon!</h2>
              <p className="text-gray-300 mb-4">
                Intercity rides are launching soon with exciting features for long-distance travel.
              </p>
              <button
                onClick={() => setComingSoon(false)}
                className="mt-2 px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-md transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Selected Service Details */}
      {selected && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto mt-12 bg-white/5 border border-green-500/20 rounded-3xl p-8 shadow-2xl"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="text-green-400 text-5xl">{selected.icon}</div>
            <div>
              <h2 className="text-3xl font-bold">{selected.title}</h2>
              <p className="text-green-400 italic text-sm">{selected.subtitle}</p>
              <p className="text-sm mt-1 text-gray-400 italic">
                {selected.title === 'Bike Rides'
                  ? 'Zoom through traffic like a pro!'
                  : selected.title === 'Auto Rides'
                  ? 'No meter shock, just smooth rides!'
                  : selected.title === 'Rentals'
                  ? 'Your vehicle, your schedule.'
                  : 'Ride easy, ride smart.'}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {selected.tags?.map((tag, i) => (
              <span
                key={i}
                className="bg-green-600/90 text-xs px-3 py-1 rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h4 className="text-green-400 font-semibold mb-2">Overview</h4>
              <p className="text-sm text-gray-300 mb-4">{selected.description}</p>

              <div className="bg-black/40 border border-green-500/10 p-4 rounded-lg mb-4">
                <h4 className="text-green-400 font-semibold mb-2">When to Use This</h4>
                <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                  {selected.title === 'Bike Rides' && (
                    <>
                      <li>Quick rides to work or college</li>
                      <li>Short-distance travel in traffic</li>
                    </>
                  )}
                  {selected.title === 'Auto Rides' && (
                    <>
                      <li>Trips to railway stations or bus stops</li>
                      <li>Local errands and nearby markets</li>
                    </>
                  )}
                  {selected.title === 'Rentals' && (
                    <>
                      <li>Outstation family trips</li>
                      <li>Full-day business travel</li>
                    </>
                  )}
                  {selected.title === 'Car Ride' && (
                    <>
                      <li>Airport drop/pickup</li>
                      <li>Daily city commute</li>
                    </>
                  )}
                </ul>
              </div>

              <div className="bg-white/10 border border-green-500/10 p-4 rounded-lg">
                <h4 className="text-green-400 font-semibold mb-2">How It Works</h4>
                <ol className="list-decimal list-inside text-sm text-gray-300 space-y-1">
                  <li>Select your preferred service</li>
                  <li>Enter pickup & drop location</li>
                  <li>Choose payment method</li>
                  <li>Track your ride in real-time</li>
                </ol>
              </div>
            </div>

            <div>
              <h4 className="text-green-400 font-semibold mb-2">Top Features</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {selected.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="bg-white/10 border border-green-500/10 rounded-md px-4 py-3 text-sm text-gray-200"
                  >
                    ✅ {feature}
                  </div>
                ))}
              </div>

              <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/20">
                <h4 className="text-green-400 font-semibold mb-2">Why Choose Us?</h4>
                <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                  <li>24/7 support & helpdesk</li>
                  <li>Top-rated, trusted drivers</li>
                  <li>Sanitized & inspected vehicles</li>
                  <li>No cancellation penalties</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => setSelected(null)}
              className="text-green-400 underline hover:text-green-300 text-sm transition"
            >
              Close Details
            </button>
          </div>
        </motion.div>
      )}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mt-6"
      >
        <p className="text-lg font-medium text-green-400">Need something specific?</p>
        <button className="mt-2 px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-md transition">
          Contact Our 24/7 Support
        </button>
      </motion.div>
    </div>
  );
}
