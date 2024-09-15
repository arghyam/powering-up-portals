import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useUser } from '../UserContext';

const UserContribution = () => {
  const [selectedForm, setSelectedForm] = useState(null);
  const navigate = useNavigate();
  const { user, loading } = useUser(); 

  console.log('Users',user)

  const getIframeSrc = () => {
    switch (selectedForm) {
      case "event":
        return "https://indiawaterportal-demo.madrid.quintype.io/metype?type=event";
      case "article":
        return "https://indiawaterportal-demo.madrid.quintype.io/metype?type=article";
      case "opportunity":
        return "https://indiawaterportal-demo.madrid.quintype.io/metype?type=opportunity";
      default:
        return "";
    }
  };

  // Handle redirection based on user login status
  useEffect(() => {
    if (!loading && !user) {
      const currentPath = window.location.pathname;
      localStorage.setItem('intendedPath', currentPath);

      window.location.href = 'https://indiawaterportal-demo.madrid.quintype.io/sign-in';
    }
  }, [loading, user]);

  useEffect(() => {
    // After login, check if the intended path exists, and redirect the user to that path
    const intendedPath = localStorage.getItem('intendedPath');
    if (user && intendedPath) {
      localStorage.removeItem('intendedPath'); // Clear the stored path
      navigate(intendedPath); // Redirect the user to the stored path
    }
  }, [user, navigate]);

  if (loading) {
    return <div>Loading...</div>; // Show a loading message while checking login status
  }

  return (
    <div>
      <h2>User Contributions</h2>
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setSelectedForm("event")} style={buttonStyle}>
          Contribute an Event
        </button>
        <button onClick={() => setSelectedForm("article")} style={buttonStyle}>
          Contribute an Article
        </button>
        <button onClick={() => setSelectedForm("opportunity")} style={buttonStyle}>
          Contribute an Opportunity
        </button>
        <button onClick={() => navigate('/use')} style={buttonStyle}>
          My Contribution
        </button>
      </div>
      {selectedForm && (
        <iframe
          src={getIframeSrc()}
          style={{ width: "100%", height: "600px", border: "none" }}
          title="Metype Contribution Form"
        ></iframe>
      )}
    </div>
  );
};

// Inline CSS for buttons
const buttonStyle = {
  marginRight: "10px",
  padding: "10px 20px",
  backgroundColor: "#00796b",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
};

export default UserContribution;
