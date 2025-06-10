import React from 'react'
import HeroSection from '../components/DeliveryPages/MinitruckDeliveryPage/HeroSection'
import TruckCard from '../components/DeliveryPages/MinitruckDeliveryPage/TruckCard'
import OtherServices from '../components/DeliveryPages/MinitruckDeliveryPage/OtherServices'
import GoodsTransportInfo from '../components/DeliveryPages/MinitruckDeliveryPage/GoodsTransportInfo'
import FaqSection from '../components/DeliveryPages/MinitruckDeliveryPage/FaqSection'

export default function MiniTruckDelivery() {
    return (
        <div>
            <HeroSection />
            <TruckCard/>
            <OtherServices/>
            <GoodsTransportInfo/>
            <FaqSection/>
        </div>
    )
}
