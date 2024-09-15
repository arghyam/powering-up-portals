import React from 'react';

const ContactInfo = () => (
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
      Registration Link:
    </label>
    <input
      type="url"
      placeholder="Paste the registration link"
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
      Contact Information:
    </label>
    <input
      type="text"
      placeholder="Organization Name"
      style={{
        width: '100%',
        padding: '10px',
        marginBottom: '10px',
        fontSize: '16px',
        borderRadius: '8px',
        border: '1px solid #ccc',
        boxSizing: 'border-box',
      }}
    />
    <input
      type="text"
      placeholder="Phone Number"
      style={{
        width: '100%',
        padding: '10px',
        marginBottom: '10px',
        fontSize: '16px',
        borderRadius: '8px',
        border: '1px solid #ccc',
        boxSizing: 'border-box',
      }}
    />
    <input
      type="email"
      placeholder="Email Address"
      style={{
        width: '100%',
        padding: '10px',
        marginBottom: '10px',
        fontSize: '16px',
        borderRadius: '8px',
        border: '1px solid #ccc',
        boxSizing: 'border-box',
      }}
    />
    <input
      type="url"
      placeholder="Website"
      style={{
        width: '100%',
        padding: '10px',
        fontSize: '16px',
        borderRadius: '8px',
        border: '1px solid #ccc',
        boxSizing: 'border-box',
      }}
    />
  </div>
);

export default ContactInfo;
