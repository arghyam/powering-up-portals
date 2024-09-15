import React, { useContext } from 'react';
import { UserContext } from '../UserContext'; // Import the context

const UserProfile = () => {
  // Consume the context
  const { user, activeSessionsCount, source } = useContext(UserContext);

  if (!user) {
    return <div>Loading...</div>; // Show loading while user data is fetched
  }

  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Username: {user.username}</p>
      <p>Verification Status: {user.verificationStatus}</p>
      <p>Active Sessions: {activeSessionsCount}</p>
      <p>Source: {source}</p>
    </div>
  );
};

export default UserProfile;
