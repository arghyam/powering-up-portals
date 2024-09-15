import React from 'react';

const TargetAudience = () => (
  <div
    style={{
      marginBottom: '20px',
      padding: '15px',
      borderRadius: '8px',
    }}
  >
    <label
      style={{
        display: 'block',
        fontSize: '16px',
        fontWeight: 'bold',
        marginBottom: '8px',
        color: '#2b6777', // Dark teal for label
      }}
    >
      Target Participants:
    </label>
    <div style={{ marginBottom: '10px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
      <label style={{ display: 'flex', alignItems: 'center' }}>
        <input type="checkbox" style={{ marginRight: '5px' }} /> Technical Staff
      </label>
      <label style={{ display: 'flex', alignItems: 'center' }}>
        <input type="checkbox" style={{ marginRight: '5px' }} /> Engineers
      </label>
      <label style={{ display: 'flex', alignItems: 'center' }}>
        <input type="checkbox" style={{ marginRight: '5px' }} /> Faculty
      </label>
      <label style={{ display: 'flex', alignItems: 'center' }}>
        <input type="checkbox" style={{ marginRight: '5px' }} /> Students
      </label>
    </div>
  </div>
);

export default TargetAudience;
