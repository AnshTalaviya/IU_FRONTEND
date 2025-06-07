import React from 'react'
import BikeDeliveryPage from '../components/DeliveryPages/BikeDeliveryPage/BikeDeliveryPage'
import TwoWheelerCard from '../components/DeliveryPages/BikeDeliveryPage/TwoWheelerCard'
import OtherServices from '../components/DeliveryPages/BikeDeliveryPage/OtherServices'
import GoodsTransportInfo from '../components/DeliveryPages/BikeDeliveryPage/GoodsTransportInfo'
import FaqSection from '../components/DeliveryPages/BikeDeliveryPage/FaqSection'

const BikeDelivery = () => {

    return (
        <div>
            <BikeDeliveryPage />
            <TwoWheelerCard />
            <OtherServices/>
            <GoodsTransportInfo/>
            <FaqSection/>
        </div>
    )
}

export default BikeDelivery
