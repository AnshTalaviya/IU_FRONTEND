import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import {
  Menu,
  Moon,
  Sun,
  Globe,
  X,
  Mail,
  Phone,
  ChevronDown,
  User,
  Bell,
  Settings,
  LogOut,
} from "lucide-react";
import Logo from "./Logo";

const Header = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);


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

  const getInitials = (name) => {
    if (!name) {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        try {
          const parsedUser = JSON.parse(storedUser);
          name = parsedUser.name;
        } catch (err) {
          console.error("Failed to parse user from localStorage:", err);
          return "JD";
        }
      } else {
        return "JD";
      }
    }

    const parts = (name || "").replace(/^\s+|\s+$/g, "").split(/\s+/);
    // return parts.length === 1
    //   ? parts[0][0].toUpperCase()
    //   : (parts[0][0] + parts[1][0]).toUpperCase();
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#166534] text-white text-sm py-1 w-full fixed top-0 left-0 z-50">
        <div className="max-w-[90%] mx-auto flex flex-wrap justify-between items-center gap-y-2">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-xs sm:text-sm">
            <a
              href="mailto:support@idharudhar.com"
              className="flex items-center gap-1"
            >
              <Mail size={14} /> <span className="hidden sm:inline">support@idharudhar.com</span>
            </a>
            <a
              href="tel:+919999988888"
              className="flex items-center gap-1"
            >
              <Phone size={14} /> <span className="hidden sm:inline">+91 99999 88888</span>
            </a>
          </div>
<<<<<<< HEAD
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-green-200">{/* Instagram */}</a>
            <a href="#" className="hover:text-green-200">{/* Facebook */}</a>
            <a href="#" className="hover:text-green-200">{/* LinkedIn */}</a>
=======

          <div className="flex items-center gap-6 text-xl">
            <a href="#" aria-label="Instagram" className="hover:text-gray-300">
              <i className="fab fa-instagram" />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-gray-300">
              <i className="fab fa-facebook" />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-gray-300">
              <i className="fab fa-linkedin" />
            </a>
>>>>>>> d267da500e5449feb4734f5fa2fdd6f045c64af4
          </div>
        </div>
      </div>

<<<<<<< HEAD
        {/* Main Nav */}
        <div
          className={`bg-white text-black dark:bg-gray-900 dark:text-white py-4 px-4 fixed top-9 left-0 w-full z-40 transition-shadow duration-300 ${scrolled ? "shadow-lg" : ""
            }`}
        >
          <div className="container mx-auto flex justify-between items-center">
=======
      {/* Main Navigation */}
      <header className="w-full">
        <div className={`bg-white text-black dark:bg-gray-900 dark:text-white py-3 px-4 fixed top-9 left-0 w-full z-40 transition-all duration-300 ${scrolled ? "shadow-lg" : ""}`}>
          <div className="max-w-[92%] mx-auto flex justify-between items-center">
>>>>>>> d267da500e5449feb4734f5fa2fdd6f045c64af4
            <div className="text-2xl font-bold">
              <Logo />
            </div>

            {/* Desktop Nav */}
<<<<<<< HEAD
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/" className="hover:text-green-400">Home</Link>
              <div className="relative">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center hover:text-green-400"
                >
                  Services
                  <ChevronDown
                    className={`ml-1 transition-transform ${servicesOpen ? "rotate-180" : ""
                      }`}
                    size={16}
                  />
                </button>
                <div
                  className={`absolute top-full mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg transition-all ${servicesOpen
                    ? "opacity-100 max-h-96"
                    : "opacity-0 max-h-0 overflow-hidden"
                    }`}
                >
=======
            <nav className="hidden lg:flex items-center space-x-6">
              <Link to="/" className="hover:text-green-400 transition-colors">Home</Link>
              <div className="relative group">
                <button className="flex items-center hover:text-green-400 transition-colors">
                  Services
                  <ChevronDown className="ml-1 transition-transform group-hover:rotate-180" size={16} />
                </button>
                <div className="absolute top-full mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
