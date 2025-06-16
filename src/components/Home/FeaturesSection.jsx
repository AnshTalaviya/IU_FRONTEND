import React, { useEffect } from 'react';
import { Shield, Clock, MapPin, CreditCard, UserPlus, Headphones } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';


const FeatureCard = ({ icon, title, description }) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div data-aos="fade-up">
      <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 transition-transform duration-300 border dark:border-gray-700 hover:scale-102">
        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4 text-green-500">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-black dark:text-white mb-3 text-start">{title}</h3>
        <p className="text-gray-400 text-start">{description}</p>
      </div>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: <Shield size={32} />,
      title: "Prioritized Safety",
      description: "Real-time ride tracking, verified drivers, and 24/7 emergency support for worry-free travel."
    },
    {
      icon: <Clock size={32} />,
      title: "On-Time Guarantee",
      description: "We value your time. Schedule rides in advance with our punctuality promise."
    },
    {
      icon: <MapPin size={32} />,
      title: "Available in 500+ Cities",
      description: "Expanding nationwide to provide reliable rides no matter where you are."
    },
    {
      icon: <CreditCard size={32} />,
      title: "Seamless Payments",
      description: "Multiple payment options including cards, UPI, and wallet for hassle-free transactions."
    },
    {
      icon: <UserPlus size={32} />,
      title: "Partner with Us",
      description: "Become a driver partner and earn on your own schedule with competitive incentives."
    },
    {
      icon: <Headphones size={32} />,
      title: "24/7 Customer Support",
      description: "Our dedicated support team is always ready to assist you with any concerns."
    }
  ];

  // Generate random positions for dots with animation properties
  const generateDots = () => {
    const dots = [];
    for (let i = 0; i < 50; i++) {
      dots.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        delay: Math.random() * 2,
        duration: Math.random() * 2 + 2,
        distance: Math.random() * 20 + 10
      });
    }
    return dots;
  };
  return (
    <section className="py-16 bg-white dark:bg-gray-900 relative overflow-hidden">

      {/* Animated Background Dots */}
      <div className="absolute inset-0 pointer-events-none">
        {generateDots().map((dot) => (
          <motion.div
            key={dot.id}
            className="absolute bg-green-500/50 rounded-full"
            style={{
              left: `${dot.x}%`,
              top: `${dot.y}%`,
              width: `${dot.size}px`,
              height: `${dot.size}px`
            }}
            initial={{ opacity: 0, scale: 0, y: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -dot.distance, 0],
              transition: {
                opacity: {
                  delay: dot.delay,
                  duration: 0.7,
                  ease: "easeInOut"
                },
                scale: {
                  delay: dot.delay,
                  duration: 0.7,
                  ease: "easeInOut"
                },
                y: {
                  delay: dot.delay,
                  duration: dot.duration,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse"
                }
              }
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-2">
            Why Choose <span className="text-green-500">Idhar-Udhar</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We're committed to providing the safest, most reliable, and environmentally conscious ride-sharing experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
