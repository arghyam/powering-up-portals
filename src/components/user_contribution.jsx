import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserContribution = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to initiate SSO flow
  const initiateSSO = async () => {
    const clientId = 'e13021365685582946bbad0992459ba155a812580e267873f60f67fe5ec7b3a0'; // Replace with your Client/Integration ID
    const redirectUri = 'https://indiawaterportal-demo.madrid.quintype.io/api/auth/v1/oauth/token';
    const callbackUri = 'https://indiawaterportal-demo.madrid.quintype.io/home';

    const ssoUrl = `/api/auth/v1/oauth/auto-sso/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&callback_uri=${callbackUri}`;

    try {
      // Initiate the SSO call
      const response = await axios.get(ssoUrl, { withCredentials: true });
      console.log('SSO Response:', response.data);

      // Optionally, redirect to callbackUri after successful SSO
      window.location.href = callbackUri;
    } catch (error) {
      console.error('Error during SSO initiation', error);
    }
  };

  useEffect(() => {
    const checkUserAuth = async () => {
      // Parse cookies to check for authentication
      const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
        const [name, value] = cookie.split('=');
        acc[name] = value;
        return acc;
      }, {});

      const qtAuthCookie = cookies['qt-auth'];
      const xQtAuthHeader = cookies['X-QT-AUTH'];

      // If the cookies are missing, initiate SSO flow
      if (!qtAuthCookie && !xQtAuthHeader) {
        initiateSSO(); // Call SSO function if user is not logged in
        return;
      }

      try {
        // Fetch user data from the proxy server using credentials
        const response = await axios.get('/api/auth/v1/users/me', {
          withCredentials: true, // Include cookies for authentication
        });

        // Set user info if the request is successful
        setUserInfo(response.data.user);
        setLoading(false);
      } catch (err) {
        // Handle errors, show message, and redirect to sign-in if needed
        setError('Failed to fetch user data.');
        setLoading(false);
        window.location.href = 'https://indiawaterportal-demo.madrid.quintype.io/sign-in';
      }
    };

    checkUserAuth();
  }, []);

  // Show a loading message while checking authentication
  if (loading) {
    return <div>Loading...</div>;
  }

  // If there's an error, display the error message
  if (error) {
    return <div>{error}</div>;
  }

  // If user info is available, display it
  return (
    <div style={styles.container}>
      <h2>User Contribution</h2>
      <p><strong>ID:</strong> {userInfo.id}</p>
      <p><strong>Name:</strong> {userInfo.name || 'N/A'}</p>
      <p><strong>Email:</strong> {userInfo.email}</p>
      <p><strong>Username:</strong> {userInfo.username}</p>
      <p><strong>Created At:</strong> {new Date(userInfo['created-at']).toLocaleString()}</p>
      <p><strong>Verification Status:</strong> {userInfo['verification-status']}</p>
      <p><strong>Phone Number:</strong> {userInfo['phone-number'] || 'N/A'}</p>
      {/* Add more user-specific info as needed */}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    width: '400px',
    margin: '0 auto',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
};

export default UserContribution;