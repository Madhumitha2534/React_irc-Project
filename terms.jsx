// TermsAndConditions.js

import React from 'react';

const TermsAndConditions = () => {
  const styles = {
    container: {
      maxWidth: '800px',
      margin: 'auto',
      padding: '20px',
    },
    heading: {
      fontSize: '24px',
      color: '#333',
    },
    paragraph: {
      fontSize: '16px',
      lineHeight: '1.6',
      color: '#666',
    },
    lastUpdated: {
      fontSize: '14px',
      color: '#888',
      marginTop: '20px',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Terms and Conditions</h1>
      
      <p style={styles.paragraph}>
        Welcome to our gift portal. By accessing and using our services, you agree to comply with and be bound by the following terms and conditions. Please read these terms carefully before using our website.
      </p>

      <h2 style={styles.heading}>1. Use of the Website</h2>
      <p style={styles.paragraph}>
        You agree to use this website for lawful purposes and in a way that does not infringe on the rights of, or restrict or inhibit the use and enjoyment of, this site by any third party.
      </p>

      <h2 style={styles.heading}>2. Privacy Policy</h2>
      <p style={styles.paragraph}>
        Our privacy policy outlines how we collect, use, and protect your personal information. By using our website, you consent to the practices described in the privacy policy.
      </p>

      <h2 style={styles.heading}>3. Products and Services</h2>
      <p style={styles.paragraph}>
        We strive to provide accurate and up-to-date information about our products and services. However, we do not warrant the accuracy, completeness, or reliability of any product descriptions or other content on this site.
      </p>

      {/* Add more sections based on your specific terms and conditions */}

      <p style={styles.lastUpdated}>Last updated: December 21,2023</p>
    </div>
  );
};

export default TermsAndConditions;
