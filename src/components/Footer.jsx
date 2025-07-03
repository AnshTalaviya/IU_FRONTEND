import React from 'react';
import {
  Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail, ChevronRight,
} from 'lucide-react';
import Logo from './Logo';
import { Link } from 'react-router-dom';

const Footer = () => {
  console.log('Footer rendered at:', window.location.pathname);

  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400 text-sm relative">

      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-14">
          {/* Company Info */}
          <div>
            <div className='justify-center flex'>
              <img src="/images/Idhar Udhar Logo.png" width={"40px"} alt="" />
              <Logo className="ml-2 text-green-500" />
            </div>
            <p className="mt-4 mb-6">
              Your premium eco-friendly trip-sharing service. Available 24/7 in over 500+ cities nationwide.
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
                { href: '/services', label: 'Services' },
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
            <h3 className="text-green-500 text-base font-semibold mb-4">Policy</h3>
            <ul className="space-y-3">
              {[
                { href: '/privacypolicy', label: 'Privacy Policy IU' },
                { href: '/servicepolicy', label: 'Service Agreement' },
                { href: '/zerotolerancepolicy', label: 'Zero Tolerance Policy' },
                { href: '/tc', label: 'IU Terms and Condition' },
                { href: '/customertc', label: 'IU Customer Terms And Condition' },
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
        <div className="border-t border-gray-800 py-8 flex justify-center items-center">
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-center">
            <p>&copy; {new Date().getFullYear()} IdharUdhar. All rights reserved.</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;