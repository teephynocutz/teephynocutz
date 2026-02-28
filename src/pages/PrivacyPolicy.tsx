import React from 'react';

const PrivacyPolicy: React.FC = () => {
  const shopName = "Teephynocutz";
  const address = "Long Street, Cape Town";
  const bookingUrl = "https://share.google";

  const containerStyle: React.CSSProperties = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '40px 20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    lineHeight: '1.6',
    color: '#1a1a1a',
  };

  const sectionStyle: React.CSSProperties = { marginBottom: '32px' };
  const headingStyle: React.CSSProperties = { borderBottom: '1px solid #eaeaea', paddingBottom: '8px' };

  return (
    <div style={containerStyle}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Privacy Policy</h1>
      <p style={{ color: '#666' }}>Last Updated: February 28, 2026</p>

      <section style={sectionStyle}>
        <p>
          At <strong>{shopName}</strong>, we are committed to protecting your privacy. This policy explains how our mobile application 
          collects and handles user data for our premium barbering services in {address}.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={headingStyle}>1. Data We Collect</h2>
        <p>Our app collects the following personal information for <strong>App Functionality</strong> and <strong>Account Management</strong>:</p>
        <ul>
          <li><strong>Name:</strong> To identify your booking.</li>
          <li><strong>Phone Number:</strong> To send appointment confirmations and reminders.</li>
        </ul>
      </section>

      <section style={sectionStyle}>
        <h2 style={headingStyle}>2. Third-Party Services</h2>
        <p>
          We use a secure third-party booking system (<a href={bookingUrl} target="_blank" rel="noreferrer">Google Booking</a>) 
          to process your appointments. Your data is handled according to their security standards and is never sold to third parties.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={headingStyle}>3. Data Security & Retention</h2>
        <p>
          All data is encrypted in transit using HTTPS. We retain your booking information only as long as necessary to 
          provide you with grooming services and maintain your client history.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={headingStyle}>4. Data Deletion (User Rights)</h2>
        <p>
          You have the right to request the deletion of your data. To request removal of your personal information 
          from our booking records, please visit us at our {address} location or contact us via our official support channels.
        </p>
      </section>

      <footer style={{ marginTop: '50px', fontSize: '0.9rem', color: '#888' }}>
        <p>&copy; {new Date().getFullYear()} {shopName} Barber Shop. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
