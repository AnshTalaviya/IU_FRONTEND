import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ConfirmRide from "../../RideBooking/ConfirmRide";
import { FaBicycle } from "react-icons/fa";
import { useRide } from "../../../contexts/RideContext";

const GroceryProps = () => {
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
    { title: "HDFC Credit Card", detail: "xxxx 4242", icon: "💳" },
    { title: "ICIC Debit Card", detail: "xxxx 5678", icon: "💳" },
    { title: "user@upi", icon: "💳" },
  ]);

  const fareDetails = [
    { label: "Base fare", amount: 50 },
    { label: "Grocery weight fee", amount: 30 },
    { label: "Delivery distance", amount: 20 },
    { label: "Service fee", amount: 15 },
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
      rideType="GreenBike"
      eta="9 mins"
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
      rideIcon={<FaBicycle />}

    />
  );
};

export default GroceryProps;
