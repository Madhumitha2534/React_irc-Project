import React from 'react';

const FAQ = () => {
  const containerStyle = {
    maxWidth: '800px',
    margin: 'auto',
    padding: '20px',
    
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff',  // Set text color to be visible against the background
  };

  const faqItemStyle = {
    marginBottom: '20px',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',  // Add some transparency for better text readability
    padding: '15px',
    borderRadius: '8px',
  };

  const headingStyle = {
    textAlign: 'center',
    marginBottom: '30px',
  };

  const questionStyle = {
    fontSize: '18px',
    marginBottom: '10px',
    color: '#fff',
  };

  const answerStyle = {
    fontSize: '16px',
    lineHeight: '1.5',
    color: '#fff',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Frequently Asked Questions</h2>

      <div style={faqItemStyle}>
        <h3 style={questionStyle}>Q: How do I make a reservation?</h3>
        <p style={answerStyle}>
          A: Making a reservation is easy! You can book directly on our website or contact our reservation team at [hotel email/phone number].
        </p>
      </div>

      <div style={faqItemStyle}>
        <h3 style={questionStyle}>Q: What amenities are included with my stay?</h3>
        <p style={answerStyle}>
          A: Our hotel offers a range of amenities, including free Wi-Fi, access to the swimming pool and fitness center, and complimentary breakfast. You can find more details on our amenities page.
        </p>
      </div>

      <div style={faqItemStyle}>
        <h3 style={questionStyle}>Q: Can I modify or cancel my reservation?</h3>
        <p style={answerStyle}>
          A: Yes, you can modify or cancel your reservation depending on the booking conditions. Please check the cancellation policy when making your reservation or contact our customer service for assistance.
        </p>
      </div>

      {/* Add more FAQ items as needed */}
    </div>
  );
};

export default FAQ;