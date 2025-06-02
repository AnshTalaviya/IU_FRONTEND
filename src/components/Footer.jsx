import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
import Logo from './Logo';
import { Link } from 'react-router-dom';

const Footer  = () => {
  console.log('Footer rendered at:', window.location.pathname);

  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-400 dark:text-gray-400">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-16">
          {/* Company Info */}
          <div className="text-left">
            <Logo />
            <p className="mt-4 mb-6">
              Your premium eco-friendly ride-sharing service. Available 24/7 in over 500+ cities nationwide.
            </p>
            <div className="flex space-x-4">
              <Link to="#" className="hover:text-green-500 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </Link>
              <Link to="#" className="hover:text-green-500 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </Link>
              <Link to="#" className="hover:text-green-500 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </Link>
              <Link to="#" className="hover:text-green-500 transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-left">
            <h3 className="text-green-500 text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-green-500 transition-colors flex items-center"><ChevronRight className="mr-2 h-4 w-4" />Home</Link></li>
              <li><Link to="/about" className="hover:text-green-500 transition-colors flex items-center"><ChevronRight className="mr-2 h-4 w-4" />About Us</Link></li>
              <li><Link to="/Services/carrides" className="hover:text-green-500 transition-colors flex items-center"><ChevronRight className="mr-2 h-4 w-4" />Services</Link></li>
              <li><Link to="/Safety" className="hover:text-green-500 transition-colors flex items-center"><ChevronRight className="mr-2 h-4 w-4" />Safety</Link></li>
              <li><Link to="/signup" className="hover:text-green-500 transition-colors flex items-center"><ChevronRight className="mr-2 h-4 w-4" />Become a Driver</Link></li>
              <li><Link to="/faqs" className="hover:text-green-500 transition-colors flex items-center"><ChevronRight className="mr-2 h-4 w-4" />FAQs</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="text-left">
            <h3 className="text-green-500 text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/Services/Auto_rides" className="hover:text-green-500 transition-colors flex items-center"><ChevronRight className="mr-2 h-4 w-4" />Daily Rides</Link></li>
              <li><Link to="/Services/rentals" className="hover:text-green-500 transition-colors flex items-center"><ChevronRight className="mr-2 h-4 w-4" />Rentals</Link></li>
              <li><Link to="/Services/Intercity" className="hover:text-green-500 transition-colors flex items-center"><ChevronRight className="mr-2 h-4 w-4" />Intercity</Link></li>
              <li><Link to="#" className="hover:text-green-500 transition-colors flex items-center"><ChevronRight className="mr-2 h-4 w-4" />Corporate</Link></li>
              <li><Link to="#" className="hover:text-green-500 transition-colors flex items-center"><ChevronRight className="mr-2 h-4 w-4" />Delivery</Link></li>
              <li><Link to="/allcities" className="hover:text-green-500 transition-colors flex items-center"><ChevronRight className="mr-2 h-4 w-4" />View All Cities</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-left">
            <h3 className="text-green-500 text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-green-500 shrink-0" />
                <span>IdharUdhar Headquarters,<br />123 Eco Street, Green Tower,<br />New Delhi, 110001</span>
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
        <div className="border-t border-gray-800 py-12 text-left"> {/* Increased padding here */}
          <div className="flex flex-col md:flex-row justify-between items-center" style={{ alignItems: 'flex-start' }}>
            <p className="mb-2 md:mb-0">&copy; {new Date().getFullYear()} IdharUdhar. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="#" className="hover:text-white transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;