import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Bike, Car, Truck, Package, UtensilsCrossed, ShoppingBag
} from 'lucide-react';
import { useAnimation } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServiceCard = ({ icon, title, description, image, onClick, comingSoon, aos }) => {
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
        shadow-lg mx-auto cursor-pointer transition-all duration-700 ease-in-out border border-2 border-green-800 hover:ring-2 hover:ring-green-500/50
        ${comingSoon ? 'opacity-70 pointer-events-none' : ''}`}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
      <div className="absolute inset-0 flex flex-col justify-start p-4">
        <div className="relative w-14 h-14 mb-3 mt-0">
          <div className="relative z-10 w-14 h-14 bg-black/70 rounded-full flex items-center justify-center text-green-500 animate-icon-bounce">
            {icon}
          </div>
        </div>

        <h3 className="text-lg font-semibold text-white text-start">{title}</h3>
        <p className="text-sm text-gray-300 text-start">{description}</p>
      </div>

      {comingSoon && (
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="bg-green-700 text-black px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-pulse">
            🚧 Coming Soon
          </div>
        </div>
      )}
    </div>
  );
};

const ServiceSection = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // controls.start("animate");
        } else {
          setIsVisible(false);
          // controls.start("initial");
        }
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
      image: "/images/Home-Page2.png",
      path: "/book",
      aos: "fade-up"
    },
    {
      icon: <Car size={32} />,
      title: "Car Ride",
      description: "Comfortable sedans for daily commute",
      image: "/images/Home-Page3.png",
      path: "/book",
      aos: "fade-down"
    },
    {
      icon: <Truck size={32} />,
      title: "Auto Ride",
      description: "Convenient three-wheeler auto rides",
      image: "/images/Home-Page4.png",
      path: "/book",
      aos: "zoom-in"
    },
    {
      icon: <Package size={32} />,
      title: "Courier Delivery",
      description: "Fast & secure package delivery",
      image: "/images/Home-Page5.png",
      path: "/vehicle-selector",
      aos: "flip-left"
    },
    {
      icon: <UtensilsCrossed size={32} />,
      title: "Food Delivery",
      description: "Deliver food from restaurants to doorstep",
      image: "/images/Home-Page6.png",
      path: "/book",
      comingSoon: true,
      aos: "zoom-in-up"
    },
    {
      icon: <ShoppingBag size={32} />,
      title: "Grocery Delivery",
      description: "Convenient grocery delivery to your home",
      image: "/images/Home-Page7.png",
      path: "/book",
      comingSoon: true,
      aos: "zoom-in-down"
    }
  ];

  const handleServiceClick = (path) => {
    navigate(path);
  };

  return (
    <section ref={sectionRef} className="py-16 relative">


      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
            What service do you need today?
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            Choose a service to get started with your booking
          </p>
        </div>
        <div
          className="flex flex-wrap justify-start gap-4"
          style={{ maxWidth: '900px', margin: '0 auto' }}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              image={service.image}
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
