import React, { useEffect } from "react";
import { Check, Smartphone } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const DownloadAppSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const features = [
    "Book trips in just a few taps",
    "Track your driver in real-time",
    "Schedule trips in advance",
    "Save favorite destinations",
    "Earn and redeem rewards",
    "Access 24/7 in-app support",
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-green-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16">
        
        {/* LEFT: APP IMAGE */}
        <div data-aos="fade-up" className="relative w-full lg:w-1/2">
          <div className="relative rounded-3xl overflow-hidden border border-white/30 dark:border-gray-700">
            <img
              src="/images/IUAPPDOWNLODE.png"
              alt="App Screenshot"
              className="w-full object-cover"
            />
            
          </div>

          {/* App Store Buttons */}
          <div className="flex justify-center flex-wrap mt-6 sm:flex-row gap-4">
            <Link to="#" className="hover:scale-105 transition-transform">
              <img src="/images/Home-icon1.png" alt="Google Play" className="h-14" />
            </Link>
            <Link to="#" className="hover:scale-105 transition-transform">
              <img src="/images/Home-icon2.png" alt="App Store" className="h-14" />
            </Link>
          </div>
        </div>

        {/* RIGHT: TEXT SECTION */}
        <div data-aos="fade-left" className="w-full lg:w-1/2">
          <div className="inline-flex items-center bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-300 px-4 py-1 rounded-full text-sm font-semibold mb-4 shadow-sm">
            <Smartphone className="mr-2 w-4 h-4" />
            Mobile App
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
            Download the IdharUdhar App for a Seamless Experience
          </h2>

          <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
            Trip smarter with our mobile app. Book with ease, track live, pay flexibly, and unlock exclusive rewards – all in one tap.
          </p>

          <div className="space-y-3 mb-10">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center text-gray-700 dark:text-gray-300">
                <Check className="text-green-500 mr-3 w-5 h-5" />
                {feature}
              </div>
            ))}
          </div>

          <div className="p-5 bg-green-50 dark:bg-green-900 border border-green-400/20 rounded-xl shadow-md">
            <p className="text-sm text-gray-800 dark:text-gray-100 mb-2">
              <strong className="text-black dark:text-white">Driver Partner?</strong>{" "}
              Download the Driver App and start earning with IdharUdhar.
            </p>
            <Link
              to="#"
              className="text-green-600 dark:text-green-400 font-medium hover:underline"
            >
              Learn more about becoming a partner →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadAppSection;
