import React from 'react'
import DeliveryPage from '../components/DeliveryPages/DeliveryPage'
import OurService from '../components/DeliveryPages/OurSerivice'
import CustomerReview from '../components/DeliveryPages/CustomerReview'
import HomeSections from '../components/DeliveryPages/HomeSection'
import FAQSection from '../components/DeliveryPages/FAQSection'
import DeliveryStories from '../components/DeliveryPages/DeliveryStories'
import CityServiceMap from '../components/DeliveryPages/CityServiceMap'

const CourierDelivery = () => {
  return (
    <div>
      <DeliveryPage/>
      <OurService/>
      <CustomerReview/>
      <HomeSections/>
      {/* <FAQSection/> */}
      <CityServiceMap/>
      <DeliveryStories/>
    </div>
  )
}

export default CourierDelivery
