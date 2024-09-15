import React from 'react';

const JobSummary = ({ formData, handleChange }) => {
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
        Overview:
      </label>
      <textarea
        name="jobSummary"
        value={formData.jobSummary}
        onChange={handleChange}
        placeholder="A brief description of the role and its significance..."
        style={{
          width: '100%',
          padding: '10px',
          fontSize: '16px',
          borderRadius: '8px',
          border: '1px solid #ccc',
          boxSizing: 'border-box',
          minHeight: '100px',
        }}
      />
    </div>
  );
};

export default JobSummary;
