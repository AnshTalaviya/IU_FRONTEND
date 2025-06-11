import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";


// Contexts
import { useAuth } from "./contexts/AuthContext";

// Common
import Layout from "./components/Layout";
import { ThemeProvider } from "./contexts/ThemeContext";

// User Pages
import HomePage from "./pages/HomePage";
import Car_Rides from "./components/Services/Car_Rides";
import Rentals from "./components/Services/Rentals";
import Auto_Rides from "./components/Services/Auto_Rides";
import Bike_Rides from "./components/Services/Bike_Rides";
import Intercity from "./components/Services/Intercity";
import Book_Ride from "./components/Services/Book_Ride";
import SignUp from "./components/User/Signup";
import Login from "./components/User/Login";
import Aboutpage from "./components/Aboutpage/Aboutpage";
import Contactus from "./components/User/Contactus";
import Allcities from "./components/Aboutpage/Allcities";
import HeroSafety from "./components/Safety/HeroSafety";
import CarRide from "./components/RidePages/CarRide/CarRide";
import CarProps from "./components/RidePages/CarRide/CarProps";
import PremiumProps from "./components/RidePages/CarRide/PremiumProps";
import GreenXL from "./components/RidePages/CarRide/GreenXL";
import AutoRide from "./components/RidePages/AutoRide/autoRide";
import AutoProps from "./components/RidePages/AutoRide/AutoProps";
import GreenAuto from "./components/RidePages/AutoRide/GreenAuto";

// Driver Pages
import DriverDashboard from './components/DriverDashboard/Page/DriverDashboard';
import DriverPannle from './components/DriverDashboard/DriverPannle';
import RideHistory from './components/DriverDashboard/Page/RideHistory';
import Earnings from './components/DriverDashboard/Page/Earnings';
import Profile from './components/DriverDashboard/Page/Profile';
import Support from './components/DriverDashboard/Page/Support';
import Settings from './components/DriverDashboard/Page/Settings';
import RideBooking from "./components/RideBooking/RideBooking";
import ServiceOptions from "./components/RideBooking/ServiceOptions";
import BikeRide from "./components/RideBooking/BikeRide";
import BikeProps from "./components/RideBooking/BikeProps";
import RideTrackingPage from "./components/RideBooking/RideTrackingPage";
import RideCompleted from "./components/RideBooking/RideCompleted";
import ConfirmRide from "./components/RideBooking/ConfirmRide";
import FoodRide from "./components/RidePages/FoodDelivery/FoodRide";
import FoodProps from "./components/RidePages/FoodDelivery/FoodProps";
import FoodXL from "./components/RidePages/FoodDelivery/FoodXL";
import Grocery from "./components/RidePages/Grocery/Grocery";
import GroceryProps from "./components/RidePages/Grocery/GroceryProps";
import GroceryXL from "./components/RidePages/Grocery/GroceryXL";
import UserProfile from "./components/profile/userProfile";
import ViewAllRides from "./components/profile/viewAllRide";
import Notifications from "./components/profile/Notification";
import SettingsPage from "./components/profile/Setting";
// import Faqs from "./components/User/Faqs"
import CourierDelivery from "./pages/CourierDelivery";
import BikeDelivery from "./pages/BikeDelivery";
import MiniTruckDelivery from "./pages/MiniTruckDelivery";
import MovingService from "./pages/MovingService";
import ScrollTop from "./components/ScrollTop";
import CityDelivery from "./pages/CityDelivery";
import Faqs from "./components/Faqs";

function App() {
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (!user && window.location.pathname === "/profile") {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <ThemeProvider>
      {/* <Contactus/> */}
      <ScrollTop />
      <div className="App w-full max-w-full overflow-x-hidden">
        <Routes>
          {/* Driver Panel - No Layout */}
          <Route path="/driver" element={<DriverPannle />}>
            <Route index element={<DriverDashboard />} />
            <Route path="ridehistory" element={<RideHistory />} />
            <Route path="earnings" element={<Earnings />} />
            <Route path="profile" element={<Profile />} />
            <Route path="support" element={<Support />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          {/* All other routes use Layout */}
          <Route
            path="*"
            element={

              <Layout>

                <Routes>
                  {/* User Routes go here */}
                  <Route path="/" element={<HomePage />} />
                   {/* eslint-disable-next-line */}
                  <Route path="/Services/carrides" element={<Car_Rides />} />
                  <Route path="/Services/rentals" element={<Rentals />} />
                  {/* eslint-disable-next-line */}
                  <Route path="/Services/Auto_rides" element={<Auto_Rides />} />
                  {/* eslint-disable-next-line */}
                  <Route path="/Services/Bike_rides" element={<Bike_Rides />} />
                  <Route path="/Services/Intercity" element={<Intercity />} />
                  {/* eslint-disable-next-line */}
                  <Route path="/Book_ride" element={<Book_Ride />} />
                  <Route path="/about" element={<Aboutpage />} />
                  <Route path="/contact" element={<Contactus />} />
                  <Route path="/allcities" element={<Allcities />} />
                  <Route path="/Safety" element={<HeroSafety />} />
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/userProfile" element={<UserProfile />} />
                  <Route path="/ViewAllRides" element={<ViewAllRides />} />
                  <Route path="/notifications" element={<Notifications />} />
                  <Route path="/settings" element={<SettingsPage />} />
                  <Route path="/faqs" element={<Faqs />} />

                  {/* Ride Booking */}
                  <Route path="/book" element={<RideBooking />} />
                  <Route path="/book-ride" element={<ServiceOptions />} />
                  <Route path="/bike-ride" element={<BikeRide />} />
                  <Route path="/confirm" element={<BikeProps />} />
                  <Route path="/ride-tracking" element={<RideTrackingPage />} />
                  <Route path="/rating" element={<RideCompleted />} />
                  <Route path="/confirm-ride" element={<ConfirmRide />} />

                  {/* CarRide */}
                  <Route path="/Car-ride" element={<CarRide />} />
                  <Route path="/features/air-conditioned" element={<CarProps />} />
                  <Route path="/features/premium-cars" element={<PremiumProps />} />
                  <Route path="/features/spacious" element={<GreenXL />} />

                  {/* AutoRide */}
                  <Route path="/auto-ride" element={<AutoRide />} />
                  <Route path="/economical" element={<AutoProps />} />
                  <Route path="/spacious" element={<GreenAuto />} />

                  {/* Courier */}
                  <Route path="/courier-ride" element={<CourierDelivery />} />
                  <Route path="/services/bike-delivery" element={<BikeDelivery />} />
                  <Route path="/services/mini-trucks" element={<MiniTruckDelivery />} />
                  <Route path="/services/move-service" element={<MovingService />} />
                  <Route path="/services/city-to-city" element={<CityDelivery />} />

                  {/* Food */}
                  <Route path="/food-delivery" element={<FoodRide />} />
                  <Route path="/food" element={<FoodProps />} />
                  <Route path="/foodxl" element={<FoodXL />} />

                  {/* Grocery */}
                  <Route path="/grocery-delivery" element={<Grocery />} />
                  <Route path="/grocery" element={<GroceryProps />} />
                  <Route path="/groceryxl" element={<GroceryXL />} />
                </Routes>
              </Layout>
            }
          />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;

