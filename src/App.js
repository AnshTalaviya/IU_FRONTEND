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
// import CarRides from "./components/Services/Car_Rides";
import Car_Rides from "./components/Services/Car_Rides";
import Rentals from "./components/Services/Rentals";
import Auto_Rides from "./components/Services/Auto_Rides";
import Bike_Rides from "./components/Services/Bike_Rides";
import Intercity from "./components/Services/Intercity";
import Book_Ride from "./components/Services/Book_Ride";
import SignUp from "./components/User/Signup";
import Login from "./components/User/Login";
import Aboutpage from "./components/Aboutpage/Aboutpage";
import Allcities from "./components/Aboutpage/Allcities";
import HeroSafety from "./components/Safety/HeroSafety";
import CarRide from "./components/RidePages/CarRide/CarRide";
import CarProps from "./components/RidePages/CarRide/CarProps";
import PremiumProps from "./components/RidePages/CarRide/PremiumProps";
import GreenXL from "./components/RidePages/CarRide/GreenXL";
import AutoRide from "./components/RidePages/AutoRide/autoRide";
import AutoProps from "./components/RidePages/AutoRide/AutoProps";
import GreenAuto from "./components/RidePages/AutoRide/GreenAuto";
import CourierXL from "./components/RidePages/CourierRide/CourierXL";

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
import CourierRide from "./components/RidePages/CourierRide/CourierRide";
import CourierProps from "./components/RidePages/CourierRide/CourierProps";
import FoodRide from "./components/RidePages/FoodDelivery/FoodRide";
import FoodProps from "./components/RidePages/FoodDelivery/FoodProps";
import FoodXL from "./components/RidePages/FoodDelivery/FoodXL";
import Grocery from "./components/RidePages/Grocery/Grocery";
import GroceryProps from "./components/RidePages/Grocery/GroceryProps";
import GroceryXL from "./components/RidePages/Grocery/GroceryXL";
import ScrollTop from "./components/ScrollTop";
import FoodDeliveryPage from "./components/Home/FoodDeliveryPage";
import UserProfile from "./components/profile/userProfile";
import ViewAllRides from "./components/profile/viewAllRide";
import Faqs from "./components/User/Faqs";
import Contactus from "./components/User/Contactus";
import Notifications from "./components/profile/Notification";
import SettingsPage from "./components/profile/Setting";
function App() {
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (!user && window.location.pathname === "/profile") {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div className="App  w-full max-w-full overflow-x-hidden">

      <Layout>
        <ScrollTop />

        <Routes>
          {/* User Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/Services/carrides" element={<Car_Rides />} />
          <Route path="/Services/rentals" element={<Rentals />} />
          <Route path="/Services/Auto_rides" element={<Auto_Rides />} />
          <Route path="/Services/Bike_rides" element={<Bike_Rides />} />
          <Route path="/Services/Intercity" element={<Intercity />} />
          <Route path="/Book_ride" element={<Book_Ride />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/allcities" element={<Allcities />} />
          <Route path="/Safety" element={<HeroSafety />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/faqs" element={<Faqs />} />
          {/* <Contactus /> */}

          {/* user profile */}
          <Route path="/userProfile" element={<UserProfile />} />
          <Route path="/ViewAllRides" element={<ViewAllRides />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/settings" element={<SettingsPage />} />

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

          {/* Courier Delivery */}
          <Route path="/courier-ride" element={<CourierRide />} />
          <Route path="/fast" element={<CourierProps />} />
          <Route path="/luggage" element={<CourierXL />} />

          {/* Food Delivery */}
          <Route path="/food-delivery" element={<FoodRide />} />
          <Route path="/food" element={<FoodProps />} />
          <Route path="/foodxl" element={<FoodXL />} />

          {/* Grocery Delivery */}
          <Route path="/grocery-delivery" element={<Grocery />} />
          <Route path="/grocery" element={<GroceryProps />} />
          <Route path="/groceryxl" element={<GroceryXL />} />


          {/* Driver side  */}
          {/* Protected driver routes */}
          <Route path='/driver' element={
            <DriverPannle />
          }>
            <Route index element={<DriverDashboard />} />
            <Route path='ridehistory' element={<RideHistory />} />
            <Route path='earnings' element={<Earnings />} />
            <Route path='profile' element={<Profile />} />
            <Route path='support' element={<Support />} />
            <Route path='settings' element={<Settings />} />
          </Route>
        </Routes>
      </Layout>
      <FoodDeliveryPage />
    </div>
  );
}

export default App;

