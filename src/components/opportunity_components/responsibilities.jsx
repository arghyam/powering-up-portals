import React from 'react';

const Responsibilities = ({ formData, handleChange }) => {
  return (
    <div
      style={{
        marginBottom: '20px',
        padding: '15px',
        borderRadius: '8px',
      }}
    >
      
      <textarea
        name="responsibilities"
        value={formData.responsibilities}
        onChange={handleChange}
        placeholder="Detailed description of the role expectations..."
        style={{
          width: '100%',
          padding: '10px',
          fontSize: '16px',
          borderRadius: '8px',
          border: '1px solid #ccc',
          height: '150px',
          resize: 'vertical',
          boxSizing: 'border-box',
        }}
      />
    </div>
  );
};

export default Responsibilities;
