import React, { useState } from 'react';
import './App.css';
import HealthCard from './HealthCard'; // ✅ Import the Health Card component

function App() {
  const [phone, setPhone] = useState('');
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOTP] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // ✅ New state

  const handleSendOTP = () => {
    if (phone.length === 10) {
      alert('OTP sent to +91' + phone);
      setShowOTP(true);
    } else {
      alert('Please enter valid 10-digit phone number');
    }
  };

  const handleVerifyOTP = () => {
    if (otp === '123456') {
      // ✅ Instead of alert, log in and show HealthCard
      setIsLoggedIn(true);
    } else {
      alert('Invalid OTP. Try: 123456');
    }
  };

  // ✅ NEW: Once logged in, show HealthCard instead of login screen
  if (isLoggedIn) {
    return <HealthCard />;
  }

  // ✅ Default: Login Screen
  return (
    <div className="App">
      <div className="login-container">
        <div className="logo">🏥</div>
        <h1>National Health ID</h1>
        <p>Your Health, Your Records</p>

        {!showOTP ? (
          <div className="form-section">
            <label>Phone Number</label>
            <div className="phone-input">
              <span className="prefix">+91</span>
              <input
                type="tel"
                placeholder="Enter 10-digit number"
                maxLength="10"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
              />
            </div>
            <button onClick={handleSendOTP} className="primary-button">
              Send OTP
            </button>
          </div>
        ) : (
          <div className="form-section">
            <label>Enter OTP</label>
            <input
              type="text"
              placeholder="6-digit OTP"
              maxLength="6"
              value={otp}
              onChange={(e) => setOTP(e.target.value.replace(/\D/g, ''))}
              className="otp-input"
            />
            <p className="hint">Demo OTP: 123456</p>
            <button onClick={handleVerifyOTP} className="primary-button">
              Verify OTP
            </button>
            <button
              onClick={() => setShowOTP(false)}
              className="secondary-button"
            >
              Change Number
            </button>
          </div>
        )}

        <div className="footer">
          <p>By continuing, you agree to our Terms & Privacy Policy</p>
        </div>
      </div>
    </div>
  );
}

export default App;
