import React, { useState } from 'react';

const ArticleForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    publicationDate: '',
    content: '',
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
        width: '800px',
        maxWidth: '1200px',
        margin: '40px auto',
        padding: '30px',
        backgroundColor: '#e8f4f2', // Soft blue background for the form
        borderRadius: '12px',
        boxShadow: '0 2px 15px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Arial, sans-serif',
        color: '#333', // Darker text for better contrast
      }}

    >
      <h2
        style={{
          textAlign: 'center',
          color: '#52ab98',
          fontSize: '28px',
          marginBottom: '20px',
        }}
      >
        Article Submission Form
      </h2>

      <div style={{ marginBottom: '20px' }}>
        <label
          style={{
            display: 'block',
            fontSize: '16px',
            fontWeight: 'bold',
            marginBottom: '5px',
            color: '#2b6777',
          }}
        >
          Article Title:
        </label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter the title of the article"
          style={{
            width: '100%',
            padding: '10px',
            borderRadius: '8px',
            border: '1px solid #ccc',
          }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label
          style={{
            display: 'block',
            fontSize: '16px',
            fontWeight: 'bold',
            marginBottom: '5px',
            color: '#2b6777',
          }}
        >
          Author:
        </label>
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          placeholder="Enter the author's name"
          style={{
            width: '100%',
            padding: '10px',
            borderRadius: '8px',
            border: '1px solid #ccc',
          }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label
          style={{
            display: 'block',
            fontSize: '16px',
            fontWeight: 'bold',
            marginBottom: '5px',
            color: '#2b6777',
          }}
        >
          Publication Date:
        </label>
        <input
          type="date"
          name="publicationDate"
          value={formData.publicationDate}
          onChange={handleChange}
          style={{
            width: '100%',
            padding: '10px',
            borderRadius: '8px',
            border: '1px solid #ccc',
          }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label
          style={{
            display: 'block',
            fontSize: '16px',
            fontWeight: 'bold',
            marginBottom: '5px',
            color: '#2b6777',
          }}
        >
          Article Content:
        </label>
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          placeholder="Write the content of the article..."
          style={{
            width: '100%',
            padding: '10px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            height: '200px',
            resize: 'vertical',
          }}
        />
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
          Submit Article
        </button>
      </div>
    </form>
  );
};

export default ArticleForm;
