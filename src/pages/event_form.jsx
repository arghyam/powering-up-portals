import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useUser } from '../UserContext'; // Adjust the import path based on your file structure

const UserContribution = () => {
  const [selectedForm, setSelectedForm] = useState(null);
  const navigate = useNavigate();
  const { user, loading } = useUser(); // Destructure user and loading from context

  // Function to return iframe source based on the selected form with dynamic topic_value
  const getIframeSrc = () => {
    const baseURL = "https://staging.metype.com//contribution-editor?account_id=1002996&amp;font_url=&amp;font_family=&amp;";
    switch (selectedForm) {
      case "event":
        return `${baseURL}&topic_type=contribution&topic_value=event`;
      case "article":
        return `${baseURL}&topic_type=contribution&topic_value=article`;
      case "opportunity":
        return `${baseURL}&topic_type=contribution&topic_value=opportunity`;
      default:
        return "";
    }
  };

  useEffect(() => {
    // Dynamically load the Metype script after component mount
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://www.metype.com/widget/v1.0/talktype.js';  // Path to the Metype talktype widget
    script.async = true;
    
    script.onload = () => {
      // Ensure Metype initializes after the script loads
      if (window.talktype) {
        window.talktype(() => {
          window.talktype.contributionWidgetIframe(document.getElementById('contribution-container'));
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div style={{ textAlign: 'center', backgroundColor: '#c6f5ed', padding: '20px' }}>  
      <h2 style={{ color: '#2b6777', margin: '40px 0 20px 0' }}>User Contributions</h2>
      {user ? (
        <>
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
          </div>
          <div style={{ marginBottom: "20px" }}>
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
          {/* Metype container for contributions */}
          <div id='contribution-container' data-metype-account-id='1003992' data-metype-host='https://www.metype.com/'></div>
        </>
      ) : (
        <div>
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
          </div>
          <div style={{ marginBottom: "20px" }}>
            <button onClick={() => navigate('/use')} style={largerButtonStyle}>
              My Contributions
            </button>
          </div>
          {selectedForm && (
            <iframe
              src={getIframeSrc()}
              style={{ width: "100%", height: "600px", border: "none" }}
              title="Metype Contribution Form"
            ></iframe>
          )}
          {/* Metype container for contributions */}
          <div id='contribution-container' data-metype-account-id='1003992' data-metype-host='https://www.metype.com/'></div>
        </div>
      )}
    </div>
  );
};

// Inline CSS for buttons
const buttonStyle = {
  marginRight: "10px",
  padding: "15px 30px",  // Increased padding for bigger buttons
  backgroundColor: "#00796b",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "18px",  // Increased font size
};
const largerButtonStyle = {
  marginRight: "10px",
  padding: "15px 30px",  // Increased padding for bigger buttons
  backgroundColor: "#2b6777",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "18px",  // Increased font size
};

export default UserContribution;
