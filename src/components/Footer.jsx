import React from 'react';
import { Mail } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-item">
          <span className="footer-label">Follow us on social media:</span>
          <a
            href="https://instagram.com/okfitnessacademy"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link-highlight"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="footer-icon">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            @okfitnessacademy
          </a>
        </div>
        <div className="footer-item">
          <span className="footer-label">CONTACT US</span>
          <a
            href="mailto:okfitnessacademy@gmail.com"
            className="footer-link-highlight"
          >
            <Mail size={16} className="footer-icon" />
            okfitnessacademy@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
