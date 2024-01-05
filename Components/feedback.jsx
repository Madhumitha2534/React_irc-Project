import React from 'react';

const HomePage = () => {
  return (
    <div style={styles.container}>
      <h1>Welcome to GIFTOO</h1>
      <p>Discover a World of Flavors, GIFT to your Favourite person</p>

      <section style={styles.featuresSection}>
        <div style={{ ...styles.feature, backgroundColor: '#e1f5fe' }}>
          <h2>GIFTS: small gestures,big impacts</h2>
          <p>Gifts are the language of love and thoughtfulness.</p>
        </div>

        <div style={{ ...styles.feature, backgroundColor: '#ffcc00' }}>
          <h2>Customerize your Gifts</h2>
          <p>The magic of a gift lies in its surprise.</p>
        </div>

        <div style={{ ...styles.feature, backgroundColor: '#ffd180' }}>
          <h2>Quick and Reliable Delivery</h2>
          <p>Gifts create connections that last a lifetime.</p>
        </div>
      </section>

      

      
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
  },
  featuresSection: {
    display: 'flex',
    justifyContent: 'space-around',
    margin: '30px 0',
  },
  feature: {
    flex: '1',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    margin: '0 10px',
  },
  howItWorksSection: {
    margin: '30px 0',
  },
  communitySection: {
    margin: '30px 0',
  },
  readyToIndulgeSection: {
    margin: '30px 0',
  },
};

export default HomePage;