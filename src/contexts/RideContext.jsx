
import { createContext, useContext, useState } from "react";

const RideContext = createContext();

export const RideProvider = ({ children }) => {
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropLocation, setDropLocation] = useState("");

  return (
    <RideContext.Provider
      value={{ pickupLocation, setPickupLocation, dropLocation, setDropLocation }}
    >
      {children}
    </RideContext.Provider>
  );
};

export const useRide = () => useContext(RideContext);
