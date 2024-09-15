import React, { useContext } from "react";
import { UserContext } from '../UserContext.jsx'; // Import the context where user data is stored

const Use = () => {
  const { user, activeSessionsCount, source } = useContext(UserContext); // Get user data from global state

  // Inline CSS for the page
  const pageStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
    width: "800px",
    backgroundColor: "#e0f7fa", // Light water-themed background
    fontFamily: "'Roboto', sans-serif",
  };

  const cardStyle = {
    padding: "20px",
    backgroundColor: "#ffffff",
    borderRadius: "15px",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
    width: "350px",
    textAlign: "center",
    border: "1px solid #0288d1", // Blue border to reflect water theme
  };

  const headingStyle = {
    fontSize: "26px",
    marginBottom: "20px",
    color: "#0288d1", // Water blue color
  };

  const textStyle = {
    fontSize: "18px",
    marginBottom: "12px",
    color: "#00796b", // Green for a nature-themed look
  };

  const sessionStyle = {
    fontSize: "16px",
    color: "#00796b", // Green for consistent design
  };

  const profileImageStyle = {
    borderRadius: "50%",
    width: "80px",
    height: "80px",
    marginBottom: "20px",
    border: "2px solid #0288d1", // Blue border for the profile image
  };

  // If no user is logged in, show a loading or message
  if (!user) {
    return <div style={pageStyle}>Loading...</div>;
  }

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        {/* User Avatar */}
        <img
          src="https://via.placeholder.com/80" // Placeholder image
          alt="User Avatar"
          style={profileImageStyle}
        />
        <h2 style={headingStyle}>User Profile</h2>
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
          <strong>Verification Status:</strong> {user.verificationStatus || "Not Verified"}
        </p>
        <p style={textStyle}>
          <strong>Active Sessions:</strong> {activeSessionsCount}
        </p>
        <p style={sessionStyle}>
          <strong>Source:</strong> {source || "Unknown"}
        </p>
      </div>
    </div>
  );
};

export default Use;
