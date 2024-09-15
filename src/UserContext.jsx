import React, { createContext, useContext, useState, useEffect } from 'react';

// Create UserContext
export const UserContext = createContext();

// Custom hook to use the user context
export const useUser = () => useContext(UserContext);

// UserProvider component to wrap the app and provide the user context
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch user data
  const checkUserLogin = async () => {
    try {
      const response = await fetch('https://indiawaterportal-demo.madrid.quintype.io/api/auth/v1/users/me', {
        credentials: 'include',
      });
      const data = await response.json();
      if (data.user) {
        setUser(data.user);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  // Check user login when the component mounts
  useEffect(() => {
    checkUserLogin();
  }, []);

  return (
    <UserContext.Provider value={{ user, loading }}>
      {children}
    </UserContext.Provider>
  );
};
