// contexts/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Initialize user from localStorage on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem('idharUdharUser');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        setIsAuthenticated(true);
      } catch (e) {
        console.error("Failed to parse user from localStorage", e);
        localStorage.removeItem('idharUdharUser'); // Clear invalid data
      }
    }
  }, []);

  const login = (userData) => {
  setUser(userData);
  setIsAuthenticated(true);
  console.log("AuthContext: User logged in:", userData);
  console.log("AuthContext: isAuthenticated:", true);
};

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('idharUdharUser');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};