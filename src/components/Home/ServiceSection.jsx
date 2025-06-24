import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Bike, Car, Truck, Package, UtensilsCrossed, ShoppingBag
} from 'lucide-react';
import { useAnimation } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Single Service Card
const ServiceCard = ({ icon, title, description, onClick, comingSoon, aos }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: 'ease-in-out'
    });
  }, []);

  return (
    <div
      data-aos={aos}
      onClick={!comingSoon ? onClick : null}
      className={`group relative w-full max-w-[280px] h-[180px] rounded-xl overflow-hidden 
        bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white shadow-2xl 
        mx-auto cursor-pointer transition-all duration-700 ease-in-out border border-green-500/40 
        hover:shadow-green-500/20 hover:scale-[1.02]
        ${comingSoon ? 'opacity-60 pointer-events-none' : ''}`}
    >
      {/* Watermark Icon */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 text-green-400 scale-150">
        <div className="text-[120px]">{icon}</div>
      </div>

      {/* Top Icon */}
      <div className="absolute top-4 left-4 z-10 w-14 h-14 bg-black/70 rounded-full flex items-center justify-center text-green-400 animate-icon-bounce">
        {icon}
      </div>

      {/* Content */}
      <div className="absolute bottom-4 left-4 right-4 z-20">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-300">{description}</p>
      </div>

      {/* Coming Soon Overlay */}
      {comingSoon && (
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-30">
          <div className="bg-green-600 text-black px-4 py-2 rounded-full font-bold text-sm shadow-md animate-pulse">
            🚧 Coming Soon
          </div>
        </div>
      )}
    </div>
  );
};

// Service Section
const ServiceSection = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controls]);

  const services = [
    {
      icon: <Bike size={32} />,
      title: "Bike Ride",
      description: "Quick & affordable bike rides",
      path: "/book",
      aos: "fade-up"
    },
    {
      icon: <Car size={32} />,
      title: "Car Ride",
      description: "Comfortable sedans for daily commute",
      path: "/book",
      aos: "fade-down"
    },
    {
      icon: <Truck size={32} />,
      title: "Auto Ride",
      description: "Convenient three-wheeler auto rides",
      path: "/book",
      aos: "zoom-in"
    },
    {
      icon: <Package size={32} />,
      title: "Parcel Delivery",
      description: "Fast & secure package delivery",
      path: "/vehicle-selector",
      aos: "flip-left"
    },
    {
      icon: <UtensilsCrossed size={32} />,
      title: "Food Delivery",
      description: "Deliver food from restaurants to doorstep",
      path: "/book",
      comingSoon: true,
      aos: "zoom-in-up"
    },
    {
      icon: <ShoppingBag size={32} />,
      title: "Grocery Delivery",
      description: "Convenient grocery delivery to your home",
      path: "/book",
      comingSoon: true,
      aos: "zoom-in-down"
    }
  ];

  const handleServiceClick = (path) => {
    navigate(path);
  };

  return (
    <section ref={sectionRef} className="py-16 relative bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What service do you need today?
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            Choose a service to get started with your booking
          </p>
        </div>

        <div
          className="flex flex-wrap justify-center gap-6"
          style={{ maxWidth: '1000px', margin: '0 auto' }}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              onClick={() => handleServiceClick(service.path)}
              comingSoon={service.comingSoon}
              aos={service.aos}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
