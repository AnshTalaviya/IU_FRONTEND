import React from "react";
import Slider from "react-slick";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const services = [
  {
    tag: "IU Enterprise",
    title: "Streamlining operations to drive business growth",
  },
  {
    tag: "API Integration",
    title: "Automate the transportation of your goods by integrating our APIs",
  },
  {
    tag: "Two-Wheelers",
    title: "Reliable goods transportation services for up to 20 kg",
  },
  {
    tag: "Trucks",
    title: "Hassle-free goods transportation up to 2500 kg",
  },
  {
    tag: "Packers & Movers",
    title: "House shifting hai? Ho jayega",
  },
  {
    tag: "Intercity Courier Service",
    title: "Reliable Intercity Courier Service via Surface & Air",
  },
];

export default function OurService() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true, autoplay: true,
    autoplaySpeed: 3000,
    // speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-gray-300 text-gray-800 pb-20 ">

      <section className="  py-10 px-6 max-w-6xl mx-auto ">
        <h2 className="text-center text-green-500 font-bold text-3xl mb-10">
          OUR SERVICES
        </h2>

        <Slider {...settings}>
          {services.map((service, index) => (
            <div key={index} className="px-3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col justify-between p-6 h-[280px] rounded-xl border border-gray-700 bg-white dark:bg-gray-900 dark:text-gray-300 text-gray-800 dark:hover:bg-gray-800 transition-transform duration-300 "
              >
                <span className="inline-block bg-green-500 bg-opacity-50 dark:text-green-400 text-green-700 px-3 py-1 rounded-full text-xs font-semibold mb-4 w-max">
                  {service.tag}
                </span>
                <h3 className="font-semibold text-lg mb-6 leading-snug">
                  {service.title}
                </h3>
                <button className="self-start bg-green-500  transition text-white p-2 rounded-full">
                  <FaArrowRight />
                </button>
              </motion.div>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
}
