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
  // eslint-disable-next-line
  const [helpOpen, setHelpOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

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

  const getInitials = (fullName) => {
    if (!fullName) {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        try {
          const parsedUser = JSON.parse(storedUser);
          fullName = parsedUser?.fullName;
        } catch (err) {
          console.error("Failed to parse user from localStorage:", err);
          return "JD";
        }
      }
    }

    if (!fullName || typeof fullName !== "string") return "JD";

    const parts = fullName.trim().split(" ");
    return parts.length === 1
      ? parts[0][0].toUpperCase()
      : (parts[0][0] + parts[1][0]).toUpperCase();
  };


  return (
    <>
      <header className="w-full">
        {/* Top Bar */}
        <div className=" bg-[#166534] text-white py-2 px-4 fixed top-0 left-0 w-full z-50 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a href="mailto:support@idharudhar.com" className="text-sm flex items-center hover:text-green-200">
              <Mail className="mr-2" size={16} />
              <span className="hidden sm:inline">support@idharudhar.com</span>
              <span className="sm:hidden">Email Us</span>
            </a>
            <a href="tel:+919999988888" className="text-sm flex items-center hover:text-green-200">
              <Phone className="mr-2" size={16} />
              <span>+91 99999 88888</span>
            </a>
          </div>
          <div className=" max-w-[90%] flex items-center">
            <a href="https://www.instagram.com/" className="hover:text-gray-300 mx-2">
              <i className="fab fa-instagram" />
            </a>
            <a href="https://www.facebook.com/" className="hover:text-gray-300 mx-2">
              <i className="fab fa-facebook" />
            </a>
            <a href="https://www.linkdiny.com/" className="hover:text-gray-300 mx-2">
              <i className="fab fa-linkedin" />
            </a>
          </div>
        </div>

        {/* Main Nav */}
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
                <div className={`absolute top-full mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg transition-all ${servicesOpen ? "opacity-100 max-h-96" : "opacity-0 max-h-0 overflow-hidden"}`}>
                  <Link to="/Services/carrides" className="block px-4 py-2 hover:bg-green-200 dark:hover:bg-green-700">Car Rides</Link>
                  <Link to="/Services/rentals" className="block px-4 py-2 hover:bg-green-200 dark:hover:bg-green-700">Rentals</Link>
                  <Link to="/Services/Auto_rides" className="block px-4 py-2 hover:bg-green-200 dark:hover:bg-green-700">Auto Rides</Link>
                  <Link to="/Services/Bike_rides" className="block px-4 py-2 hover:bg-green-200 dark:hover:bg-green-700">Bike Rides</Link>
                  <Link to="/Services/Intercity" className="block px-4 py-2 hover:bg-green-200 dark:hover:bg-green-700">Intercity</Link>
                </div>
              </div>
              <Link to="/safety" className="hover:text-green-400">Safety</Link>
              <Link to="/about" className="hover:text-green-400">About</Link>
              <Link to="/contact" className="hover:text-green-400">Contact Us</Link>
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
                <div className="relative group focus-within:z-50">
                  <button className="w-10 h-10 rounded-full bg-green-700 text-white flex items-center justify-center font-semibold hover:bg-green-800 transition focus:outline-none">
                    {getInitials(user?.name)}
                  </button>
                  <div className="absolute right-0 mt-2 w-56 bg-[#0F141B] text-white rounded-md shadow-lg p-2 hidden group-focus-within:block">
                    <div className="px-3 py-2 font-semibold border-b border-gray-700">My Account</div>
                    <Link to="/userProfile" className="flex items-center gap-2 px-3 py-2 hover:bg-gray-800">
                      <User size={16} /> Profile
                    </Link>
                    <Link to="/notifications" className="flex items-center gap-2 px-3 py-2 hover:bg-gray-800">
                      <Bell size={16} /> Notifications
                    </Link>
                    <Link to="/settings" className="flex items-center gap-2 px-3 py-2 hover:bg-gray-800">
                      <Settings size={16} /> Settings
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        window.location.href = "/";
                      }}
                      className="w-full text-left text-red-500 flex items-center gap-2 px-3 py-2 hover:bg-gray-800"
                    >
                      <LogOut size={16} /> Logout
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <Link to="/login" className="bg-white dark:bg-[#0F141B] px-4 py-2 rounded-md border hover:bg-[#0F5729] hover:text-white dark:text-white">Login</Link>
                  <Link to="/signup" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">Sign Up</Link>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 z-30 pt-28 px-4 transition-transform duration-300 md:hidden ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"} bg-white text-black dark:bg-gray-900 dark:text-white`}>
          <Link to="/" className="block py-2 border-b hover:text-green-500">Home</Link>
          <div>
            <button onClick={() => setServicesOpen(!servicesOpen)} className="w-full text-left py-2 flex justify-between items-center border-b">
              <span>Services</span>
              <ChevronDown className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} size={16} />
            </button>
            {servicesOpen && (
              <div className="pl-4 space-y-1 flex flex-col">
                <Link to="/Services/carrides">Car Rides</Link>
                <Link to="/Services/rentals">Rentals</Link>
                <Link to="/Services/Auto_rides">Auto Rides</Link>
                <Link to="/Services/Bike_rides">Bike Rides</Link>
                <Link to="/Services/Intercity">Intercity</Link>
              </div>
            )}
          </div>
          <Link to="/safety" className="block py-2 border-b hover:text-green-500">Safety</Link>
          <Link to="/about" className="block py-2 border-b hover:text-green-500">About</Link>
          <Link to="/contact" className="block py-2 hover:text-green-500">Contact Us</Link>
          <div className="items-center justify-around flex mt-3 flex-wrap">
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-green-200 dark:hover:bg-gray-700">
              {isDarkMode ? <Sun size={30} /> : <Moon size={30} />}
            </button>
            <button className="p-2 rounded-full hover:bg-green-200 dark:hover:bg-gray-700">
              <Globe size={30} />
            </button>
            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                  className="w-10 h-10 rounded-full bg-green-700 text-white font-semibold hover:bg-green-800 transition focus:outline-none"
                >
                  {getInitials(user?.name)}
                </button>

                {isProfileDropdownOpen && (
                  <div className="mt-2 bg-[#0F141B] text-white rounded-md shadow-lg p-2 w-full">
                    <div className="px-3 py-2 font-semibold border-b border-gray-700">My Account</div>
                    <Link to="/userProfile" className="flex items-center gap-2 px-3 py-2 hover:bg-gray-800">
                      <User size={16} /> Profile
                    </Link>
                    <Link to="/notifications" className="flex items-center gap-2 px-3 py-2 hover:bg-gray-800">
                      <Bell size={16} /> Notifications
                    </Link>
                    <Link to="/settings" className="flex items-center gap-2 px-3 py-2 hover:bg-gray-800">
                      <Settings size={16} /> Settings
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        window.location.href = "/";
                      }}
                      className="w-full text-left text-red-500 flex items-center gap-2 px-3 py-2 hover:bg-gray-800"
                    >
                      <LogOut size={16} /> Logout
                    </button>
                  </div>
                )}
              </div>

            ) : (
              <>
                <Link to="/login" className="bg-white dark:bg-[#0F141B] px-4 py-2 rounded-md border hover:bg-[#0F5729] hover:text-white dark:text-white">Login</Link>
                <Link to="/signup" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">Sign Up</Link>
              </>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
