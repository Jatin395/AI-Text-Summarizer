import React from 'react';

function Service() {
  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
      {/* Heading */}
      <h1 style={{ color: '#4CAF50', fontSize: '36px', marginBottom: '20px' }}>
        Our Amazing Service 🌟
      </h1>
      
      {/* Service Description */}
      <p style={{ fontSize: '18px', color: '#555', lineHeight: '1.6' }}>
        We provide an innovative tool that helps you achieve your goals with ease. 
        Whether you're looking to simplify tasks, save time, or get better results, 
        our service is designed to help you every step of the way. 
      </p>

      {/* Summary */}
      <div style={{ marginTop: '30px', fontSize: '18px', color: '#555' }}>
        <h3 style={{ color: '#333', marginBottom: '10px' }}>Summary:</h3>
        <p>
          🚀 Boost productivity, improve efficiency, and unlock new possibilities. 
          Our service is here to support you with cutting-edge features and a user-friendly interface.
        </p>
      </div>
    </div>
  );
}

export default Service;
