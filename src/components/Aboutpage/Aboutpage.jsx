import React from "react";
import { motion } from "framer-motion";
import {
  Truck,
  Send,
  MapPin,
  Info,
  Shield,
  UserCheck,
} from "lucide-react";

const Aboutpage = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-20 px-6 min-h-screen font-sans">
      {/* About Section */}
      <section className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-green-400">IdharUdhar</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12">
            IdharUdhar is your trusted partner for secure and convenient parcel pickup and drop services.
            Whether it's a document, a package, or a gift, we make sure it reaches safely — on time, every time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              icon: <MapPin size={36} />,
              title: "Pan-City Coverage",
              desc: "We pick up and drop across all major zones, ensuring your parcel reaches its destination smoothly.",
            },
            {
              icon: <Truck size={36} />,
              title: "Multiple Vehicle Options",
              desc: "From bikes to trucks — choose the best-suited vehicle for your delivery needs.",
            },
            {
              icon: <Send size={36} />,
              title: "Fast & Reliable Delivery",
              desc: "Quick dispatch with real-time tracking and dependable service across all deliveries.",
            },
            {
              icon: <Info size={36} />,
              title: "Why Choose Us?",
              desc: "Our team values safety, punctuality, and a customer-first approach in every delivery.",
            },
            {
              icon: <Shield size={36} />,
              title: "Safety-First Approach",
              desc: "All pickups and drops are insured, monitored, and executed with strict safety protocols.",
            },
            {
              icon: <UserCheck size={36} />,
              title: "Verified Drivers",
              desc: "Every delivery executive is thoroughly verified and trained for secure handling.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 p-6 rounded-2xl backdrop-blur-xl border border-white/10 shadow-md text-left"
            >
              <div className="text-green-400 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="mt-28 max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          How <span className="text-green-400">It Works</span>
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              title: "1. Book a Pickup",
              desc: "Choose your vehicle, enter pickup & drop locations, and schedule your time.",
            },
            {
              title: "2. Driver Arrives",
              desc: "A verified driver reaches your location on time to collect the parcel safely.",
            },
            {
              title: "3. Live Tracking",
              desc: "Track your parcel in real-time as it moves to the destination.",
            },
            {
              title: "4. Safe Delivery",
              desc: "Your parcel is delivered securely. Get notified instantly on successful delivery.",
            },
            {
              title: "5. Rate the Experience",
              desc: "We value feedback to ensure consistent, high-quality service.",
            },
            {
              title: "6. Support on Demand",
              desc: "Facing an issue? Our support team is always ready to assist you through chat or call — anytime.",
            },
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 p-6 rounded-2xl backdrop-blur-xl border border-white/10 shadow-md text-left"
            >
              <h3 className="text-xl font-semibold mb-2 text-green-400">{step.title}</h3>
              <p className="text-gray-300">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Values Section */}
      <section className="mt-28 text-center max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-6"
        >
          Our <span className="text-green-400">Core Values</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-gray-300 text-lg"
        >
          At IdharUdhar, we stand by integrity, innovation, and impact. Our platform empowers every user to send, track, and receive with trust.
          We’re not just about delivery — we’re about delivering <span className="text-green-400 font-medium">peace of mind</span>.
        </motion.p>
      </section>

      {/* Why People Trust Us Section */}
      <section className="mt-28 max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12"
        >
          Why People <span className="text-green-400">Trust Us</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              icon: <Shield size={36} />,
              title: "Data Privacy",
              desc: "We handle your personal data with utmost care and never share it without consent.",
            },
            {
              icon: <UserCheck size={36} />,
              title: "Verified Professionals",
              desc: "All our drivers and staff go through identity and background verification.",
            },
            {
              icon: <Info size={36} />,
              title: "Transparent Service",
              desc: "No hidden charges. No confusion. Just clean and clear delivery flow.",
            },
          ].map((trust, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 p-6 rounded-2xl backdrop-blur-xl border border-white/10 shadow-md text-left"
            >
              <div className="text-green-400 mb-4">{trust.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{trust.title}</h3>
              <p className="text-gray-300">{trust.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Aboutpage;
