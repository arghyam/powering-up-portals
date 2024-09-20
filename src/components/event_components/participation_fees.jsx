import React from 'react';

const ParticipationFees = () => (
  <div
    style={{
      marginBottom: '20px',
      padding: '15px',
      borderRadius: '8px',
    }}
  >
    <div style={{ marginBottom: '15px' }}>
      <label
        style={{
          display: 'block',
          fontSize: '16px',
          fontWeight: 'bold',
          marginBottom: '8px',
          color: '#2b6777', // Dark teal for labels
        }}
      >
        Participation Contribution (Before Deadline):
      </label>
      <input
        type="number"
        placeholder="Enter fee before deadline"
        style={{
          width: '100%',
          padding: '10px',
          borderRadius: '8px',
          border: '1px solid #ccc',
          boxSizing: 'border-box',
        }}
      />
    </div>

    <div style={{ marginBottom: '15px' }}>
      <label
        style={{
          display: 'block',
          fontSize: '16px',
          fontWeight: 'bold',
          marginBottom: '8px',
          color: '#2b6777',
        }}
      >
        Participation Contribution (After Deadline):
      </label>
      <input
        type="number"
        placeholder="Enter fee after deadline"
        style={{
          width: '100%',
          padding: '10px',
          borderRadius: '8px',
          border: '1px solid #ccc',
          boxSizing: 'border-box',
        }}
      />
    </div>

    <div style={{ marginBottom: '15px' }}>
      <label
        style={{
          display: 'block',
          fontSize: '16px',
          fontWeight: 'bold',
          marginBottom: '8px',
          color: '#2b6777',
        }}
      >
        Payment Note:
      </label>
      <textarea
        placeholder="Contributions will be used to support water security initiatives."
        style={{
          width: '100%',
          padding: '10px',
          borderRadius: '8px',
          border: '1px solid #ccc',
          boxSizing: 'border-box',
          height: '100px',
          resize: 'vertical',
        }}
      />
    </div>
  </div>
);

export default ParticipationFees;
