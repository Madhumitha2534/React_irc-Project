// LoginSignupPage.js
import React, { useState } from 'react';
import './Login.css';
import TermsAndConditions from './terms';


function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const validateEmail = () => {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = () => {
    // Password should be at least 6 characters long
    return password.length >= 6;
  };

  const validateConfirmPassword = () => {
    // Confirm password should match the password
    return confirmPassword === password;
  };

  const handleLogin = () => {
    // Validate email, password, and terms acceptance for login
    if (!validateEmail() || !validatePassword() || !acceptTerms) {
      alert('Please enter a valid email, password, and accept the terms and conditions.');
      return;
    }

    // Add your login logic here
    console.log('Login clicked');
  };

  const handleSignUp = () => {
    // Validate name, email, password, confirm password, and terms acceptance for signup
    if (!name || !validateEmail() || !validatePassword() || !validateConfirmPassword() || !acceptTerms) {
      alert('Please fill in all fields with valid information and accept the terms and conditions.');
      return;
    }

    // Add your signup logic here
    console.log('Sign up clicked');
  };

  return (
    <div className="App">
      <div className="login-container">
        <div className="left-container">
          <img src="gift.jpg" alt="Background" />
        </div>
        <div className="right-container">
          <h1>{isSignUp ? 'Sign Up' : 'Login'}</h1>
          {isSignUp && (
            <>
              <label>Name</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </>
          )}
          <label>Email</label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          {isSignUp && (
            <>
              <label>Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </>
          )}
          <div className="terms-container">
            <input
              type="checkbox"
              checked={acceptTerms}
              onChange={() => setAcceptTerms(!acceptTerms)}
            />
            <label>
              I accept the <a href="/term" target="_blank" rel="noopener noreferrer">Terms and Conditions</a>.
            </label>
          </div>
          <button onClick={isSignUp ? handleSignUp : handleLogin}>
            {isSignUp ? 'Sign Up' : 'Login'}
          </button>
          <p onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp ? 'Already have an account? Login here.' : "Don't have an account? Sign up here."}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
