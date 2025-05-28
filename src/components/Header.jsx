import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import UserAvatar from "./User/UserAvatar";
import {
  Menu,
  Moon,
  Sun,
  Globe,
  X,
  Mail,
  Phone,
  ChevronDown,
} from "lucide-react";
import Logo from "./Logo";

const Header = () => {
  const { isAuthenticated } = useAuth();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setServicesOpen(false);
    setHelpOpen(false);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("darkMode", newMode ? "true" : "false");
  };

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(savedMode);
    document.documentElement.classList.toggle("dark", savedMode);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="w-full">
        {/* Top Bar */}
        <div className="bg-[#166534] text-white py-2 px-4 fixed top-0 left-0 w-full z-50 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a
              href="mailto:support@idharudhar.com"
              className="text-sm flex items-center hover:text-green-200"
            >
              <Mail className="mr-2" size={16} />
              <span className="hidden sm:inline">support@idharudhar.com</span>
              <span className="sm:hidden">Email Us</span>
            </a>
            <a
              href="tel:+919999988888"
              className="text-sm flex items-center hover:text-green-200"
            >
              <Phone className="mr-2" size={16} />
              <span>+91 99999 88888</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            {/* Social Icons */}
            {/* Replace # with actual links */}
            <a href="#" className="hover:text-green-200">
              {/* Instagram Icon */}
            </a>
            <a href="#" className="hover:text-green-200">
              {/* Facebook Icon */}
            </a>
            <a href="#" className="hover:text-green-200">
              {/* LinkedIn Icon */}
            </a>
          </div>
        </div>

        {/* Main Navigation */}
        <div className={`bg-white text-black dark:bg-gray-900 dark:text-white py-4 px-4 fixed top-9 left-0 w-full z-40 transition-shadow duration-300 ${scrolled ? "shadow-lg" : ""}`}>
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-2xl font-bold">
              <Logo />
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/" className="hover:text-green-400">Home</Link>
              <div className="relative">
                <button onClick={() => setServicesOpen(!servicesOpen)} className="flex items-center hover:text-green-400">
                  Services
                  <ChevronDown className={`ml-1 transition-transform ${servicesOpen ? "rotate-180" : ""}`} size={16} />
                </button>
                <div className={`absolute top-full mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg transition-all ${servicesOpen ? "opacity-100 max-h-96" : "opacity-0 max-h-0"}`}>
                  <Link to="/Services/carrides" className="block px-4 py-2 hover:bg-green-200 dark:hover:bg-green-700">Car Rides</Link>
                  <Link to="/Services/rentals" className="block px-4 py-2 hover:bg-green-200 dark:hover:bg-green-700">Rentals</Link>
                  <Link to="/Services/Auto_rides" className="block px-4 py-2 hover:bg-green-200 dark:hover:bg-green-700">Auto Rides</Link>
                  <Link to="/Services/Bike_rides" className="block px-4 py-2 hover:bg-green-200 dark:hover:bg-green-700">Bike Rides</Link>
                  <Link to="/Services/Intercity" className="block px-4 py-2 hover:bg-green-200 dark:hover:bg-green-700">Intercity</Link>
                </div>
              </div>

              <Link to="/safety" className="hover:text-green-400">Safety</Link>
              <Link to="/about" className="hover:text-green-400">About</Link>

              <div className="relative">
                <button onClick={() => setHelpOpen(!helpOpen)} className="flex items-center hover:text-green-400">
                  Help
                  <ChevronDown className={`ml-1 transition-transform ${helpOpen ? "rotate-180" : ""}`} size={16} />
                </button>
                <div className={`absolute top-full mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg transition-all ${helpOpen ? "opacity-100 max-h-96" : "opacity-0 max-h-0"}`}>
                  <Link to="/faqs" className="block px-4 py-2 hover:bg-green-200 dark:hover:bg-green-700">FAQs</Link>
                  <Link to="/contact" className="block px-4 py-2 hover:bg-green-200 dark:hover:bg-green-700">Contact Us</Link>
                  <Link to="/support" className="block px-4 py-2 hover:bg-green-200 dark:hover:bg-green-700">Support</Link>
                </div>
              </div>
            </nav>

            {/* Right Side */}
            <div className="hidden md:flex items-center space-x-4">
              <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-green-200 dark:hover:bg-gray-700">
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button className="p-2 rounded-full hover:bg-green-200 dark:hover:bg-gray-700">
                <Globe size={20} />
              </button>
              {isAuthenticated ? (
                <UserAvatar />
              ) : (
                <>
                  <Link to="/login" className="bg-white dark:bg-[#0F141B] px-4 py-2 rounded-md border hover:bg-[#0F5729] hover:text-white dark:text-white">Login</Link>
                  <Link to="/signup" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">Sign Up</Link>
                </>
              )}
            </div>

            {/* Mobile Button */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-white dark:bg-gray-900 z-30 pt-28 px-4 transition-transform duration-300 ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}>
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="text-lg font-medium py-2 border-b">Home</Link>
            <details className="group">
              <summary className="flex justify-between items-center text-lg py-2 border-b cursor-pointer">Services <ChevronDown size={16} /></summary>
              <div className="mt-2 ml-4 space-y-2">
                <Link to="/Services/carrides" className="block py-2">Car Ride</Link>
                <Link to="/Services/rentals" className="block py-2">Rentals</Link>
                <Link to="/Services/Auto_rides" className="block py-2">Auto Ride</Link>
                <Link to="/Services/Bike_rides" className="block py-2">Bike Ride</Link>
                <Link to="/Services/Intercity" className="block py-2">Intercity</Link>
              </div>
            </details>
            <Link to="/safety" className="text-lg font-medium py-2 border-b">Safety</Link>
            <Link to="/about" className="text-lg font-medium py-2 border-b">About</Link>
            <details className="group">
              <summary className="flex justify-between items-center text-lg py-2 border-b cursor-pointer">Help <ChevronDown size={16} /></summary>
              <div className="mt-2 ml-4 space-y-2">
                <Link to="/faqs" className="block py-2">FAQs</Link>
                <Link to="/contact" className="block py-2">Contact Us</Link>
                <Link to="/support" className="block py-2">Support</Link>
              </div>
            </details>
            <div className="flex space-x-4 py-4">
              <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                <Globe size={20} />
              </button>
            </div>
            <div className="flex flex-col space-y-3 mt-4">
              {isAuthenticated ? (
                <div className="flex items-center space-x-3">
                  <UserAvatar size="lg" />
                  <span className="font-medium">My Profile</span>
                </div>
              ) : (
                <>
                  <Link to="/login" className="bg-white text-black dark:bg-[#0F141B] dark:text-white px-4 py-2 rounded-md border">Login</Link>
                  <Link to="/signup" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">Sign Up</Link>
                </>
              )}
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
