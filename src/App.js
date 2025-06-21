import React, { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";

// Contexts
import { useAuth } from "./contexts/AuthContext";
import { ThemeProvider } from "./contexts/ThemeContext";

// Common
import Layout from "./components/Layout";
import ScrollTop from "./components/ScrollTop";
import Preloader from "./components/PreLoader";

// Pages
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

// Ride Booking
import RideBooking from "./components/RideBooking/RideBooking";
import ServiceOptions from "./components/RideBooking/ServiceOptions";
import BikeRide from "./components/RideBooking/BikeRide";
import BikeProps from "./components/RideBooking/BikeProps";
import RideTrackingPage from "./components/RideBooking/RideTrackingPage";
import RideCompleted from "./components/RideBooking/RideCompleted";
import ConfirmRide from "./components/RideBooking/ConfirmRide";

// Deliveries
// import CourierDelivery from "./pages/CourierDelivery";
// import BikeDelivery from "./pages/BikeDelivery";
// import MiniTruckDelivery from "./pages/MiniTruckDelivery";
// import MovingService from "./pages/MovingService";
// import CityDelivery from "./pages/CityDelivery";


// Profile
import UserProfile from "./components/profile/userProfile";
import ViewAllRides from "./components/profile/viewAllRide";
import Notifications from "./components/profile/Notification";
import SettingsPage from "./components/profile/Setting";

// Misc
import Faqs from "./components/Faqs";
import Games from "./components/DriverDashboard/Page/Games";
import Searching_ride from "./components/RideBooking/Searching_ride";
import VehicleSelector from "./components/VehicleSelector/VehicleSelector";
import SelectParcel from "./components/VehicleSelector/SelectParcel";
import ParcelDetails from "./components/VehicleSelector/ParcelDetails";
import EstimateResults from "./components/VehicleSelector/EstimateResults";
import PaymentPage from "./components/User/PaymentPage";
import Service from "./components/ServicePage/Service";

function App() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  // Redirect from profile if not logged in
  useEffect(() => {
    if (!user && window.location.pathname === "/profile") {
      navigate("/");
    }
  }, [user, navigate]);

  // Show Preloader
  if (loading) {
    return <Preloader onComplete={() => setLoading(false)} />;
  }

  return (
    <ThemeProvider>
      <ScrollTop />
      <div className="App w-full max-w-full overflow-x-hidden">
        <Routes>
          {/* Driver Dashboard - No Layout */}
          <Route path="/driver" element={<DriverPannle />}>
            <Route path="profile" element={<Profile />} />
            <Route index element={<DriverDashboard />} />
            <Route path="earnings" element={<Earnings />} />
            <Route path="ridehistory" element={<RideHistory />} />
            <Route path="games" element={<Games />} />
            <Route path="support" element={<Support />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          {/* All other pages inside Layout */}

          <Route
            path="*"
            element={
              <Layout>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  {/* <Route path="/Services/carrides" element={<Car_Rides />} />
                  <Route path="/Services/rentals" element={<Rentals />} />
                  <Route path="/Services/Auto_rides" element={<Auto_Rides />} />
                  <Route path="/Services/Bike_rides" element={<Bike_Rides />} />
                  <Route path="/Services/Intercity" element={<Intercity />} /> */}
                  <Route path="/services" element={<Service />} />
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
                  <Route path="/Searching_ride" element={<Searching_ride />} />
                  <Route path="/confirm" element={<BikeProps />} />
                  <Route path="/ride-tracking" element={<RideTrackingPage />} />
                  <Route path="/payment" element={<PaymentPage />} />
                  <Route path="/rating" element={<RideCompleted />} />
                  <Route path="/confirm-ride" element={<ConfirmRide />} />

                  {/* Car Rides */}
                  <Route path="/Car-ride" element={<CarRide />} />
                  <Route path="/features/air-conditioned" element={<CarProps />} />
                  <Route path="/features/premium-cars" element={<PremiumProps />} />
                  <Route path="/features/spacious" element={<GreenXL />} />

                  {/* Auto Rides */}
                  <Route path="/auto-ride" element={<AutoRide />} />
                  <Route path="/economical" element={<AutoProps />} />
                  <Route path="/spacious" element={<GreenAuto />} />

                  {/* Courier & Delivery */}
                  <Route path="/vehicle-selector" element={<VehicleSelector />} />
                  <Route path="/select-parcel" element={<SelectParcel />} />
                  <Route path="/parcel-details" element={<ParcelDetails />} />
                  <Route path="/estimate-results" element={<EstimateResults />} />


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