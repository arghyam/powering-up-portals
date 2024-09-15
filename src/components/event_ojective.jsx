import React from 'react';

const EventObjective = () => (
  <div style={{ marginBottom: '20px' }}>
    <label
      style={{
        display: 'block',
        fontSize: '16px',
        fontWeight: 'bold',
        marginBottom: '8px',
        color: '#2b6777',
      }}
    >
      Objective of the Event:
    </label>
    <textarea
      placeholder="Describe the main objective of the event"
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

export default EventObjective;