>>>>>>> d267da500e5449feb4734f5fa2fdd6f045c64af4
                  <Link to="/Services/carrides" className="block px-4 py-2 hover:bg-green-200 dark:hover:bg-green-700">Car Rides</Link>
                  <Link to="/Services/rentals" className="block px-4 py-2 hover:bg-green-200 dark:hover:bg-green-700">Rentals</Link>
                  <Link to="/Services/Auto_rides" className="block px-4 py-2 hover:bg-green-200 dark:hover:bg-green-700">Auto Rides</Link>
                  <Link to="/Services/Bike_rides" className="block px-4 py-2 hover:bg-green-200 dark:hover:bg-green-700">Bike Rides</Link>
                  <Link to="/Services/Intercity" className="block px-4 py-2 hover:bg-green-200 dark:hover:bg-green-700">Intercity</Link>
                </div>
              </div>

              <Link to="/safety" className="hover:text-green-400 transition-colors">Safety</Link>
              <Link to="/about" className="hover:text-green-400 transition-colors">About</Link>

<<<<<<< HEAD
              <div className="relative">
                <button
                  onClick={() => setHelpOpen(!helpOpen)}
                  className="flex items-center hover:text-green-400"
                >
                  Help
                  <ChevronDown
                    className={`ml-1 transition-transform ${helpOpen ? "rotate-180" : ""
                      }`}
                    size={16}
                  />
                </button>
                <div
                  className={`absolute top-full mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg transition-all ${helpOpen
                    ? "opacity-100 max-h-96"
                    : "opacity-0 max-h-0 overflow-hidden"
                    }`}
                >
=======
              <div className="relative group">
                <button className="flex items-center hover:text-green-400 transition-colors">
                  Help
                  <ChevronDown className="ml-1 transition-transform group-hover:rotate-180" size={16} />
                </button>
                <div className="absolute top-full mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
