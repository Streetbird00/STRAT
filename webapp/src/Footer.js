import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2>Stay Anywhere, Feel at Home</h2>
        <p>Discover premium homes, villas, and beach houses tailored for your comfort.</p>
        <button className="footer-cta">Get Started</button>
      </div>

      <div className="footer-links">
        <div>
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <h4>Support</h4>
          <ul>
            <li>Help Center</li>
            <li>Terms</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li>Email: support@bnbclone.com</li>
            <li>Phone: +256 700 123456</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} BnBClone. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;