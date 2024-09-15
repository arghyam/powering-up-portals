import React from 'react';

const FormHeader = ({ title, subtitle }) => (
  <div style={{ textAlign: 'center', marginBottom: '20px' }}>
    <h1>{title}</h1>
    <p>{subtitle}</p>
  </div>
);

export default FormHeader;
