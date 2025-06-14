import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Bike, Car, Truck, Package, UtensilsCrossed, ShoppingBag
} from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServiceCard = ({ icon, title, description, image, onClick, comingSoon }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div
      data-aos="zoom-in"
      onClick={!comingSoon ? onClick : null}
      className={`group relative w-full max-w-[280px] h-[180px] rounded-xl overflow-hidden shadow-lg mx-auto cursor-pointer transition-transform hover:scale-105 ${comingSoon ? 'opacity-70 pointer-events-none' : ''}`}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-[180px] object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
      <div className="absolute inset-0 flex flex-col justify-start p-4">
        <div className="w-14 h-14 bg-black/70 rounded-full flex items-center justify-center mb-3 mt-0 text-green-500">
          {icon}
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

  const services = [
    {
      icon: <Bike size={32} />,
      title: "Bike Ride",
      description: "Quick & affordable bike rides",
      image: "/images/Home-Page2.png",
      path: "/book"
    },
    {
      icon: <Car size={32} />,
      title: "Car Ride",
      description: "Comfortable sedans for daily commute",
      image: "/images/Home-Page3.png",
      path: "/book"
    },
    {
      icon: <Truck size={32} />,
      title: "Auto Ride",
      description: "Convenient three-wheeler auto rides",
      image: "/images/Home-Page4.png",
      path: "/book"
    },
    {
      icon: <Package size={32} />,
      title: "Courier Delivery",
      description: "Fast & secure package delivery",
      image: "/images/Home-Page5.png",
      path: "/courier-ride"
    },
    {
      icon: <UtensilsCrossed size={32} />,
      title: "Food Delivery",
      description: "Deliver food from restaurants to doorstep",
      image: "/images/Home-Page6.png",
      path: "/book",
      comingSoon: true
    },
    {
      icon: <ShoppingBag size={32} />,
      title: "Grocery Delivery",
      description: "Convenient grocery delivery to your home",
      image: "/images/Home-Page7.png",
      path: "/book",
      comingSoon: true
    }
  ];

  const handleServiceClick = (path) => {
    navigate(path);
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
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
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
