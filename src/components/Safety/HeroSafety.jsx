import React from "react";
import { ShieldCheck, MapPin, PhoneCall, AlertTriangle, Eye, UserCheck } from "lucide-react";
import { motion } from "framer-motion";

const HeroSafety = () => {
  return (
    <div className="text-gray-900 font-sans">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-800 to-green-600 text-white py-16 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Your Safety Is Our Mission</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10">
            From pickup to drop-off, IdharUdhar ensures your journey is secure, transparent, and always under watch.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-green-800 font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition">
              Explore Safety Features
            </button>
            <button className="bg-black text-white border border-white px-8 py-3 rounded-full hover:bg-green-700 transition flex items-center gap-2">
              <AlertTriangle size={20} /> Emergency Help
            </button>
          </div>
        </motion.div>
      </section>

      {/* Why Safety Matters */}
      <section className="py-14 px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Safety Matters to Us</h2>
        <p className="text-lg text-gray-700 max-w-4xl mx-auto">
          We understand the trust you place in us every time you book a ride. That’s why we’ve
          implemented the same high-level safety features seen in leading services like Ola, Uber,
          and Rapido — tailored for you.
        </p>
      </section>

      {/* Features */}
      <section className="py-20 px-6 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-left">
          {[
            {
              title: "Verified Drivers",
              icon: <UserCheck size={40} />,
              desc: "Every driver is background-checked and identity-verified before joining our platform.",
            },
            {
              title: "Live Ride Tracking",
              icon: <MapPin size={40} />,
              desc: "Share your trip in real-time with loved ones for complete peace of mind.",
            },
            {
              title: "Emergency Alert Button",
              icon: <AlertTriangle size={40} />,
              desc: "In-app emergency button to instantly notify local authorities and your trusted contacts.",
            },
            {
              title: "24x7 Support",
              icon: <PhoneCall size={40} />,
              desc: "A dedicated support team is available around the clock for any concern.",
            },
            {
              title: "Ride Monitoring",
              icon: <Eye size={40} />,
              desc: "AI-powered ride monitoring to detect unusual route deviations or long stops.",
            },
            {
              title: "Insurance Coverage",
              icon: <ShieldCheck size={40} />,
              desc: "All rides come with insurance coverage to ensure rider protection.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-xl"
            >
              <div className="text-green-700 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-200">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tracking Highlight */}
      <section className="py-20 px-6 bg-gradient-to-r from-green-700 to-green-500 text-white text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Real-Time Ride Tracking</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Track your ride from start to finish, and share your live route with friends and family.
          </p>
        </motion.div>
      </section>

      {/* Emergency Help */}
      <section className="py-20 px-6 bg-black text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Emergency? Help is One Tap Away</h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto mb-8">
            Use the SOS button in the app to send instant alerts to authorities and your emergency contacts.
          </p>
          <button className="bg-red-600 px-10 py-3 text-lg font-semibold rounded-full hover:bg-red-700 transition">
            Tap to Learn About SOS
          </button>
        </motion.div>
      </section>

      {/* Support Section */}
      <section className="py-20 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Help? We’re Here 24/7</h2>
        <p className="text-lg max-w-3xl mx-auto text-gray-700 mb-6">
          Our support team is available any time via chat, phone, or email. No matter the issue — big or small.
        </p>
        <button className="bg-green-700 text-white px-8 py-3 rounded-full hover:bg-green-800 transition">
          Contact Support
        </button>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-green-700 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for a Safe Ride?</h2>
        <p className="text-lg max-w-xl mx-auto mb-6">Book your next trip with IdharUdhar and feel the safety in every mile.</p>
        <button className="bg-white text-green-800 px-8 py-3 font-bold rounded-full hover:bg-gray-100 transition">
          Book a Ride Now
        </button>
      </section>

    </div>
  );
};


export default HeroSafety;
