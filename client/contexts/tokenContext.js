import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [token, setToken] = useState(null);

  // Function to load token from AsyncStorage on component mount
  const loadTokenFromStorage = async () => {
    try {
      const storedToken = await AsyncStorage.getItem('authToken');
      if (storedToken) {
        setToken(storedToken);
      }
    } catch (error) {
      console.error('Error loading token:', error);
    }
  };
  
  // Load token from storage when the component mounts
  useEffect(() => {
    loadTokenFromStorage();
  }, []);
  

  // Function to update token state and AsyncStorage
  const updateToken = async (newToken) => {
    try {
      if (newToken) {
        await AsyncStorage.setItem('authToken', newToken);
      } else {
        await AsyncStorage.removeItem('authToken');
      }
      setToken(newToken);
    } catch (error) {
      console.error('Error updating token:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ token, updateToken }}>
      {children}
    </AuthContext.Provider>
  );
};
