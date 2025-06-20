import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  UserCheck,
  GraduationCap,
  BadgeCheck,
  Radar,
  AlertTriangle,
  ThumbsUp,
  PhoneCall,
  Eye,
} from "lucide-react";

const HeroSafety = () => {
  const safetySteps = [
    {
      icon: <UserCheck size={36} />,
      title: "Driver Background Check",
      desc: "All drivers undergo criminal background screening and verification before joining.",
    },
    {
      icon: <GraduationCap size={36} />,
      title: "Safety Education",
      desc: "We educate our drivers and users through periodic safety awareness campaigns.",
    },
    {
      icon: <BadgeCheck size={36} />,
      title: "Trusted Driver Badge",
      desc: "High-rated drivers earn our 'Trusted Driver' badge after consistent safe service.",
    },
    {
      icon: <Radar size={36} />,
      title: "Predictive Safety AI",
      desc: "Our system analyzes patterns to preempt and prevent risks on the go.",
    },
    {
      icon: <Shield size={36} />,
      title: "Ride Insurance",
      desc: "All trips include insurance to protect you from accidents or emergencies.",
    },
    {
      icon: <AlertTriangle size={36} />,
      title: "Emergency Protocol",
      desc: "Fast SOS activation and proactive contact with emergency responders.",
    },
  ];

  const userSafetyTips = [
    {
      icon: <Eye size={36} />,
      title: "Stay Alert",
      desc: "Always confirm driver identity and be aware of your surroundings during pickup/drop.",
    },
    {
      icon: <PhoneCall size={36} />,
      title: "Use In-App Communication",
      desc: "For safety, avoid sharing personal contact info. Use the app's secure chat or call.",
    },
    {
      icon: <ThumbsUp size={36} />,
      title: "Give Feedback",
      desc: "Help us maintain safety by rating your ride and reporting any concerns quickly.",
    },
  ];

  return (
    <div className="text-white py-20 px-6 font-sans min-h-screen">
      {/* Title and Introduction */}
      <section className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-green-400">Commitment</span> to Safety
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12">
            At IdharUdhar, safety is not just a feature — it's the foundation of every ride.
            We're dedicated to proactive prevention, real-time support, and peace of mind.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {safetySteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 p-6 rounded-2xl backdrop-blur-xl border border-white/10 shadow-md text-left"
            >
              <div className="text-green-400 mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-300">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ✅ Updated Section: Your Role in Safety */}
      <section className="mt-28 max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12"
        >
          Your Role in <span className="text-green-400">Safety</span>
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {userSafetyTips.map((tip, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 p-6 rounded-2xl backdrop-blur-xl border border-white/10 shadow-md text-left"
            >
              <div className="text-green-400 mb-4">{tip.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
              <p className="text-gray-300">{tip.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Real Stories Section */}
      <section className="mt-28 max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12"
        >
          Real <span className="text-green-400">Stories</span> from Our Users
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              name: "Aarav S.",
              role: "Small Business Owner",
              feedback:
                "IdharUdhar helped me deliver customer parcels daily with peace of mind. The safety assurance makes a huge difference.",
            },
            {
              name: "Meera R.",
              role: "Student",
              feedback:
                "I sent important documents across town and was able to track everything live. The driver was verified and polite. Felt very secure.",
            },
          ].map((story, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 p-6 rounded-2xl backdrop-blur-xl border border-white/10 shadow-md text-left"
            >
              <p className="text-gray-300 text-lg mb-4 italic">"{story.feedback}"</p>
              <div className="text-green-400 font-semibold">{story.name}</div>
              <div className="text-gray-400 text-sm">{story.role}</div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HeroSafety;
