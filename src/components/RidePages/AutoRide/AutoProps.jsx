import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ConfirmRide from "../../RideBooking/ConfirmRide";
import { FaTruckPickup } from "react-icons/fa";
import { useRide } from "../../../contexts/RideContext";

const AutoProps = () => {
  const { pickupLocation, dropLocation } = useRide();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  
  // eslint-disable-next-line
  const [pickup, setPickup] = useState("");
  // eslint-disable-next-line
  const [dropoff, setDropoff] = useState("");
  
  useEffect(() => {
    const pickupParam = params.get("pickup");
    const dropoffParam = params.get("dropoff");
    
    if (pickupParam) setPickup(pickupParam);
    if (dropoffParam) setDropoff(dropoffParam);
    // eslint-disable-next-line
  }, [location.search]);
  
  const [selectedMethod, setSelectedMethod] = useState(0);
  const [showAddPayment, setShowAddPayment] = useState(false);
  const [paymentMethods, setPaymentMethods] = useState([
    { title: "HDFC Credit Card", detail: "xxxx 4352", icon: "💳" },
    { title: "ICICI Debit Card", detail: "xxxx 5438", icon: "💳" },
    { title: "user@upi", detail: "", icon: "💳" },
  ]);
  
  const fareDetails = [
    { label: "Base fare", amount: 50 },
    { label: "Distance charge", amount: 60 },
    { label: "Time charge", amount: 10 },
    { label: "Taxes & fees", amount: 9 },
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
      rideType="GreenAuto"
      eta="4 mins"
      fareDetails={fareDetails}
      totalFare={totalFare}
      paymentMethods={paymentMethods}
      selectedMethod={selectedMethod}
      onSelectMethod={setSelectedMethod}
      onShowAddPayment={() => setShowAddPayment(true)}
      onHideAddPayment={() => setShowAddPayment(false)}
      showAddPayment={showAddPayment}
      onAddPayment={handleAddPayment}
      Route={"/auto-ride"}
      rideIcon={<FaTruckPickup size={22} />}

    />
  );
};

export default AutoProps;
