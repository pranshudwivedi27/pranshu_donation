import React from 'react';
import { NAV_ITEMS } from '../data';

function Footer({ onNavigate, onDonate }) {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-col brand">
          <div className="footer-logo">
            <div className="logo-mark small">
              <img src="/AandH_Logo.jpeg" alt="AANDH Foundation logo" />
            </div>
            <div>
              <div className="logo-title">AANDH</div>
              <div className="logo-sub">Foundation</div>
            </div>
          </div>
          <p>
            A grassroots non-profit working on education, health, women
            empowerment, food and environment.
          </p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            {NAV_ITEMS.map((n) => (
              <li key={n.id}>
                <button className="link" onClick={() => onNavigate(n.id)}>
                  {n.label}
                </button>
              </li>
            ))}
            <li>
              <button className="link" onClick={onDonate}>
                Donate Now
              </button>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Get in touch</h4>
          <p>office@aandhfoundation.in</p>
          <p>aandhfoundation2025@gmail.com</p>
          <p>+91 9404604852</p>
          <p>C/O DINESH KUMAR YADAV, SHUBH ENCLAVE 3RD CROSS, Bellandur, Bangalore South, Bangalore- 560103</p>
        </div>

        <div className="footer-col">
          <h4>Legal</h4>
          <ul>
            <li>
              <button className="link" onClick={() => onNavigate('privacy')}>
                Privacy Policy
              </button>
            </li>
            <li>
              <button className="link" onClick={() => onNavigate('terms')}>
                Terms &amp; Conditions
              </button>
            </li>
            <li>
              <button className="link" onClick={() => onNavigate('refund')}>
                Cancellation &amp; Refund Policy
              </button>
            </li>
            <li>
              <button className="link" onClick={() => onNavigate('shipping')}>
                Shipping &amp; Delivery Policy
              </button>
            </li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} AANDH Foundation. All rights reserved.</span>
        <span>Made with ♥ for a better tomorrow.</span>
      </div>


    </footer>
  );
}

export default Footer;
