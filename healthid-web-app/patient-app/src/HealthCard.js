import React from 'react';
import './HealthCard.css';

function HealthCard() {
  // Sample patient data (will come from database later)
  const patient = {
    name: 'Rajesh Kumar Sharma',
    healthId: '1234-5678-9012-3456',
    bloodGroup: 'O+',
    age: 39,
    phone: '+91-9876543210'
  };

  return (
    <div className="health-card-page">
      <div className="card-container">
        <div className="card-header">
          <h2>My Health ID</h2>
        </div>

        <div className="health-card">
          <div className="card-logo">🏥</div>
          
          <h1 className="patient-name">{patient.name}</h1>
          
          <div className="health-id">
            <label>Health ID</label>
            <div className="id-number">{patient.healthId}</div>
          </div>

          <div className="qr-placeholder">
            <div className="qr-box">QR CODE</div>
            <p>Scan at any hospital</p>
          </div>

          <div className="patient-details">
            <div className="detail-item">
              <span className="label">Blood Group</span>
              <span className="value">{patient.bloodGroup}</span>
            </div>
            <div className="detail-item">
              <span className="label">Age</span>
              <span className="value">{patient.age} years</span>
            </div>
            <div className="detail-item">
              <span className="label">Phone</span>
              <span className="value">{patient.phone}</span>
            </div>
          </div>
        </div>

        <div className="action-buttons">
          <button className="btn-primary">View Medical History</button>
          <button className="btn-secondary">Edit Profile</button>
        </div>
      </div>
    </div>
  );
}

export default HealthCard;
