import React from 'react';

const EventDetails = () => (
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
      Event Name:
    </label>
    <input
      type="text"
      placeholder="Enter the event name"
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
        fontSize: '16px',
        fontWeight: 'bold',
        marginBottom: '8px',
        color: '#2b6777',
      }}
    >
      Event Date(s) & Time:
    </label>
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: '10px',
        marginBottom: '15px',
      }}
    >
      <input
        type="date"
        placeholder="Start Date"
        style={{
          width: '48%',
          padding: '10px',
          fontSize: '16px',
          borderRadius: '8px',
          border: '1px solid #ccc',
          boxSizing: 'border-box',
        }}
      />
      <input
        type="time"
        placeholder="Start Time"
        style={{
          width: '48%',
          padding: '10px',
          fontSize: '16px',
          borderRadius: '8px',
          border: '1px solid #ccc',
          boxSizing: 'border-box',
        }}
      />
    </div>

    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: '10px',
        marginBottom: '15px',
      }}
    >
      <input
        type="date"
        placeholder="End Date"
        style={{
          width: '48%',
          padding: '10px',
          fontSize: '16px',
          borderRadius: '8px',
          border: '1px solid #ccc',
          boxSizing: 'border-box',
        }}
      />
      <input
        type="time"
        placeholder="End Time"
        style={{
          width: '48%',
          padding: '10px',
          fontSize: '16px',
          borderRadius: '8px',
          border: '1px solid #ccc',
          boxSizing: 'border-box',
        }}
      />
    </div>

    <label
      style={{
        display: 'block',
        fontSize: '16px',
        fontWeight: 'bold',
        marginBottom: '8px',
        color: '#2b6777',
      }}
    >
      Mode of Event:
    </label>
    <select
      style={{
        width: '100%',
        padding: '10px',
        marginBottom: '15px',
        fontSize: '16px',
        borderRadius: '8px',
        border: '1px solid #ccc',
        boxSizing: 'border-box',
      }}
    >
      <option value="online">Online</option>
      <option value="in-person">In-Person</option>
      <option value="hybrid">Hybrid</option>
    </select>

    <label
      style={{
        display: 'block',
        fontSize: '16px',
        fontWeight: 'bold',
        marginBottom: '8px',
        color: '#2b6777',
      }}
    >
      Language of Event:
    </label>
    <select
      style={{
        width: '100%',
        padding: '10px',
        fontSize: '16px',
        borderRadius: '8px',
        border: '1px solid #ccc',
        boxSizing: 'border-box',
      }}
    >
      <option value="english">English</option>
      <option value="hindi">Hindi</option>
      <option value="others">Others</option>
    </select>
  </div>
);

export default EventDetails;
