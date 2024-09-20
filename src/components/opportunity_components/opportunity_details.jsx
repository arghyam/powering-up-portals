import React from 'react';

const OpportunityDetails = ({ formData, handleChange }) => {
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
          Job Title:
        </label>
        <input
          type="text"
          name="jobTitle"
          value={formData.jobTitle}
          onChange={handleChange}
          placeholder="State Engagement Manager - Bihar"
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
          Organization:
        </label>
        <input
          type="text"
          name="organization"
          value={formData.organization}
          onChange={handleChange}
          placeholder="Arghyam"
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
          Posting Date:
        </label>
        <input
          type="date"
          name="postingDate"
          value={formData.postingDate}
          onChange={handleChange}
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
          Location:
        </label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Patna, Bihar"
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
          Reporting To:
        </label>
        <input
          type="text"
          name="reportingTo"
          value={formData.reportingTo}
          onChange={handleChange}
          placeholder="Senior Manager - Programs"
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
          Last Date to Apply:
        </label>
        <input
          type="date"
          name="lastDateToApply"
          value={formData.lastDateToApply}
          onChange={handleChange}
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
          Application Email:
        </label>
        <input
          type="email"
          name="applicationEmail"
          value={formData.applicationEmail}
          onChange={handleChange}
          placeholder="jobs@arghyam.org"
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
          Mandatory Subject Line:
        </label>
        <input
          type="text"
          name="mandatorySubjectLine"
          value={formData.mandatorySubjectLine}
          onChange={handleChange}
          placeholder="Application for the post of State Engagement Manager - Bihar"
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
    </div>
  );
};

export default OpportunityDetails;
