import React, { useState } from "react";
import ConfirmRide from "../../RideBooking/ConfirmRide";
import { FaTruck } from "react-icons/fa";
import { useRide } from "../../../contexts/RideContext";

const GroceryXL = () => {
  const { pickupLocation, dropLocation } = useRide();
  
  const [selectedMethod, setSelectedMethod] = useState(0);
  const [showAddPayment, setShowAddPayment] = useState(false);
  const [paymentMethods, setPaymentMethods] = useState([
    { title: "HDFC Credit Card", detail: "xxxx 4242", icon: "💳" },
    { title: "ICIC Debit Card", detail: "xxxx 5678", icon: "💳" },
    { title: "user@upi", icon: "💳" },
  ]);

  const fareDetails = [
    { label: "Base fare", amount: 160 },
    { label: "Weight surcharge", amount: 70 },
    { label: "Distance charge", amount: 60 },
    { label: "Taxes & fees", amount: 20 },
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
      eta="8 mins"
      fareDetails={fareDetails}
      totalFare={totalFare}
      paymentMethods={paymentMethods}
      selectedMethod={selectedMethod}
      onSelectMethod={setSelectedMethod}
      onShowAddPayment={() => setShowAddPayment(true)}
      onHideAddPayment={() => setShowAddPayment(false)}
      showAddPayment={showAddPayment}
      onAddPayment={handleAddPayment}
      Route="/grocery-delivery"
      rideIcon={<FaTruck />}

    />
  );
};

export default GroceryXL;
