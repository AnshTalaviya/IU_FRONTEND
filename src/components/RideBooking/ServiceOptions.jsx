import React from "react";
import { Link } from "react-router-dom";

const ServiceOptions = () => {
  const services = [
    {
      title: "Bike Ride",
      desc: "Quick & affordable bike rides",
      icon: "/icons/bike.png",
      img: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80",
      route: "/bike-ride",
    },
    {
      title: "Car Ride",
      desc: "Comfortable sedans for daily commute",
      icon: "/icons/car.png",
      img: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80",
      route: "/car-ride",
    },
    {
      title: "Auto Ride",
      desc: "Convenient three wheeler auto rides",
      icon: "/icons/road.png",
      img: "https://i.pinimg.com/736x/64/eb/ef/64ebefbbd558d77f1a1e0d01a4e050c1.jpg",
      route: "/auto-ride",
    },
    {
      title: "Courier Delivery",
      desc: "Fast & secure package delivery",
      icon: "/icons/box.png",
      img: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=800&q=80",
      route: "/courier-ride",
    },
    {
      title: "Food Delivery",
      desc: "Deliver food from restaurants to doorstep",
      icon: "/icons/cutlery.png",
      img: "https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?auto=format&fit=crop&w=800&q=80",
      comingSoon: true,
    },
    {
      title: "Grocery Delivery",
      desc: "Convenient grocery delivery to your home",
      icon: "/icons/food-pack.png",
      img: "https://images.unsplash.com/photo-1543168256-418811576931?auto=format&fit=crop&w=800&q=80",
      comingSoon: true,
    },
  ];

  return (
    <div className="bg-white dark:bg-[#1F2937] min-h-screen flex items-center justify-center px-4 py-10 text-white">
      <div className="bg-[#1C2838] p-6 sm:p-8 rounded-2xl shadow-xl w-full max-w-2xl">
        <h2 className="text-3xl font-bold mb-1">Book Your Ride</h2>
        <p className="text-lg font-semibold">Select Service Type</p>
        <p className="text-sm text-gray-400 mb-6">
          Choose what kind of service you need
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {services.map((s, i) => {
            const Card = (
              <div
                className={`relative rounded-xl overflow-hidden group cursor-pointer hover:scale-[1.02] transition duration-300 ease-in-out hover:shadow-lg ${
                  s.comingSoon ? "opacity-70 pointer-events-none" : ""
                }`}
                style={{ height: "160px" }}
              >
                <img
                  src={s.img}
                  alt={`${s.title} background`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-4 flex flex-col justify-end">
                  <div className="mb-4">
                    <div className="w-[60px] h-[60px] bg-white rounded-full flex items-center justify-center">
                      <img
                        src={s.icon}
                        alt={`${s.title} icon`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="text-lg font-semibold text-white">{s.title}</div>
                  <div className="text-sm text-gray-300">{s.desc}</div>
                </div>
                {s.comingSoon && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <div className="bg-green-700 text-white px-4 py-1 rounded-full font-semibold text-sm shadow-md animate-pulse">
                      🚧 Coming Soon
                    </div>
                  </div>
                )}
              </div>
            );

            return s.route && !s.comingSoon ? (
              <Link to={s.route} key={i}>
                {Card}
              </Link>
            ) : (
              <div key={i}>{Card}</div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServiceOptions;
