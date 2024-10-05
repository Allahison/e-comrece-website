import React from 'react';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>Muhammad Arslan</h2>
        <p>&copy; {new Date().getFullYear()} Hussain Garment . All rights reserved.</p>
        <div className="social-links">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