>>>>>>> d267da500e5449feb4734f5fa2fdd6f045c64af4
                  <Link to="/faqs" className="block px-4 py-2 hover:bg-green-200 dark:hover:bg-green-700">FAQs</Link>
                  <Link to="/contact" className="block px-4 py-2 hover:bg-green-200 dark:hover:bg-green-700">Contact Us</Link>
                  <Link to="/support" className="block px-4 py-2 hover:bg-green-200 dark:hover:bg-green-700">Support</Link>
                </div>
              </div>
            </nav>

            {/* Right Side */}
            <div className="hidden lg:flex items-center space-x-4">
              <button onClick={toggleTheme} className="p-2 rounded-full text-yellow-500 hover:bg-green-200 dark:hover:bg-green-900 transition-colors">
                {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
              </button>
              <button className="p-2 rounded-full hover:bg-green-200 dark:hover:bg-green-900 transition-colors">
                <Globe size={16} />
              </button>

              {isAuthenticated ? (
                <div className="relative">
                  <button
                    onClick={() => setUserDropdownOpen((prev) => !prev)}
                    className="w-10 h-10 rounded-full bg-green-700 text-white flex items-center justify-center font-semibold hover:bg-green-800 transition"
                  >
                    {getInitials(user?.name)}
                  </button>
                  {userDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-56 bg-[#0F141B] text-white rounded-md shadow-lg p-2 z-50">
                      <div className="px-3 py-2 font-semibold border-b border-gray-700">
                        My Account
                      </div>
                      <Link
                        to="/userProfile"
                        className="flex items-center gap-2 px-3 py-2 hover:bg-gray-800"
                      >
                        <User size={16} /> Profile
                      </Link>
                      <Link
                        to="/notifications"
                        className="flex items-center gap-2 px-3 py-2 hover:bg-gray-800"
                      >
                        <Bell size={16} /> Notifications
                      </Link>
                      <Link
                        to="/settings"
                        className="flex items-center gap-2 px-3 py-2 hover:bg-gray-800"
                      >
                        <Settings size={16} /> Settings
                      </Link>
                      <button
                        onClick={logout}
                        className="w-full text-left text-red-500 flex items-center gap-2 px-3 py-2 hover:bg-gray-800"
                      >
                        <LogOut size={16} /> Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <Link
                    to="/login"
<<<<<<< HEAD
                    className="bg-white dark:bg-[#0F141B] px-4 py-2 rounded-md border hover:bg-[#0F5729] hover:text-white dark:text-white"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                  >
                    Sign Up
                  </Link>
=======
                    className="bg-[#0c0d0f] text-sm text-white border border-gray-600 px-4 py-2 rounded-md hover:bg-green-900 hover:text-white hover:border-green-900 transition-colors"
                  >
                    Login
                  </Link>
                  <Link to="/signup" className="bg-green-500 text-sm text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">Sign Up</Link>
>>>>>>> d267da500e5449feb4734f5fa2fdd6f045c64af4
                </>
              )}

            </div>

<<<<<<< HEAD
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
=======
            {/* Mobile Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle menu"
>>>>>>> d267da500e5449feb4734f5fa2fdd6f045c64af4
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
<<<<<<< HEAD
        <div className={`fixed inset-0 bg-white dark:bg-gray-900 z-30 pt-28 px-4 transition-transform duration-300 ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}>
          {/* Add mobile nav here if needed */}
=======
        <div
          className={`fixed inset-0 bg-white dark:bg-gray-900 z-30 pt-28 px-4 transition-all duration-300 ease-in-out ${mobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"} lg:hidden`}
        >
          <nav className="flex flex-col space-y-4 text-black dark:text-white">
            <Link to="/" className="text-lg font-medium py-2 border-b border-gray-200 dark:border-gray-700 hover:text-green-400 dark:hover:text-green-400 transition-colors">Home</Link>

            <div className="border-b border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="w-full flex justify-between items-center text-lg py-2 cursor-pointer hover:text-green-400 dark:hover:text-green-400 transition-colors"
              >
                Services
                <ChevronDown className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} size={16} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${servicesOpen ? "max-h-96" : "max-h-0"}`}>
                <div className="mt-2 ml-4 space-y-2">
                  <Link to="/Services/carrides" className="block py-2 hover:text-green-400 dark:hover:text-green-400 transition-colors">Car Ride</Link>
                  <Link to="/Services/rentals" className="block py-2 hover:text-green-400 dark:hover:text-green-400 transition-colors">Rentals</Link>
                  <Link to="/Services/Auto_rides" className="block py-2 hover:text-green-400 dark:hover:text-green-400 transition-colors">Auto Ride</Link>
                  <Link to="/Services/Bike_rides" className="block py-2 hover:text-green-400 dark:hover:text-green-400 transition-colors">Bike Ride</Link>
                  <Link to="/Services/Intercity" className="block py-2 hover:text-green-400 dark:hover:text-green-400 transition-colors">Intercity</Link>
                </div>
              </div>
            </div>

            <Link to="/safety" className="text-lg font-medium py-2 border-b border-gray-200 dark:border-gray-700 hover:text-green-400 dark:hover:text-green-400 transition-colors">Safety</Link>
            <Link to="/about" className="text-lg font-medium py-2 border-b border-gray-200 dark:border-gray-700 hover:text-green-400 dark:hover:text-green-400 transition-colors">About</Link>

            <div className="border-b border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setHelpOpen(!helpOpen)}
                className="w-full flex justify-between items-center text-lg py-2 cursor-pointer hover:text-green-400 dark:hover:text-green-400 transition-colors"
              >
                Help
                <ChevronDown className={`transition-transform ${helpOpen ? "rotate-180" : ""}`} size={16} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${helpOpen ? "max-h-96" : "max-h-0"}`}>
                <div className="mt-2 ml-4 space-y-2">
                  <Link to="/faqs" className="block py-2 hover:text-green-400 dark:hover:text-green-400 transition-colors">FAQs</Link>
                  <Link to="/contact" className="block py-2 hover:text-green-400 dark:hover:text-green-400 transition-colors">Contact Us</Link>
                  <Link to="/support" className="block py-2 hover:text-green-400 dark:hover:text-green-400 transition-colors">Support</Link>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 py-4">
              <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
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
                  <Link to="/login" className="bg-white text-black dark:bg-[#0F141B] dark:text-white px-4 py-2 rounded-md border hover:bg-[#0F5729] hover:text-white transition-colors">Login</Link>
                  <Link to="/signup" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors">Sign Up</Link>
                </>
              )}
            </div>
          </nav>
>>>>>>> d267da500e5449feb4734f5fa2fdd6f045c64af4
        </div>
      </header>
    </>
  );
};

export default Header;
