import React from 'react';

const SkillsQualifications = ({ formData, handleChange }) => {
  return (
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
            marginBottom: '5px',
            color: '#2b6777',
          }}
        >
          Skills:
        </label>
        <textarea
          name="skills"
          value={formData.skills}
          onChange={handleChange}
          placeholder="List required skills, e.g., Stakeholder Management, Collaboration..."
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

      <div style={{ marginBottom: '15px' }}>
        <label
          style={{
            display: 'block',
            fontSize: '16px',
            fontWeight: 'bold',
            marginBottom: '5px',
            color: '#2b6777',
          }}
        >
          Qualifications:
        </label>
        <textarea
          name="qualifications"
          value={formData.qualifications}
          onChange={handleChange}
          placeholder="Enter qualifications, experience, education..."
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
    </div>
  );
};

export default SkillsQualifications;
