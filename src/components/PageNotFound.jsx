import React from 'react';

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.header}>404 - Page Not Found</h2>
      <p style={styles.text}>The page you're looking for doesn't exist.</p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  header: {
    fontSize: '36px',
    marginBottom: '20px',
  },
  text: {
    fontSize: '18px',
  },
};

export default NotFound;
