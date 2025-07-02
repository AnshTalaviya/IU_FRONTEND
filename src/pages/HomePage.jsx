import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import ServiceSection from '../components/Home/ServiceSection';
import FeaturesSection from '../components/Home/FeaturesSection';
import TestimonialsSection from '../components/Home/TestimonialsSection';
import DownloadAppSection from '../components/Home/DownloadAppSection';
import VehicleSelector from '../components/VehicleSelector/VehicleSelector';
import HeroSection2 from '../components/Home/HeroSection2';
import VehicleSelector2 from '../components/Home/ServiceSection2';


const HomePage = () => {
  return (
    <div className="min-h-screen w-full">
      {/* <HeroSection /> */}
      <HeroSection2 />
      {/* <ServiceSection /> */}
      <VehicleSelector2 />
      {/* <VehicleSelector/> */}
      <FeaturesSection />
      <TestimonialsSection />
      <DownloadAppSection />
    </div>
  );
};

export default HomePage;