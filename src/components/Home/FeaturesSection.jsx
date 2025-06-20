import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, MapPin, CreditCard, UserPlus, Headphones } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 30 }}
      className="rounded-2xl bg-white/10 dark:bg-gray-800/40 backdrop-blur-xl p-6 border border-white/10 shadow-xl transition-all duration-300"
    >
      <div className="text-green-500 text-2xl mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
};

const FeaturesSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const features = [
    {
      icon: <Shield size={28} />,
      title: 'Prioritized Safety',
      description: 'Real-time ride tracking, verified drivers, and 24/7 emergency support.',
    },
    {
      icon: <Clock size={28} />,
      title: 'On-Time Guarantee',
      description: 'Schedule rides in advance with our punctuality promise.',
    },
    {
      icon: <MapPin size={28} />,
      title: 'Available in 500+ Cities',
      description: 'Nationwide coverage to serve you wherever you go.',
    },
    {
      icon: <CreditCard size={28} />,
      title: 'Seamless Payments',
      description: 'Cards, UPI, wallets – all supported for smooth checkout.',
    },
    {
      icon: <UserPlus size={28} />,
      title: 'Partner with Us',
      description: 'Drive with us and earn on your schedule.',
    },
    {
      icon: <Headphones size={28} />,
      title: '24/7 Customer Support',
      description: 'Always ready to resolve your queries.',
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 px-4 overflow-hidden">
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-green-400/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose <span className="text-green-400">Idhar-Udhar</span>
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            The safest, most reliable, and eco-conscious ride-sharing experience tailored for you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
