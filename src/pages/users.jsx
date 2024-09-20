import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useUser } from '../UserContext'; // Adjust the import path based on your file structure
import { Card, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://www.metype.com/widget/v1.0/talktype.js';  
    script.async = true;

    script.onload = () => {
      
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
    <div style={containerStyle}>
      <div style={sidebarStyle}>
        <h3 style={{ color: '#2b6777' }}>About Us</h3>
        <p>
        India Water Portal is a website that shares knowledge and builds communities around water and related issues in India. Managed by Arghyam, the Portal has become a valuable archive of resources, working papers, reports, data, articles, news, events, opportunities and discussions on water. It has also become a place to share experiences and solutions, to talk to water experts, and to learn about the work that others are doing in sustainable water management in India.
        <hr/>
        India Water Portal was encouraged by the National Knowledge Commission, which proposed the need for knowledge portals in various areas back in 2005. Since then, it has evolved in the spirit of openness and sharing, to become one of the foremost sources of information in India for water, sanitation, agriculture, the environment, climate change, biodiversity, and other related thematic areas.
        </p>
        <p>
          Explore our resources and get involved in making a difference.
        </p>
      </div>
      <div style={contentStyle}>
        <h2 style={{ color: '#2b6777', margin: '40px 0 20px 0' }}>User Contributions</h2>
        {user ? (
          <>
            <div style={buttonContainerStyle}>
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
            <div style={buttonContainerStyle}>
              <button onClick={() => navigate('/use')} style={largerButtonStyle}>
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
            <div id='contribution-container' data-metype-account-id='1003992' data-metype-host='https://www.metype.com/'></div>
          </>
        ) : (
          <>
            <div style={buttonContainerStyle}>
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
            <div style={buttonContainerStyle}>
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
            <div id='contribution-container' data-metype-account-id='1003992' data-metype-host='https://www.metype.com/'></div>
          </>
        )}
        {/* Dummy Stories Section */}
        <Container>
          <h2 style={{ color: '#2b6777', margin: '40px 0 20px 0' }}>Recent Stories</h2>
          <Row style={cardContainerStyle}>
            <Col md={4}>
              <Card style={cardStyle}>
                <Card.Body>
                  <Card.Title>Millets for malnutrition: A women-led initiative</Card.Title>
                  <Card.Text>
                  A millet-based approach to combating malnutrition in Odisha.
                  </Card.Text>
                  <Card.Link href="https://www.indiawaterportal.org/articles/millets-malnutrition-women-led-initiative">Read More</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card style={cardStyle}>
                <Card.Body>
                  <Card.Title>MSMEs: Driving green growth</Card.Title>
                  <Card.Text>
                  PHDCCI Global Summit on Sustainability highlights MSMEs' crucial role.
                  </Card.Text>
                  <Card.Link href="https://www.indiawaterportal.org/articles/msmes-driving-green-growth">Read More</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card style={cardStyle}>
                <Card.Body>
                  <Card.Title>Navigating the renewable frontier</Card.Title>
                  <Card.Text>
                  Scaling India's renewable energy capacity beyond 1,500 gigawatts.
                  </Card.Text>
                  <Card.Link href="https://www.indiawaterportal.org/articles/navigating-renewable-frontier">Read More</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

// Styles
const containerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '20px',
  backgroundColor: '#f4f4f4',
};

const sidebarStyle = {
  flex: '1',
  padding: '20px',
  backgroundColor: '#e0f2f1',
  marginRight: '20px',
  borderRadius: '8px',
};

const contentStyle = {
  flex: '2',
  padding: '20px',
  backgroundColor: '#ffffff',
  borderRadius: '8px',
};

const buttonContainerStyle = {
  marginBottom: "20px",
};

const buttonStyle = {
  marginRight: "10px",
  padding: "15px 30px",
  backgroundColor: "#00796b",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "18px",
};

const largerButtonStyle = {
  marginRight: "10px",
  padding: "15px 30px",
  backgroundColor: "#2b6777",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "18px",
};

const cardContainerStyle = {
  marginTop: '20px',
};

const cardStyle = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

export default UserContribution;
