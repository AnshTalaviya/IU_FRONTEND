import React from 'react';
import {
  Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail, ChevronRight,
} from 'lucide-react';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const Footer = () => {
  console.log('Footer rendered at:', window.location.pathname);
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
    <footer className="bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400 text-sm relative">
      {/* Animated Background Dots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
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
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-14">
          {/* Company Info */}
          <div>
            <Logo />
            <p className="mt-4 mb-6">
              Your premium eco-friendly ride-sharing service. Available 24/7 in over 500+ cities nationwide.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/" className="hover:text-green-500 transition-colors" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="https://www.twitter.com/" className="hover:text-green-500 transition-colors" aria-label="Twitter"><Twitter size={20} /></a>
              <a href="https://www.instagram.com/" className="hover:text-green-500 transition-colors" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="https://www.youtube.com/" className="hover:text-green-500 transition-colors" aria-label="YouTube"><Youtube size={22} /></a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-green-500 text-base font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About Us' },
                { href: '/Services/carrides', label: 'Services' },
                { href: '/Safety', label: 'Safety' },
                { href: '/signup', label: 'Become a Driver' },
                { href: '/faqs', label: 'FAQs' },
              ].map(link => (
                <li key={link.href}>
                  <Link to={link.href} className="flex items-center hover:text-green-500 transition-colors">
                    <ChevronRight className="mr-2 h-4 w-4" />{link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-green-500 text-base font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {[
                { href: '/Services/Auto_rides', label: 'Daily Rides' },
                { href: '/Services/rentals', label: 'Rentals' },
                { href: '/Services/Intercity', label: 'Intercity' },
                { href: '#', label: 'Corporate' },
                { href: '#', label: 'Delivery' },
                { href: '/allcities', label: 'View All Cities' },
              ].map(service => (
                <li key={service.label}>
                  <Link to={service.href} className="flex items-center hover:text-green-500 transition-colors">
                    <ChevronRight className="mr-2 h-4 w-4" />{service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-green-500 text-base font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-green-500 shrink-0" />
                <span>
                  IdharUdhar Headquarters,<br />
                  123 Eco Street, Green Tower,<br />
                  New Delhi, 110001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-green-500" />
                <Link to="tel:+911800123456" className="hover:text-white transition-colors">+91 1800 123 4567</Link>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-green-500" />
                <Link to="mailto:support@idharudhar.com" className="hover:text-white transition-colors">support@idharudhar.com</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm">
            <p>&copy; {new Date().getFullYear()} IdharUdhar. All rights reserved.</p>
            <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0">
              <Link to="" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link to="" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="" className="hover:text-white transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;