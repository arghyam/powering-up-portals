import React from 'react';

const WorkshopContent = () => (
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
      Topics Covered:
    </label>
    <textarea
      placeholder="List the topics that will be covered in the workshop"
      style={{
        width: '100%',
        padding: '10px',
        fontSize: '16px',
        borderRadius: '8px',
        border: '1px solid #ccc',
        boxSizing: 'border-box',
        resize: 'vertical',
      }}
    />
  </div>
);

export default WorkshopContent;
