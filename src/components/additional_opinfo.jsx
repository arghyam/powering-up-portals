import React from 'react';

const AdditionalOpInfo = ({ formData, handleChange }) => {
  return (
    <div>
      <h3>Additional Information</h3>
      <label>Additional Info:</label>
      <textarea
        name="additionalInfo"
        value={formData.additionalInfo}
        onChange={handleChange}
        placeholder="Enter any additional information like diversity encouragement, preferences..."
      />

      <label>Attachment:</label>
      <input
        type="file"
        name="attachment"
        onChange={(e) => handleChange({ target: { name: 'attachment', value: e.target.files[0] } })}
      />
    </div>
  );
};

export default AdditionalOpInfo;
