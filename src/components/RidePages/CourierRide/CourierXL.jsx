import React, { useState } from "react";
import ConfirmRide from "../../RideBooking/ConfirmRide";
import {  FaTruck } from "react-icons/fa";
import { useRide } from "../../../contexts/RideContext";

const CourierXL = () => {
  const { pickupLocation, dropLocation } = useRide();


  const [selectedMethod, setSelectedMethod] = useState(0);
  const [showAddPayment, setShowAddPayment] = useState(false);
  const [paymentMethods, setPaymentMethods] = useState([
    { title: "Axis Bank UPI", detail: "user@axis", icon: "💳" },
    { title: "ICIC Debit Card", detail: "", icon: "💳" },
    { title: "user@upi", icon: "💳" },
  ]);
  
  const fareDetails = [
    { label: "Base fare", amount: 130 },
    { label: "Distance charge", amount: 110 },
    { label: "Time charge", amount: 35 },
    { label: "Taxes & fees", amount: 24 },
  ];
  
  const totalFare = fareDetails.reduce((sum, item) => sum + item.amount, 0);
  
  const handleAddPayment = (newMethod) => {
    const updated = [...paymentMethods, newMethod];
    setPaymentMethods(updated);
    setSelectedMethod(updated.length - 1);
    setShowAddPayment(false);
  };
  
  return (
    <ConfirmRide
    pickupLocation={pickupLocation}
    dropLocation={dropLocation}
    rideType="GreenXL"
    eta="7 mins"
      fareDetails={fareDetails}
      totalFare={totalFare}
      paymentMethods={paymentMethods}
      selectedMethod={selectedMethod}
      onSelectMethod={setSelectedMethod}
      onShowAddPayment={() => setShowAddPayment(true)}
      onHideAddPayment={() => setShowAddPayment(false)}
      showAddPayment={showAddPayment}
      onAddPayment={handleAddPayment}
      Route={"/courier-ride"}
      rideIcon={<FaTruck />}

    />
  );
};

export default CourierXL;
