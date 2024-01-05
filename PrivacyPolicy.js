import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>PRIVACY POLICY</h1>
      </header>

      <section style={styles.section}>
        <h2>We take the privacy and security of your personal information seriously.</h2>
        <p>This Privacy Policy describes how we collect, use, and share information about you when you use our services.</p>

        <h3>INFORMATION WE COLLECT</h3>
        <p>We may collect personal information that you provide to us, such as your name, email address, phone number, and payment information. We may also collect information about your use of our services, such as your IP address, browser type, and device type.</p>

        {/* Add other sections following the same structure */}

        <h3>CONTACT US</h3>
        <p>If you have any questions or concerns about our privacy practices or this Privacy Policy, please contact us at <a href="mailto:hello@giftoo.in">hello@giftoo.in</a>.</p>
      </section>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    margin: '0',
    padding: '0',
    backgroundColor: 'white',
    color: '#333',
  },
  header: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px',
    textAlign: 'center',
  },
  section: {
    maxWidth: '800px',
    margin: '20px auto',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
};

export default PrivacyPolicy;
