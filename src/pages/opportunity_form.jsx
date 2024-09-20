import React, { useState } from 'react';
import OpportunityDetails from '../components/opportunity_components/opportunity_details';
import JobSummary from '../components/opportunity_components/job_summary';
import Responsibilities from '../components/opportunity_components/responsibilities';
import SkillsQualifications from '../components/opportunity_components/skillsqualification';
import Compensation from '../components/opportunity_components/compensation';
import AdditionalInfo from '../components/opportunity_components/additional_opinfo';

const OpportunityForm = () => {
  const [formData, setFormData] = useState({
    jobTitle: '',
    organization: '',
    postingDate: '',
    location: '',
    reportingTo: '',
    lastDateToApply: '',
    applicationEmail: '',
    mandatorySubjectLine: '',
    jobSummary: '',
    responsibilities: '',
    skills: [],
    qualifications: '',
    compensation: '',
    additionalInfo: '',
    attachment: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        width:'800px',
        maxWidth: '800px',
        margin: '40px auto',
        padding: '30px',
        backgroundColor: '#f4f9f4', // Soft background color
        borderRadius: '12px',
        boxShadow: '0 2px 15px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Arial, sans-serif',
        color: '#333',
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          color: '#333', // Consistent color for headings
          fontSize: '28px',
          marginBottom: '20px',
        }}
      >
        Opportunity Submission Form
      </h2>

      <div style={{ color: '#52ab98', marginBottom: '20px' }}>
        <h3 style={{ textAlign: 'center', fontSize: '20px' }}>Opportunity Details</h3>
      </div>
      <OpportunityDetails formData={formData} handleChange={handleChange} />

      <div style={{ color: '#52ab98', marginBottom: '20px' }}>
        <h3 style={{ textAlign: 'center', fontSize: '20px' }}>Job Summary</h3>
      </div>
      <JobSummary formData={formData} handleChange={handleChange} />

      <div style={{ color: '#52ab98', marginBottom: '20px' }}>
        <h3 style={{ textAlign: 'center', fontSize: '20px' }}>Key Responsibilities</h3>
      </div>
      <Responsibilities formData={formData} handleChange={handleChange} />

      <div style={{ color: '#52ab98', marginBottom: '20px' }}>
        <h3 style={{ textAlign: 'center', fontSize: '20px' }}>Skills and Qualifications</h3>
      </div>
      <SkillsQualifications formData={formData} handleChange={handleChange} />

      <div style={{ color: '#52ab98', marginBottom: '20px' }}>
        <h3 style={{ textAlign: 'center', fontSize: '20px' }}>Compensation</h3>
      </div>
      <Compensation formData={formData} handleChange={handleChange} />

      <div style={{ color: '#4a4a4a', fontStyle: 'italic', marginBottom: '20px' }}>
        <AdditionalInfo formData={formData} handleChange={handleChange} />
      </div>

      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <button
          type="submit"
          style={{
            backgroundColor: '#2b6777', // Consistent button color
            color: 'white',
            padding: '12px 24px',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          Submit Opportunity
        </button>
      </div>
    </form>
  );
};

export default OpportunityForm;
