import React from 'react';

const ResourcePerson = () => (
  <div
    style={{
      marginBottom: '20px',
      padding: '15px',
      borderRadius: '10px',
    }}
  >
    <label
      style={{
        display: 'block',
        fontWeight: 'bold',
        marginBottom: '8px',
        color: '#2b6777', // Dark teal for headings
        fontSize: '16px',
      }}
    >
      Resource Person(s) Name:
    </label>
    <input
      type="text"
      placeholder="Enter the name(s) of resource person(s)"
      style={{
        width: '100%',
        padding: '10px',
        marginBottom: '15px',
        fontSize: '16px',
        borderRadius: '8px',
        border: '1px solid #ccc',
        boxSizing: 'border-box',
      }}
    />

    <label
      style={{
        display: 'block',
        fontWeight: 'bold',
        marginBottom: '8px',
        color: '#2b6777',
        fontSize: '16px',
      }}
    >
      Resource Person(s) Experience:
    </label>
    <textarea
      placeholder="Describe the resource person(s) experience"
      rows="4"
      style={{
        width: '100%',
        padding: '10px',
        fontSize: '16px',
        borderRadius: '8px',
        border: '1px solid #ccc',
        boxSizing: 'border-box',
        resize: 'none',
      }}
    ></textarea>
  </div>
);

export default ResourcePerson;
