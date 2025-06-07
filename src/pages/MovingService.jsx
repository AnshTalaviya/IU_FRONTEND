import React from 'react'
import HeroSection from '../components/DeliveryPages/MovingService/HeroSection'
import MovingCard from '../components/DeliveryPages/MovingService/MovingCard'
import OtherServices from '../components/DeliveryPages/MovingService/OtherServices'
import DownloadAppSection from '../components/DeliveryPages/MovingService/DownloadAppSection'
import GoodsTransportInfo from '../components/DeliveryPages/MovingService/GoodsTransportInfo'
import FaqSection from '../components/DeliveryPages/MovingService/FaqSection'

export default function MovingService() {
    return (
        <div>
            <HeroSection />
            <MovingCard />
            <DownloadAppSection />
            <OtherServices />
            <GoodsTransportInfo/>
            <FaqSection/>
        </div>
    )
}
