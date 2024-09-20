import React from 'react';

const Compensation = ({ formData, handleChange }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      
      <label
        style={{
          display: 'block',
          fontWeight: 'bold',
          marginBottom: '5px',
          color: '#2b6777',
        }}
      >
        Compensation Details:
      </label>
      <textarea
        name="compensation"
        value={formData.compensation}
        onChange={handleChange}
        placeholder="Enter compensation details..."
        style={{
          width: '100%',
          minHeight: '100px',
          padding: '10px',
          fontSize: '16px',
          borderRadius: '8px',
          border: '1px solid #ccc',
          boxSizing: 'border-box',
          fontFamily: 'Arial, sans-serif',
        }}
      />
    </div>
  );
};

export default Compensation;
