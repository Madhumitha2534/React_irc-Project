import React, { useState } from 'react';

const PaymentPage = () => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (formData.cardNumber && formData.cardHolder && formData.expiryDate && formData.cvv) {
      // Implement your payment processing logic here (e.g., communicate with a payment gateway)
      alert('Payment successful!');
    } else {
      alert('Please fill in all the fields.');
    }
  };

  return (
    <div>
      <header style={{ backgroundColor: '#333', color: 'white', textAlign: 'center', padding: '10px' }}>
        <h1>Gift Portal - Payment</h1>
      </header>

      <div style={{ maxWidth: '600px', margin: '20px auto', backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <form onSubmit={handleFormSubmit}>
          <label>
            Card Number:
            <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleInputChange} />
          </label>

          <label>
            Card Holder:
            <input type="text" name="cardHolder" value={formData.cardHolder} onChange={handleInputChange} />
          </label>

          <label>
            Expiry Date:
            <input type="text" name="expiryDate" value={formData.expiryDate} onChange={handleInputChange} />
          </label>

          <label>
            CVV:
            <input type="text" name="cvv" value={formData.cvv} onChange={handleInputChange} />
          </label>

          <button type="submit" style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px', cursor: 'pointer' }}>
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;
