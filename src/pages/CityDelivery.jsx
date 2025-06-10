import React from 'react'
import CityHeroSection from '../components/DeliveryPages/CityDeliveryPage/CityHeroSection'
import IntercityBenefits from '../components/DeliveryPages/CityDeliveryPage/IntercityBenefits'
import OtherServices from '../components/DeliveryPages/CityDeliveryPage/OtherServices'
import GoodsTransport from '../components/DeliveryPages/CityDeliveryPage/GoodsTransport'
import TestimonialSection from '../components/DeliveryPages/CityDeliveryPage/TestimonialSection'
import FaqSection from '../components/DeliveryPages/CityDeliveryPage/FAQSection'

const CityDelivery = () => {
  return (
    <div>
      <CityHeroSection/>
      <IntercityBenefits/>
      <OtherServices/>
      <GoodsTransport/>
      <TestimonialSection/>
      <FaqSection/>
    </div>
  )
}

export default CityDelivery
