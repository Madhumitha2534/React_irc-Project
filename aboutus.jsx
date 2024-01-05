import React from 'react';

const AboutUs = () => {
  const styles = {
    body: {
      fontFamily: 'Arial, sans-serif',
      margin: 0,
      padding: 0,
      backgroundColor: '#f8f9fa',
    },
    header: {
      backgroundColor: '#343a40',
      color: '#ffffff',
      padding: '1rem',
      textAlign: 'center',
    },
    section: {
      maxWidth: '800px',
      margin: '2rem auto',
      padding: '2rem',
      backgroundColor: '#ffffff',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    heading: {
      color: '#343a40',
    },
    paragraph: {
      color: '#555',
    },
    highlight: {
      color: '#e44d26',
      fontWeight: 'bold',
    },
    image: {
      maxWidth: '100%',
      height: 'auto',
    },
    footer: {
      backgroundColor: '#343a40',
      color: '#ffffff',
      textAlign: 'center',
      padding: '1rem',
      position: 'fixed',
      bottom: 0,
      width: '100%',
    },
  };

  return (
    <div style={styles.body}>

      <header style={styles.header}>
      </header>
        <h1>GIFTOO</h1>

      <section style={styles.section}>
        <h2 style={styles.heading}>About Us</h2>
        <p style={styles.paragraph}>Welcome to GIFTOO, where we believe in making every occasion special and memorable. Our mission is to provide you with a unique and personalized gift-giving experience.</p>
        
        <p>Welcome to Your Gift Portal, where we believe in making every occasion special and memorable. Our mission is to provide you with a unique and personalized gift-giving experience.</p>
        
        <p>At Your Gift Portal, we offer a wide range of customizable gifts for all occasions, from birthdays and anniversaries to holidays and special events. Our team is dedicated to curating a collection of high-quality, thoughtful, and unique products that cater to diverse tastes and preferences.</p>

        <p>We understand the importance of expressing love and appreciation through gifts, and that's why we provide a variety of personalization options. Whether it's adding a custom message, engraving a name, or selecting a unique design, we want your gift to be as special as the person receiving it.</p>

        <p>The Your Gift Portal experience goes beyond just buying a gift. We are committed to ensuring a seamless and enjoyable shopping journey for our customers. Our user-friendly website, secure payment options, and reliable delivery services are designed to make your gift-giving experience hassle-free.</p>

        <p>Thank you for choosing Your Gift Portal for your special moments. We look forward to being a part of your joyous celebrations.</p>


        <p style={styles.highlight}>Feel free to contact us with any questions or feedback. We value your input and strive to make your experience with us exceptional.</p>
      </section>

      <footer style={styles.footer}>
        &copy; 2023 Your Gift Portal. All rights reserved.
      </footer>

    </div>
  );
};

export default AboutUs;
