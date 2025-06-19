import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const coreValues = [
  {
    icon: 'fas fa-leaf',
    title: 'Sustainability',
    description: 'Reducing carbon emissions through electric vehicles and green practices.',
  },
  {
    icon: 'fas fa-shield-alt',
    title: 'Safety',
    description: 'Your safety is our top priority in every ride and decision.',
  },
  {
    icon: 'fas fa-lightbulb',
    title: 'Innovation',
    description: 'We push boundaries to improve urban mobility with cutting-edge tech.',
  },
  {
    icon: 'fas fa-users',
    title: 'Community',
    description: 'Building strong communities through accessible transportation.',
  },
];

const impactCards = [
  {
    value: '52K+',
    label: 'Tons of CO₂ Saved',
    description: 'Our fleet of EVs has saved thousands of tons of carbon emissions.',
  },
  {
    value: '10M+',
    label: 'Green Rides Completed',
    description: 'Millions of users have chosen our eco-friendly ride options.',
  },
  {
    value: '75K+',
    label: 'Driver Partners',
    description: 'We empower drivers with sustainable vehicle options.',
  },
];

export default function Aboutpage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white font-sans">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-500 text-white text-center py-28 px-6">
        <div data-aos="fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Redefining Urban Transportation</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Join us on a mission to create a cleaner, greener, and smarter world through sustainable mobility.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className="bg-white text-green-700 font-semibold px-6 py-3 rounded-full hover:bg-gray-100">Join Us</button>
            <Link to="/services">
              <button className="border border-white text-white px-6 py-3 rounded-full hover:bg-green-600">Explore Services</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 md:px-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              To revolutionize mobility by offering eco-conscious, tech-enabled, and community-driven transportation solutions for all.
            </p>
          </div>
          <div data-aos="fade-left">
            <img src="https://images.unsplash.com/photo-1546614042-7df3c24c9e5d?w=800&auto=format&fit=crop&q=60" alt="Mission" className="rounded-xl shadow-lg w-full" />
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 px-6 bg-white dark:bg-gray-900">
        <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {coreValues.map((item, index) => (
            <div key={index} data-aos="zoom-in" className="text-center bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <div className="text-green-600 dark:text-green-400 text-3xl mb-4">
                <i className={item.icon}></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-6 bg-green-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Making an Impact</h2>
        <p className="text-lg mb-10 max-w-3xl mx-auto">
          Together with our community, we're transforming cities into cleaner, healthier, and more connected places.
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {impactCards.map((card, index) => (
            <div key={index} className="bg-white/10 p-6 rounded-xl shadow-md hover:bg-white/20">
              <h3 className="text-4xl font-bold text-green-200">{card.value}</h3>
              <h4 className="text-lg font-semibold mt-2">{card.label}</h4>
              <p className="text-sm mt-2 text-white/90">{card.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-20 px-6 bg-gray-100 dark:bg-gray-800 text-center">
        <h2 className="text-3xl font-bold mb-6">Be a Part of Our Movement</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-10 max-w-xl mx-auto">
          Whether you're a rider, a driver, or a tech enthusiast — there's a place for you in our mission.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-800">Book a Ride</button>
          <button className="bg-white text-green-700 px-6 py-3 rounded-full border border-green-700 hover:bg-green-100">Become a Driver</button>
          <Link to="/careers">
            <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800">Join Our Team</button>
          </Link>
        </div>
      </section>

    </div>
  );
}
