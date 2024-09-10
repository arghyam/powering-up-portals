

import React, { useEffect, useState } from "react";

const UserPage = () => {
  const [userData, setUserData] = useState(null);


  const fetchUserData = async () => {
    try {
      const response = await fetch("/api/api/auth/v1/users/me"); 
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };


  useEffect(() => {
    fetchUserData();
  }, []);

  
  const pageStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f4f4f4",
  };

  const cardStyle = {
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "300px",
    textAlign: "center",
  };

  const headingStyle = {
    fontSize: "24px",
    marginBottom: "10px",
  };

  const textStyle = {
    fontSize: "16px",
    marginBottom: "8px",
  };

  const sessionStyle = {
    fontSize: "14px",
    color: "#888",
  };

  // Display loading while data is being fetched
  if (!userData) {
    return <div style={pageStyle}>Loading...</div>;
  }

  // Destructure data from the API response
  const { user, activeSessionsCount, source } = userData;

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <h2 style={headingStyle}>User Info</h2>
        <p style={textStyle}>
          <strong>ID:</strong> {user.id}
        </p>
        <p style={textStyle}>
          <strong>Name:</strong> {user.name || "Not provided"}
        </p>
        <p style={textStyle}>
          <strong>Email:</strong> {user.email}
        </p>
        <p style={textStyle}>
          <strong>Username:</strong> {user.username}
        </p>
        <p style={textStyle}>
          <strong>Verification Status:</strong> {user.verificationStatus}
        </p>
        <p style={textStyle}>
          <strong>Active Sessions:</strong> {activeSessionsCount}
        </p>
        <p style={sessionStyle}>
          <strong>Source:</strong> {source}
        </p>
      </div>
    </div>
  );
};

export default UserPage;
