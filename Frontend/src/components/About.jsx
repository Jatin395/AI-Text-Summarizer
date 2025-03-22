import React from 'react';

function About() {
  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
      {/* Heading */}
      <h1 style={{ color: '#4CAF50', fontSize: '36px', marginBottom: '20px' }}>
        Welcome to Our Website!
      </h1>
      <p style={{ fontSize: '18px', color: '#555', lineHeight: '1.6' }}>
        We are committed to providing the best service and experience for our users. If you have any questions or would like to reach out, feel free to get in touch with us.
      </p>
      
      {/* Contact Information Section */}
      <div style={{ marginTop: '30px', fontSize: '18px' }}>
        <h3 style={{ color: '#333', marginBottom: '10px' }}>Contact Us</h3>
        <p style={{ color: '#555' }}>You can email us at:</p>
        <a href="mailto:contact@example.com" style={{ fontSize: '20px', color: '#007bff', textDecoration: 'none' }}>
          contact@example.com
        </a>
      </div>
    </div>
  );
}

export default About;
