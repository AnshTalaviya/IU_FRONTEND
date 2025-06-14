import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import { Car, Bike, Truck, Clock, Package } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ChooseRideSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  const rides = [
    {
      title: "GreenCars",
      icon: <Car size={32} />,
      price: "₹249",
      description: "Comfortable sedans for daily commute",
      image: "/images/Home_Page1.png",
      buttonText: "Book GreenCars",
      route: "/book"  // add route
    },
    {
      title: "GreenBikes",
      icon: <Bike size={32} />,
      price: "₹49",
      description: "Quick & affordable bike rides",
      image: "/images/Home-Page2.png",
      buttonText: "Book GreenBikes",
      route: "/book"  // add route
    },
    {
      title: "GreenXL",
      icon: <Truck size={32} />,
      price: "₹249",
      description: "Spacious SUVs for group travel",
      image: "/images/Home-Page8.png",
      buttonText: "Book GreenXL",
      route: "/book" // example route
    },
    {
      title: "GreenRentals",
      icon: <Clock size={32} />,
      price: "₹999",
      description: "Hourly packages for multiple stops",
      image: "/images/Home-Page3.png",
      buttonText: "Book GreenRentals",
      route: "/book"
    },
    {
      title: "GreenDelivery",
      icon: <Package size={32} />,
      price: "₹129",
      description: "Fast & secure package delivery",
      image: "/images/Home-Page5.png",
      buttonText: "Book GreenDelivery",
      route: "/book"
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-[#1F2937]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">Choose Your Ride</h2>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            From daily commutes to special occasions, we have the perfect ride options to meet all your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rides.map((ride, index) => (
            <div
              key={index}
              data-aos="zoom-in-up"
              className="relative overflow-hidden rounded-lg group cursor-pointer transition-transform duration-350 ease-in-out hover:scale-98 hover:shadow-lg hover:shadow-black/30"
            >
              <img
                src={ride.image}
                alt={ride.title}
                className="w-full h-[300px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-between p-6 opacity-90">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white mr-4">
                    {ride.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white text-start">{ride.title}</h3>
                    <p className="text-green-400 text-start">From {ride.price}</p>
                  </div>
                </div>
                <div>
                  <p className="text-gray-300 mb-4 text-start">{ride.description}</p>
                  <div className="flex justify-start">
                    <Link to={ride.route} className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-xl transition-colors">
                      {ride.buttonText}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseRideSection;
